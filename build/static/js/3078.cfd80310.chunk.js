"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[3078],{3078:(e,t,r)=>{r.d(t,{isAnimatedGIF:()=>S,parseGif:()=>A});var n=r(91417),i={},a={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.loop=o.conditional=o.parse=void 0;o.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,i)}));else if("function"==typeof r)r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n};o.conditional=function(e,t){return function(r,n,i,a){t(r,n,i)&&a(r,e,n,i)}};o.loop=function(e,t){return function(r,n,i,a){for(var o=[],d=r.pos;t(r,n,i);){var s={};if(a(r,e,n,s),r.pos===d)break;d=r.pos,o.push(s)}return o}};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.readBits=d.readArray=d.readUnsigned=d.readString=d.peekBytes=d.readBytes=d.peekByte=d.readByte=d.buildStream=void 0;d.buildStream=function(e){return{data:e,pos:0}};var s=function(){return function(e){return e.data[e.pos++]}};d.readByte=s;d.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var c=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};d.readBytes=c;d.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};d.readString=function(e){return function(t){return Array.from(c(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}};d.readUnsigned=function(e){return function(t){var r=c(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};d.readArray=function(e,t){return function(r,n,i){for(var a="function"==typeof t?t(r,n,i):t,o=c(e),d=new Array(a),s=0;s<a;s++)d[s]=o(r);return d}};d.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(r&1<<i);return Object.keys(e).reduce((function(t,r){var i=e[r];return i.length?t[r]=function(e,t,r){for(var n=0,i=0;i<r;i++)n+=e[t+i]&&Math.pow(2,r-i-1);return n}(n,i.index,i.length):t[r]=n[i.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o,r=d,n={blocks:function(e){for(var t=[],n=e.data.length,i=0,a=(0,r.readByte)()(e);0!==a&&a;a=(0,r.readByte)()(e)){if(e.pos+a>=n){var o=n-e.pos;t.push((0,r.readBytes)(o)(e)),i+=o;break}t.push((0,r.readBytes)(a)(e)),i+=a}for(var d=new Uint8Array(i),s=0,c=0;c<t.length;c++)d.set(t[c],s),s+=t[c].length;return d}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),a=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},n]}]},(function(e){return 44===(0,r.peekByte)()(e)})),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),c=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),l=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([i,c,u,a,s],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=l}(a);var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.deinterlace=void 0;u.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,i=function(n,i){var a=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(a))},a=[0,4,2,1],o=[8,8,4,2],d=0,s=0;s<4;s++)for(var c=a[s];c<n;c+=o[s])i(c,d),d++;return r};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.lzw=void 0;l.lzw=function(e,t,r){var n,i,a,o,d,s,c,u,l,f,p,g,h,y,m,v,w=4096,B=r,b=new Array(r),x=new Array(w),k=new Array(w),A=new Array(w+1);for(d=1+(i=1<<(f=e)),n=i+2,c=-1,a=(1<<(o=f+1))-1,u=0;u<i;u++)x[u]=0,k[u]=u;for(p=g=h=y=m=v=0,l=0;l<B;){if(0===y){if(g<o){p+=t[v]<<g,g+=8,v++;continue}if(u=p&a,p>>=o,g-=o,u>n||u==d)break;if(u==i){a=(1<<(o=f+1))-1,n=i+2,c=-1;continue}if(-1==c){A[y++]=k[u],c=u,h=u;continue}for(s=u,u==n&&(A[y++]=h,u=c);u>i;)A[y++]=k[u],u=x[u];h=255&k[u],A[y++]=h,n<w&&(x[n]=c,k[n]=h,0==(++n&a)&&n<w&&(o++,a+=n)),c=s}y--,b[m++]=A[y],l++}for(l=m;l<B;l++)b[l]=0;return b},Object.defineProperty(i,"__esModule",{value:!0});var f,p=i.decompressFrames=i.decompressFrame=w=i.parseGIF=void 0,g=(f=a)&&f.__esModule?f:{default:f},h=o,y=d,m=u,v=l;var w=i.parseGIF=function(e){var t=new Uint8Array(e);return(0,h.parse)((0,y.buildStream)(t),g.default)},B=function(e,t,r){if(e.image){var n=e.image,i=n.descriptor.width*n.descriptor.height,a=(0,v.lzw)(n.data.minCodeSize,n.data.blocks,i);n.descriptor.lct.interlaced&&(a=(0,m.deinterlace)(a,n.descriptor.width));var o={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?o.colorTable=n.lct:o.colorTable=t,e.gce&&(o.delay=10*(e.gce.delay||10),o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),r&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,a=e.pixels[n],o=e.colorTable[a]||[0,0,0];r[i]=o[0],r[i+1]=o[1],r[i+2]=o[2],r[i+3]=a!==e.transparentIndex?255:0}return r}(o)),o}console.warn("gif frame does not have associated image.")};i.decompressFrame=B;let b,x,k;async function A(e,t){const r=w(e),i=p(r,!0),{width:a,height:o}=r.lsd,d=function(e,t){var r;return null!==(r=b)&&void 0!==r||(b=document.createElement("canvas")),b.width=e,b.height=t,b.getContext("2d",{willReadFrequently:!0})}(a,o),s=[],c=[];let u=0;for(const l of i){const e=(0,n.l5)(l.delay||100);c.push(e),u+=e;const t=U(new ImageData(l.patch,l.dims.width,l.dims.height)),r=3===l.disposalType?d.getImageData(l.dims.left,l.dims.top,l.dims.width,l.dims.height):void 0;d.drawImage(t,l.dims.left,l.dims.top);const i=d.getImageData(0,0,a,o);s.push(i),1===l.disposalType||(2===l.disposalType?d.clearRect(l.dims.left,l.dims.top,l.dims.width,l.dims.height):3===l.disposalType&&d.putImageData(r,l.dims.left,l.dims.top))}return{frameCount:i.length,duration:u,frameDurations:c,getFrame:e=>s[e],width:a,height:o}}function U(e){var t,r;return null!==(t=x)&&void 0!==t||(x=document.createElement("canvas")),null!==(r=k)&&void 0!==r||(k=x.getContext("2d",{willReadFrequently:!0})),x.width=e.width,x.height=e.height,k.putImageData(e,0,0),x}p=i.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return B(r,e.gct,t)}))};const _=[71,73,70];function S(e){if(!function(e){const t=new Uint8Array(e);return!_.some(((e,r)=>e!==t[r]))}(e))return!1;const t=new DataView(e),r=t.getUint8(10);let n=13+(128&r?3*2**(1+(7&r)):0),i=0,a=!1;for(;!a;){switch(t.getUint8(n++)){case 33:if(!o())return!1;break;case 44:d();break;case 59:a=!0;break;default:return!1}if(i>1)return!0}function o(){switch(t.getUint8(n++)){case 249:n++,n+=4,s();break;case 1:i++,n++,n+=12,s();break;case 254:s();break;case 255:n++,n+=8,n+=3,s();break;default:return!1}return!0}function d(){i++,n+=8;const e=t.getUint8(n++);n+=128&e?3*2**(1+(7&e)):0,n++,s()}function s(){let e;for(;e=t.getUint8(n++);)n+=e}return!1}}}]);
//# sourceMappingURL=3078.cfd80310.chunk.js.map