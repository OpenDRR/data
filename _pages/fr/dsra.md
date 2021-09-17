---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-05-07
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Scénarios de séismes
lang: fr
altLangPage: ../en/dsra
nositesearch: true
nomenu: true
nofooter: true
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "Téléchargements de OpenDRR"
    link: "/fr"
  - title: "Scénarios de séismes"
---

<link href='../assets/css/app.css' rel='stylesheet'/>

<div class="row">
  <div class="col-md-8">
    <p>Bibliothèque de scénarios de séismes sélectionnés pour le Canada.</p>
    <section class="jumbotron">
      <p>Tous les produits sont publiés sous la licence du gouvernement ouvert – Canada.</p>
      <p><a href="https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada" class="btn btn-info btn-lg" role="button">Voir</a></p>
    </section>
  </div>
  <div class="col-md-4">
    <div class="panel panel-primary mrgn-tp-sm">
      <div class="panel-heading">
        <div class="panel-title">Personne-ressource responsable de la distribution</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <b>Nom de l'organisation:</b><br>
          Gouvernement du Canada;Ressources naturelles Canada;Secteur des terres et des minéraux, Commission géologique du Canada
        </li>
        <li class="list-group-item">
          <b>Courriel:</b><br>
          <a href="mailto:GSC.info.CGC@NRCan.gc.ca">GSC.info.CGC@NRCan.gc.ca</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<h3>Scénarios Sélectionnés</h3>

<div class="row">
  <div class="col-md-12">
    <iframe width="100%" height="480" frameborder="0" src="https://viewscreen.githubusercontent.com/view/geojson?url=https%3a%2f%2fraw.githubusercontent.com%2fDamonU2%2fearthquake-scenarios%2fauto-updates-for-pages%2fFINISHED%2fFinishedScenariosFr.geojson" title="FinishedScenariosFr.geojson"></iframe>
    <table style="width:100%; font-size:14px;">
      <tr>
        <td><img src="../assets/img/small.png" width='20'> Magnitude < 6.0</td>
        <td><img src="../assets/img/medium.png" width='25'> Magnitude 6.0 - 7.9</td>
        <td><img src="../assets/img/large.png" width='30'> Magnitude 8.0+</td>
      </tr>
    </table>
  </div>
</div>

{% assign header = '' %}
{% if page.lang == 'fr' %}
    {% assign header = '<tr>
        <th scope="col" class="col-sm-6">Nom de la ressource</th>
        <th scope="col" class="col-sm-2 hidden-xs">Type de ressource</th>
        <th scope="col" class="col-sm-2">Format</th>
        <th scope="col" class="col-sm-1">Liens</th>
    </tr>' %}
{% else %}
    {% assign header = '<tr>
        <th scope="col" class="col-sm-6">Resource Name</th>
        <th scope="col" class="col-sm-2 hidden-xs">Resource Type</th>
        <th scope="col" class="col-sm-2">Format</th>
        <th scope="col" class="col-sm-1">Links</th>
    </tr>' %}
{% endif %}

{% if page.lang == 'en' %}{% assign btntxt = "Access" %}{% else %}{% assign btntxt = "Accès" %}{% endif %}

{% for scenario in site.data.dsra.scenarios %}
  <h4 id={{scenario.name}}>{{scenario.title}}</h4>
  <p style="word-break: break-word;">{{scenario.description[page.lang]}}</p>
  <div>
      <table class="table table-striped table-responsive">
          <tbody>
              {{ header }}
              <tr>
                  <td>GitHub repository</td>
                  <td class="hidden-xs">Document</td>
                  <td><span class="label HTML">HTML</span></td>
                  <td><a href="https://github.com/OpenDRR/earthquake-scenarios/blob/master/FINISHED/{{scenario.name}}.md" class="btn btn-primary">{{btntxt}}</a></td>
              </tr>
              <tr>
                  <td>Riskprofiler Page (Points)</td>
                  <td class="hidden-xs">Web Service</td>
                  <td><span class="label HTML">HTML</span></td>
                  <td><a href="https://geo-api.stage.riskprofiler.ca/collections/dsra_{{scenario.name}}_all_indicators_b" class="btn btn-primary">{{btntxt}}</a></td>
              </tr>
              <tr>
                  <td>Riskprofiler Page (Polygons)</td>
                  <td class="hidden-xs">Web Service</td>
                  <td><span class="label HTML">HTML</span></td>
                  <td><a href="https://geo-api.stage.riskprofiler.ca/collections/dsra_{{scenario.name}}_all_indicators_s" class="btn btn-primary">{{btntxt}}</a></td>
              </tr>
              <tr>
                  <td>{{scenario.title}} (Points)</td>
                  <td class="hidden-xs">Dataset</td>
                  <td><span class="label GPKG">GPKG</span></td>
                  <td><a href="https://github.com/OpenDRR/earthquake-scenarios/blob/master/FINISHED/{{scenario.name}}_all_indicators_b.gpkg.zip" class="btn btn-primary">{{btntxt}}</a></td>
                  </tr>
              <tr>
                  <td>{{scenario.title}} (Polygons)</td>
                  <td class="hidden-xs">Dataset</td><td><span class="label GPKG">GPKG</span></td>
                  <td><a href="https://github.com/OpenDRR/earthquake-scenarios/blob/master/FINISHED/{{scenario.name}}_all_indicators_s.gpkg.zip" class="btn btn-primary">{{btntxt}}</a></td>
              </tr>
          </tbody>
      </table>
  </div>
{% endfor %}
