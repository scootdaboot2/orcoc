// promises polyfill
(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);

var today = Date.now();
var nfids = {};
var ofids = {};
var rxfids = {};
var incidents = {};
var airtanker;
var dozer;
var engine;
var crews;
var fixedWing;
var IMTs;
var helicopter;
var lightning6;
var lightning12;
var lightning24;
// var airtankerR = [];
// var dozerR = [];
// var engineR = [];
// var crewsR = [];
// var fixedWingR = [];
// var IMTsR = [];
// var helicopterR = [];
var resItems = [];
// var resItems = [airtankerR, dozerR, engineR, crewsR, fixedWingR, IMTsR, helicopterR];
var resources;
// resources.style.display = 'none';
var Resources;
var ResourcesP;
var resIds = [' Airtankers', ' Dozers', ' Engines', ' Crews', ' Fixed-Wing', ' IMTs', ' Helicopters'];
var legend = document.getElementById('legend').getElementsByTagName('text');
var swipe = document.getElementById('swipe');
var slide = document.getElementById('slide');
var fullscreen = document.getElementById('fullscreen');
var sidepanel = document.getElementById('sidepanel');
var side1 = document.getElementById('side1');
var maps = document.getElementById('map2d'); 
var fovStyle;
// var refresh = document.getElementById('refresh')
var mlabKey = 'PJfhY3w2U58ZczDkxR-dsqlo_9THZblN';
// var irwinToken = "J-vUH-69cbgRwwuq7wPdg4HquXGlFveN9nkQZtEG1YQplp_rferw8invEtoYMmFe5NYqKfibTlrw6eCbBhezCQ.."; // https://irwin.doi.gov/arcgis/tokens/
// var egpToken = 'sGBYcBtDfSmp017pA0VBt-_hooN9rmr18H61eeQVz-RGW1t4HieYG8RaFwdMzoXpGPjqb0vyGWMdN_CQAVRw7Q..'; // https://egp.nwcg.gov/arcgis/tokens/
var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNra3liYXd2bzAyNnYybnBhYmxyeGI0cDMifQ.pWTRm3Z4hur3TLuv9Da25g';
var bingToken = 'Al2oBjQ_opovK7NsjQhkWaPvCOJMm0fHal4-iW0JOj8IuMft5kpLVX_Ok7vriTzn';
var mapzenKey = 'vector-tiles-kPYqqBF';


function timeStamp(input) {
// Create a date object with the current time
  var now = new Date(input);

// Create an array with the current month, day and time
  var date = [ now.getFullYear(), now.getMonth() + 1, now.getDate() ];
// Create an array with the current hour, minute and second
  var time = [ now.getHours(), now.getMinutes() ];
// If seconds and minutes are less than 10, add a zero
  time[0] = time[0] < 10 ? '0' + time[0] : time[0];
  time[1] = time[1] < 10 ? '0' + time[1] : time[1];
  date[1] = date[1] < 10 ? '0' + date[1] : date[1] ;
  date[2] = date[2] < 10 ? '0' + date[2] : date[2] ;
// Return the formatted string
  return date.join('') + time.join('');
}

function resSort (array) {
  return array.map(function(current_value, index, initial_array) {
    var oo = {};
    // console.log(current_value);
    var key = current_value.attributes.IncName;
    // console.log(key);
    // var str = current_value.attributes.IncNumber;
    // var key = str.length = 15 ? str.slice(0, 4) + '-' + str.slice(4, 9) + '-' + str.slice(9, 15) : str.slice(0, 4) + '-' + str.slice(4, 10) + '-' + str.slice(9, 16) ; 
    var Name = current_value.attributes.Name;
    // console.log(Name);
    var MobDate = current_value.attributes.MobDate;
    var ResProvAgency = current_value.attributes.ResProvAgency;
    oo[key] = {"Name" : '<span>Name: ' + Name + '</span>', "Mob Date" : '<br><span>&nbsp;&nbsp;&nbsp;&nbsp;Mob Date: ' + new Date(parseInt(MobDate)).toLocaleString() + '</span>', "Agency" : '<br><span>&nbsp;&nbsp;&nbsp;&nbsp;Agency: ' + ResProvAgency + '</span><br>'};
    return oo;
  }); 
}
// var resSort = function(array, resources) {
//   for (i = 0; i < array.length; i++) {
//     var oo = {};
//     var str = array[i].attributes.IncNumber;
//     var key = str.length = 15 ? str.slice(0, 4) + '-' + str.slice(4, 9) + '-' + str.slice(9, 15) : str.slice(0, 4) + '-' + str.slice(4, 10) + '-' + str.slice(9, 16) ; 
//     var Name = array[i].attributes.Name;
//     var MobDate = array[i].attributes.MobDate;
//     var ResProvAgency = array[i].attributes.ResProvAgency;
//     oo[key] = {"Name" : '<span>Name: ' + Name + '</span>', "Mob Date" : '<br><span>&nbsp;&nbsp;&nbsp;&nbsp;Mob Date: ' + new Date(parseInt(MobDate)).toLocaleString() + '</span>', "Agency" : '<br><span>&nbsp;&nbsp;&nbsp;&nbsp;Agency: ' + ResProvAgency + '</span><br>'};
//     resources[i] = oo;
//   }
// } 
var irwin;
var egp;
var options = {
  method: String,
  url: String,
  params: String | Object,
  headers: Object
};

function ajax(options) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.responseType = '';
    xhr.onload = function() {
      if (this.status <= 200 && this.status < 300) {
        resolve(xhr.response);
      } 
      else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (options.headers) {
      Object.keys(options.headers).forEach(function(key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    };
    var params = options.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    };
    xhr.send(params);
  });
}

var addVectorLayerSource = function(config, sourceObject, layer) {
  return new Promise(function(success, failure) {
    var source = ajax(config).then(function(response) {
      sourceObject.url = sourceObject.url + JSON.parse(response).token;
      var sourceName = new ol.source.Vector(sourceObject);
      return {newSource: sourceName, newLayer: layer};
    });
    source == null ? failure(source) : success(source);
  });
}
function loadSource(source) {
  source['newLayer'].setSource(source['newSource']);   
}
function noToken(source) {
  console.log('Could not get token');
}

var perims = [];
var gsPerims;
// ajax({
//   method: 'POST',
//   url: 'https://irwin.doi.gov/arcgis/tokens/generateToken',
//   params: {
//     f: 'json',
//     username: IRWIN1,
//     password: IRWIN2,
//     client: 'referer',
//     referer: 'https://gacc.nifc.gov/gbcc/',
//     expiration: '1440'
//   },
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// })
// .then(function(firstValue) {
//   irwin = JSON.parse(firstValue).token;
//   return ajax({
//     method: 'POST',
//     url: 'https://egp.nwcg.gov/arcgis/tokens/',
//     params: {
//       f: 'json',
//       username: EGP1,
//       password: EGP2,
//       client: 'referer',
//       referer: 'https://gacc.nifc.gov/gbcc/',
//       expiration: '1440'
//     },
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   });
  // return ajax({
  //   method: 'GET',
  //   url: 'https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?l=1&apiKey=' + mlabKey,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });
// })
ajax({
  method: 'POST',
  url: 'https://gacc.nifc.gov/gbcc/',
  // url: 'https://egp.nwcg.gov/arcgis/tokens/',
  // params: {
  //   f: 'json',
  //   username: EGP1,
  //   password: EGP2,
  //   client: 'referer',
  //   referer: 'https://gacc.nifc.gov/gbcc/',
  //   expiration: '1440'
  // },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(function(secondValue) {
  // console.log('selection1.js ', secondValue)
  // egp = JSON.parse(secondValue).token;
  // var duh = 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
  //           +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
  //           +'&token=' + egp;


  function loadjsfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
      var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript")
      fileref.setAttribute("src", filename)
    }
    if (typeof fileref!="undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
  }
  loadjsfile("firecesium/examples/selection2.js", "js"); //dynamically load and add this .js file
  refresh.innerHTML = new Date(Date.now()).toLocaleString().split(', ')[1];
  // return ajax({
  //   method: 'GET',
  //   url: 'https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?l=1&apiKey=' + mlabKey,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // return ajax({
  //   method: 'GET',
  //   url: duh,
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // })

})
// .then(function(thirdValue) {
//   // perims = thirdValue;
//   perims = JSON.parse(thirdValue)
//   gsPerims = perims[0];
//   // perims = thirdValue.slice(1,(perims.length - 1));
//   // perims = thirdValue.slice(1, -1); // or this way
//   // gsPerims = JSON.parse(perims);
//   // console.log(gsPerims);

// })
// .then(function(val) {
//   console.log('val ', val)
// })
.catch(function(error) {
  console.error('damnit.', error.statusText);
  // function loadjsfile(filename, filetype){
  //   if (filetype=="js"){ //if filename is a external JavaScript file
  //     var fileref=document.createElement('script')
  //     fileref.setAttribute("type","text/javascript")
  //     fileref.setAttribute("src", filename)
  //   }
  //   if (typeof fileref!="undefined")
  //     document.getElementsByTagName("head")[0].appendChild(fileref)
  // }
  // loadjsfile("firecesium/examples/selection2.js", "js"); //dynamically load and add this .js file
  // refresh.innerHTML = new Date(Date.now()).toLocaleString().split(', ')[1];
});

var rxFiresStyleCache = {};
var rxFiresStyleFunction = function(feature) {
  if (feature.get('FireOutDateTime')) return;
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
  var radius = (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres);
  var style = rxFiresStyleCache[radius];
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
        }),
        stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
        radius: radius
      })
    });
    rxFiresStyleCache[radius] = style;
  }
  return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? style : fireStyles['Point'];
}

var rxFiresLayer = new ol.layer.Vector({
  title: 'Prescribed Fires',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    format: new ol.format.GeoJSON(),
    url: 'https://gbcc.us/id-bdc_rxfires.geojson'
    // url : "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
    //   + "&where=(GACC = 'GBCC') AND (CreatedBySystem = 'wildcad')" 
    //   + " AND (CreatedOnDateTime >= " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
    //   + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX') AND (IncidentTypeCategory <> 'FA')"
    //   + " AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
    //   + "&returnGeometry=true"
    //   + "&spatialRel=esriSpatialRelIntersects"
    //   + "&outFields=*"
    //   + "&outSR=102100"
    //   + "&token=" + irwin
  }),
  visible: true,
  wrapX: false,
  style: rxFiresStyleFunction
});

var newFiresStyleCache = {};
var newFiresStyleFunction = function(feature) {
  if (feature.get('FireOutDateTime')) return;
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
  var radius = (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres);
  var style = newFiresStyleCache[radius];
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(232,14,14,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
        }),
        stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'rgba(232,14,14,1)', width: 3}),
        radius: radius
      })
    });
    newFiresStyleCache[radius] = style;
  }
  return (discovery >= (today - 60*86400000) && discovery < (today + 86400000)) ? style : fireStyles['Point'];
}
// var newFiresStyleFunction = function(feature) {
//   var discovery = feature.get('FireDiscoveryDateTime');
//   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   var style = newFiresStyleCache[acres];
//   if (!style) {
//     style = new ol.style.Style({
//       image: new ol.style.Circle({
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres),
//         fill: new ol.style.Fill({
//           color: 'rgba(232,14,14,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), 
//       })
//     });
//     newFiresStyleCache[acres] = style;
//   }
//   return (discovery >= (today - 1.5*86400000)) ? [newFiresStyleCache[acres]] : fireStyles['Point'];
// }

var newFiresLayer = new ol.layer.Vector({
  title: 'New Fires',
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    crossOrigin: 'anonymous',
    // url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
    //     +"&where=(GACC = 'GBCC') AND (CreatedBySystem = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.25*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
    //     +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA') AND (UniqueFireIdentifier <> '2016-NVWID-020086')" 
    //     +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
    //     +"&token=" + irwin
    url: 'https://gbcc.us/id-bdc_newfires.geojson'
  }),
  visible: true,
  wrapX: false,
  style: newFiresStyleFunction
});

var ongoingFiresStyleCache = {};
var ongoingFiresStyleFunction = function(feature) {
  if (feature.get('FireOutDateTime')) return;
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
  var style = ongoingFiresStyleCache[acres];
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(254,253,6,' + opacity(acres) + ')'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 3}), // 'rgba(243,206,104,1)'
        radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
      })
    });
    ongoingFiresStyleCache[acres] = style;
  }
  return (discovery > (today - 365*86400000) && discovery < (today - 1.25*86400000)) ? style : fireStyles['Point'];
};

var ongoingFiresLayer = new ol.layer.Vector({
  title: 'Ongoing Fires',
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    crossOrigin: 'anonymous',
    url: 'https://gbcc.us/id-bdc_ongoingfires.geojson'
    // url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
    //     +"&where=(GACC = 'GBCC') AND (CreatedBySystem = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FireOutDateTime IS NULL) AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
    //     +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1') AND (UniqueFireIdentifier <> '2016-IDSCF-016269')"
    //     +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
    //     +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
    //     +"&token=" + irwin
  }),
  visible: true,
  wrapX: false,
  style: ongoingFiresStyleFunction
});
var teamFiresStyleCache = {};
var teamFiresStyleFunction = function(feature) {
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
  var style = teamFiresStyleCache[acres];
  var alpha = opacity(acres) < 0 ? .1 : opacity(acres);
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(145,9,198,' + alpha + ')'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(145,9,198,1)', width: 3}), 
        radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres) 
      })
    });
    teamFiresStyleCache[acres] = style;
  }
  return (discovery > (today - 90*86400000) && discovery < (today - 0*86400000)) ? style : fireStyles['Point'];
}
// var teamStyle = function(feature) {
//   var style = new ol.style.Style({
//     image: new ol.style.Circle({
//       // fill: new ol.style.Fill({
//       //   color: 'rgba(253,2,125,.1)'
//       // }), 
//       stroke: new ol.style.Stroke({color: 'rgba(145,9,198,1)', width: 3}),
//       radius: 15
//     })
//   });
//   return style;
// }
var teamFiresLayer = new ol.layer.Vector({
  title: 'Team Fires',
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    crossOrigin: 'anonymous',
    url: 'https://gbcc.us/teamfires1.geojson'
    // url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
    //     +"&where=UniqueFireIdentifier = '2016-IDBOF-000539' OR UniqueFireIdentifier = '2016-ID8BN-003174'"
    //     // +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
    //     +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
    //     +"&token=" + irwin
  }),
  visible: true,
  wrapX: false,
  style: teamFiresStyleFunction
  // style: teamStyle
});


var nfs = newFiresLayer.getSource();
var ofs = ongoingFiresLayer.getSource();
var rxfs = rxFiresLayer.getSource();
var countFeatures = function(layerSource, k) {
  layerSource.once('change', function(e) {
    if (layerSource.getState() === 'ready') {
        legend[k].innerHTML = layerSource.getFeatures().length + ' ' + legend[k].innerHTML;
    }
    // console.log("count", layerSource.getFeatures())
  });
}
function firepop(ids, layerSource) {
  layerSource.once('change', function(e) {
    if (layerSource.getState() === 'ready') {
      for (i = 0; i < layerSource.getFeatures().length; i++) {
        var key = layerSource.getFeatures()[i].getProperties().UniqueFireIdentifier;
        // var name = layerSource.getFeatures()[i].getProperties().IncidentName;
        // var date = layerSource.getFeatures()[i].getProperties().FireDiscoveryDateTime ? new Date(parseInt(layerSource.getFeatures()[i].getProperties().FireDiscoveryDateTime)).toLocaleString() : 'unknown';
        // var dispatch = layerSource.getFeatures()[i].getProperties().DispatchCenterID ? layerSource.getFeatures()[i].getProperties().DispatchCenterID : 'unknown';
        var value = {};
        ids[key] = value;
        // console.log(`id: ${key}  name: ${name}  date: ${date}  dispatch: ${dispatch}`)
      }            
    }
  });
}
firepop(nfids, nfs);
firepop(ofids, ofs);
firepop(rxfids, rxfs);
function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}
var inc = extend(nfids,ofids);
incidents = extend(inc,rxfids);
countFeatures(nfs, 0);
countFeatures(ofs, 1);
countFeatures(rxfs, 2);


var image = new ol.style.Circle({
  radius: 0,
  fill: null,
  stroke: new ol.style.Stroke({color: 'blue', width: 0})
});

var fireStyles = {
  'Point': [new ol.style.Style({
    image: image
  })],
  'LineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      lineDash: [4],
      width: 1
    })
  })],
  'MultiLineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  })],
  'MultiPoint': [new ol.style.Style({
    image: image,
    text: new ol.style.Text({
      text: 'MP',
      stroke: new ol.style.Stroke({
        color: 'purple'
      })
    })
  })],
  'MultiPolygon': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  })],
  'Polygon': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,40,249,1)',
      // lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,40,249,.6)'
    })
  })],
  'GeometryCollection': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'magenta',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'magenta'
    }),
    image: new ol.style.Circle({
      radius: 10, // pixels
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'magenta'
      })
    })
  })],
  'Circle': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })]
};

var viirsStyles = {
  '6': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(168,0,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(168,0,0,1)',
        width: 1
      }),
      points: 4,
      radius: 4,
      angle: Math.PI / 4
    })
  })],
  '12': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(230,77,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(230,77,0,1)',
        width: 1
      }),
      points: 4,
      radius: 4,
      angle: Math.PI / 4
    })
  })],
  '24': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(255,85,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,85,0,1)',
        width: 1
      }),
      points: 4,
      radius: 4,
      angle: Math.PI / 4
    })
  })],
  '48': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(255,169,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,169,0,1)',
        width: 1
      }),
      points: 4,
      radius: 4,
      angle: Math.PI / 4
    })
  })],
};

var igpointStyles = {
  '6': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(168,0,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(168,0,0,1)',
        width: 1
      }),
      points: 3,
      radius: 4,
      // rotation: Math.PI / 4,
      angle: 0
    })
  })],
  '12': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(230,77,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(230,77,0,1)',
        width: 1
      }),
      points: 3,
      radius: 4,
      // rotation: Math.PI / 4,

    })
  })],
  '24': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(255,85,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,85,0,1)',
        width: 1
      }),
      points: 3,
      radius: 4,
      // rotation: Math.PI / 4,

    })
  })],
  '48': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(255,169,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,169,0,1)',
        width: 1
      }),
      points: 3,
      radius: 4,
      // rotation: Math.PI / 4,

    })
  })],
};

// var egpModisStyles = {
//   '6': [new ol.style.Style({ 
//     image: new ol.style.RegularShape({
//       fill: new ol.style.Fill({
//         color: 'rgba(168,0,0,1)'
//       }),
//       stroke: new ol.style.Stroke({
//         color: 'rgba(168,0,0,1)',
//         width: 1
//       }),
//       points: 5,
//       radius: 5,
//       radius2: 2,
//       angle: 0
//     })
//   })],
//   '12': [new ol.style.Style({ 
//     image: new ol.style.RegularShape({
//       fill: new ol.style.Fill({
//         color: 'rgba(230,77,0,1)'
//       }),
//       stroke: new ol.style.Stroke({
//         color: 'rgba(230,77,0,1)',
//         width: 1
//       }),
//       points: 5,
//       radius: 5,
//       radius2: 2,
//       angle: 0
//     })
//   })],
//   '24': [new ol.style.Style({ 
//     image: new ol.style.RegularShape({
//       fill: new ol.style.Fill({
//         color: 'rgba(255,85,0,1)'
//       }),
//       stroke: new ol.style.Stroke({
//         color: 'rgba(255,85,0,1)',
//         width: 1
//       }),
//       points: 5,
//       radius: 5,
//       radius2: 2,
//       angle: 0
//     })
//   })],
//   '48': [new ol.style.Style({ 
//     image: new ol.style.RegularShape({
//       fill: new ol.style.Fill({
//         color: 'rgba(255,169,0,1)'
//       }),
//       stroke: new ol.style.Stroke({
//         color: 'rgba(255,169,0,1)',
//         width: 1
//       }),
//       points: 5,
//       radius: 4,
//       radius2: 2,
//       angle: 0
//     })
//   })],
// };

var lightningStyles = {
  '6': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(168,0,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(168,0,0,1)',
        width: 2
      }),
      points: 4,
      radius: 6,
      radius2: 0,
      angle: 0
    })
  })],
  '12': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(230,77,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(230,77,0,1)',
        width: 2
      }),
      points: 4,
      radius: 6,
      radius2: 0,
      angle: 0
    })
  })],
  '24': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(255,85,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,85,0,1)',
        width: 2
      }),
      points: 4,
      radius: 6,
      radius2: 0,
      angle: 0
    })
  })],
  '48': [new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: 'rgba(255,169,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,169,0,1)',
        width: 1
      }),
      points: 4,
      radius: 5,
      radius2: 2,
      angle: 0
    })
  })],
};


var egpModisStyles = {
  '6': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 3,
      fill: new ol.style.Fill({
        color: 'rgba(168,0,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(168,0,0,1)',
        width: 1
      })
    })
  })],
  '12': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 3,
      fill: new ol.style.Fill({
        color: 'rgba(230,77,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(230,77,0,1)',
        width: 1
      })
    })
  })],
  '24': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 3,
      fill: new ol.style.Fill({
        color: 'rgba(255,85,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,85,0,1)',
        width: 1
      })
    })
  })],
  '48': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 3,
      fill: new ol.style.Fill({
        color: 'rgba(255,169,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,169,0,1)',
        width: 1
      })
    })
  })],
  '999': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 3,
      fill: new ol.style.Fill({
        color: 'rgba(255,255,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,255,0,1)',
        width: 1
      })
    })
  })]
};
// var egpModisFireDetectionCentroidLayer6 = new ol.layer.Vector({
//   source: new ol.source.Cluster({
//     distance: 5,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           +'&token=' + egp
//           // +'&token=' + egpToken
//       /* whole URL  */
//       // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
//       //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
//       //   + "&outFields=*"
//       //   + "&outSR=102100"
//       //   + "&token=' + egpToken
//     })
//   }),
//   wrapX: false,
//   style: egpModisStyles['6']
  
// });

// var egpModisFireDetectionCentroidLayer12 = new ol.layer.Vector({
//   source: new ol.source.Cluster({
//     distance: 5,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           // +'&token=' + egpToken
//           +'&token=' + egp
//     })
//   }),
//   wrapX: false,
//   style: egpModisStyles['12']
// });
// var egpModisFireDetectionCentroidLayer24 = new ol.layer.Vector({
//   source: new ol.source.Cluster({
//     distance: 5,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           // +'&token=' + egpToken
//           +'&token=' + egp

//     })
//   }),
//   wrapX: false,
//   style: egpModisStyles['24']
// });
// var egpModisFireDetectionCentroidLayer48 = new ol.layer.Vector({
//   source: new ol.source.Cluster({
//     distance: 5,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           +'&token=' + egp
//           // +'&token=' + egpToken
//     })
//   }),
//   wrapX: false,
//   style: egpModisStyles['48']
// });
// var egpModisFireDetectionCentroidLayer999 = new ol.layer.Vector({
//   source: new ol.source.Cluster({
//     distance: 5,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 50&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           // +'&token=' + egpToken
//           +'&token=' + egp
//     })
//   }),
//   wrapX: false,
//   style: egpModisStyles['999']
// });

// var arr = Array.from(new Array(10), (x,i) => i+1).map(x => x * .1);
// need to normalize the fire marker transparency range values for rgba opacity values
// opacity [0,1] -> acres [0,5000] ... 1000 will correspond to .6 opacity, 5000+ to 0, and less than 200 will be opaque
// three sections to piecewise-normalize: {- [0, .4] - 1} => {[0,1000]}   
var opacity = function(acres){ 
  var fade = (acres < 1000) ? .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) : 1-.1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)) < -1 ? .1 : .1;
  return fade;  
}
// var rxFiresLayer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url : "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//       + "&where=(GACC = 'GBCC') AND (CreatedBySystem = 'wildcad')" 
//       + " AND (CreatedOnDateTime >= " + (today - 30*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
//       + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX') AND (IncidentTypeCategory <> 'FA')"
//       + " AND (ModifiedOnDateTime > " + (today - 14*86400000) + ")"
//       + "&returnGeometry=true"
//       + "&spatialRel=esriSpatialRelIntersects"
//       + "&outFields=*"
//       + "&outSR=102100"
//       + "&token=" + irwin
//       // + "&token=" + irwinToken
//   }),
//   style: function(feature, resolution) {
//     var discovery = feature.get('FireDiscoveryDateTime');
//     var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//     var marker = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? marker : fireStyles['Point'];
//   }
// });

// var newFiresLayer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     // format: new ol.format.TopoJSON(),
//     // url: 'data/topojson/newFires.topojson'
//     format: new ol.format.GeoJSON(),
//     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//         +"&where=(GACC = 'GBCC') AND (CreatedBySystem = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.5*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
//         +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas')" 
//         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
//         // +"&token=" + irwinToken
//         +"&token=" + irwin
//   }),
//   wrapX: false,
//   // style: fireStyles['Point']
//   style: function(feature, resolution) {
//     var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//     var discovery = feature.get('FireDiscoveryDateTime');
//     var marker = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(232,14,14,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), // rgba(254,32,171,1)
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     return (discovery >= (today - 1.5*86400000)) ? marker : fireStyles['Point'];
//   }
// });

// var ongoingFiresLayer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//         +"&where=(GACC = 'GBCC') AND (CreatedBySystem = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
//         +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1')"
//         +" AND (CreatedOnDateTime > " + (today - 30*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.5*86400000) + ") AND (ModifiedOnDateTime > " + (today - 14*86400000) + ")"
//         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
//         +"&token=" + irwin
//         // +"&token=" + irwinToken
//   }),
//   style: function(feature, resolution) {
//     var discovery = feature.get('FireDiscoveryDateTime');
//     var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//     var marker = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(254,253,6,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 3}), // 'rgba(243,206,104,1)'
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     return (discovery > (today - 30*86400000) && discovery < (today - 1.5*86400000)) ? marker : fireStyles['Point'];
//   }
// });

// tracking layer from mongodb perimeter upload demo
// var trackStyle = new ol.style.Style({
//   stroke: new ol.style.Stroke({
//     color: 'rgba(0,0,255,1.0)',
//     width: 10,
//     lineCap: 'round'
//   })
// });

// var trackSource = new ol.source.Vector({
//   format: new ol.format.GeoJSON(),
//   loader: function(extent, resolution, projection) {
//     var features = new ol.format.GeoJSON().readFeatures(gsPerims, {featureProjection: 'EPSG:3857'});
//     trackSource.addFeatures(features);
//   }   
// });

// var trackLayer = new ol.layer.Vector({
//   title: "ol Perimeters",
//   source: trackSource,
//   style: trackStyle,
//   visible: false
// });


// var eclipseLayer = new ol.layer.Vector({
//   title: 'Eclipse Path', 
//   source: new ol.source.Vector({
//     format: new ol.format.TopoJSON({
//       defaultDataProjection: 'EPSG:3857'
//     }),
//     crossOrigin: 'anonymous',
//     url: 'firecesium/examples/data/topojson/eclipse.topojson'
//   }),
//   style: new ol.style.Style({
//     stroke: new ol.style.Stroke({
//       color: 'rgba(1,255,67,.8)',
//       width: 2
//     }),
//     fill: new ol.style.Fill({
//       color: 'rgba(255,0,0,0.3)'
//     })
//   }) 
// })

// var umbraStyleCache = {};

// var umbraLayer = new ol.layer.Vector({
//   title: 'Umbra Times', 
//   source: new ol.source.Vector({
//     format: new ol.format.TopoJSON({
//       defaultDataProjection: 'EPSG:3857'
//     }),
//     crossOrigin: 'anonymous',
//     url: 'firecesium/examples/data/topojson/umbra.topojson'
//   }),
//   style: function(feature, resolution) {
//     var text = resolution < 5000 ? feature.get('time') + ' ' + feature.get('tz') : '';
//     if (!umbraStyleCache[text]) {
//       umbraStyleCache[text] = new ol.style.Style({
//         stroke: new ol.style.Stroke({
//           color: '#5e5c5c',
//           width: 2
//         }),
//         fill: new ol.style.Fill({
//           color: 'rgba(151,148,148,0.5)'
//         }),
//         text: new ol.style.Text({
//           font: '11px Montserrat, sans-serif',
//           text: text,
//           fill: new ol.style.Fill({
//             color: '#000'
//           }),
//           stroke: new ol.style.Stroke({
//             color: 'rgba(217,210,210,.7)',
//             width: 4
//           })
//         })
//       })
//     }
//     return umbraStyleCache[text];
//   }
// })

// var camUrl = "http://myers.seismo.unr.edu/firecams/proxy/getptz?get=1";
var camUrl = 'https://data-cache.us/api/firecams/config'
var camConfig = {
  method: 'GET',
  url: camUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

var polygons;
var polyKeys;
var camGJ = {"type": "FeatureCollection", "features": []};
var getCameras = function(extent, resolution, projection) {
  ajax(camConfig).then(function(first) {
    var json = JSON.parse(first)['features'];
    json.reduce(function(prev, curr, index) {
      var cam = {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": []},
        "properties": {}
      }
      if (curr['properties']['fov']) {
        cam['properties']["id"] = curr['properties']["id"];
        cam['properties']["name"] = curr['properties']["name"];
        cam['properties']["attribution"] = curr['properties']["attribution"];
        cam['properties']["region"] = curr['properties']["region"];
        cam['properties']["ip"] = curr['properties']["ip"];
        cam['properties']["fov"] = curr['properties']["fov"] ? parseFloat(curr['properties']["fov"]) : null;
        cam['properties']["fov_rt"] = curr['properties']["fov_rt"] ? curr['properties']["fov_rt"].map(parseFloat) : null;
        cam['properties']["fov_center"] = curr['properties']["fov_center"] ? curr['properties']["fov_center"].map(parseFloat) : null;
        cam['properties']["fov_lft"] = curr['properties']["fov_lft"] ? curr['properties']["fov_lft"].map(parseFloat) : null;
        cam['properties']["ptz"] = parseFloat(curr['properties']["ptz"]);
        cam['properties']["az_current"] = parseFloat(curr['properties']["az_current"]);
        cam['properties']["zoom_current"] = parseFloat(curr['properties']["zoom_current"]);
        cam['properties']["tilt_current"] = parseFloat(curr['properties']["tilt_current"]);
        cam['geometry']['coordinates'] = curr['geometry']['coordinates'].map(parseFloat);
        prev.push(cam);
      }
      return prev;
    }, camGJ['features']);
    // console.log(camGJ)
    var format = new ol.format.GeoJSON();
    features = format.readFeatures(camGJ);
    features.map(function(feature) {
     
      return feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    });
    nvBlmCamsLayer.getSource().addFeatures(features);

    polygons = camGJ['features'].reduce(function(prev, curr, index) {
      var coords = [];
      Object.keys(curr['properties']).reduce(function(p, c) {
        if (Array.isArray(curr['properties'][c])) {
          p.push(curr['properties'][c]);
        }
        return p;
      }, coords);
      coords.push([curr['geometry']['coordinates'][0], curr['geometry']['coordinates'][1], curr['geometry']['coordinates'][2]]);
      var fov = new ol.geom.Polygon([coords]);
      fov.set('id', curr['properties']['id']);
      prev.push(fov.transform('EPSG:4326', 'EPSG:3857'));
      return prev;
    }, []);
    var keyedUp = function(arr) {
      var oo = {};
      arr.map(function(curr) {
        oo[curr.get('id')] = curr;
      })
      return oo;
    }
    polyKeys = keyedUp(polygons);
  })
  .catch(function(error) {
    console.error('damnit.', error.statusText);
  });
}

var nvBlmCamStyle = function(feature) { 
  return new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      // anchor: [0,0],
      // anchorXUnits: 'fraction',
      // anchorYUnits: 'pixels',
      opacity: .75,
      // size: [48, 48],
      scale: .4,
      src: 'https://earth.google.com/images/kml-icons/track-directional/track-0.png', 
      rotation: Math.PI * parseFloat(feature.getProperties()['az_current']) / 180,
      rotateWithView: true
    }))
  });
}

var nvBlmCamsLayer = new ol.layer.Vector({
  title: 'NV BLM Cameras',
  source: new ol.source.Vector({
    loader: getCameras,
    wrapX: false,
    crossOrigin: 'Anonymous'
  }),
  projection: 'EPSG:3857',
  style: nvBlmCamStyle,
  visible: true
});

var fovStyleCache = {};
var fovOverlay = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: function(feature, resolution) {
    var id = feature.get('id');
    if (!fovStyleCache[id]) {
      fovStyleCache[id] = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 166, 0, 1)',
          width: 1
        }),
        fill: new ol.style.Fill({
          color: 'rgba(255,0,0,0.3)'
        })
      });
    }
    return fovStyleCache[id];
  }
});
// var geoMacSource = new ol.source.Vector({
//   format: new ol.format.GeoJSON(),
//   crossOrigin: 'anonymous',
//     // url: 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/CY_WildlandFire_Perimeters_ToDate/FeatureServer/0/query?where=&geometry={%22xmin%22%20:%20-13385849.855545742,%20%22ymin%22%20:%204164163.9360093023,%20%22xmax%22%20:%20-12120670.513975333,%20%22ymax%22%20:%205733155.322681262,%20%22spatialReference%22%20:%20{%22wkid%22%20:%203857}}&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=3857&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=geojson'
//     // url: 'https://opendata.arcgis.com/datasets/5da472c6d27b4b67970acc7b5044c862_0.geojson'
//   url: 'https://gbcc.us/geomacperims.json'
//   // url: 'https://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/2/query?f=json&where=1=1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//   // url: "https://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/2/query?f=json&"
//   //     +"where=(state = 'ID' OR state = 'WY' OR state = 'AZ' OR state = 'CA' OR state = 'UT' OR state = 'NV')&" 
//   //     +"returnGeometry=true&spatialRel=esriSpatialRelIntersects"
//   //     + "&outFields=*"
//   //     + "&outSR=102100"
//       // + "&token=' + egpToken
// });

var geomacPerimsLayer = new ol.layer.Vector({
  title: 'GeoMAC Fire Perimeters',
  // extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  wrapX: false,
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    crossOrigin: 'anonymous',
    url: 'https://gbcc.us/id-bdc_geomacperims.json'
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(1,255,67,1)',
      // lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(1,243,255,.2)'
    })
  }),
  visible: true
});

// var viewExtent = [0, 0, 570, 320.625];
// // var viewExtent = [0, 0, 1024, 968];
// var viewProjection = new ol.proj.Projection({
//   code: 'ALERT(Tahoe)',
//   units: 'pixels',
//   extent: viewExtent,
// });
// var imageMap = new ol.layer.Image({
//   source: new ol.source.ImageStatic({
//     attributions: '© <a href="http://alerttahoe.seismo.unr.edu/firecams.html">ALERT(Tahoe)</a>',
//     url: "http://imgs.xkcd.com/comics/online_communities.png",
//     projection: viewProjection,
//     imageExtent: viewExtent 
//   }),
//   map: camera
// });

// var camBox = document.getElementById("camera");
// function hide() {
//   camBox.style.display = "none";
// }

// var contextMenu = new ContextMenu({
//   width: 170,
//   default_items: true,
//   items: [
//     {
//       text: 'Close Camera View',
//       callback: hide
//     }
//   ]
// });

// var webcams = new ol.Map({
//   layers: [ 
//     imageMap
//   ],
//   controls: ol.control.defaults().extend([
//     contextMenu
//   ]),
//   target: 'camera',
//     view: new ol.View({
//     projection: viewProjection,
//     center: ol.extent.getCenter(viewExtent),
//     zoom: 2,
//     maxZoom: 8
//   })
// });
// var geomacPerimsInactiveLayer = new ol.layer.Vector({
//   title: 'Inactive Fire Perimeters',
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     url: "http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/4/query?f=json&"
//         +"(state = 'UT') AND (state = 'NV') AND (state = 'ID') AND (state = 'WY') AND (state = 'AZ')& " 
//         +"returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
//         // + "&token=' + egpToken
//   }),
//   wrapX: false,
//   style: new ol.style.Style({
//     stroke: new ol.style.Stroke({
//       color: 'rgba(1,255,67,1)',
//       // lineDash: [4],
//       width: 3
//     }),
//     fill: new ol.style.Fill({
//       color: 'rgba(144,155,147,.6)'
//     })
//   })
// });

// var rmgModis12Layer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     url: "http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/3/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
//         +"&objectIds=13049880,13049893,13049896,13049898,13049905,13049934,13049936,13049950,13049954,13049960,13049964,13049968,13049975,13050013,13050044,13050063,13050070,13050074,13050068,13050091,13050081,13050097,13050099,13050103,13050106&outFields=*&outSR=102100"
//     // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/3/query?f=json&where=date_ = '5/26/2016'&returnGeometry=true&spatialRel=esriSpatialRelIntersects&maxAllowableOffset=2445&geometry={"xmin":-11158328.105583707,"ymin":3086346.0717607997,"xmax":-10351129.902201418,"ymax":3893544.2751430906,"spatialReference":{"wkid":102100,"latestWkid":3857}}&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100'
//   }),
//   wrapX: false,
//   style: new ol.style.Style({
//     stroke: new ol.style.Stroke({
//       color: 'red',
//       lineDash: [4],
//       width: 4
//     }),
//     fill: new ol.style.Fill({
//       color: 'rgba(255, 255, 0, .2)'
//     })
//   })
// });

var vectorStyle = new ol.style.Style({
  // fill: new ol.style.Fill({
  //   // color: 'rgba(0, 0, 0, 0.2)'
  //   color: 'rgba(141, 92, 141, 0.2)'
  // }),
  stroke: new ol.style.Stroke({
    // color: 'rgba(255, 255, 255, 1)',
    // color: 'rgba(215, 212, 60, 1)',
    // color: '#683A5E',
    color: 'rgba(89, 74, 48, 1)',
    width: 2
  }),
  text: new ol.style.Text({
    font: '.9rem Montserrat, sans-serif',
    fill: new ol.style.Fill({
      color: '#000'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: '#fff',
    //   width: 3
    // })
  })
});

var vectorLayer = new ol.layer.Vector({
  title: 'Local Dispatch Boundaries',
  // source: new ol.source.Vector({
  //   features: (new ol.format.TopoJSON()).readFeatures(gbccBoundaries)
  // }),
  source: new ol.source.Vector({
    // url: 'data/topojson/egpGbccLocal.topojson',
    // url: 'data/topojson/gbccBoundaries.topojson',
    crossOrigin: 'anonymous',
    url: 'https://gbcc.us/id-bdc.topojson',
    format: new ol.format.TopoJSON()
    // url: 'data/geojson/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  // minResolution: 0,
  // maxResolution: 5000,
  visible: true,
  style: function(feature, resolution) {
    // vectorStyle.getText().setText(resolution < 5000 ? feature.get('UnitID').match(/.....$/gi)[0] : '');
    vectorStyle.getText().setText(resolution < 5000 ? feature.get('GCA') : '');
    return vectorStyle;
  }
});

var openTopo = new ol.layer.Tile({
  title: 'Open Topo',
  type: 'base',
  visible: false,
  source: new ol.source.XYZ({
    attributions: 'Tiles © <a href="https://opentopomap.org">OpenTopoMap</a>',
    crossOrigin: 'anonymous',
    url: 'https://b.tile.opentopomap.org/{z}/{x}/{y}.png',
  })
});

var usgsTopo = new ol.layer.Tile({
  title: 'USGS Topographic',
  type: 'base',
  source: new ol.source.XYZ({
    crossOrigin: 'anonymous',
    url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}'
  }),
  // extent:[ -14585849.855545742, 4164163.9360093023, -11120670.513975333, 5733155.322681262 ],
  visible: false
});

var bing = new ol.layer.Tile({
  title: 'Bing Aerial',
  type: 'base',
  source: new ol.source.BingMaps({
    key: bingToken,
    imagerySet: 'AerialWithLabels'
  }),
  wrapX: false,
  visible: false
});

var raster = new ol.layer.Tile({
  title: 'ESRI Raster',
  type: 'base',
  source: new ol.source.XYZ({
    attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
    crossOrigin: 'anonymous',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
        'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
  }),
  visible: false,
  wrapX: false
});

var mapbox = new ol.layer.Tile({
  title: 'mapbox run-bike-hike',
  type: 'base',
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="https://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    // tileSize: [512, 512],
    url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token=' + mapboxToken
    // url: 'https://api.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=' + mapboxToken
    // url: 'https://api.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  wrapX: false,
  visible: false,
});

var mapboxDark = new ol.layer.Tile({
  title: 'MapBox Dark',
  type: 'base',
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="https://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=' + mapboxToken
    // url: 'https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  visible: true,
  wrapX: false
});

var mapzen = new ol.layer.Tile({
  title: 'MapZen',
  type: 'base',
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
                  '© <a href="https://cartodb.com/attributions">CartoDB</a>',
    crossOrigin: 'anonymous',
    url: 'https://vector.mapzen.com/osm/earth/{z}/{x}/{y}.topojson?api_key=' + 'vector-tiles-kPYqqBF'
  }),
  visible: false,
  wrapX: false
});

var stamen = new ol.layer.Tile({
  title: 'Stamen Terrain',
  type: 'base',
  // source: new ol.source.Stamen({
  //     layer: 'terrain'
  //     // layer: 'watercolor'
  // }),
  source: new ol.source.XYZ({
    // attributions: 'Tiles © <a href="https://opentopomap.org">OpenTopoMap</a>',
    crossOrigin: 'anonymous',
    url: 'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}@2x.png',
    attributions: [
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>',
      '&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>',
      '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',
      '&copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>'
    ],
    tilePixelRatio: 2,
    maxZoom: 200
  }),
  // crossOrigin: 'anonymous',
  visible: true,
  // extent:[ -14585849.855545742, 4164163.9360093023, -11120670.513975333, 5733155.322681262 ]
});

var clipStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'black'
  })
});
var clipLayer = new ol.layer.Image({
  source: new ol.source.ImageVector({
    source: new ol.source.Vector({
      crossOrigin: 'anonymous',
      url: 'firecesium/examples/data/topojson/gbccBoundaries.topojson',
      format: new ol.format.TopoJSON()
    }),
    style: clipStyle 
  })
});
clipLayer.on('postcompose', function(e) {
  e.context.globalCompositeOperation = 'source-over';
});
clipLayer.on('precompose', function(e) {
  e.context.globalCompositeOperation = 'destination-in';
});

var ownershipStyles = {
  'FS': [new ol.style.Style({
    fill: new ol.style.Fill({
      // color: 'green'
      color: 'rgba(117, 181, 96, 0.5)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(117, 181, 96, 1)',
    //   width: 1
    // })
  })],
  'BLM': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(191, 140, 63, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(191, 140, 63, .5)',
      width: 1
    })
  })],
  'statePrivate': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
  'BIA': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
  'NPS': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
  'DOD': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
  'DOE': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
  'FWS': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
};

var blm = new ol.layer.Vector({
  title: 'BLM Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/blm.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['BLM']
});

var bia = new ol.layer.Vector({
  title: 'BIA Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/bia.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['BIA']
});

var fs = new ol.layer.Vector({
  title: 'FS Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/fs.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['FS']
});

var nps = new ol.layer.Vector({
  title: 'NPS Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/nps.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['NPS']
});

var dod = new ol.layer.Vector({
  title: 'DOD Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/dod.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['DOD']
});

var doe = new ol.layer.Vector({
  title: 'DOE Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/doe.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['doe']
});

var fws = new ol.layer.Vector({
  title: 'FWS Ownership',
  // type: 'base',
  source: new ol.source.Vector({
    crossOrigin: 'anonymous',
    url: 'firecesium/examples/data/topojson/ownership/fws.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: false,
  style: ownershipStyles['FWS']
});

var sagegrouseStyles = {
  'IHMA': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(212, 82, 255, .2)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(212, 82, 255, .8)',
    //   width: 0
    // })
  })],
  'Anthro Mtn': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(127, 0, 127, .2)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(127, 0, 127, .8)',
    //   width: 0
    // })
  })],
  'GHMA': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(12, 60, 138, .2)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(12, 60, 138, .8)',
    //   width: 0
    // })
  })],
  'OHMA': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(176, 205, 225, .2)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(176, 205, 225, .2)',
    //   width: 0
    // })
  })],
  'PHMA': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(1, 245, 253, .2)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(176, 205, 225, .2)',
    //   width: 0
    // })
  })]  
};
var sagegrouseSource = new ol.source.Vector({
  crossOrigin: 'anonymous',
  url: 'firecesium/examples/data/topojson/sagegrouse.topojson',
  format: new ol.format.TopoJSON()
  // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
  // format: new ol.format.GeoJSON()
});

var sagegrouse = new ol.layer.Vector({
  title: 'Sage-Grouse Habitat',
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: true,
  style: function(feature, resolution) {
    var feature = feature.get('Hab_Type');
    var style = sagegrouseStyles[feature];
    return style;
  }
});
sagegrouse.setSource(sagegrouseSource);


var prepoLayer = new ol.layer.Vector({
  title: 'Prepositioning',
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    crossOrigin: 'anonymous',
    url : 'firecesium/examples/data/geojson/prepo.geojson'
  }), 
  visible: false,
  wrapX: false,
  style: new ol.style.Style({ 
    image: new ol.style.RegularShape({
      fill: new ol.style.Fill({
        color: '#cfdb41' //#b7f3f7
      }),
      stroke: new ol.style.Stroke({
        color: '#222',
        width: 1.5
      }),
      points: 5,
      radius: 7,
      radius2: 4,
      angle: 0
    })
  })
});

var egpModisFireDetectionCentroidLayer6 = new ol.layer.Vector({
  title: 'MODIS < 6 Hour',
  visible: true,
  wrapX: false,
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      // url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      url: 'https://gbcc.us/modis6.esrijson'
      // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
      //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      //     +'&token=' + egp
          // +'&token=' + egpToken
      /* whole URL  */
      // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
      //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
      //   + "&outFields=*"
      //   + "&outSR=102100"
      //   + "&token=' + egpToken
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['6']
});

// var egp6 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     crossOrigin: 'anonymous',
//     url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//     // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//     //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//     //     +'&token=' + egp
//   })
// });
// egpModisFireDetectionCentroidLayer6.setSource(egp6)
// var igpointCentroidLayer6 = new ol.layer.Vector({
//   title: 'IgPoint < 6 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   style: igpointStyles['6']
// });

var egpModisFireDetectionCentroidLayer12 = new ol.layer.Vector({
  title: 'MODIS < 12 Hour',
  visible: true,
  wrapX: false,  
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      // url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      url: 'https://gbcc.us/modis12.esrijson'
      // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
      //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      //     +'&token=' + egp
          // +'&token=' + egpToken
      /* whole URL  */
      // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
      //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
      //   + "&outFields=*"
      //   + "&outSR=102100"
      //   + "&token=' + egpToken
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['12']
});

var egpModisFireDetectionCentroidLayer24 = new ol.layer.Vector({
  title: 'MODIS < 24 Hour',
  visible: false,
  wrapX: false,
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      // url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      url: 'https://gbcc.us/modis24.esrijson'
      // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
      //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      //     +'&token=' + egp
          // +'&token=' + egpToken
      /* whole URL  */
      // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
      //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
      //   + "&outFields=*"
      //   + "&outSR=102100"
      //   + "&token=' + egpToken
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['24'],
  opacity: 0.6,
  brightness: 0.2
});

var egpModisFireDetectionCentroidLayer48 = new ol.layer.Vector({
  title: 'MODIS < 48 Hour',
  visible: false,
  wrapX: false,  
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      // url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      url: 'https://gbcc.us/modis48.esrijson'
      // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
      //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      //     +'&token=' + egp
          // +'&token=' + egpToken
      /* whole URL  */
      // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
      //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
      //   + "&outFields=*"
      //   + "&outSR=102100"
      //   + "&token=' + egpToken
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['48'],
  opacity: 0.6,
  brightness: 0.2
});

var egpModisFireDetectionCentroidLayer999 = new ol.layer.Vector({
  title: 'MODIS < 168 Hour',
  visible: false,
  wrapX: false,   
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      url: 'https://gbcc.us/modis999.esrijson'
      // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
      //     +'&where=AgeInHours < 50&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
      //     // +'&token=' + egpToken
      //     +'&token=' + egp
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['999'],
  opacity: 0.6,
  brightness: 0.2 , 
});


// var igpointCentroidLayer12 = new ol.layer.Vector({
//   title: 'IgPoint < 12 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   style: igpointStyles['12']
// });

// var igpointCentroidLayer24 = new ol.layer.Vector({
//   title: 'IgPoint < 24 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   style: igpointStyles['24']
// });
 
// var igpointCentroidLayer48 = new ol.layer.Vector({
//   title: 'IgPoint < 48 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   style: igpointStyles['48']
// });

var viirsCentroidLayer6 = new ol.layer.Vector({
  title: 'VIIRS < 6 Hour',
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      url: 'https://gbcc.us/viirs6.esrijson'
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  wrapX: false,
  visible: false,
  style: viirsStyles['6']
});

var viirsCentroidLayer12 = new ol.layer.Vector({
  title: 'VIIRS < 12 Hour',
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      url: 'https://gbcc.us/viirs6.esrijson'
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  wrapX: false,
  visible: false,
  style: viirsStyles['12']
});

var viirsCentroidLayer24 = new ol.layer.Vector({
  title: 'VIIRS < 24 Hour',
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      url: 'https://gbcc.us/viirs24.esrijson'
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  wrapX: false,
  visible: false,
  style: viirsStyles['24']
});

var viirsCentroidLayer48 = new ol.layer.Vector({
  title: 'VIIRS < 48 Hour',
  source: new ol.source.Cluster({
    distance: 2,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      crossOrigin: 'anonymous',
      url: 'https://gbcc.us/viirs48.esrijson'
    })
  }),
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  wrapX: false,
  visible: false,
  style: viirsStyles['48']
});

// var ltSource6 = new ol.source.Vector({});
// var ltSource12 = new ol.source.Vector({});
// var ltSource24 = new ol.source.Vector({});

// var lightningLayer6 = new ol.layer.Vector({
//   // title: 'Lightning < 6 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   // source: ltSource6,
//   style: lightningStyles['6']
// });

// var lightningLayer12 = new ol.layer.Vector({
//   // title: 'Lightning < 12 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   // source: ltSource12,
//   style: lightningStyles['12']
// });

// var lightningLayer24 = new ol.layer.Vector({
//   // title: 'Lightning < 24 Hour',
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   wrapX: false,
//   visible: false,
//   // source: ltSource24,
//   style: lightningStyles['24']
// });


var map;
var ol3d;
var map3d = document.getElementById('map3d');
// var info = document.getElementById('info');
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
// var uniqueFireIdentifier = document.getElementById('uniqueFireIdentifier');
// var incidentName = document.getElementById('incidentName');
// var fireDiscoveryDateTime = document.getElementById('fireDiscoveryDateTime');
// var dailyAcres = document.getElementById('DailyAcres');
// var strategy = document.getElementById('strategy');
// var dispatchCenterID = document.getElementById('dispatchCenterID');
// var fireCause = document.getElementById('fireCause');
// var fuelType = document.getElementById('fuelType');
// var incidentCommanderName = document.getElementById('incidentCommanderName');
// var latLong = document.getElementById('latLong');
// var ownership = document.getElementById('ownership');
// var predictiveServiceAreaID = document.getElementById('predictiveServiceAreaID');
var closer = document.getElementById('popup-closer');
var rCloser = document.getElementById('resources-closer');
// var sagegrouseOrigin = document.getElementById('sagegrouseOrigin');
var toggle = document.getElementById('toggle');

// var container = document.getElementById('gpopup');
// var content = document.getElementById('gpopup-content');
// var uniqueFireIdentifier = document.getElementById('guniqueFireIdentifier');
// var incidentName = document.getElementById('gincidentName');
// var fireDiscoveryDateTime = document.getElementById('gfireDiscoveryDateTime');
// var IncidentSize = document.getElementById('gIncidentSize');
// var strategy = document.getElementById('gstrategy');
// var dispatchCenterID = document.getElementById('gdispatchCenterID');
// var fireCause = document.getElementById('gfireCause');
// var fuelType = document.getElementById('gfuelType');
// var incidentCommanderName = document.getElementById('gincidentCommanderName');
// var latLong = document.getElementById('glatLong');
// var ownership = document.getElementById('gownership');
// var predictiveServiceAreaID = document.getElementById('gpredictiveServiceAreaID');
// var closer = document.getElementById('gpopup-closer');
// toggle.addEventListener('click', function() {
//   if (map3d.className == 'dontsee'){
//     ol3d.setEnabled(!ol3d.getEnabled()); 
//     map3d.className = 'see'
//   }
//   else {
//     ol3d.setEnabled(!ol3d.getEnabled());
//     map3d.className = 'dontsee'
//   }
// });


// // var infoLabel = document.createElement('span');
// //     infoLabel.className = 'info-label';
// //     infoLabel.textContent = 'i';

// var overlay = new ol.Overlay( /* @type {olx.OverlayOptions} */ {
//   element: container,
//   autoPan: true,
//   autoPanAnimation: {
//     duration: 250
//   }
// });

// var controls = [
//   new ol.control.Attribution(
//     // {label: infoLabel}
//   ),
//   new ol.control.MousePosition({
//     undefinedHTML: 'outside',
//     projection: 'EPSG:4326',
//     coordinateFormat: function(coordinate) {
//       return ol.coordinate.format( coordinate, '{y}, {x}', 4);
//     }
//   }),
//   // new ol.control.OverviewMap({
//   //   collapsed: true
//   // }),
//   new ol.control.Rotate({
//     autohide: false
//   }),
//   new ol.control.ScaleLine({
//     // units: 'degrees'
//   }),
//   new ol.control.Zoom(
//     // {target: 'toolbar'}
//   ),
//   new ol.control.ZoomSlider(),
//   // new ol.control.ZoomToExtent(),
//   new ol.control.FullScreen(),
// ];

// var layers = [
//   // new ol.layer.Tile({
//   //   source: new ol.source.OSM(),
//   //   url: 'http://{a-c}.tile.openstreetmap.org/dark_all/{z}/{x}/{y}.png',
//   //   wrapX: false
//   // }),
//   new ol.layer.Tile({
//     source: new ol.source.Stamen({
//         layer: 'terrain'
//     })
//   }),
//   // sagegrouse,
//   // mapbox, 
//   // raster,
//   // bing,
//   // blm,
//   vectorLayer,
//   rxFiresLayer,
//   egpModisFireDetectionCentroidLayer999,
//   egpModisFireDetectionCentroidLayer48,
//   egpModisFireDetectionCentroidLayer24,
//   ongoingFiresLayer,
//   newFiresLayer,
//   geomacPerimsLayer,
//   // rmgModis12Layer,
//   egpModisFireDetectionCentroidLayer12,
//   egpModisFireDetectionCentroidLayer6
// ]

// var overallView = new ol.View({
//   // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
//   center: [-12753260.184760537, 4948659.629345282],
//   zoom: 5.55,
//   // minZoom: 5,
//   // maxZoom: 9.8,
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
// });

// function MAP() {
// }
//   map = new ol.Map({
//     layers: layers,
//     // interactions: ol.interaction.defaults().extend([selectHover, selectClick]),
//     controls: controls,
//     overlays: [overlay],
//     target: 'map2d',
//     view: overallView, 
//     logo: ({
//       href: 'http://gacc.nifc.gov/gbcc/',
//       src: 'firecesium/examples/data/GBCC_1b.png' 
//     })
//     // renderer: 'canvas',
//       // view: new ol.View({
//       //   // projection: 'EPSG:4326',
//       //   center: [-12753260.184760537, 4948659.629345282],
//       //   // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326', 'EPSG:3857'),
//       //   zoom: 5.0,
//       //   // minZoom: 0,
//       //   // maxZoom: 8,
//       //   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//       // })
//   });


// // mapbox.set('altitudeMode', 'clampToGround');
// // vectorLayer.set('altitudeMode', 'clampToGround');
// // ongoingFiresLayer.set('altitudeMode', 'clampToGround');
// // geomacPerimsLayer.set('altitudeMode', 'clampToGround');
// MAP();

// function OL3D() {
// }
//   ol3d = new olcs.OLCesium({
//     map: map,
//     target: 'map3d'
//     // ,
//     // createSynchronizers: new olcs.VectorSynchronizer({
//     //   map: map,
//     //   scene,
//     //   opt_converter
//     // })
//   });
//   var scene = ol3d.getCesiumScene();
//   var terrainProvider = new Cesium.CesiumTerrainProvider({
//       url: '//assets.agi.com/stk-terrain/world',
//       requestWaterMask: false,
//       requestVertexNormals: true
//   });
//   scene.terrainProvider = terrainProvider;
//   scene.globe.enableLighting = true;

//   var camera = ol3d.getCamera();
//   camera.setTilt(Math.PI / 3);

//   // ol3d.setEnabled(true);
//   ol3d.enableAutoRenderLoop();

// OL3D();



// vectorLayer.set('selectable', true);
// vectorLayer.set('id', 'dispatches');
// ongoingFiresLayer.set('selectable', true);
// ongoingFiresLayer.set('id','ongoing');
// rxFiresLayer.set('selectable', true);
// rxFiresLayer.set('id','rx');
// newFiresLayer.set('selectable', true);
// newFiresLayer.set('id','new');

// ongoingFiresLayer.set('overlay', true);
// rxFiresLayer.set('overlay', true);
// newFiresLayer.set('overlay', true);
     


// //////////////////////////////////////////////////////////////////////////////////////////////////
// ol.Feature.prototype.getLayer = function() {
//   var this_ = this, layer_;
//   var sameFeature = function(feature){
//     return (this_ === feature) ? true : false;
//   };
//   map.getLayers().forEach(function(layer) {
//     var source = layer.getSource();
//     if (source instanceof ol.source.Vector) {
//       var features = source.getFeatures();
//       if (features.length > 0) {
//         var found = features.some(sameFeature);
//           if (found) {
//             layer_ = layer;
//           }
//         }
//       }
//   });
//   return layer_;
// };

// var selectHover = new ol.interaction.Select({
//   condition: ol.events.condition.pointerMove,
//   layers: [ongoingFiresLayer, rxFiresLayer, newFiresLayer],
//   // filter: function(feature, layer) {
//   //   if (layer.get('overlay') == true)
//   //     return true;
//   // },
//   style: function(feature) {
//     if (feature.getLayer().get('id') == 'rx') {
//       var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//       var style = new ol.style.Style({
//         image: new ol.style.Circle({
//           // fill: new ol.style.Fill({
//           //   color: 'rgba(253,2,125,.1)'
//           // }), 
//           stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
//           radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
//         })
//       }); 
//     }
//     if (feature.getLayer().get('id') == 'new') {
//       var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//       var style = new ol.style.Style({
//         image: new ol.style.Circle({
//           // fill: new ol.style.Fill({
//           //   color: 'rgba(232,14,14,.1)'
//           // }),
//           stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}),
//           radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
//         })
//       }); 
//     }
//     if (feature.getLayer().get('id') == 'ongoing') {
//       var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//       var style = new ol.style.Style({
//         image: new ol.style.Circle({
//           // fill: new ol.style.Fill({
//           //   color: 'rgba(254,253,6,.1)'
//           // }),
//           stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 4}),
//           radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
//         })
//       }); 
//     }
//     return style;
//   }  
// });

// map.addInteraction(selectHover);

// selectHover.on('select', function(e) {
//   var feature = e.selected[0];
//   // var layer = feature.getLayer();
//   if (feature) {
//     function displayInfo() {
//       var sagegrouseFeatures = sagegrouse.getSource().getFeaturesAtCoordinate(
//         ol.proj.transform([feature.get('InitialLongitude'),feature.get('InitialLatitude')], 'EPSG:4326','EPSG:3857')
//       );
//       uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
//       incidentName.innerHTML = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
//       // fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? feature.get('FireDiscoveryDateTime') : 'unknown';
//       fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
//       dailyAcres.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
//         : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
//       strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
//       fireCause.innerHTML = feature.get('FireCause') ? feature.get('FireCause') : 'unknown';
//       fuelType.innerHTML = feature.get('PrimaryFuelModel') ? feature.get('PrimaryFuelModel') : 'unknown';
//       incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') ? feature.get('IncidentCommanderName') : 'unknown';
//       ownership.innerHTML = feature.get('POOProtectingAgency') ? feature.get('POOProtectingAgency') : 'unknown';
//       dispatchCenterID.innerHTML = feature.get('DispatchCenterID') ? feature.get('DispatchCenterID') : 'unknown';
//       predictiveServiceAreaID.innerHTML =  feature.get('PredictiveServiceAreaID') ? feature.get('PredictiveServiceAreaID') : 'unknown';
//       latLong.innerHTML = (feature.get('InitialLatitude') && feature.get('InitialLongitude')) ? feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude') : 'unknown';
//       sagegrouseOrigin.innerHTML = (sagegrouseFeatures.length > 0) ? sagegrouseFeatures[0].get('Species') + ': ' + sagegrouseFeatures[0].get('Habitat') : 'No.' ;
//     }   
//     displayInfo(); 
//     // var popup = new ol.Overlay.Popup();

//     // var coordinate = e.coordinate;
//     // var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
//     // uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
//     // incidentName.innerHTML = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
//     // fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
//     // dailyAcres.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
//     //   : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
//     // strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
//     // fireCause.innerHTML = feature.get('FireCause') ? feature.get('FireCause') : 'unknown';
//     // fuelType.innerHTML = feature.get('PrimaryFuelModel') ? feature.get('PrimaryFuelModel') : 'unknown';
//     // incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') ? feature.get('IncidentCommanderName') : 'unknown';
//     // ownership.innerHTML = feature.get('POOProtectingAgency') ? feature.get('POOProtectingAgency') : 'unknown';
//     // dispatchCenterID.innerHTML = feature.get('DispatchCenterID') ? feature.get('DispatchCenterID') : 'unknown';
//     // predictiveServiceAreaID.innerHTML =  feature.get('PredictiveServiceAreaID') ? feature.get('PredictiveServiceAreaID') : 'unknown';
//     // latLong.innerHTML = (feature.get('InitialLatitude') && feature.get('InitialLongitude')) ? feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude') : 'unknown';
//     // overlay.setPosition(coordinate);
    
//     // map.addOverlay(popup); 
//     // var content = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
//     // content += feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
//     // content += fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
//     // content += IncidentSize.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
//     //   : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
//     // content +=  strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
//     // popup.show(content);
//   }
// });


// var selectClick = new ol.interaction.Select({
//   condition: ol.events.condition.click,
//   layers: [
//     mapbox, 
//     vectorLayer, 
//     raster
//   ],
//   style: new ol.style.Style({
//     // fill: new ol.style.Fill({
//     //   color: 'rgba(251,200,200,.4)'
//     // }),
//     stroke: new ol.style.Stroke({
//       color: '#f00',
//       width: 2
//     })
//   })  
// });
// map.addInteraction(selectClick);

// selectClick.on('select', function(e) {
//   var feature = e.selected[0];
//   if (feature) {
//     var polygon = (feature.getGeometry());// @type {ol.geom.SimpleGeometry 
//     var size = (map.getSize()); // @type {ol.Size} 
//     // map.getView().fit(polygon, size, {padding: [0, 0, 0, 0], constrainResolution: false});
//     var aa = polygon.getExtent();
//     var oo = ol.extent.getCenter(aa);
//     // let duration = 1500; // ie11+
//     // var self = this;
//     // var duration = 1500;
//     var start = +new Date();
//     var pan = ol.animation.pan({
//       duration: 1500,
//       source: (map.getView().getCenter()),  // @type {ol.Coordinate}
//       start: start
//     });
//     var bounce = ol.animation.bounce({
//       duration: 1500, // or could use the "this" keyword because duration is a variable defined above, 
//       resolution: 1.5 * map.getView().getResolution(),
//       start: start
//     });
//     map.beforeRender(pan, bounce);
//     // map.getView().setCenter(oo);
//     map.getView().fit(polygon, size, {padding: [80, 80, 80, 80], constrainResolution: false});
//   }
//   else {
//     map.beforeRender(
//       ol.animation.pan({
//         duration: 1500,
//         source: (map.getView().getCenter()),  // @type {ol.Coordinate}
//         start: start
//       }),
//       ol.animation.bounce({
//         duration: 1500, // or could use the "this" keyword because duration is a variable defined above, 
//         resolution: 5 * map.getView().getResolution(),
//         start: start
//       })
//     );
//     map.setView(new ol.View({
//         // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
//         center: [-12753260.184760537, 4948659.629345282],
//         zoom: 5.55,
//         // minZoom: 5,
//         // maxZoom: 9.8,
//         extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
//       })
//     );
//       // map.getView().setZoom(5);
//       // map.getView().setZoom(map.getView().getZoom()+1);
//   } 
// });

// map.updateSize();

// velocity.js
// classList shim 

var fstitle = document.getElementById('fs-title'); fstitle.style.width = '250px', fstitle.style.height = '166px'
document.addEventListener("fullscreenchange", function (e) {
  if (document.fullscreenEnabled) {
    document.fullscreenElement ? (
       (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '20%', 
      maps.style.width = '80%', 
      fstitle.style.display = 'block', 
      fstitle.style.width = '250px', 
      fstitle.style.height = '166px', 
      side1.innerHTML = tabthree.innerHTML, 
      tabthree.innerHTML = '', 
      resetVar()
      ) : (
         (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '0%',
        maps.style.width = '100%', 
        fstitle.style.width = '', 
        fstitle.style.height = '', 
        fstitle.style.display = 'none', 
        tabthree.innerHTML = side1.innerHTML, 
        side1.innerHTML = '', 
        resetVar()
      );
  } 
}, false);
document.addEventListener("MSFullscreenChange", function (e) {
  if (document.msFullscreenEnabled) {
    document.msFullscreenElement ? (
       (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '20%', 
      maps.style.width = '80%', 
      fstitle.style.display = 'block', 
      fstitle.style.width = '250px', 
      fstitle.style.height = '166px', 
      side1.innerHTML = tabthree.innerHTML, 
      tabthree.innerHTML = '', 
      resetVar()
      ) : (
         (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '0%',
        maps.style.width = '100%', 
        fstitle.style.width = '', 
        fstitle.style.height = '', 
        fstitle.style.display = 'none', 
        tabthree.innerHTML = side1.innerHTML, 
        side1.innerHTML = '', 
        resetVar()
      );
  }
}, false);
document.addEventListener("mozfullscreenchange", function (e) {
  if (document.mozFullScreenEnabled) {
    document.mozFullScreenElement ? (
       (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '20%', 
      maps.style.width = '80%', 
      fstitle.style.display = 'block', 
      fstitle.style.width = '250px', 
      fstitle.style.height = '166px', 
      side1.innerHTML = tabthree.innerHTML, 
      tabthree.innerHTML = '', 
      resetVar()
      ) : (
         (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '0%',
        maps.style.width = '100%', 
        fstitle.style.width = '', 
        fstitle.style.height = '', 
        fstitle.style.display = 'none', 
        tabthree.innerHTML = side1.innerHTML, 
        side1.innerHTML = '', 
        resetVar()
      );
  }
}, false);
document.addEventListener("webkitfullscreenchange", function (e) {
  if (document.webkitFullscreenEnabled) {
    document.webkitFullscreenElement ? (
         (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '20%', 
      maps.style.width = '80%', 
      fstitle.style.display = 'block', 
      fstitle.style.width = '250px', 
      fstitle.style.height = '166px', 
      side1.innerHTML = tabthree.innerHTML, 
      tabthree.innerHTML = '', 
      resetVar()
      ) : (
         (camBox !== undefined) ?(
    nvcams.setTarget(),
    maps.removeChild(camBox),
    camBox = undefined
  ) : '',
  sidepanel.style.width = '0%',
        maps.style.width = '100%', 
        fstitle.style.width = '', 
        fstitle.style.height = '', 
        fstitle.style.display = 'none', 
        tabthree.innerHTML = side1.innerHTML, 
        side1.innerHTML = '', 
        resetVar()
      );
  }
}, false);

var App = {};

// show/hide vertical slide pattern with Velocity.js IE9+
App.verticalSlide = function(element, container, easing, duration) {
  var el = document.querySelector(element), // cache click target
    con = document.querySelector(container), // cache container target
    up = 'slideUp', // store up command
    down = 'slideDown'; // store down command
  
  el.addEventListener('click', function(event) {
      
    var active = el.classList.contains('active'); // store active state
    el.classList.toggle('active'); // toggle click target active

    Velocity(con, active ? up : down, { // test and init command
      duration: duration, // duration set in function call params
      easing: easing // easing set in function call params
    });

    event.preventDefault();
    
  });
};

window.onload = function() {
  App.verticalSlide('.drawer-button', '.drawer', 'easeOutCirc', 300);
};

/**
 * OpenLayers 3 Layer Switcher Control.
 * See [the examples](./examples) for usage.
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object} opt_options Control options, extends olx.control.ControlOptions adding:
 *                              **`tipLabel`** `String` - the button tooltip.
 */
ol.control.LayerSwitcher = function(opt_options) {

    var options = opt_options || {};

    var tipLabel = options.tipLabel ?
      options.tipLabel : 'Legend';

    this.mapListeners = [];

    this.hiddenClassName = 'ol-unselectable ol-control layer-switcher';
    if (ol.control.LayerSwitcher.isTouchDevice_()) {
      this.hiddenClassName += ' touch';
    }
    this.shownClassName = this.hiddenClassName + ' shown';

    var element = document.createElement('div');
    element.className = this.hiddenClassName;

    var button = document.createElement('button');
    button.setAttribute('title', tipLabel);
    element.appendChild(button);

    this.panel = document.createElement('div');
    this.panel.className = 'panel';
    element.appendChild(this.panel);
    ol.control.LayerSwitcher.enableTouchScroll_(this.panel);

    var this_ = this;

    button.onmouseover = function(e) {
      this_.showPanel();
    };

    button.onclick = function(e) {
      e = e || window.event;
      this_.showPanel();
      e.preventDefault();
    };

    this_.panel.onmouseout = function(e) {
      e = e || window.event;
      if (!this_.panel.contains(e.toElement || e.relatedTarget)) {
        this_.hidePanel();
      }
    };

    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });

};

ol.inherits(ol.control.LayerSwitcher, ol.control.Control);

/**
 * Show the layer panel.
 */
ol.control.LayerSwitcher.prototype.showPanel = function() {
  if (this.element.className != this.shownClassName) {
    this.element.className = this.shownClassName;
    this.renderPanel();
  }
};

/**
 * Hide the layer panel.
 */
ol.control.LayerSwitcher.prototype.hidePanel = function() {
    if (this.element.className != this.hiddenClassName) {
        this.element.className = this.hiddenClassName;
    }
};

/**
 * Re-draw the layer panel to represent the current state of the layers.
 */
ol.control.LayerSwitcher.prototype.renderPanel = function() {

    this.ensureTopVisibleBaseLayerShown_();

    while(this.panel.firstChild) {
        this.panel.removeChild(this.panel.firstChild);
    }

    var ul = document.createElement('ul');
    this.panel.appendChild(ul);
    this.renderLayers_(this.getMap(), ul);

};

/**
 * Set the map instance the control is associated with.
 * @param {ol.Map} map The map instance.
 */
ol.control.LayerSwitcher.prototype.setMap = function(map) {
    // Clean up listeners associated with the previous map
    for (var i = 0, key; i < this.mapListeners.length; i++) {
        this.getMap().unByKey(this.mapListeners[i]);
    }
    this.mapListeners.length = 0;
    // Wire up listeners etc. and store reference to new map
    ol.control.Control.prototype.setMap.call(this, map);
    if (map) {
        var this_ = this;
        this.mapListeners.push(map.on('pointerdown', function() {
            this_.hidePanel();
        }));
        this.renderPanel();
    }
};

/**
 * Ensure only the top-most base layer is visible if more than one is visible.
 * @private
 */
ol.control.LayerSwitcher.prototype.ensureTopVisibleBaseLayerShown_ = function() {
    var lastVisibleBaseLyr;
    ol.control.LayerSwitcher.forEachRecursive(this.getMap(), function(l, idx, a) {
        if (l.get('type') === 'base' && l.getVisible()) {
            lastVisibleBaseLyr = l;
        }
    });
    if (lastVisibleBaseLyr) this.setVisible_(lastVisibleBaseLyr, true);
};

/**
 * Toggle the visible state of a layer.
 * Takes care of hiding other layers in the same exclusive group if the layer
 * is toggle to visible.
 * @private
 * @param {ol.layer.Base} The layer whos visibility will be toggled.
 */
ol.control.LayerSwitcher.prototype.setVisible_ = function(lyr, visible) {
    var map = this.getMap();
    lyr.setVisible(visible);
    if (visible && lyr.get('type') === 'base') {
        // Hide all other base layers regardless of grouping
        ol.control.LayerSwitcher.forEachRecursive(map, function(l, idx, a) {
            if (l != lyr && l.get('type') === 'base') {
                l.setVisible(false);
            }
        });
    }
};

/**
 * Render all layers that are children of a group.
 * @private
 * @param {ol.layer.Base} lyr Layer to be rendered (should have a title property).
 * @param {Number} idx Position in parent group list.
 */
ol.control.LayerSwitcher.prototype.renderLayer_ = function(lyr, idx) {

    var this_ = this;

    var li = document.createElement('li');

    var lyrTitle = lyr.get('title');
    var lyrId = ol.control.LayerSwitcher.uuid();

    var label = document.createElement('label');

    if (lyr.getLayers && !lyr.get('combine')) {

        li.className = 'group';
        label.innerHTML = lyrTitle;
        li.appendChild(label);
        var ul = document.createElement('ul');
        li.appendChild(ul);

        this.renderLayers_(lyr, ul);

    } else {

        li.className = 'layer';
        var input = document.createElement('input');
        if (lyr.get('type') === 'base') {
            input.type = 'radio';
            input.name = 'base';
        } else {
            input.type = 'checkbox';
        }
        input.id = lyrId;
        input.checked = lyr.get('visible');
        input.onchange = function(e) {
            this_.setVisible_(lyr, e.target.checked);
        };
        li.appendChild(input);

        label.htmlFor = lyrId;
        label.innerHTML = lyrTitle;
        li.appendChild(label);

    }

    return li;

};

/**
 * Render all layers that are children of a group.
 * @private
 * @param {ol.layer.Group} lyr Group layer whos children will be rendered.
 * @param {Element} elm DOM element that children will be appended to.
 */
ol.control.LayerSwitcher.prototype.renderLayers_ = function(lyr, elm) {
    var lyrs = lyr.getLayers().getArray().slice().reverse();
    for (var i = 0, l; i < lyrs.length; i++) {
        l = lyrs[i];
        if (l.get('title')) {
            elm.appendChild(this.renderLayer_(l, i));
        }
    }
};

/**
 * **Static** Call the supplied function for each layer in the passed layer group
 * recursing nested groups.
 * @param {ol.layer.Group} lyr The layer group to start iterating from.
 * @param {Function} fn Callback which will be called for each `ol.layer.Base`
 * found under `lyr`. The signature for `fn` is the same as `ol.Collection#forEach`
 */
ol.control.LayerSwitcher.forEachRecursive = function(lyr, fn) {
    lyr.getLayers().forEach(function(lyr, idx, a) {
        fn(lyr, idx, a);
        if (lyr.getLayers) {
            ol.control.LayerSwitcher.forEachRecursive(lyr, fn);
        }
    });
};

/**
 * Generate a UUID
 * @returns {String} UUID
 *
 * Adapted from http://stackoverflow.com/a/2117523/526860
 */
ol.control.LayerSwitcher.uuid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

/**
* @private
* @desc Apply workaround to enable scrolling of overflowing content within an
* element. Adapted from https://gist.github.com/chrismbarr/4107472
*/
ol.control.LayerSwitcher.enableTouchScroll_ = function(elm) {
   if(ol.control.LayerSwitcher.isTouchDevice_()){
       var scrollStartPos = 0;
       elm.addEventListener("touchstart", function(event) {
           scrollStartPos = this.scrollTop + event.touches[0].pageY;
       }, false);
       elm.addEventListener("touchmove", function(event) {
           this.scrollTop = scrollStartPos - event.touches[0].pageY;
       }, false);
   }
};

/**
 * @private
 * @desc Determine if the current browser supports touch events. Adapted from
 * https://gist.github.com/chrismbarr/4107472
 */
ol.control.LayerSwitcher.isTouchDevice_ = function() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch(e) {
        return false;
    }
};


// var exportPNGElement = document.getElementById('export-png');

// if ('download' in exportPNGElement) {
//   exportPNGElement.addEventListener('click', function() {
//     map.once('postcompose', function(event) {
//       var canvas = event.context.canvas;
//       exportPNGElement.href = canvas.toDataURL('image/png');
//     });
//     map.renderSync();
//   }, false);
// } else {
//   var download = document.getElementById('download');
//   download.style.display = 'none';
//   /**
//    * display error message
//    */
//   // info.style.display = '';
// }