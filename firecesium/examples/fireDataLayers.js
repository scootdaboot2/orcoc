var today = Date.now();
var irwinToken = "J-vUH-69cbgRwwuq7wPdg85P8tOaetGzjTU5uQzb0PmyIJTJxU8i3hZSKbGRdca7AADlRmpxgM0pJQdeN4Qmzg.."; // http://irwin.doi.gov/arcgis/tokens/
var egpToken = 'sGBYcBtDfSmp017pA0VBt5nhZNEczskZGqUzQLphOV4fitUycNlZx_IZ-ac-kV-B3-mHchb-Rr0QwnJORnqvwg..'; // https://egp.nwcg.gov/arcgis/tokens/
var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';

// var options = {
//   method: String,
//   url: String,
//   params: String | Object,
//   headers: Object
// };

// function ajax (options) {
//   return new Promise (function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(options.method, options.url);
//     xhr.responseType = '';
//     xhr.onload = function() {
//       if (this.status <= 200 && this.status < 300) {
//         resolve (xhr.response);
//       }
//       else {
//         reject({
//           status: this.status,
//           statusText: xhr.statusText
//         });
//       }
//     }
//     xhr.onerror = function() {
//       reject({
//         status: this.status,
//         statusText: xhr.statusText
//       });
//     }
//     if (options.headers) {
//       Object.keys(options.headers).forEach(function(key) {
//         xhr.setRequestHeader(key, options.headers[key]);
//       });
//     }
//     var params = options.params;
//     // We'll need to stringify if we've been given an object, else this is skipped
//     if (params && typeof params === 'object') {
//       params = Object.keys(params).map(function (key) {
//         return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
//       }).join('&');
//     };
//     xhr.send(params);
//   });
// }

// var gbccBoundaries;
// var gbccNewFires;
// var gbccOngoingFires;

// ajax({
//   method: 'GET',
//   url: 'data/topojson/gbccBoundaries.topojson'
// })
// .then(function (firstValue) {
//   // gbccBoundaries = firstValue;
//   gbccBoundaries = JSON.parse(firstValue);
//   return ajax({
//     method: 'GET',
//     url: 'data/topojson/newFires.topojson'
//   });
// })
// .then(function (secondValue) {
//   gbccNewFires = secondValue;
//   return ajax({
//     method: 'GET',
//     url: 'data/topojson/ongoingFires.topojson'
//   });
// })
// .then(function (thirdValue) {
//   gbccOngoingFires = thirdValue;
// })
// .catch(function (error) {
//   console.error('damnit.', error.statusText);
// });

// // option using fetch API
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
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({color: 'blue', width: 1})
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
      radius: 2,
      fill: new ol.style.Fill({
        color: 'rgba(255,85,0,1)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(168,0,0,.3)',
        width: 1
      })
    })
  })],
  '12': [new ol.style.Style({ 
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
  '24': [new ol.style.Style({ 
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

var egpModisFireDetectionCentroidLayer6 = new ol.layer.Vector({
  source: new ol.source.Cluster({
    distance: 5,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
          +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
          +'&token=' + egpToken
      /* whole URL  */
      // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
      //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
      //   + "&outFields=*"
      //   + "&outSR=102100"
      //   + "&token=' + egpToken
    })
  }),
  wrapX: false,
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
  source: new ol.source.Cluster({
    distance: 5,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
          +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
          +'&token=' + egpToken
    })
  }),
  wrapX: false,
  style: egpModisStyles['12']
});
var egpModisFireDetectionCentroidLayer24 = new ol.layer.Vector({
  source: new ol.source.Cluster({
    distance: 5,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
          +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
          +'&token=' + egpToken
    })
  }),
  wrapX: false,
  style: egpModisStyles['24']
});
var egpModisFireDetectionCentroidLayer48 = new ol.layer.Vector({
  source: new ol.source.Cluster({
    distance: 5,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
          +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
          +'&token=' + egpToken
    })
  }),
  wrapX: false,
  style: egpModisStyles['48']
});
var egpModisFireDetectionCentroidLayer999 = new ol.layer.Vector({
  source: new ol.source.Cluster({
    distance: 5,
    source: new ol.source.Vector({
      format: new ol.format.EsriJSON(),
      url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
          +'&where=AgeInHours < 50&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
          +'&token=' + egpToken
    })
  }),
  wrapX: false,
  style: egpModisStyles['999']
});

// var newFiresStyle = function(feature, resolution) {
//   var geo = feature.getGeometry();
//   var marker = new ol.style.Style({
//      image: new ol.style.Circle({
//        fill: null,
//        stroke: new ol.style.Stroke({color: 'red', width: 2}),
//        radius: Math.log(feature.get('DailyAcres') * 100)
//      })
//    });
//   return geo ? marker : fireStyles['Point'];
// };

// var newFires = new ol.source.Vector({
//   // format: new ol.format.TopoJSON(),
//   // url: 'data/topojson/newFires.topojson'
//   format: new ol.format.GeoJSON(),
//   url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//       +"&where=(GACC = 'GBCC') AND (CreatedOnDateTime >= " + (today - 2*86400000) + ") AND (RecordSource = 'wildcad')" 
//       +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
//       +"&token=J-vUH-69cbgRwwuq7wPdgzH_odsN5pOUuL00U-oQcbbivXEZ_LtKtHVEA-K7JhrI"
// });


// var ongoingFiresStyle = function(feature, resolution) {
//   var geo = feature.getGeometry();
//   var marker = new ol.style.Style({
//     image: new ol.style.Circle({
//       fill: new ol.style.Fill({
//         color: 'rgba(254,253,6,.7)'
//       }),
//       stroke: new ol.style.Stroke({color: 'red', width: 2}),
//       radius: Math.log(feature.get('DailyAcres') * 100)
//     })
//   });
//   return geo ? marker : fireStyles['Point'];
// };


// var ongoingFires = new ol.source.Vector({
//   format: new ol.format.TopoJSON(),
//   // url: 'data/topojson/ongoingFires.topojson'
//   url: 'data/topojson/testOngoing.topojson'
// });
// 'EPSG:3857', 'EPSG:4326'

// var ongoingFires = new ol.source.Vector({
//   format: new ol.format.GeoJSON(),
//   // url: 'data/geojson/map.geojson'
//   // url: 'data/geojson/geomacModisFireDetection.geojson' // (Polygon)
//   // url: 'data/geojson/egpModisFireDetection.geojson' (Point)
//   url: 'data/geojson/viirsRSAC.geojson' // (Point) http://activefiremaps.fs.fed.us/data_viirs/fireptdata/viirsfire_2016_conus_last7.htm
//   // url: 'data/geojson/egpIgPoint.geojson' // (Point)
// });

// var ongoingFires = new ol.source.Vector({
//   format: new ol.format.EsriJSON(),
//   url: 'data/esrijson/map.json'
// });


// var ongoingFires = new ol.source.Vector({
//   format: new ol.format.GeoJSON(),
//   url : "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//     + "&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad')" 
//     + " AND (CreatedOnDateTime >" + (today - 30*86400000)  + ") AND (CreatedOnDateTime <= " + (today - 2*86400000) + ")" 
//     + " AND (FinalAcres IS NULL)"
//     + "&returnGeometry=true"
//     + "&spatialRel=esriSpatialRelIntersects"
//     + "&outFields=*"
//     + "&outSR=102100"
//     + "&token=J-vUH-69cbgRwwuq7wPdgzH_odsN5pOUuL00U-oQcbbivXEZ_LtKtHVEA-K7JhrI"
 
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

var rxFiresLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url : "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
      + "&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad')" 
      + " AND (CreatedOnDateTime >= " + (today - 30*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
      + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX')"
      + " AND (ModifiedOnDateTime > " + (today - 14*86400000) + ")"
      + "&returnGeometry=true"
      + "&spatialRel=esriSpatialRelIntersects"
      + "&outFields=*"
      + "&outSR=102100"
      + "&token=" + irwinToken
  }),
  style: function(feature, resolution) {
    var geo = feature.getGeometry();
    var marker = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(253,2,125,.7)'//'rgba(2,253,200,.7)'
        }),
        stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 1}),
        radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 100) : Math.log(feature.get('DiscoveryAcres') * 100)
      })
    });
    return geo ? marker : fireStyles['Point'];
  }
});

var newFiresLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    // format: new ol.format.TopoJSON(),
    // url: 'data/topojson/newFires.topojson'
    format: new ol.format.GeoJSON(),
    url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
        +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (CreatedOnDateTime >= " + (today - 2*86400000) + ") AND (IncidentTypeCategory <> 'RX')" 
        +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
        +"&token=" + irwinToken
        // +"&token=J-vUH-69cbgRwwuq7wPdg9P5PoCqaVFmygHFSvUKano."
  }),
  wrapX: false,
  // style: fireStyles['Point']
  style: function(feature, resolution) {
    var geo = feature.getGeometry();
    var marker = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(232,14,14,.7)'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 2}), // rgba(254,32,171,1)
        radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 100) : Math.log(feature.get('DiscoveryAcres') * 100)
      })
    });
    return geo ? marker : fireStyles['Point'];
  }
});

var ongoingFiresLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "http://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
        +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FinalAcres IS NULL)"
        +" AND (CreatedOnDateTime > " + (today - 30*86400000) + ") AND (CreatedOnDateTime < " + (today - 2*86400000) + ") AND (ModifiedOnDateTime > " + (today - 14*86400000) + ")"
        +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
        // +"&token=J-vUH-69cbgRwwuq7wPdg0TdZdcOqrjGMW3kSP4rnw4."
        + "&token=" + irwinToken
  }),
  style: function(feature, resolution) {
    var geo = feature.getGeometry();
    var marker = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(254,253,6,.7)'
        }),
        stroke: new ol.style.Stroke({color: 'rgba(243,206,104,1)', width: 2}),
        radius: feature.get('DailyAcres') ? Math.log(feature.get('DailyAcres') * 100) : Math.log(feature.get('DiscoveryAcres') * 100)
      })
    });
    return geo ? marker : fireStyles['Point'];
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
      color: 'rgba(89,132,228,1)',
      // lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(89,132,228,.7)'
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
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.1)'
  }),
  stroke: new ol.style.Stroke({
    color: '#319FD3',
    width: 1
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
    url: 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  wrapX: false
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