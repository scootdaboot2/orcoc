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
// var opacity = function(acres){ 
//   var fade = (acres < 1000) ? .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) : (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
//   return fade;  
// }
var opacity = function(acres){ 
  var fade = (acres < 1000) 
              ? .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) 
              : (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.2)));
  fade = fade > 0 ? fade : 1
  // console.log('fade: ', fade)
  return fade;  
}
// var IRWIN = {
//   method: 'POST',
//   url: 'https://irwin.doi.gov/arcgis/tokens/generateToken',
//   params: {
//     f: 'json',
//     username: 'gbccfiredata',
//     password: 'KFyHQ2RAdxWa',
//     client: 'referer',
//     referer: 'localhost:8000',
//     expiration: '1440'
//   },
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }

Number.prototype.between = function(a, b, inclusive) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  console.log(this)
  return inclusive ? this >= min && this <= max : this > min && this < max;
}
var getRadius = function(acres) {
  function between(x, min, max) {
    return x >= min && x <= max;
  }
  var acres = acres;
  var range = [50, 100, 500, 5000, 500000];
  var radii = [3, 6, 8, 10, 12];
  var newRange = range.reduce(function(prev, curr) {
    if (between(acres, prev, curr)) { // this serves as our `filter`
      prev.push(curr);
    }
    return prev;
  }, []);
  var y = range.indexOf(newRange[0]);
  return radii[y];
}

var firesStyleCache = {};
var firesStyleFunction = function(feature) {
  var discovery = feature.get('FireDiscoveryDateTime');
  var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
  var style = firesStyleCache[acres];
  var color;
  var stroke;
  console.log(acres)
  // console.log('acres: ', acres, 'opacity: ', opacity(acres))
  if (acres < 50) {
    // color = 'rgba(0,71,155,' + (opacity(acres)) + ')';
    color = 'rgba(0,71,155,.25)';
    // color = 'rgba(254,253,6,' + .6 + ')';
    stroke = 'rgba(0,71,155,.5)';
    // stroke = 'rgba(243,206,104,1)';
  }
  if (acres >= 50 && acres <= 100) {
    // color = 'rgba(232,150,14,' + (opacity(acres) - .3) + ')';
    // stroke = 'rgba(232,150,14, 1)';
    color = 'rgba(38,115,0,' + .25 + ')';
    // color = 'rgba(255,105,180,' + (opacity(acres) - .4) + ')';
    stroke = 'rgba(38,115,0,1)';
    // stroke = 'rgba(255,105,180, 1)';
  }
  if (acres > 101 && acres <= 500) {
    color = 'rgba(255,255,0,' + .25 + ')';
    // color = 'rgba(49,23,172,' + (opacity(acres) - .3) + ')';
    stroke = 'rgba(255,255,0,1)';
    // stroke = 'rgba(49,23,172, .7)';
  }
  if (acres > 500 && acres <= 5000) {
    color = 'rgba(255,170,0,' + .25 + ')';
    // color = 'rgba(178,12,12,' + (opacity(acres)) + ')';
    stroke = 'rgba(255,170,0,1)';
    // stroke = 'rgba(178,12,12, 1)';
  }
  if (acres > 5000) {
    color = 'rgba(230,0,0,' + .25 + ')';
    // color = 'rgba(178,12,12,' + (opacity(acres)) + ')';
    stroke = 'rgba(230,0,0,1)';
    // stroke = 'rgba(178,12,12, 1)';
  }
  if (!style) {
    color = !color ? 'rgba(0,71,155,.6)' : color
    stroke = !stroke ? 'rgba(0,71,155,.6)' : stroke
    // console.log('color: ', color, 'stroke: ', stroke)
    style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: color
          // color: 'rgba(232,150,14,' + opacity(acres) + ')'
          // color: 'rgba(254,253,6,' + opacity(acres) + ')'
          // color: 'rgba(178,12,12,' + opacity(acres) + ')'
        }),
        stroke: new ol.style.Stroke({
          color: stroke,
          // color: 'rgba(178,12,12,0.5)',
          width: 3.5
        }), // 'rgba(254,253,6,1)' rgba(243,206,104,1)
        radius: getRadius(acres)
        // radius: (acres <= 100) ? 3 : 1.2 * Math.log(acres) + .1
      })
    });
    firesStyleCache[acres] = style;
  }
  return (discovery > (today - 382*86400000) && discovery < (today - 33*86400000)) ? style : fireStyles['Point'];
}


var firesLayer = new ol.layer.Vector({
  wrapX: false,
  style: firesStyleFunction
});

var getWeight = function(feature) {
  var acres = feature.get('DailyAcres') ? feature.get('DailyAcres') : feature.get('DiscoveryAcres'); 
  return (acres < 1000) ? 1 - .1*Math.ceil(10*(1-.0004*Math.ceil(acres/100)*100)) + .25 : 1 - (1 - .1*Math.floor(10*(.00012*Math.ceil(acres/100)*100+.4)));
};
// var colors = ['rgba(51, 153, 68, 0.33)', 'rgba(51, 153, 68, 0.33)', '#0f0', '#ff0', '#f00'];
// var colors = ['rgba(255,165,0,.2)', 'rgba(0,255,255,.3)', 'rgba(0,255,0,.4)', 'rgba(255,255,0,.5)', 'rgba(255,0,0,.6)'];
var colors = ['rgba(191, 4, 4, 1)','rgba(255,61,0,1)', 'rgba(255, 191, 0, 1)','rgba(110, 50, 50, .8)', 'rgba(0,0,0,.8)'];

var heatLayer = new ol.layer.Heatmap({
  source: new ol.source.Vector({
    wrapX: false,
  }),
  gradient: colors,
  weight: getWeight,
  radius: 11, 
  shadow: 200,
  blur: 10
}); 

ajax({
  method: 'POST',
  url: 'https://irwin.doi.gov/arcgis/tokens/generateToken',
  params: {
    f: 'json',
    username: 'gbccfiredata',
    password: 'KFyHQ2RAdxWa',
    client: 'referer',
    referer: 'localhost:8000',
    expiration: '1440'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// .then(function(firstValue) {
//   var irwin = JSON.parse(firstValue).token;
//   var firesSource = new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//         +"&where=(GACC = 'GBCC')"
//         // +" AND (RecordSource = 'wildcad')"
//         +" AND (IncidentTypeCategory <> 'RX')"
//         +" AND (IncidentTypeCategory <> 'FA')"
//         // +" AND (IsComplex = 'false')"
//         +" AND (CreatedOnDateTime > " + (today - 415*86400000) + ")" // assumed today is 2/20/2019
//         +" AND (CreatedOnDateTime < " + (today - 50*86400000) + ")"
//         // +" AND (CreatedOnDateTime > " + (today - 433*86400000) + ")"
//         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
//         +"&token=" + irwin
//   });
.then(function(firstValue) {
  // var irwin = JSON.parse(firstValue).token;
  var firesSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "https://gbcc.us/eoyfires.geojson"
    // url: "./data/eoyfires.geojson"
  });
  firesLayer.setSource(firesSource);
  // heatLayer.setSource(firesSource);
})
.catch(function(error) {
  console.error('damnit.', error.statusText);
});
var vectorStyle = new ol.style.Style({
  // fill: new ol.style.Fill({
  //   color: 'rgba(255, 255, 255, 0.1)'
  // }),
  stroke: new ol.style.Stroke({
    color: 'black',
    width: 3
  })
});

var stamen = new ol.layer.Tile({
  title: 'Stamen Terrain',
  type: 'base',
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
  // extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
  opacity: .6
  
});

var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';

var mapbox = new ol.layer.Tile({
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="http://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    url: 'https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  // opacity: .6,
  wrapX: false
});

var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'data/topojson/gbccLocalWebsites.topojson',
    format: new ol.format.TopoJSON()
  }),
  wrapX: false,
  style: vectorStyle 
});

var key = 'Al2oBjQ_opovK7NsjQhkWaPvCOJMm0fHal4-iW0JOj8IuMft5kpLVX_Ok7vriTzn';

var imagery = new ol.layer.Tile({
  title: 'Bing Aerial',
  source: new ol.source.BingMaps({
    key: key,
    imagerySet: 'Aerial'
  })
});

var bigScreen = new ol.control.FullScreen();
var controls = [
  bigScreen
];
var map = new ol.Map({
  controls: controls,
  layers: [
    // imagery,
    // mapbox,
    stamen,
    // new ol.layer.Tile({
    //   source: new ol.source.XYZ({
    //     url: 'http://maps.nypl.org/warper/maps/tile/29733/{z}/{x}/{y}.png'
    //     // url: 'http://maps.nypl.org/warper/maps/tile/29561/{z}/{x}/{y}.png'
    //     // url: 'http://maps.nypl.org/warper/maps/tile/11626/{z}/{x}/{y}.png'
    //     // url: 'http://maps.nypl.org/warper/maps/tile/29234/{z}/{x}/{y}.png'
    //     // url: 'http://maps.nypl.org/warper/maps/tile/27469/{z}/{x}/{y}.png'
    //     // url: 'http://maps.nypl.org/warper/maps/tile/8353/{z}/{x}/{y}.png'
    //   }),
    //   opacity: .9,
    //   wrapX: false
    // }),
    vectorLayer,
    // heatLayer,
    firesLayer
  ],
  target: 'map',
  view: new ol.View({
    center: [-12753260.184760537, 4948659.629345282],
    // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326', 'EPSG:3857'),
    zoom: 6.65,
    extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
  })
});

