// Styles for the mapbox-streets-v6 vector tile data set. Loosely based on
// http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6.json

function createMapboxStreetsV6Style() {
  var fill = new ol.style.Fill({color: ''});
  var stroke = new ol.style.Stroke({color: '', width: 1});
  var polygon = new ol.style.Style({fill: fill});
  var strokedPolygon = new ol.style.Style({fill: fill, stroke: stroke});
  var line = new ol.style.Style({stroke: stroke});
  var text = new ol.style.Style({text: new ol.style.Text({
    text: '', fill: fill, stroke: stroke
  })});
  var iconCache = {};
  function getIcon(iconName) {
    var icon = iconCache[iconName];
    if (!icon) {
      icon = new ol.style.Style({image: new ol.style.Icon({
        src: 'https://cdn.rawgit.com/mapbox/maki/master/icons/' + iconName + '-15.svg',
        imgSize: [15, 15]
      })});
      iconCache[iconName] = icon;
    }
    return icon;
  }
  var styles = [];
  return function(feature, resolution) {
    var length = 0;
    var layer = feature.get('layer');
    var cls = feature.get('class');
    var type = feature.get('type');
    var scalerank = feature.get('scalerank');
    var labelrank = feature.get('labelrank');
    var adminLevel = feature.get('admin_level');
    var maritime = feature.get('maritime');
    var disputed = feature.get('disputed');
    var maki = feature.get('maki');
    var geom = feature.getGeometry().getType();
    if (layer == 'landuse' && cls == 'park') {
      fill.setColor('#d8e8c8');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'cemetery') {
      fill.setColor('#e0e4dd');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'hospital') {
      fill.setColor('#fde');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'school') {
      fill.setColor('#f0e8f8');
      styles[length++] = polygon;
    } else if (layer == 'landuse' && cls == 'wood') {
      fill.setColor('rgb(233,238,223)');
      styles[length++] = polygon;
    } else if (layer == 'waterway' &&
        cls != 'river' && cls != 'stream' && cls != 'canal') {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'waterway' && cls == 'river') {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'waterway' && (cls == 'stream' ||
        cls == 'canal')) {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'water') {
      fill.setColor('#a0c8f0');
      styles[length++] = polygon;
    } else if (layer == 'aeroway' && geom == 'Polygon') {
      fill.setColor('rgb(242,239,235)');
      styles[length++] = polygon;
    } else if (layer == 'aeroway' && geom == 'LineString' &&
        resolution <= 76.43702828517625) {
      stroke.setColor('#f0ede9');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'building') {
      fill.setColor('#f2eae2');
      stroke.setColor('#dfdbd7');
      stroke.setWidth(1);
      styles[length++] = strokedPolygon;
    } else if (layer == 'tunnel' && cls == 'motorway_link') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'service') {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' &&
        (cls == 'street' || cls == 'street_limited')) {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'main' &&
        resolution <= 1222.99245256282) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'motorway') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'path') {
      stroke.setColor('#cba');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'tunnel' && cls == 'major_rail') {
      stroke.setColor('#bbb');
      stroke.setWidth(2);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'motorway_link') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && (cls == 'street' ||
        cls == 'street_limited') && geom == 'LineString') {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'main' &&
        resolution <= 1222.99245256282) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'motorway' &&
        resolution <= 4891.96981025128) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'path') {
      stroke.setColor('#cba');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'road' && cls == 'major_rail') {
      stroke.setColor('#bbb');
      stroke.setWidth(2);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'motorway_link') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'motorway') {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'service') {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' &&
        (cls == 'street' || cls == 'street_limited')) {
      stroke.setColor('#cfcdca');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'main' &&
        resolution <= 1222.99245256282) {
      stroke.setColor('#e9ac77');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'path') {
      stroke.setColor('#cba');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'bridge' && cls == 'major_rail') {
      stroke.setColor('#bbb');
      stroke.setWidth(2);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel >= 3 && maritime === 0) {
      stroke.setColor('#9e9cab');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel == 2 &&
        disputed === 0 && maritime === 0) {
      stroke.setColor('#9e9cab');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel == 2 &&
        disputed === 1 && maritime === 0) {
      stroke.setColor('#9e9cab');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel >= 3 && maritime === 1) {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'admin' && adminLevel == 2 && maritime === 1) {
      stroke.setColor('#a0c8f0');
      stroke.setWidth(1);
      styles[length++] = line;
    } else if (layer == 'country_label' && scalerank === 1) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'country_label' && scalerank === 2 &&
        resolution <= 19567.87924100512) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 10px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'country_label' && scalerank === 3 &&
        resolution <= 9783.93962050256) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 9px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'country_label' && scalerank === 4 &&
        resolution <= 4891.96981025128) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 8px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#334');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(2);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 1 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          'italic 11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 2 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          'italic 11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 3 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          'italic 10px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'marine_label' && labelrank === 4 &&
        geom == 'Point') {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont(
          'italic 9px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#74aee9');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' && type == 'city' &&
        resolution <= 1222.99245256282) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('11px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#333');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' && type == 'town' &&
        resolution <= 305.748113140705) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('9px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#333');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' && type == 'village' &&
        resolution <= 38.21851414258813) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('8px "Open Sans", "Arial Unicode MS"');
      fill.setColor('#333');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'place_label' &&
        resolution <= 19.109257071294063 && (type == 'hamlet' ||
        type == 'suburb' || type == 'neighbourhood')) {
      text.getText().setText(feature.get('name_en'));
      text.getText().setFont('bold 9px "Arial Narrow"');
      fill.setColor('#633');
      stroke.setColor('rgba(255,255,255,0.8)');
      stroke.setWidth(1);
      styles[length++] = text;
    } else if (layer == 'poi_label' && resolution <= 19.109257071294063 &&
        scalerank == 1 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 9.554628535647032 &&
        scalerank == 2 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 4.777314267823516 &&
        scalerank == 3 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 2.388657133911758 &&
        scalerank == 4 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    } else if (layer == 'poi_label' && resolution <= 1.194328566955879 &&
        scalerank >= 5 && maki !== 'marker') {
      styles[length++] = getIcon(maki);
    }
    styles.length = length;
    return styles;
  };
}
var key = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';

// For how many zoom levels do we want to use the same vector tiles?
// 1 means "use tiles from all zoom levels". 2 means "use the same tiles for 2
// subsequent zoom levels".
var reuseZoomLevels = 2;

// Offset of loaded tiles from web mercator zoom level 0.
// 0 means "At map zoom level 0, use tiles from zoom level 0". 1 means "At map
// zoom level 0, use tiles from zoom level 1".
var zoomOffset = 1;

// Calculation of tile urls
var resolutions = [];
for (var z = zoomOffset / reuseZoomLevels; z <= 22 / reuseZoomLevels; ++z) {
  resolutions.push(156543.03392804097 / Math.pow(2, z * reuseZoomLevels));
}
function tileUrlFunction(tileCoord) {
  return ('http://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
      '{z}/{x}/{y}.vector.pbf?access_token=' + key)
      .replace('{z}', String(tileCoord[0] * reuseZoomLevels + zoomOffset))
      .replace('{x}', String(tileCoord[1]))
      .replace('{y}', String(-tileCoord[2] - 1))
      .replace('{a-d}', 'abcd'.substr(
          ((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1));
}
var mapbox = new ol.layer.VectorTile({
  renderMode: 'vector',
  preload: Infinity,
  source: new ol.source.VectorTile({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
      '© <a href="http://www.openstreetmap.org/copyright">' +
      'OpenStreetMap contributors</a>',
    format: new ol.format.MVT(),
    tileGrid: new ol.tilegrid.TileGrid({
      extent: ol.proj.get('EPSG:3857').getExtent(),
      resolutions: resolutions
    }),
    tilePixelRatio: 16,
    tileUrlFunction: tileUrlFunction
  }),
  style: createMapboxStreetsV6Style()
})

// ol.style.Fill, ol.style.Icon, ol.style.Stroke, ol.style.Style and
// ol.style.Text are required for createMapboxStreetsV6Style()
var bingkey = 'Al2oBjQ_opovK7NsjQhkWaPvCOJMm0fHal4-iW0JOj8IuMft5kpLVX_Ok7vriTzn';
// var mapboxToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNpb2huaWtuNDAwNnF1NW0xNWFhYXJiM20ifQ.-c3uBsqfQoJgd3gG4TbNLw#0/0/0/0';

// var mapbox = new ol.layer.Tile({
//   title: 'mapbox satellite-streets-v9',
//   type: 'base',
//   source: new ol.source.XYZ({
//     attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
//                   '© <a href="http://www.openstreetmap.org/copyright">' +
//                   'OpenStreetMap contributors</a>',
//     crossOrigin: 'anonymous',
//     // tileSize: [512, 512],
//     // url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/{z}/{x}/{y}?access_token=' + mapboxToken
//     url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=' + mapboxToken
//   }),
//   wrapX: false,
//   visible: true
// });


var imagery = new ol.layer.Tile({
  title: 'Bing Aerial',
  source: new ol.source.BingMaps({
    key: bingkey,
    imagerySet: 'Aerial'
  })
});
var gg2sm = ol.proj.getTransform('EPSG:4326', 'EPSG:3857');

// pulled from video.json
// TODO: figure out why it doesn't transform quite right when using bing maps api
var corners = [
  [-122.51596391201019, 37.56238816766053],
  [-122.51467645168304, 37.56410183312965],
  [-122.51309394836426, 37.563391708549425],
  [-122.51423120498657, 37.56161849366671],
].map(function(c) {return gg2sm(c);});

var line = new ol.geom.LineString(corners);
var extent = line.getExtent();

var view = new ol.View();
var map = new ol.Map({
  // TODO: translate, rotate
  interactions: ol.interaction.defaults({altShiftDragRotate: false}),
  layers: [
    // mapbox,
    imagery,
  ],
  target: 'map',
  view: view
});

var map2 = new ol.Map({
  // TODO: translate, rotate
  interactions: ol.interaction.defaults({altShiftDragRotate: false}),
  layers: [
    // mapbox,
    // imagery,
  ],
  // target: 'map2',
  view: map.getView()
})
view.fit(extent, map.getSize());

var urls = [
  // 'data/video/drone.mp4',
  'data/video/drone.webm'
];
var video = document.createElement('video');
// video.crossOrigin = 'Anonymous';

for (var i = 0; i < urls.length; i++) {
  var source = document.createElement('source');
  source.src = urls[i];
  video.appendChild(source);
}

// TODO: add some video controls
if (typeof video.loop == 'boolean') {
  video.loop = true;
} else {
  video.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
video.play();


// TODO: unhack this - create a proper video source
var topLeft = corners[0];
var topRight = corners[1];
var bottomRight = corners[2];
var height = topRight[1] - bottomRight[1];
var width = topRight[0] - topLeft[0];
var dx = width;
var dy = topLeft[1] - topRight[1];

var rotation = Math.atan2(dy, dx);
mapbox.on('postcompose', function(event) {

  var frameState = event.frameState;
  var resolution = frameState.viewState.resolution;
  var origin = map.getPixelFromCoordinate(topLeft);

  var context = event.context;
  context.save();

  context.scale(frameState.pixelRatio, frameState.pixelRatio);
  context.translate(origin[0], origin[1]);
  context.rotate(rotation);
  context.drawImage(video, 0, 0, dx / resolution, height / resolution);

  context.restore();
});
// render video on every render frame
imagery.on('postcompose', function(event) {

  var frameState = event.frameState;
  var resolution = frameState.viewState.resolution;
  var origin = map.getPixelFromCoordinate(topLeft);

  var context = event.context;
  context.save();

  context.scale(frameState.pixelRatio, frameState.pixelRatio);
  context.translate(origin[0], origin[1]);
  context.rotate(rotation);
  context.drawImage(video, 0, 0, dx / resolution, height / resolution);

  context.restore();
});

// TODO: add a nice playback control
setInterval(function() {
  map.render();
}, 1000 / 30);
setInterval(function() {
  map2.render();
}, 1000 / 30);