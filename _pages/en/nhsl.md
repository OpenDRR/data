---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-07-26
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Human Settlement and Natural Hazards in Canada
lang: en
altLangPage: ../fr/nhsl
nositesearch: true
nomenu: true
nofooter: true
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "OpenDRR Downloads"
    link: "/en"
  - title: "Human Settlement and Natural Hazards in Canada"
---
{% assign nhsl_set = site.data.nhsl.datasets | where: "id", "nhsl" %}
{% assign nhsl_text = nhsl_set[0].description[page.lang] | split: '\n' %}
{% assign para_text = nhsl_text | slice: 1, nhsl_text.size %}

<p><strong>{{ nhsl_text[0] }}</strong></p>
<div class="row">
  <div class="col-md-8">
    {% for paragraph in para_text %}
      <p>{{ paragraph | replace: "Physical Exposure Layer", "<a href='#physical_exposure'>Physical Exposure Layer</a>" | replace: "Social Vulnerability", "<a href='#social_fabric'>Social Vulnerability</a>" }}</p>
    {% endfor %}
    <!-- <p style="text-align:justify;">The <a href='#risk_dynamics'>Risk Dynamics Layer</a> utilizes information on population growth and land use change since 1975 to evaluate how evolving patterns of urbanization are contributing to escalating profiles of natural risk over time across Canada.</p> -->
    <section class="jumbotron">
      <p>All products are released under the Open Government Licence - Canada.</p>
      <p><a href="https://open.canada.ca/en/open-government-licence-canada" class="btn btn-info btn-lg" role="button">Learn more</a></p>
    </section>
  </div>
  <div class="col-md-4">
    <div class="panel panel-primary mrgn-tp-sm">
      <div class="panel-heading">
        <div class="panel-title">Datasets</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <a href='#physical_exposure'>Physical Exposure Layer</a>
        </li>
        <li class="list-group-item">
          <a href='#social_fabric'>Social Fabric Layer</a>
        </li>
      </ul>
    </div>
    <div class="panel panel-primary">
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

<hr>

<a name="physical_exposure"></a>

## Physical Exposure

{% assign phys_ex_set = site.data.nhsl.datasets | where: "id", "nhsl_physical_exposure_all_indicators" %}
{% assign phys_ex_text = phys_ex_set[0].description[page.lang] | split: '\n' %}
{% assign para_text = phys_ex_text | slice: 1, phys_ex_text.size %}

<p>
  <div class="card" style="float:left;margin:10px 20px 0px 0px;">
    <img src="../assets/img/nhsl_physical_exposure.png" width="350" class="img-rounded img-responsive"/>
    <div class="card-body">
      <a href="nhsl_physical_exposure_map.html" class="btn btn-primary btn-lg btn-block mrgn-tp-sm" role="button"> View on Map </a>
    </div>
  </div>
  <strong>{{ phys_ex_text[0] }}</strong></p>

{% for paragraph in para_text %}
  <p>{{ paragraph }}</p>
{% endfor %}

### Data Resources

<div id="nhsl_physical_exposure_all_indicators">
  {% include nhsl-resources.html lang = page.lang layer = "nhsl_physical_exposure_all_indicators" %}
</div>

<hr>

<a name="social_fabric"></a>

## Social Fabric and Capacity Thresholds

{% assign soc_fab_set = site.data.nhsl.datasets | where: "id", "nhsl_social_fabric_all_indicators" %}
{% assign soc_fab_text = soc_fab_set[0].description[page.lang] | split: '\n' %}
{% assign para_text = soc_fab_text | slice: 1, soc_fab_text.size %}

<p>
  <div class="card" style="float:left;margin:10px 20px 0px 0px;">
    <img src="../assets/img/nhsl_social_fabric.png" width="350" class="img-rounded img-responsive"/>
    <div class="card-body">
      <a href="nhsl_social_fabric_map.html" class="btn btn-primary btn-lg btn-block mrgn-tp-sm" role="button"> View on Map </a>
    </div>
  </div>
  <strong>{{ soc_fab_text[0] }}</strong>
</p>

{% for paragraph in para_text %}
  <p>{{ paragraph }}</p>
{% endfor %}

### Data Resources

<div id="nhsl_social_fabric_all_indicators">
  {% include nhsl-resources.html lang = page.lang layer = "nhsl_social_fabric_all_indicators" %}
</div>

<script src="https://code.jquery.com/jquery-1.12.2.min.js"
        integrity="sha256-lZFHibXzMHo3GGeehn1hudTAP3Sc0uKXBXAzHX1sjtk=" crossorigin="anonymous"></script>

<script>
  let layers = [ 'nhsl_risk_dynamics_all_indicators', 'nhsl_social_fabric_all_indicators', 'nhsl_physical_exposure_all_indicators', 'nhsl_hazard_threat_all_indicators']
  for ( l in layers ) {
    $( '#select-rgn-' + layers[l] ).on( 'change', function() {
      $( ".ab, .bc, .mb, .ns, .nl, .qc, .on, .nu, .yt, .nt, .sk, .pe, .nb, .rgn" ).hide();

      $("select").val( $( this ).val() );

      if ( $( this ).val() ) {
        let p = '.' + $( this ).val() + ', .rgn';
        $( p ).fadeIn();
      }
    });
  }
</script>

<style>

.ab, .bc, .mb, .ns, .nl, .qc, .on, .nu, .yt, .nt, .sk, .pe, .nb, .rgn { display:none; }

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
</style>
