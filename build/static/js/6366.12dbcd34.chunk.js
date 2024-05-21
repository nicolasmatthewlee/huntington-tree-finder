"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[6366],{16060:(e,t,i)=>{i.d(t,{LG:()=>p,mb:()=>v,yr:()=>c});var s=i(50346),r=i(63919),n=i(85827),o=i(59422),l=i(8794),a=i(96145),h=i(93345),d=i(98433),u=i(96673);function p(e){return e&&"render"in e}function c(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class v extends l.q{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.Tw)();return(0,s.NY)(t,(()=>i.abort())),(0,s.NY)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,r.D_)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,l=n*this.width,a=n*this.height,h=Math.PI*this.rotation/180;(0,r.Tl)(t,t,(0,o.fA)(i,s)),(0,r.Tl)(t,t,(0,o.fA)(l/2,a/2)),(0,r.e$)(t,t,-h),(0,r.Tl)(t,t,(0,o.fA)(-l/2,-a/2)),(0,r.Oe)(t,t,(0,o.fA)(l,a)),(0,r.lw)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){var t;return p(e)?e instanceof a.A?null===(t=e.getRenderedRasterPixels())||void 0===t?void 0:t.renderedRasterPixels:c(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:n,height:o}=this,l=this._texture,a=i.textureUploadManager;await a.enqueueTextureUpdate({data:r,texture:l,width:n,height:o},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(n){(0,s.jH)(n)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,n.vt)()}}_createTexture(e){const t=this.immutable,i=new u.R;return i.internalFormat=t?h.H0.RGBA8:h.Ab.RGBA,i.wrapMode=h.pF.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.g(e,i)}}},96145:(e,t,i)=>{i.d(t,{A:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){var t;const i=this.pixelBlock;if(null==i)return;const s=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(null==s.pixelBlock)return;s.pixelBlock.maskIsAlpha&&(s.pixelBlock.premultiplyAlpha=!0);const r=s.pixelBlock.getAsRGBA(),n=e.createImageData(s.pixelBlock.width,s.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},90104:(e,t,i)=>{i.d(t,{e:()=>x});var s,r=i(35143),n=i(94643),o=i(3975),l=i(50076),a=i(68134),h=i(46053),d=(i(81806),i(76460),i(47249),i(85842)),u=i(68002),p=i(21904),c=i(7464),v=i(97001);let y=s=class extends v.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],y);const g=y;var _=i(47266);let m=class extends v.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],m);const w=m,f=n.A.ofType({key:"type",base:null,typeMap:{rect:g,path:w,geometry:_.A}}),x=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new l.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),a.pc),(0,a.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.pc),(0,a.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),a.pc),(0,a.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.pc),(0,a.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.pc),(0,a.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.pc),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.pc),(0,a.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),a.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,u.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,h.MZ)({type:f,set(e){const t=(0,o.V)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],t.prototype,"updating",null),(0,r._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},91196:(e,t,i)=>{i.d(t,{A:()=>v});var s=i(35143),r=i(91967),n=i(54099),o=i(5632),l=i(76460),a=i(30726),h=i(91291),d=i(46053),u=(i(81806),i(47249),i(85842)),p=i(19451);let c=class extends((0,o.sA)((0,h.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],c.prototype,"visible",null),(0,s._)([(0,d.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.$)("esri.views.layers.LayerView")],c);const v=c},97001:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(35143),r=i(42553),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let l=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],l.prototype,"version",null),l=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],l);const a=l},47266:(e,t,i)=>{i.d(t,{A:()=>v});var s,r=i(35143),n=(i(35238),i(46053)),o=(i(81806),i(76460),i(47249),i(85842)),l=i(89189),a=i(19902),h=i(97001),d=i(76797),u=i(65215);const p={base:l.A,key:"type",typeMap:{extent:d.A,polygon:u.A}};let c=s=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:p,json:{read:a.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],c);const v=c}}]);
//# sourceMappingURL=6366.12dbcd34.chunk.js.map