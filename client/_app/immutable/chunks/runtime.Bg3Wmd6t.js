var kn=Array.isArray,In=Array.from,On=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Cn=Array.prototype,$t=Object.getPrototypeOf;const Pn=()=>{};function bn(t){return t()}function Zt(t){for(var r=0;r<t.length;r++)t[r]()}const y=2,dt=4,Z=8,st=16,m=32,W=64,tt=128,I=256,V=512,E=1024,x=2048,Y=4096,P=8192,b=16384,Wt=32768,Et=65536,Fn=1<<17,Xt=1<<19,yt=1<<20,ct=Symbol("$state"),qn=Symbol("legacy props");function wt(t){return t===this.v}function zt(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!zt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Mn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Ln(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Yn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Hn(){X=!0}const Un=1,Bn=2,Vn=16,Gn=1,Kn=2,$n=4,Zn=8,Wn=16,Xn=1,zn=2,ln="[",sn="[!",un="]",mt={},Jn=Symbol();function ut(t,r){var n={f:0,v:t,reactions:null,equals:wt,version:0};return n}function Qn(t){return an(ut(t))}function tr(t,r=!1){var e;const n=ut(t);return r||(n.equals=Tt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(n),n}function an(t){return o!==null&&o.f&y&&(T===null?Tn([t]):T.push(t)),t}function nr(t,r){return o!==null&&it()&&o.f&(y|st)&&(T===null||!T.includes(t))&&en(),on(t,r)}function on(t,r){return t.equals(r)||(t.v=r,t.version=jt(),gt(t,x),it()&&a!==null&&a.f&E&&!(a.f&m)&&(v!==null&&v.includes(t)?(g(a,x),Q(a)):A===null?mn([t]):A.push(t))),r}function gt(t,r){var n=t.reactions;if(n!==null)for(var e=it(),l=n.length,s=0;s<l;s++){var u=n[s],i=u.f;i&x||!e&&u===a||(g(u,r),i&(E|I)&&(i&y?gt(u,Y):Q(u)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function rr(t){D=t}let w;function F(t){if(t===null)throw At(),mt;return w=t}function er(){return F(O(w))}function lr(t){if(D){if(O(w)!==null)throw At(),mt;w=t}}function sr(t=1){if(D){for(var r=t,n=w;r--;)n=O(n);w=n}}function ur(){for(var t=0,r=w;;){if(r.nodeType===8){var n=r.data;if(n===un){if(t===0)return r;t-=1}else(n===ln||n===sn)&&(t+=1)}var e=O(r);r.remove(),r=e}}var vt,xt,Rt;function ar(){if(vt===void 0){vt=window;var t=Element.prototype,r=Node.prototype;xt=_t(r,"firstChild").get,Rt=_t(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return xt.call(t)}function O(t){return Rt.call(t)}function or(t,r){if(!D)return rt(t);var n=rt(w);if(n===null)n=w.appendChild(nt());else if(r&&n.nodeType!==3){var e=nt();return n==null||n.before(e),F(e),e}return F(n),n}function ir(t,r){if(!D){var n=rt(t);return n instanceof Comment&&n.data===""?O(n):n}return w}function fr(t,r=1,n=!1){let e=D?w:t;for(var l;r--;)l=e,e=O(e);if(!D)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var u=nt();return e===null?l==null||l.after(u):e.before(u),F(u),u}return F(e),e}function _r(t){t.textContent=""}function fn(t){var r=y|x;a===null?r|=I:a.f|=yt;var n=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:r,fn:t,reactions:null,v:null,version:0,parent:n??a};return n!==null&&(n.children??(n.children=[])).push(e),e}function cr(t){const r=fn(t);return r.equals=Tt,r}function St(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&y?at(e):k(e)}}}function _n(t){for(var r=t.parent;r!==null;){if(!(r.f&y))return r;r=r.parent}return null}function Dt(t){var r,n=a;$(_n(t));try{St(t),r=Ht(t)}finally{$(n)}return r}function kt(t){var r=Dt(t),n=(S||t.f&I)&&t.deps!==null?Y:E;g(t,n),t.equals(r)||(t.v=r,t.version=jt())}function at(t){St(t),L(t,0),g(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){a===null&&o===null&&tn(),o!==null&&o.f&I&&Qt(),ot&&Jt()}function cn(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function j(t,r,n,e=!0){var l=(t&W)!==0,s=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:r,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var i=N;try{pt(!0),J(u),u.f|=Wt}catch(_){throw k(u),_}finally{pt(i)}}else r!==null&&Q(u);var p=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&yt)===0;if(!p&&!l&&e&&(s!==null&&cn(u,s),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(u)}return u}function vr(t){It();var r=a!==null&&(a.f&m)!==0&&f!==null&&!f.m;if(r){var n=f;(n.e??(n.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=Ot(t);return e}}function pr(t){return It(),vn(t)}function hr(t){const r=j(W,t,!0);return(n={})=>new Promise(e=>{n.outro?dn(r,()=>{k(r),e(void 0)}):(k(r),e(void 0))})}function Ot(t){return j(dt,t,!1)}function vn(t){return j(Z,t,!0)}function dr(t){return pn(t)}function pn(t,r=0){return j(Z|st|r,t,!0)}function Er(t,r=!0){return j(Z|m,t,!0,r)}function Nt(t){var r=t.teardown;if(r!==null){const n=ot,e=o;ht(!0),K(null);try{r.call(null)}finally{ht(n),K(e)}}}function Ct(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)at(r[n])}}function Pt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;k(n,r),n=e}}function hn(t){for(var r=t.first;r!==null;){var n=r.next;r.f&m||k(r),r=n}}function k(t,r=!0){var n=!1;if((r||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:O(e);e.remove(),e=s}n=!0}Pt(t,r&&!n),Ct(t),L(t,0),g(t,b);var u=t.transitions;if(u!==null)for(const p of u)p.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function dn(t,r){var n=[];Ft(t,n,!0),En(n,()=>{k(t),r&&r()})}function En(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var l of t)l.out(e)}else r()}function Ft(t,r,n){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&r.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Et)!==0||(e.f&m)!==0;Ft(e,r,s?n:!1),e=l}}}function yr(t){qt(t,!0)}function qt(t,r){if(t.f&P){H(t)&&J(t),t.f^=P;for(var n=t.first;n!==null;){var e=n.next,l=(n.f&Et)!==0||(n.f&m)!==0;qt(n,l?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let G=!1,et=[];function Mt(){G=!1;const t=et.slice();et=[],Zt(t)}function wr(t){G||(G=!0,queueMicrotask(Mt)),et.push(t)}function yn(){G&&Mt()}const Lt=0,wn=1;let U=!1,B=Lt,q=!1,M=null,N=!1,ot=!1;function pt(t){N=t}function ht(t){ot=t}let R=[],C=0;let o=null;function K(t){o=t}let a=null;function $(t){a=t}let T=null;function Tn(t){T=t}let v=null,d=0,A=null;function mn(t){A=t}let Yt=1,S=!1,f=null;function jt(){return++Yt}function it(){return!X||f!==null&&f.l===null}function H(t){var u,i;var r=t.f;if(r&x)return!0;if(r&Y){var n=t.deps,e=(r&I)!==0;if(n!==null){var l;if(r&V){for(l=0;l<n.length;l++)((u=n[l]).reactions??(u.reactions=[])).push(t);t.f^=V}for(l=0;l<n.length;l++){var s=n[l];if(H(s)&&kt(s),e&&a!==null&&!S&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!e||a!==null&&!S)&&g(t,E)}return!1}function gn(t,r){for(var n=r;n!==null;){if(n.f&tt)try{n.fn(t);return}catch{n.f^=tt}n=n.parent}throw U=!1,t}function An(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function z(t,r,n,e){if(U){if(n===null&&(U=!1),An(r))throw t;return}n!==null&&(U=!0);{gn(t,r);return}}function Ht(t){var ft;var r=v,n=d,e=A,l=o,s=S,u=T,i=f,p=t.f;v=null,d=0,A=null,o=p&(m|W)?null:t,S=!N&&(p&I)!==0,T=null,f=t.ctx;try{var h=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(L(t,d),_!==null&&d>0)for(_.length=d+v.length,c=0;c<v.length;c++)_[d+c]=v[c];else t.deps=_=v;if(!S)for(c=d;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&d<_.length&&(L(t,d),_.length=d);return h}finally{v=r,d=n,A=e,o=l,S=s,T=u,f=i}}function xn(t,r){let n=r.reactions;if(n!==null){var e=n.indexOf(t);if(e!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[e]=n[l],n.pop())}}n===null&&r.f&y&&(v===null||!v.includes(r))&&(g(r,Y),r.f&(I|V)||(r.f^=V),L(r,0))}function L(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)xn(t,n[e])}function J(t){var r=t.f;if(!(r&b)){g(t,E);var n=a,e=f;a=t;try{r&st?hn(t):Pt(t),Ct(t),Nt(t);var l=Ht(t);t.teardown=typeof l=="function"?l:null,t.version=Yt}catch(s){z(s,t,n,e||t.ctx)}finally{a=n}}}function Ut(){if(C>1e3){C=0;try{nn()}catch(t){if(M!==null)z(t,M,null);else throw t}}C++}function Bt(t){var r=t.length;if(r!==0){Ut();var n=N;N=!0;try{for(var e=0;e<r;e++){var l=t[e];l.f&E||(l.f^=E);var s=[];Vt(l,s),Rn(s)}}finally{N=n}}}function Rn(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if(!(e.f&(b|P)))try{H(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}catch(l){z(l,e,null,e.ctx)}}}function Sn(){if(q=!1,C>1001)return;const t=R;R=[],Bt(t),q||(C=0,M=null)}function Q(t){B===Lt&&(q||(q=!0,queueMicrotask(Sn))),M=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(W|m)){if(!(n&E))return;r.f^=E}}R.push(r)}function Vt(t,r){var n=t.first,e=[];t:for(;n!==null;){var l=n.f,s=(l&m)!==0,u=s&&(l&E)!==0,i=n.next;if(!u&&!(l&P))if(l&Z){if(s)n.f^=E;else try{H(n)&&J(n)}catch(c){z(c,n,null,n.ctx)}var p=n.first;if(p!==null){n=p;continue}}else l&dt&&e.push(n);if(i===null){let c=n.parent;for(;c!==null;){if(t===c)break t;var h=c.next;if(h!==null){n=h;continue t}c=c.parent}}n=i}for(var _=0;_<e.length;_++)p=e[_],r.push(p),Vt(p,r)}function Gt(t){var r=B,n=R;try{Ut();const l=[];B=wn,R=l,q=!1,Bt(n);var e=t==null?void 0:t();return yn(),(R.length>0||l.length>0)&&Gt(),C=0,M=null,e}finally{B=r,R=n}}async function Tr(){await Promise.resolve(),Gt()}function mr(t){var _;var r=t.f,n=(r&y)!==0;if(n&&r&b){var e=Dt(t);return at(t),e}if(o!==null){T!==null&&T.includes(t)&&rn();var l=o.deps;v===null&&l!==null&&l[d]===t?d++:v===null?v=[t]:v.push(t),A!==null&&a!==null&&a.f&E&&!(a.f&m)&&A.includes(t)&&(g(a,x),Q(a))}else if(n&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&y){var p=u;i=p,u=p.parent}else{var h=u;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return n&&(s=t,H(s)&&kt(s)),t.v}function gr(t){const r=o;try{return o=null,t()}finally{o=r}}const Dn=~(x|Y|E);function g(t,r){t.f=t.f&Dn|r}function Ar(t,r=!1,n){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!r&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function xr(t){const r=f;if(r!==null){const u=r.e;if(u!==null){var n=a,e=o;r.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];$(s.effect),K(s.reaction),Ot(s.fn)}}finally{$(n),K(e)}}f=r.p,r.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&ct in n&&lt(n)}}}function lt(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],r)}catch{}const n=$t(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Kt(n);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Ft as $,$ as A,kn as B,o as C,a as D,Et as E,ar as F,rt as G,ln as H,O as I,mt as J,rr as K,F as L,er as M,un as N,At as O,Mn as P,_r as Q,In as R,hr as S,nt as T,Xn as U,zn as V,sn as W,ur as X,P as Y,yr as Z,dn as _,Er as a,En as a0,tr as a1,ut as a2,Bn as a3,Un as a4,Vn as a5,sr as a6,ct as a7,Nn as a8,Cn as a9,Yn as aa,nr as ab,_t as ac,Jn as ad,jn as ae,$t as af,Ot as ag,vn as ah,wr as ai,Ln as aj,Fn as ak,$n as al,Tt as am,m as an,W as ao,Gn as ap,Kn as aq,Zn as ar,qn as as,cr as at,Wn as au,Gt as av,Tr as aw,Qn as ax,zt as ay,pn as b,w as c,k as d,xr as e,ir as f,vr as g,D as h,f as i,gr as j,mr as k,bn as l,Rr as m,Pn as n,fn as o,Ar as p,Hn as q,Zt as r,X as s,dr as t,pr as u,or as v,lr as w,fr as x,On as y,K as z};
