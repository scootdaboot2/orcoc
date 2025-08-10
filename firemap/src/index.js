mapboxgl.accessToken = 'pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNra3liYXd2bzAyNnYybnBhYmxyeGI0cDMifQ.pWTRm3Z4hur3TLuv9Da25g';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/rtippetts/cjjin67io4a4b2spb037o7pv0', // style URL
center: [-110.0436328, 40.3314887], // starting position [lng, lat]
zoom: 7 // starting zoom
});


map.on('load', () => {
	map.addSource('ut-cdc', {
	type: 'geojson',
	// Use a URL for the value for the `data` property.
	data: './firemap/src/data/geojson/ut-cdc.geojson'
	});
 
	map.addLayer({
		'id': 'dispatch-boundary-layer',
		'type': 'fill',
		'source': 'ut-cdc',
		'layout': {},
			'paint': {
			'fill-color': '#3e4d3d', // blue color fill
			'fill-opacity': 0.4
		}
	})
})