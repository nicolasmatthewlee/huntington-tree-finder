"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[9386],{99386:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s(35143),n=s(50076),i=s(54901),o=s(68134),a=s(46053),u=(s(81806),s(76460),s(47249),s(85842)),l=s(77725),d=s(13576),h=s(76224),c=s(8203);const p=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(){super(...arguments),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(e){e?this._doPause():this._isUserPaused||this._doResume()}};return(0,r._)([(0,a.MZ)()],t.prototype,"_isUserPaused",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,r._)([(0,a.MZ)({type:c.A})],t.prototype,"filter",void 0),t=(0,r._)([(0,u.$)("esri.layers.mixins.StreamLayerView")],t),t};let _=class extends(p(d.default)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([(0,o.wB)((()=>this.layer.customParameters),(e=>this._worker.streamMessenger.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._worker.streamMessenger.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion()})),(0,o.wB)((()=>this.layer.purgeOptions),(()=>this._update())),(0,o.wB)((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new n.A("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return(0,i.vE)(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&this._worker.streamMessenger.enableEvent(e,!0);const r=super.on(e,t),n=this;return(0,i.hA)((()=>{r.remove(),s&&(n._worker.closed||n.hasEventListener(e)||n._worker.streamMessenger.enableEvent(e,!1))}))}queryLatestObservations(e,t){var s,r,i;if(!(null!==(s=this.layer.timeInfo)&&void 0!==s&&s.endField||null!==(r=this.layer.timeInfo)&&void 0!==r&&r.startField||null!==(i=this.layer.timeInfo)&&void 0!==i&&i.trackIdField))throw new n.A("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return(0,h.E)(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=l.A.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t})),new l.A({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval)}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause()}_doConnect(){this._worker.streamMessenger.connect(),this.resume()}_doClear(){this._worker.streamMessenger.clear(),null==this._refreshInterval&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value)}}}};(0,r._)([(0,a.MZ)()],_.prototype,"pipelineConnectionStatus",void 0),(0,r._)([(0,a.MZ)()],_.prototype,"pipelineErrorString",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],_.prototype,"connectionError",null),(0,r._)([(0,a.MZ)({readOnly:!0})],_.prototype,"_streamConnectionStatus",null),_=(0,r._)([(0,u.$)("esri.views.2d.layers.StreamLayerView2D")],_);const m=_}}]);
//# sourceMappingURL=9386.15869d0b.chunk.js.map