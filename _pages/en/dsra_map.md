---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-07-26
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Earthquake Scenarios Map
lang: en
altLangPage: ../fr/dsra_map.html?scenario={{request.params.scenario}}
nositesearch: true
nomenu: true
nofooter: true
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "OpenDRR Downloads"
    link: "/en"
  - title: "Earthquake Scenarios"
    link: "/en/dsra"
  - title: "Earthquake Scenarios"
    link: "/en/nhsl#physical_exposure"
---
<!-- Load Leaflet from CDN -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>

<!-- Load Esri Leaflet from CDN -->
<script src="https://unpkg.com/esri-leaflet@3.0.2/dist/esri-leaflet.js"
integrity="sha512-myckXhaJsP7Q7MZva03Tfme/MSF5a6HC2xryjAM4FxPLHGqlh5VALCbywHnzs2uPoF/4G/QVXyYDDSkp5nPfig=="
crossorigin=""></script>

<!-- Load Esri Leaflet Renderers plugin to use feature service symbology -->
<script src="https://unpkg.com/esri-leaflet-renderers@2.1.2" crossorigin=""></script>

<script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js'></script>
<link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css' rel='stylesheet'/>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<link href='../assets/css/app.css' rel='stylesheet'/>

<div id="map"></div>
<div id="sidebar"></div>

<script>

  var params = new URLSearchParams(window.location.search);
  var scenario = params.get('scenario').toLowerCase();

  var tiles = L.tileLayer( '//{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	});

  var map = L.map( 'map', {
    fullscreenControl: true,
    center: [ 49.1367, -122.9064 ],
    zoom: 12,
    layers: [ tiles ]
  });

  var geojsonUrl = "https://geo-api.stage.riskprofiler.ca/collections/dsra_" + scenario + "_all_indicators_s/items?f=json";
  $.getJSON(geojsonUrl, function (data) {
    L.geoJson(data).addTo(map);
  });

  map.on( 'overlayadd', function() {
    $( '#map' ).before( '<div id="modal"></div>' );
  });

  map.on( 'fullscreenchange', function () {
    map.invalidateSize();
  });

  var formatter = new Intl.NumberFormat( 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    //Usage: formatter.format(2500); $2,500.00
  });

  var oldId;
  var oldLayer;  

  function showAttributes( e, current_layer ) {

    current_layer.resetFeatureStyle( oldId );

    oldId = e.layer.feature.id;
    oldLayer = current_layer;

    current_layer.setFeatureStyle(e.layer.feature.id, {
      fillColor: 'red',
      color: 'red',
      weight: 3,
      fillOpacity: 0.5
    });
      
    current_layer.query()
      .where("OBJECTID = " + e.layer.feature.id )
      .run( function( error, resp ) {

        let props = resp.features[0].properties,
          string = '<table class="table table-striped table-responsive"><tr>';

          counter = 1;
          for ( const key in props ) {

            desc = window[key + 'Desc'];
            detail = window[key + 'Detail']
            format = window[key + 'Format']
            value = props[key]

            if ( desc ) {
              if ( format === 'Two' ) {
                value = value.toLocaleString(undefined, { maximumFractionDigits: 2 })
              }
              else if ( format === '$' ) {
                value = value.toLocaleString(undefined, {style:'currency', currency:'USD'})
              }
              else if ( format === 'Round' ) {
                value = Math.round(value)
              }

              string +=
              '<td class="attr"><span class="prop" title="' + detail + '">' + desc + '</span><span class="val">' + value + '</span></td>';
            }
            else if ( key === 'OBJECTID' || key === 'SHAPE_Length' || key === 'SHAPE_Area' ) {}
            else {
              string +=
              '<td class="attr"><span class="prop">' + key + '</span><span class="val">' + value + '</span></td>';
            }
            if ( counter % 3 === 0) {
                string += '</tr><tr>';
              }
            counter += 1;
          }
        string += '</tr></table>';
        $( '#sidebar' ).html( '<h3>Properties of Selected Feature</h3>' + string );

      });
  }

  function buildLegend( metadata ) {

	  map.removeControl(legend);
	
    var renderers = metadata.drawingInfo.renderer.classBreakInfos ? metadata.drawingInfo.renderer.classBreakInfos : metadata.drawingInfo.renderer.uniqueValueInfos;

    legend.onAdd = function ( map ) {

      var div = L.DomUtil.create( 'div', 'info legend' );

      if ( renderers.length === 0 ) { 
        return L.DomUtil.create( 'div' ); 
      }

      div.innerHTML += '<center><strong>' + metadata.name + '</strong></center>';

      for ( var i = 0; i < renderers.length; i++ ) {
        div.innerHTML +=
        '<div style="white-space: nowrap;margin-top: 2px;"><i style="background:rgb( ' + renderers[i][ 'symbol' ].color[0] + ',' + renderers[i][ 'symbol' ].color[1] + ',' + renderers[i][ 'symbol' ].color[2] + ',' + renderers[i][ 'symbol' ].color[3] + ' );border-color:rgb( ' + renderers[i][ 'symbol' ][ 'outline' ].color[0] + ',' + renderers[i][ 'symbol' ][ 'outline' ].color[1] + ',' + renderers[i][ 'symbol' ][ 'outline' ].color[2]+ ',' + renderers[i][ 'symbol' ][ 'outline' ].color[3] + ' );border-width:' + renderers[i][ 'symbol' ][ 'outline' ].width + 'px;"></i> ' +
        renderers[i][ 'label' ] + '</div>';
      }

      return div;

    };

    legend.addTo( map );
  }
</script>