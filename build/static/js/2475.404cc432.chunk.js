"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[2475],{75941:(e,t,r)=>{r.d(t,{O:()=>n});class n{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){var r;return null===(r=this._outer.get(e))||void 0===r?void 0:r.get(t)}set(e,t,r){const n=this._outer.get(e);n?n.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},22475:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>n.g,FramebufferObject:()=>i.H,Program:()=>s.B,ProgramCache:()=>o.J,Renderbuffer:()=>c.l,ShaderCompiler:()=>a.Z,Texture:()=>l.g,VertexArrayObject:()=>h.Z,createContext:()=>d.q,createProgram:()=>f.r,glslifyDefineMap:()=>u.I});var n=r(76718),i=r(12331),s=r(44488),o=r(46082),c=r(62881),a=r(78403),l=r(98433),h=r(36911),u=r(2086),f=r(26373),d=r(28007)},46082:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(75941),i=r(44488);class s{constructor(e){this._rctx=e,this._store=new n.O}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,n){const s=this._store.get(e,t);if(null!=s)return s.ref(),s;const o=new i.B(this._rctx,e,t,r,n);return o.ref(),this._store.set(e,t,o),o}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLProgramObjects:e}}}},26373:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(44488);function i(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new n.B(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},78403:(e,t,r)=>{r.d(t,{Z:()=>n});class n{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error("cannot find shader file ".concat(e));const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let i=n.exec(r);const s=[];for(;null!=i;)s.push({path:i[1],start:i.index,length:i[0].length}),i=n.exec(r);let o=0,c="";return s.forEach((e=>{c+=r.slice(o,e.start),c+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length})),c+=r.slice(o),t.set(e,c),c}_read(e){return this._readFile(e)}}},36911:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(76460),i=r(30726),s=r(78393),o=r(93345),c=r(27207);const a=()=>n.A.getLogger("esri.views.webgl.VertexArrayObject");let l=class{constructor(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._context=e,this._locations=t,this._layout=r,this._buffers=n,this._indexBuffer=i,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*s.zQ}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const t in this._buffers){var e;null!==(e=this._buffers[t])&&void 0!==e&&e.dispose(),delete this._buffers[t]}this._indexBuffer=(0,i.WD)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&a().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.vt.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(o.vt.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||a().error("Vertex buffer dictionary is empty!");const n=this._context.gl;for(const i in e){const r=e[i];r||a().error("Vertex buffer is uninitialized!");const n=t[i];n||a().error("Vertex element descriptor is empty!"),(0,c.yu)(this._context,this._locations,r,n)}null!=r&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}},2086:(e,t,r)=>{function n(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function i(e){let t="";for(const r in e){const i=e[r];if("boolean"==typeof i)i&&(t+="#define ".concat(r,"\n"));else if("number"==typeof i)t+="#define ".concat(r," ").concat(i.toFixed(),"\n");else if("object"==typeof i)if(n(i)){const{value:e,options:n,namespace:s}=i,o=s?"".concat(s,"_"):"";for(const r in n)t+="#define ".concat(o).concat(r," ").concat(n[r].toFixed(),"\n");t+="#define ".concat(r," ").concat(o).concat(e,"\n")}else{const e=i.options;let n=0;for(const r in e)t+="#define ".concat(e[r]," ").concat((n++).toFixed(),"\n");t+="#define ".concat(r," ").concat(e[i.value],"\n")}}return t}r.d(t,{I:()=>i})}}]);
//# sourceMappingURL=2475.404cc432.chunk.js.map