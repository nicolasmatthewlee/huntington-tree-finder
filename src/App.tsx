import { useEffect, useRef } from "react";

import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Print from "@arcgis/core/widgets/Print.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Search from "@arcgis/core/widgets/Search.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource.js";
import Query from "@arcgis/core/rest/support/Query.js";

import HUNTINGON_LOGO from "assets/logo_hz.png";

const App = () => {
  const mapViewRef = useRef<null | MapView>(null);

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
    });
    mapView.zoom = 5;
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
        options.target.scale = 1500; // Override the default zoom level
        return view.goTo(options.target);
      },
    });
    mapView.ui.add(locateWidget, "top-left");

    // 5. add search widget
    const getUniqueSuggestions = async (layer: FeatureLayer, query: any) => {
      // 1. create query
      const escapedSuggestTerm = query.suggestTerm.replace(/'/g, "''");
      const q = new Query({
        where: `ScientificName LIKE '%${escapedSuggestTerm}%'`,
        outFields: ["*"], // fields to return
        returnGeometry: false,
      });
      // 2. execute query
      const { features } = await layer.queryFeatures(q);
      // 3. assemble set of results
      const uniqueNames = new Set<string>();
      const suggestions = [];
      for (const feature of features) {
        const name = feature.attributes["ScientificName"];
        if (!uniqueNames.has(name)) {
          uniqueNames.add(name);
          suggestions.push({
            key: name,
            text: name,
            sourceIndex: query.sourceIndex,
          });
        }
      }
      return suggestions;
    };

    const getResults = async (
      layer: FeatureLayer,
      query: any
    ): Promise<__esri.SearchResult[]> => {
      // 1. create query
      console.log(query);
      const escapedSuggestTerm = query.suggestResult.text.replace(/'/g, "''");
      const q = new Query({
        returnGeometry: true,
        where: `${"ScientificName"} = '${escapedSuggestTerm}'`,
        outFields: query.outFields,
      });
      // 2. execute query
      const { features } = await layer.queryFeatures(q);
      // 3. assemble results
      const results = features.map((feature) => ({
        feature: feature,
        name: feature.attributes["ScientificName"],
        extent: feature.geometry.extent,
        target: feature,
      }));
      return results;
    };

    const setupSearchWidget = async (layer: FeatureLayer) => {
      const searchWidget = new Search({
        view: mapView,
        locationEnabled: false,
        includeDefaultSources: false,
        sources: [
          new LayerSearchSource({
            layer: layer,
            searchFields: ["ScientificName"],
            displayField: "ScientificName",
            exactMatch: false,
            outFields: ["*"],
            name: "Trees",
            placeholder: "Search Trees",
            suggestionsEnabled: true,
            getSuggestions: async (params) => {
              return await getUniqueSuggestions(layer, params);
            },
            getResults: async (params: any): Promise<__esri.SearchResult[]> => {
              return await getResults(layer, params);
            },
            maxSuggestions: 6,
          }),
        ],
      });

      mapView.ui.add(searchWidget, {
        position: "top-right",
        index: 0,
      });
    };

    // when map has loaded, connect the search to the plant layer
    webMap.when(() => {
      const featureLayer = webMap.layers.find(
        (layer) => layer.type === "feature" && layer.title === "Plants"
      ) as FeatureLayer;

      if (featureLayer) {
        setupSearchWidget(featureLayer);
      }
    });
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      {/* header */}
      <div className="flex items-center shadow p-[18px] space-x-[10px] text-[20px] z-10">
        <img src={HUNTINGON_LOGO} alt="The Huntington" className="h-[48px]" />
        <div>|</div>
        <div>Tree Map</div>
      </div>
      {/* map */}
      <div id="mapDiv" className="flex-1 focus:outline-none bg-graph-paper" />
    </div>
  );
};

export default App;
