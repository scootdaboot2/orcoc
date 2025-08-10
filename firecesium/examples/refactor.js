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

var opacity = function(acres){ 
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
    referer: 'localhost:8080',
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
      +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
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

addVectorLayerSource(IRWIN, nfObject, newFiresLayer)
  .then(loadSource, noToken);
addVectorLayerSource(IRWIN, ofObject, ongoingFiresLayer)
  .then(loadSource, noToken);
addVectorLayerSource(IRWIN, rxfObject, rxFiresLayer)
  .then(loadSource, noToken);

 


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
];

var layers = [
  new ol.layer.Tile({
    source: new ol.source.OSM(),
     wrapX: false
  }),
  rxFiresLayer,
  ongoingFiresLayer,
  newFiresLayer
]

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
  layers: [rxFiresLayer, ongoingFires newFiresLayer],
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
    
  ],
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(0,0,255, 1)',
      width: 4
    })
  })
});
map.addInteraction(selectClick);

selectClick.on('select', function(e) {
  var feature = e.selected[0];
  if (feature) {
    var polygon = (feature.getGeometry());// @type {ol.geom.SimpleGeometry 
    var size = (map.getSize()); // @type {ol.Size} 
    var aa = polygon.getExtent();
    var oo = ol.extent.getCenter(aa);
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
        center: [-12753260.184760537, 4948659.629345282],
        zoom: 5.55,
        minZoom: 5,
        maxZoom: 9.8,
      })
    );
  } 
});

map.updateSize();
