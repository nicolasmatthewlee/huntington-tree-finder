"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[5104],{11155:(e,t,o)=>{o.d(t,{M:()=>l});var r=o(35143),s=o(82111),n=o(53666),i=o(46053),p=(o(81806),o(76460),o(47249),o(85842)),a=o(53430),u=o(83982);const l=e=>{let t=class extends e{get timeInfo(){var e;const t=null===(e=this.associatedLayer)||void 0===e?void 0:e.timeInfo;if(null==t)return t;const o=t.clone();return(0,a.sv)(o,this.fieldsIndex),o}set timeInfo(e){(0,a.sv)(e,this.fieldsIndex),this._override("timeInfo",e)}get timeExtent(){var e;return null===(e=this.associatedLayer)||void 0===e?void 0:e.timeExtent}set timeExtent(e){this._override("timeExtent",e)}get timeOffset(){var e;return null===(e=this.associatedLayer)||void 0===e?void 0:e.timeOffset}set timeOffset(e){this._override("timeOffset",e)}get useViewTime(){var e,t;return null===(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.useViewTime)||void 0===e||e}set useViewTime(e){this._override("useViewTime",e)}get datesInUnknownTimezone(){var e,t;return null!==(e=null===(t=this.associatedLayer)||void 0===t?void 0:t.datesInUnknownTimezone)&&void 0!==e&&e}set datesInUnknownTimezone(e){this._override("datesInUnknownTimezone",e)}};return(0,r._)([(0,i.MZ)({type:u.A})],t.prototype,"timeInfo",null),(0,r._)([(0,i.MZ)({type:s.A})],t.prototype,"timeExtent",null),(0,r._)([(0,i.MZ)({type:n.A})],t.prototype,"timeOffset",null),(0,r._)([(0,i.MZ)({type:Boolean,nonNullable:!0})],t.prototype,"useViewTime",null),(0,r._)([(0,i.MZ)({type:Boolean,nonNullable:!0})],t.prototype,"datesInUnknownTimezone",null),t=(0,r._)([(0,p.$)("esri.layers.mixins.TemporalSceneLayer")],t),t}},2395:(e,t,o)=>{o.d(t,{L0:()=>h,Ot:()=>y,W4:()=>a,uV:()=>d});var r=o(35143),s=o(42553),n=o(46053),i=(o(81806),o(76460),o(47249),o(6409)),p=o(85842);let a=class extends s.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,n.MZ)({type:Number})],a.prototype,"nodesPerPage",void 0),(0,r._)([(0,n.MZ)({type:Number})],a.prototype,"rootIndex",void 0),(0,r._)([(0,n.MZ)({type:String})],a.prototype,"lodSelectionMetricType",void 0),a=(0,r._)([(0,p.$)("esri.layer.support.I3SNodePageDefinition")],a);let u=class extends s.oY{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,n.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],u.prototype,"id",void 0),(0,r._)([(0,n.MZ)({type:Number})],u.prototype,"factor",void 0),u=(0,r._)([(0,p.$)("esri.layer.support.I3SMaterialTexture")],u);let l=class extends s.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,n.MZ)({type:[Number]})],l.prototype,"baseColorFactor",void 0),(0,r._)([(0,n.MZ)({type:u})],l.prototype,"baseColorTexture",void 0),(0,r._)([(0,n.MZ)({type:u})],l.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,n.MZ)({type:Number})],l.prototype,"metallicFactor",void 0),(0,r._)([(0,n.MZ)({type:Number})],l.prototype,"roughnessFactor",void 0),l=(0,r._)([(0,p.$)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],l);let d=class extends s.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,i.e)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,r._)([(0,n.MZ)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,r._)([(0,i.e)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,r._)([(0,n.MZ)({type:u})],d.prototype,"normalTexture",void 0),(0,r._)([(0,n.MZ)({type:u})],d.prototype,"occlusionTexture",void 0),(0,r._)([(0,n.MZ)({type:u})],d.prototype,"emissiveTexture",void 0),(0,r._)([(0,n.MZ)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,r._)([(0,n.MZ)({type:l})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,r._)([(0,p.$)("esri.layer.support.I3SMaterialDefinition")],d);let c=class extends s.oY{};(0,r._)([(0,n.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],c.prototype,"name",void 0),(0,r._)([(0,i.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],c.prototype,"format",void 0),c=(0,r._)([(0,p.$)("esri.layer.support.I3STextureFormat")],c);let y=class extends s.oY{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,n.MZ)({type:[c]})],y.prototype,"formats",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,p.$)("esri.layer.support.I3STextureSetDefinition")],y);let v=class extends s.oY{};(0,r._)([(0,i.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],v.prototype,"type",void 0),(0,r._)([(0,n.MZ)({type:Number})],v.prototype,"component",void 0),v=(0,r._)([(0,p.$)("esri.layer.support.I3SGeometryAttribute")],v);let f=class extends s.oY{};(0,r._)([(0,i.e)({draco:"draco"})],f.prototype,"encoding",void 0),(0,r._)([(0,n.MZ)({type:[String]})],f.prototype,"attributes",void 0),f=(0,r._)([(0,p.$)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let m=class extends s.oY{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,n.MZ)({type:Number})],m.prototype,"offset",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"position",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"normal",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"uv0",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"color",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"uvRegion",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"featureId",void 0),(0,r._)([(0,n.MZ)({type:v})],m.prototype,"faceRange",void 0),(0,r._)([(0,n.MZ)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,r._)([(0,p.$)("esri.layer.support.I3SGeometryBuffer")],m);let h=class extends s.oY{};(0,r._)([(0,i.e)({triangle:"triangle"})],h.prototype,"topology",void 0),(0,r._)([(0,n.MZ)()],h.prototype,"geometryBuffers",void 0),h=(0,r._)([(0,p.$)("esri.layer.support.I3SGeometryDefinition")],h)},39323:(e,t,o)=>{o.d(t,{L:()=>l});var r=o(55171),s=o(3825),n=o(50076),i=o(50346),p=o(13096),a=o(65308),u=o(70652);async function l(e,t){var o,l;const y=(0,p.qg)(e);if(!y)throw new n.A("invalid-url","Invalid scene service url");const v={...t,sceneServerUrl:y.url.path,layerId:null!==(o=y.sublayer)&&void 0!==o?o:void 0};if(null!==(l=v.sceneLayerItem)&&void 0!==l||(v.sceneLayerItem=await async function(e){const t=(await d(e)).serviceItemId;if(!t)return null;const o=new u.default({id:t,apiKey:e.apiKey}),n=await async function(e){const t=null===r.id||void 0===r.id?void 0:r.id.findServerInfo(e.sceneServerUrl);if(null!==t&&void 0!==t&&t.owningSystemUrl)return t.owningSystemUrl;const o=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await(0,s.A)(o,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(f){(0,i.QP)(f)}return null}(e);null!=n&&(o.portal=new a.A({url:n}));try{return o.load({signal:e.signal})}catch(m){return(0,i.QP)(m),null}}(v)),null==v.sceneLayerItem)return c(v.sceneServerUrl.replace("/SceneServer","/FeatureServer"),v);const f=await async function(e){let{sceneLayerItem:t,signal:o}=e;if(!t)return null;try{const e=(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:o})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const r=new u.default({portal:e.portal,id:e.id});return await r.load(),r}catch(r){return(0,i.QP)(r),null}}(v);if(null===f||void 0===f||!f.url)throw new n.A("related-service-not-found","Could not find feature service through portal item relationship");v.featureServiceItem=f;const m=await c(f.url,v);return m.portalItem=f,m}async function d(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const o=await(0,s.A)(e.sceneServerUrl,t);e.rootDocument=o.data}catch{e.rootDocument={}}return e.rootDocument}async function c(e,t){var o,r,i;const a=(0,p.qg)(e);if(!a)throw new n.A("invalid-feature-service-url","Invalid feature service url");const u=a.url.path,l=t.layerId;if(null==l)return{serverUrl:u};const c=d(t),y=t.featureServiceItem?await t.featureServiceItem.fetchData("json"):null,v=null===(o=(null===y||void 0===y||null===(r=y.layers)||void 0===r?void 0:r[0])||(null===y||void 0===y||null===(i=y.tables)||void 0===i?void 0:i[0]))||void 0===o?void 0:o.customParameters,f=e=>{const o={query:{f:"json",...v},responseType:"json",authMode:e,signal:t.signal};return(0,s.A)(u,o)},m=f("anonymous").catch((()=>f("no-prompt"))),[h,I]=await Promise.all([m,c]),g=null===I||void 0===I?void 0:I.layers,_=h.data&&h.data.layers;if(!Array.isArray(_))throw new Error("expected layers array");if(Array.isArray(g)){for(let s=0;s<Math.min(g.length,_.length);s++)if(g[s].id===l)return{serverUrl:u,layerId:_[s].id}}else if(null!=l&&l<_.length)return{serverUrl:u,layerId:_[l].id};throw new Error("could not find matching associated sublayer")}},16981:(e,t,o)=>{o.d(t,{P:()=>r});const r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},12482:(e,t,o)=>{o.d(t,{$7:()=>i,B:()=>n,XF:()=>a,tW:()=>p,w7:()=>s});o(31633),o(59097);function r(e){return e?u:l}function s(e,t){return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:r(e).mode}(null!=e&&e.hasZ,t)}function n(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function i(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function p(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function a(e,t){t&&e.warn(".elevationInfo=",t)}const u={mode:"absolute-height",offset:0},l={mode:"on-the-ground",offset:null}},2257:(e,t,o)=>{o.d(t,{D8:()=>n,TO:()=>s});var r=o(53430);async function s(e){var t,o;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==s)return[];const n=await s.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:i}=s,{objectIdField:p,typeIdField:a,globalIdField:u,relationships:l}=e;if(n.includes("*"))return["*"];const d=i?(0,r.eX)(e):[],c=(0,r.DB)(e.fieldsIndex,[...n,...d]);return a&&c.push(a),c&&p&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(p)&&!c.includes(p)&&c.push(p),c&&u&&null!==(o=e.fieldsIndex)&&void 0!==o&&o.has(u)&&!c.includes(u)&&c.push(u),l&&l.forEach((t=>{var o;const{keyField:r}=t;c&&r&&(null===(o=e.fieldsIndex)||void 0===o?void 0:o.has(r))&&!c.includes(r)&&c.push(r)})),c}function n(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=5104.74799ca2.chunk.js.map