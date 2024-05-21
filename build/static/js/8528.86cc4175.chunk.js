"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[8528],{68528:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var s=i(35143),r=i(16868),n=i(94643),o=i(68134),a=(i(76460),i(81806),i(47249),i(50076),i(85842)),l=i(5766),p=i(86616),h=i(77725),d=i(90104),u=i(31394),c=i(45992),y=i(91196);let v=class extends((0,d.e)(y.A)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const i=this.layer;return this.graphicsViews.reverse().flatMap((t=>{const s=this._popupTemplates.get(t),r=t.hitTest(e);for(const e of r)e.layer=i,e.sourceLayer=i,e.popupTemplate=s;return r})).map((t=>({type:"graphic",graphic:t,layer:i,mapPoint:e})))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.addAttachHandles([(0,o.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.featureCollections}),(e=>{this._clear();for(const{popupInfo:t,featureSet:i,layerDefinition:s}of e){const e=h.A.fromJSON(i),o=new n.A(e.features),a=s.drawingInfo,l=t?r.A.fromJSON(t):null,d=(0,p.r)(a.renderer),y=new c.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:o,renderer:d,container:new u.A(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=y,this._popupTemplates.set(y,l),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=d.symbol):this.layer.lineSymbol=d.symbol:this.layer.polygonSymbol=d.symbol,this.graphicsViews.push(y),this.container.addChild(y.container)}}),o.Vh),(0,o.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.polygonSymbol}),(e=>{this._graphicsViewMap.polygon.renderer=new l.A({symbol:e})}),o.Vh),(0,o.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.lineSymbol}),(e=>{this._graphicsViewMap.polyline.renderer=new l.A({symbol:e})}),o.Vh),(0,o.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.pointSymbol}),(e=>{this._graphicsViewMap.point.renderer=new l.A({symbol:e})}),o.Vh)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};v=(0,s._)([(0,a.$)("esri.views.2d.layers.GeoRSSLayerView2D")],v);const g=v},90104:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(35143),n=i(94643),o=i(3975),a=i(50076),l=i(68134),p=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),d=i(68002),u=i(21904),c=i(7464),y=i(97001);let v=s=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,h.$)("esri.views.layers.support.ClipRect")],v);const g=v;var m=i(47266);let w=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],w.prototype,"path",void 0),w=(0,r._)([(0,h.$)("esri.views.layers.support.Path")],w);const f=w,_=n.A.ofType({key:"type",base:null,typeMap:{rect:g,path:f,geometry:m.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new _,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:_,set(e){const t=(0,o.V)(e,this._get("clips"),_);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,p.MZ)()],t.prototype,"updating",null),(0,r._)([(0,p.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,h.$)("esri.views.2d.layers.LayerView2D")],t),t}},31394:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(61551),r=i(8995),n=i(13692);class o extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},91196:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(91967),n=i(54099),o=i(5632),a=i(76460),l=i(30726),p=i(91291),h=i(46053),d=(i(81806),i(47249),i(85842)),u=i(19451);let c=class extends((0,o.sA)((0,p.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,h.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,h.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,h.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,h.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,h.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,h.MZ)()],c.prototype,"visible",null),(0,s._)([(0,h.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],c);const y=c},97001:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=i(42553),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let a=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],a);const l=a},47266:(e,t,i)=>{i.d(t,{A:()=>y});var s,r=i(35143),n=(i(35238),i(46053)),o=(i(81806),i(76460),i(47249),i(85842)),a=i(89189),l=i(19902),p=i(97001),h=i(76797),d=i(65215);const u={base:a.A,key:"type",typeMap:{extent:h.A,polygon:d.A}};let c=s=class extends p.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:l.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=8528.86cc4175.chunk.js.map