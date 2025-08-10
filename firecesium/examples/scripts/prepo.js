var geo = {
	"type": "FeatureCollection",
	"features": []
}



var locs = [
  {
    "name":"Cart Creek",
    "lat":40.884722,
    "lon":-109.416944,
    "id":420805,
    "highest":104,
    "p97":87,
    "p90":81,
    "p80":74,
    "p70":68,
    "p50":58
  },
  {
    "name":"Catfish",
    "lat":44.326111,
    "lon":-117.169444,
    "id":101402,
    "highest":105,
    "p97":98,
    "p90":93,
    "p80":89,
    "p70":84,
    "p50":73
  }
]

var names = [
  '2016 NUC PREPOSITION/STAGING',
  '2016 EIC GBCC PREPOSITION/STAGING',
  '2016 SCC PREPOSITION/STAGING',
  '2016 UBC PREPOSITION/STAGING',
  '2016 NV-EIC GBCC PREPOSITION/STAGING',
  '2016 ECC GBCC PREPOSITION',
  '2016 CNC PREPOSITION/STAGING',
  '2016 BDC PREPOSITION/STAGING',
  '2016 SALT LAKE CITY MOBILIZATION CENTER',
  '2016 PAC PREPOSITION/STAGING',
  '2016 CDC PREPOSITION/STAGING',
  '2016 MFC PREPO/STAGING',
  '2016 SFC PREPOSITION/STAGING',
  '2016 RFC PREPO/STAGING',
  '2016 ECC GBCC PREPOSITION',

]

var newNames = names.reduce(function(p,c,i) {
  var prepo = {
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": []},
    "properties": {
      "name": "",
    }   
  }
  prepo["properties"]["name"] = c;
  p.push(prepo);
  return p;
}, geo["features"]);
console.log(JSON.stringify(geo))

// var converted = raws.reduce(function(prev, curr, j) {
//   var point = {
//     "type": "Feature",
//     "geometry": {"type": "Point", "coordinates": []},
//     "properties": {
//       "name": "",
//       "id": "",
//       "highest": "",
//       "p97": "",
//       "p90": "",
//       "p80": "",
//       "p70": "",
//       "p50": ""
//     }
//   }

// 	// var point =	{
// 	// 	"type": "Feature",
// 	// 	"geometry": {"type": "Point", "coordinates": [curr["lon"],curr["lat"]]},
// 	// 	"properties": {
// 	// 		"name": curr["name"],
// 	// 		"id": curr["id"],
// 	// 		"highest": curr["highest"],
// 	// 		"p97": curr["p97"],
// 	// 		"p90": curr["p90"],
// 	// 		"p80": curr["p80"],
// 	// 		"p70": curr["p70"],
// 	// 		"p50": curr["p50"]
// 	// 	}
// 	// }	
//   point["geometry"]["coordinates"][0] = curr["lon"]
// 	point["geometry"]["coordinates"] = [curr["lon"],curr["lat"]];
// 	point["properties"]["name"] = curr["name"];
// 	point["properties"]["id"] = curr["id"];
// 	point["properties"]["highest"] = curr["highest"];
// 	point["properties"]["p97"] = curr["p97"];
// 	point["properties"]["p90"] = curr["p90"];
// 	point["properties"]["p80"] = curr["p80"];
// 	point["properties"]["p70"] = curr["p70"];
// 	point["properties"]["p50"] = curr["p50"];
// 	prev.push(point);
// 	return prev;
// }, geo["features"]);
// console.log(JSON.stringify(converted));

// var lon = [];
// var lat = [];
// var dog = [];
// var id = [];
// var highest = [];
// var p97 = [];
// var p90 = [];
// var p80 = [];
// var p70 = [];
// var p50 = [];
// var forExcel = {lon, lat, dog, id, highest, p97, p90, p80, p70, p50}

// var forLon = raws.reduce(function(prev, curr, j) {
//   prev["lon"].push(curr["lon"]);
//   prev["lat"].push(curr["lat"]);
//   prev["dog"].push(curr["name"]);
//   prev["id"].push(curr["id"]);
//   prev["highest"].push(curr["highest"]);
//   prev["p97"].push(curr["p97"]);
//   prev["p90"].push(curr["p90"]);
//   prev["p80"].push(curr["p80"]);
//   prev["p70"].push(curr["p70"]);
//   prev["p50"].push(curr["p50"]);
//   return prev;
// }, forExcel);

// console.log(JSON.stringify(forExcel));
// var dog = [[0,0], [1,1], [2,2]];
// var y = dog.reduce(function(prev,curr,i) {
//   return curr.map(function (c,j) {
//     return c + prev[j];
//   })
// }, dog[0]); 
// console.log(y);
// var rh = document.getElementById('rh');
// var dog = [{data:[1,1,1]},{data:[2,2,2]},{data:[3,3,3]}]

// var y = dog.reduce(function(prev,curr,i) {
//   console.log(curr["data"][1]);
//   return curr["data"].map(function (c,j) {
//     if (j=2) {console.log(c+prev[2])}
//     return c + prev[j];
//   })
// }, dog[0]["data"]).map(z => {return z/dog.length}); 
// console.log(y);
// var x = [{data:[2,2,2]},{data:[2,2,2]},{data:[2,2,2]},{data:[2,2,2]},{data:[2,2,2]},{data:[2,2,2]},{data:[2,2,2]},{data:[2,2,2]}]
// var b = [0,1,2,3,4,5,6,7]
// var init = Array(8).fill(0);
// var avgRh = x.reduce((prev,curr,i) => {
//   b[i] = curr["data"][2];
//   console.log(b);
//   return curr["data"].map((c,j) => {
//     if (j = 2) {console.log(c+prev[2])}
//     return c + prev[j];
//   })
// },init)
// .map(z => {return z / x.length});

// b.reduce((p,c) => {return c + p});
// console.log(avgRh[2]);