/*! For license information please see 2284.17b9e1a9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhuntington_tree_finder=self.webpackChunkhuntington_tree_finder||[]).push([[2284],{92284:(t,e,c)=>{c.r(e),c.d(e,{scopeCss:()=>B});var n="-shadowcsshost",s="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+n+r,"gim"),a=new RegExp("("+o+r,"gim"),i=new RegExp("("+s+r,"gim"),p=n+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=t=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(t,"\\b)"),"gim"),m=d("::slotted"),f=d(":host"),x=d(":host-context"),_=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,v=/(^.*?[^\\])??((:+)(.*)|$)/,E="%BLOCK%",W=(t,e)=>{const c=k(t);let n=0;return c.escapedString.replace(S,(function(){const t=arguments.length<=2?void 0:arguments[2];let s="",o=arguments.length<=4?void 0:arguments[4],r="";o&&o.startsWith("{"+E)&&(s=c.blocks[n++],o=o.substring(8),r="{");const l=e({selector:t,content:s});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(o)}))},k=t=>{const e=t.split(b),c=[],n=[];let s=0,o=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&s--,s>0?o.push(t):(o.length>0&&(n.push(o.join("")),c.push(E),o=[]),c.push(t)),"{"===t&&s++}o.length>0&&(n.push(o.join("")),c.push(E));return{escapedString:c.join(""),blocks:n}},O=(t,e,c)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){const t=e[2].split(","),n=[];for(let s=0;s<t.length;s++){const o=t[s].trim();if(!o)break;n.push(c(p,o,e[3]))}return n.join(",")}return p+e[3]})),$=(t,e,c)=>t+e.replace(n,"")+c,R=(t,e,c)=>e.indexOf(n)>-1?$(t,e,c):t+e+c+", "+e+" "+t+c,j=(t,e)=>{const c=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!c.test(t)},C=(t,e)=>t.replace(v,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),T=(t,e,c)=>{const n="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),s=t=>{let s=t.trim();if(!s)return"";if(t.indexOf(p)>-1)s=((t,e,c)=>{if(g.lastIndex=0,g.test(t)){const e=".".concat(c);return t.replace(h,((t,c)=>C(c,e))).replace(g,e+" ")}return e+" "+t})(t,e,c);else{const e=t.replace(g,"");e.length>0&&(s=C(e,n))}return s},o=(t=>{const e=[];let c=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,n)=>{const s="__ph-".concat(c,"__");return e.push(n),c++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,n,s)=>{const o="__ph-".concat(c,"__");return e.push(s),c++,n+o})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((t=o.content).indexOf(p)>-1);for(;null!==(r=i.exec(t));){const e=r[1],c=t.slice(a,r.index).trim();u=u||c.indexOf(p)>-1;const n=u?s(c):c;l+="".concat(n," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return u=u||d.indexOf(p)>-1,l+=u?s(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>m[+e]));var m},L=(t,e,c,n,s)=>W(t,(t=>{let o=t.selector,r=t.content;"@"!==t.selector[0]?o=((t,e,c,n)=>t.split(",").map((t=>n&&t.indexOf("."+n)>-1?t.trim():j(t,e)?T(t,e,c).trim():t.trim())).join(", "))(t.selector,e,c,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(r=L(t.content,e,c,n,s));return{selector:o.replace(/\s{2,}/g," ").trim(),content:r}})),y=(t,e,c,r,h)=>{const g=((t,e)=>{const c="."+e+" > ",n=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(e[2]){const t=e[2].trim(),s=e[3],o=c+t+s;let r="";for(let c=e[4]-1;c>=0;c--){const t=e[5][c];if("}"===t||","===t)break;r=t+r}const l=(r+o).trim(),a="".concat(r.trimEnd()).concat(o.trim()).trim();if(l!==a){const t="".concat(a,", ").concat(l);n.push({orgSelector:l,updatedSelector:t})}return o}return p+e[3]})),{selectors:n,cssText:t}})(t=(t=>O(t,a,R))(t=(t=>O(t,l,$))(t=(t=>t.replace(x,"$1".concat(o)).replace(f,"$1".concat(n)).replace(m,"$1".concat(s)))(t))),r);return t=(t=>u.reduce(((t,e)=>t.replace(e," ")),t))(t=g.cssText),e&&(t=L(t,e,c,r,h)),{cssText:(t=(t=A(t,c)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors.map((t=>({orgSelector:A(t.orgSelector,c),updatedSelector:A(t.updatedSelector,c)})))}},A=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,".".concat(e)),B=(t,e,c)=>{const n=e+"-h",s=e+"-s",o=t.match(w)||[];t=(t=>t.replace(_,""))(t);const r=[];if(c){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),c="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:c}),t.selector=e+t.selector,t};t=W(t,(t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,e),t):t))}const l=y(t,e,n,s,c);return t=[l.cssText,...o].join("\n"),c&&r.forEach((e=>{let{placeholder:c,comment:n}=e;t=t.replace(c,n)})),l.slottedSelectors.forEach((e=>{const c=new RegExp(e.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");t=t.replace(c,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=2284.17b9e1a9.chunk.js.map