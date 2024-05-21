"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[9184],{51344:(e,t,n)=>{function i(e){return null!=a(e)||null!=o(e)}function s(e){return l.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!u.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,i,s;const r=l.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,u=+o.month-1,d=+o.day,h=+(null!==(t=o.hours)&&void 0!==t?t:"0"),c=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(i=o.seconds)&&void 0!==i?i:"0");if(h>23)return null;if(c>59)return null;if(f>59)return null;const p=null!==(s=o.ms)&&void 0!==s?s:"0",m=p?+p.padEnd(3,"0").substring(0,3):0;let y;if(o.isUTC||!o.offsetSign)y=Date.UTC(a,u,d,h,c,f,m);else{const e=+o.offsetHours,t=+o.offsetMinutes;y=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,u,d,h,c,f,m)}return Number.isNaN(y)?null:y}n.d(t,{Br:()=>s,Cq:()=>i,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},70373:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(18690),s=n(30015),r=n(61196);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=d,this._compareMinY=h,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),x.prune(),I.prune(),b.prune(),v.prune()}all(e){this._all(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(g(e,n))for(x.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;g(e,o)&&(n.leaf?t(r):y(e,o)?this._all(r,t):x.push(r))}n=x.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!g(e,t))return!1;for(x.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(g(e,r)){if(t.leaf||y(e,r))return!0;x.push(s)}}t=x.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new F([]),this}remove(e){if(!e)return this;let t,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(e);for(b.clear(),v.clear();n||b.length>0;){var l;if(n||(n=b.pop(),s=b.data[b.length-1],r=null!==(l=v.pop())&&void 0!==l?l:0,o=!0),n.leaf&&(t=(0,i.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),b.push(n),this._condense(b),this;o||n.leaf||!y(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(b.push(n),v.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let n=e;for(I.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else I.pushArray(n.children);n=null!==(i=I.pop())&&void 0!==i?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new F(e.slice(t,n+1));return a(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new E([]);o.height=i;const l=Math.ceil(s/r),u=l*Math.ceil(Math.sqrt(r));_(e,t,n,u,this._compareMinX);for(let a=t;a<=n;a+=u){const t=Math.min(a+u-1,n);_(e,a,t,l,this._compareMinY);for(let n=a;n<=t;n+=l){const s=Math.min(n+l-1,t);o.children.push(this._build(e,n,s,i-1))}}return a(o,this._toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=c(o),l=p(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);b.clear();const r=this._chooseSubtree(s,this._data,t,b);for(r.children.push(e),u(r,s);t>=0&&b.data[t].children.length>this._maxEntries;)this._split(b,t),t--;this._adjustParentBBoxes(s,b,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),l=n.leaf?new F(o):new E(o);l.height=n.height,a(n,this._toBBox),a(l,this._toBBox),t?e.data[t-1].children.push(l):this._splitRoot(n,l)}_splitRoot(e,t){this._data=new E([e,t]),this._data.height=e.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=l(e,0,o,this._toBBox),a=l(e,o,n,this._toBBox),u=m(t,a),d=c(t)+c(a);u<i?(i=u,r=o,s=d<s?d:s):u===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:d,s=e.leaf?this._compareMinY:h;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=l(e,0,t,s),o=l(e,n-t,n,s);let a=f(r)+f(o);for(let l=t;l<n-t;l++){const t=e.children[l];u(r,e.leaf?s(t):t),a+=f(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];u(o,e.leaf?s(t):t),a+=f(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)u(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.qh)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,s){s||(s=new F([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],u(s,e.leaf?i(r):r);return s}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function c(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function m(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,i,s){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=i)continue;const a=n+Math.ceil((t-n)/i/2)*i;(0,r.q)(e,a,n,t,s),o.push(n,a,a,t)}}const x=new s.A,I=new s.A,b=new s.A,v=new s.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class F extends w{constructor(e){super(),this.children=e,this.leaf=!0}}class E extends w{constructor(e){super(),this.children=e,this.leaf=!1}}},33328:(e,t,n)=>{n.d(t,{F:()=>l});var i=n(81806),s=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.w(9,(0,i.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},72547:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(18690),s=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),d=n(33328),h=n(55167),c=n(33376);const f=(0,a.vt)();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new d.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=c.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,i,s]=this.fullBounds;return{xmin:t,ymin:n,xmax:i,ymax:s,spatialReference:(0,h.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(i.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){var t;if(!e)return;const n=e.objectId;if(null==n)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(n);let r;if(this._markedIds.add(n),i?(e.displayId=i.displayId,r=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,e);r=(0,u.jQ)(null!=r?r:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(n,r),this._featuresById.set(n,e)}_upsert(e){var t;const n=null===e||void 0===e?void 0:e.objectId;if(null==n)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const i=this._featuresById.get(n);if(!i)return this._add(e),e;this._markedIds.add(n);const{geometry:r,attributes:a}=e;for(const s in a)i.attributes[s]=a[s];return r&&(i.geometry=r,this._boundsStore.set(n,null!==(t=(0,u.jQ)((0,l.vt)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&void 0!==t?t:null)),i}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},29184:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(3825),s=n(98773),r=n(50076),o=n(76460),a=n(50346),l=n(19902),u=n(80963),d=n(98618),h=n(72547),c=n(24586),f=n(28642),p=n(10907),m=n(40296),y=n(40098),g=n(1900),_=n(6127),x=n(53430),I=n(67478);const b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class v{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[i]=await Promise.all([e.url?this._fetch(null===t||void 0===t?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),s=(0,p.BM)(i,{geometryType:e.geometryType}),o=e.fields||s.fields||[],a=null!=e.hasZ?e.hasZ:s.hasZ,l=s.geometryType;let d=e.objectIdField||s.objectIdFieldName||"__OBJECTID";const c=e.spatialReference||u.KK;let y=e.timeInfo;o===s.fields&&s.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});const v=new g.A(o);let B=v.get(d);B?("esriFieldTypeString"!==B.type&&(B.type="esriFieldTypeOID"),B.editable=!1,B.nullable=!1,d=B.name):(B={alias:d,name:d,type:"string"===s.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(B));const w={};for(const u of o){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new r.A("geojson-layer:invalid-field-name","field name is missing",{field:u});if(!_.m.jsonValues.includes(u.type))throw new r.A("geojson-layer:invalid-field-type",'invalid type for field "'.concat(u.name,'"'),{field:u});if(u.name!==B.name){const e=(0,x.lD)(u);void 0!==e&&(w[u.name]=e)}null==u.length&&(u.length=(0,x._b)(u))}if(y){if(y.startTimeField){const e=v.get(y.startTimeField);e?(y.startTimeField=e.name,e.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const e=v.get(y.endTimeField);e?(y.endTimeField=e.name,e.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const e=v.get(y.trackIdField);e?y.trackIdField=e.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const F=l?(0,m.F0)(l):void 0,E=v.dateFields.length?{timeZoneIANA:I.n$}:null,M={warnings:n,featureErrors:[],layerDefinition:{...b,drawingInfo:null!==F&&void 0!==F?F:void 0,templates:(0,m.e2)(w),extent:void 0,geometryType:l,objectIdField:d,fields:o,hasZ:!!a,timeInfo:y,dateFieldsTimeReference:E}};this._queryEngine=new f.d({fieldsIndex:g.A.fromLayerJSON({fields:o,timeInfo:y,dateFieldsTimeReference:E}),geometryType:l,hasM:!1,hasZ:a,objectIdField:d,spatialReference:c,timeInfo:y,featureStore:new h.A({geometryType:l,hasM:!1,hasZ:a}),cacheSpatialQueries:!0});const S=this._queryEngine.fieldsIndex.requiredFields.indexOf(B);S>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(S,1),this._createDefaultAttributes=(0,m.Vx)(w,d);const T=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T);const j=this._normalizeFeatures(T,M.featureErrors);this._queryEngine.featureStore.addMany(j);const{fullExtent:A,timeExtent:q}=await this._queryEngine.fetchRecomputedExtents();if(M.layerDefinition.extent=A,q){const{start:e,end:t}=q;M.layerDefinition.timeInfo.timeExtent=[e,t]}return M}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,y.$1)(t,n),(0,c.Nk)(e.adds,t),(0,c.Nk)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,s.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.zf)(e)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new r.A("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:i}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=(0,p.bd)(e,{geometryType:t,hasZ:n,objectIdField:i});if(!(0,u.aI)(this._queryEngine.spatialReference,u.KK))for(const r of s)null!=r.geometry&&(r.geometry=(0,d.Ux)((0,c.Cv)((0,d.zv)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),u.KK,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await(0,i.A)(t,{responseType:"json",query:{...n},signal:e})).data;return(0,p.sO)(s),s}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:i}=this._queryEngine,s=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,y.MB)(i,e,r.attributes,!0);o?null===t||void 0===t||t.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[n],s.push(r))}return s}async _applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==t&&void 0!==t&&t.length&&this._applyAddEdits(s,t),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(s,n),null!==i&&void 0!==i&&i.length){for(const e of i)s.deleteResults.push((0,y.bP)(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:a,featureStore:u,fieldsIndex:h}=this._queryEngine,f=[];for(const d of t){if(d.geometry&&i!==(0,l.$B)(d.geometry)){n.push((0,y.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,y.MB)(h,t,d.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,d.attributes),d.attributes=t,null!=d.uid){const t=d.attributes[o];e.uidToObjectId[d.uid]=t}if(null!=d.geometry){var p;const e=null!==(p=d.geometry.spatialReference)&&void 0!==p?p:a;d.geometry=(0,c.Cv)((0,y.CR)(d.geometry,e),e,a)}f.push(d),n.push((0,y.bP)(d.attributes[o]))}}u.addMany((0,d.Di)([],f,i,r,s,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:a,featureStore:u,fieldsIndex:h}=this._queryEngine;for(const p of t){const{attributes:e,geometry:t}=p,m=null===e||void 0===e?void 0:e[o];if(null==m){n.push((0,y.Yx)("Identifier field ".concat(o," missing")));continue}if(!u.has(m)){n.push((0,y.Yx)("Feature with object id ".concat(m," missing")));continue}const g=(0,d.oN)(u.getFeature(m),i,r,s);if(null!=t){var f;if(i!==(0,l.$B)(t)){n.push((0,y.Yx)("Incorrect geometry type."));continue}const e=null!==(f=t.spatialReference)&&void 0!==f?f:a;g.geometry=(0,c.Cv)((0,y.CR)(t,e),e,a)}if(e){const t=(0,y.MB)(h,g.attributes,e);if(t){n.push(t);continue}}u.add((0,d.E2)(g,i,r,s,o)),n.push((0,y.bP)(m))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,c.Nk)(u.KK,e)}catch{throw new r.A("geojson-layer","Projection not supported")}}}},10907:(e,t,n)=>{n.d(t,{BM:()=>w,bd:()=>F,sO:()=>B,xD:()=>d});var i=n(51344),s=n(50076),r=n(80963),o=n(20176),a=n(1484),l=n(53430);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(e){return u[e]}function*h(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function y(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)x(e,i,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){g(e,i[0],n);for(let t=1;t<i.length;t++)_(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;g(e,i[0],n);for(let s=1;s<i.length;s++)_(e,i[s],n);return e}(e,t,n)}}function g(e,t,n){const i=m(t);!function(e){return!p(e)}(i)?x(e,i,n):I(e,i,n)}function _(e,t,n){const i=m(t);!function(e){return p(e)}(i)?x(e,i,n):I(e,i,n)}function x(e,t,n){for(const i of t)b(e,i,n);e.lengths.push(t.length)}function I(e,t,n){for(let i=t.length-1;i>=0;i--)b(e,t[i],n);e.lengths.push(t.length)}function b(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function v(e){switch(typeof e){case"string":return(0,i.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function B(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new s.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const i="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!i||!o.test(i))throw new s.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function w(e){var t,n;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=[],r=new Set,o=new Set;let a,u=!1,p=null,m=!1,{geometryType:y=null}=i,g=!1;for(const x of h(e)){const{geometry:e,properties:t,id:n}=x;if((!e||(y||(y=d(e.type)),d(e.type)===y))&&(u||(u=f(c(e))),m||(m=null!=n,m&&(a=typeof n,t&&(p=Object.keys(t).filter((e=>t[e]===n))))),t&&p&&m&&null!=n&&(p.length>1?p=p.filter((e=>t[e]===n)):1===p.length&&(p=t[p[0]]===n?p:[])),!g&&t)){let e=!0;for(const n in t){if(r.has(n))continue;const i=t[n];if(null==i){e=!1,o.add(n);continue}const a=v(i);if("unknown"===a){o.add(n);continue}o.delete(n),r.add(n);const u=(0,l.rS)(n);u&&s.push({name:u,alias:n,type:a})}g=e}}const _=null!==(t=(0,l.rS)(1===(null===(n=p)||void 0===n?void 0:n.length)&&p[0]||null))&&void 0!==t?t:void 0;if(_)for(const d of s)if(d.name===_&&(0,l.WA)(d)){d.type="esriFieldTypeOID";break}return{fields:s,geometryType:y,hasZ:u,objectIdFieldName:_,objectIdFieldType:a,unknownFields:Array.from(o)}}function F(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:i}=t;for(const r of e){var s;const{geometry:e,properties:l,id:u}=r;if(e&&d(e.type)!==n)continue;const h=l||{};let c;i&&(c=h[i],null==u||c||(h[i]=c=u));const f=new o.Om(e?y(new a.A,e,t):null,h,null,null!==(s=c)&&void 0!==s?s:void 0);yield f}}()}(h(e),t))}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>d,e2:()=>h,f:()=>c});var i=n(81806),s=n(53084),r=n(8298),o=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.o8)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,n)=>{n.d(t,{$1:()=>y,CR:()=>m,MB:()=>c,Yx:()=>l,bP:()=>d});var i=n(51344),s=n(80963),r=n(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new u(e)}const h=new Set;function c(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h.clear();for(const o in n){const s=e.get(o);if(!s)continue;const a=f(s,n[o]);if(h.add(s.name),s&&(i||s.editable)){const e=(0,r.CJ)(s,a);if(e)return l((0,r.uo)(e,s,a));t[s.name]=a}}for(const r of null!==(s=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==s?s:[]){var s;if(!h.has(r.name))return l('missing required field "'.concat(r.name,'"'))}return null}function f(e,t){let n=t;return(0,r.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.vE)(e)&&"string"==typeof t&&(n=(0,i._U)(t)),(0,r.WX)(n)}let p;function m(e,t){if(!e||!(0,s.fn)(t))return e;if("rings"in e||"paths"in e){if(null==p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function y(e,t){!(0,s.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==p&&(p=await Promise.all([n.e(2612),n.e(1669)]).then(n.bind(n,1669))),p}()}}}]);
//# sourceMappingURL=9184.27a01659.chunk.js.map