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
<p><strong>The National Human Settlement Layer (NHSL) is a collection of thematic datasets that describe the physical, social and economic characteristics of urban centres and rural/remote communities across Canada.  Detailed information on land use, buildings, people and capital assets are provided at the Census Dissemination Area administrative level for more than 454,000 settled areas across Canada.</strong></p>

<div class="row">
  <div class="col-md-8">
    <p>The <a href='#physical_exposure'>Physical Exposure Layer</a> includes a delineation of human settlement areas and related functional land use classes across Canada, and provides detailed information on construction type, occupancy and design level of more than 9.1 million buildings; population dynamics at different times of day for 35.1 million people, and; capital asset valuation of buildings and contents totaling more than 8.3 trillion CAD$.</p>
    <p>The <a href='#social_fabric'>Social Fabric Layer</a> utilizes Census demographic data to evaluate broad spatial patterns of vulnerability, and neighbourhood-level capacities to withstand and recover from disaster events based on intrinsic characteristics of housing, family structure, individual autonomy and financial agency.</p>
    <!-- <p style="text-align:justify;">The <a href='#risk_dynamics'>Risk Dynamics Layer</a> utilizes information on population growth and land use change since 1975 to evaluate how evolving patterns of urbanization are contributing to escalating profiles of natural risk over time across Canada.</p> -->
    <p>Although developed to support quantitative risk assessments and implementation of the <a href="https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030">Sendai Framework for Disaster Risk Reduction</a> at local and regional scales in Canada, the NHSL is also suitable for use in other integrated landscape modeling applications, including climate change adaptation and sustainable land use planning.</p>
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

<p>
  <div class="card" style="float:left;margin:10px 20px 0px 0px;">
    <img src="../assets/img/nhsl_physical_exposure.png" width="350" class="img-rounded img-responsive"/>
    <div class="card-body">
      <a href="nhsl_physical_exposure_map.html" class="btn btn-primary btn-lg btn-block mrgn-tp-sm" role="button"> View on Map </a>
    </div>
  </div>
  <strong>The Physical Exposure component of the National Human Settlement Layer (NHSL) includes a delineation of built-up areas and related functional land use classes for Census Dissemination Areas in urban centres and rural/remote communities across Canada.</strong></p>

<p>It provides detailed information on construction type, occupancy and design level for more than 9.1 million buildings; population dynamics at different times of day for 35.1 million people, and; capital asset valuation of buildings and contents totalling more than 8.3 trillion CAD$.</p>

<p>The building portfolio is classified using a combination of 36 construction taxonomies that include different types of wood, concrete, masonry, steel and prefabricated structures; and 33 occupancy classes that include a mix of residential, civic, commercial and industrial functional uses.  Context-specific mapping schemes for each combination of land use, construction type and occupancy class are used to allocate a distribution of building classes that reflect the overall structural form and function of a given neighbourhood.</p>

<p>Building populations at different times of day are estimated for standard workday hours when people are in offices, schools or other group facilities (9am-5pm); for morning and evening commute hours when people are in transit (7am-9am; 5pm-7pm), and; for evening hours when the majority of people are at home (7pm-7am).</p>

<p>Capital asset valuation is based on industry replacement costs of building archetypes for representative regions across Canada.</p>

<p>The building inventory is aligned with international standards for multi-hazard risk assessment and is suitable for use in other land use assessment applications that may require specific information on the form and/or function of the built environment.</p>

### Data Resources

<div id="nhsl_physical_exposure_all_indicators">
  {% include nhsl-resources.html lang = page.lang layer = "nhsl_physical_exposure_all_indicators" %}
</div>

<hr>

<a name="social_fabric"></a>

## Social Fabric and Capacity Thresholds

<p>
  <div class="card" style="float:left;margin:10px 20px 0px 0px;">
    <img src="../assets/img/nhsl_social_fabric.png" width="350" class="img-rounded img-responsive"/>
    <div class="card-body">
      <a href="nhsl_social_fabric_map.html" class="btn btn-primary btn-lg btn-block mrgn-tp-sm" role="button"> View on Map </a>
    </div>
  </div>
  <strong>The Social Fabric component of the National Human Settlement Layer (NHSL) utilizes available Census demographic data to evaluate broad spatial patterns of vulnerability, and neighbourhood-level capacities to withstand and recover from disaster events based on characteristics of housing, family structure, individual autonomy and financial agency.</strong>
</p>

<p>Vulnerability and capacity threshold indicators help to identify underlying patterns of social inequity that may exist within a given community or region, and to address the question of who is likely to bear the greatest burden of risk following a disaster event. Levels of vulnerability for each component of the social vulnerability index are assessed using analytic methods adapted from the Cutter 'Hazards of Place Model' to screen and rank demographic variables based on their capacity to explain spatial patterns across a broad range of community archetypes including dense urban centres, surrounding suburban/exurban regions, and more distant rural and remote settlements.</p>

<p>Composite indicators describing characteristics of housing conditions, family structure, individual autonomy and financial agency provide a means of comparing relative levels of vulnerability from one region to another across Canada and help identify specific neighbourhoods within which capacities to withstand and recover from disaster events may be strained. Indicators are reported at the Census Dissemination Area level and can be used in conjunction with information on specific hazard threats to identify both potential hotspots of concern within a community or region, and areas in which proactive investments in planning and capacity development may be effective in building disaster resilience and longer-term sustainability.</p>



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
