

// var rxFiresStyleCache = {};
// var rxFiresStyleFunction = function(feature) {
//   var discovery = feature.get('FireDiscoveryDateTime');
//   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   var radius = (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres);
//   var style = rxFiresStyleCache[radius];
//   if (!style) {
//     style = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
//         radius: radius
//       })
//     });
//     rxFiresStyleCache[radius] = style;
//   }
//   return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? style : fireStyles['Point'];
// }
// var rxFiresLayer = new ol.layer.Vector({
//   title: 'Prescribed Fires',
//   source: new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url : "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//       + "&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad')" 
//       + " AND (CreatedOnDateTime >= " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
//       + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX') AND (IncidentTypeCategory <> 'FA')"
//       + " AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
//       + "&returnGeometry=true"
//       + "&spatialRel=esriSpatialRelIntersects"
//       + "&outFields=*"
//       + "&outSR=102100"
//       + "&token=" + irwin
//       // + "&token=" + irwinToken
//   }),
//   visible: true,
//   wrapX: false,
//   style: rxFiresStyleFunction
  // style: function(feature, resolution) {
  //   var discovery = feature.get('FireDiscoveryDateTime');
  //   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
    // var marker = new ol.style.Style({
    //   image: new ol.style.Circle({
    //     fill: new ol.style.Fill({
    //       color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
    //     }),
    //     stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
    //     radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
    //   })
    // });
    // return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? marker : fireStyles['Point'];
  // }
// });

// var newFiresStyleCache = {};
// var newFiresStyleFunction = function(feature) {
//   var discovery = feature.get('FireDiscoveryDateTime');
//   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   var style = newFiresStyleCache[acres];
//   if (!style) {
//     style = new ol.style.Style({
//       image: new ol.style.Circle({
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres),
//         fill: new ol.style.Fill({
//           color: 'rgba(232,14,14,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), 
//       })
//     });
//     newFiresStyleCache[acres] = style;
//   }
//   return (discovery >= (today - 1.5*86400000)) ? [newFiresStyleCache[acres]] : fireStyles['Point'];
// }
// var newFiresLayer = new ol.layer.Vector({
//   title: 'New Fires',
//   source: new ol.source.Vector({
//     // format: new ol.format.TopoJSON(),
//     // url: 'data/topojson/newFires.topojson'
//     // format: new ol.format.EsriJSON(),
//     format: new ol.format.GeoJSON(),
//     // https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'FA') AND (IncidentTypeCategory <> 'RX') AND (IsComplex = 'false') AND (CreatedOnDateTime >= 1466361489619)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=J-vUH-69cbgRwwuq7wPdgzHd75lZjDHKZigXYp0rTVM.
//     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//         +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.25*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
//         +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA') AND (UniqueFireIdentifier <> '2016-NVWID-020086')" 
//         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
//         // +"&token=" + irwinToken
//         +"&token=" + irwin
//   }),
//   visible: true,
//   wrapX: false,
//   style: newFiresStyleFunction
//   // style: function(feature, resolution) {
//   //   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   //   var discovery = feature.get('FireDiscoveryDateTime');
//   //   var marker = new ol.style.Style({
//   //     image: new ol.style.Circle({
//   //       fill: new ol.style.Fill({
//   //         // color: 'rgba(232,14,14,' + opacity(acres) + ')'

//   //         color: 'rgba(232,14,14,' + opacity(acres) + ')'
//   //       }),
//   //       stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), // rgba(254,32,171,1)
//   //       radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//   //     })
//   //   });
//   //   return (discovery >= (today - 1.5*86400000)) ? marker : fireStyles['Point'];
//   // }
// });
// var ongoingFiresStyleCache = {};
// var ongoingFiresStyleFunction = function(feature) {
//   var discovery = feature.get('FireDiscoveryDateTime');
//   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   var style = ongoingFiresStyleCache[acres];
//   if (!style) {
//     style = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(254,253,6,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 3}), // 'rgba(243,206,104,1)'
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     ongoingFiresStyleCache[acres] = style;
//   }
//   return (discovery > (today - 30*86400000) && discovery < (today - 1.25*86400000)) ? style : fireStyles['Point'];
// }
// var ongoingFiresLayer = new ol.layer.Vector({
//   title: 'Ongoing Fires',
//   source: new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//         +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FireOutDateTime IS NULL) AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
//         +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1') AND (UniqueFireIdentifier <> '2016-NVWID-020086')"
//         +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
//         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
//         +"&token=" + irwin
//         // +"&token=" + irwinToken
//   }),
//   visible: true,
//   wrapX: false,
//   style: ongoingFiresStyleFunction
//   // style: function(feature, resolution) {
//   //   var discovery = feature.get('FireDiscoveryDateTime');
//   //   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   //   var marker = new ol.style.Style({
//   //     image: new ol.style.Circle({
//   //       fill: new ol.style.Fill({
//   //         color: 'rgba(254,253,6,' + opacity(acres) + ')'
//   //       }),
//   //       stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 3}), // 'rgba(243,206,104,1)'
//   //       radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//   //     })
//   //   });
//   //   return (discovery > (today - 30*86400000) && discovery < (today - 1.25*86400000)) ? marker : fireStyles['Point'];
//   // }
// });
// var teamFiresStyleCache = {};
// var teamFiresStyleFunction = function(feature) {
//   var discovery = feature.get('FireDiscoveryDateTime');
//   var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//   var style = teamFiresStyleCache[acres];
//   if (!style) {
//     style = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(145,9,198,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(145,9,198,1)', width: 3}), 
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     teamFiresStyleCache[acres] = style;
//   }
//   return (discovery > (today - 30*86400000) && discovery < (today - 1.25*86400000)) ? style : fireStyles['Point'];
// }
// var teamFiresLayer = new ol.layer.Vector({
//   title: 'Team Fires',
//   source: new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
//         +"&where=(UniqueFireIdentifier = '2016-IDBOF-000539')"
//         // +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
//         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
//         +"&token=" + irwin
//   }),
//   visible: true,
//   wrapX: false,
//   style: teamFiresStyleFunction
// });


// var rxFiresLayer = new ol.layer.Vector({

//   style: function(feature, resolution) {
//     var discovery = feature.get('FireDiscoveryDateTime');
//     var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//     var marker = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(253,2,125,' + opacity(acres) + ')'//'rgba(2,253,200,.7)'
//         }),
//         stroke: new ol.style.Stroke({color: /*'rgba(253,2,125,1)'*/ 'fuchsia', width: 3}),
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     return (discovery >= (today - 365*86400000) && discovery < (today + 86400000)) ? marker : fireStyles['Point'];
//   }
// });

// var newFiresLayer = new ol.layer.Vector({

//   wrapX: false,
//   // style: fireStyles['Point']
//   style: function(feature, resolution) {
//     var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//     var discovery = feature.get('FireDiscoveryDateTime');
//     var marker = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           // color: 'rgba(232,14,14,' + opacity(acres) + ')'

//           color: 'rgba(232,14,14,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}), // rgba(254,32,171,1)
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     return (discovery >= (today - 1.5*86400000)) ? marker : fireStyles['Point'];
//   }
// });

// var ongoingFiresLayer = new ol.layer.Vector({

//   style: function(feature, resolution) {
//     var discovery = feature.get('FireDiscoveryDateTime');
//     var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
//     var marker = new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: 'rgba(254,253,6,' + opacity(acres) + ')'
//         }),
//         stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 3}), // 'rgba(243,206,104,1)'
//         radius: (acres <= 18.5) ? 3.5 : 1.2 * Math.log(acres)
//       })
//     });
//     return (discovery > (today - 30*86400000) && discovery < (today - 1.25*86400000)) ? marker : fireStyles['Point'];
//   }
// });

// var igpoint6 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/igpoint6.geojson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
//         +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });
// var igpoint12 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/igpoint12.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
//         +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });
// var igpoint24 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/igpoint24.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
//         +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });    
// var igpoint48 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/igpoint48.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
//         +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });
// var viirs6 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/viirs6.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
//         +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });
// var viirs12 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/viirs12.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
//         +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });
// var viirs24 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/viirs24.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
//         +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });    
// var viirs48 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     // url: 'https://gbcc.us/viirs48.esrijson'
//     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
//         +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//         +'&token=' + egp
//   })
// });

// var nfs = newFiresLayer.getSource();
// var ofs = ongoingFiresLayer.getSource();
// var rxfs = rxFiresLayer.getSource();
// var countFeatures = function(layerSource, k) {
//   layerSource.once('change', function(e) {
//     if (layerSource.getState() === 'ready') {
//         legend[k].innerHTML = layerSource.getFeatures().length + ' ' + legend[k].innerHTML;
//     }
//   });
// }
// function firepop(ids, layerSource) {
//   layerSource.once('change', function(e) {
//     if (layerSource.getState() === 'ready') {
//       for (i = 0; i < layerSource.getFeatures().length; i++) {
//         var key = layerSource.getFeatures()[i].getProperties().UniqueFireIdentifier;
//         var value = {};
//         ids[key] = value;
//       }            
//     }
//   });
// }
// firepop(nfids, nfs);
// firepop(ofids, ofs);
// firepop(rxfids, rxfs);
// function extend(obj, src) {
//   for (var key in src) {
//     if (src.hasOwnProperty(key)) obj[key] = src[key];
//   }
//   return obj;
// }
// var inc = extend(nfids,ofids);
// incidents = extend(inc,rxfids);
// countFeatures(nfs, 0);
// countFeatures(ofs, 1);
// countFeatures(rxfs, 2);
// var egpModisFireDetectionCentroidLayer6 = new ol.layer.Vector({
//   title: 'MODIS < 6 Hour',
//   source: new ol.source.Cluster({
//     distance: 2,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       crossOrigin: 'anonymous',
//       url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//       // url: 'https://gbcc.us/modis6.esrijson'
//       // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//       //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//       //     +'&token=' + egp
//           // +'&token=' + egpToken
//       /* whole URL  */
//       // url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects"
//       //   + "&objectIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&" 
//       //   + "&outFields=*"
//       //   + "&outSR=102100"
//       //   + "&token=' + egpToken
//     })
//   }),
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   style: egpModisStyles['6']
// });

// var egp6 = new ol.source.Cluster({
//   distance: 2,
//   source: new ol.source.Vector({
//     format: new ol.format.EsriJSON(),
//     crossOrigin: 'anonymous',
//     url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?f=json&where=HOURS_OLD%20%3C%206&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//     // url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//     //     +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//     //     +'&token=' + egp
//   })
// });
// egpModisFireDetectionCentroidLayer6.setSource(egp6)

// var egpModisFireDetectionCentroidLayer12 = new ol.layer.Vector({
//   title: 'MODIS < 12 Hour',
//   source: new ol.source.Cluster({
//     distance: 2,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       // url: 'https://gbcc.us/modis12.esrijson'
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           // +'&token=' + egpToken
//           +'&token=' + egp
//     })
//   }),
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   style: egpModisStyles['12']
// });
// var egpModisFireDetectionCentroidLayer24 = new ol.layer.Vector({
//   title: 'MODIS < 24 Hour',
//   source: new ol.source.Cluster({
//     distance: 2,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       // url: 'https://gbcc.us/modis24.esrijson'
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           // +'&token=' + egpToken
//           +'&token=' + egp

//     })
//   }),
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   style: egpModisStyles['24'],
//   opacity: 0.6,
//   brightness: 0.2
// });
// var egpModisFireDetectionCentroidLayer48 = new ol.layer.Vector({
//   title: 'MODIS < 48 Hour',
//   source: new ol.source.Cluster({
//     distance: 2,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       // url: 'https://gbcc.us/modis48.esrijson'
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           +'&token=' + egp
//           // +'&token=' + egpToken
//     })
//   }),
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   style: egpModisStyles['48'],
//   opacity: 0.6,
//   brightness: 0.2  
// });
// var egpModisFireDetectionCentroidLayer999 = new ol.layer.Vector({
//   source: new ol.source.Cluster({
//     distance: 2,
//     source: new ol.source.Vector({
//       format: new ol.format.EsriJSON(),
//       // url: 'https://gbcc.us/modis999.esrijson'
//       url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
//           +'&where=AgeInHours < 50&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
//           // +'&token=' + egpToken
//           +'&token=' + egp
//     })
//   }),
//   extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ],
//   style: egpModisStyles['999'],
//   opacity: 0.6,
//   brightness: 0.2 , 
//   visible: false 
// });
// viirsCentroidLayer6.setSource(viirs6);
// viirsCentroidLayer12.setSource(viirs12);
// viirsCentroidLayer24.setSource(viirs24);
// viirsCentroidLayer48.setSource(viirs48);
// igpointCentroidLayer6.setSource(igpoint6);
// igpointCentroidLayer12.setSource(igpoint12);
// igpointCentroidLayer24.setSource(igpoint24);
// igpointCentroidLayer48.setSource(igpoint48);

function _doToggle() {
  ol3d.setEnabled(!ol3d.getEnabled());
}

function init3D() {
  ol3d = new olcs.OLCesium({
    map: map,
    // target: map3d
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
  // Math.PI * ((360-3.16) / 180)
  camera.setTilt(Math.PI * (93.16 / 180));
  camera.setPosition(ol.proj.transform([-119.461349, 39.755695], 'EPSG:4326','EPSG:3857'));
  camera.setAltitude(5553.276);
  camera.setHeading(Math.PI * ((360-238.789703) / 180));
  camera.setDistance(0);
  // camera.lookAt(ol.proj.transform([-120.291037,39.364097], 'EPSG:4326','EPSG:3857'))
}

function toggle3D() {
  if (!ol3d) {
    if (camBox !== undefined) {
      nvcams.setTarget();
      maps.removeChild(camBox);
      camBox = undefined;
    }
    var s = window.lazyLoadCesium();
    s.onload = function() {
      init3D();
      _doToggle();
    };
  } else {
     _doToggle();
  }
}
var camBox;
var threeD = document.createElement('div');
threeD.className = 'cesiumToggle ol-unselectable ol-control';
// threeD.appendChild(toggle);
var change3d = new ol.control.Control({
  element: threeD
});

// toggle.addEventListener('click', function() {
//   if (map3d.className == 'dontsee') {
//     map.removeLayer(sagegrouse);
//     map.removeLayer(nvBlmCamsLayer);
//     // sagegrouse.setSource(null);
//     swipe.style.display = 'none';
//     slide.style.display = 'none';
//     // ol3d.setEnabled(!ol3d.getEnabled()); 
//     toggle3D();
//     map3d.className = 'see';
//     toggle.innerHTML = '2D VIEW';
//   }
//   else {
//     toggle3D();
//     // ol3d.setEnabled(!ol3d.getEnabled());
//     map3d.className = 'dontsee';
//     toggle.innerHTML = '3D VIEW';
//     // sagegrouse.setSource(
//     //   new ol.source.Vector({
//     //     url: 'firecesium/examples/data/topojson/sagegrouse.topojson',
//     //     format: new ol.format.TopoJSON()
//     //     // url: 'dispatch/localDispatchMap/layers/gbccLocalWebsites.geojson',
//     //     // format: new ol.format.GeoJSON()
//     //   })
//     // );
//     map.getLayers().setAt(8, sagegrouse);
//     map.getLayers().setAt(17, nvBlmCamsLayer);
//     map.setView(new ol.View({
//         // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
//         center: [-12753260.184760537, 4948659.629345282],
//         zoom: 5.55,
//         // minZoom: 5,
//         // maxZoom: 9.8,
//         extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
//       })
//     );
//     swipe.style.display = '';
//     slide.style.display = '';
//   }
// });
// var infoLabel = document.createElement('span');
//     infoLabel.className = 'info-label';
//     infoLabel.textContent = 'i';

var overlay = new ol.Overlay( /* @type {olx.OverlayOptions} */ {
  element: container,
  id: 'dataOverlay',
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});

closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
}


var button = document.getElementById('button');


var overlayControl = function(e) {
  var vv = map.getView();
  vv.on('change:resolution', function(e) {
    vv.getResolution() < 750 ? resources.style.display = 'block' : resources.style.display = 'none';
  });
  map.getOverlayById('dataOverlay') ? (map.removeOverlay(overlay), element.removeChild(resources)) : (map.addOverlay(overlay), element.appendChild(resources));
};

button.addEventListener('click', overlayControl, false);

var element = document.createElement('div');
element.className = 'display-overlay ol-control';
element.appendChild(button);

var displayOverlayControl = new ol.control.Control({
  element: element
});

// rCloser.onclick = function() {
//   resources.style.display = 'none';
//   rCloser.blur();
//   return false;
// }

var bigScreen = new ol.control.FullScreen({
  source: 'fullscreen'
});


var controls = [
  new ol.control.Attribution(
    // {label: infoLabel}
  ),
  new ol.control.MousePosition({
    undefinedHTML: 'outside',
    projection: 'EPSG:4326',
    coordinateFormat: ol.coordinate.toStringHDMS
    // coordinateFormat: function(coordinate) {
    //   // return ol.coordinate.format( coordinate, '{x}, {y}', 4);
    // }
  }),
  // new ol.control.OverviewMap({
  //   collapsed: true
  // }),
  new ol.control.Rotate({
    autohide: false
  }),
  new ol.control.ScaleLine({
    units: 'us'
  }),
  new ol.control.Zoom(
    // {target: 'toolbar'}
  ),
  new ol.control.ZoomSlider(),
  // new ol.control.ZoomToExtent(),
  bigScreen,
  displayOverlayControl,
  change3d
];
// zoom: 5.55,
//   // minZoom: 5,
//   // maxZoom: 9.8,
  
var layers = [
  new ol.layer.Tile({
    source: new ol.source.OSM({
      // attributions: [
      //   'All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',
      //   ol.source.OSM.ATTRIBUTION
      // ],
      // url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
      attributions: [
        "Map tiles by Carto, under CC BY 3.0.",
        ol.source.OSM.ATTRIBUTION
      ],
      url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      crossOrigin: 'Anonymous'
    }),
    title: "Open Street Map",
    type: 'base',
    wrapX: false,
    visible: false
  }),
  mapboxDark,
  mapbox, 
  raster,
  bing,
  openTopo,
  stamen,
  usgsTopo,
  sagegrouse,
  doe,
  dod,
  fws,
  nps,
  bia,
  fs,
  blm,
  vectorLayer,
  // prepoLayer,
  // fovOverlay,
  // nvBlmCamsLayer,
  // igpointCentroidLayer48,
  // igpointCentroidLayer24,
  // igpointCentroidLayer12,
  // igpointCentroidLayer6,
  viirsCentroidLayer48,
  viirsCentroidLayer24,
  viirsCentroidLayer12,
  viirsCentroidLayer6,
  // lightningLayer24,
  // lightningLayer12,
  // lightningLayer6,
  egpModisFireDetectionCentroidLayer999,
  egpModisFireDetectionCentroidLayer48,
  egpModisFireDetectionCentroidLayer24,
  egpModisFireDetectionCentroidLayer12,
  egpModisFireDetectionCentroidLayer6,
  // geomacPerimsInactiveLayer,
  geomacPerimsLayer,
  rxFiresLayer,
  ongoingFiresLayer,
  newFiresLayer,
  teamFiresLayer,
  // trackLayer,
  // eclipseLayer,
  // umbraLayer
  // clipLayer
]

var overallView = new ol.View({
  // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
  center: [-12916506.185315948, 5384432.410275662],
  zoom: 7.2,
  // minZoom: 1,
  // maxZoom: 15,
  // extent:[ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ]
});

var map = new ol.Map({
  layers: layers,
  // interactions : ol.interaction.defaults({doubleClickZoom :false}),
  // interactions: ol.interaction.defaults().extend([selectHover, selectClick]),
  controls: controls,
  // overlays: [overlay],
  target: 'map2d',
  view: overallView, 
  logo: ({
    href: 'https://gacc.nifc.gov/gbcc/',
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
// geoMacSource.once('change', function(e) {
//   if (geoMacSource.getState() === 'ready') {
//     geomacPerimsLayer.setVisible(true);
//   }
// });
// sagegrouseSource.once('change', function(e) {
//   if (sagegrouseSource.getState() === 'ready') {
//     sagegrouse.setVisible(true);
//   }
// });
// bigScreen.on('change', map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (map.getSize()), {padding: [80, 80, 80, 80], constrainResolution: false}));

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

// mapbox.set('altitudeMode', 'clampToGround');
// vectorLayer.set('altitudeMode', 'clampToGround');
// ongoingFiresLayer.set('altitudeMode', 'clampToGround');
geomacPerimsLayer.set('altitudeMode', 'clampToGround');
fovOverlay.set('altitudeMode', 'clampToGround');
// fovOverlay.set('selectable', true);



  // ol3d.setEnabled(true);
  // ol3d.enableAutoRenderLoop();

vectorLayer.set('selectable', true);
vectorLayer.set('id', 'dispatches');
ongoingFiresLayer.set('selectable', true);
ongoingFiresLayer.set('id','ongoing');
rxFiresLayer.set('selectable', true);
rxFiresLayer.set('id','rx');
newFiresLayer.set('selectable', true);
newFiresLayer.set('id','new');
teamFiresLayer.set('id','team');
nvBlmCamsLayer.set('selectable', true);
nvBlmCamsLayer.set('id','nvcams');
teamFiresLayer.set('selectable', true);
geomacPerimsLayer.set('id','geomac');
geomacPerimsLayer.set('selectable', true);
prepoLayer.set('id','prepo');
prepoLayer.set('selectable', true);
ongoingFiresLayer.set('overlay', true);
rxFiresLayer.set('overlay', true);
newFiresLayer.set('overlay', true);
teamFiresLayer.set('overlay', true);
geomacPerimsLayer.set('overlay', true);
prepoLayer.set('overlay', true);
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

function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

if (isTouchDevice()) {
    // on Mobile
  console.log('is touch');
  var selectTap = new ol.interaction.Select({
    condition: ol.events.condition.click,
    layers: [ongoingFiresLayer, rxFiresLayer, newFiresLayer, teamFiresLayer, geomacPerimsLayer, prepoLayer, nvBlmCamsLayer],
    // filter: function(feature, layer) {
    //   if (layer.get('overlay') == true)
    //     return true;
    // },
    style: function(feature) {
      if (feature.getLayer().get('id') == 'rx') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(253,2,125,.1)'
            // }), 
            stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        });
      } 
      if (feature.getLayer().get('id') == 'new') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(232,14,14,.1)'
            // }),
            stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'ongoing') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(254,253,6,.1)'
            // }),
            stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 4}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'team') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(254,253,6,.1)'
            // }),
            stroke: new ol.style.Stroke({color: 'rgba(145,9,198,1)', width: 4}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'geomac') {
        var acres = feature.get('poly_GISAcres') ? feature.get('poly_GISAcres') : '';
        var style = new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(1,255,67,1)',
            // color: 'rgba(1,255,67,.5)',
            // lineDash: [4],
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'rgba(232,14,14,.2)'
            // color: 'rgba(1,243,255,.2)'
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'prepo') {
        var style = new ol.style.Style({ 
          image: new ol.style.RegularShape({
            fill: new ol.style.Fill({
              color: '#cfdb41' //#b7f3f7
            }),
            stroke: new ol.style.Stroke({
              color: '#222',
              width: 1.5
            }),
            points: 5,
            radius: 7,
            radius2: 4,
            angle: 0
          })
        })
      }
      if (feature.getLayer().get('id') == 'nvcams') {
        var style = new ol.style.Style({
          image: new ol.style.Icon(({
            opacity: .75,
            scale: .4,
            src: 'https://earth.google.com/images/kml-icons/track-directional/track-0.png', 
            rotation: Math.PI * parseFloat(feature.getProperties()['az_current']) / 180,
            rotateWithView: true
          }))
        })
      }
      return style;
    }  
  });

  map.addInteraction(selectTap);

  selectTap.on('select', function(e) {
    var coordinate;
    var feature = e.selected[0];
    // var layer = feature.getLayer();
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
        uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') 
                                           ? feature.get('UniqueFireIdentifier') 
                                           : feature.get('irwin_UniqueFireIdentifier')
                                             ? feature.get('irwin_UniqueFireIdentifier')
                                             : 'unknown';
        incidentName.innerHTML = feature.get('IncidentName') 
                                   ? feature.get('IncidentName') 
                                   : feature.get('irwin_IncidentName')
                                     ? feature.get('irwin_IncidentName')
                                     : 'unknown';
        fireDiscoveryDateTime.innerHTML = feature.get('irwin_FireDiscoveryDateTime') 
                                    ? new Date(parseInt(feature.get('irwin_FireDiscoveryDateTime'))).toLocaleString()
                                    : feature.get('FireDiscoveryDateTime') 
                                      ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() 
                                      : 'unknown';
        dailyAcres.innerHTML = feature.get('poly_GISAcres') 
                                 ? feature.get('poly_GISAcres')
                                 : feature.get('IncidentSize') 
                                   ? (feature.get('IncidentSize') + '  [total]') 
                                   : feature.get('DiscoveryAcres') 
                                     ? feature.get('DiscoveryAcres') + '  [discovery]' 
                                     : 'unknown';
        strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'Full Suppression';
        fireCause.innerHTML = feature.get('FireCause') 
                                ? feature.get('FireCause') 
                                : feature.get('irwin_FireCause')
                                  ? feature.get('irwin_FireCause')
                                  : 'unknown';
        fuelType.innerHTML = feature.get('PrimaryFuelModel') 
                               ? feature.get('PrimaryFuelModel') 
                               : feature.get('irwin_PrimaryFuelModel')
                                 ? feature.get('irwin_PrimaryFuelModel')
                                 : 'unknown';
        incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') 
                                            ? feature.get('IncidentCommanderName')
                                            : feature.get('irwin_IncidentManagementOrg')
                                              ? feature.get('irwin_IncidentManagementOrg')
                                              : 'unknown';
        ownership.innerHTML = feature.get('irwin_POOLandownerCategory')
                                ? feature.get('irwin_POOLandownerCategory')
                                : feature.get('irwin_POOProtectingAgency')
                                  ? feature.get('POOLandownerCategory')
                                  : feature.get('POOProtectingAgency');
        dispatchCenterID.innerHTML = feature.get('DispatchCenterID') 
                                       ? feature.get('DispatchCenterID') 
                                       : feature.get('irwin_DispatchCenterID')
                                         ? feature.get('irwin_DispatchCenterID')
                                         : 'unknown';
        predictiveServiceAreaID.innerHTML = feature.get('POOPredictiveServiceAreaID') 
                                              ? feature.get('POOPredictiveServiceAreaID') 
                                              : feature.get('irwin_POOPredServiceAreaID')
                                                ? feature.get('irwin_POOPredServiceAreaID')
                                                : 'unknown';
        latLong.innerHTML = (feature.get('irwin_InitialLatitude') && feature.get('irwin_InitialLongitude')) 
                              ? feature.get('irwin_InitialLatitude') + ' , ' + feature.get('irwin_InitialLongitude') 
                              : feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude');
        sagegrouseOrigin.innerHTML = (sagegrouseFeatures.length > 0) ? sagegrouseFeatures[0].get('Hab_Type') : 'No.' ;
        
        // var coordinate = e.coordinate;
        // var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
        // overlay.setPosition(coordinate); 
      }
      function displayResources(items) {
        function popRes(arr, target, resk, resIds) {
          target.innerHTML = '';
          var count = 0;         
          var loadHTML = arr.map(function(current_item, index, initial_array) {
            fid == Object.keys(current_item) ? (count = count + 1, target.innerHTML 
              += current_item[Object.keys(current_item)]['Name'] + current_item[Object.keys(current_item)]['Mob Date'] 
              + current_item[Object.keys(current_item)]['Agency']) : '';
            });
          resk.innerHTML = count +  resIds;
          return loadHTML;
        }

        return items.map(function(current_item, index, initial_array) {
          Resources[index].innerHTML = '';
          Object.keys(current_item).length === 0 && current_item.constructor === Object 
          ? (Resources[index].innerHTML = 0 + resIds[index]) : popRes(current_item, ResourcesP[index], Resources[index], resIds[index]);
        });
      }      
      // function displayResources(items) {
      //   function popRes(arr) {
      //     ResourcesP[k].innerHTML = '';
      //     var count = 0;
      //     for (var i = 0; i < arr.length; ++i) {
      //       fid == Object.keys(arr[i]) ? (count = count + 1, ResourcesP[k].innerHTML += arr[i][Object.keys(arr[i])]['Name'] + arr[i][Object.keys(arr[i])]['Mob Date'] + arr[i][Object.keys(arr[i])]['Agency']) : '';
      //     }
      //     Resources[k].innerHTML = count +  resIds[k];
      //   };
      //   for (var k = 0; k < items.length; k++) {
      //     Resources[k].innerHTML = '';
      //     Object.keys(items[k]).length === 0 && items[k].constructor === Object ? (Resources[k].innerHTML = 0 + resIds[k]) : popRes(items[k]);
      //   }
      // }
      var displayFov = function(feature) {
        var clone = feature.clone();
        if (clone !== fovStyle) {
          if (fovStyle) {

            fovOverlay.getSource().removeFeature(fovStyle);
          }
          if (clone) {
            var id = clone.get('id');
            clone.setGeometry(polyKeys[clone.get('id')]);
            fovOverlay.getSource().addFeature(clone);
          }
          fovStyle = clone;
        }
      }; 
      if (feature.get('UniqueFireIdentifier')) {
        displayInfo();

        var justDate = feature.get('FireDiscoveryDateTime') ? (new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getFullYear() : 'unknown';
        content.innerHTML = incidentName.innerHTML + '<br>' + dailyAcres.innerHTML + '<br>' + justDate;
        map.getOverlayById('dataOverlay') ? overlay.setPosition(feature.getGeometry().getCoordinates()) : '';
        displayResources(resItems); 
      }
      if (feature.getProperties()["type"]) {
        content.innerHTML = feature.get('name');
        map.getOverlayById('dataOverlay') ? overlay.setPosition(feature.getGeometry().getCoordinates()) : ''; 
        displayResources(resItems);
      }
      if (feature.get('poly_GISAcres')) {
        justDate = feature.get('poly_CreateDate') ? (new Date(parseInt(feature.get('poly_CreateDate'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('poly_CreateDate'))).getDate() + '/' + new Date(parseInt(feature.get('poly_CreateDate'))).getFullYear() : 'unknown';
        content.innerHTML = feature.get('irwin_IncidentName') + '<br>' + feature.get('poly_GISAcres') + '<br>' + feature.get('poly_MapMethod') + '<br>' + justDate;
        map.getOverlayById('dataOverlay') ? overlay.setPosition(new ol.extent.getCenter(feature.getGeometry().getExtent())) : ''; 
      } 
      if (feature.get('attribution')) {
        displayFov(feature);
      }  
      // map.getOverlayById('dataOverlay') ? overlay.setPosition(coordinate) : ''; 
      // var popup = new ol.Overlay.Popup();

      // var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
      // uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
      // incidentName.innerHTML = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
      // fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
      // dailyAcres.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
      //   : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
      // strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
      // fireCause.innerHTML = feature.get('FireCause') ? feature.get('FireCause') : 'unknown';
      // fuelType.innerHTML = feature.get('PrimaryFuelModel') ? feature.get('PrimaryFuelModel') : 'unknown';
      // incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') ? feature.get('IncidentCommanderName') : 'unknown';
      // ownership.innerHTML = feature.get('POOProtectingAgency') ? feature.get('POOProtectingAgency') : 'unknown';
      // dispatchCenterID.innerHTML = feature.get('DispatchCenterID') ? feature.get('DispatchCenterID') : 'unknown';
      // predictiveServiceAreaID.innerHTML =  feature.get('POOPredictiveServiceAreaID') ? feature.get('POOPredictiveServiceAreaID') : 'unknown';
      // latLong.innerHTML = (feature.get('InitialLatitude') && feature.get('InitialLongitude')) ? feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude') : 'unknown';
      // overlay.setPosition(coordinate);
      
      // map.addOverlay(popup); 
      // var content = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
      // content += feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
      // content += fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
      // content += dailyAcres.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
      //   : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
      // content +=  strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
      // popup.show(content);
    }
  });

  // var selectDblClick = new ol.interaction.Select({
  //   condition: ol.events.condition.dblclick,
  //   layers: [
  //     // mapbox,
  //     stamen, 
  //     // raster,
  //     // mapzen,
  //     vectorLayer 
  //   ],
  //   style: new ol.style.Style({
  //     // fill: new ol.style.Fill({
  //     //   // color: 'rgba(0,0,255, .1)',
  //     //   color: 'rgba(255, 145, 20, .1)'
  //     // }),
  //     stroke: new ol.style.Stroke({
  //       // color: 'rgba(168, 0, 2, .8)',
  //       color: 'rgba(0,0,255, .8)',
  //       // color: '#f00',
  //       width: 3
  //     })
  //   })  
  // });
  // map.addInteraction(selectDblClick);

  // selectDblClick.on('select', function(e) {
  //   e.preventDefault();
  //   var feature = e.selected[0];
  //   if (feature) {
  //     var polygon = (feature.getGeometry());// @type {ol.geom.SimpleGeometry 
  //     var size = (map.getSize()); // @type {ol.Size} 
  //     // map.getView().fit(polygon, size, {padding: [0, 0, 0, 0], constrainResolution: false});
  //     var aa = polygon.getExtent();
  //     var oo = ol.extent.getCenter(aa);
  //     // let duration = 1500; // ie11+
  //     // var self = this;
  //     // var duration = 1500;
  //     var start = +new Date();
  //     var pan = ol.animation.pan({
  //       duration: 800,
  //       source: (map.getView().getCenter()),  // @type {ol.Coordinate}
  //       start: start
  //     });
  //     var bounce = ol.animation.bounce({
  //       duration: 800, // or could use the "this" keyword because duration is a variable defined above, 
  //       resolution: 1.2 * map.getView().getResolution(),
  //       start: start
  //     });
  //     map.beforeRender(pan, bounce);
  //     // map.getView().setCenter(oo);
  //     map.getView().fit(polygon, size, {padding: [80, 80, 80, 80], constrainResolution: false});
  //   }
  //   else {
  //     map.beforeRender(
  //       ol.animation.pan({
  //         duration: 800,
  //         source: (map.getView().getCenter()),  // @type {ol.Coordinate}
  //         start: start
  //       }),
  //       ol.animation.bounce({
  //         duration: 800, // or could use the "this" keyword because duration is a variable defined above, 
  //         resolution: 1.3 * map.getView().getResolution(),
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
  //       // map.getView().setZoom(5);
  //       // map.getView().setZoom(map.getView().getZoom()+1);
  //   } 
  // });

}
else {
    // on Desktop
  // console.log('no touch');
  var selectHover = new ol.interaction.Select({
    condition: ol.events.condition.pointerMove,
    layers: [ongoingFiresLayer, rxFiresLayer, newFiresLayer, teamFiresLayer, geomacPerimsLayer, prepoLayer, nvBlmCamsLayer],
    // filter: function(feature, layer) {
    //   if (layer.get('overlay') == true)
    //     return true;
    // },
    style: function(feature) {
      if (feature.getLayer().get('id') == 'rx') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var x = (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres);
        // console.log(x)
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(253,2,125,.1)'
            // }), 
            stroke: new ol.style.Stroke({color: 'fuchsia', width: 3}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'new') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(232,14,14,.1)'
            // }),
            stroke: new ol.style.Stroke({color: 'rgba(232,14,14,1)', width: 3}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'ongoing') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(254,253,6,.1)'
            // }),
            stroke: new ol.style.Stroke({color: 'rgba(254,253,6,1)', width: 4}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'team') {
        var acres = feature.get('IncidentSize') ? feature.get('IncidentSize') : feature.get('DiscoveryAcres');
        var style = new ol.style.Style({
          image: new ol.style.Circle({
            // fill: new ol.style.Fill({
            //   color: 'rgba(254,253,6,.1)'
            // }),
            stroke: new ol.style.Stroke({color: 'rgba(145,9,198,1)', width: 4}),
            radius: (acres <= 18.5) ? 3 + 3.5 : 3 + 1.2 * Math.log(acres)
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'geomac') {
        // var acres = feature.get('poly_GISAcres') ? feature.get('poly_GISAcres') : '';
        var style = new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(1,255,67,1)',
            // color: 'rgba(1,255,67,.5)',
            // lineDash: [4],
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'rgba(232,14,14,.2)'
            // color: 'rgba(1,243,255,.2)'
          })
        }); 
      }
      if (feature.getLayer().get('id') == 'prepo') {
        var style = new ol.style.Style({ 
          image: new ol.style.RegularShape({
            fill: new ol.style.Fill({
              color: 'rgba(235, 255, 0, 1)' //#b7f3f7
            }),
            stroke: new ol.style.Stroke({
              color: '#222',
              width: 1.5
            }),
            points: 5,
            radius: 8,
            radius2: 5,
            angle: 0
          })
        }) 
      }
      if (feature.getLayer().get('id') == 'nvcams') {
        var style = new ol.style.Style({
          image: new ol.style.Icon(({
            opacity: .75,
            scale: .4,
            // src: 'firecesium/examples/data/compass1.png',
            src: 'https://earth.google.com/images/kml-icons/track-directional/track-0.png', 
            rotation: Math.PI * parseFloat(feature.getProperties()['az_current']) / 180,
            rotateWithView: true
          }))
        })
      }
      // if (feature.getLayer().get('id') == '') {
      //   var style = new ol.style.Style({
      //     stroke: new ol.style.Stroke({
      //       color: 'rgba(255, 166, 0, 1)',
      //       width: 1
      //     }),
      //     fill: new ol.style.Fill({
      //       color: 'rgba(255,0,0,0.3)'
      //     })
      //   });
      // }
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
      var fid = (feature.getProperties()["type"]) 
                  ? feature.get('IncidentName').toUpperCase() 
                  : feature.get('poly_GISAcres') 
                    ? feature.get('irwin_IncidentName').toUpperCase() 
                    : feature.get('attribution')
                      // ? feature.get('id') 
                      // : feature.get('IncidentName').toUpperCase();
      // var fid = (feature.getProperties()["type"]) ? feature.get('name') : feature.get('UniqueFireIdentifier');
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
        var sagegrouseFeatures = sagegrouse 
                                   ? sagegrouse.getSource().getFeaturesAtCoordinate(
                                       ol.proj.transform([feature.get('InitialLongitude') 
                                                            ? feature.get('InitialLongitude') 
                                                            : feature.get('irwin_InitialLongitude'), 
                                                          feature.get('InitialLatitude') 
                                                            ? feature.get('InitialLatitude') 
                                                            : feature.get('irwin_InitialLatitude')], 
                                                            'EPSG:4326',
                                                            'EPSG:3857')
                                     ) 
                                   : [];
        uniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') 
                                           ? feature.get('UniqueFireIdentifier') 
                                           : feature.get('irwin_UniqueFireIdentifier')
                                             ? feature.get('irwin_UniqueFireIdentifier')
                                             : 'unknown';
        incidentName.innerHTML = feature.get('IncidentName') 
                                   ? feature.get('IncidentName') 
                                   : feature.get('irwin_IncidentName')
                                     ? feature.get('irwin_IncidentName')
                                     : 'unknown';
        fireDiscoveryDateTime.innerHTML = feature.get('irwin_FireDiscoveryDateTime') 
                                    ? new Date(parseInt(feature.get('irwin_FireDiscoveryDateTime'))).toLocaleString()
                                    : feature.get('FireDiscoveryDateTime') 
                                      ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() 
                                      : 'unknown';
        dailyAcres.innerHTML = feature.get('poly_GISAcres') 
                                 ? feature.get('poly_GISAcres')
                                 : feature.get('IncidentSize') 
                                   ? (feature.get('IncidentSize') + '  [total]') 
                                   : feature.get('DiscoveryAcres') 
                                     ? feature.get('DiscoveryAcres') + '  [discovery]' 
                                     : 'unknown';
        strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'Full Suppression';
        fireCause.innerHTML = feature.get('FireCause') 
                                ? feature.get('FireCause') 
                                : feature.get('irwin_FireCause')
                                  ? feature.get('irwin_FireCause')
                                  : 'unknown';
        fuelType.innerHTML = feature.get('PrimaryFuelModel') 
                               ? feature.get('PrimaryFuelModel') 
                               : feature.get('irwin_PrimaryFuelModel')
                                 ? feature.get('irwin_PrimaryFuelModel')
                                 : 'unknown';
        incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') 
                                            ? feature.get('IncidentCommanderName')
                                            : feature.get('irwin_IncidentManagementOrg')
                                              ? feature.get('irwin_IncidentManagementOrg')
                                              : 'unknown';
        ownership.innerHTML = feature.get('irwin_POOLandownerCategory')
                                ? feature.get('irwin_POOLandownerCategory')
                                : feature.get('irwin_POOProtectingAgency')
                                  ? feature.get('POOLandownerCategory')
                                  : feature.get('POOProtectingAgency');
        dispatchCenterID.innerHTML = feature.get('DispatchCenterID') 
                                       ? feature.get('DispatchCenterID') 
                                       : feature.get('irwin_DispatchCenterID')
                                         ? feature.get('irwin_DispatchCenterID')
                                         : 'unknown';
        predictiveServiceAreaID.innerHTML = feature.get('POOPredictiveServiceAreaID') 
                                              ? feature.get('POOPredictiveServiceAreaID') 
                                              : feature.get('irwin_POOPredServiceAreaID')
                                                ? feature.get('irwin_POOPredServiceAreaID')
                                                : 'unknown';
        latLong.innerHTML = (feature.get('irwin_InitialLatitude') && feature.get('irwin_InitialLongitude')) 
                              ? feature.get('irwin_InitialLatitude') + ' , ' + feature.get('irwin_InitialLongitude') 
                              : feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude');
        sagegrouseOrigin.innerHTML = (sagegrouseFeatures.length > 0) ? sagegrouseFeatures[0].get('Hab_Type') : 'No.' ;
        
        // var coordinate = e.coordinate;
        // var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
        // overlay.setPosition(coordinate); 
      }
      function displayResources(items) {
        function popRes(arr, target, resk, resIds) {
          target.innerHTML = '';
          var count = 0;         
          var loadHTML = arr.map(function(current_item, index, initial_array) {
            fid == Object.keys(current_item) ? (count = count + 1, target.innerHTML 
              += current_item[Object.keys(current_item)]['Name'] + current_item[Object.keys(current_item)]['Mob Date'] 
              + current_item[Object.keys(current_item)]['Agency']) : '';
            });
          resk.innerHTML = count +  resIds;
          return loadHTML;
        }

        return items.map(function(current_item, index, initial_array) {
          Resources[index].innerHTML = '';
          Object.keys(current_item).length === 0 && current_item.constructor === Object 
          ? (Resources[index].innerHTML = 0 + resIds[index]) : popRes(current_item, ResourcesP[index], Resources[index], resIds[index]);
        });
      }
      
      var displayFov = function(feature) {
        var clone = feature.clone();
            var id = clone.get('id');
            clone.setGeometry(polyKeys[clone.get('id')]);
            fovOverlay.getSource().addFeature(clone);
        // if (clone !== fovStyle) {
        //   // if (fovStyle) {
        //     if (!fovOverlay.getSource().getFeatures().length) {
        //       // fovOverlay.getSource().removeFeature(fovStyle);
        //       console.log('fovStyle exists, but not on layer')
        //     }
        //   // }
        //   if (clone) {
        //     var id = clone.get('id');
        //     clone.setGeometry(polyKeys[clone.get('id')]);
        //     fovOverlay.getSource().addFeature(clone);
        //   }
        //   fovStyle = clone;
        // }
      };   

      // function displayResources(items) {
      //   function popRes(arr) {
      //     ResourcesP[k].innerHTML = '';
      //     var count = 0;
      //     for (var i = 0; i < arr.length; ++i) {
      //       fid == Object.keys(arr[i]) ? (count = count + 1, ResourcesP[k].innerHTML += arr[i][Object.keys(arr[i])]['Name'] + arr[i][Object.keys(arr[i])]['Mob Date'] + arr[i][Object.keys(arr[i])]['Agency']) : '';
      //     }
      //     Resources[k].innerHTML = count +  resIds[k];
      //   };
      //   for (var k = 0; k < items.length; k++) {
      //     Resources[k].innerHTML = '';
      //     Object.keys(items[k]).length === 0 && items[k].constructor === Object ? (Resources[k].innerHTML = 0 + resIds[k]) : popRes(items[k]);
      //   }
      // } 

      if (feature.get('UniqueFireIdentifier')) {
        displayInfo();
        var justDate = feature.get('FireDiscoveryDateTime') ? (new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getDate() + '/' + new Date(parseInt(feature.get('FireDiscoveryDateTime'))).getFullYear() : 'unknown';
        content.innerHTML = incidentName.innerHTML + '<br>' + dailyAcres.innerHTML + '<br>' + justDate;
        map.getOverlayById('dataOverlay') ? overlay.setPosition(feature.getGeometry().getCoordinates()) : '';
        displayResources(resItems); 
      }
      if (feature.getProperties()["type"]) {
        content.innerHTML = feature.get('name');
        map.getOverlayById('dataOverlay') ? overlay.setPosition(feature.getGeometry().getCoordinates()) : ''; 
        displayResources(resItems);
      }
      if (feature.get('poly_GISAcres')) {
        displayInfo();
        justDate = feature.get('poly_CreateDate') 
          ? (new Date(parseInt(feature.get('poly_CreateDate'))).getMonth() + 1) + '/' + new Date(parseInt(feature.get('poly_CreateDate'))).getDate() + '/' + new Date(parseInt(feature.get('poly_CreateDate'))).getFullYear() 
          : 'unknown';
        content.innerHTML = feature.get('irwin_IncidentName') + '<br>' + feature.get('poly_GISAcres') + '<br>' + feature.get('poly_MapMethod') + '<br>' + justDate;
        map.getOverlayById('dataOverlay') ? overlay.setPosition(new ol.extent.getCenter(feature.getGeometry().getExtent())) : ''; 
        // displayResources(resItems);
      }
      if (feature.get('attribution')) {
        displayFov(feature);
      }
      // map.getOverlayById('dataOverlay') ? overlay.setPosition(ol.proj.transform(feature.getGeometry().getCoordinates(), 'EPSG:4326', 'EPSG:3857')) : ''; 

      // var popup = new ol.Overlay.Popup();

      // var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
      // guniqueFireIdentifier.innerHTML = feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
      // incidentName.innerHTML = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
      // fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
      // dailyAcres.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
      //   : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
      // strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
      // fireCause.innerHTML = feature.get('FireCause') ? feature.get('FireCause') : 'unknown';
      // fuelType.innerHTML = feature.get('PrimaryFuelModel') ? feature.get('PrimaryFuelModel') : 'unknown';
      // incidentCommanderName.innerHTML = feature.get('IncidentCommanderName') ? feature.get('IncidentCommanderName') : 'unknown';
      // ownership.innerHTML = feature.get('POOProtectingAgency') ? feature.get('POOProtectingAgency') : 'unknown';
      // dispatchCenterID.innerHTML = feature.get('DispatchCenterID') ? feature.get('DispatchCenterID') : 'unknown';
      // predictiveServiceAreaID.innerHTML =  feature.get('POOPredictiveServiceAreaID') ? feature.get('POOPredictiveServiceAreaID') : 'unknown';
      // latLong.innerHTML = (feature.get('InitialLatitude') && feature.get('InitialLongitude')) ? feature.get('InitialLatitude') + ' , ' + feature.get('InitialLongitude') : 'unknown';
      // overlay.setPosition(coordinate);
      
      // map.addOverlay(popup); 
      // var content = feature.get('IncidentName') ? feature.get('IncidentName') : 'unknown';
      // content += feature.get('UniqueFireIdentifier') ? feature.get('UniqueFireIdentifier') : 'unknown';
      // content += fireDiscoveryDateTime.innerHTML = feature.get('FireDiscoveryDateTime') ? new Date(parseInt(feature.get('FireDiscoveryDateTime'))).toLocaleString() : 'unknown';
      // content += DailyAcres.innerHTML = feature.get('IncidentSize') ? (feature.get('IncidentSize') + '  [total]') 
      //   : feature.get('DiscoveryAcres') ? feature.get('DiscoveryAcres') + '  [discovery]' : 'unknown';
      // content +=  strategy.innerHTML = feature.get('InitialFireStrategy') ? feature.get('InitialFireStrategy') : 'unknown';
      // popup.show(content);
    }
    if (e.deselected[0]) { 
      // if (!fovStyle) {
      //   console.log('need cam feature selection')
      // } 
      // else if (fovStyle) {
        // if (!fovOverlay.getSource().getFeatures().length) {
        //   console.log('fovStyle exists, but not on layer')
        // }
        // else {
          // console.log('cam FOV feature removed')
          // fovOverlay.getSource().removeFeature(fovStyle);
          fovOverlay.getSource().clear()
        // }
      // }
    }
  });
  
  var selectClick = new ol.interaction.Select({
    condition: ol.events.condition.click,
    layers: [
      geomacPerimsLayer,
      mapboxDark,
      mapbox, 
      raster,
      bing,
      openTopo,
      stamen,
      usgsTopo,
      vectorLayer,
      nvBlmCamsLayer,
      // fovOverlay
    ],
    style: function(feature) {
      if (feature.getLayer().get('id') == 'nvcams') {
        var style = new ol.style.Style({
          image: new ol.style.Icon(({
            opacity: .75,
            scale: .4,
            // src: 'firecesium/examples/data/compass1.png',
            src: 'https://earth.google.com/images/kml-icons/track-directional/track-0.png', 
            rotation: Math.PI * parseFloat(feature.getProperties()['az_current']) / 180,
            rotateWithView: true
          }))
        })
      }
      else
        var style = new ol.style.Style({
          fill: new ol.style.Fill({
            // color: 'rgba(0,0,255, .1)',
            color: 'rgba(255, 145, 20, .1)'
          }),
          stroke: new ol.style.Stroke({
            // color: 'rgba(168, 0, 2, .8)',
            color: 'rgba(0,0,255, .8)',
            // color: '#f00',
            width: 3
          })
        })
      return style;
    }
  });
  map.addInteraction(selectClick);

  selectClick.on('select', function(e) {
    var feature = e.selected[0];
    if (feature) {
      if (feature.get('id')) {
        if (camBox !== undefined) {
          nvcams.setTarget();
          maps.removeChild(camBox);
          camBox = undefined;
        }
        var contextMenu = new ContextMenu({
          width: 170,
          default_items: true,
          items: [
            {text: 'Close Camera View', callback: hide},
            {text: '15min Time Lapse', callback: function() {startMjpgTimeLapse(.25)}},
            {text: '1hr Time Lapse', callback: function() {startMjpgTimeLapse(1)}},
            {text: '6hr Time Lapse', callback: function() {startMjpgTimeLapse(6)}},
            {text: '12hr Time Lapse', callback: function() {startMjpgTimeLapse(12)}},
            {text: 'Resume Feed', callback: stopTimeLapse}
          ]
        });
        var stamp = (new Date).getTime();
        var feature = e.selected[0];
        map.getView().setRotation(2*Math.PI - (Math.PI * parseFloat(feature.getProperties()['az_current']) / 180));
        currentCam = feature;
        // var imgUrl = 'https://s3-us-west-2.amazonaws.com/nvseismolab-firecam-images/Axis-BonnyDoon/2019-07-30-21-54-57-000000Z.jpg'
        // var imgUrl = "http://s3-us-west-2.amazonaws.com/alertwildfire-data-public/"+ feature.getProperties()['id'] +"/latest_full.jpg?x-request-time=" + stamp;
        // http://api.nvseismolab.org/camera/Axis-Table1?last=2019-07-30T21:57:54.582Z
        var imgUrl = 'https://data-cache.us/firecams/current?id='+ feature.getProperties()['id']
        var camConfig = {
          method: 'GET',
          url: imgUrl,
          headers: {
            'Content-Type': 'image/jpeg'
          },
        }
        ajax(camConfig)
        var imageSource = new ol.source.ImageStatic({
          attributions: '© <a href="http://alerttahoe.seismo.unr.edu/firecams.html">ALERT(Tahoe)</a>',
          crossOrigin: 'anonymous',
          url: imgUrl,
          projection: viewProjection,
          imageExtent: viewExtent 
        });
        imageMap.setSource(imageSource);
        imageMap.on('postcompose', function() {
          nvcams.render();
        });
        camBox = document.createElement('div');
        camBox.setAttribute('id', 'webcam');
        maps.appendChild(camBox);
        // camBox = document.getElementById("webcam");
        nvcams.setTarget('webcam');
        nvcams.getControls().extend([contextMenu]);
        camBox.style.zIndex = 1;
        selectClick.getFeatures().clear();
      } 
      else {
        if (camBox !== undefined) {
          nvcams.setTarget();
          maps.removeChild(camBox);
          camBox = undefined;
          map.getView().setRotation(0);
        }
        // camBox.style.zIndex = -1;
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
        map.getView().fit(polygon, size, {padding: [5, 5, 5, 5], constrainResolution: false});
      }
    }
    else {
      if (camBox !== undefined) {
        nvcams.setTarget();
        maps.removeChild(camBox);
        camBox = undefined;
        map.getView().setRotation(0);
      }
      // camBox.style.zIndex = -1;
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
      map.getView().fit([ -13385849.855545742, 4164163.9360093023, -12120670.513975333, 5733155.322681262 ], (map.getSize()), {padding: [5, 5, 5, 5], constrainResolution: false});
      // map.setView(new ol.View({
      //     // center: ol.proj.transform([-114.012036, 40.440194], 'EPSG:4326','EPSG:3857'),
      //     center: [-12753260.184760537, 4948659.629345282],
      //     // zoom: 5.55,
      //     resolution: map.getView().getResolution(),
      //     // minZoom: 5,
      //     // maxZoom: 9.8,
      //     extent: bb
      //   })
      // );
        // map.getView().setZoom(5);
        // map.getView().setZoom(map.getView().getZoom()+1);
    } 
  });
}

var layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);
var viewExtent = [0, 0, 570, 320.625];
// var viewExtent = [0, 0, 1024, 968];
var viewProjection = new ol.proj.Projection({
  code: 'ALERT(Tahoe)',
  units: 'pixels',
  extent: viewExtent,
});

var imageMap = new ol.layer.Image({
  // extent: viewExtent,
  // extent: [570, 320.625, 570, 320.625]
  // extent: [285, 160.3125, 285, 160.3125]
  // source: new ol.source.ImageStatic({
  //   attributions: '© <a href="http://alerttahoe.seismo.unr.edu/firecams.html">ALERT(Tahoe)</a>',
  //   url: "http://imgs.xkcd.com/comics/online_communities.png",
  //   projection: viewProjection,
  //   imageExtent: viewExtent 
  // })
});

var currentCam;
function hide() {
  if (camBox !== undefined) {
    nvcams.setTarget();
    maps.removeChild(camBox);
    camBox = undefined;
    map.getView().setRotation(0);
  }
  selectClick.getFeatures().clear();
  // contextMenu.clear();
  // contextMenu.push({text: 'Close Camera View', callback: hide});
  // contextMenu.push({text: '15min Time Lapse', callback: function() {startMjpgTimeLapse(.25)}});
  // contextMenu.push({text: '1hr Time Lapse', callback: function() {startMjpgTimeLapse(1)}});
  // contextMenu.push({text: '6hr Time Lapse', callback: function() {startMjpgTimeLapse(6)}});
  // contextMenu.push({text: '12hr Time Lapse', callback: function() {startMjpgTimeLapse(12)}});
}



var nvcams = new ol.Map({
  layers: [ 
    imageMap
  ],
  controls: ol.control.defaults().extend([
          
        ]),
  // target: 'webcam',
  view: new ol.View({
    projection: viewProjection,
    extent: viewExtent,
    // extent: [285, 0, 570, 320.625],
    center: ol.extent.getCenter(viewExtent),
    zoom: 1.15,
    minZoom: 1.15,
    maxZoom: 5
  }),
  logo: ({
    href: 'http://alerttahoe.seismo.unr.edu/firecams.html',
    src: 'firecesium/examples/data/BLM UNR.jpg' 
  })
});

function startMjpgTimeLapse(preset) {
  // var id = currentCam.get('id');
  var source = currentCam.getProperties()['id'].toLowerCase()
  console.log(preset)
  // var imgUrl = 'http://myers.seismo.unr.edu/firecams/proxy/test/timelapse?hour='+length+'&id='+id;
  // var imgUrl = 'http://api.nvseismolab.org/camera/'+ currentCam.getProperties()['id'] + '?last=' + (new Date()).toISOString()

  // var imgUrl = 'https://data-cache.us/firecams/timelapse?id=' + currentCam.getProperties()['id'] + '&length=' + length
  var imgUrl = 'https://data-cache.us/playback?source=' + source + '&preset=' + preset

  // var imgUrl = 'https://data-cache.us/firecams/text/timelapse?id=' + currentCam.getProperties()['id'].toLowerCase() + '&length=' + length
  // var imgUrl = 'https://data-cache.us/firecams/text/timelapse?source=' + currentCam.getProperties()['id'].toLowerCase() + '&preset=' + preset
  var imageSource = new ol.source.ImageStatic({
    attributions: '© <a href="http://alerttahoe.seismo.unr.edu/firecams.html">ALERT(Tahoe)</a>',
    crossOrigin: 'anonymous',
    url: imgUrl,
    projection: viewProjection,
    imageExtent: viewExtent,
    imageLoadFunction: function(img, src) {
      console.log('hello load')
      var client = new XMLHttpRequest();
      client.open('GET', src);
      client.setRequestHeader('Accept', '*/*');
      // client.setRequestHeader('Set-Fetch-Dest', 'image');
      client.onload = function() {
        console.log('hi')
        img.getImage().src = src
      }
      client.send();
    }
  });
  imageMap.setSource(imageSource);
  imageMap.on('postcompose', function() {
    nvcams.render();
  });
  // contextMenu.clear();
  // contextMenu.push({text: id});
  // contextMenu.push({text: 'Close Camera View', callback: hide});
  // contextMenu.push({text: 'Play Again', callback: function() {startMjpgTimeLapse(length)}});
  // contextMenu.push({text: 'Resume Feed', callback: stopTimeLapse});
}

function stopTimeLapse(e) {
  var stamp = (new Date).getTime();
  // var imgUrl = "http://myers.seismo.unr.edu:8095/vulcan/v0/camera/"+ currentCam.getProperties()['id'] +"/image?lastmodified=" + stamp;
  // var imgUrl = 'http://api.nvseismolab.org/camera/'+ currentCam.getProperties()['id'] + '?last=' + (new Date()).toISOString()
  var imgUrl = 'https://data-cache.us/firecams/current?id=' + currentCam.getProperties()['id']
  var imageSource = new ol.source.ImageStatic({
    attributions: '© <a href="http://alerttahoe.seismo.unr.edu/firecams.html">ALERT(Tahoe)</a>',
    crossOrigin: 'anonymous',
    url: imgUrl,
    projection: viewProjection,
    imageExtent: viewExtent 
  });
  imageMap.setSource(imageSource);
  imageMap.on('postcompose', function() {
    nvcams.render();
  });
  // contextMenu.clear();
  // contextMenu.push({text: 'Close Camera View', callback: hide});
  // contextMenu.push({text: '15min Time Lapse', callback: function() {startMjpgTimeLapse(.25)}});
  // contextMenu.push({text: '1hr Time Lapse', callback: function() {startMjpgTimeLapse(1)}});
  // contextMenu.push({text: '6hr Time Lapse', callback: function() {startMjpgTimeLapse(6)}});
  // contextMenu.push({text: '12hr Time Lapse', callback: function() {startMjpgTimeLapse(12)}});
}

function loadSources () {
  // var perims = [];
  // var gsPerims;
  // var rxSource = new ol.source.Vector({
  //   format: new ol.format.GeoJSON(),
  //   crossOrigin: 'anonymous',
  //   url: 'https://gbcc.us/rxfires1.geojson'
  //   // url : "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //   //   + "&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad')" 
  //   //   + " AND (CreatedOnDateTime >= " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
  //   //   + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX') AND (IncidentTypeCategory <> 'FA')"
  //   //   + " AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
  //   //   + "&returnGeometry=true"
  //   //   + "&spatialRel=esriSpatialRelIntersects"
  //   //   + "&outFields=*"
  //   //   + "&outSR=102100"
  //   //   + "&token=" + irwin
  //     // + "&token=" + irwinToken
  // });

  // var newFiresSource = new ol.source.Vector({
  //   // format: new ol.format.TopoJSON(),
  //   // url: 'data/topojson/newFires.topojson'
  //   // format: new ol.format.EsriJSON(),
  //   format: new ol.format.GeoJSON(),
  //   crossOrigin: 'anonymous',
  //   // https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'FA') AND (IncidentTypeCategory <> 'RX') AND (IsComplex = 'false') AND (CreatedOnDateTime >= 1466361489619)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=J-vUH-69cbgRwwuq7wPdgzHd75lZjDHKZigXYp0rTVM.
  //   url: 'https://gbcc.us/newfires1.geojson'
  //   // url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //   //     +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.25*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
  //   //     +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA') AND (UniqueFireIdentifier <> '2016-NVWID-020086')" 
  //   //     +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
  //       // +"&token=" + irwinToken
  //       // +"&token=" + irwin
  // });

  // var ongoingSource = new ol.source.Vector({
  //   format: new ol.format.GeoJSON(),
  //   crossOrigin: 'anonymous',
  //   url: 'https://gbcc.us/ongoingfires1.geojson'
  //   // url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //       // +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FireOutDateTime IS NULL) AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
  //       // +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (UniqueFireIdentifier <> '2016-ID8BN-003174') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1')"
  //       // +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
  //       // +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
  //       // +"&token=" + irwin
  //       // +"&token=" + irwinToken
  // });

  // var teamSource = new ol.source.Vector({
  //   format: new ol.format.GeoJSON(),
  //   crossOrigin: 'anonymous',
  //   url: 'https://gbcc.us/teamfires1.geojson'
  //   // url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //   //     +"&where=UniqueFireIdentifier = '2016-IDBOF-000539'"
  //   //     // +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
  //   //     +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
  //   //     +"&token=" + irwin
  // });

  // rxFiresLayer.setSource(rxSource);
  // newFiresLayer.setSource(newFiresSource);
  // ongoingFiresLayer.setSource(ongoingSource);
  // teamFiresLayer.setSource(teamSource);

// ______________________uncomment this block once EGP password works
  ajax({
    method: 'POST',
    url: 'https://egp.nwcg.gov/arcgis/tokens/',
    params: {
      f: 'json',
      username: EGP1,
      password: EGP2,
      client: 'referer',
      referer: 'https://gacc.nifc.gov/gbcc/',
      expiration: '1440'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  // ajax({
  //   method: 'POST',
  //   url: 'https://irwin.doi.gov/arcgis/tokens/generateToken',
  //   params: {
  //     f: 'json',
  //     username: IRWIN1,
  //     password: IRWIN2,
  //     client: 'referer',
  //     referer: 'https://gacc.nifc.gov/gbcc/',
  //     expiration: '1440'
  //   },
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // })
  // .then(function(firstValue) {
  //   irwin = JSON.parse(firstValue).token;
  //   var rxSource = new ol.source.Vector({
  //     format: new ol.format.GeoJSON(),
  //     url : "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //       + "&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad')" 
  //       + " AND (CreatedOnDateTime >= " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today + 86400000) + ")" 
  //       + " AND (FinalAcres IS NULL) AND (IncidentTypeCategory = 'RX') AND (IncidentTypeCategory <> 'FA')"
  //       + " AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
  //       + "&returnGeometry=true"
  //       + "&spatialRel=esriSpatialRelIntersects"
  //       + "&outFields=*"
  //       + "&outSR=102100"
  //       + "&token=" + irwin
  //       // + "&token=" + irwinToken
  //   });

  //   var newFiresSource = new ol.source.Vector({
  //     // format: new ol.format.TopoJSON(),
  //     // url: 'data/topojson/newFires.topojson'
  //     // format: new ol.format.EsriJSON(),
  //     format: new ol.format.GeoJSON(),
  //     // https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'FA') AND (IncidentTypeCategory <> 'RX') AND (IsComplex = 'false') AND (CreatedOnDateTime >= 1466361489619)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=J-vUH-69cbgRwwuq7wPdgzHd75lZjDHKZigXYp0rTVM.
  //     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //         +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (CreatedOnDateTime >= " + (today - 1.25*86400000) + ") AND (IncidentTypeCategory <> 'RX')"
  //         +" AND (IsComplex = 'false') AND (IncidentTypeCategory <> 'FA') AND (UniqueFireIdentifier <> '2016-NVWID-020086')" 
  //         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100" 
  //         // +"&token=" + irwinToken
  //         +"&token=" + irwin
  //   });

  //   var ongoingSource = new ol.source.Vector({
  //     format: new ol.format.GeoJSON(),
  //     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //         +"&where=(GACC = 'GBCC') AND (RecordSource = 'wildcad') AND (IncidentTypeCategory <> 'RX') AND (FireOutDateTime IS NULL) AND (FinalAcres IS NULL)  AND (IncidentTypeCategory <> 'FA')"
  //         +" AND (IsComplex = 'false') AND (UniqueFireIdentifier <> '2016-IDEIS-000039') AND (IncidentName <> 'North Alturas') AND (IncidentName <> 'FS FA 1') AND (UniqueFireIdentifier <> '2016-NVWID-020086')"
  //         +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
  //         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
  //         +"&token=" + irwin
  //         // +"&token=" + irwinToken
  //   });

  //   var teamSource = new ol.source.Vector({
  //     format: new ol.format.GeoJSON(),
  //     url: "https://irwin.doi.gov/arcgis/rest/services/Irwin/FeatureServer/0/query?f=geojson"
  //         +"&where=(UniqueFireIdentifier = '2016-IDBOF-000539')"
  //         // +" AND (CreatedOnDateTime > " + (today - 10*86400000) + ") AND (CreatedOnDateTime < " + (today - 1.25*86400000) + ") AND (ModifiedOnDateTime > " + (today - 5*86400000) + ")"
  //         +"&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100"
  //         +"&token=" + irwin
  //   });

  //   rxFiresLayer.setSource(rxSource);
  //   newFiresLayer.setSource(newFiresSource);
  //   ongoingFiresLayer.setSource(ongoingSource);
  //   teamFiresLayer.setSource(teamSource);
  //   return ajax({
  //     method: 'POST',
  //     url: 'https://egp.nwcg.gov/arcgis/tokens/',
  //     params: {
  //       f: 'json',
  //       username: EGP1,
  //       password: EGP2,
  //       client: 'referer',
  //       referer: 'https://gacc.nifc.gov/gbcc/',
  //       expiration: '1440'
  //     },
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     } 
  //   });
  //   // return ajax({
  //   //   method: 'GET',
  //   //   url: 'https://api.mlab.com/api/1/databases/fuelzonemaps/collections/createdfeatures?l=1&apiKey=' + mlabKey,
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   }
  //   // });
  // })
  .then(function(secondValue) {
    // perims = secondValue.slice(1,(perims.length - 1));
    // gsPerims = JSON.parse(perims);
    egp = JSON.parse(secondValue).token;
    // var egp6 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     crossOrigin: 'anonymous',
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
    //         +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });

    // var egp12 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     crossOrigin: 'anonymous',
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
    //         +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var egp24 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
    //         +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var egp48 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
    //         +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var egp999 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/0/query?f=json'
    //         +'&where=AgeInHours < 50&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    

    // var igpoint6 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
    //         +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var igpoint12 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
    //         +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var igpoint24 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
    //         +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });    
    // var igpoint48 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/4/query?f=json'
    //         +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var viirs6 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
    //         +'&where=AgeInHours < 6&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var viirs12 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
    //         +'&where=AgeInHours < 12&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });
    // var viirs24 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
    //         +'&where=AgeInHours < 24&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });    
    // var viirs48 = new ol.source.Cluster({
    //   distance: 2,
    //   source: new ol.source.Vector({
    //     format: new ol.format.EsriJSON(),
    //     url: 'https://egp.nwcg.gov/arcgis/rest/services/FireCOP/FireDetections/MapServer/2/query?f=json'
    //         +'&where=AgeInHours < 48&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100'
    //         +'&token=' + egp
    //   })
    // });

    // egpModisFireDetectionCentroidLayer6.setSource(egp6);
    // egpModisFireDetectionCentroidLayer12.setSource(egp12);
    // egpModisFireDetectionCentroidLayer24.setSource(egp24);
    // egpModisFireDetectionCentroidLayer48.setSource(egp48);
    // egpModisFireDetectionCentroidLayer999.setSource(egp999);

    // igpointCentroidLayer6.setSource(igpoint6);
    // igpointCentroidLayer12.setSource(igpoint12);
    // igpointCentroidLayer24.setSource(igpoint24);
    // igpointCentroidLayer48.setSource(igpoint48);
 
    // viirsCentroidLayer6.setSource(viirs6);
    // viirsCentroidLayer12.setSource(viirs12);
    // viirsCentroidLayer24.setSource(viirs24);
    // viirsCentroidLayer48.setSource(viirs48);
  })
  .then(function() {
    var nfs = newFiresLayer.getSource();
    var ofs = ongoingFiresLayer.getSource();
    var rxfs = rxFiresLayer.getSource();
    var tfs = teamFiresLayer.getSource();

    var countFeatures = function(layerSource, k, info) {
      layerSource.once('change', function(e) {
        if (layerSource.getState() === 'ready') {
            // console.log(layerSource.getFeatures().length)
            legend[k].innerHTML = layerSource.getFeatures().length + ' ' + info;
        }
      });
    }
    function firepop(ids, layerSource) {
      layerSource.once('change', function(e) {
        if (layerSource.getState() === 'ready') {
          for (i = 0; i < layerSource.getFeatures().length; i++) {
            // var key = layerSource.getFeatures()[i].getProperties().UniqueFireIdentifier;
            var key = layerSource.getFeatures()[i].getProperties().IncidentName;
            var value = {};
            ids[key] = value;
          }            
        }
      });
    }
    firepop(nfids, nfs);
    firepop(ofids, ofs);
    firepop(rxfids, rxfs);
    function extend(obj, src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
      }
      return obj;
    }
    var inc = extend(nfids,ofids);
    incidents = extend(inc,rxfids);
    countFeatures(nfs, 0, 'New Fires<tspan x="0" y="55">Initial Attack</tspan><tspan x="0" y="70">Age < 30 hrs</tspan>');
    countFeatures(ofs, 1, 'Ongoing Fires<tspan x="115" y="55">Age < 10 days &amp;</tspan><tspan x="115" y="70">Updated < 5 days</tspan>');
    // countFeatures(rxfs, 2, 'Prescribed Fires<tspan x="230" y="55">Age < 10 days &amp;</tspan><tspan x="230" y="70">Updated < 5 days</tspan>');
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/0/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(zero) {
    airtanker = JSON.parse(zero).features;
    resItems[0] = resSort(airtanker);
    // console.log(airtanker);
    // console.log(resItems[0]);
    // resSort(airtanker, airtankerR);
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/1/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(one) {
    dozer = JSON.parse(one).features;
    resItems[1] = resSort(dozer);
    // resSort(dozer, dozerR);  
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/2/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(two) {
    engine = JSON.parse(two).features;
    resItems[2] = resSort(engine);
    // resSort(engine, engineR); 
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/3/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(three) {
    crews = JSON.parse(three).features;
    resItems[3] = resSort(crews);
    // resSort(crews, crewsR);
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/4/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(four) {
    fixedWing = JSON.parse(four).features;
    resItems[4] = resSort(fixedWing);
    // resSort(fixedWing, fixedWingR);
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/5/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(five) {
    IMTs = JSON.parse(five).features;
    resItems[5] = resSort(IMTs);
    // resSort(IMTs, IMTsR);
    return ajax({
      method: 'POST',
      url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/6/query?f=json&where=IncidentGacc = 'Great Basin Coordination Center'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(function(six) {
    helicopter = JSON.parse(six).features;
    resItems[6] = resSort(helicopter);
    // resSort(helicopter, helicopterR);
    // return ajax({
    //   method: 'POST',
    //   url: "http://www.ncdc.noaa.gov/swdiws/json/nldn/201607130402:201607191002?bbox=-121,34,-107,46",
    //   // url: "http://www.ncdc.noaa.gov/swdiws/json/nldn/" + timeStamp((today - 21600001)) + ":" + timeStamp(today) + "?bbox=-121,34,-107,46",
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   } 
    // });
  })  
  // .then(function(seven) {
  //   lightning6 = JSON.parse(seven)["result"];
  //   // console.log(lightning6);
  //   // var points = lightning6.map((current_value, index, initial_array) => current_value['SDO_POINT_TYPE']) // -ish for es6
  //   var points = lightning6.map(function(current_value, index, initial_array) {
  //     var k = current_value['SDO_POINT_TYPE'];
  //     return k.split(' (')[1].slice(0, -1).split(' ');
  //   });

  //   points.map(function(current_value, index, initial_array) {
  //     var strike = new ol.geom.Point(ol.proj.transform([parseFloat(current_value[0]), parseFloat(current_value[1])], 'EPSG:4326', 'EPSG:3857'));
  //     var strikeFeature = new ol.Feature({
  //       geometry: strike
  //     });
  //     ltSource6.addFeature(strikeFeature);
  //   });

  //   return ajax({
  //     method: 'POST',
  //     url: "http://www.ncdc.noaa.gov/swdiws/json/nldn/" + timeStamp((today - 43200001)) + ":" + timeStamp((today - 21600000)) + "?bbox=-121,34,-107,46",
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     } 
  //   });
  // })      
  // .then(function(eight) {
  //   lightning12 = JSON.parse(eight)["result"];
  //   // console.log(lightning12);
  //   // var points = lightning12.map((current_value, index, initial_array) => current_value['SDO_POINT_TYPE']) // -ish for es6
  //   var points = lightning12.map(function(current_value, index, initial_array) {
  //     var k = current_value['SDO_POINT_TYPE'];
  //     return k.split(' (')[1].slice(0, -1).split(' ');
  //   });

  //   points.map(function(current_value, index, initial_array) {
  //     var strike = new ol.geom.Point(ol.proj.transform([parseFloat(current_value[0]), parseFloat(current_value[1])], 'EPSG:4326', 'EPSG:3857'));
  //     var strikeFeature = new ol.Feature({
  //       geometry: strike
  //     });
  //     ltSource12.addFeature(strikeFeature);
  //   });    
  //   return ajax({
  //     method: 'POST',
  //     // url: "firecesium/examples/lightning.json",
  //     url: "http://www.ncdc.noaa.gov/swdiws/json/nldn/" + timeStamp((today - 86400000)) + ":" + timeStamp((today - 43200000)) + "?bbox=-121,34,-107,46",
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     } //521600000 21600000
  //   });    
  // })
  // .then(function(nine) {
  //   lightning24 = JSON.parse(nine)["result"];
  //   // console.log(lightning24);
  //   // var points = lightning24.map((current_value, index, initial_array) => current_value['SDO_POINT_TYPE']) // -ish for es6
  //   var points = lightning24.map(function(current_value, index, initial_array) {
  //     var k = current_value['SDO_POINT_TYPE'];
  //     return k.split(' (')[1].slice(0, -1).split(' ');
  //   });

  //   points.map(function(current_value, index, initial_array) {
  //     var strike = new ol.geom.Point(ol.proj.transform([parseFloat(current_value[0]), parseFloat(current_value[1])], 'EPSG:4326', 'EPSG:3857'));
  //     var strikeFeature = new ol.Feature({
  //       geometry: strike
  //     });
  //     ltSource24.addFeature(strikeFeature);
  //   });
  // })
  // .then(function() {
  //   return ajax({
  //     method: 'POST',
  //     url: "https://egp.nwcg.gov/arcgis/rest/services/FireCOP/ActiveResources/MapServer/6/query?f=json&where=ResGacc = 'UT-GBC'&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&token=" + egp,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   });
  // })
  // .then(function(heli) {
  //   helicopter = JSON.parse(heli).features;
  //   resItems[6] = resSort(helicopter);
  //   console.log(resItems[6]);
  // })   
  .catch(function(error) {
    console.error('damnit.', error.statusText);
  });

  refresh.innerHTML = new Date(Date.now()).toLocaleString().split(', ')[1]; 
}
loadSources();
setInterval(loadSources, 900000);
