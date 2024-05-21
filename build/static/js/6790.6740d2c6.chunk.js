"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[6790],{76790:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var i=n(35143),o=n(3825),r=n(50076),a=n(76460),s=n(15941),l=n(77717),f=n(50346),u=n(46053),p=(n(81806),n(47249),n(85842)),d=n(20664),c=n(9392),y=n(34111),h=n(76797),m=n(13312),v=n(45308),g=n(25515),A=n(12406),x=n(19502),_=n(31362),w=n(11270),b=n(94729),M=n(5682),I=n(55053),z=n(12482);let E=class extends((0,x.b)((0,w.q)((0,b.A)((0,M.j)((0,l.P)((0,_.d)((0,A.p)(g.A)))))))){constructor(e){super(e),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new m.A({wkid:4326,vcsWkid:115700}),this.fullExtent=new h.A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}_verifyArray(e,t){if(!Array.isArray(e)||e.length<t)return!1;for(const n of e)if("number"!=typeof n)return!1;return!0}_initFullExtent(e){var t,n;const i=null===(t=e.root)||void 0===t?void 0:t.boundingVolume;if(!i)return;if(i.box){const e=null===i||void 0===i?void 0:i.box;if(e[3]>7972671&&e[7]>7972671&&e[11]>7945940)return}const o=null===(n=e.root)||void 0===n?void 0:n.transform,r=(0,c.vt)();if(i.region&&this._verifyArray(i.region,6)){const e=i.region,t=(0,s.KJ)(e[0]),n=(0,s.KJ)(e[1]),o=e[4],r=(0,s.KJ)(e[2]),a=(0,s.KJ)(e[3]),l=e[5];this.fullExtent=new h.A({xmin:t,ymin:n,zmin:o,xmax:r,ymax:a,zmax:l,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const e=i.sphere,t=(0,c.fA)(e[0],e[1],e[2]),n=e[3]/Math.sqrt(3),a=(0,c.vt)();(0,d.f)(a,t,(0,c.fA)(-n,-n,-n));const s=(0,c.vt)();if((0,d.g)(s,t,(0,c.fA)(n,n,n)),o&&this._verifyArray(o,16)){const e=o;(0,d.e)(r,a,e),(0,d.c)(a,r),(0,d.e)(r,s,e),(0,d.c)(s,r)}(0,v.projectBuffer)(a,y.Ro,0,a,m.A.WGS84,0,1),(0,v.projectBuffer)(s,y.Ro,0,s,m.A.WGS84,0,1);const l=(0,c.vt)(),f=(0,c.vt)();(0,d.y)(l,a,s),(0,d.C)(f,a,s),this.fullExtent=new h.A({xmin:l[0],ymin:l[1],zmin:l[2],xmax:f[0],ymax:f[1],zmax:f[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const e=i.box,t=(0,c.fA)(e[0],e[1],e[2]),n=(0,c.fA)(e[3],e[4],e[5]),r=(0,c.fA)(e[6],e[7],e[8]),a=(0,c.fA)(e[9],e[10],e[11]),s=[];for(let i=0;i<8;++i)s.push((0,c.vt)());if((0,d.g)(s[0],t,n),(0,d.g)(s[0],s[0],r),(0,d.g)(s[0],s[0],a),(0,d.z)(s[1],t,n),(0,d.g)(s[1],s[1],r),(0,d.g)(s[1],s[1],a),(0,d.g)(s[2],t,n),(0,d.z)(s[2],s[2],r),(0,d.g)(s[2],s[2],a),(0,d.z)(s[3],t,n),(0,d.z)(s[3],s[3],r),(0,d.g)(s[3],s[3],a),(0,d.g)(s[4],t,n),(0,d.g)(s[4],s[4],r),(0,d.z)(s[4],s[4],a),(0,d.z)(s[5],t,n),(0,d.g)(s[5],s[5],r),(0,d.z)(s[5],s[5],a),(0,d.g)(s[6],t,n),(0,d.z)(s[6],s[6],r),(0,d.z)(s[6],s[6],a),(0,d.z)(s[7],t,n),(0,d.z)(s[7],s[7],r),(0,d.z)(s[7],s[7],a),o&&this._verifyArray(o,16)){const e=o;for(let t=0;t<8;++t)(0,d.e)(s[t],s[t],e)}const l=(0,c.fA)(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),f=(0,c.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let i=0;i<8;++i)(0,v.projectBuffer)(s[i],y.Ro,0,s[i],m.A.WGS84,0,1),(0,d.y)(f,f,s[i]),(0,d.C)(l,l,s[i]);this.fullExtent=new h.A({xmin:f[0],ymin:f[1],zmin:f[2],xmax:l[0],ymax:l[1],zmax:l[2],spatialReference:this.spatialReference})}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null!=e?e.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:e=>{var t;if(null!==(t=e.typeKeywords)&&void 0!==t&&t.includes("IntegratedMesh"))return!0;throw new r.A("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},e)}catch(n){(0,f.QP)(n)}if(this.url){const e=(0,o.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{this._initFullExtent(e.data)}),(e=>{(0,f.QP)(e)}));await e}}async fetchAttributionData(){return this.load().then((()=>({})))}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh 3d tiles layers";(0,z.XF)(a.A.getLogger(this),(0,z.B)(t,"absolute-height",e)),(0,z.XF)(a.A.getLogger(this),(0,z.tW)(t,e))}};(0,i._)([(0,u.MZ)({type:["IntegratedMesh3DTilesLayer"]})],E.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)({type:m.A})],E.prototype,"spatialReference",void 0),(0,i._)([(0,u.MZ)({type:h.A})],E.prototype,"fullExtent",void 0),(0,i._)([(0,u.MZ)(I.Yj)],E.prototype,"elevationInfo",null),(0,i._)([(0,u.MZ)({type:["show","hide"]})],E.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)(I.OZ)],E.prototype,"url",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],E.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),(0,i._)([(0,u.MZ)({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}}}}})],E.prototype,"minScale",void 0),(0,i._)([(0,u.MZ)({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}}}}})],E.prototype,"maxScale",void 0),E=(0,i._)([(0,p.$)("esri.layers.IntegratedMesh3DTilesLayer")],E);const L=E},12482:(e,t,n)=>{n.d(t,{$7:()=>a,B:()=>r,XF:()=>l,tW:()=>s,w7:()=>o});n(31633),n(59097);function i(e){return e?f:u}function o(e,t){return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:i(e).mode}(null!=e&&e.hasZ,t)}function r(e,t,n){return n&&n.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function a(e,t,n){return(null===n||void 0===n?void 0:n.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function s(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function l(e,t){t&&e.warn(".elevationInfo=",t)}const f={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=6790.6740d2c6.chunk.js.map