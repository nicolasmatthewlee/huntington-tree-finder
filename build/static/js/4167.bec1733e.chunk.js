"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[4167],{97467:(t,e,r)=>{r.d(e,{I:()=>n});var s=r(77944);class n{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,s.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},64232:(t,e,r)=>{r.d(e,{g:()=>a});var s=r(9392),n=r(26346),o=r(45308);function a(t,e,r,s){var a,u;if((0,n.canProjectWithoutEngine)(t.spatialReference,r)){var l;i[0]=t.x,i[1]=t.y;const n=t.z;return i[2]=null!==(l=null!==n&&void 0!==n?n:s)&&void 0!==l?l:0,(0,o.projectBuffer)(i,t.spatialReference,0,e,r,0,1)}const c=(0,n.tryProjectWithZConversion)(t,r);return!!c&&(e[0]=null===c||void 0===c?void 0:c.x,e[1]=null===c||void 0===c?void 0:c.y,e[2]=null!==(a=null!==(u=null===c||void 0===c?void 0:c.z)&&void 0!==u?u:s)&&void 0!==a?a:0,!0)}const i=(0,s.vt)()},10156:(t,e,r)=>{r.r(e),r.d(e,{assetMapFromAssetMapsJSON:()=>y,extractMesh:()=>g,meshFeatureSetFromJSON:()=>d});var s=r(39356),n=r(76460),o=r(87663),a=r(76797),i=r(58666),u=r(13904),l=r(13312),c=r(32186),f=r(57045),h=r(19463),m=r(77725);const p=()=>n.A.getLogger("esri.rest.support.meshFeatureSet");function d(t,e,r){var n;const o=r.features;r.features=[],delete r.geometryType;const a=m.A.fromJSON(r);if(a.geometryType="mesh",!r.assetMaps)return a;const i=y(e,r.assetMaps),u=null!==(n=t.sourceSpatialReference)&&void 0!==n?n:l.A.WGS84,c=r.globalIdFieldName,{outFields:f}=t,h=null!=f&&f.length>0?(p=f.includes("*")?null:new Set(f),t=>{let{attributes:e}=t;if(!e)return{};if(!p)return e;for(const r in e)p.has(r)||delete e[r];return e}):()=>({});var p;for(const l of o){const t=g(l,c,u,e,i);null!=t&&a.features.push(new s.A({geometry:t,attributes:h(l)}))}return a}function g(t,e,r,s,n){const o=t.attributes[e],l=n.get(o);if(null==l)return p().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",t),null;if(!t.geometry)return p().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",t),null;const h=function(t,e,r){let{attributes:s}=t,{transformFieldRoles:n}=r;const o=s[n.originX],a=s[n.originY],i=s[n.originZ];return new u.A({x:o,y:a,z:i,spatialReference:e})}(t,r,s),m=a.A.fromJSON(t.geometry);m.spatialReference=r;const d=function(t,e){let{transformFieldRoles:r}=e;return new c.A({translation:[t[r.translationX],-t[r.translationZ],t[r.translationY]],rotationAxis:[t[r.rotationX],-t[r.rotationZ],t[r.rotationY]],rotationAngle:t[r.rotationDeg],scale:[t[r.scaleX],t[r.scaleZ],t[r.scaleY]]})}(t.attributes,s),g=r.isGeographic?"local":"georeferenced",_=function(t){const e=Array.from(t.files.values()),r=new Array;for(const s of e){if(s.status!==v.COMPLETED)return null;const t=new Array;for(const e of s.parts){if(!e)return null;t.push(new f.Bq(e.url,e.hash))}r.push(new f.Qp(s.name,s.mimeType,t))}return r}(l);return _?i.A.createWithExternalSource(h,_,{extent:m,transform:d,vertexSpace:g}):i.A.createIncomplete(h,{extent:m,transform:d,vertexSpace:g})}var v,_;function y(t,e){const r=new Map;for(const s of e){const e=s.parentGlobalId;if(null==e)continue;const n=s.assetName,a=s.assetType,i=s.assetHash,u=s.assetURL,l=s.conversionStatus,c=s.seqNo,f=(0,h.Fm)(a,t.supportedFormats);if(!f){p().error("mesh-feature-set:unknown-format","Service returned an asset of type ".concat(a,", but it does not list it as a supported type"));continue}const m=(0,o.tE)(r,e,(()=>({files:new Map})));(0,o.tE)(m.files,n,(()=>({name:n,type:a,mimeType:f,status:E(l),parts:[]}))).parts[c]={hash:i,url:u}}return r}function E(t){switch(t){case"COMPLETED":case"SUBMITTED":return v.COMPLETED;case"INPROGRESS":return v.PENDING;default:return v.FAILED}}(_=v||(v={}))[_.FAILED=0]="FAILED",_[_.PENDING=1]="PENDING",_[_.COMPLETED=2]="COMPLETED"}}]);
//# sourceMappingURL=4167.bec1733e.chunk.js.map