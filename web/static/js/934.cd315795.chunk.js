/*! For license information please see 934.cd315795.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_sand_clock=self.webpackChunkionic_sand_clock||[]).push([[934],{8934:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return o}});var i=n(226),o=function(t){var e,n,o,l=10*-f,v=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){l=(0,i.u)(t),E(t)},L=function(){clearTimeout(o),o=void 0,e&&(g(!1),e=void 0)},w=function(t){e||k(a(t),t)},E=function(t){k(void 0,t)},k=function(t,n){if(!t||t!==e){clearTimeout(o),o=void 0;var a=(0,i.q)(n),c=a.x,d=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||b(e,c,d),g(!0)}if(t){var f=h.get(t);f&&(clearTimeout(f),h.delete(t));var l=r(t)?0:u;t.classList.remove(s),o=setTimeout((function(){b(t,c,d),o=void 0}),l)}e=t}},b=function(t,e,i){v=Date.now(),t.classList.add(s);var o=p&&c(t);o&&o.addRipple&&(T(),n=o.addRipple(e,i))},T=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},g=function(t){T();var n=e;if(n){var i=d-Date.now()+v;if(t&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(s),h.delete(n)}),d);h.set(n,o)}else n.classList.remove(s)}},R=document;R.addEventListener("ionGestureCaptured",L),R.addEventListener("touchstart",(function(t){l=(0,i.u)(t),w(t)}),!0),R.addEventListener("touchcancel",m,!0),R.addEventListener("touchend",m,!0),R.addEventListener("pointercancel",L,!0),R.addEventListener("mousedown",(function(t){if(2!==t.button){var e=(0,i.u)(t)-f;l<e&&w(t)}}),!0),R.addEventListener("mouseup",(function(t){var e=(0,i.u)(t)-f;l<e&&E(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);