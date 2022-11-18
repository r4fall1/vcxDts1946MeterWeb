(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],u=0,p=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/r4fall1/vcxDts1946MeterWeb@v1.1.8/prd/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},1896:function(e,t,r){},2:function(e,t){},3:function(e,t){},"3f31":function(e,t,r){"use strict";r("1896")},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=(r("7b17"),r("ab8b"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"h-100 container",attrs:{id:"app"}},[e._m(0),t("table",{staticClass:"table table-striped table-hover"},[e._m(1),t("tbody",[t("tr",[t("td",[e._v("Voltage")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.voltageL1)))]),e._v(" V")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.voltageL2)))]),e._v(" V")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.voltageL3)))]),e._v(" V")]),t("td")]),t("tr",[t("td",[e._v("Current")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.currentL1)))]),e._v(" A")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.currentL2)))]),e._v(" A")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.currentL3)))]),e._v(" A")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.currentL1+e.energyMeter.currentL2+e.energyMeter.currentL3)))]),e._v(" A")])]),t("tr",[t("td",[e._v("Power")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.powerL1)))]),e._v(" kW")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.powerL2)))]),e._v(" kW")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.powerL3)))]),e._v(" kW")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.totalPower)))]),e._v(" kW")])]),t("tr",[t("td",[e._v("Reactive power")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.reactivePowerL1)))]),e._v(" VAr")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.reactivePowerL2)))]),e._v(" VAr")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.reactivePowerL3)))]),e._v(" VAr")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.totalReactivePower)))]),e._v(" VAr")])]),t("tr",[t("td",[e._v("Apparent power")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.apparentPowerL1)))]),e._v(" VA")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.apparentPowerL2)))]),e._v(" VA")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.apparentPowerL3)))]),e._v(" VA")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.totalApparentPower)))]),e._v(" VA")])]),t("tr",[t("td",[e._v("Power factor")]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.powerFactorL1)))])]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.powerFactorL2)))])]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.powerFactorL3)))])]),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.totalPowerFactor)))])])]),t("tr",[t("td",[e._v("Frequency")]),t("td"),t("td"),t("td"),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.frequency)))]),e._v(" Hz")])]),t("tr",[t("td",[e._v("Imported active energy")]),t("td"),t("td"),t("td"),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.importActiveEnergy)))]),e._v(" kWh")])]),t("tr",[t("td",[e._v("Exported active energy")]),t("td"),t("td"),t("td"),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.exportActiveEnergy)))]),e._v(" kWh")])]),t("tr",[t("td",[e._v("Imported reactive energy")]),t("td"),t("td"),t("td"),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.importReactiveEnergy)))]),e._v(" kVArh")])]),t("tr",[t("td",[e._v("Exported reactive energy")]),t("td"),t("td"),t("td"),t("td",[t("span",[e._v(e._s(e._f("formatNumber")(e.energyMeter.exportReactiveEnergy)))]),e._v(" kVArh")])])])]),e._m(2),e._m(3),t("div",{staticClass:"accordion pt-4",attrs:{id:"accordionButtons"}},[t("div",{staticClass:"accordion-item"},[e._m(4),t("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-bs-parent":"#accordionButtons"}},[t("div",{staticClass:"accordion-body row"},[t("div",{staticClass:"col"},[t("button",{staticClass:"btn btn-sm btn-success ms-2 me-2",attrs:{type:"button"},on:{click:e.goToSettingsPage}},[e._v("Settings")]),t("button",{staticClass:"btn btn-sm btn-outline-secondary ms-2 me-2",attrs:{type:"button"},on:{click:e.goToActualConfigPage}},[e._v("RAW config")]),t("button",{staticClass:"btn btn-sm btn-outline-secondary ms-2 me-2",attrs:{type:"button"},on:{click:e.goToInfoPage}},[e._v("RAW device info")]),t("button",{staticClass:"btn btn-sm btn-outline-secondary ms-2 me-2",attrs:{type:"button"},on:{click:e.goToEnergyValuesPage}},[e._v("RAW energy values")])]),t("div",{staticClass:"col"},[t("button",{staticClass:"btn btn-sm btn-danger ms-2 me-2 float-end",attrs:{type:"button"},on:{click:e.goToUpdatePage}},[e._v("Update")]),t("button",{staticClass:"btn btn-sm btn-danger ms-2 me-2 float-end",attrs:{type:"button"},on:{click:e.restartModule}},[e._v("Restart")])])])])])]),t("div",{staticClass:"col-xs-12",staticStyle:{height:"50px"}})])}),o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-3 pb-2 d-flex align-items-center"},[t("span",{staticClass:"display-5 me-3"},[e._v("Energy meter")])])},function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[e._v("Data description")]),t("th",{staticClass:"phase-value",attrs:{scope:"col"}},[e._v("L1")]),t("th",{staticClass:"phase-value",attrs:{scope:"col"}},[e._v("L2")]),t("th",{staticClass:"phase-value",attrs:{scope:"col"}},[e._v("L3")]),t("th",{staticClass:"total-value",attrs:{scope:"col"}},[e._v("Total")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-column mt-5"},[t("div",{staticClass:"row justify-content-end mb-2"},[t("div",{staticClass:"col-auto mt-1"},[t("span",[e._v("Refresh interval:")])]),t("div",{staticClass:"col-auto m-0 p-0"},[t("select",{staticClass:"form-select form-select-sm",attrs:{id:"max-data-age"}},[t("option",{attrs:{value:"-1"}},[e._v("None")]),t("option",{attrs:{value:"10"}},[e._v("10 Seconds")]),t("option",{attrs:{value:"60"}},[e._v("1 Minute")]),t("option",{attrs:{value:"600"}},[e._v("10 Minutes")]),t("option",{attrs:{selected:"",value:"3600"}},[e._v("1 Hour")])])]),t("div",{staticClass:"col-auto ms-3"},[t("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button",id:"refresh-button"}},[e._v("Refresh")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"h-100",attrs:{id:"content"}},[t("div",{staticClass:"h-100",attrs:{id:"dashboard"}})])},function(){var e=this,t=e._self._c;return t("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[t("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e._v(" Navigation ")])])}],s=r("d778"),c=r("bc3a");const i=r("6612");var l={name:"App",data(){return{dashboard:{url:String,id:String},energyMeter:{voltageL1:0,voltageL2:0,voltageL3:0,currentL1:0,currentL2:0,currentL3:0,powerL1:0,powerL2:0,powerL3:0,totalPower:0,reactivePowerL1:0,reactivePowerL2:0,reactivePowerL3:0,totalReactivePower:0,apparentPowerL1:0,apparentPowerL2:0,apparentPowerL3:0,totalApparentPower:0,powerFactorL1:0,powerFactorL2:0,powerFactorL3:0,totalPowerFactor:0,frequency:0,importActiveEnergy:0,exportActiveEnergy:0,importReactiveEnergy:0,exportReactiveEnergy:0}}},mounted(){c["a"].get("/actual-config").then((function(e){return e.data})).catch((function(e){console.log(e)})).then(e=>{this.dashboard.url=e.dashboardBaseUrl,this.dashboard.id=e.dashboardId;let t=new s["a"]({baseUrl:this.dashboard.url}),r=t.createDashboard({dashboardId:this.dashboard.id});async function a(){await r.render(document.getElementById("dashboard")),await r.setTheme("light"),await r.setHeightMode("scale"),await r.setWidthMode("scale"),await r.setChartsBackground("transparent"),await r.setMaxDataAge(3600)}a().catch(e=>window.alert(e.message)),document.getElementById("refresh-button").addEventListener("click",(async function(){await r.refresh()})),document.getElementById("max-data-age").addEventListener("change",async e=>{await r.setMaxDataAge(Number(e.target.value))})})},created:function(){const e=this;setInterval((function(){c["a"].get("/energy").then((function(e){return e.data})).catch((function(e){console.log(e)})).then(t=>{e.energyMeter.voltageL1=t.vL1,e.energyMeter.voltageL2=t.vL2,e.energyMeter.voltageL3=t.vL3,e.energyMeter.currentL1=t.cL1,e.energyMeter.currentL2=t.cL2,e.energyMeter.currentL3=t.cL3,e.energyMeter.powerL1=t.pL1,e.energyMeter.powerL2=t.pL2,e.energyMeter.powerL3=t.pL3,e.energyMeter.totalPower=t.tP,e.energyMeter.reactivePowerL1=t.rPL1,e.energyMeter.reactivePowerL2=t.rPL2,e.energyMeter.reactivePowerL3=t.rPL3,e.energyMeter.totalReactivePower=t.tRP,e.energyMeter.apparentPowerL1=t.aPL1,e.energyMeter.apparentPowerL2=t.aPL2,e.energyMeter.apparentPowerL3=t.aPL3,e.energyMeter.totalApparentPower=t.tAP,e.energyMeter.powerFactorL1=t.pFL1,e.energyMeter.powerFactorL2=t.pFL2,e.energyMeter.powerFactorL3=t.pFL3,e.energyMeter.totalPowerFactor=t.tPF,e.energyMeter.frequency=t.f,e.energyMeter.importActiveEnergy=t.iAE,e.energyMeter.exportActiveEnergy=t.eAE,e.energyMeter.importReactiveEnergy=t.iRE,e.energyMeter.exportReactiveEnergy=t.eRE})}),5500)},filters:{formatNumber(e){return i(e).format("0.00")}},methods:{goToSettingsPage(){window.location.href="/config"},goToUpdatePage(){window.location.href="/update"},restartModule(){window.location.href="/restart"},goToActualConfigPage(){window.location.href="/actual-config"},goToEnergyValuesPage(){window.location.href="/energy"},goToInfoPage(){window.location.href="/info"}}},d=l,u=(r("3f31"),r("2877")),p=Object(u["a"])(d,n,o,!1,null,null,null),v=p.exports;new a["a"]({render:e=>e(v)}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}});
//# sourceMappingURL=app.js.map