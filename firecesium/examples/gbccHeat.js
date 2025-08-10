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
    }
    var params = options.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
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
dateField.className = 'display-overlay1 ol-unselectable ol-control';
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



var IRWIN = {
  method: 'POST',
  url: 'https://irwin.doi.gov/arcgis/tokens/generateTokenX',
  params: {
    f: 'json',
    username: 'gbccfiredata',
    password: 'KFyHQ2RAdxWa',
    client: 'referer',
    referer: 'https://gacc.nifc.gov/gbcc/',
    expiration: '1440'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}


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
  // url: 'data/topojson/gaccs4326.topojson.json',
  format: new ol.format.TopoJSON()
  // url: 'data/geojson/gbccLocalWebsites.geojson',
  // format: new ol.format.GeoJSON()
});

var vectorLayer = new ol.layer.Vector({
  title: 'Local Dispatch Boundaries',
  source: vectorSource,
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
    attributions: 'Â© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  'Â© <a href="https://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    url: 'https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  wrapX: false
});
var getWeight = function(feature) {
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
  return (acres < 1000) ? 1 - .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) + .1 : 1 - (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
};

var heatLayer = new ol.layer.Heatmap({
  source: new ol.source.Vector({
    wrapX: false,
  }),
  weight: getWeight,
  radius: 10
});
var layers = [
  // new ol.layer.Tile({
  //   source: new ol.source.OSM({
  //     // attributions: [
  //     //   'All maps Â© <a href="http://www.opencyclemap.org/">OpenCycleMap</a>',
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
    }
  });
// var addLater = function(feature, timeout) {
//   window.setTimeout(function() {
//     heatLayer.getSource().addFeature(feature);
//   }, timeout);
// };


playButton.addEventListener('click', function() {
  playButton.innerHTML = 'Loading'
  heatUrl = "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
    // +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IsValid = 'true')"
    +"&where=(GACC = 'GBCC') AND (IsValid = 'true') AND (IncidentTypeCategory <> 'RX') AND (IncidentTypeCategory <> 'FA')"
    +" AND (CreatedOnDateTime > " + simStart + ") AND (CreatedOnDateTime < " + simEnd + ")"
    +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=";
  var heatConfig = {
    method: 'GET',
    url: heatUrl,
    params: {
      f: 'json',
      // username: 'gbccfiredata',
      // password: 'KFyHQ2RAdxWa',
      client: 'referer',
      referer: 'https://gacc.nifc.gov/gbcc/',
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
      var ilen = JSON.parse(response).features.length
      console.log("Total number of incidents received from IRWIN is: " + ilen)
      if (ilen === 1000) {
        console.log("Since the number of incidents is 1000, this means IRWIN is currently throttling data, even though the max limit of features is supposedly 10k")
        console.log("perhaps this ought to be raised to Ryan Perkl")
      }
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
      var sorted = mapped.sort(function(a, b) {
        if (a['CreatedOnDateTime'] > b['CreatedOnDateTime']) {
          return 1;
        }
        if (a['CreatedOnDateTime'] < b['CreatedOnDateTime']) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      
      var result = sorted.map(function(current) {
        return heatFeatures[current.index];
      });
      var Controlled = result.filter(curr => curr.get('ControlDateTime'));
      var Out = result.filter(curr => curr.get('FireOutDateTime'));
      const Final = result.filter(curr => curr.get('FinalAcres'));
      const controlled = new Set(Controlled);
      const out = new Set(Out);
      const intersection = new Set([...controlled].filter(x => out.has(x)));
      var interSize = intersection.size;
      var outSize = out.size;

      let final = new Set(Final);
      
      let acresSize = new Set([...final].filter(x => !intersection.has(x))).size;

      console.log("Number of fires with final acres:" + Final.length);
      console.log("Number of fires with a control date: " + controlled.size);
      console.log("Number of fires with an out date: " + outSize);
      console.log("Number of fires with out date and control date: " + interSize);
      console.log("The number of fires with FinalAcres but no out or control date is: " + acresSize);
      (out.length !== intersection.size)
        ? console.log(`There are ${(out.size - intersection.size)} fires that have an 'out' date without a 'control' date`)
        : console.log('All fires that have an "out" date have a "controlled" date');

      // console.log(result.map(function(curr) {
      //   return new Date(curr.get('CreatedOnDateTime')).toUTCString()
      // }))
      // var waitToRemove = result.filter(function(curr) {
      //   return curr.get('FireOutDateTime');
      // });
  
      // var mapped2 = waitToRemove.map(function(el, n) {
      //   return {index: n, FireOutDateTime: el.get('FireOutDateTime')};
      // });

      // mapped2.sort(function(a, b) {
      //   if (a['FireOutDateTime'] > b['FireOutDateTime']) {
      //     return 1;
      //   }
      //   if (a['FireOutDateTime'] < b['FireOutDateTime']) {
      //     return  -1;
      //   }
      //   return 0;
      // });

      // result2 = mapped2.map(function(current) {
      //   return waitToRemove[current.index];
      // });
      var day = 1000*60*60*24;
      var days = (simEnd - simStart)/day;
      console.log("The number of days this overview should cover: " + days);


      var totalFires = 0;
      var firesOut = 0;
      var activeFires = 0;

      var start = simStart;
      
      function addLater() {
        var toAdd = result.filter(function(feature) {
          return feature.get('CreatedOnDateTime') <= start + day;
        })
        totalFires += toAdd.length;
        toAdd.map(function(feature) {
          heatLayer.getSource().addFeature(feature);
        });
        var toRemove = heatLayer.getSource().getFeatures().filter(function(feature) {
          return (feature.get('FireOutDateTime') != null) && (feature.get('FireOutDateTime') <= start + day);
        });
        // var toRemove = heatLayer.getSource().getFeatures().filter(function(feature) {
        //   return (feature.get('ControlDateTime') != null) && (feature.get('ControlDateTime') <= start + day);
        // });
        firesOut += toRemove.length;
        toRemove.map(function(feature) {
          heatLayer.getSource().removeFeature(feature);
        });
        activeFires = totalFires - firesOut;
        result = result.filter(function(feature) {
          return feature.get('CreatedOnDateTime') > start + day;
        })
        var currDate = (new Date(start).getMonth() + 1) + '/' + new Date(start).getDate() + '/' + new Date(start).getFullYear();
        dateField.innerHTML = currDate;
        console.log(currDate)
        start += day;
        console.log("Total Fires So Far: " + totalFires);
        console.log("Total Fires Out So Far: " + firesOut);
        console.log("Number of Active Fires: " + activeFires);
      };
      // var featuresAdded = 0;
      // var featuresRemoved = 0;
      // function addLater(feature) {
      //   heatLayer.getSource().addFeature(feature);
      //   featuresAdded += 1;
      //   console.log("Total Features Added So Far: " + featuresAdded);
      //   var toRemove =  heatLayer.getSource().getFeatures().filter(function(curr) {
      //     return (curr.get('FireOutDateTime') != null) && (curr.get('FireOutDateTime') <= feature.get('CreatedOnDateTime'));
      //   })

      //  toRemove.map(function(current) {
      //     return heatLayer.getSource().removeFeature(current);
      //   });
      //   featuresRemoved += toRemove.length;
      //   console.log("Total Features Removed So Far: " + featuresRemoved);
      //   console.log("Number of Features Remaining: " + (featuresAdded - featuresRemoved));
      //   dateField.innerHTML = feature.get('CreatedOnDateTime') ? (new Date(parseInt(feature.get('CreatedOnDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('CreatedOnDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('CreatedOnDateTime'))).getFullYear() : 'unknown';
      // };
      // function addLater(feature, timeout) {
      //   window.setTimeout(function() {
      //     heatLayer.getSource().addFeature(feature);
      //     heatLayer.getSource().getFeatures().filter(function(curr) {
      //       return (curr.get('FireOutDateTime') != null) && (curr.get('FireOutDateTime') <= feature.get('CreatedOnDateTime'));
      //     }).map(function(current) {
      //       // coolOff(current);
      //       return heatLayer.getSource().removeFeature(current);
      //     });
      //     dateField.innerHTML = feature.get('CreatedOnDateTime') ? (new Date(parseInt(feature.get('CreatedOnDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('CreatedOnDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('CreatedOnDateTime'))).getFullYear() : 'unknown';
      //   }, timeout);
      // };
      // dates.map(function(current_value, index) {
      //   heatFeatures.filter(function(cv, ii) {
      //     var cutoff = (cv.get('FireDiscoveryDateTime') ? cv.get('FireDiscoveryDateTime') : cv.get('CreatedOnDateTime'));
      //     return index > 0 ? (cutoff <= current_value && cutoff > dates[index - 1]) : cutoff <= current_value;
      //   }).map(function(cc, jj) {
      //     window.setTimeout(function() {
      //       dateField.innerHTML = (new Date(current_value).getMonth() + 1) + '/' + (new Date(current_value).getDate()) + '/' + (new Date(current_value).getFullYear())
      //       heatLayer.getSource().addFeature(cc);
      //       cc.setStyle(heatStyleFunction(cc));

      //       // heatFeatures.indexOf(cc) > -1 ? heatFeatures.splice(heatFeatures.indexOf(cc)) : '';
      //       // console.log(heatFeatures.length);
      //       // heatLayer.getSource().getFeatures().filter(function(curr) {
      //       //   return (curr.get('FireOutDateTime') != null) && (curr.get('FireOutDateTime') <= feature.get('CreatedOnDateTime'));
      //       // }).map(function(current) {
      //       //   return heatLayer.getSource().removeFeature(current);
      //       // });
      //     }, index*2000)
      //   })
      // })
      // var mapped = heatFeatures.map(function(current, j) {
      //   return {index: j, CreatedOnDateTime: current.getProperties()["CreatedOnDateTime"]}
      // });
      // mapped.sort(function(a, b) {
      //   if (a['CreatedOnDateTime'] > b['CreatedOnDateTime']) {
      //     return 1;
      //   }
      //   if (a['CreatedOnDateTime'] < b['CreatedOnDateTime']) {
      //     return -1;
      //   }
      //   // a must be equal to b
      //   return 0;
      // })
      
      // var result = mapped.map(function(current){
      //   return heatFeatures[current.index];
      // });

      // for (var i = 0; i < result.length; i++) {
      //   setTimeout(addLater(result[i]), 5000)
      //   // addLater(result[i], i*50);
      // }

      function loopWithTimer(callback, time, iteration, currentIteration) {
        if (typeof currentIteration === 'undefined' || isNaN(currentIteration)) currentIteration = 0;
        if (iteration) {
          setTimeout(function() {
            callback.call(this, currentIteration);
            loopWithTimer(callback, time, iteration - 1, currentIteration + 1);
          }, time);
        }
      }
      loopWithTimer(function(i) {
        playButton.innerHTML = (i === (days - 1))
        ? 'Play'
        : 'Playing'
        // console.log(i)
        addLater();
      }, 1000, days, 0);
      // loopWithTimer(function(i) {
      //   console.log(i)
      //   addLater(result[i]);
      // }, 1000, days, 0);
      // for (var i = 0; i < result.length; i++) {
      //   window.setTimeout(addLater(result[i]), 5000);
      // }

    });
  }
  heatLayer.getSource().clear();
  getToken(IRWIN, heatConfig, heatUrl).then(getHeatSource, noToken);
}, false);