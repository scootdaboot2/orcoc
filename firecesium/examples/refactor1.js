// promises polyfill
(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);
ol.layer.Heatmap.prototype.setBlur = function(blur) {
  this.set(ol.layer.HeatmapLayerProperty.BLUR, blur);
};
function between(x, min, max) {
  return x >= min && x <= max;
}
var colors = ['rgba(255,165,0,.2)', 'rgba(0,255,255,.3)', 'rgba(0,255,0,.4)', 'rgba(255,255,0,.5)', 'rgba(255,0,0,.6)'];
// var colors = ['#00f', '#0ff', '#0f0', '#ff0', '#f00'];
// var initRadius = 10;
var map; 
var ol3d;
var map3d = document.getElementById('map3d');

var toggle = document.getElementById('toggle');

function _doToggle() {
  ol3d.setEnabled(!ol3d.getEnabled());
}

function toggle3D() {
  if (!ol3d) {
    var s = window.lazyLoadCesium();
    s.onload = function() {
      init3D();
      _doToggle();
    };
  } else {
     _doToggle();
  }
}

function init3D() {
  ol3d = new olcs.OLCesium({
    map: map,
    target: map3d
  });
  var scene = ol3d.getCesiumScene();
}

toggle.addEventListener('click', function() {
  if (map3d.className == 'dontsee') {
    toggle3D();
    map3d.className = 'see';
  }
  else {
    toggle3D();
    map3d.className = 'dontsee';
    map.setView(new ol.View({
        center: [-12753260.184760537, 4948659.629345282],
        zoom: 5.55,
        extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
      })
    );
  }
});

var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';
// function resSort(array) {
//   var newArray = [];
//   array.forEach(function(current_value, index, initial_array) {
//     var oo = {};
//     var str = current_value.attributes.IncNumber;
//     var key = str.length = 15 ? str.slice(0, 4) + '-' + str.slice(4, 9) + '-' + str.slice(9, 15) : str.slice(0, 4) + '-' + str.slice(4, 10) + '-' + str.slice(9, 16) ; 
//     var Name = current_value.attributes.Name;
//     var MobDate = current_value.attributes.MobDate;
//     var ResProvAgency = current_value.attributes.ResProvAgency;
//     oo[key] = {"Name" : '<span>Name: ' + Name + '</span>', "Mob Date" : '<br><span>&nbsp;&nbsp;&nbsp;&nbsp;Mob Date: ' + new Date(parseInt(MobDate)).toLocaleString() + '</span>', "Agency" : '<br><span>&nbsp;&nbsp;&nbsp;&nbsp;Agency: ' + ResProvAgency + '</span><br>'};
//     newArray.push(oo);
//   });
//   return newArray;
// }

var today = Date.now();
var options = 
{
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
var fireStyles = {
  'Point': [new ol.style.Style({
    image: new ol.style.Circle({
      radius: 0,
      fill: null,
      stroke: new ol.style.Stroke({color: 'blue', width: 0})
    })
  })]
};


var dateField = document.createElement('div');
dateField.className = 'display-overlay ol-unselectable ol-control';
dateField.innerHTML = 'DATE';
var displayDate = new ol.control.Control({
  element: dateField
});

var start = document.createElement('input');
start.id = 'start';
start.className = 'ol-control pickStart';
start.value = 'Start Date';

var end = document.createElement('input');
end.id = 'end';
end.className = 'ol-control pickEnd';
end.value = 'End Date'

var playButton = document.getElementById('playButton');
playButton.className = "ol-control play   ";
playButton.innerHTML = 'PLAY';

var range = document.createElement('div');
range.appendChild(start);
range.appendChild(end);
range.appendChild(playButton);
var startCtrl = new ol.control.Control({
  element: range
});
var endCtrl = new ol.control.Control({
  element: range
});
var simGo = new ol.control.Control({
  element: range 
})


var startDate,
    endDate,
    simStart,
    simEnd,
    updateStartDate = function() {
      startPicker.setStartRange(startDate);
      endPicker.setStartRange(startDate);
      endPicker.setMinDate(startDate);
    },
    updateEndDate = function() {
      startPicker.setEndRange(endDate);
      startPicker.setMaxDate(endDate);
      endPicker.setEndRange(endDate);
    },
    startPicker = new Pikaday({
      field: start,
      position: 'top left',
      theme: 'dark-theme',
      minDate: new Date(2010, 01, 01),
      maxDate: new Date(2020, 12, 31),
      onSelect: function() {
        startDate = this.getDate();
        simStart = this.getDate().valueOf();
        updateStartDate();
      }
    }),
    endPicker = new Pikaday({
      field: end,
      position: 'top left',
      theme: 'dark-theme',
      minDate: new Date(2010, 01, 01),
      maxDate: new Date(2020, 12, 31),
      onSelect: function() {
        endDate = this.getDate();
        simEnd = this.getDate().valueOf();
        updateEndDate();
      }
    }),
    _startDate = startPicker.getDate(),
    _endDate = endPicker.getDate();

if (_startDate) {
  startDate = _startDate;
  updateStartDate();
}

if (_endDate) {
  endDate = _endDate;
  updateEndDate();
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

var opacity = function(acres) { 
  var fade = (acres < 1000) ? .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) : (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
  return fade;  
}

var IRWIN = {
  method: 'POST',
  url: 'https://irwin.doi.gov/arcgis/tokens/generateToken',
  params: {
    f: 'json',
    username: 'gbccfiredata',
    password: 'KFyHQ2RAdxWa',
    client: 'referer',
    referer: 'http://gacc.nifc.gov/gbcc/',
    expiration: '1440'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
var newFiresStyleCache = {};
var newFiresStyleFunction = function(feature) {
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
  var style = newFiresStyleCache[acres];
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres),
        fill: new ol.style.Fill({
          color: 'rgba(232,14,14,' + opacity(acres) + ')'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), 
      })
    });
    newFiresStyleCache[acres] = style;
  }
  return (discovery >= (today - 1.5*86400000)) ? [newFiresStyleCache[acres]] : fireStyles['Point'];
}
var newFiresLayer = new ol.layer.Vector({
  wrapX: false,
  style: newFiresStyleFunction
});
var nfObject = {
  format: new ol.format.GeoJSON(),
  url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
      +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.25*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
      +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA') AND (UniqueFireIdentifier <> '2016-NVWID-020086')" 
      +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
      +"&token="  
}
var ongoingFiresStyleCache = {};
var ongoingFiresStyleFunction = function(feature) {
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
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
  return (discovery > (today - 30*86400000) && discovery < (today - 1.25*86400000)) ? style : fireStyles['Point'];
}
var ongoingFiresLayer = new ol.layer.Vector({
  wrapX: false,
  style: ongoingFiresStyleFunction
});
var ofObject = {
  format: new ol.format.GeoJSON(),
  url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
      +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FireOutDateTime IS NULL) AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
      +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1') AND (UniqueFireIdentifier <> '2016-NVWID-020086')"
      +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
      +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
      +"&token="
}

var rxFiresStyleCache = {};
var rxFiresStyleFunction = function(feature) {
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
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
  wrapX: false,
  style: rxFiresStyleFunction
});
var rxfObject = {
  format: new ol.format.GeoJSON(),
  url : "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
    + "&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad')" 
    + " AND (CreatedOnDateTime >= " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
    + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX') AND (IncidentTypeCategory <> 'FA')"
    + " AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
    + "&returnGeometry=true"
    + "&spatialRel=esriSpatialRelIntersects"
    + "&outFields=*"
    + "&outSR=102100"
    + "&token="
}

// // var getHeatSource = function(config, sourceObject) {
// //   return new Promise(function(success, failure) {
// //     var source = ajax(config).then(function(response) {
// //       sourceObject.url = sourceObject.url + JSON.parse(response).token;
// //       var sourceName = new ol.source.Vector(sourceObject);
// //       return sourceName;
// //     });
// //     source == null ? failure(source) : success(source);
// //   })
// // };
var heatUrl;
// heatUrl =  "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//               +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
//               +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1') AND (UniqueFireIdentifier <> '2016-NVWID-020086')"
//               // +" AND (CreatedOnDateTime > " + simStart + ") AND (CreatedOnDateTime < " + simEnd + ") AND (ModifiedOnDateTime > " + (today - 60*86400000) + ")"
//               +" AND (CreatedOnDateTime > " + (today - 60*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 60*86400000) + ")"
//               +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
//               +"&token=";
var heatConfig;
// heatConfig = {
//   method: 'POST',
//   url: heatUrl,
//   params: {
//     f: 'json',
//     // username: 'gbccfiredata',
//     // password: 'KFyHQ2RAdxWa',
//     client: 'referer',
//     referer: 'http://gacc.nifc.gov/gbcc/',
//     expiration: '1440'
//   },
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }


// var waitToRemove = [];


// function getToken(config, config2, url) {
//   return new Promise(function(success, failure) {
//     var urlToken = ajax(config).then(function(response) {
//       config2.url = config2.url + JSON.parse(response).token;
//       return(config2.url);
//     })
//     urlToken == null ? failure(urlToken) : success(urlToken);
//   })
// };

// var heatFeatures;
// function getHeatSource(token) {
//   ajax(heatConfig).then(function(response) {
//     var format = new ol.format.GeoJSON();
//     var sort_by = function(field, reverse, primer) {
//       var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
//       reverse = !reverse ? 1 : -1;
//       return function(a, b) {
//         return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
//       }
//     }

//     heatFeatures = format.readFeatures(response);
//     // console.log(heatFeatures[3].getProperties()['CreatedOnDateTime']);
//     // .sort(sort_by(feature.get('CreatedOnDateTime'), false));
//     // heatFeatures = format.readFeatures(response).sort(function(a, b) {

//     //   if (a.getProperties()['CreatedOnDateTime'] > b.getProperties()['CreatedOnDateTime']) {
//     //     console.log(a.getProperties()['CreatedOnDateTime']);
//     //     return 1;
//     //   }
//     //   if (a.getProperties()['CreatedOnDateTime'] < b.getProperties()['CreatedOnDateTime']) {
//     //     return -1;
//     //   }
//     //   // a must be equal to b
//     //   return 0;
//     // });

//     var mapped = heatFeatures.map(function(current, j) {
//       return {index: j, CreatedOnDateTime: current.getProperties()["CreatedOnDateTime"]}
//     });
//     mapped.sort(function(a, b) {
//       if (a['CreatedOnDateTime'] > b['CreatedOnDateTime']) {
//         return 1;
//       }
//       if (a['CreatedOnDateTime'] < b['CreatedOnDateTime']) {
//         return -1;
//       }
//       // a must be equal to b
//       return 0;
//     })
    
//     var result = mapped.map(function(current){
//       return heatFeatures[current.index];
//     });

//     for (var i = 0; i < result.length; i++) {
//       addLater(result[i], i*50);
//     }
//   });
// }

// getToken(IRWIN, heatConfig, heatUrl).then(getHeatSource, noToken);




var heatLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    wrapX: false,
  }),
  // style: heatStyleFunction
});
var hotLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    wrapX: false,
  }),
  // style: heatStyleFunction
});
// function makeGradient(r, grad) {
//   var cnv = document.createElement('canvas');
//   var ctx = cnv.getContext('2d');
//   ctx.shadowOffsetX = ctx.shadowOffsetY = 250;
//   ctx.shadowBlur = 15;
//   ctx.shadowColor = '#000';
//   var gradient = ctx.createRadialGradient(r,r,r,r,r,0);
//   grad.map(function(c,i) {gradient.addColorStop(i * ( 1 / (grad.length) ),c)});
//   return gradient;
// }
var heatStyleCache = {};
var heatStyleFunction = function(feature) {
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres'); 
  var range = [200, 500, 1100, 2300, 4700];
  var newRange = range.reduce(function(prev, curr) {
    if (between(acres, prev, curr)) { // this serves as our `filter`
        prev.push(curr);
    }
    return prev;
  }, []);
  var y = range.indexOf(newRange[0]);
  var wColors = colors.slice(0, y+1);
  var y = range.indexOf(newRange[0]);
  var rad = 6 + (2*y);
  var style = heatStyleCache[rad];
  if (!style) {
    var style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: rad,
        fill: new ol.style.Fill({
          color: makeGradient(rad, wColors) 
        })
      })
    })
    heatStyleCache[rad] = style;
  }
  return style;
}
// var heatLayer = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     wrapX: false,
//   }),
//   style: heatStyleFunction
// });

addVectorLayerSource(IRWIN, nfObject, newFiresLayer)
  .then(loadSource, noToken);
// addVectorLayerSource(IRWIN, ofObject, ongoingFiresLayer)
//   .then(loadSource, noToken);
// addVectorLayerSource(IRWIN, rxfObject, rxFiresLayer)
//   .then(loadSource, noToken);
// heatLayerSource(IRWIN, heatObject, heatLayer, heatUrl)
//   .then(heatSource, noToken);

var bigScreen = new ol.control.FullScreen();
var controls = [
  new ol.control.Attribution(
  ),
  new ol.control.MousePosition({
    undefinedHTML: 'outside',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate) {
      return ol.coordinate.format( coordinate, '{y}, {x}', 4);
    }
  }),
  new ol.control.Rotate({
    autohide: false
  }),
  new ol.control.ScaleLine({
  }),
  new ol.control.Zoom(
  ),
  new ol.control.ZoomSlider(),
  bigScreen,
  displayDate,
  simGo
];

var vectorStyle = new ol.style.Style({
  // fill: new ol.style.Fill({
  //   // color: 'rgba(0, 0, 0, 0.2)'
  //   color: 'rgba(141, 92, 141, 0.2)'
  // }),
  stroke: new ol.style.Stroke({
    // color: 'rgba(255, 255, 255, 1)',
    // color: 'rgba(215, 212, 60, 1)',
    // color: '#683A5E',
    color: 'red',
    width: 2.5
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

var vectorSource = new ol.source.Vector({
  // url: 'data/topojson/egpGbccLocal.topojson',
  // url: 'data/topojson/gbccBoundaries.topojson',
  url: 'data/topojson/gbccLocalWebsites.topojson',
  format: new ol.format.TopoJSON()
  // url: 'data/geojson/gbccLocalWebsites.geojson',
  // format: new ol.format.GeoJSON()
});

var vectorLayer = new ol.layer.Vector({
  title: 'Local Dispatch Boundaries',
  source: vectorSource,
  // opacity: ,
  // source: new ol.source.Vector({
  //   features: (new ol.format.TopoJSON()).readFeatures(gbccBoundaries)
  // }),
  // source: new ol.source.Vector({
  //   // url: 'data/topojson/egpGbccLocal.topojson',
  //   // url: 'data/topojson/gbccBoundaries.topojson',
  //   url: 'data/topojson/gbccLocalWebsites.topojson',
  //   format: new ol.format.TopoJSON()
  //   // url: 'data/geojson/gbccLocalWebsites.geojson',
  //   // format: new ol.format.GeoJSON()
  // }),
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
var mapboxDark = new ol.layer.Tile({
  title: 'MapBox Dark',
  type: 'base',
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="http://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    url: 'https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  wrapX: false
});

var layers = [
  // new ol.layer.Tile({
  //   source: new ol.source.OSM({
  //     // attributions: [
  //     //   'All maps © <a href="http://www.opencyclemap.org/">OpenCycleMap</a>',
  //     //   ol.source.OSM.ATTRIBUTION
  //     // ],
  //     // url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
  //     attributions: [
  //       "Map tiles by Carto, under CC BY 3.0.",
  //       ol.source.OSM.ATTRIBUTION
  //     ],
  //     url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
  //   }),
  //   title: "Open Street Map",
  //   type: 'base',
  //   wrapX: false,
  //   visible: true
  // }),
  mapboxDark,
  vectorLayer,
  heatLayer,
  hotLayer
  // rxFiresLayer,
  // ongoingFiresLayer,
  // newFiresLayer
];

var overallView = new ol.View({
  center: [-12753260.184760537, 4948659.629345282],
  zoom: 5.55,
});

map = new ol.Map({
  layers: layers,
  controls: controls,
  target: 'map2d',
  view: overallView, 
  logo: ({
    href: 'http://gacc.nifc.gov/gbcc/',
    src: 'data/GBCC_1b.png' 
  })
});
map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (map.getSize()), {padding: [20, 20, 20, 20], constrainResolution: false});
// map.addLayer(heatLayer);
newFiresLayer.set('selectable', true);
newFiresLayer.set('id','new');

ol.Feature.prototype.getLayer = function() {
  var this_ = this, layer_;
  var sameFeature = function(feature){
    return (this_ === feature) ? true : false;
  };
  map.getLayers().forEach(function(layer) {
    var source = layer.getSource();
    if (source instanceof ol.source.Vector) {
      var features = source.getFeatures();
      if (features.length > 0) {
        var found = features.some(sameFeature);
          if (found) {
            layer_ = layer;
          }
        }
      }
  });
  return layer_;
};

var selectHover = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove,
  layers: [rxFiresLayer, ongoingFiresLayer, newFiresLayer],
  style: function(feature) {
    if (feature.getLayer().get('id') == 'new') {
      var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
      var style = new ol.style.Style({
        image: new ol.style.Circle({
          stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}),
          radius: (acres < 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
        })
      }); 
    }
    return style;
  }  
});

map.addInteraction(selectHover);

selectHover.on('select', function(e) {
  var feature = e.selected[0];
  if (feature) {
    var coordinate;
    var feature = e.selected[0];
  }
});

  var selectClick = new ol.interaction.Select({
    condition: ol.events.condition.click,
    layers: [
      mapboxDark,
      // mapbox, 
      // raster,
      // bing,
      // openTopo,
      // stamen,
      // usgsTopo,
      vectorLayer,
    ],
    style: new ol.style.Style({
      // fill: new ol.style.Fill({
      //   // color: 'rgba(0,0,255, .1)',
      //   color: 'rgba(255, 145, 20, .1)'
      // }),
      stroke: new ol.style.Stroke({
        // color: 'rgba(168, 0, 2, .8)',
        // color: 'rgba(0,0,255, .8)',
        color: '#fff',
        width: 3
      })
    })  
  });
  map.addInteraction(selectClick);

  selectClick.on('select', function(e) {
    var feature = e.selected[0];
    if (feature) {
      var polygon = (feature.getGeometry());// @type {ol.geom.SimpleGeometry 
      var size = (map.getSize()); // @type {ol.Size} 
      // map.getView().fit(polygon, size, {padding: [0, 0, 0, 0], constrainResolution: false});
      var aa = polygon.getExtent();
      var oo = ol.extent.getCenter(aa);
      // let duration = 1500; // ie11+
      // var self = this;
      // var duration = 1500;
      var start = +new Date();
      var pan = ol.animation.pan({
        duration: 800,
        source: (map.getView().getCenter()),  // @type {ol.Coordinate}
        start: start
      });
      var bounce = ol.animation.bounce({
        duration: 800, // or could use the "this" keyword because duration is a variable defined above, 
        resolution: 1.2 * map.getView().getResolution(),
        start: start
      });
      map.beforeRender(pan, bounce);
      // map.getView().setCenter(oo);
      map.getView().fit(polygon, size, {padding: [80, 80, 80, 80], constrainResolution: false});
    }
    else {
      map.beforeRender(
        ol.animation.pan({
          duration: 800,
          source: (map.getView().getCenter()),  // @type {ol.Coordinate}
          start: start
        }),
        ol.animation.bounce({
          duration: 800, // or could use the "this" keyword because duration is a variable defined above, 
          resolution: 1.3 * map.getView().getResolution(),
          start: start
        })
      );
      map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (map.getSize()), {padding: [80, 80, 80, 80], constrainResolution: false});
      // map.setView(new ol.View({
      //     // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
      //     center: [-12753260.184760537, 4948659.629345282],
      //     // zoom: 5.55,
      //     resolution: map.getView().getResolution(),
      //     // minZoom: 5,
      //     // maxZoom: 9.8,
      //     extent: bb
      //   })
      // );
        // map.getView().setZoom(5);
        // map.getView().setZoom(map.getView().getZoom()+1);
    } 
  });
function getWeight(feature) {
  var fireStart = feature.get('FireDiscoveryDateTime') ? feature.get('FireDiscoveryDateTime') : feature.get('CreatedOnDateTime');
  // console.log('fireStart ' + fireStart);
  var fireEnd = feature.get('FireOutDateTime');
  // console.log('fireEnd ' + fireEnd);
  var duration = !fireEnd ? null : fireEnd - fireStart;
  // console.log('duration ' + duration);
  var delta = !duration ? null : Math.ceil(duration / 86400000);
  // console.log(delta);
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres'); 
  // return (acres < 1000) ? 1 - .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) + .4 : 1 - (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
  var wMax = (acres < 1000) ? 1 - .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) + .4 : 1 - (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
  return ol.easing.linear(wMax);
};
// var heatLayer = new ol.layer.Heatmap({
//   source: new ol.source.Vector({
//     wrapX: false,
//   }),
//   weight: getWeight,
//   radius: 10
// });
 

function makeGradient(r, grad) {
  var cnv = document.createElement('canvas');
  var ctx = cnv.getContext('2d');
  // ctx.globalAlpha = 0.2;
  // ctx.shadowOffsetX = ctx.shadowOffsetY = 250;
  // ctx.shadowBlur = 15;
  // ctx.shadowColor = '#fff';
  var gradient = ctx.createRadialGradient(r,r,r,r,r,0);
  grad.map(function(c,i) {
    return gradient.addColorStop(i * (1 / (grad.length)), c);
  });
  // ctx.globalCompositeOperation = 'destination.in';
  // gradient.globalAlpha = .2;
  return gradient;
}

// function heatStyleFunction(feature) {
//   var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres'); 
//   var range = [200, 500, 1100, 2300, 4700];
//   var newRange = range.reduce(function(prev, curr) {
//     if (between(acres, prev, curr)) { // this serves as our `filter`
//         prev.push(curr);
//     }
//     return prev;
//   }, []);
//   var y = range.indexOf(newRange[0]);
//   var wColors = colors.slice(0, y+1);
//   var y = range.indexOf(newRange[0]);
//   var style = new ol.style.Style({
//     image: new ol.style.Circle({
//       radius: 6 + (2*y),
//       fill: new ol.style.Fill({
//         color: makeGradient(6 + (2*y), wColors) 
//       })
//     })
//   })
//   return style;
// }

function coolOff(feature, pulsateCount) {
  var start = new Date().getTime();
  // var listenerKey;
  // function between(x, min, max) {
  //   return x >= min && x <= max;
  // }
  var fireStart = feature.get('FireDiscoveryDateTime') ? feature.get('FireDiscoveryDateTime') : feature.get('CreatedOnDateTime');
  // console.log('fireStart ' + fireStart);
  var fireEnd = feature.get('FireOutDateTime');
  // console.log('fireEnd ' + fireEnd);
  var duration = !fireEnd ? null : fireEnd - fireStart;
  // console.log('duration ' + duration);
  var delta = !duration ? null : 2*Math.ceil(duration / 86400);
  // console.log(delta);
  var range = [200, 500, 1100, 2300, 4700];
  // var range = [500, 1000, 2000, 4000, 8000];
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres'); 
  var wMax = (acres < 1000) ? 1 - .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) + .1 : 1 - (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
  var newRange = range.reduce(function(prev, curr) {
    if (between(acres, prev, curr)) { // this serves as our `filter`
        prev.push(curr);
    }
    return prev;
  }, []);
  var y = range.indexOf(newRange[0]);
  var wColors = colors.slice(0, y+1);

  var style = feature.getStyle();
  var image = style.getImage();
  var r = image.getRadius();
  // var r = 8;
  var currR = r;
  var maxR = 2*r;
  // console.log(maxR);
  var sign = 1;
  // var hot = feature.clone();
  var cool = feature.clone();
  heatLayer.getSource().removeFeature(feature);
      // var elapsedRatio = elapsed / (simEnd - simStart) / 86400;
  function animate(event) {
    if (!delta) {
      var vectorContext = event.vectorContext;
      var frameState = event.frameState;
      var elapsed = frameState.time - start;
      // var elapsedRatio = elapsed / delta;
      // var radius = (ol.easing.easeOut(elapsedRatio) * 2 * y) + 6;
      if (currR > maxR) {
        sign = -1;
        // pulsateCount--;
      } else if (currR < r) {
        sign = 1;
        if (elapsed > 4*((simEnd - simStart) / 86400)) {
                    map.un('postcompose', animate);
          // ol.Observable.unByKey(listenerKey);
          return;
        }
        // if (!pulsateCount) {
          
        //   map.un('postcompose', animate);
        //     return;
        // }
      }
      // currR += sign * 0.1;
      currR += sign * ol.easing.linear(.07);
      // hot.setStyle( new ol.style.Style({
      //   image: new ol.style.Circle({
      //     radius: currR,
      //     fill: new ol.style.Fill({
      //       color: makeGradient(currR, wColors) 
      //     })
      //   })
      // }));
      // hotLayer.getSource().addFeature(hot);
      vectorContext.drawFeature(feature, new ol.style.Style({
        image: new ol.style.Circle({
          radius: currR,
          fill: new ol.style.Fill({
            color: makeGradient(currR, wColors) 
          })
        })
      }));
      map.render();     
    }
    else {
      var vectorContext = event.vectorContext;
      var frameState = event.frameState;
      var elapsed = frameState.time - start;
      var elapsedRatio = elapsed / delta;
      // var radius = (ol.easing.easeOut(elapsedRatio) * maxR;
      if (currR > maxR) {
        sign = -1;
        pulsateCount--;
      } else if (currR < r) {
        sign = 1;
        if (elapsed > delta) {

          map.un('postcompose', animate);
          // ol.Observable.unByKey(listenerKey);
          return;
        }
        // else console.log(elapsedRatio);
        // if (!pulsateCount) {
          // map.un('postcompose', animate);
          // heatLayer.getSource().addFeature(feature);
            // return;
        // }
      }
      currR += sign * ol.easing.easeOut(.07);
      // hot.setStyle( new ol.style.Style({
      //   image: new ol.style.Circle({
      //     radius: currR,
      //     fill: new ol.style.Fill({
      //       color: makeGradient(currR, wColors) 
      //     })
      //   })
      // }));
      // hotLayer.getSource().addFeature(hot);
      vectorContext.drawFeature(feature, new ol.style.Style({
        image: new ol.style.Circle({
          radius: currR,
          fill: new ol.style.Fill({
            color: makeGradient(currR, wColors) 
          })
        })
      }));
      map.render();     
    }
  }
  map.on('postcompose', animate);
  // listenerKey = map.on('postcompose', animate);
}



playButton.addEventListener('click', function() {
  heatUrl =  "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
                +"&where=(RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'FA')" // AND (RecordSource = 'ifm')
                // +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'FA')"
                +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1') AND (UniqueFireIdentifier <> '2016-NVWID-020086')"
                +" AND (CreatedOnDateTime > " + simStart + ") AND (CreatedOnDateTime < " + simEnd + ")"
                // +" AND (CreatedOnDateTime > " + (today - 60*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 60*86400000) + ")"
                +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
                +"&token=";
  var heatConfig = {
    method: 'POST',
    url: heatUrl,
    params: {
      f: 'json',
      // username: 'gbccfiredata',
      // password: 'KFyHQ2RAdxWa',
      client: 'referer',
      referer: 'http://gacc.nifc.gov/gbcc/',
      expiration: '1440'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  function getToken(config, config2, url) {
    return new Promise(function(success, failure) {
      var urlToken = ajax(config).then(function(response) {
        config2.url = config2.url + JSON.parse(response).token;
        return(config2.url);
      })
      urlToken == null ? failure(urlToken) : success(urlToken);
    })
  };

  var heatFeatures;
  function getHeatSource(token) {
    ajax(heatConfig).then(function(response) {
      var format = new ol.format.GeoJSON();
      // var sort_by = function(field, reverse, primer) {
      //   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
      //   reverse = !reverse ? 1 : -1;
      //   return function(a, b) {
      //     return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      //   }
      // }
      heatFeatures = format.readFeatures(response);


      // console.log(heatFeatures[3].getProperties()['CreatedOnDateTime']);
      // .sort(sort_by(feature.get('CreatedOnDateTime'), false));
      // heatFeatures = format.readFeatures(response).sort(function(a, b) {

      //   if (a.getProperties()['CreatedOnDateTime'] > b.getProperties()['CreatedOnDateTime']) {
      //     console.log(a.getProperties()['CreatedOnDateTime']);
      //     return 1;
      //   }
      //   if (a.getProperties()['CreatedOnDateTime'] < b.getProperties()['CreatedOnDateTime']) {
      //     return -1;
      //   }
      //   // a must be equal to b
      //   return 0;
      // });

      var mapped = heatFeatures.map(function(current, j) {
        return {index: j, CreatedOnDateTime: current.getProperties()["CreatedOnDateTime"]}
      });
      mapped.sort(function(a, b) {
        if (a['CreatedOnDateTime'] > b['CreatedOnDateTime']) {
          return 1;
        }
        if (a['CreatedOnDateTime'] < b['CreatedOnDateTime']) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      
      var result = mapped.map(function(current){
        return heatFeatures[current.index];
      })

      // console.log(result);
      var waitToRemove = result.filter(function(curr) {
        return curr.get('FireOutDateTime');
      });

      var mapped2 = waitToRemove.map(function(el, n) {
        return {index: n, FireOutDateTime: el.get('FireOutDateTime')};
      });

      mapped2.sort(function(a, b) {
        if (a['FireOutDateTime'] > b['FireOutDateTime']) {
          return 1;
        }
        if (a['FireOutDateTime'] < b['FireOutDateTime']) {
          return  -1;
        }
        return 0;
      });

      result2 = mapped2.map(function(current) {
        return waitToRemove[current.index];
      });

      var dates = [simStart]
      var dayCount = Math.ceil((simEnd - simStart) / 86400000);
      for (i = 1; i <= dayCount; i++) {
        dates.push(dates[i-1] + 86400000)
      }

      // function addLater(feature, timeout) {
      //   window.setTimeout(function() {
      //     heatLayer.getSource().addFeature(feature);
      //     feature.setStyle(heatStyleFunction()) 
      //     coolOff(feature, 1);
      //     heatLayer.getSource().getFeatures().filter(function(curr) {
      //       return (curr.get('FireOutDateTime') != null) && (curr.get('FireOutDateTime') <= feature.get('CreatedOnDateTime'));
      //     }).map(function(current) {
      //       // coolOff(current);
      //       return heatLayer.getSource().removeFeature(current);
      //     });
      //     // hotLayer.getSource().getFeatures().filter(function(curr) {
      //     //   return (curr.get('FireOutDateTime') != null) && (curr.get('FireOutDateTime') <= feature.get('CreatedOnDateTime'));
      //     // }).map(function(current) {
      //     //   // coolOff(current);
      //     //   return hotLayer.getSource().removeFeature(current);
      //     // });   
      //     dateField.innerHTML = feature.get('CreatedOnDateTime') ? (new Date(parseInt(feature.get('CreatedOnDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('CreatedOnDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('CreatedOnDateTime'))).getFullYear() : 'unknown';
      //   }, timeout);
      // };
      // function addLater(date, timeout) {
      //   window.setTimeout(function() {
      //     heatFeatures.filter(function(cv, ii) {
      //     return (cv.get('FireDiscoveryDateTime') ? cv.get('FireDiscoveryDateTime') : cv.get('CreatedOnDateTime')) <= date;
      //   })
      // }
      dates.map(function(current_value, index) {
        heatFeatures.filter(function(cv, ii) {
          var cutoff = (cv.get('FireDiscoveryDateTime') ? cv.get('FireDiscoveryDateTime') : cv.get('CreatedOnDateTime'));
          return index > 0 ? (cutoff <= current_value && cutoff > dates[index - 1]) : cutoff <= current_value;
        }).map(function(cc, jj) {
          window.setTimeout(function() {
            dateField.innerHTML = (new Date(current_value).getMonth() + 1) + '/' + (new Date(current_value).getDate()) + '/' + (new Date(current_value).getFullYear())
            heatLayer.getSource().addFeature(cc);
            cc.setStyle(heatStyleFunction(cc));
            coolOff(cc, 1);
            // heatFeatures.indexOf(cc) > -1 ? heatFeatures.splice(heatFeatures.indexOf(cc)) : '';
            // console.log(heatFeatures.length);
            // heatLayer.getSource().getFeatures().filter(function(curr) {
            //   return (curr.get('FireOutDateTime') != null) && (curr.get('FireOutDateTime') <= feature.get('CreatedOnDateTime'));
            // }).map(function(current) {
            //   return heatLayer.getSource().removeFeature(current);
            // });
          }, index*2000)
        })
      })
      
      // for (var i = 0; i < result.length; i++) {
      //   addLater(result[i], i*100);
        
      // };
    });
  }
  heatLayer.getSource().clear();
  getToken(IRWIN, heatConfig, heatUrl).then(getHeatSource, noToken);
}, false);

// context.createRadialGradient(intern circle x, intern circle y, intern circle radius,extern circle x,extern circle y, extern circle radius)
// function makeGradient(r) {
//   var cnv = document.createElement('canvas');
//   var ctx = cnv.getContext('2d');
//   var gradient = ctx.createRadialGradient(r,r,r,r,r,0);
  
//   gradient.addColorStop(0,'#00f');
//   gradient.addColorStop(.2,'#0ff');
//   gradient.addColorStop(.4,'#0f0');
//   gradient.addColorStop(.6,'#ff0');
//   gradient.addColorStop(1,'#f00');


//   return gradient;
// }

// var vectorLayer = new ol.layer.Vector({
//     source: new ol.source.Vector()
// });
// var map = new ol.Map({
//     target: $('#olMap')[0],
//     ol3Logo: false,
//     layers: [
//     new ol.layer.Tile({
//         source: new ol.source.TileJSON({
//             url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
//         })
//     }),
//     vectorLayer],
//     view: new ol.View({
//         center: [0, 0],
//         zoom: 3
//     })
// });

// var point = new ol.Feature({
//     geometry: new ol.geom.Point([0, 0]),
//     name: 'test'
// });

// vectorLayer.getSource().addFeature(point);
// r=50;
// point.setStyle(new ol.style.Style({
//     image: new ol.style.Circle({
//         radius: r,
//         fill: new ol.style.Fill({
//             color: makeGradient(r) 
//         }),
//         //stroke: new ol.style.Stroke({
//           //  color: 'rgb(255, 141, 77)',
//            // width: 2
//         //})
//     })
// }));
// var animate = function (pulsateCount) {
//     var style = point.getStyle(),
//         image = style.getImage(),
//         r = image.getRadius(),
//         currR = r,
//         maxR = 2 * r,
//         sign = 1;
//     vectorLayer.getSource().removeFeature(point);

//     var pulsate = function (event) {
//         var vectorContext = event.vectorContext;
//         if (currR > maxR) {
//             sign = -1;
//             pulsateCount--;
//         } else if (currR < r) {
//             sign = 1;
//             if (!pulsateCount) {
//                 map.un('postcompose', pulsate);
//                 vectorLayer.getSource().addFeature(point);
//                 return;
//             }
//         }
//         currR += sign * 0.1;
//         vectorContext.drawFeature(point, new ol.style.Style({
//             image: new ol.style.Circle({
//                 radius: currR,
//                 fill: new ol.style.Fill({
//                   color: makeGradient(currR) 
//                 }),
//                 //stroke: image.getStroke()
//             })
//         }));
//         map.render();
//     };

//     map.on('postcompose', pulsate);
// };

// animate(5);