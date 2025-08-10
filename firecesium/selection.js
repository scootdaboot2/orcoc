var map;
var ol3d;
var map3d = document.getElementById('map3d');
var info = document.getElementById('info');
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var uniqueFireIdentifier = document.getElementById('uniqueFireIdentifier');
var incidentName = document.getElementById('incidentName');
var fireDiscoveryDateTime = document.getElementById('fireDiscoveryDateTime');
var dailyAcres = document.getElementById('dailyAcres');
var strategy = document.getElementById('strategy');
var dispatchCenterID = document.getElementById('dispatchCenterID');
var fireCause = document.getElementById('fireCause');
var fuelType = document.getElementById('fuelType');
var incidentCommanderName = document.getElementById('incidentCommanderName');
var latLong = document.getElementById('latLong');
var ownership = document.getElementById('ownership');
var predictiveServiceAreaID = document.getElementById('predictiveServiceAreaID');
var sagegrouseOrigin = document.getElementById('sagegrouseOrigin');
var closer = document.getElementById('popup-closer');
var toggle = document.getElementById('toggle');
var swipe = document.getElementById('swipe');
var slide = document.getElementById('slide');

// function view3d() {
//   if (map3d.className == 'dontsee'){
//     ol3d.setEnabled(!ol3d.getEnabled()); 
//     map3d.className = 'see'
//   }
//   else {
//     ol3d.setEnabled(!ol3d.getEnabled());
//     map3d.className = 'dontsee'
//   }
// }

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
  var terrainProvider = new Cesium.CesiumTerrainProvider({
      url : '//assets.agi.com/stk-terrain/world',
      equestWaterMask: false,
      requestVertexNormals: true
  });
  scene.terrainProvider = terrainProvider;
  scene.globe.enableLighting = true;
  var camera = ol3d.getCamera();
  camera.setTilt(Math.PI / 3);
}

toggle.addEventListener('click', function() {
  if (map3d.className == 'dontsee') {
    map.removeLayer(sagegrouse);
    // sagegrouse.setSource(null);
    swipe.style.display = 'none';
    slide.style.display = 'none';
    // ol3d.setEnabled(!ol3d.getEnabled()); 
    toggle3D();
    map3d.className = 'see';
  }
  else {
    toggle3D();
    // ol3d.setEnabled(!ol3d.getEnabled());
    map3d.className = 'dontsee';
    // sagegrouse.setSource(
    //   new ol.source.Vector({
    //     url: 'firecesium/examples/data/topojson/sagegrouse.topojson',
    //     format: new ol.format.TopoJSON()
    //     // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
    //     // format: new ol.format.GeoJSON()
    //   })
    // );
    map.getLayers().setAt(2, sagegrouse);
    map.setView(new ol.View({
        // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
        center: [-12753260.184760537, 4948659.629345282],
        zoom: 5.55,
        // minZoom: 5,
        // maxZoom: 9.8,
        extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
      })
    );
    swipe.style.display = '';
    slide.style.display = '';
  }
});

// var infoLabel = document.createElement('span');
//     infoLabel.className = 'info-label';
//     infoLabel.textContent = 'i';

// var overlay = new ol.Overlay( /* @type {olx.OverlayOptions} */ 
// {
//   element: container,
//   autoPan: true,
//   autoPanAnimation: {
//     duration: 250
//   }
// });

closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
}

var bigScreen = new ol.control.FullScreen();
var controls = [
  new ol.control.Attribution(
    // {label: infoLabel}
  ),
  new ol.control.MousePosition({
    undefinedHTML: 'outside',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate) {
      return ol.coordinate.format( coordinate, '{y}, {x}', 4);
    }
  }),
  // new ol.control.OverviewMap({
  //   collapsed: true
  // }),
  new ol.control.Rotate({
    autohide: false
  }),
  new ol.control.ScaleLine({
    // units: 'degrees'
  }),
  new ol.control.Zoom(
    // {target: 'toolbar'}
  ),
  new ol.control.ZoomSlider(),
  // new ol.control.ZoomToExtent(),
  bigScreen
];

var layers = [
  // new ol.layer.Tile({
  //   source: new ol.source.OSM(),
  //    wrapX: false
  // }),
  stamen,
  // mapbox, 
  // raster,
  // ownership,
  sagegrouse,
  vectorLayer,
  rxFiresLayer,
  ongoingFiresLayer,
  newFiresLayer,
  geomacPerimsLayer,
  // clipLayer,
  // rmgModis12Layer,
  egpModisFireDetectionCentroidLayer999,
  egpModisFireDetectionCentroidLayer48,
  egpModisFireDetectionCentroidLayer24,
  egpModisFireDetectionCentroidLayer12,
  egpModisFireDetectionCentroidLayer6
]

var overallView = new ol.View({
  // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
  center: [-12753260.184760537, 4948659.629345282],
  zoom: 5.55,
  // minZoom: 1,
  // maxZoom: 15,
  // extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
});

map = new ol.Map({
  layers: layers,
  // interactions: ol.interaction.defaults().extend([selectHover, selectClick]),
  controls: controls,
  // overlays: [overlay],
  target: 'map2d',
  view: overallView, 
  logo: ({
    href: 'http://gacc.nifc.gov/gbcc/',
    src: 'firecesium/examples/data/GBCC_1b.png' 
  })
  // renderer: 'canvas',
    // view: new ol.View({
    //   // projection: 'EPSG:4326',
    //   center: [-12753260.184760537, 4948659.629345282],
    //   // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326', 'EPSG:3857'),
    //   zoom: 5.0,
    //   // minZoom: 0,
    //   // maxZoom: 8,
    //   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
    // })
});

sagegrouse.on('precompose', function(e) {
  var ctx = e.context;
  var width = ctx.canvas.width * (swipe.value / 100);

  ctx.save();
  ctx.beginPath();
  ctx.rect(width, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.clip();
});

sagegrouse.on('postcompose', function(e) {
  var ctx = e.context;
  ctx.restore();
});

// map.addLayer(sagegrouse);

swipe.addEventListener('input', function() {
  map.render();
}, false);


// ol3d = new olcs.OLCesium({
//   map: map,
//   target: 'map3d'
//   // ,
//   // createSynchronizers: new olcs.VectorSynchronizer({
//   //   map: map,
//   //   scene,
//   //   opt_converter
//   // })
// });
// var scene = ol3d.getCesiumScene();
// var terrainProvider = new Cesium.CesiumTerrainProvider({
//     url: '//assets.agi.com/stk-terrain/world',
//     requestWaterMask: false,
//     requestVertexNormals: true
// });
// scene.terrainProvider = terrainProvider;
// scene.globe.enableLighting = true;

// var camera = ol3d.getCamera();
// camera.setTilt(Math.PI / 3);

// // ol3d.setEnabled(true);
// // ol3d.enableAutoRenderLoop();

// mapbox.set('altitudeMode', 'clampToGround');
// vectorLayer.set('altitudeMode', 'clampToGround');
// ongoingFiresLayer.set('altitudeMode', 'clampToGround');
// geomacPerimsLayer.set('altitudeMode', 'clampToGround');

vectorLayer.set('selectable', true);
vectorLayer.set('id', 'dispatches');
ongoingFiresLayer.set('selectable', true);
ongoingFiresLayer.set('id','ongoing');
rxFiresLayer.set('selectable', true);
rxFiresLayer.set('id','rx');
newFiresLayer.set('selectable', true);
newFiresLayer.set('id','new');

ongoingFiresLayer.set('overlay', true);
rxFiresLayer.set('overlay', true);
newFiresLayer.set('overlay', true);

// function MAP() {
// }
// MAP();

// function OL3D() {
// }
// OL3D();

     

/////////////////////////////////////////////////////////////////////////////////////////////

// map.on('pointermove', function(e) {
//   if (e.dragging) {
//     return;
//   }
//   var pixel = map.getEventPixel(e.originalEvent);
//   var layer = map.forEachLayerAtPixel(
//     pixel,
//     function(layer) {
//       return layer;
//     },
//     function(layer) {
//       return layer.get('selectable') == true;
//     }
//   )
//   var feature = map.forEachFeatureAtPixel(
//     pixel, 
//     function(feature, layer) {
//       return feature;
//       // return {'feature': feature, 'layer': layer};
//     },
//     null,
//     function(layer) {
//       return layer.get('selectable') == true;
//     }
//   );
//   if (layer.get('id') == 'rx') {
//       feature.setStyle(new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(253,2,125,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
//         radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//       })
//     }));
//   }
//   else if (layer.get('id') == 'new') {
//     feature.setStyle(new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(232,14,14,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 2}), // rgba(254,32,171,1)
//         radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//       })     
//     }));
//   }
//   else if (layer.get('id') == 'ongoing') {
//     feature.setStyle(new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(254,253,6,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(243,206,104,1)', width: 2}),
//         radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//       })     
//     }));
//   }
//   // if (selectedFeature) {
//   //   selectedFeature.setStyle(null);
//   // }
// });

// map.on('click', function(e) {
//   var pixel = map.getEventPixel(e.originalEvent);

//   var layer = map.forEachLayerAtPixel(
//     pixel,
//     function(layer) {
//       return layer;
//     },
//     function(layer) {
//       return layer.get('selectable') == true;
//     }
//   );

//   var feature = map.forEachFeatureAtPixel(
//     pixel, 
//     function(feature, layer) {
//       return feature;
//       // return {'feature': feature, 'layer': layer};
//     },
//     null,
//     function(layer) {
//       return layer.get('selectable') == true;
//     }
//   );

//   if (layer.get('overlay') == true) {
//     function displayInfo() {
//       info.removeAttribute('class', 'alert-fire');
//       info.setAttribute('class', 'alert');
//       var coordinate = e.coordinate;
//       var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));

//       uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
//       incidentName.innerHTML = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
//       fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
//       dailyAcres.innerHTML = feature.get('DailyAcres') ? ('<strong>Total Acreage: </strong>' + feature.get('DailyAcres')) 
//         : feature.get('DiscoveryAcres') ? '<strong>Discovery Acreage: </strong>' + feature.get('DiscoveryAcres') : '<strong>Acreage: </strong>Unknown';
//       strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
//       fireCause.innerHTML = feature.get('FireCause') ? feature.get('FireCause') : 'unknown';
//       fuelType.innerHTML = feature.get('PrimaryFuelModel') ? feature.get('PrimaryFuelModel') : 'unknown';
//       incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') ? feature.get('IncidentCommanderName') : 'unknown';
//       ownership.innerHTML = feature.get('POOProtectingAgency') ? feature.get('POOProtectingAgency') : 'unknown';
//       dispatchCenterID.innerHTML = feature.get('DispatchCenterID') ? feature.get('DispatchCenterID') : 'unknown';
//       predictiveServiceAreaID.innerHTML =  feature.get('PredictiveServiceAreaID') ? feature.get('PredictiveServiceAreaID') : 'unknown';
//       latLong.innerHTML = (feature.get('InitialLatitude') && feature.get('InitialLongitude')) ? feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude') : 'unknown';

//       // overlay.setPosition(coordinate);    
//     }
//     displayInfo();
//   }
//   if (layer.get('id') === 'dispatch') {
//     info.innerHTML = '<a href="' + feature.get('website') + '" target="_blank" style="color: #475640;">' + feature.get('UnitID').match(/.....$/gi)[0] + ': ' + feature.get('NAME') + '</a>';
//     feature.setStyle(selectionStyle);
//     var polygon = (feature.getGeometry());// @type {ol.geom.SimpleGeometry 
//     var size = (map.getSize()); // @type {ol.Size} 
//     // map.getView().fit(polygon, size, {padding: [0, 0, 0, 0], constrainResolution: false});
//     var aa = polygon.getExtent();
//     var oo = ol.extent.getCenter(aa);
//     console.log(aa);
//     console.log(oo);
//     // let duration = 1500; // ie11+
//     // var self = this;
//     // var duration = 1500;
//     var start = +new Date();
//     var pan = ol.animation.pan({
//       duration: duration,
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
//     // map.getView().setZoom(5);
//     // map.getView().setZoom(map.getView().getZoom()+1);
//   } 
// });
// // closer.onclick = function() {
// //   overlay.setPosition(undefined);
// //   closer.blur();
// //   return false;
// // };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var highlightStyleCache = {};
// var rxOverlay = new ol.layer.Vector({
//   source: new ol.source.Vector(),
//   map: map,
//   style: function(feature, resolution) {
//     var style = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(253,2,125,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
//         radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//       })
//     });
//     return style;   
//   }
// });

// var highlight;
// var displayFeatureInfo = function(pixel) {
//   // var layer = map.forEachLayerAtPixel(
//   //   pixel,
//   //   function(layer) {
//   //     return layer;
//   //   },
//   //   function(layer) {
//   //     return layer.get('selectable') == true;
//   //   }
//   // );
//   var fl = map.forEachFeatureAtPixel(
//     pixel, 
//     function(feature, layer) {
//       return {'feature': feature, 'layer': layer};
//     }
//     ,
//     null,
//     function(layer) {
//       return layer.get('selectable') == true;
//     }
//   );

//   if (feature !== highlight) {
//     if (highlight) {
//       rxOverlay.getSource().removeFeature(highlight);
//     }
//     if (feature) {
//       rxOverlay.getSource().addFeature(feature);
//     }
//     highlight = feature;
//   }

// };


// map.on('pointermove', function(e) {
//   if (e.dragging) {
//     return;
//   }
//   var pixel = map.getEventPixel(e.originalEvent);
//   displayFeatureInfo(pixel);
//   map.addLayer(rxOverlay);
// });

// map.on('click', function(e) {
//   displayFeatureInfo(e.pixel);
// });



// var selectRx = new ol.interaction.Select({
//   condition: ol.events.condition.pointermove,
//   layers: function(layer) {
//     return layer.get('id') == 'rx';
//   },
//   // style: new ol.style.Style({
//   //   image: new ol.style.Circle({
//   //     fill: new ol.style.Fill({
//   //       color: 'rgba(253,2,125,.7)'
//   //     }),
//   //     stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
//   //     radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//   //   })
//   // }),
//   // features: function(feature, layer) {
//   //   return feature;
//   // },
//   wrapX: false
// });

// map.getInteractions().extend([selectRx]);

// var highlightFire = function(pixel) {
//   map.forEachFeatureAtPixel(pixel, function(feature, layer) {
//     return feature;
//     // return {'feature': feature, 'layer': layer};
//   });
//   // var feature = fl.feature;           
//   feature.setStyle(new ol.style.Style({
//     image: new ol.style.Circle({
//       fill: new ol.style.Fill({
//         color: 'rgba(253,2,125,.7)'
//       }),
//       stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
//       radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//     })
//   }));  
// }

// selectRx.on('select', function(e) {
//   var pixel = e.pixel;
//   highlightFire(pixel);
// });


// var selectPointerMove = new ol.interaction.Select({
//   condition: ol.events.condition.pointerMove,
//   style: function(feature, res) { return pointStyle(feature, res); },
//   layers: function(layer) {
//     return layer.get('overlay') == true;
//   },
//   wrapX: false
// });

// selectPointerMove.getFeatures().on('change:length', function(e) {

// })

// map.addInteraction(selectPointerMove);
//     select.on('select', function(e) {
//       if (e.dragging) {
//         return;
//       }
//       var pixel = map.getEventPixel(e.originalEvent);
//       var layer = map.forEachLayerAtPixel(
//         pixel,
//         function(layer) {
//           return layer;
//         },
//         function(layer) {
//           return layer.get('selectable') == true;
//         }
//       )
//       var feature = map.forEachFeatureAtPixel(
//         pixel, 
//         function(feature, layer) {
//           return feature;
//           // return {'feature': feature, 'layer': layer};
//         },
//         null,
//         function(layer) {
//           return layer.get('selectable') == true;
//         }
//       );
//       if (layer.get('id') == 'rx') {
//           feature.setStyle(new ol.style.Style({
//           image: new ol.style.Circle({
//             fill: new ol.style.Fill({
//               color: 'rgba(253,2,125,.7)'
//             }),
//             stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
//             radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//           })
//         }));
//       }
//       else if (layer.get('id') == 'new') {
//         feature.setStyle(new ol.style.Style({
//           image: new ol.style.Circle({
//             fill: new ol.style.Fill({
//               color: 'rgba(232,14,14,.7)'
//             }),
//             stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 2}), // rgba(254,32,171,1)
//             radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//           })     
//         }));
//       }
//       else if (layer.get('id') == 'ongoing') {
//         feature.setStyle(new ol.style.Style({
//           image: new ol.style.Circle({
//             fill: new ol.style.Fill({
//               color: 'rgba(254,253,6,.7)'
//             }),
//             stroke: new ol.style.Stroke({color: 'rgba(243,206,104,1)', width: 2}),
//             radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 10000) : Math.log(feature.get('DiscoveryAcres') * 10000)
//           })     
//         }));
//       }
//     });
//////////////////////////////////////////////////////////////////////////////////////////////////
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
  layers: [ongoingFiresLayer, rxFiresLayer, newFiresLayer],
  // filter: function(feature, layer) {
  //   if (layer.get('overlay') == true)
  //     return true;
  // },
  style: function(feature) {
    if (feature.getLayer().get('id') == 'rx') {
      var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
      var style = new ol.style.Style({
        image: new ol.style.Circle({
          // fill: new ol.style.Fill({
          //   color: 'rgba(253,2,125,.1)'
          // }), 
          stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
          radius: (acres < 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
        })
      }); 
    }
    if (feature.getLayer().get('id') == 'new') {
      var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
      var style = new ol.style.Style({
        image: new ol.style.Circle({
          // fill: new ol.style.Fill({
          //   color: 'rgba(232,14,14,.1)'
          // }),
          stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}),
          radius: (acres < 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
        })
      }); 
    }
    if (feature.getLayer().get('id') == 'ongoing') {
      var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres');
      var style = new ol.style.Style({
        image: new ol.style.Circle({
          // fill: new ol.style.Fill({
          //   color: 'rgba(254,253,6,.1)'
          // }),
          stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 4}),
          radius: (acres < 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
        })
      }); 
    }
    return style;
  }  
});

map.addInteraction(selectHover);

selectHover.on('select', function(e) {
  var coordinate;
  var feature = e.selected[0];
  // var layer = feature.getLayer();
  if (feature) {
    var feature = e.selected[0];
    function displayInfo() {
      coordinate = ol.proj.transform([feature.get('POOLongitude') ? feature.get('POOLongitude') : feature.get('InitialLongitude'), feature.get('POOLatitude') ? feature.get('POOLatitude') : feature.get('InitialLatitude')], 'EPSG:4326','EPSG:3857');
      var sagegrouseFeatures = sagegrouse ? sagegrouse.getSource().getFeaturesAtCoordinate(
        ol.proj.transform([feature.get('POOLongitude') ? feature.get('POOLongitude') : feature.get('InitialLongitude'), feature.get('POOLatitude') ? feature.get('POOLatitude') : feature.get('InitialLatitude')], 'EPSG:4326','EPSG:3857')
      ) : [];
      uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
      incidentName.innerHTML = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
      fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
      dailyAcres.innerHTML = feature.get('DailyAcres') ? (feature.get('DailyAcres') + '  [total]') 
        : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
      strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
      fireCause.innerHTML = feature.get('FireCause') ? feature.get('FireCause') : 'unknown';
      fuelType.innerHTML = feature.get('PrimaryFuelModel') ? feature.get('PrimaryFuelModel') : 'unknown';
      incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') ? feature.get('IncidentCommanderName') : 'unknown';
      ownership.innerHTML = feature.get('POOLandownerCategory') ? feature.get('POOLandownerCategory') : feature.get('POOProtectingAgency');
      dispatchCenterID.innerHTML = feature.get('DispatchCenterID') ? feature.get('DispatchCenterID') : 'unknown';
      predictiveServiceAreaID.innerHTML =  feature.get('PredictiveServiceAreaID') ? feature.get('PredictiveServiceAreaID') : 'unknown';
      latLong.innerHTML = (feature.get('POOLatitude') && feature.get('POOLongitude')) ? feature.get('POOLatitude') + ' , ' + feature.get('POOLongitude') : feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude');
      sagegrouseOrigin.innerHTML = (sagegrouseFeatures.length > 0) ? sagegrouseFeatures[0].get('Species') + ': ' + sagegrouseFeatures[0].get('Habitat') : 'No.' ;
      // var coordinate = e.coordinate;
      // var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
      // overlay.setPosition(coordinate); 
    }   
    displayInfo();
    var justDate = feature.get('FireDiscoveryDateTime') ? (new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getFullYear() : 'unknown';
    content.innerHTML = incidentName.innerHTML + '<br>' + dailyAcres.innerHTML + '<br>' + justDate;
    map.getOverlayById('dataOverlay') ? overlay.setPosition(coordinate) : ''; 
  }
});


var selectClick = new ol.interaction.Select({
  condition: ol.events.condition.click,
  layers: [
    stamen,
    // mapbox, 
    // raster,
    vectorLayer 
  ],
  style: new ol.style.Style({
    // fill: new ol.style.Fill({
    //   color: 'rgba(251,200,200,.4)'
    // }),
    stroke: new ol.style.Stroke({
      color: 'rgba(0,0,255, .8)',
      // color: '#f00',
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
    map.setView(new ol.View({
        // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
        center: [-12753260.184760537, 4948659.629345282],
        zoom: 5.55,
        // minZoom: 5,
        // maxZoom: 9.8,
        extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
      })
    );
      // map.getView().setZoom(5);
      // map.getView().setZoom(map.getView().getZoom()+1);
  } 
});

map.updateSize();


