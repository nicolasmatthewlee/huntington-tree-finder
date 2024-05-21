"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[4176],{34176:(e,t,o)=>{o.r(t),o.d(t,{queryAssociations:()=>I});var r=o(3825),n=o(63241),s=o(76460),i=o(12899),l=o(54994),a=o(35143),p=o(42553),d=o(46053),u=(o(81806),o(47249),o(85842)),m=o(38424);let c=class extends p.oY{constructor(e){super(e),this.associations=[]}};(0,a._)([(0,d.MZ)({type:[m.A],json:{write:!0}})],c.prototype,"associations",void 0),c=(0,a._)([(0,u.$)("esri.rest.networks.support.QueryAssociationsResult")],c);const w=c;function y(e){const{returnDeletes:t,elements:o,gdbVersion:r,moment:n}=e.toJSON();return{returnDeletes:t,elements:JSON.stringify(o.map((e=>({globalId:e.globalId,networkSourceId:e.networkSourceId,terminalId:e.terminalId})))),types:JSON.stringify(e.types.map((e=>i.XZ.toJSON(e)))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:r,moment:n}}async function I(e,t,o){const i=(0,l.Dl)(e),a={...y(t),f:"json"},p=(0,l.lF)({...i.query,...a}),d=(0,l.jV)(p,{...o,method:"post"}),u="".concat(i.path,"/associations/query"),{data:m}=await(0,r.A)(u,d),c=w.fromJSON(m);return t.types.includes("connectivity")&&(0,n.Lx)(s.A.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),c}},38424:(e,t,o)=>{o.d(t,{A:()=>c});var r=o(35143),n=(o(35238),o(42553)),s=o(46053),i=(o(81806),o(76460),o(47249),o(28379)),l=o(85842),a=o(17707),p=o(12899),d=o(64533),u=o(23701);let m=class extends n.oY{constructor(e){super(e),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(e,t){const o=new d.A;return o.globalId=t.fromGlobalId,o.networkSourceId=t.fromNetworkSourceId,o.terminalId=t.fromTerminalId,o}writeFromNetworkElement(e,t){e&&(t.fromGlobalId=e.globalId,t.fromNetworkSourceId=e.networkSourceId,t.fromTerminalId=e.terminalId)}readToNetworkElement(e,t){const o=new d.A;return o.globalId=t.toGlobalId,o.networkSourceId=t.toNetworkSourceId,o.terminalId=t.toTerminalId,o}writeToNetworkElement(e,t){e&&(t.toGlobalId=e.globalId,t.toNetworkSourceId=e.networkSourceId,t.toTerminalId=e.terminalId)}};(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],m.prototype,"globalId",void 0),(0,r._)([(0,s.MZ)({type:p.XZ.apiValues,json:{type:p.XZ.jsonValues,read:p.XZ.read,write:p.XZ.write}})],m.prototype,"associationType",void 0),(0,r._)([(0,s.MZ)({type:d.A,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],m.prototype,"fromNetworkElement",void 0),(0,r._)([(0,i.w)("fromNetworkElement")],m.prototype,"readFromNetworkElement",null),(0,r._)([(0,a.K)("fromNetworkElement")],m.prototype,"writeFromNetworkElement",null),(0,r._)([(0,s.MZ)({type:d.A,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],m.prototype,"toNetworkElement",void 0),(0,r._)([(0,i.w)("toNetworkElement")],m.prototype,"readToNetworkElement",null),(0,r._)([(0,a.K)("toNetworkElement")],m.prototype,"writeToNetworkElement",null),(0,r._)([(0,s.MZ)({type:u.A,json:{write:!0}})],m.prototype,"geometry",void 0),(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],m.prototype,"errorMessage",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{write:!0}})],m.prototype,"percentAlong",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{write:!0}})],m.prototype,"errorCode",void 0),(0,r._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"isContentVisible",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{write:!0}})],m.prototype,"status",void 0),m=(0,r._)([(0,l.$)("esri.rest.networks.support.Association")],m);const c=m}}]);
//# sourceMappingURL=4176.4df125f9.chunk.js.map