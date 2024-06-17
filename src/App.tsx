import { useState, useEffect, useRef } from "react";

import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Print from "@arcgis/core/widgets/Print.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Query from "@arcgis/core/rest/support/Query.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import HUNTINGON_LOGO from "assets/logo_hz.png";

const App = () => {
  const mapViewRef = useRef<null | MapView>(null);
  const graphicsLayerRef = useRef<null | GraphicsLayer>(null); // holds selected points on search

  const previousSelection = useRef<number | null>(null);
  const [selection, setSelection] = useState<number>(-1);

  // on selection change, set background color of list items
  useEffect(() => {
    // 1. set previous selection to white
    if (previousSelection.current !== null) {
      const element = document.querySelector(
        `#item-${previousSelection.current}`
      );
      if (element) {
        element.classList.remove("bg-gray-100");
      }
    }
    previousSelection.current = selection;
    // 2. set new selection to gray
    const element = document.querySelector(`#item-${selection}`);
    if (!element) return;
    element.classList.add("bg-gray-100");
  }, [selection]);

  useEffect(() => {
    if (mapViewRef.current) return;

    // 1. create map
    const webMap = new WebMap({
      portalItem: {
        id: "6904705bce66483abb422158df337c6e",
      },
    });

    // 2. create view
    const mapView = new MapView({
      map: webMap,
      container: "mapDiv",
      center: [-118.1142751, 34.1284478],
    });
    mapView.zoom = 3;
    mapViewRef.current = mapView;

    // 3. add print widget
    const printWidget = new Print({
      view: mapView,
      container: document.createElement("div"),
      templateOptions: {
        title: "Huntington Tree Map",
      },
    });
    // create custom print button
    const printButton = document.createElement("div");
    printButton.className = "esri-widget--button esri-widget esri-interactive";
    printButton.innerHTML = "<span class='esri-icon-printer'></span>";
    printButton.title = "Print";
    // event listener to show print options on click
    printButton.addEventListener("click", () => {
      const printContainer = printWidget.container as HTMLElement;
      if (printContainer.style.display === "none") {
        printContainer.style.display = "block";
      } else {
        printContainer.style.display = "none";
      }
    });
    mapView.ui.add(printButton, "top-left");
    mapView.ui.add(printWidget.container, "top-left");
    (printWidget.container as HTMLElement).style.display = "none";

    // 4. add locate widget
    const locateWidget = new Locate({
      view: mapView,
      goToOverride: function (view, options) {
        options.target.scale = 1500; // overrides the default zoom level
        return view.goTo(options.target);
      },
    });
    mapView.ui.add(locateWidget, "top-left");

    // 5. add graphics layer for highlighting points from selection
    const graphicsLayer = new GraphicsLayer();
    graphicsLayerRef.current = graphicsLayer;

    // 6. add list
    const filterCriteria =
      "PublicView = 'Yes' AND PlantCondition <> 'Dead' AND PlantCondition <> 'Removed' AND PlantCondition <> 'Unable to Locate' AND PlantCondition <> 'Indistinguishable' AND PlantCondition <> 'Questionable' AND PlantHabit = 'Tree' AND AccessionNumber in ('30470','224','397','1542','2544','2943','13535','2005','23688','1764','3357')";

    const fetchScientificNames = async (layer: FeatureLayer) => {
      const query = new Query({
        where: `${filterCriteria} AND 1=1`,
        outFields: ["ScientificName"],
        returnDistinctValues: true,
        orderByFields: ["ScientificName"],
      });

      const { features } = await layer.queryFeatures(query);
      const names = features.map(
        (feature) => feature.attributes.ScientificName
      );
      return names;
    };

    // after map has loaded
    webMap.when(() => {
      // 1. connect the search to the plant layer
      const featureLayer = webMap.layers.find(
        (layer) => layer.type === "feature" && layer.title === "Plants"
      ) as FeatureLayer;

      if (featureLayer) {
        // add the list container to the map view's UI
        const listContainer = document.createElement("div");
        listContainer.className = "flex flex-col bg-white";
        const listContainerLabel = document.createElement("div");
        listContainerLabel.textContent = "Tree List";
        listContainerLabel.className =
          "text-center font-medium px-[10px] py-[5px] shadow z-10";
        listContainer.appendChild(listContainerLabel);

        // add plants to the list container
        fetchScientificNames(featureLayer)
          .then((names) => {
            names.forEach((e, key) => {
              const item = document.createElement("button");
              item.className = "shadow-sm px-[10px] py-[5px] hover:bg-gray-100";
              item.id = `item-${key}`;
              item.textContent = String(e);
              item.onclick = async () => {
                // 0. clear graphics layer
                graphicsLayer.removeAll();
                // 1. create query
                const q = new Query({
                  returnGeometry: true,
                  where: `${filterCriteria} AND ${"ScientificName"} = '${e}'`,
                });
                // 2. execute query
                const { features } = await featureLayer.queryFeatures(q);
                // 3. add graphics to the graphics layer
                features.forEach((feature) => {
                  const graphic = new Graphic({
                    geometry: feature.geometry,
                    symbol: new SimpleMarkerSymbol({
                      color: [255, 0, 0, 1], // Red color
                      size: 8,
                      outline: {
                        color: [255, 255, 255], // White outline
                        width: 1,
                      },
                    }),
                    attributes: feature.attributes,
                  });
                  graphicsLayer.add(graphic);
                });
                // 4. go to first point and open popup
                if (mapViewRef.current) {
                  mapViewRef.current.goTo({
                    target: features[0].geometry,
                  });

                  mapViewRef.current.openPopup({
                    // features: [features[0]],
                    fetchFeatures: true,
                    location: features[0].geometry,
                  });
                }

                // 5. set selection
                setSelection(key);
              };
              listContainer.appendChild(item);
            });
          })
          .then(() => mapView.ui.add(listContainer, "top-right"));
      }
      // 2. add the graphics layer
      webMap.add(graphicsLayer);
    });
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      {/* header */}
      <div className="flex items-center shadow p-[18px] space-x-[10px] text-[20px] z-10">
        <img src={HUNTINGON_LOGO} alt="The Huntington" className="h-[48px]" />
        <div>|</div>
        <div>Tree Finder</div>
      </div>
      {/* map */}
      <div id="mapDiv" className="flex-1 focus:outline-none bg-graph-paper" />
    </div>
  );
};

export default App;
