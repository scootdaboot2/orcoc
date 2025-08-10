
    
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

var options = {
  method: String,
  headers: Object, // automatically default to either 'application/x-www-form-urlencoded' or 'multipart/form-data')
  mode: String,
  cache: String
};

// var dispatches;

// fetch('https://api.mlab.com/api/1/databases/fuelzonemaps/collections/zones?f={"features.properties.IFCNAME": 1}&apiKey=' + mlabKey, {mode: 'cors'})
// .then(
//   function (response) {
//     if (response.status !== 200) {
//       console.log('damnit. Status Code: ' + response.status);
//       return;
//     }
//     // Examine the text in the response
//     response.json().then(function (data) {
//       DATA = data;
//       console.log(DATA);
//     }); 
//   }
// )
// .catch(function (err) {
//   console.log('Fetch Error : ', err)
// });

var fetchResult;
fetch('https://api.mlab.com/api/1/databases/fuelzonemaps/collections/zones?f={"features.properties.IFCNAME": 1}&apiKey=' + mlabKey, {mode: 'cors'})
  .then(function (response) {
    return response.text();
  })
  .then(function(text) {
    fetchResult = text;
    data.innerHTML = fetchResult;
  })
  .catch(function (error) {
    console.log('damnit.', error)
  });

var overallView = new ol.View({
  // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
  center: [-12753260.184760537, 4948659.629345282],
  zoom: 5,
  minZoom: 1,
  maxZoom: 19,
  // extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
});


var dispatchBoundaries = new ol.layer.Vector({
  // source: new ol.source.Vector({
  //   features: (new ol.format.TopoJSON()).readFeatures(gbccBoundaries)
  // }),
  source: new ol.source.Vector({
    // url: 'data/topojson/egpGbccLocal.topojson',
    url: 'data/topojson/gbccBoundaries.topojson',
    // url: 'data/topojson/gbccLocalWebsites.topojson',
    format: new ol.format.TopoJSON()
    // url: 'data/geojson/gbccLocalWebsites.geojson',
    // format: new ol.format.GeoJSON()
    }),
  wrapX: false,
  // minResolution: 0,
  // maxResolution: 5000,
  visible: true,
  style: new ol.style.Style({
    // fill: new ol.style.Fill({
    //   color: 'rgba(255, 255, 255, 0.1)'
    // }),
    stroke: new ol.style.Stroke({
      // color: 'rgba(128, 128, 0, 1)',
      color: '#683A5E',
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
  })
});

// // create a vector layer used for editing
// var source = new ol.source.Vector();

// var vector = new ol.layer.Vector({
//   source: source,
//   style: new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: 'rgba(255, 255, 255, 0.2)'
//     }),
//     stroke: new ol.style.Stroke({
//       color: '#ffcc33',
//       width: 2
//     }),
//     image: new ol.style.Circle({
//       radius: 7,
//       fill: new ol.style.Fill({
//         color: '#ffcc33'
//       })
//     })
//   })
// });


var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    dispatchBoundaries,
    // vector,
    trackLayer
  ],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  view: overallView
});

// // make draw global so it can later be removed
// var draw;

// // creat a select to choose geometry type
// var typeSelect = document.getElementById('type');
// // rebuild interaction when changed
// typeSelect.onchange = function(e) {
//   map.removeInteraction(draw);
//   addInteraction();
// };

// // create a select to choose a data type to save in
// dataTypeSelect = document.getElementById('data_type');
// // clear map and rebuild interaction when changed
// dataTypeSelect.onchange = function(e) {
//   clearMap();
//   map.removeInteraction(draw);
//   addInteraction();
// };
// add draw interaction
// function addInteraction() {
//   var geom_type = typeSelect.value;
//   if (geom_type !== 'None') {
//     draw = new ol.interaction.Draw({
//       source: source,
//       type: /** @type {ol.geom.GeometryType} */ (geom_type)
//     });
//     map.addInteraction(draw);
//     var drawnFeatures = [];
//     draw.on('drawend', function(event) {
//       drawnFeatures.push(event.feature);
//     })
//     // draw.on('drawend', function(evt) {
//     //   saveData();
//     // });
//     source.on('addfeature', function (event) {
//       var index = drawnFeatures.indexOf(event.feature);
//       if (index > -1) {
//         // feature added to source from drawinteraction
//         // do whatever
//         drawnFeatures.splice(index, 1);
//         displayData(vector);
//       }
//     });
//   }
// }

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
  var data = format.writeFeatures(allFeatures, {featureProjection: 'EPSG:3857'});

  // Create an empty Headers instance
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  fetch('https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?&apiKey=' + mlabKey, {method: 'POST', headers, body: data})
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('damnit. Status Code: ' + response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
        }); 
      }
    )
    .catch(function (err) {
      console.log('Fetch Error : ', err)
    });      
}
// function saveData(theLayer) {
//   var allFeatures = theLayer.getSource().getFeatures();
//   var format = new ol.format.GeoJSON();
//   var data = format.writeFeatures(allFeatures, {featureProjection: 'EPSG:3857'});

//   // Create an empty Headers instance
//   var headers = new Headers();
//   headers.append('Content-Type', 'application/json');

//   fetch('https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?&apiKey=' + mlabKey, {method: 'POST', headers, body: data})
//     .then(
//       function (response) {
//         if (response.status !== 200) {
//           console.log('damnit. Status Code: ' + response.status);
//           return;
//         }
//         // Examine the text in the response
//         response.json().then(function (data) {
//           console.log(data);
//         }); 
//       }
//     )
//     .catch(function (err) {
//       console.log('Fetch Error : ', err)
//     });      
// }
// add the interaction when the page is first shown
// addInteraction();

// clears the map and the output of the data
// function clearMap() {
//   vector.getSource().clear();
//   document.getElementById('data').value = '';
// }
// // clear map when user clicks on 'Delete all features'
// var deleteFeatures = document.getElementById('delete');
// deleteFeatures.addEventListener('click', function() {
//   clearMap();
// });

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

// Listen to position changes
geolocation.on('change', function() {
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


