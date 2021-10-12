---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-07-26
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Earthquake Scenario Map
lang: en
altLangPage: ../fr/dsra_map.html
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

{% assign variables = '' %}
{% for attribute in site.data.dsra_attributes.attributes %}
  {% capture variable %}
  window['{{attribute.name}}' + 'Desc'] = '{{attribute.description[page.lang]}}';
  window['{{attribute.name}}' + 'Detail'] = '{{attribute.detailed[page.lang]}}';
  window['{{attribute.name}}' + 'Format'] = Number('{{attribute.format}}');
  {% endcapture %}
  {% assign variables = variables | append: variable %}
{% endfor %}

<script>

  {{variables}}

  var map = L.map( 'map', {
    fullscreenControl: true,
    center: [ 57, -100 ],
    zoom: 4}),
    params = new URLSearchParams(window.location.search),
    scenario = params.get( 'scenario' ).toLowerCase(),
    limit = 500,
    geojsonUrl = "https://geo-api.stage.riskprofiler.ca/collections/opendrr_dsra_" + scenario + "_all_indicators_s/items?lang=en_US&f=json&limit=" + limit,
    geoJSON,
    selection;

  L.tileLayer( '//{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo( map );

  const geojsonLayer = L.geoJSON([], {
      style: featureStyle,
      onEachFeature: geoJsonOnEachFeature
    }).addTo( map );

  $( '#map' ).before( '<div id="modal"></div>' );
  getData( geojsonUrl );
  
  function getData( url ) {
    
    var nxt_lnk;

    $.getJSON( url, function ( data ) {
      
      geojsonLayer.addData( data );

      for ( var l in data.links ) {
        lnk = data.links[ l ];
        if ( lnk.rel == "next" ) {
          nxt_lnk = lnk.href;
          break;
        }
      }
      
      // if next link continue loading data
      if ( nxt_lnk ) {
        getData( nxt_lnk );
      } else {
        map.fitBounds(geojsonLayer.getBounds());
        // done with paging so remove progress
        $( '#modal' ).remove();
      }
    });
  }

  map.on( 'fullscreenchange', function () {
    map.invalidateSize();
  });

  function geoJsonOnEachFeature( feature, layer ){
    layer.bindPopup( function ( e ) {
      return L.Util.template( '<p>ID: <strong>{Sauid}</strong></p>', e.feature.properties );
    }).on({
      click: function( e ) {
        if ( selection ) {
          selection.setStyle(featureStyle());
        }
        selection = e.target;
        selection.setStyle(selectedStyle());

        let props = selection.feature.properties;
        string = '<table class="table table-striped table-responsive"><tr>';

        counter = 1;
        for ( const key in props ) {

          mod_key = key;
          mod = '';
          if ( key.slice( -3 ) === '_b0' ) {
            mod_key = key.slice( 0, -3 );
            mod = ' (Baseline)';
          }
          else if ( key.slice( -3 ) === '_r1' ) {
            mod_key = key.slice( 0, -3 );
            mod = ' (Retrofit)';
          }
          else if ( key.slice( -3 ) === '_le' ) {
            mod_key = key.slice( 0, -3 );
            mod = ' (Seismic Upgrade)';
          }

          desc = window[ mod_key + 'Desc' ];
          detail = window[ mod_key + 'Detail' ];
          format = window[ mod_key + 'Format' ];
          value = props[ key ];

          if ( desc ) {
              if ( format === 444 ) {
                value = value.toLocaleString( undefined, {style:'currency', currency:'USD'});
              }
              else if ( format === 111 ) {
                value = value.toLocaleString( undefined, { maximumFractionDigits: 0 })
              }
              else if ( format === 555 ) {
                value *= 100
                value = value.toLocaleString( undefined, { maximumFractionDigits: 2 });
                value += '%';
              }
              else if ( format < 0 ) {
                mult = Math.abs(format);
                rounded = Math.round( value / ( 10 ** mult )) * 10 ** mult;
                value = rounded.toLocaleString( undefined);
              }
              else if ( format > 0 ) {
                value = value.toLocaleString( undefined, { maximumFractionDigits: format });
              }

              string +=
              '<td class="attr"><span class="prop" title="' + detail + '">' + desc + mod + ' - ' + key + '</span><span class="val">' + value + '</span></td>';
            }
            else if ( key === 'OBJECTID' || key === 'SHAPE_Length' || key === 'SHAPE_Area' || key === 'geom_poly' ) {}
          else {
            string +=
              '<td class="attr"><span class="prop">' + key + '</span><span class="val">' + value + '</span></td>';
          }
          if ( counter % 3 === 0 ) {
              string += '</tr><tr>';
            }
          counter += 1;
        }
        string += '</tr></table>';
        $( '#sidebar' ).html( '<h3>Properties of Selected Feature</h3>' + string );
      }
    });
  };

  function featureStyle( feature ) {
            return {
               fillColor: 'grey',
               weight: 0.2,
               fillOpacity: 0.5,
               color: 'black',
               opacity: 1
            };
          }

  function selectedStyle( feature ) {
             return {
               fillColor: 'red',
               color: 'red',
               weight: 1,
               fillOpacity: 0.5
            };
          }

</script>