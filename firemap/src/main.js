var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNra3liYXd2bzAyNnYybnBhYmxyeGI0cDMifQ.pWTRm3Z4hur3TLuv9Da25g';


const { Map, source, layer, View, format, extent, control } = ol
const { Vector: VectorLayer, 
        Tile: TileLayer, 
        VectorTile: VectorTileLayer, } = layer
// const { MapboxVector: MapboxVectorLayer } = ol-mapbox-style
const { Vector: VectorSource, XYZ, OSM } = source
const { TopoJSON, GeoJSON } = format
const { Fill, Stroke, Style } = ol.style
const { FullScreen } = control
const { apply, applyStyle, MapboxVectorLayer } = olms
// const { WindLayer } = OLWind
// import { WindLayer } from 'ol-wind' 
// console.log(WindLayer)

// let { layer: { Vector } } = ol
// console.log(MapboxVectorLayer)
const vectorStyle = new ol.style.Style({
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
    }),
    // stroke: new ol.style.Stroke({
    //   color: '#fff',
    //   width: 3
    // })
  })
})

const view = new View({
  center: [-12278036.158667568, 4661026.961955486],
  zoom: 5.55,
})

const boundarySource = new VectorSource({
  url: './firemap/src/data/topojson/ut-ubc.topojson',
  format: new TopoJSON(),
  overlaps: false,
})

const boundaryLayer = new VectorLayer({
  source: boundarySource,
  style: vectorStyle,
})

const today = Date.now()
const opacity = acres => { 
  var fade = (acres < 1000) ? .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) : 1-.1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)) < -1 ? .1 : .1;
  return fade 
}

const rxFiresStyleCache = {}
const rxFiresStyleFunction = function(feature) {
  // if (feature.get('DispatchCenterID') !== 'UTUBC') return
  if (feature.get('FireOutDateTime')) return
  let discovery = feature.get('FireDiscoveryDateTime')
  let acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres')
  let radius = (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
  let style = rxFiresStyleCache[radius]
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
        }),
        stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
        radius: radius
      })
    })
    rxFiresStyleCache[radius] = style
  }
  return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? style : fireStyles['Point']
}

const rxFiresLayer = new VectorLayer({
  title: 'Prescribed Fires',
  source: new VectorSource({
    crossOrigin: 'anonymous',
    format: new GeoJSON(),
    url: 'https://gbcc.us/ut-cdc_rxfires.geojson'
  }),
  visible: true,
  wrapX: false,
  style: rxFiresStyleFunction
})

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

var newFiresLayer = new VectorLayer({
  title: 'New Fires',
  source: new VectorSource({
    crossOrigin: 'anonymous',
    format: new GeoJSON(),
    url: 'https://gbcc.us/ut-cdc_newfires.geojson'
  }),
  visible: true,
  wrapX: false,
  style: newFiresStyleFunction
})


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

const ongoingFiresLayer = new VectorLayer({
  title: 'Ongoing Fires',
  source: new VectorSource({
    crossOrigin: 'anonymous',
    format: new GeoJSON(),
    url: 'https://gbcc.us/ut-cdc_ongoingfires.geojson'
  }),
  visible: true,
  wrapX: false,
  style: ongoingFiresStyleFunction
})


const mapboxLayer = new MapboxVectorLayer({
  styleUrl: 'mapbox://styles/mapbox/bright-v9',
  // styleUrl: 'mapbox://styles/rtippetts/cji59op7k08cs2slch5fd7m4l',
  accessToken: mapboxToken
})    


const map = new Map({
  target: 'map',
  layers: [
    // new TileLayer({
    //   source: new OSM(),
    // }),
    mapboxLayer,
    boundaryLayer,
    rxFiresLayer,
    newFiresLayer,
    ongoingFiresLayer
  ],
  view,
})
// const map = new Map({
//     // layers: [layer],
//     target: 'map',
//     view: new View({
//         // projection: 'EPSG:4326',
//         // center: fromLonLat([113.53450137499999, 34.44104525]),
//         center: [113.53450137499999, 34.44104525],
//         zoom: 2,
//     }),
//     // pixelRatio: 2,
// });

// apply('map', `https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=${mapboxToken}`);
// const brightLayer = new VectorTileLayer({declutter: true});
// applyStyle(brightLayer, 'mapbox://styles/mapbox/bright-v9', {accessToken: mapboxToken});

mapboxLayer.once('error', e => {
  console.log(e)
})

boundarySource.once('change', function(e){
    console.log(boundarySource.getFeatures()[1].getGeometry())
    console.log(boundarySource.getState())
    let polygon = boundarySource.getFeatures()[1].getGeometry()
    view.fit(polygon, {padding: [50, 50, 50, 50]})
    console.log(view.getZoom())
  if (boundarySource.getState() === 'ready') {
  }
})

map.addControl(new FullScreen())



// fetch('https://blog.sakitam.com/wind-layer/data/wind.json')
//   .then(res => res.json())
//   .then(res => {
//     console.log(res, 'your wind layer data');

//     const windLayer = new WindLayer(res, {
//         windOptions: {
//           velocityScale: 0.05,
//           paths: 3200,
//           // eslint-disable-next-line no-unused-vars
//           colorScale: [
//             "rgb(36,104, 180)",
//             "rgb(60,157, 194)",
//             "rgb(128,205,193 )",
//             "rgb(151,218,168 )",
//             "rgb(198,231,181)",
//             "rgb(238,247,217)",
//             "rgb(255,238,159)",
//             "rgb(252,217,125)",
//             "rgb(255,182,100)",
//             "rgb(252,150,75)",
//             "rgb(250,112,52)",
//             "rgb(245,64,32)",
//             "rgb(237,45,28)",
//             "rgb(220,24,32)",
//             "rgb(180,0,35)"
//           ],
//           lineWidth: 3,
//           // colorScale: scale,
//           generateParticleOption: false
//           // particleMultiplier: 0.3 * 10,
//         },
//         fieldOptions: {
//           wrapX: false,
//         },
//     });

//     map.addLayer(windLayer)
// })



// olms(
//   'map',
//   // 'https://api.maptiler.com/maps/topo/style.json?key=YupsKVdKi4GL6VvqDIHG'
//   'mapbox://styles/rtippetts/cji59op7k08cs2slch5fd7m4l'
// ).then(function (map) {
//   map.addControl(new FullScreen());
// });


// fetch('https://gacc.nifc.gov/gbcc/dispatch/ut_ubc/firemap/src/ol-wind/dist/wind.json')
//   .then(function(response) {
//     return response.json();
//     })
//   .then(function(json) {
//     const windLayer = new OlWind.WindLayer(json, {
//       windOptions: {
//         velocityScale: 0.05,
//         paths: 3200,
//         // eslint-disable-next-line no-unused-vars
//         colorScale: [
//           "rgb(36,104, 180)",
//           "rgb(60,157, 194)",
//           "rgb(128,205,193 )",
//           "rgb(151,218,168 )",
//           "rgb(198,231,181)",
//           "rgb(238,247,217)",
//           "rgb(255,238,159)",
//           "rgb(252,217,125)",
//           "rgb(255,182,100)",
//           "rgb(252,150,75)",
//           "rgb(250,112,52)",
//           "rgb(245,64,32)",
//           "rgb(237,45,28)",
//           "rgb(220,24,32)",
//           "rgb(180,0,35)"
//         ],
//         lineWidth: 3,
//         // colorScale: scale,
//         generateParticleOption: false
//         // particleMultiplier: 0.3 * 10,
//       },
//       fieldOptions: {
//         wrapX: false,
//       },
//     })
//     windLayer.appendTo(map)
//   })

ongoingFiresLayer.set('selectable', true)
ongoingFiresLayer.set('id','ongoing')
rxFiresLayer.set('selectable', true)
rxFiresLayer.set('id','rx')
newFiresLayer.set('selectable', true)
newFiresLayer.set('id','new')


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

function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

if (isTouchDevice()) {
  console.log('touch')
  var selectTap = new ol.interaction.Select({
    condition: ol.events.condition.click,
    layers: [ ongoingFiresLayer, rxFiresLayer, newFiresLayer ],
    
    style: function(feature) {
      if (feature.getLayer().get('id') == 'rx') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        });
      } 
      if (feature.getLayer().get('id') == 'new') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }) 
      }
      if (feature.getLayer().get('id') == 'ongoing') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({

            stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 4}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }) 
      }

      return style
    }  
  })

  map.addInteraction(selectTap)

  selectTap.on('select', function(e) {
    var coordinate;
    var feature = e.selected[0];
    if (feature) {
      var feature = e.selected[0];
      var fid = feature.get('poly_GISAcres') ? feature.get('irwin_IncidentName').toUpperCase() : ((feature.get('attribution')) ? feature.get('id') : feature.get('IncidentName').toUpperCase());
      function displayInfo() { 
        coordinate = ol.proj.transform([
               feature.get('irwin_InitialLongitude') 
                 ? feature.get('irwin_InitialLongitude') 
                 : feature.get('InitialLongitude'), 
               feature.get('irwin_InitialLatitude') 
                 ? feature.get('irwin_InitialLatitude') 
                 : feature.get('InitialLatitude')
             ], 
             'EPSG:4326','EPSG:3857');
        var sagegrouseFeatures = sagegrouse ? sagegrouse.getSource().getFeaturesAtCoordinate(
          ol.proj.transform([feature.get('POOLongitude') ? feature.get('POOLongitude') : feature.get('InitialLongitude'), feature.get('POOLatitude') ? feature.get('POOLatitude') : feature.get('InitialLatitude')], 'EPSG:4326','EPSG:3857')
        ) : [];
        // uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') 
        //                                    ? feature.get('UniqueFireIdentifier') 
        //                                    : feature.get('irwin_UniqueFireIdentifier')
        //                                      ? feature.get('irwin_UniqueFireIdentifier')
        //                                      : 'unknown';
        // incidentName.innerHTML = feature.get('IncidentName') 
        //                            ? feature.get('IncidentName') 
        //                            : feature.get('irwin_IncidentName')
        //                              ? feature.get('irwin_IncidentName')
        //                              : 'unknown';
        // fireDiscoveryDateTime.innerHTML = feature.get('irwin_FireDiscoveryDateTime') 
        //                             ? new Date(parseInt(feature.get('irwin_FireDiscoveryDateTime'))).toLocaleString()
        //                             : feature.get('FireDiscoveryDateTime') 
        //                               ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() 
        //                               : 'unknown';
        // dailyAcres.innerHTML = feature.get('poly_GISAcres') 
        //                          ? feature.get('poly_GISAcres')
        //                          : feature.get('IncidentSize') 
        //                            ? (feature.get('IncidentSize') + '  [total]') 
        //                            : feature.get('DiscoveryAcres') 
        //                              ? feature.get('DiscoveryAcres') + '  [discovery]' 
        //                              : 'unknown';
        // strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'Full Suppression';
        // fireCause.innerHTML = feature.get('FireCause') 
        //                         ? feature.get('FireCause') 
        //                         : feature.get('irwin_FireCause')
        //                           ? feature.get('irwin_FireCause')
        //                           : 'unknown';
        // fuelType.innerHTML = feature.get('PrimaryFuelModel') 
        //                        ? feature.get('PrimaryFuelModel') 
        //                        : feature.get('irwin_PrimaryFuelModel')
        //                          ? feature.get('irwin_PrimaryFuelModel')
        //                          : 'unknown';
        // incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') 
        //                                     ? feature.get('IncidentCommanderName')
        //                                     : feature.get('irwin_IncidentManagementOrg')
        //                                       ? feature.get('irwin_IncidentManagementOrg')
        //                                       : 'unknown';
        // ownership.innerHTML = feature.get('irwin_POOLandownerCategory')
        //                         ? feature.get('irwin_POOLandownerCategory')
        //                         : feature.get('irwin_POOProtectingAgency')
        //                           ? feature.get('POOLandownerCategory')
        //                           : feature.get('POOProtectingAgency');
        // dispatchCenterID.innerHTML = feature.get('DispatchCenterID') 
        //                                ? feature.get('DispatchCenterID') 
        //                                : feature.get('irwin_DispatchCenterID')
        //                                  ? feature.get('irwin_DispatchCenterID')
        //                                  : 'unknown';
        // predictiveServiceAreaID.innerHTML = feature.get('POOPredictiveServiceAreaID') 
        //                                       ? feature.get('POOPredictiveServiceAreaID') 
        //                                       : feature.get('irwin_POOPredServiceAreaID')
        //                                         ? feature.get('irwin_POOPredServiceAreaID')
        //                                         : 'unknown';
        // latLong.innerHTML = (feature.get('irwin_InitialLatitude') && feature.get('irwin_InitialLongitude')) 
        //                       ? feature.get('irwin_InitialLatitude') + ' , ' + feature.get('irwin_InitialLongitude') 
        //                       : feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude');
        // // sagegrouseOrigin.innerHTML = (sagegrouseFeatures.length > 0) ? sagegrouseFeatures[0].get('Hab_Type') : 'No.' ;
        
      }
  


      // if (feature.get('UniqueFireIdentifier')) {
      //   displayInfo();

      //   var justDate = feature.get('FireDiscoveryDateTime') ? (new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getFullYear() : 'unknown';
      //   content.innerHTML = incidentName.innerHTML + '<br>' + dailyAcres.innerHTML + '<br>' + justDate;
      //   map.getOverlayById('dataOverlay') ? overlay.setPosition(feature.getGeometry().getCoordinates()) : '';
      //   displayResources(resItems); 
      // }
      // if (feature.getProperties()["type"]) {
      //   content.innerHTML = feature.get('name');
      //   map.getOverlayById('dataOverlay') ? overlay.setPosition(feature.getGeometry().getCoordinates()) : ''; 
      //   displayResources(resItems);
      // }
      // if (feature.get('poly_GISAcres')) {
      //   justDate = feature.get('poly_CreateDate') ? (new Date(parseInt(feature.get('poly_CreateDate'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('poly_CreateDate'))).getDate() + '/' + new Date(parseInt(feature.get('poly_CreateDate'))).getFullYear() : 'unknown';
      //   content.innerHTML = feature.get('irwin_IncidentName') + '<br>' + feature.get('poly_GISAcres') + '<br>' + feature.get('poly_MapMethod') + '<br>' + justDate;
      //   map.getOverlayById('dataOverlay') ? overlay.setPosition(new ol.extent.getCenter(feature.getGeometry().getExtent())) : ''; 
      // } 
      // if (feature.get('attribution')) {
      //   displayFov(feature);
      // }  

    }
  });

}

