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
<link href='../assets/css/app.css' rel='stylesheet'/>

<p><strong>The National Human Settlement Layer (NHSL) is a collection of datasets that describe the physical and social characteristics of communities across Canada in the context of their vulnerability to natural hazards. Detailed information on land use, buildings, building asset values, people and community social vulnerability are provided at the approximate scale of neighbourhoods.</strong></p>

<div class="row">
  <div class="col-md-8">
    <p>The <a href='#physical_exposure'>Physical Exposure Layer</a> component of the National Human Settlement Layer (NHSL) includes a delineation of settled areas and related land use across Canada, as well as information about buildings, persons, and capital value of buildings assets (structure and contents) within those areas.</p>
    <p>The <a href='#social_fabric'>Social Vulnerability component</a> of the National Human Settlement Layer (NHSL) includes information about broad spatial patterns of social vulnerability at the neighbourhood scale, and indicators about the capacities for a community to withstand and recover from disaster events based on intrinsic characteristics of housing, family structure, individual autonomy and financial agency.</p>
    <!-- <p style="text-align:justify;">The <a href='#risk_dynamics'>Risk Dynamics Layer</a> utilizes information on population growth and land use change since 1975 to evaluate how evolving patterns of urbanization are contributing to escalating profiles of natural risk over time across Canada.</p> -->
    <p>These datasets have been developed to provide information about physical exposure and social vulnerability across Canada that can be used for quantitative risk assessment of natural hazards. The purpose is to support implementation of the Sendai Framework for Disaster Risk Reduction at the local, regional, and national scales. The information is not intended for use in site-specific studies.</p>
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
  <strong>The Physical Exposure component of the National Human settlement Layer (NHSL) includes a delineation of settled areas and related land use across Canada, as well as information about buildings, persons, and capital value of buildings assets (structure and contents) within those areas.</strong></p>

<p>This model represents an inventory of more than 9.1 million buildings in Canada; population dynamics at different times of day for 35.1 million people, and; the capital value of building assets totalling more than 8.3 trillion CAD$.</p>

<p>Buildings are classified according to their construction type, occupancy, and age. These classes are derived from the standard North American  HAZUS  building  taxonomy and include  38 construction   classes representing different types of wood, concrete, masonry, steel and prefabricated structures; 33 occupancy classes representing a mix of residential, civic, commercial and industrial land uses; and 4 age classes representing the assumed level of building design. The distribution of resulting ‘building archetypes’ are assigned to settled areas based on associated land-use and census characteristics.</p>

<p>Building populations at different times of day are estimated for standard daytime hours (9am-5pm); for morning and evening commute hours when people are in transit (7am-9am; 5pm-7pm), and; for nighttime hours when the majority of people are at home (7pm-7am).</p>

<p>The capital value of buildings assets is provided for structural and non-structural components of the building, as well as the potential building contents. Asset values are estimated based on industry replacement costs for representative regions across Canada.</p>

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
  <strong>The Social Vulnerability component of the National Human Settlement Layer (NHSL) includes information about broad spatial patterns of social vulnerability at the neighbourhood scale, and indicators about the capacities for a community to withstand and recover from disaster events based on intrinsic characteristics of housing, family structure, individual autonomy and financial agency.</strong>
</p>

<p>The  social  vulnerability  index  and  capacity  threshold  indicators   help  to identify  underlying patterns of social vulnerability within a given community. The model includes six composite indicators that describe the estimated total social vulnerability, and vulnerability level that might arise due to housing conditions, family structure, individual autonomy and financial agency. The model provide a means of comparing relative levels of vulnerability from one region to another across Canada and help identify specific neighbourhoods within which capacities to withstand and recover from disaster events may be strained.</p>

### Data Resources

<div id="nhsl_social_fabric_all_indicators">
  {% include nhsl-resources.html lang = page.lang layer = "nhsl_social_fabric_all_indicators" %}
</div>

<script src="https://code.jquery.com/jquery-1.12.2.min.js"
        integrity="sha256-lZFHibXzMHo3GGeehn1hudTAP3Sc0uKXBXAzHX1sjtk=" crossorigin="anonymous"></script>

<script src="../assets/script.js"></script>
