/* 
*
* Functions to display fire camera images
*
*
*/
function getThumbURL(feature) {

	var stamp = (new Date).getTime();
	var thumbUrl = "http://myers.seismo.unr.edu/firecams/images/"+feature.properties.id+"-small.jpg?lastmodified="+stamp;
	
	return thumbUrl;
}

function getImageURL(feature) {

	var stamp = (new Date).getTime();
	//var imgUrl = "http://myers.seismo.unr.edu/firecams/images/"+feature.properties.id+".jpg?lastmodified="+stamp;
	var imgUrl = "http://myers.seismo.unr.edu:8095/vulcan/v0/camera/"+feature.properties.id+"/image?lastmodified="+stamp;
	
	return imgUrl;
}

function changeView(img) {

	currentIP = img.title;

	var camList = camGJ.features;
	for (i=0; i < camList.length; i++) {
		if (img.id == camList[i].properties.id){
			var center = L.latLng(camList[i].geometry.coordinates[1], camList[i].geometry.coordinates[0]);
			//map.setView(center, 10);
			map.setView(center);
			currentIndex = i;
			pauseCurrentImg = 0;
			image_map.contextmenu.removeAllItems();
			image_map.contextmenu.addItem({ text: 'Camera Options', disabled:true });
			image_map.contextmenu.addItem({ separator:true});
			image_map.contextmenu.addItem({ text: '15min Time Lapse', callback:function(){ startMjpgTimeLapse(.25);}});
			image_map.contextmenu.addItem({ separator:true});
			image_map.contextmenu.addItem({ text: '1hr Time Lapse', callback:function(){ startMjpgTimeLapse(1);}});
			image_map.contextmenu.addItem({ separator:true});
			image_map.contextmenu.addItem({ text: '6hr Time Lapse', callback:function(){ startMjpgTimeLapse(6);}});
			image_map.contextmenu.addItem({ separator:true});
			image_map.contextmenu.addItem({ text: '12hr Time Lapse', callback:function(){ startMjpgTimeLapse(12);}});
			imgLayer.setUrl(getImageURL(camList[i]));
			fovLayer.setLatLngs(getFOVPolygon(camList[i]));
		}
	}
}

function getRandomIntInclusive(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(min + ','+ max + ',' + num);
  return num;
}

function loadCameraImages() {
	var cameraIP    = camList[currentIndex].properties.ip;
	currentIP       = cameraIP;

	/* Loop through for thumbnails */
	for (i=0; i < camList.length; i++) {
		var cameraIP = camList[i].properties.ip;
		var thumbUrl = getThumbURL(camList[i]);
		
		var thumbDiv = document.createElement("div");
		thumbDiv.setAttribute("class", "thumbNail");

		var caption = document.createElement("p");
		caption.setAttribute("class", "camLabel");
		caption.setAttribute("id", camList[i].properties.id + "-label");
		caption.innerHTML = camList[i].properties.name;
		
		var thumb = document.createElement("img");
		thumb.setAttribute("class", "camShot");
		thumb.setAttribute("id", camList[i].properties.id);
		thumb.setAttribute("title", camList[i].properties.ip);
		thumb.setAttribute("width", thumbSize.width);
		thumb.setAttribute("height", thumbSize.height);
		thumb.setAttribute("src", thumbUrl);
		thumb.onclick=function() {
			changeView(this);
			return true;
		};
		thumbDiv.appendChild(thumb);
		thumbDiv.appendChild(caption);
		bigThumbsDiv.appendChild(thumbDiv);
		
	}
}

function updateCameras() {

	for (i=0; i < camList.length; i++) {

		var feature  = camList[i];
		var imgUrl   = getImageURL(feature);
		if (currentIP == feature.properties.ip) {

			if (! pauseCurrentImg)
			{
				imgLayer.setUrl(imgUrl);
			}
		}

		var thumbUrl = getThumbURL(feature);
		var thumb = document.getElementById(feature.properties.id);
		thumb.setAttribute("src", thumbUrl);
	}
	//setTimeout(function() {updateCameras();}, 1000);
}

function tweetAlert() {
	// Button press function for tweeting camera notice

	// Screen size for new tweet window
	var screen = window.screen;
	var h = 400;
	var w = 800;
	var t = 0 + screen.height/2 - h/2;
	var l = 0 + screen.width/2 - w/2;

	// Settings like via account and hashtags based on which camera
	var cam = camList[currentIndex].properties;
	var u;
	var ht = cam.id.replace(/-/g, '');
	if (cam.attribution == "BLM") {
		u = 'nvfirecams';
		ht += ',AlertBasin,blmnv';
	} else if (cam.attribution == "Alert") {
		u = 'NVSeismoLab';
		ht += ',AlertTahoe';
	} else {
		u = 'NVSeismoLab';
	}
	msg = escape("Possible fire on camera");
	url = "https://twitter.com/intent/tweet?via="+u+"&hashtags="+ht+"&text="+msg;
	winSettings = 'top='+t+',left='+l+',height='+h+',width='+w+',toolbar=0,location=0,menubar=0';
	window.open(url, "_blank", winSettings);
}

/* 
*
*
*  Functions to display map locations, markers, and azimuths
*
*
*
*/

	/* Rotated marker object */
L.RotatedMarker = L.Marker.extend(
{
	options: { angle: 0 },
	_setPos: function(pos) {
		L.Marker.prototype._setPos.call(this, pos);
		if (L.DomUtil.TRANSFORM) {
			/* use the CSS transform rule if available */
			this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
		} else if (L.Browser.ie) {
			/* fallback for IE6, IE7, IE8 */
			var rad = this.options.angle * L.LatLng.DEG_TO_RAD,
			costheta = Math.cos(rad),
			sintheta = Math.sin(rad);
			this._icon.style.filter += ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=' + costheta + ', M12=' + (-sintheta) + ', M21=' + sintheta + ', M22=' + costheta + ')';
		}
	}	
});

function getCameras()
{
	var camUrl = "http://myers.seismo.unr.edu/firecams/proxy/getptz?get=1&attribution=BLM";
	var request = new XMLHttpRequest();

		// async=true will have to test for response status to work
	//request.open("GET", camUrl, true);
		// async=false easier for dev
	request.open("GET", camUrl, false);
	request.send(null);

	var json = JSON.parse(request.responseText);

	return json;
}

function getLtg()
{
	var ltgUrl = "http://myers.seismo.unr.edu/firecams/proxy/lightning/events?days=5";
	var request = new XMLHttpRequest();

		// async=true will have to test for response status to work
	//request.open("GET", ptzUrl, true);
		// async=false easier for dev
	request.open("GET", ltgUrl, false);
	request.send(null);

	var json = JSON.parse(request.responseText);

	return json;
}

function showCoordinates(e)
{
	var y = e.latlng.lat;
	var x = e.latlng.lng;
	var point = image_map.project([x,y], image_map.getMaxZoom()-1);
	console.log(point.x.toString() + ','+point.y.toString());
}

function replay(length)
{
	var stamp = (new Date).getTime();

	var id = camList[currentIndex].properties.id;
	var Url = 'http://myers.seismo.unr.edu/firecams/proxy/test/timelapse?hour='+length+'&id='+id+'&lastmodified='+stamp;
	imgLayer.setUrl(Url);
}

function startMjpgTimeLapse(length)
{
	var id = camList[currentIndex].properties.id;
	var Url = 'http://myers.seismo.unr.edu/firecams/proxy/test/timelapse?hour='+length+'&id='+id;
	pauseCurrentImg = 1;
	imgLayer.setUrl(Url);

	image_map.contextmenu.removeAllItems();
	image_map.contextmenu.addItem({text: id, disabled:true});
	image_map.contextmenu.addItem({ text: 'Camera Options', disabled:true});
	image_map.contextmenu.addItem({ separator:true});
	image_map.contextmenu.addItem({text: 'Play Again', callback:function(){ startMjpgTimeLapse(length);}});
	image_map.contextmenu.addItem({text: 'Resume Feed', callback:stopTimeLapse});
}

function stopTimeLapse(e)
{
	pauseCurrentImg = 0;

	image_map.contextmenu.removeAllItems();
	image_map.contextmenu.addItem({ text: 'Camera Options', disabled:true });
	image_map.contextmenu.addItem({ separator:true});
	image_map.contextmenu.addItem({ text: '15min Time Lapse', callback:function(){ startMjpgTimeLapse(.25);}});
	image_map.contextmenu.addItem({ separator:true});
	image_map.contextmenu.addItem({ text: '1hr Time Lapse', callback:function(){ startMjpgTimeLapse(1);}});
	image_map.contextmenu.addItem({ separator:true});
	image_map.contextmenu.addItem({ text: '6hr Time Lapse', callback:function(){ startMjpgTimeLapse(6);}});
	image_map.contextmenu.addItem({ separator:true});
	image_map.contextmenu.addItem({ text: '12hr Time Lapse', callback:function(){ startMjpgTimeLapse(12);}});
}

function getTargetLines()
{
	var f = camGJ.features;
	var targetLines = [];

	for (var i=0; i < f.length; i++)
	{
		if (typeof f[i].properties.fov_center != 'undefined')
		{
			var coord = f[i].geometry.coordinates;
			var source = L.latLng(coord[1],coord[0]);
			var target = L.latLng(f[i].properties.fov_center[1],f[i].properties.fov_center[0]);
			var polyline = [source,target];

			targetLines.push(polyline);
		}
	}
	return targetLines;
}

function getFOVPolygon(f)
{
	var fovPolygons = [];
	//console.log(f.properties);

	if (typeof f.properties.fov_lft != 'undefined')
	{
		var coord   = f.geometry.coordinates;
		var source  = L.latLng(coord[1],coord[0]);
		var fov_lft = L.latLng(f.properties.fov_lft[1],f.properties.fov_lft[0]);
		var fov_rt  = L.latLng(f.properties.fov_rt[1],f.properties.fov_rt[0]);
		var polygon = [source,fov_lft,fov_rt];

		fovPolygons.push(polygon);
	}
	return fovPolygons;
}

function getFOVPolygons()
{
	var f = camGJ.features;
	var fovPolygons = [];
	//console.log(camGJ);

	for (var i=0; i < f.length; i++)
	{
		if (typeof f[i].properties.fov_lft != 'undefined')
		{
			var coord   = f[i].geometry.coordinates;
			var source  = L.latLng(coord[1],coord[0]);
			var fov_lft = L.latLng(f[i].properties.fov_lft[1],f[i].properties.fov_lft[0]);
			var fov_rt  = L.latLng(f[i].properties.fov_rt[1],f[i].properties.fov_rt[0]);
			var polygon = [source,fov_lft,fov_rt];

			fovPolygons.push(polygon);
		}
	}
	return fovPolygons;
}

function addRotatingMarker(feature,latlng)
{
	return new L.RotatedMarker(latlng, {
		icon: L.icon( {
			iconUrl: 'http://earth.google.com/images/kml-icons/track-directional/track-0.png',
			iconSize: [48, 48],
		}),
		draggable: false,
		angle: feature.properties.az_current
	});
}

function addLtgMarker(feature,latlng)
{
	var icon;
	if (feature.properties.sgnl > 0) {
		icon = 'https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle.png';
	} else {
		icon = 'https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png';
	}

	return new L.Marker(latlng, {
		icon: L.icon( {
			iconUrl: icon,
			iconSize: [8, 8],
		}),
		draggable: false
	});
}

function addCamPopup(feature, layer) {
	pop = "<b>"+ feature.properties.id +"</b><br>Target: " + Math.round(feature.properties.az_current) + " degrees<br>"+"</b>FOV: " + feature.properties.fov + " degrees<br>"+ feature.properties.name;
	layer.bindPopup(pop);
}

function addLtgPopup(feature, layer) {
	var polarity;
	if (feature.properties.sgnl < 0)
		polarity = "Negative";
	if (feature.properties.sgnl > 0)
		polarity = "Positive";

	pop = "<b>Lightning Strike" +"</b><br>Time UTC: " +  feature.properties.time + "<br>Polarity: " + polarity + " to ground<br>Strength: " +  feature.properties.sgnl;

	layer.bindPopup(pop);
}

	// Extract [x,y] from GeoJSON points
function getJSONpoints(geojson) {

	var latlngs = [];
	for(i=0; i<geojson.features.length; i++)
	{
		var f = geojson.features[i];
		var coord = f.geometry.coordinates;  // sub altitude for sgnl strength
		var latlong;
		if (typeof f.properties.sgnl != 'undefined')
			latlong = [coord[1], coord[0], Math.abs(f.properties.sgnl)];
		else
			latlong = [coord[1], coord[0]];

		latlngs.push(latlong);
	}
	return (latlngs);
}

/*
*
* main
*
*/
	// get the cameras GeoJSON object
var camGJ   = getCameras();
var camList = camGJ.features;

	// get the lightning GeoJSON object
var ltgGJ   = getLtg();
var ltgList = ltgGJ.features;

	// Image globals
var thumbSize     = {"width":260, "height":135};
var currentSize   = {"width":960, "height":540};
var currentImgID  = "currentShot";
var currentLabID  = "currentCamLabel";
var currentLinkID = "current-link";
var currentCamDiv = document.getElementById("camera-block");
var bigThumbsDiv  = document.getElementById("thumbnail-block");

	// Map globals
var currentIP;
var currentIndex = getRandomIntInclusive(0, ((camList.length)-1));
//var currentIndex  = 0;
//var tileType = 'map'; // 'map' for meta, 'sat' for aerial
//var tileSrvUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/'+tileType+'/{z}/{x}/{y}.png'; // mapquest
var subDomains = ['otile1','otile2','otile3','otile4'];
//var tileSrvAttribution = 'Map data &copy; 2014 OpenStreetMap contributors, Imagery &copy; 2014 MapQuest';

//var tileSrvUrl = 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'; // carto light
//var tileSrvAttribution = "Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.";

var tileSrvUrl = 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg';
var tileSrvAttribution = 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.';


	// Functionality globals
var pauseCurrentImg = 0;

//
// set up the camera block
//
var image_map = new L.map('camera-block',
{
	contextmenu: true,
	contextmenuWidth: 140,
	contextmenuItems:
	[
		{ text: 'Camera Options', disabled:true },'-',
		{ text: '15min Time Lapse', callback:function(){ startMjpgTimeLapse(.25);}}, '-',
		{ text: '1hr Time Lapse', callback:function(){ startMjpgTimeLapse(1);}}, '-',
		{ text: '6hr Time Lapse', callback:function(){ startMjpgTimeLapse(6);}}, '-',
		{ text: '12hr Time Lapse', callback:function(){ startMjpgTimeLapse(12);}}
		//, '-',{ text: 'Show Coordinates', callback:showCoordinates}
	],
	minZoom: 3,
	maxZoom: 5,
	center: [0, 0],
	zoom: 1,
	attributionControl:false,
	crs: L.CRS.Simple
}).setView([0.0, 0.0], 3);
 
	// calculate the edges of the image, in coordinate space
var southWest = image_map.unproject([0, currentSize.height], image_map.getMaxZoom()-2);
var northEast = image_map.unproject([currentSize.width, 0], image_map.getMaxZoom()-2);
var bounds = new L.LatLngBounds(southWest, northEast);

	// add the image overlay, 
	// so that it covers the entire map
image_map.setMaxBounds(bounds);

var Url = getImageURL(camList[currentIndex]);
var imgLayer     = new L.imageOverlay(Url, bounds,{id:'realtime'}).addTo(image_map);
var camera_group = new L.LayerGroup().addTo(image_map);

//
// Draw thumbnail divs with labels
//
loadCameraImages();

//
// set up the map block
//
	// Create the map and add markers and GeoJSON layers
var map = new L.map('map-block',
{
contextmenu: false,
contextmenuWidth: 140,
contextmenuItems:
[
	//{ text: 'Show Coordinates', },'-',
	{ text: 'Camera Controls', disabled:true }
]
}
).setView([39.69, -116.367], 7);

	// create the basemap layer
var baselayer = new L.TileLayer(tileSrvUrl, {
		maxZoom: 18, 
		subdomains: subDomains,
		unloadInvisibleTiles: true,
		updateWhenIdle: false,
		attribution: tileSrvAttribution
}).addTo(map);
	
	// create the initial camera marker layer
var stationLayer = new L.geoJson(camGJ, {
	pointToLayer: addRotatingMarker,
	onEachFeature: addCamPopup
}).addTo(map);

	// create the initial camera target layer
var targetPoints = getTargetLines();
var targetLayer = new L.multiPolyline(targetPoints, {
		clickable: true,
});

	// create the initial camera FOV layer
//var fovPoints = getFOVPolygons();
var fovPoints = getFOVPolygon(camList[currentIndex]);
var fovLayer = new L.multiPolygon(fovPoints, {
		clickable: false,
		lineJoin: 'round',
		stroke: false,
//});
}).addTo(map); 

	// create the initial lightning marker layer
var ltgLayer = new L.geoJson(ltgGJ, {
	pointToLayer: addLtgMarker,
	onEachFeature: addLtgPopup
}); 
//}).addTo(map); 

	// create the initial lightning heatmap layer
var heatPoints = getJSONpoints(ltgGJ);
var heatLayer = new L.heatLayer(heatPoints, {
	radius: 20
}).addTo(map);

	// layer visibility menu
var overlayMaps = {
    //"Lightning Strikes": ltgLayer,
    "Lightning Intensity": heatLayer,
    "Camera Targets": targetLayer,
    "Camera View Field": fovLayer,
};
L.control.layers(null,overlayMaps).addTo(map);


/* 
*
*
*  Events and other stuff
*
*
*
*/
	// update the map marker azimuth every 15000ms
window.setInterval(function() {

	updateCameras();

	var tmpGJ   = getCameras();
	var tmpList = tmpGJ.features;
	var camera_changed = 0;

	if (camList.length == tmpList.length)
	{
		for (var i=0; i < camList.length; i++) {

			if (camList[i].properties.az_current !== tmpList[i].properties.az_current)
			{
				console.log(camList[i].properties.name+': '+camList[i].properties.az_current + '->' + tmpList[i].properties.az_current);
				camList[i].properties.az_current = tmpList[i].properties.az_current;
				camera_changed = 1;
			} 
			if (camList[i].properties.zoom_current !== tmpList[i].properties.zoom_current)
			{
				camList[i].properties.zoom_current = tmpList[i].properties.zoom_current;
				camera_changed = 1;
			} 
		}

	} else {
		camera_changed = 1;
	}

	if (camera_changed)
	{
		camGJ = tmpGJ; 
		stationLayer.clearLayers();
		stationLayer.addData(camGJ);

		targetLayer.setLatLngs(getTargetLines());
		fovLayer.setLatLngs(getFOVPolygon(camGJ.features[currentIndex]));
	}

	ltgGJ = getLtg();
	ltgLayer.clearLayers();
	ltgLayer.addData(ltgGJ);

	heatPoints = getJSONpoints(ltgGJ);
	heatLayer.setLatLngs(heatPoints);

}, 15000);

	// right click for map coordinates
map.on('contextmenu', function(e) {
	var loc_popup = L.popup()
		.setLatLng(e.latlng)
		.setContent(e.latlng.lat.toFixed(3)+' , '+e.latlng.lng.toFixed(3))
		.openOn(map);
});
