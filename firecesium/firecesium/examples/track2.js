var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';
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

var style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.1)'
  }),
  stroke: new ol.style.Stroke({
    color: '#333',
    // color: '#319FD3',
    width: 2
  }),
  text: new ol.style.Text({
    font: '16px Montserrat, sans-serif',
    fill: new ol.style.Fill({
      color: '#000'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(255, 255, 150, 1)',
      width: 7
    })
  })
});

var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'data/topojson/gbccLocalWebsites.topojson',
    format: new ol.format.TopoJSON()
    // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
  }),
  wrapX: false,
  minResolution: 0,
  maxResolution: 5000,
  visible: true,
  style: function(feature, resolution) {
    style.getText().setText(resolution < 5000 ? feature.get('UnitID').match(/.....$/gi)[0] : '');
    return style;
  }
});

// !function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return y.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function i(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader;return e.readAsArrayBuffer(t),i(e)}function h(t){var e=new FileReader;return e.readAsText(t),i(e)}function u(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(y.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(y.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=s(this);return t?t:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var r=e.body;if(d.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",(e.headers||!this.headers)&&(this.headers=new n(e.headers)),this.method=f(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function c(t){var e=new n,r=(t.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(t){var r=t.trim().split(":"),o=r.shift().trim(),n=r.join(":").trim();e.append(o,n)}),e}function l(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof n?e.headers:new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var y={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];n||(n=[],this.map[t]=n),n.push(o)},n.prototype["delete"]=function(t){delete this.map[e(t)]},n.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},n.prototype.getAll=function(t){return this.map[e(t)]||[]},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=[r(o)]},n.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},y.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this)},u.call(d.prototype),u.call(l.prototype),l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},l.error=function(){var t=new l(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];l.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new l(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=d,t.Response=l,t.fetch=function(t,e){return new Promise(function(r,o){function n(){return"responseURL"in i?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):void 0}var s;s=d.prototype.isPrototypeOf(t)&&!e?t:new d(t,e);var i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:c(i),url:n()},e="response"in i?i.response:i.responseText;r(new l(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(s.method,s.url,!0),"include"===s.credentials&&(i.withCredentials=!0),"responseType"in i&&y.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);

// LineString to store the different geolocation positions. This LineString
// is time aware.
// The Z dimension is actually used to store the rotation (heading).
var positions = new ol.geom.LineString([],
    /** @type {ol.geom.GeometryLayout} */ ('XYZM'));

// create a style to display our position history (track)
var trackStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'rgba(0,0,255,1.0)',
    width: 3,
    lineCap: 'round'
  })
});
// use a single feature with a linestring geometry to display our track
var trackFeature = new ol.Feature({
  geometry: new ol.geom.LineString([])
});
// we'll need a vector layer to render it
var trackLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [trackFeature]
  }),
  style: trackStyle
});

var mlabKey = 'PJfhY3w2U58ZczDkxR-dsqlo_9THZblN';

// var options = {
//   method: String,
//   headers: Object, // automatically default to either 'application/x-www-form-urlencoded' or 'multipart/form-data')
//   mode: String,
//   cache: String
// };

var controls = [
  // new ol.control.Attribution(
  //   // {label: infoLabel}
  // ),
  // new ol.control.MousePosition({
  //   undefinedHTML: 'outside',
  //   projection: 'EPSG:4326',
  //   coordinateFormat: function(coordinate) {
  //     return ol.coordinate.format( coordinate, '{y}, {x}', 4);
  //   }
  // }),
  // new ol.control.OverviewMap({
  //   collapsed: true
  // }),
  new ol.control.Rotate({
    autohide: false
  }),
  new ol.control.ScaleLine({
    // units: 'degrees'
  }),
  // new ol.control.Zoom(
  //   // {target: 'toolbar'}
  // ),
  // new ol.control.ZoomSlider(),
  // new ol.control.ZoomToExtent(),
  new ol.control.FullScreen()
];

// creating the view
var overallView = new ol.View({
  // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
  center: [-12753260.184760537, 4948659.629345282],
  zoom: 6.7,
  minZoom: 1,
  maxZoom: 19,
  extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
});

// creating the map
var map = new ol.Map({
  layers: [
    mapbox,
    vectorLayer,
    trackLayer
  ],
  target: 'map',
  controls: controls,
  //controls: ol.control.defaults({
  //  attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
  //    collapsible: false
  //  })
  //}),
  view: overallView
});

function displayData(theLayer) {
  var allFeatures = theLayer.getSource().getFeatures();
  var format = new ol.format.GeoJSON();
  var data = format.writeFeatures(allFeatures, {featureProjection: 'EPSG:3857'});
  document.getElementById('data').value = data;
}
// TODO: add dropdown to select the layer/data source for the upload button
function saveData() {
  var allFeatures = trackLayer.getSource().getFeatures();
  var format = new ol.format.GeoJSON();
  // var gpx = new ol.format.GPX().writeFeatures(allFeatures, {featureProjection: 'EPSG:3857'});
  var data = format.writeFeatures(allFeatures, {featureProjection: 'EPSG:3857'});
  
  // fetch.js polyfill will not work in mobile safari or BB10, use promises+ajax instead
  // Create an empty Headers instance
  // var headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // fetch('https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?&apiKey=' + mlabKey, {method: 'POST', headers, body: data})
  //   .then(
  //     function (response) {
  //       if (response.status !== 200) {
  //         console.log('damnit. Status Code: ' + response.status);
  //         return;
  //       }
  //       // Examine the text in the response
  //       response.json().then(function (data) {
  //         console.log(data);
  //       }); 
  //     }
  //   )
  //   .catch(function (err) {
  //     console.log('Fetch Error : ', err)
  //   });

  ajax({
    method: 'POST',
    url: 'https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?&apiKey=' + mlabKey,
    params: data,
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error('damnit.', error.statusText);
  });      
}

var uploadFeatures = document.getElementById('upload');
uploadFeatures.addEventListener('click', function() {
  saveData();
});

// Geolocation marker
var markerEl = document.getElementById('geolocation_marker');
var marker = new ol.Overlay({
  positioning: 'center-center',
  element: markerEl,
  stopEvent: false
});
map.addOverlay(marker);


// Geolocation Control
var geolocation = new ol.Geolocation(/** @type {olx.GeolocationOptions} */ ({
  projection: overallView.getProjection(),
  trackingOptions: {
    maximumAge: 10000,
    enableHighAccuracy: true,
    timeout: 600000
  }
}));

var deltaMean = 500; // the geolocation sampling period mean in ms

////////////////////////////////
// Listen to position changes (the original working method, changes were made below, need to research the difference between change:position and on 'change')
// geolocation.on('change', function() {
//   var position = geolocation.getPosition();
//   var accuracy = geolocation.getAccuracy();
//   var heading = geolocation.getHeading() || 0;
//   var speed = geolocation.getSpeed() || 0;
//   var m = Date.now();

//   addPosition(position, heading, m, speed);

//   var coords = positions.getCoordinates();
//   var len = coords.length;
//   if (len >= 2) {
//     deltaMean = (coords[len - 1][3] - coords[0][3]) / (len - 1);
//   }

//   var html = [
//     'Position: ' + position[0].toFixed(2) + ', ' + position[1].toFixed(2),
//     'Accuracy: ' + accuracy,
//     'Heading: ' + Math.round(radToDeg(heading)) + '&deg;',
//     'Speed: ' + (speed * 3.6).toFixed(1) + ' km/h',
//     'Delta: ' + Math.round(deltaMean) + 'ms'
//   ].join('<br />');
//   document.getElementById('info').innerHTML = html;
//   // trackFeature.getGeometry().appendCoordinate(position);
//   // displayData(trackLayer);
// });

// geolocation.on('change:position', function() {
//   var position = geolocation.getPosition();
//   trackFeature.getGeometry().appendCoordinate(position);
//   displayData(trackLayer);
// });
//////////////////////////////////
// Listen to position changes
geolocation.on('change:position', function() {
  var position = geolocation.getPosition();
  var accuracy = geolocation.getAccuracy();
  var heading = geolocation.getHeading() || 0;
  var speed = geolocation.getSpeed() || 0;
  var m = Date.now();

  addPosition(position, heading, m, speed);

  var coords = positions.getCoordinates();
  var len = coords.length;
  if (len >= 2) {
    deltaMean = (coords[len - 1][3] - coords[0][3]) / (len - 1);
  }

  var html = [
    'Position: ' + position[0].toFixed(2) + ', ' + position[1].toFixed(2),
    'Accuracy: ' + accuracy,
    'Heading: ' + Math.round(radToDeg(heading)) + '&deg;',
    'Speed: ' + (speed * 3.6).toFixed(1) + ' km/h',
    'Delta: ' + Math.round(deltaMean) + 'ms'
  ].join('<br />');
  document.getElementById('info').innerHTML = html;
  trackFeature.getGeometry().appendCoordinate(position);
  displayData(trackLayer);
});

// geolocation.on('change:position', function() {
//   var position = geolocation.getPosition();
//   trackFeature.getGeometry().appendCoordinate(position);
//   displayData(trackLayer);
// });

geolocation.on('error', function() {
  alert('geolocation error');
  // FIXME we should remove the coordinates in positions
});

// convert radians to degrees
function radToDeg(rad) {
  return rad * 360 / (Math.PI * 2);
}
// convert degrees to radians
function degToRad(deg) {
  return deg * Math.PI * 2 / 360;
}
// modulo for negative values
function mod(n) {
  return ((n % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
}

function addPosition(position, heading, m, speed) {
  var x = position[0];
  var y = position[1];
  var fCoords = positions.getCoordinates();
  var previous = fCoords[fCoords.length - 1];
  var prevHeading = previous && previous[2];
  if (prevHeading) {
    var headingDiff = heading - mod(prevHeading);

    // force the rotation change to be less than 180°
    if (Math.abs(headingDiff) > Math.PI) {
      var sign = (headingDiff >= 0) ? 1 : -1;
      headingDiff = -sign * (2 * Math.PI - Math.abs(headingDiff));
    }
    heading = prevHeading + headingDiff;
  }
  positions.appendCoordinate([x, y, heading, m]);

  // only keep the 20 last coordinates
  positions.setCoordinates(positions.getCoordinates().slice(-20));

  // FIXME use speed instead
  if (heading && speed) {
    markerEl.src = 'data/geolocation_marker_heading.png';
  } else {
    markerEl.src = 'data/geolocation_marker.png';
  }
}

var previousM = 0;
// change center and rotation before render
map.beforeRender(function(map, frameState) {
  if (frameState !== null) {
    // use sampling period to get a smooth transition
    var m = frameState.time - deltaMean * 1.5;
    m = Math.max(m, previousM);
    previousM = m;
    // interpolate position along positions LineString
    var c = positions.getCoordinateAtM(m, true);
    var view = frameState.viewState;
    if (c) {
      view.center = getCenterWithHeading(c, -c[2], view.resolution);
      view.rotation = -c[2];
      marker.setPosition(c);
    }
  }
  return true; // Force animation to continue
});

// recenters the view by putting the given coordinates at 3/4 from the top or
// the screen
function getCenterWithHeading(position, rotation, resolution) {
  var size = map.getSize();
  var height = size[1];

  return [
    position[0] - Math.sin(rotation) * height * resolution * 1 / 4,
    position[1] + Math.cos(rotation) * height * resolution * 1 / 4
  ];
}

// postcompose callback
function render() {
  map.render();
}


// geolocate device
var geolocateBtn = document.getElementById('geolocate');
geolocateBtn.addEventListener('click', function() {
  geolocation.setTracking(true); // Start position tracking

  map.on('postcompose', render);
  map.render();

  disableButtons();
}, false);

var OFF = document.getElementById('off');
OFF.addEventListener('click', function() {
  geolocation.setTracking(false); // Stop

  map.on('postcompose', render);
  map.render();
}, false);

// simulate device move
var simulationData;
var client = new XMLHttpRequest();
client.open('GET', 'data/geolocation-orientation.json');


/**
 * Handle data loading.
 */
client.onload = function() {
  simulationData = JSON.parse(client.responseText).data;
};
client.send();

var simulateBtn = document.getElementById('simulate');
simulateBtn.addEventListener('click', function() {
  var coordinates = simulationData;

  var first = coordinates.shift();
  simulatePositionChange(first);

  var prevDate = first.timestamp;
  function geolocate() {
    var position = coordinates.shift();
    if (!position) {
      return;
    }
    var newDate = position.timestamp;
    simulatePositionChange(position);
    window.setTimeout(function() {
      prevDate = newDate;
      geolocate();
    }, (newDate - prevDate) / 0.5);
  }
  geolocate();

  map.on('postcompose', render);
  map.render();

  disableButtons();
}, false);

function simulatePositionChange(position) {
  var coords = position.coords;
  geolocation.set('accuracy', coords.accuracy);
  geolocation.set('heading', degToRad(coords.heading));
  var position_ = [coords.longitude, coords.latitude];
  var projectedPosition = ol.proj.transform(position_, 'EPSG:4326',
      'EPSG:3857');
  geolocation.set('position', projectedPosition);
  geolocation.set('speed', coords.speed);
  geolocation.changed();
}

function disableButtons() {
  geolocateBtn.disabled = 'disabled';
  simulateBtn.disabled = 'disabled';
}
