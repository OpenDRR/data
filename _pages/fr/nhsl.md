---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-07-26
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Zones de peuplement et dangers naturels au Canada
lang: fr
altLangPage: ../en/nhsl
nositesearch: true
nomenu: true
nofooter: true
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "Téléchargements de OpenDRR"
    link: "/fr"
  - title: "Zones de peuplement et dangers naturels au Canada"
---
<link href='../assets/css/app.css' rel='stylesheet'/>

<p><strong>La couche des zones de peuplement au niveau national (couche ZPN) est une collection d’ensembles de données thématiques qui décrivent les caractéristiques physiques, sociales et économiques des centres urbains et des collectivités rurales et éloignées du Canada, ainsi que leur vulnérabilité aux dangers naturels préoccupants. Des renseignements détaillés sur l’utilisation des terres, les bâtiments, les gens et les immobilisations sont fournis au niveau administratif des aires de diffusion du recensement pour plus de 454 000 régions habitées à travers le Canada.</strong></p>
<div class="row">
  <div class="col-md-8">
    <p>La <a href='#physical_exposure'>couche de l’exposition physique</a> inclut une délinéation des zones de peuplement humain et les catégories d’utilisation fonctionnelle des terres qui y sont associées au Canada, et fournit des renseignements détaillés sur le type de construction, l’occupation et le niveau de conception de plus de 9,1 millions de bâtiments; la dynamique de la population à diverses heures de la journée pour 35,1 millions de personnes; et une évaluation des immobilisations des bâtiments et de leur contenu totalisant plus de 8 300 milliards de dollars canadiens.</p>
    <p>La <a href='#hazard_threat'>couche des menaces liées à des dangers naturels</a> utilise l’information disponible au niveau national sur les tremblements de terre, les inondations, les coulées des débris, les feux de forêt, et les dangers liés aux vents violents pour évaluer dans quelle mesure les gens et les biens essentiels se trouvent en danger, ainsi que le potentiel de perturbations socioéconomiques dans les zones où l’intensité des dangers dépasse les seuils minimaux de dommages.</p>
    <p>La <a href='#social_fabric'>couche du tissu social</a> utilise des données démographiques du recensement pour évaluer les profils spatiaux généraux de la vulnérabilité et les capacités au niveau des quartiers de résister à des événements catastrophiques, et à s’en rétablir, en se fondant sur les caractéristiques intrinsèques des logements, des structures familiales, de l’autonomie individuelle et des systèmes financiers.</p>
    <!-- <p>La <a href='#risk_dynamics'>couche de la dynamique des risques</a> utilise l’information disponible sur la croissance de la population et les changements à l’utilisation des terres depuis 1975 pour évaluer comment l’évolution des tendances de l’urbanisation contribuent à aggraver les profils de risques naturels au fil du temps au Canada.</p> -->
    <p>Bien qu’elle ait été mise au point pour appuyer l’évaluation quantitative des risques et la mise en œuvre du <a href="https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030">Cadre de Sendai pour la réduction des risques de catastrophe</a> aux échelles locales et régionales au Canada, la couche ZPN convient également à d’autres applications intégrées de modélisation du paysage, y compris l’adaptation aux changements climatiques et la planification de l’utilisation durable des terres.</p>
    <section class="jumbotron">
      <p>Tous les produits sont publiés sous la licence du gouvernement ouvert – Canada.</p>
      <p><a href="https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada" class="btn btn-info btn-lg" role="button">Voir</a></p>
    </section>
  </div>
  <div class="col-md-4">
  <div class="panel panel-primary mrgn-tp-sm">
      <div class="panel-heading">
        <div class="panel-title">Ensembles de données</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <a href='#physical_exposure'>Couche de l’exposition physique</a>
        </li>
        <li class="list-group-item">
          <a href='#hazard_threat'>Couche des menaces liées à des dangers naturels</a>
        </li>
        <li class="list-group-item">
          <a href='#social_fabric'>Couche du tissu social</a>
        </li>
        <!-- <li class="list-group-item">
          <a href='#risk_dynamics'>Couche de la dynamique des risques</a>
        </li> -->
      </ul>
    </div>
    <div class="panel panel-primary">
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

<hr>

<a name="physical_exposure"></a>

## Exposition physique

<p>
  <div class="card" style="float:left;margin:10px 20px 0px 0px;">
    <img src="../assets/img/nhsl_physical_exposure.png" width="350" class="img-rounded img-responsive"/>
    <div class="card-body">
      <a href="nhsl_physical_exposure_map.html" class="btn btn-primary btn-lg btn-block mrgn-tp-sm" role="button"> Voir sur la carte </a>
    </div>
  </div>
  <strong>L’élément « Exposition physique » de la couche ZPN délimite les régions habitées de l’ensemble du Canada et l’utilisation du sol dans ces régions, en plus d’inclure des renseignements sur les bâtiments, la population et la valeur en capital des biens immobiliers (structure et contenu).</strong></p>

<p>Ce modèle comprend un inventaire de plus de 9,1 millions de bâtiments au Canada, la dynamique de la population à divers moments de la journée pour 35,1 millions de personnes et la valeur en capital de biens immobiliers totalisant plus de 8,3 billions de dollars canadiens.</p>

<p>Les bâtiments sont classés en fonction du type de construction, de l’occupation et de l’âge. Ces classes sont basées sur la taxonomie normalisée HAZUS des bâtiments de l’Amérique du Nord. On compte 38 classes de construction représentant différents types de bois, de béton, de maçonnerie, d’acier et de structures préfabriquées; 33 classes d’occupation représentant une variété d’utilisations résidentielles, civiques, commerciales et industrielles; et 4 classes d’âge représentant le niveau présumé de conception du bâtiment. La distribution des « archétypes de bâtiments » obtenus est attribuée à des régions habitées en fonction de l’utilisation du sol et des caractéristiques du recensement.</p>

<p>Le nombre d’occupants des bâtiments à différents moments de la journée est estimé pour les trois périodes suivantes : le jour (de 9 h à 17 h), pendant les déplacements domicile-travail du matin et du soir (de 7 h à 9 h et de 17 h à 19 h) et la nuit, lorsque la majorité des gens sont à la maison (de 19 h à 7 h).</p>

<p>La valeur en capital des biens immobiliers est fournie pour les éléments structurels et non structurels des bâtiments, ainsi que pour le contenu potentiel du bâtiment. La valeur des biens est estimée en fonction des coûts de remplacement de l’industrie pour des régions représentatives du Canada.</p>

### Ressources de données

<div id="nhsl_physical_exposure_all_indicators">
  {% include nhsl-resources.html lang = page.lang layer = "nhsl_physical_exposure_all_indicators" %}
</div>

<hr>

<a name="social_fabric"></a>

## Tissu social et seuils de capacité

<p>
  <div class="card" style="float:left;margin:10px 20px 0px 0px;">
    <img src="../assets/img/nhsl_social_fabric.png" width="350" class="img-rounded img-responsive"/>
    <div class="card-body">
      <a href="nhsl_social_fabric_map.html" class="btn btn-primary btn-lg btn-block mrgn-tp-sm" role="button"> Voir sur la carte </a>
    </div>
  </div>
  <strong>L’élément « Vulnérabilité sociale » de la couche ZPN comprend des renseignements sur les grandes tendances spatiales en matière de vulnérabilité sociale à l’échelle du quartier, ainsi que des indicateurs sur la capacité d’une collectivité à résister aux catastrophes, et à s’en rétablir, en fonction des caractéristiques intrinsèques du logement, de la structure familiale, de l’autonomie individuelle et des systèmes financiers.</strong></p>

<p>Les indicateurs de la vulnérabilité sociale et du seuil de capacité permettent de cerner les tendances sous-jacentes en matière de vulnérabilité sociale au sein d’une collectivité donnée. Le modèle comprend six indicateurs composites qui décrivent la vulnérabilité sociale totale estimée, ainsi que le niveau de vulnérabilité qui pourrait découler des conditions de logement, de la structure familiale, de l’autonomie individuelle et des systèmes financiers. Le modèle permet donc de comparer les niveaux relatifs de vulnérabilité d’une région à l’autre dans l’ensemble du Canada et de déterminer les quartiers dans lesquels la capacité de résister aux catastrophes, et de s’en rétablir, peut être restreinte.</p>

### Ressources de données

<div id="nhsl_social_fabric_all_indicators">
  {% include nhsl-resources.html lang = page.lang layer = "nhsl_social_fabric_all_indicators" %}
</div>

<script src="https://code.jquery.com/jquery-1.12.2.min.js"
        integrity="sha256-lZFHibXzMHo3GGeehn1hudTAP3Sc0uKXBXAzHX1sjtk=" crossorigin="anonymous"></script>

<script src="../assets/script.js"></script>
