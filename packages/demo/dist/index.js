!function(t){var e={};function o(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(6);e.System=s.default;const n=o(5);e.Component=n.default;const r=o(3);e.Entity=r.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(0);e.default=class extends s.Entity{constructor(t){super(),this.renderComponent=this.renderComponent}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(0);e.default=class extends s.Component{constructor(t,e,o){super(),this._position={x:t,y:e},this._ctx=o}setPostion(t,e){this._position.x=t,this._position.y=e}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(...t){this._uuid=0,this._components=t}getId(){return this._uuid}get isActive(){return this._isActive}set isActive(t){this._isActive=t}get components(){return this._components}add(t){return this.components.push(t),t}remove(t){let e=this.components.indexOf(t);this.components.splice(e,1)}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.getBaseClass=function(t){let e=Object.getPrototypeOf(t);for(;e.name;)t=e,e=Object.getPrototypeOf(t);return t},t.getFor=function(t){return Object.getPrototypeOf(t).constructor}}(e.Constructor||(e.Constructor={}))},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(4);e.default=class{constructor(){}getComponentClass(){return s.Constructor.getFor(this)}is(t){return s.Constructor.getFor(this)===t}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.components=[]}register(t){this.components.push(t)}deregister(t){this.components.splice(this.components.indexOf(t))}update(t){for(const e of this.components)this.next(e,t)}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(0);e.default=class extends s.System{next(t,e){console.log("component",t),t._ctx.fillStyle="#FF0000",t._ctx.fillRect(t._position.x,t._position.y,25,25)}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(7),n=o(2),r=o(1);e.default=class{constructor(t){this.systems=[],this.loop=(t=>{for(const e of this.systems)e.update(t)}),this.ctx=t,this.init()}init(){let t=new n.default(100,200,this.ctx),e=new s.default,o=new n.default(200,200,this.ctx);new r.default(t),new r.default(o),e.register(t),e.register(o),this.systems.push(e)}run(){this.loop(null)}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=o(8),n=document.body.querySelector("#ctx").getContext("2d");console.log("game start"),new s.default(n).run()}]);