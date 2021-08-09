---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-05-07
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Earthquake Scenarios
lang: en
altLangPage: ../fr/dsra
nositesearch: true
nomenu: true
nofooter: true
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "OpenDRR Downloads"
    link: "/en"
  - title: "Earthquake Scenarios"
---
<div class="row">
  <div class="col-md-8">
    <p><strong>The National Earthquake Scenario Catalogue, presents the probable shaking, damage, loss and consequences from hypothetical earthquakes that could impact Canadians.</strong></p>
    <p>It considers only damage to buildings, and their inhabitants, from earthquake shaking, and therefore does not include damage to critical infrastructure or vehicles. Losses from secondary hazards, such as aftershocks, liquefaction, landslides, or fire following are also not currently included.</p>
    <p>The information is provided at the approximate scale of Census dissemination areas, and is intended to support planning and emergency management activities in earthquake prone regions.</p>
    <p>This project is run by the Geological Survey of Canada's Public Safety Geoscience Program. For inquiries related to the National Earthquake Scenario Catalogue, please contact Tiegan E. Hobbs at <a href="mailto:tiegan.hobbs@canada.ca">tiegan.hobbs@canada.ca</a>.</p>
    <section class="jumbotron">
      <p>All products are released under the Open Government Licence - Canada.</p>
      <p><a href="https://open.canada.ca/en/open-government-licence-canada" class="btn btn-info btn-lg" role="button">Learn more</a></p>
    </section>
  </div>
  <div class="col-md-4">
    <p>
      <a href="https://github.com/OpenDRR/earthquake-scenarios" class="btn btn-info btn-lg btn-block" role="button"><i class="fab fa-github"></i> GitHub</a>
    </p>
    <div class="panel panel-primary mrgn-tp-sm">
      <div class="panel-heading">
        <div class="panel-title">Distribution contact</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <b>Organization name:</b><br>
          Government of Canada;Natural Resources Canada;Lands and Minerals Sector, Geological Survey of Canada
        </li>
        <li class="list-group-item">
          <b>Email:</b><br>
          <a href="mailto:GSC.info.CGC@NRCan.gc.ca">GSC.info.CGC@NRCan.gc.ca</a>
        </li>
      </ul>
    </div>
  </div>
</div>



## Leach River Full Fault - Magnitude 7.3

<p>Magnitude 7.3 scenario based on complete rupture of the CanSHM6 Hazard Model implementation of the Leech River Full Fault.</p>

<div id="dsra_acm7p3_leechriverfullfault_all_indicators"></div>

<script src="https://code.jquery.com/jquery-1.12.2.min.js"
        integrity="sha256-lZFHibXzMHo3GGeehn1hudTAP3Sc0uKXBXAzHX1sjtk=" crossorigin="anonymous"></script>
<script>

  var config = JSON.stringify({{site.data.metadata | jsonify }}),
      metadata = JSON.parse( config ),
      layers = [ 'dsra_acm7p3_leechriverfullfault_all_indicators' ],
      header = '<tr> \
          <th scope="col" class="col-sm-6">{% if page.lang == 'en' %}Resource Name{% endif %} {% if page.lang == 'fr' %}Nom de la ressource{% endif %}</th> \
          <th scope="col" class="col-sm-2 hidden-xs">{% if page.lang == 'en' %}Resource Type{% endif %} {% if page.lang == 'fr' %}Type de ressource{% endif %}</th> \
          <th scope="col"class="col-sm-2">Format</th> \
          <th scope="col" class="col-sm-1">{% if page.lang == 'en' %}Links{% endif %} {% if page.lang == 'fr' %}Liens{% endif %}</th> \
      </tr>';

      for ( l in layers ) {

        let id = layers[l];

        for ( d in metadata.datasets ) {

            let dataset = metadata.datasets[ d ];

            if ( id.includes( dataset.id ) ) {

              map_resources = dataset.resources;

              let resrcs = "",
                  resrcs_prov = "";

              for ( res in map_resources ) {

                  let r = map_resources[res];

                  if ( r.language.indexOf( "en" ) === -1 ) {
                    continue;
                  }

                  let lang = r.language == "en" ? "English" : "French";
                  let btntxt = "{{page.lang}}" == "en" ? "Access" : "Accès";
                  let download_link = r.link.indexOf( "http" ) === -1 ? '{{site.github.releases_url}}/download{{site.github.releases[0].tag_name}}/' + r.link : r.link;

                  if ( r.region === 'ca' ) {
                      resrcs += '<tr><td>' + r.name + '</td><td class="hidden-xs">' + r.type + '</td><td><span class="label ' + r.format + '">' + r.format + '</td><td><a href="' + download_link + '" class="btn btn-primary">' + btntxt + '</a></td></tr>';
                  }
                  else {
                    resrcs_prov += '<tr class="' + r.region + '"><td>' + r.name + '</td><td class="hidden-xs">' + r.type + '</td><td><span class="label ' + r.format + '">' + r.format + '</td><td><a href="' + download_link + '" class="btn btn-primary">' + btntxt + '</a></td></tr>';
                  }
              }

              let i = id;

              

              $( "#" + i ).append('<table class="table table-striped table-responsive"><tbody>' + header + resrcs + '</tbody></table>' );

              break;
          }
        }
      }

</script>

<style>

.GPKG {
  color: #083c6c;
  background-color: #e8f2f4;
}

.ESRI.REST {
  color: #278400;
  background-color: #d8eeca;
}

.EXCEL {
  color: #f90;
  background-color: #f9f4d4;
}

.HTML {
  color: #FF0000;
  background-color: #FFCCCC;
}

</style>
