(()=>{"use strict";var t=function(t,e,o,i){return new(o||(o=Promise))((function(n,c){function s(t){try{h(i.next(t))}catch(t){c(t)}}function r(t){try{h(i.throw(t))}catch(t){c(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,r)}h((i=i.apply(t,e||[])).next())}))};console.log("Hello from background script!");class e{constructor(){this.chrome=chrome,this.checking=!1,this.timerId=void 0,this.time=0,this.timeStamp=[]}getFromContent(){return t(this,void 0,void 0,(function*(){yield this.chrome.runtime.onMessage.addListener(((t,e,o)=>{switch(console.log(t),t.code){case"START_CHECKING":this.startChecking(),o({code:"START_CHECKING_SUCCEESS"});break;case"STOP_CHECKING":this.stopChecking(),o({code:"STOP_CHECKING_SUCCEESS"});break;default:o({code:"GET_MESSAGE_ERROR"})}}))}))}getAllWindows(){this.chrome.windows.getAll((t=>{t&&t.forEach((t=>{var e;null===(e=t.tabs)||void 0===e||e.forEach((t=>{}))}))}))}startChecking(){return t(this,void 0,void 0,(function*(){try{yield new Promise(((t,e)=>{this.timerId=setInterval((()=>{this.time++,console.log(this.time)}),1e3),e()}))}catch(t){console.log("err occ")}}))}stopChecking(){const t=this.timerId;if(console.log(t,"id"),!t)return this.chrome.runtime.sendMessage({code:"STOP_CHECKING_ERROR"});clearInterval(t),this.timerId=void 0}}chrome.runtime.onInstalled.addListener((t=>{const o=chrome.runtime.getManifest();o.content_scripts&&o.content_scripts[0]&&chrome.tabs.query({url:o.content_scripts[0].matches},(t=>{t[0]&&t[0].id&&chrome.scripting.executeScript({target:{tabId:t[0].id,allFrames:!0},files:["content.js"]},(t=>{console.log(t)}))})),new e}))})();