!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){"use strict";
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const s=document.createElement("link");s.rel="stylesheet",s.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(s)},function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,r=t=>"function"==typeof t&&s.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null)=>{let s=e;for(;s!==i;){const e=s.nextSibling;t.removeChild(s),s=e}},a={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${l}--\x3e`,m=new RegExp(`${l}|${d}`),p="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;let i=-1,s=0;const r=[],n=e=>{const o=e.content,a=document.createTreeWalker(o,133,null,!1);let c=0;for(;a.nextNode();){i++;const e=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let n=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(l)>=0&&n++;for(;n-- >0;){const r=t.strings[s],n=g.exec(r)[2],o=n.toLowerCase()+p,a=e.getAttribute(o).split(m);this.parts.push({type:"attribute",index:i,name:n,strings:a}),e.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===e.tagName&&n(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const n=e.parentNode,o=t.split(m),a=o.length-1;for(let t=0;t<a;t++)n.insertBefore(""===o[t]?f():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++i});""===o[a]?(n.insertBefore(f(),e),r.push(e)):e.data=o[a],s+=a}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&i!==c||(i++,t.insertBefore(f(),e)),c=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(r.push(e),i--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1})}}};n(e);for(const t of r)t.parentNode.removeChild(t)}}const u=t=>-1!==t.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,s=0;const r=t=>{const n=document.createTreeWalker(t,133,null,!1);let o=n.nextNode();for(;i<e.length&&null!==o;){const t=e[i];if(u(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));i++}else s++,"TEMPLATE"===o.nodeName&&r(o.content),o=n.nextNode();else this._parts.push(void 0),i++}};return r(t),n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="";for(let i=0;i<t;i++){const t=this.strings[i],s=g.exec(t);e+=s?t.substr(0,s.index)+s[1]+s[2]+p+s[3]+l:t+d}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=t=>null===t||!("object"==typeof t||"function"==typeof t);class b{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||_(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(_(t)?t!==this.value&&this._commitText(t):t instanceof y?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===c?(this.value=c,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this._commitNode(s),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)void 0===(i=e[s])&&(i=new S(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class w{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class P extends b{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends x{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;r(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=k(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(t,e,i,s){const r=e[0];return"."===r?new P(t,e.slice(1),i).parts:"@"===r?[new A(t,e.slice(1),s.eventContext)]:"?"===r?[new w(t,e.slice(1),i)]:new b(t,e,i).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function E(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(l);return void 0===(i=e.keyString.get(s))&&(i=new h(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const V=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const z=(t,...e)=>new y(t,e,"html",T),M=133;function R(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,M,null,!1);let n=U(s),o=s[n],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,o=s[n=U(s,n)]}l.forEach(t=>t.parentNode.removeChild(t))}const j=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,M,null,!1);for(;i.nextNode();)e++;return e},U=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(u(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),q=!1);const L=t=>e=>{const i=I(e.type,t);let s=V.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(i,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(l);if(void 0===(r=s.keyString.get(n))){const i=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(i,t),r=new h(e,i),s.keyString.set(n,r)}return s.stringsArray.set(e.strings,r),r},$=["html","svg"],F=new Set,B=(t,e,i)=>{F.add(i);const s=t.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,i);const r=document.createElement("style");for(let t=0;t<s.length;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}if((t=>{$.forEach(e=>{const i=V.get(I(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),R(t,i)})})})(i),function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,M,null,!1);let o=U(r),a=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===i&&(a=j(e),i.parentNode.insertBefore(e,i));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=U(r,o);return}o=U(r,o)}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i),window.ShadyCSS.nativeShadow){const i=e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),R(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},D=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Y=32;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const s=this[t];this[i]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=W){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||H,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||H.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Y,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=J){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,r=s._classProperties.get(t)||J;s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{t=i,e=s});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Y}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}Z.finalized=!0;const tt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const et=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let s=0,r=e.length;s<r;s++){const r=e[s];Array.isArray(r)?t(r,i):i.push(r)}return i}(t);class it extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){et(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}it.finalized=!0,it.render=((t,e,i)=>{const s=i.scopeName,r=O.has(e),n=e instanceof ShadowRoot&&q&&t instanceof y,a=n&&!F.has(s),c=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=O.get(e);void 0===s&&(o(e,e.firstChild),O.set(e,s=new S(Object.assign({templateFactory:E},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,c,Object.assign({templateFactory:L(s)},i)),a){const t=O.get(c);O.delete(c),t.value instanceof v&&B(c,t.value.template,s),o(e,e.firstChild),e.appendChild(c),O.set(e,t)}!r&&n&&window.ShadyCSS.styleElement(e.host)});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const st=z`<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0,0,0,0.87));margin:0;padding:8px 0;line-height:1.5rem;list-style-type:none}.mdc-list-item__secondary-text{color:rgba(0,0,0,0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0,0,0,0.54))}.mdc-list-item__graphic{background-color:rgba(0,0,0,0)}.mdc-list-item__graphic{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38))}.mdc-list-item__meta{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0,0,0,0.38))}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden}.mdc-list-item:focus{outline:none}.mdc-list-item--selected,.mdc-list-item--activated{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item--selected .mdc-list-item__graphic,.mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px;display:inline-flex;flex-shrink:0;align-items:center;justify-content:center}.mdc-list-item[dir="rtl"] .mdc-list-item__graphic,[dir="rtl"] .mdc-list-item .mdc-list-item__graphic{margin-left:32px;margin-right:0}.mdc-list-item__meta{margin-left:auto;margin-right:0}.mdc-list-item[dir="rtl"] .mdc-list-item__meta,[dir="rtl"] .mdc-list-item .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__text,.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}.mdc-list-item__secondary-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:36px;width:20px;height:20px}.mdc-list-item[dir="rtl"] .mdc-list--dense .mdc-list-item__graphic,[dir="rtl"] .mdc-list-item .mdc-list--dense .mdc-list-item__graphic{margin-left:36px;margin-right:0}.mdc-list--avatar-list .mdc-list-item{height:56px}.mdc-list--avatar-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}.mdc-list-item[dir="rtl"] .mdc-list--avatar-list .mdc-list-item__graphic,[dir="rtl"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__graphic{margin-left:16px;margin-right:0}:not(.mdc-list--non-interactive)>.mdc-list-item{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity}:not(.mdc-list--non-interactive)>.mdc-list-item::before,:not(.mdc-list--non-interactive)>.mdc-list-item::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-list--non-interactive)>.mdc-list-item::before{transition:opacity 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list--non-interactive)>.mdc-list-item::before,:not(.mdc-list--non-interactive)>.mdc-list-item::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list--non-interactive)>.mdc-list-item::before,:not(.mdc-list--non-interactive)>.mdc-list-item::after{background-color:#000}:not(.mdc-list--non-interactive)>.mdc-list-item:hover::before{opacity:.04}:not(.mdc-list--non-interactive)>.mdc-list-item:not(.mdc-ripple-upgraded):focus::before,:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>.mdc-list-item:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>.mdc-list-item:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}:not(.mdc-list--non-interactive)>.mdc-list-item--activated::before{opacity:.12}:not(.mdc-list--non-interactive)>.mdc-list-item--activated::before,:not(.mdc-list--non-interactive)>.mdc-list-item--activated::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){:not(.mdc-list--non-interactive)>.mdc-list-item--activated::before,:not(.mdc-list--non-interactive)>.mdc-list-item--activated::after{background-color:var(--mdc-theme-primary, #6200ee)}}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:hover::before{opacity:.16}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:not(.mdc-ripple-upgraded):focus::before,:not(.mdc-list--non-interactive)>.mdc-list-item--activated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.28}:not(.mdc-list--non-interactive)>.mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .28}:not(.mdc-list--non-interactive)>.mdc-list-item--selected::before{opacity:.08}:not(.mdc-list--non-interactive)>.mdc-list-item--selected::before,:not(.mdc-list--non-interactive)>.mdc-list-item--selected::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){:not(.mdc-list--non-interactive)>.mdc-list-item--selected::before,:not(.mdc-list--non-interactive)>.mdc-list-item--selected::after{background-color:var(--mdc-theme-primary, #6200ee)}}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:hover::before{opacity:.12}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before,:not(.mdc-list--non-interactive)>.mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>.mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .24}.mdc-list--two-line .mdc-list-item{height:72px}.mdc-list--two-line.mdc-list--dense .mdc-list-item{height:60px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item{height:48px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:20px;width:36px;height:36px}.mdc-list-item[dir="rtl"] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir="rtl"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:20px;margin-right:0}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-list-divider{border-bottom-color:rgba(0,0,0,0.12)}.mdc-list-divider--padded{margin:0 16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}.mdc-list-group[dir="rtl"] .mdc-list-divider--inset,[dir="rtl"] .mdc-list-group .mdc-list-divider--inset{margin-left:0;margin-right:72px}.mdc-list-divider--inset.mdc-list-divider--padded{width:calc(100% - 72px - 16px)}.mdc-list-group .mdc-list{padding:0}.mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;margin:.75rem 16px}.mdc-list-group__subheader{color:rgba(0,0,0,0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0,0,0,0.87))}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host([aria-disabled="true"])>.mdc-list-item:focus::before{opacity:0}
</style>`;i(0);i.d(e,"ListItem",function(){return rt});class rt extends it{static get properties(){return{label:{type:String},icon:{type:String},disabled:{type:Boolean}}}constructor(){super(),this.label="",this.icon="",this.disabled=!1}renderStyle(){return st}render(){const{label:t,icon:e,disabled:i}=this;
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
return function(t,e){for(const i in e){const s=!0===e[i]?"":e[i];s||""===s||0===s?t.getAttribute(i)!==s&&t.setAttribute(i,String(s)):t.hasAttribute(i)&&t.removeAttribute(i)}}(this,{"aria-disabled":i?"true":null}),z`
      ${this.renderStyle()}
      <div class="mdc-list-item" role="menuitem" tabindex="0" aria-disabled="${i}">
        ${this.printIcon(e)}
        ${this.printLabel()}
        <slot></slot>
      </div>`}printLabel(t){return t||""}printIcon(t){return t?z`<span class="material-icons">${t}</span>`:z``}firstUpdated(){this._listItem=this.shadowRoot.querySelector(".mdc-list-item")}get listItem(){return this._listItem}focus(){this.listItem.focus()}}customElements.define("mwc-list-item",rt)}]);