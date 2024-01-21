import{s as ue,e as Q,i as oe,d as Z,y as ie,z as H,A as Re,H as N,r as he,f as Te,g as Ee,h as Oe,B as ae,D as T,u as ye,v as we,w as _e,E as Ve,C as Ke,V as $e}from"./scheduler.3b52f240.js";import{S as We,i as Be,g as er,t as B,c as rr,a as L,b as tr,d as or,m as nr,e as ir}from"./index.e0f9dde7.js";import{b as ke,i as Ce,h as ar}from"./Icon.55f18d08.js";function lr(e,r){const t=[];return r.builders.forEach(n=>{const i=n.action(e);i&&t.push(i)}),{destroy:()=>{t.forEach(n=>{n.destroy&&n.destroy()})}}}function Me(e){const r={};return e.forEach(t=>{Object.keys(t).forEach(n=>{n!=="action"&&(r[n]=t[n])})}),r}function sr(e){let r=e[0]?"a":"button",t,n,i=(e[0]?"a":"button")&&ce(e);return{c(){i&&i.c(),t=Q()},l(o){i&&i.l(o),t=Q()},m(o,a){i&&i.m(o,a),oe(o,t,a),n=!0},p(o,a){o[0],r?ue(r,o[0]?"a":"button")?(i.d(1),i=ce(o),r=o[0]?"a":"button",i.c(),i.m(t.parentNode,t)):i.p(o,a):(i=ce(o),r=o[0]?"a":"button",i.c(),i.m(t.parentNode,t))},i(o){n||(L(i,o),n=!0)},o(o){B(i,o),n=!1},d(o){o&&Z(t),i&&i.d(o)}}}function ur(e){let r=e[0]?"a":"button",t,n,i=(e[0]?"a":"button")&&de(e);return{c(){i&&i.c(),t=Q()},l(o){i&&i.l(o),t=Q()},m(o,a){i&&i.m(o,a),oe(o,t,a),n=!0},p(o,a){o[0],r?ue(r,o[0]?"a":"button")?(i.d(1),i=de(o),r=o[0]?"a":"button",i.c(),i.m(t.parentNode,t)):i.p(o,a):(i=de(o),r=o[0]?"a":"button",i.c(),i.m(t.parentNode,t))},i(o){n||(L(i,o),n=!0)},o(o){B(i,o),n=!1},d(o){o&&Z(t),i&&i.d(o)}}}function ce(e){let r,t,n,i,o;const a=e[6].default,l=he(a,e,e[5],null);let s=[{type:t=e[0]?void 0:e[1]},{href:e[0]},{tabindex:"0"},e[4],e[3]],f={};for(let u=0;u<s.length;u+=1)f=H(f,s[u]);return{c(){r=Te(e[0]?"a":"button"),l&&l.c(),this.h()},l(u){r=Ee(u,((e[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,tabindex:!0});var c=Oe(r);l&&l.l(c),c.forEach(Z),this.h()},h(){ae(e[0]?"a":"button")(r,f)},m(u,c){oe(u,r,c),l&&l.m(r,null),n=!0,i||(o=[T(r,"click",e[13]),T(r,"change",e[14]),T(r,"keydown",e[15]),T(r,"keyup",e[16]),T(r,"mouseenter",e[17]),T(r,"mouseleave",e[18])],i=!0)},p(u,c){l&&l.p&&(!n||c&32)&&ye(l,a,u,u[5],n?_e(a,u[5],c,null):we(u[5]),null),ae(u[0]?"a":"button")(r,f=ke(s,[(!n||c&3&&t!==(t=u[0]?void 0:u[1]))&&{type:t},(!n||c&1)&&{href:u[0]},{tabindex:"0"},c&16&&u[4],u[3]]))},i(u){n||(L(l,u),n=!0)},o(u){B(l,u),n=!1},d(u){u&&Z(r),l&&l.d(u),i=!1,Ve(o)}}}function de(e){let r,t,n,i,o,a;const l=e[6].default,s=he(l,e,e[5],null);let f=[{type:t=e[0]?void 0:e[1]},{href:e[0]},{tabindex:"0"},Me(e[2]),e[4],e[3]],u={};for(let c=0;c<f.length;c+=1)u=H(u,f[c]);return{c(){r=Te(e[0]?"a":"button"),s&&s.c(),this.h()},l(c){r=Ee(c,((e[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,tabindex:!0});var v=Oe(r);s&&s.l(v),v.forEach(Z),this.h()},h(){ae(e[0]?"a":"button")(r,u)},m(c,v){oe(c,r,v),s&&s.m(r,null),i=!0,o||(a=[T(r,"click",e[7]),T(r,"change",e[8]),T(r,"keydown",e[9]),T(r,"keyup",e[10]),T(r,"mouseenter",e[11]),T(r,"mouseleave",e[12]),Ke(n=lr.call(null,r,{builders:e[2]}))],o=!0)},p(c,v){s&&s.p&&(!i||v&32)&&ye(s,l,c,c[5],i?_e(l,c[5],v,null):we(c[5]),null),ae(c[0]?"a":"button")(r,u=ke(f,[(!i||v&3&&t!==(t=c[0]?void 0:c[1]))&&{type:t},(!i||v&1)&&{href:c[0]},{tabindex:"0"},v&4&&Me(c[2]),v&16&&c[4],c[3]])),n&&$e(n.update)&&v&4&&n.update.call(null,{builders:c[2]})},i(c){i||(L(s,c),i=!0)},o(c){B(s,c),i=!1},d(c){c&&Z(r),s&&s.d(c),o=!1,Ve(a)}}}function cr(e){let r,t,n,i;const o=[ur,sr],a=[];function l(s,f){return s[2]&&s[2].length?0:1}return r=l(e),t=a[r]=o[r](e),{c(){t.c(),n=Q()},l(s){t.l(s),n=Q()},m(s,f){a[r].m(s,f),oe(s,n,f),i=!0},p(s,[f]){let u=r;r=l(s),r===u?a[r].p(s,f):(er(),B(a[u],1,1,()=>{a[u]=null}),rr(),t=a[r],t?t.p(s,f):(t=a[r]=o[r](s),t.c()),L(t,1),t.m(n.parentNode,n))},i(s){i||(L(t),i=!0)},o(s){B(t),i=!1},d(s){s&&Z(n),a[r].d(s)}}}function dr(e,r,t){const n=["href","type","builders"];let i=ie(r,n),{$$slots:o={},$$scope:a}=r,{href:l=void 0}=r,{type:s=void 0}=r,{builders:f=[]}=r;const u={"data-bits-button-root":""};function c(b){N.call(this,e,b)}function v(b){N.call(this,e,b)}function m(b){N.call(this,e,b)}function C(b){N.call(this,e,b)}function S(b){N.call(this,e,b)}function k(b){N.call(this,e,b)}function R(b){N.call(this,e,b)}function I(b){N.call(this,e,b)}function Y(b){N.call(this,e,b)}function U(b){N.call(this,e,b)}function q(b){N.call(this,e,b)}function F(b){N.call(this,e,b)}return e.$$set=b=>{r=H(H({},r),Re(b)),t(4,i=ie(r,n)),"href"in b&&t(0,l=b.href),"type"in b&&t(1,s=b.type),"builders"in b&&t(2,f=b.builders),"$$scope"in b&&t(5,a=b.$$scope)},[l,s,f,u,i,a,o,c,v,m,C,S,k,R,I,Y,U,q,F]}let fr=class extends We{constructor(r){super(),Be(this,r,dr,cr,ue,{href:0,type:1,builders:2})}};function pr(e){let r;const t=e[5].default,n=he(t,e,e[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,o){n&&n.m(i,o),r=!0},p(i,o){n&&n.p&&(!r||o&256)&&ye(n,t,i,i[8],r?_e(t,i[8],o,null):we(i[8]),null)},i(i){r||(L(n,i),r=!0)},o(i){B(n,i),r=!1},d(i){n&&n.d(i)}}}function br(e){let r,t;const n=[{builders:e[3]},{class:Ce(Ne({variant:e[1],size:e[2],className:e[0]}))},{type:"button"},e[4]];let i={$$slots:{default:[pr]},$$scope:{ctx:e}};for(let o=0;o<n.length;o+=1)i=H(i,n[o]);return r=new fr({props:i}),r.$on("click",e[6]),r.$on("keydown",e[7]),{c(){tr(r.$$.fragment)},l(o){or(r.$$.fragment,o)},m(o,a){nr(r,o,a),t=!0},p(o,[a]){const l=a&31?ke(n,[a&8&&{builders:o[3]},a&7&&{class:Ce(Ne({variant:o[1],size:o[2],className:o[0]}))},n[2],a&16&&ar(o[4])]):{};a&256&&(l.$$scope={dirty:a,ctx:o}),r.$set(l)},i(o){t||(L(r.$$.fragment,o),t=!0)},o(o){B(r.$$.fragment,o),t=!1},d(o){ir(r,o)}}}function gr(e,r,t){const n=["class","variant","size","builders"];let i=ie(r,n),{$$slots:o={},$$scope:a}=r,{class:l=void 0}=r,{variant:s="default"}=r,{size:f="default"}=r,{builders:u=[]}=r;function c(m){N.call(this,e,m)}function v(m){N.call(this,e,m)}return e.$$set=m=>{r=H(H({},r),Re(m)),t(4,i=ie(r,n)),"class"in m&&t(0,l=m.class),"variant"in m&&t(1,s=m.variant),"size"in m&&t(2,f=m.size),"builders"in m&&t(3,u=m.builders),"$$scope"in m&&t(8,a=m.$$scope)},[l,s,f,u,i,o,c,v,a]}class et extends We{constructor(r){super(),Be(this,r,gr,br,ue,{class:0,variant:1,size:2,builders:3})}}var ze=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,j=e=>!e||typeof e!="object"||Object.keys(e).length===0,vr=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function Le(e,r){e.forEach(function(t){Array.isArray(t)?Le(t,r):r.push(t)})}function Ue(e){let r=[];return Le(e,r),r}var mr=(...e)=>Ue(e).filter(Boolean),qe=(e,r)=>{let t={},n=Object.keys(e),i=Object.keys(r);for(let o of n)if(i.includes(o)){let a=e[o],l=r[o];typeof a=="object"&&typeof l=="object"?t[o]=qe(a,l):t[o]=l+" "+a}else t[o]=e[o];for(let o of i)n.includes(o)||(t[o]=r[o]);return t},Se=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();function hr(){for(var e=0,r,t,n="";e<arguments.length;)(r=arguments[e++])&&(t=Fe(r))&&(n&&(n+=" "),n+=t);return n}function Fe(e){if(typeof e=="string")return e;for(var r,t="",n=0;n<e.length;n++)e[n]&&(r=Fe(e[n]))&&(t&&(t+=" "),t+=r);return t}var xe="-";function yr(e){var r=_r(e),t=e.conflictingClassGroups,n=e.conflictingClassGroupModifiers,i=n===void 0?{}:n;function o(l){var s=l.split(xe);return s[0]===""&&s.length!==1&&s.shift(),Je(s,r)||wr(l)}function a(l,s){var f=t[l]||[];return s&&i[l]?[].concat(f,i[l]):f}return{getClassGroupId:o,getConflictingClassGroupIds:a}}function Je(e,r){var a;if(e.length===0)return r.classGroupId;var t=e[0],n=r.nextPart.get(t),i=n?Je(e.slice(1),n):void 0;if(i)return i;if(r.validators.length!==0){var o=e.join(xe);return(a=r.validators.find(function(l){var s=l.validator;return s(o)}))==null?void 0:a.classGroupId}}var Ge=/^\[(.+)\]$/;function wr(e){if(Ge.test(e)){var r=Ge.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function _r(e){var r=e.theme,t=e.prefix,n={nextPart:new Map,validators:[]},i=xr(Object.entries(e.classGroups),t);return i.forEach(function(o){var a=o[0],l=o[1];pe(l,n,a,r)}),n}function pe(e,r,t,n){e.forEach(function(i){if(typeof i=="string"){var o=i===""?r:je(r,i);o.classGroupId=t;return}if(typeof i=="function"){if(kr(i)){pe(i(n),r,t,n);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(function(a){var l=a[0],s=a[1];pe(s,je(r,l),t,n)})})}function je(e,r){var t=e;return r.split(xe).forEach(function(n){t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function kr(e){return e.isThemeGetter}function xr(e,r){return r?e.map(function(t){var n=t[0],i=t[1],o=i.map(function(a){return typeof a=="string"?r+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(l){var s=l[0],f=l[1];return[r+s,f]})):a});return[n,o]}):e}function Ar(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,n=new Map;function i(o,a){t.set(o,a),r++,r>e&&(r=0,n=t,t=new Map)}return{get:function(a){var l=t.get(a);if(l!==void 0)return l;if((l=n.get(a))!==void 0)return i(a,l),l},set:function(a,l){t.has(a)?t.set(a,l):i(a,l)}}}var Ze="!";function Cr(e){var r=e.separator||":",t=r.length===1,n=r[0],i=r.length;return function(a){for(var l=[],s=0,f=0,u,c=0;c<a.length;c++){var v=a[c];if(s===0){if(v===n&&(t||a.slice(c,c+i)===r)){l.push(a.slice(f,c)),f=c+i;continue}if(v==="/"){u=c;continue}}v==="["?s++:v==="]"&&s--}var m=l.length===0?a:a.substring(f),C=m.startsWith(Ze),S=C?m.substring(1):m,k=u&&u>f?u-f:void 0;return{modifiers:l,hasImportantModifier:C,baseClassName:S,maybePostfixModifierPosition:k}}}function Mr(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(n){var i=n[0]==="[";i?(r.push.apply(r,t.sort().concat([n])),t=[]):t.push(n)}),r.push.apply(r,t.sort()),r}function zr(e){return{cache:Ar(e.cacheSize),splitModifiers:Cr(e),...yr(e)}}var Sr=/\s+/;function Gr(e,r){var t=r.splitModifiers,n=r.getClassGroupId,i=r.getConflictingClassGroupIds,o=new Set;return e.trim().split(Sr).map(function(a){var l=t(a),s=l.modifiers,f=l.hasImportantModifier,u=l.baseClassName,c=l.maybePostfixModifierPosition,v=n(c?u.substring(0,c):u),m=!!c;if(!v){if(!c)return{isTailwindClass:!1,originalClassName:a};if(v=n(u),!v)return{isTailwindClass:!1,originalClassName:a};m=!1}var C=Mr(s).join(":"),S=f?C+Ze:C;return{isTailwindClass:!0,modifierId:S,classGroupId:v,originalClassName:a,hasPostfixModifier:m}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var l=a.modifierId,s=a.classGroupId,f=a.hasPostfixModifier,u=l+s;return o.has(u)?!1:(o.add(u),i(s,f).forEach(function(c){return o.add(l+c)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function be(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n,i,o,a=l;function l(f){var u=r[0],c=r.slice(1),v=c.reduce(function(m,C){return C(m)},u());return n=zr(v),i=n.cache.get,o=n.cache.set,a=s,s(f)}function s(f){var u=i(f);if(u)return u;var c=Gr(f,n);return o(f,c),c}return function(){return a(hr.apply(null,arguments))}}function A(e){var r=function(n){return n[e]||[]};return r.isThemeGetter=!0,r}var He=/^\[(?:([a-z-]+):)?(.+)\]$/i,jr=/^\d+\/\d+$/,Ir=new Set(["px","full","screen"]),Pr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Nr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Rr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function E(e){return J(e)||Ir.has(e)||jr.test(e)||ge(e)}function ge(e){return X(e,"length",Br)}function Tr(e){return X(e,"size",Xe)}function Er(e){return X(e,"position",Xe)}function Or(e){return X(e,"url",Lr)}function ne(e){return X(e,"number",J)}function J(e){return!Number.isNaN(Number(e))}function Vr(e){return e.endsWith("%")&&J(e.slice(0,-1))}function ee(e){return Ie(e)||X(e,"number",Ie)}function h(e){return He.test(e)}function re(){return!0}function W(e){return Pr.test(e)}function Wr(e){return X(e,"",Ur)}function X(e,r,t){var n=He.exec(e);return n?n[1]?n[1]===r:t(n[2]):!1}function Br(e){return Nr.test(e)}function Xe(){return!1}function Lr(e){return e.startsWith("url(")}function Ie(e){return Number.isInteger(Number(e))}function Ur(e){return Rr.test(e)}function ve(){var e=A("colors"),r=A("spacing"),t=A("blur"),n=A("brightness"),i=A("borderColor"),o=A("borderRadius"),a=A("borderSpacing"),l=A("borderWidth"),s=A("contrast"),f=A("grayscale"),u=A("hueRotate"),c=A("invert"),v=A("gap"),m=A("gradientColorStops"),C=A("gradientColorStopPositions"),S=A("inset"),k=A("margin"),R=A("opacity"),I=A("padding"),Y=A("saturate"),U=A("scale"),q=A("sepia"),F=A("skew"),b=A("space"),D=A("translate"),K=function(){return["auto","contain","none"]},$=function(){return["auto","hidden","clip","visible","scroll"]},p=function(){return["auto",h,r]},d=function(){return[h,r]},g=function(){return["",E]},y=function(){return["auto",J,h]},w=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},_=function(){return["solid","dashed","dotted","double","none"]},x=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},M=function(){return["start","end","center","between","around","evenly","stretch"]},z=function(){return["","0",h]},O=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},P=function(){return[J,ne]},V=function(){return[J,h]};return{cacheSize:500,theme:{colors:[re],spacing:[E],blur:["none","",W,h],brightness:P(),borderColor:[e],borderRadius:["none","","full",W,h],borderSpacing:d(),borderWidth:g(),contrast:P(),grayscale:z(),hueRotate:V(),invert:z(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Vr,ge],inset:p(),margin:p(),opacity:P(),padding:d(),saturate:P(),scale:P(),sepia:z(),skew:V(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",h]}],container:["container"],columns:[{columns:[W]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(w(),[h])}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],start:[{start:[S]}],end:[{end:[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ee]}],basis:[{basis:p()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",h]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",ee]}],"grid-cols":[{"grid-cols":[re]}],"col-start-end":[{col:["auto",{span:["full",ee]},h]}],"col-start":[{"col-start":y()}],"col-end":[{"col-end":y()}],"grid-rows":[{"grid-rows":[re]}],"row-start-end":[{row:["auto",{span:[ee]},h]}],"row-start":[{"row-start":y()}],"row-end":[{"row-end":y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",h]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",h]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal"].concat(M())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(M(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(M(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[I]}],px:[{px:[I]}],py:[{py:[I]}],ps:[{ps:[I]}],pe:[{pe:[I]}],pt:[{pt:[I]}],pr:[{pr:[I]}],pb:[{pb:[I]}],pl:[{pl:[I]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",h,r]}],"min-w":[{"min-w":["min","max","fit",h,E]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[W]},W,h]}],h:[{h:[h,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",h,E]}],"max-h":[{"max-h":[h,r,"min","max","fit"]}],"font-size":[{text:["base",W,ge]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ne]}],"font-family":[{font:[re]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",h]}],"line-clamp":[{"line-clamp":["none",J,ne]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",h,E]}],"list-image":[{"list-image":["none",h]}],"list-style-type":[{list:["none","disc","decimal",h]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[R]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[R]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(_(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",E]}],"underline-offset":[{"underline-offset":["auto",h,E]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",h]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",h]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[R]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(w(),[Er])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Tr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Or]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[R]}],"border-style":[{border:[].concat(_(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[R]}],"divide-style":[{divide:_()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(_())}],"outline-offset":[{"outline-offset":[h,E]}],"outline-w":[{outline:[E]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:g()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[R]}],"ring-offset-w":[{"ring-offset":[E]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",W,Wr]}],"shadow-color":[{shadow:[re]}],opacity:[{opacity:[R]}],"mix-blend":[{"mix-blend":x()}],"bg-blend":[{"bg-blend":x()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",W,h]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[c]}],saturate:[{saturate:[Y]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[R]}],"backdrop-saturate":[{"backdrop-saturate":[Y]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",h]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",h]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",h]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[ee,h]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",h]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",h]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",h]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[E,ne]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function qr(e,r){for(var t in r)Ye(e,t,r[t]);return e}var Fr=Object.prototype.hasOwnProperty,Jr=new Set(["string","number","boolean"]);function Ye(e,r,t){if(!Fr.call(e,r)||Jr.has(typeof t)||t===null){e[r]=t;return}if(Array.isArray(t)&&Array.isArray(e[r])){e[r]=e[r].concat(t);return}if(typeof t=="object"&&typeof e[r]=="object"){if(e[r]===null){e[r]=t;return}for(var n in t)Ye(e[r],n,t[n])}}function Zr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return typeof e=="function"?be.apply(void 0,[ve,e].concat(t)):be.apply(void 0,[function(){return qr(ve(),e)}].concat(t))}var Hr=be(ve),Xr={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Qe=e=>e||void 0,le=(...e)=>Qe(Ue(e).filter(Boolean).join(" ")),fe=null,se={},me=!1,te=(...e)=>r=>r.twMerge?((!fe||me)&&(me=!1,fe=j(se)?Hr:Zr(se)),Qe(fe(le(e)))):le(e),Pe=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=le(e[t],r[t]):e[t]=r[t];return e},Yr=(e,r)=>{let{extend:t=null,slots:n={},variants:i={},compoundVariants:o=[],compoundSlots:a=[],defaultVariants:l={}}=e,s={...Xr,...r},f=t!=null&&t.base?le(t.base,e==null?void 0:e.base):e==null?void 0:e.base,u=t!=null&&t.variants&&!j(t.variants)?qe(i,t.variants):i,c=t!=null&&t.defaultVariants&&!j(t.defaultVariants)?{...t.defaultVariants,...l}:l;!j(s.twMergeConfig)&&!vr(s.twMergeConfig,se)&&(me=!0,se=s.twMergeConfig);let v=j(n)?{}:{base:e==null?void 0:e.base,...n},m=j(t==null?void 0:t.slots)?v:Pe({...t==null?void 0:t.slots},j(v)?{base:e==null?void 0:e.base}:v),C=k=>{if(j(u)&&j(n)&&j(t==null?void 0:t.slots))return te(f,k==null?void 0:k.class,k==null?void 0:k.className)(s);if(o&&!Array.isArray(o))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof o}`);if(a&&!Array.isArray(a))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);let R=(p,d,g=[],y)=>{let w=g;if(typeof d=="string")w=w.concat(Se(d).split(" ").map(_=>`${p}:${_}`));else if(Array.isArray(d))w=w.concat(d.reduce((_,x)=>_.concat(`${p}:${x}`),[]));else if(typeof d=="object"&&typeof y=="string"){for(let _ in d)if(d.hasOwnProperty(_)&&_===y){let x=d[_];if(x&&typeof x=="string"){let M=Se(x);w[y]?w[y]=w[y].concat(M.split(" ").map(z=>`${p}:${z}`)):w[y]=M.split(" ").map(z=>`${p}:${z}`)}else Array.isArray(x)&&x.length>0&&(w[y]=x.reduce((M,z)=>M.concat(`${p}:${z}`),[]))}}return w},I=(p,d=u,g=null,y=null)=>{var w;let _=d[p];if(!_||j(_))return null;let x=(w=y==null?void 0:y[p])!=null?w:k==null?void 0:k[p];if(x===null)return null;let M=ze(x),z=Array.isArray(s.responsiveVariants)&&s.responsiveVariants.length>0||s.responsiveVariants===!0,O=c==null?void 0:c[p],P=[];if(typeof M=="object"&&z)for(let[G,Ae]of Object.entries(M)){let De=_[Ae];if(G==="initial"){O=Ae;continue}Array.isArray(s.responsiveVariants)&&!s.responsiveVariants.includes(G)||(P=R(G,De,P,g))}let V=_[M]||_[ze(O)];return typeof P=="object"&&typeof g=="string"&&P[g]?Pe(P,V):P.length>0?(P.push(V),P):V},Y=()=>u?Object.keys(u).map(p=>I(p,u)):null,U=(p,d)=>{if(!u||typeof u!="object")return null;let g=new Array;for(let y in u){let w=I(y,u,p,d),_=p==="base"&&typeof w=="string"?w:w&&w[p];_&&(g[g.length]=_)}return g},q={};for(let p in k)k[p]!==void 0&&(q[p]=k[p]);let F=(p,d)=>{var g;let y=typeof(k==null?void 0:k[p])=="object"?{[p]:(g=k[p])==null?void 0:g.initial}:{};return{...c,...q,...y,...d}},b=(p=[],d)=>{let g=[];for(let{class:y,className:w,..._}of p){let x=!0;for(let[M,z]of Object.entries(_)){let O=F(M,d);if(Array.isArray(z)){if(!z.includes(O[M])){x=!1;break}}else if(O[M]!==z){x=!1;break}}x&&(y&&g.push(y),w&&g.push(w))}return g},D=p=>{let d=b(o,p),g=b(t==null?void 0:t.compoundVariants,p);return mr(g,d)},K=p=>{let d=D(p);if(!Array.isArray(d))return d;let g={};for(let y of d)if(typeof y=="string"&&(g.base=te(g.base,y)(s)),typeof y=="object")for(let[w,_]of Object.entries(y))g[w]=te(g[w],_)(s);return g},$=p=>{if(a.length<1)return null;let d={};for(let{slots:g=[],class:y,className:w,..._}of a){if(!j(_)){let x=!0;for(let M of Object.keys(_)){let z=F(M,p)[M];if(z===void 0||(Array.isArray(_[M])?!_[M].includes(z):_[M]!==z)){x=!1;break}}if(!x)continue}for(let x of g)d[x]=d[x]||[],d[x].push([y,w])}return d};if(!j(n)||!j(t==null?void 0:t.slots)){let p={};if(typeof m=="object"&&!j(m))for(let d of Object.keys(m))p[d]=g=>{var y,w;return te(m[d],U(d,g),((y=K(g))!=null?y:[])[d],((w=$(g))!=null?w:[])[d],g==null?void 0:g.class,g==null?void 0:g.className)(s)};return p}return te(f,Y(),D(),k==null?void 0:k.class,k==null?void 0:k.className)(s)},S=()=>{if(!(!u||typeof u!="object"))return Object.keys(u)};return C.variantKeys=S(),C.extend=t,C.base=f,C.slots=m,C.variants=u,C.defaultVariants=c,C.compoundSlots=a,C.compoundVariants=o,C};const Ne=Yr({base:"inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{et as B,Ne as b,Yr as s};
