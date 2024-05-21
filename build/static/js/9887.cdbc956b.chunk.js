"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[9887],{19887:(t,e,s)=>{s.r(e),s.d(e,{default:()=>P});var r=s(4212),i=s(90632),n=s(13312),o=s(86729),a=(s(81806),s(78393),s(42294),s(2413),s(76279),s(31608),s(44135));s(15941),s(80963);class h{constructor(t,e,s){this.uid=t,this.geometry=e,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}class l{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function u(t,e,s,r){if(null!==e&&void 0!==e&&e.size&&null!=s&&t)for(const i in t){if(!e.has(i))continue;const n=t[i];"string"==typeof n&&n.length>s&&(r(i),t[i]="")}}var d=s(98618);function c(t,e){return e}function p(t,e,s,r){switch(s){case 0:return y(t,e+r,0);case 1:return"lowerLeft"===t.originPosition?y(t,e+r,1):function(t,e,s){let{translate:r,scale:i}=t;return r[s]-e*i[s]}(t,e+r,1)}}function f(t,e,s,r){return 2===s?y(t,e,2):p(t,e,s,r)}function _(t,e,s,r){return 2===s?y(t,e,3):p(t,e,s,r)}function m(t,e,s,r){return 3===s?y(t,e,3):f(t,e,s,r)}function y(t,e,s){let{translate:r,scale:i}=t;return r[s]+e*i[s]}class g{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=c,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new l}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,o.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const s of t.features)e(s.geometry)}createSpatialReference(){return new n.A}addField(t,e){t.fields.push(a.A.fromJSON(e));const s=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of s)this[t]=null}}addFeature(t,e){const s=this._options.maxStringAttributeLength,r=this._options.maxStringAttributeFields;u(e.attributes,r,s,(s=>{const r=e.attributes[t.objectIdFieldName];null!=r&&this._missingAttributes.push({objectId:r,attribute:s})})),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:s,queryGeometryType:r}=e,i=(0,d.Ch)(s.clone(),s,!1,!1,this._transform),n=(0,d.zv)(i,r,!1,!1);let o=null;switch(r){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}n.type=o,t.queryGeometryType=r,t.queryGeometry=n}prepareFeatures(t){var e;switch(this._transform=null!==(e=t.transform)&&void 0!==e?e:null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,s)=>this.addCoordinatePoint(t,e,s),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,s)=>this._addCoordinatePolygon(t,e,s),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,s)=>this._addCoordinatePolyline(t,e,s),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,s)=>this._addCoordinateMultipoint(t,e,s),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,r.Xb)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new h((0,i.c)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,s){const r=this._transform?this._applyTransform(this._transform,e,s,0):e;if(null!=r)switch(s){case 0:t.x=r;break;case 1:t.y=r;break;case 2:t.hasZ?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,e){let s=0;return e<=1&&(s=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,s):t}_addCoordinatePolyline(t,e,s){this._dehydratedAddPointsCoordinate(t.paths,e,s)}_addCoordinatePolygon(t,e,s){this._dehydratedAddPointsCoordinate(t.rings,e,s)}_addCoordinateMultipoint(t,e,s){0===s&&t.points.push([]);const r=this._transformPathLikeValue(e,s);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,s){0===s&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,s),i=t[t.length-1],n=this._coordinateBuffer;if(n){if(0===s){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;i.push(new Float64Array(n.buffer,t,this._vertexDimension))}n[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(t){const{hasZ:e,hasM:s}=t;return e&&s?m:e?f:s?_:p}}var b=s(89122);class C{_parseFeatureQuery(t){var e;const s=new g(t.options),r=(0,b.m)(t.buffer,s),i={...r,spatialReference:null===(e=r.spatialReference)||void 0===e?void 0:e.toJSON(),fields:r.fields?r.fields.map((t=>t.toJSON())):void 0,missingAttributes:s.missingAttributes};return Promise.resolve(i)}}function P(){return new C}}}]);
//# sourceMappingURL=9887.cdbc956b.chunk.js.map