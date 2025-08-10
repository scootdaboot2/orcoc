(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);
var today = Date.now();
// var irwinToken = "J-vUH-69cbgRwwuq7wPdg1295t9OFYt-A5lA-1giqmdNG8KC5j32i21RJmIaX5Y5"; // http://irwin.doi.gov/arcgis/tokens/
// var egpToken = 'sGBYcBtDfSmp017pA0VBt5TlvNsvW7B6GHevO234cl-l9MYHd_x3Kn61I_I__z5nK96H_7Sw_9x5lBUKe92bJw..'; // https://egp.nwcg.gov/arcgis/tokens/
var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';

var irwin;
var egp;
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

function loadSources () {
  // var perims = [];
  // var gsPerims;
  ajax({
    method: 'POST',
    url: 'https://irwin.doi.gov/arcgis/tokens/generateToken',
    params: {
      f: 'json',
      username: IRWIN1,
      password: IRWIN2,
      client: 'referer',
      referer: 'http://gacc.nifc.gov/gbcc/',
      expiration: '1440'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(function(firstValue) {
    irwin = JSON.parse(firstValue).token;
    // console.log(irwin);
    var rxSource = new ol.source.Vector({
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
        + "&token=" + irwin
        // + "&token=" + irwinToken
    });

    var newFiresSource = new ol.source.Vector({
      // format: new ol.format.TopoJSON(),
      // url: 'data/topojson/newFires.topojson'
      // format: new ol.format.EsriJSON(),
      format: new ol.format.GeoJSON(),
      // http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'FA') AND (IncidentTypeCategory <> 'RX') AND (IsComplex = 'false') AND (CreatedOnDateTime >= 1466361489619)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=J-vUH-69cbgRwwuq7wPdgzHd75lZjDHKZigXYp0rTVM.
      url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
          +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.25*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
          +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA')" 
          +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
          // +"&token=" + irwinToken
          +"&token=" + irwin
    });

    var ongoingSource = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
          +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
          +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1')"
          +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
          +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
          +"&token=" + irwin
          // +"&token=" + irwinToken
    });
    rxFiresLayer.setSource(rxSource);
    newFiresLayer.setSource(newFiresSource);
    ongoingFiresLayer.setSource(ongoingSource);
    return ajax({
      method: 'POST',
      url: 'https://egp.nwcg.gov/arcgis/tokens/',
      params: {
        f: 'json',
        username: EGP1,
        password: EGP2,
        client: 'referer',
        referer: 'http://gacc.nifc.gov/gbcc/',
        expiration: '1440'
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    // return ajax({
    //   method: 'GET',
    //   url: 'https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?l=1&apiKey=' + mlabKey,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  })
  .then(function(secondValue) {
    // perims = secondValue.slice(1,(perims.length - 1));
    // gsPerims = JSON.parse(perims);
    egp = JSON.parse(secondValue).token;
    // console.log(egp);
    var egp6 = new ol.source.Cluster({
      distance: 5,
      source: new ol.source.Vector({
        format: new ol.format.EsriJSON(),
        url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
            +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
            +'&token=' + egp
        /* whole URL  */
        // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
        //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
        //   + "&outFields=*"
        //   + "&outSR=102100"
        //   + "&token=' + egpToken
      })
    });
    var egp12 = new ol.source.Cluster({
      distance: 5,
      source: new ol.source.Vector({
        format: new ol.format.EsriJSON(),
        url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
            +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
            +'&token=' + egp
      })
    });
    var egp24 = new ol.source.Cluster({
      distance: 5,
      source: new ol.source.Vector({
        format: new ol.format.EsriJSON(),
        url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
            +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
            +'&token=' + egp
      })
    });
    var egp48 = new ol.source.Cluster({
      distance: 5,
      source: new ol.source.Vector({
        format: new ol.format.EsriJSON(),
        url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
            +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
            +'&token=' + egp
      })
    });
    var egp999 = new ol.source.Cluster({
      distance: 5,
      source: new ol.source.Vector({
        format: new ol.format.EsriJSON(),
        url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
            +'&where=AgeInHours < 50&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
            +'&token=' + egp
      })
    });
    egpModisFireDetectionCentroidLayer6.setSource(egp6);
    egpModisFireDetectionCentroidLayer12.setSource(egp12);
    egpModisFireDetectionCentroidLayer24.setSource(egp24);
    egpModisFireDetectionCentroidLayer48.setSource(egp48);
    egpModisFireDetectionCentroidLayer999.setSource(egp999);
  })
  .catch(function(error) {
    console.error('damnit.', error.statusText);
  });
}
loadSources();
setInterval(loadSources, 900000);



// option using fetch API
// fetch('data/esrijson/map.json')
// .then(
//   function (response) {
//     if (response.status !== 200) {
//       console.log('damnit. Status Code: ' + response.status);
//       return;
//     }
//     // Examine the text in the response
//     response.json().then(function (data) {
//       console.log(data);
//     }); 
//   }
// )
// .catch(function (err) {
//   console.log('Fetch Error : ', err)
// });

// var fetchResult;
// fetch("http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=json&where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160101) AND (RecordSource = 'wildcad') AND (CalculatedAcres >= 100)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=wb4ulJZ_dI8CnOAJHiPGiS6E-yGfB-vN3jpFNS-dBzo.", {mode: 'cors'})
//   .then(function (response) {
//     fetchResult = response;
//     return response.text();
//   })
//   .then(function (text) {
//     console.log('Success: ', text)
//   })
//   .catch(function (error) {
//     log('damnit.', error)
//   });

// EsriJSON for 3 month old fires
// http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=json&where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160101) AND (RecordSource = 'wildcad') AND (CalculatedAcres >= 100)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=cecbqhtvYYh7AzQPPEzZ4NagVVisizSLH2Y39zzv8Gg.

// http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=json
// &where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160101) AND (RecordSource = 'wildcad') AND (CalculatedAcres >= 100)
// &returnGeometry=true
// &spatialRel=esriSpatialRelIntersects
// &outFields=*
// &outSR=102100
// &token=cecbqhtvYYh7AzQPPEzZ4NagVVisizSLH2Y39zzv8Gg.

// EsriJSON for 1 day old fires
// http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=json&where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160523) AND (RecordSource = 'wildcad')&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=cecbqhtvYYh7AzQPPEzZ4NagVVisizSLH2Y39zzv8Gg.

// http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=json
// &where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160523) AND (RecordSource = 'wildcad')
// &returnGeometry=true
// &spatialRel=esriSpatialRelIntersects
// &outFields=*
// &outSR=102100
// &token=cecbqhtvYYh7AzQPPEzZ4NagVVisizSLH2Y39zzv8Gg.

// geojson:
// http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=geojson&where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160101) AND (RecordSource = 'wildcad') AND (CalculatedAcres >= 100)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=cecbqhtvYYh7AzQPPEzZ4NagVVisizSLH2Y39zzv8Gg.

// http://irwinoat.doi.gov/arcgis/rest/services/Irwin/MapServer/0/query?f=geojson
// &where=(GACC = 'GBCC') AND (CreatedOnDateTime > 20160101)
// &returnGeometry=true
// &spatialRel=esriSpatialRelIntersects&outFields=*
// &outSR=102100
// &token=cecbqhtvYYh7AzQPPEzZ4NagVVisizSLH2Y39zzv8Gg.

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

var egpModisFireDetectionCentroidLayer6 = new ol.layer.Vector({
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['6']
  // style: function(feature) {
  //   var classify = parseFloat(feature.get('AgeInHours'));
  //   if (classify < 6)
  //     return egpModisStyles['6'];
  //   else if (classify < 12)
  //     return egpModisStyles['12'];
  //   else if (classify < 24)
  //     return egpModisStyles['24'];
  //   else if (classify < 48)
  //     return egpModisStyles['48'];
  //   else
  //     return egpModisStyles['999'];  
  // }
  // style: new ol.style.Style({ 
  //   image: new ol.style.Circle({
  //     radius: 2,
  //     fill: new ol.style.Fill({
  //       color: 'rgba(168,0,0,1)' 
  //     }),
  //     stroke: new ol.style.Stroke({
  //       color: 'rgba(168,0,0,1)',
  //       width: 1
  //     })
  //   })
  // })
});

var egpModisFireDetectionCentroidLayer12 = new ol.layer.Vector({
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['12']
});

var egpModisFireDetectionCentroidLayer24 = new ol.layer.Vector({
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['24']
});
 
var egpModisFireDetectionCentroidLayer48 = new ol.layer.Vector({
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['48']
});

var egpModisFireDetectionCentroidLayer999 = new ol.layer.Vector({
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  style: egpModisStyles['999']
});

//   // geomac perims service
//   // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/perimService/FeatureServer/2/query?f=json&where=1=1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'

//   // geomac current Fires
//   // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_dyn/MapServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=acres%20DESC&outSR=102100'
      
//   // geomac MODIS Fire Detection 
//   // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_dyn/MapServer/2/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&objectIds=12712164,12712248,12712316,12713066,12713076,12713101,12713114,12713149,12713152,12713166,12713181,12712260,12715488,12715492,12715516,12715811,12715963,12716272,12716280,12716284,12716295,12716306,12716303,12716315,12716341&outFields=*&outSR=102100'
        
//   // geomac current fire perimeters (Polygon)
//   // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_dyn/MapServer/1/query?f=json&where=1=1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//   // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/2/query?f=json&where=1=1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'

//   // egp MODIS fire detection centroid (Point)
//   // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&outFields=*&outSR=102100&token=sGBYcBtDfSmp017pA0VBtz8HfQN3GPKdQMKcmL9ZlMw.'

//   // egp VIIRS centroid
//   // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&objectIds=1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833&outFields=*&outSR=102100&token=sGBYcBtDfSmp017pA0VBtz8HfQN3GPKdQMKcmL9ZlMw.'

//   // egp IgPoint centroid
//   // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&objectIds=8809,8810,8811,8812,8813,8814,8815,8816,8817,8818,8819,8820,8821,8822,8823,8824,8825,8826,8827,8828,8829,8830,8831,8832,8833&outFields=*&outSR=102100&token=sGBYcBtDfSmp017pA0VBtz8HfQN3GPKdQMKcmL9ZlMw.'
//   // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomacMap/MapServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=acres%20DESC&outSR=102100'
//   // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/5/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&objectIds=8808%2C8809%2C8810%2C8811%2C8812%2C8813%2C8814%2C8815%2C8816%2C8817%2C8818%2C8819%2C8820%2C8821%2C8822%2C8823%2C8824%2C8825%2C8826%2C8827%2C8828%2C8829%2C8830%2C8831%2C8832&outFields=*&outSR=102100&token=sGBYcBtDfSmp017pA0VBt_N0_nJOW9xP6MNjZSsGKdU.'
//   // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveIncidents/MapServer/4/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=sGBYcBtDfSmp017pA0VBt-P-FnAlcM1cZN0SBczcVKY.'
// });

var opacity = function(acres) { 
  var fade = (acres < 1000) ? .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) : (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
  return fade;  
}

var rxFiresLayer = new ol.layer.Vector({
  style: function(feature, resolution) {
    var discovery = feature.get('FireDiscoveryDateTime');
    var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
    var marker = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
        }),
        stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
        radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
      })
    });
    return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? marker : fireStyles['Point'];
  }
});

var newFiresLayer = new ol.layer.Vector({
  wrapX: false,
  // style: fireStyles['Point']
  style: function(feature, resolution) {
    var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
    var discovery = feature.get('FireDiscoveryDateTime');
    var marker = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          // color: 'rgba(232,14,14,' + opacity(acres) + ')'

          color: 'rgba(232,14,14,' + opacity(acres) + ')'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), // rgba(254,32,171,1)
        radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
      })
    });
    return (discovery >= (today - 1.5*86400000)) ? marker : fireStyles['Point'];
  }
});

var ongoingFiresLayer = new ol.layer.Vector({
  style: function(feature, resolution) {
    var discovery = feature.get('FireDiscoveryDateTime');
    var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
    var marker = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(254,253,6,' + opacity(acres) + ')'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 3}), // 'rgba(243,206,104,1)'
        radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
      })
    });
    return (discovery > (today - 30*86400000) && discovery < (today - 1.25*86400000)) ? marker : fireStyles['Point'];
  }
});

var geomacPerimsLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.EsriJSON(),
    url: "http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/2/query?f=json&"
        // +"where=perimeterdatetime > timestamp '2016-03-18 05:59:59'" 
        +"returnGeometry=true&spatialRel=esriSpatialRelIntersects"
        + "&outFields=*"
        + "&outSR=102100"
        // + "&token=' + egpToken
  }),
  wrapX: false,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(1,255,67,1)',
      // lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(1,243,255,.7)'
    })
  })
});

var rmgModis12Layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.EsriJSON(),
    url: "http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/3/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
        +"&objectIds=13049880,13049893,13049896,13049898,13049905,13049934,13049936,13049950,13049954,13049960,13049964,13049968,13049975,13050013,13050044,13050063,13050070,13050074,13050068,13050091,13050081,13050097,13050099,13050103,13050106&outFields=*&outSR=102100"
    // url: 'http://rmgsc.cr.usgs.gov/arcgis/rest/services/geomac_fires/FeatureServer/3/query?f=json&where=date_ = '5/26/2016'&returnGeometry=true&spatialRel=esriSpatialRelIntersects&maxAllowableOffset=2445&geometry={"xmin":-11158328.105583707,"ymin":3086346.0717607997,"xmax":-10351129.902201418,"ymax":3893544.2751430906,"spatialReference":{"wkid":102100,"latestWkid":3857}}&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100'
  }),
  wrapX: false,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      lineDash: [4],
      width: 4
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, .2)'
    })
  })
});

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
// var vectorSource = new ol.source.Vector({
//   // url: 'data/topojson/egpGbccLocal.topojson',
//   // url: 'data/topojson/gbccBoundaries.topojson',
//   url: 'firecesium/examples/data/topojson/gbccLocalWebsites.topojson',
//   format: new ol.format.TopoJSON()
//   // url: 'data/geojson/gbccLocalWebsites.geojson',
//   // format: new ol.format.GeoJSON()
// });

var vectorLayer = new ol.layer.Vector({
  // source: vectorSource,
  // source: new ol.source.Vector({
  //   features: (new ol.format.TopoJSON()).readFeatures(gbccBoundaries)
  // }),
  source: new ol.source.Vector({
    // url: 'data/topojson/egpGbccLocal.topojson',
    // url: 'data/topojson/gbccBoundaries.topojson',
    url: 'firecesium/examples/data/topojson/gbccLocalWebsites.topojson',
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

var raster = new ol.layer.Tile({
  // source: new ol.source.MapQuest({layer: 'sat'})
  source: new ol.source.XYZ({
    attributions: 'Tiles © <a href="http://services.arcgisonline.com/ArcGIS/' +
        'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
        'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
  }),
  wrapX: false
});

var mapbox = new ol.layer.Tile({
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="http://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    // tileSize: [512, 512],
    // url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/{z}/{x}/{y}?access_token=' + mapboxToken
    url: 'https://api.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  wrapX: false
});

var mapzen = new ol.layer.Tile({
  source: new ol.source.XYZ({
    attributions: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
                  '© <a href="https://cartodb.com/attributions">CartoDB</a>',
    crossOrigin: 'anonymous',
    url: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
  }),
  wrapX: false
});

var stamen = new ol.layer.Tile({
  source: new ol.source.Stamen({
      layer: 'terrain'
  }),
  wrapX: false,
  // extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
});

var clipStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'black'
  })
});
var clipLayer = new ol.layer.Image({
  source: new ol.source.ImageVector({
    source: new ol.source.Vector({
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

var selectedFireStyles = {
  'rxSelect': [new ol.style.Style({
    image: new ol.style.Circle({
      fill: new ol.style.Fill({
        color: 'rgba(253,2,125,.7)'
      }),
      stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
      radius: function(feature) {
        feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
      } 
    })
  })],
  'newSelect': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 2,
      fill: new ol.style.Fill({
        color: 'rgba(230,77,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(230,77,0,.3)',
        width: 1
      })
    })
  })],
  'ongoingSelect': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 2,
      fill: new ol.style.Fill({
        color: 'rgba(255,85,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,85,0,.3)',
        width: 1
      })
    })
  })],
  '48': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 2,
      fill: new ol.style.Fill({
        color: 'rgba(255,169,0,.3)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,169,0,1)',
        width: 1
      })
    })
  })],
  '999': [new ol.style.Style({ 
    image: new ol.style.Circle({
      radius: 2,
      fill: new ol.style.Fill({
        color: 'rgba(255,255,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255,255,0,.3)',
        width: 1
      })
    })
  })]
};

var ownershipStyles = {
  'USFS': [new ol.style.Style({
    fill: new ol.style.Fill({
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
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(191, 140, 63, 1)',
    //   width: 1
    // })
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
  '': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(140, 149, 141, .5)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(140, 149, 141, 1)',
      width: 1
    })
  })],
  '': [new ol.style.Style({
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
  source: new ol.source.Vector({
    url: 'firecesium/examples/data/topojson/ownership/blm.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: true,
  style: ownershipStyles['BLM']
});

var sagegrouseStyles = {
  'PGH': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(212, 82, 255, .8)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(212, 82, 255, .8)',
    //   width: 0
    // })
  })],
  'PPH': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(127, 0, 127, .8)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(127, 0, 127, .8)',
    //   width: 0
    // })
  })],
  'POH': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(12, 60, 138, .8)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(12, 60, 138, .8)',
    //   width: 0
    // })
  })],
  'PUH': [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(176, 205, 225, .8)'
    })
    // ,
    // stroke: new ol.style.Stroke({
    //   color: 'rgba(176, 205, 225, .2)',
    //   width: 0
    // })
  })]
};

var sagegrouse = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'firecesium/examples/data/topojson/sagegrouse.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: true,
  style: function(feature, resolution) {
    var feature = feature.get('Habitat_Ty');
    var style = sagegrouseStyles[feature];
    return style;
  }
});

