"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[1365],{1365:(t,e,o)=>{o.r(e),o.d(e,{default:()=>O});var r=o(35143),i=(o(35238),o(50076)),s=o(50346),n=o(90534),a=o(46053),l=o(81806),u=(o(76460),o(47249),o(28379)),p=o(85842),d=o(38451),c=o(49304),y=o(16783),h=o(77725),v=o(76797);let m=class extends c.A{constructor(t){super(t),this.type="csv",this.refresh=(0,s.sg)((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null!==(t=this._connection)&&void 0!==t&&t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return h.A.fromJSON(o)}async queryFeaturesJSON(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:o.count,extent:v.A.fromJSON(o.extent)}}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await(0,y.ho)("CSVSourceWorker",{strategy:(0,l.A)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:o,fields:r,latitudeField:i,longitudeField:s,spatialReference:n,timeInfo:a}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:null===r||void 0===r?void 0:r.map((t=>t.toJSON())),latitudeField:i,longitudeField:s,spatialReference:null===n||void 0===n?void 0:n.toJSON(),timeInfo:null===a||void 0===a?void 0:a.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,r._)([(0,a.MZ)()],m.prototype,"type",void 0),(0,r._)([(0,a.MZ)()],m.prototype,"loadOptions",void 0),(0,r._)([(0,a.MZ)()],m.prototype,"customParameters",void 0),(0,r._)([(0,a.MZ)()],m.prototype,"locationInfo",void 0),(0,r._)([(0,a.MZ)()],m.prototype,"sourceJSON",void 0),(0,r._)([(0,a.MZ)()],m.prototype,"delimiter",void 0),m=(0,r._)([(0,p.$)("esri.layers.graphics.sources.CSVSource")],m);var g=o(40296),f=o(68295),S=o(79453),w=o(13312);function _(t,e){throw new i.A(e,"CSVLayer (title: ".concat(t.title,", id: ").concat(t.id,") cannot be saved to a portal item"))}let F=class extends d.default{constructor(){super(...arguments),this.geometryType="point",this.capabilities=(0,g.f)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=w.A.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}load(t){const e=null!=t?t.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(s.QP).then((async()=>this.initLayerProperties(await this.createGraphicsSource(e))));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){var o;return null!=e.showLabels?e.showLabels:!(null===(o=e.layerDefinition)||void 0===o||null===(o=o.drawingInfo)||void 0===o||!o.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=(0,n.An)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){var e,o,r,i,s;const n=new m({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:null!==(e=this.latitudeField)&&void 0!==e?e:void 0,longitudeField:null!==(o=this.longitudeField)&&void 0!==o?o:void 0,spatialReference:null!==(r=this.spatialReference)&&void 0!==r?r:void 0,timeInfo:null!==(i=this.timeInfo)&&void 0!==i?i:void 0,url:this.url},customParameters:null!==(s=this.customParameters)&&void 0!==s?s:void 0});return this._set("source",n),await n.load({signal:t}),this.read({locationInfo:n.locationInfo,columnDelimiter:n.delimiter},{origin:"service",url:this.parsedUrl}),n}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(f.A.from(t)||this.createQuery()))).then((t=>{if(null!==t&&void 0!==t&&t.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(f.A.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(f.A.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(f.A.from(t)||this.createQuery())))}read(t,e){super.read(t,e),e&&"service"===e.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new i.A("csv-layer:clone","CSVLayer (title: ".concat(this.title,", id: ").concat(this.id,") cannot be cloned"))}async save(t){return _(this,"csv-layer:save")}async saveAs(t,e){return _(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return null!=e&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,r._)([(0,a.MZ)({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"capabilities",void 0),(0,r._)([(0,a.MZ)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],F.prototype,"delimiter",void 0),(0,r._)([(0,a.MZ)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],F.prototype,"editingEnabled",void 0),(0,r._)([(0,a.MZ)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],F.prototype,"fields",void 0),(0,r._)([(0,a.MZ)({type:Boolean,readOnly:!0})],F.prototype,"isTable",null),(0,r._)([(0,u.w)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],F.prototype,"readWebMapLabelsVisible",null),(0,r._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],F.prototype,"latitudeField",void 0),(0,r._)([(0,a.MZ)({type:["show","hide"]})],F.prototype,"listMode",void 0),(0,r._)([(0,a.MZ)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],F.prototype,"locationType",void 0),(0,r._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],F.prototype,"longitudeField",void 0),(0,r._)([(0,a.MZ)({type:["CSV"]})],F.prototype,"operationalLayerType",void 0),(0,r._)([(0,a.MZ)()],F.prototype,"outFields",void 0),(0,r._)([(0,a.MZ)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],F.prototype,"path",void 0),(0,r._)([(0,a.MZ)({json:{read:!1},cast:null,type:m,readOnly:!0})],F.prototype,"source",void 0),(0,r._)([(0,a.MZ)({json:{read:!1},value:"csv",readOnly:!0})],F.prototype,"type",void 0),(0,r._)([(0,a.MZ)({json:{read:S.r,write:{isRequired:!0,ignoreOrigin:!0,writer:S.w}}})],F.prototype,"url",null),F=(0,r._)([(0,p.$)("esri.layers.CSVLayer")],F);const O=F},8298:(t,e,o)=>{o.d(e,{F:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40296:(t,e,o)=>{o.d(e,{F0:()=>a,Vx:()=>p,e2:()=>d,f:()=>c});var r=o(81806),i=o(53084),s=o(8298),n=o(44460);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.Cb:"esriGeometryPolyline"===t?n.yM:n.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(t,e){if((0,r.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let o="this.".concat(e," = null;");for(const e in t)o+="this".concat(l.test(e)?".".concat(e):'["'.concat(e,'"]')," = ").concat(JSON.stringify(t[e]),";");const r=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(o,";\n        }\n      }\n    "))();return()=>new r}catch(o){return()=>({[e]:null,...t})}}function d(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(t)}}]}function c(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:s.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=1365.25795cda.chunk.js.map