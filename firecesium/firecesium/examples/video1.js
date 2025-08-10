var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';


var mapboxDark = new ol.layer.Tile({
  title: 'MapBox Dark',
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="http://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    url: 'https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + mapboxToken
  }),
  wrapX: false
});

var mapboxLight = new ol.layer.Tile({
  title: 'MapBox Light',
  source: new ol.source.XYZ({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
                  '© <a href="http://www.openstreetmap.org/copyright">' +
                  'OpenStreetMap contributors</a>',
    crossOrigin: 'anonymous',
    url: 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=' + mapboxToken
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
  // mapboxDark,
  mapboxLight
];

var overallView = new ol.View();

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
  bigScreen
];

var map = new ol.Map({
    controls: controls,
    layers: layers,
    target: 'map',
    view: overallView
});

