---
altLangPrefix: Downloads
dateModified: 2020-12-10
description:
  en: Downloads
footer: true
langtoggle: true
lang: en
noMainContainer: false
sitemenu: true
sitesearch: true
title: Downloads
permalink: /en/single-page/
layout: single-page
---

<h2>{{page.title}}</h2>

<section>

    {% for folder in site.static_files %}
    {% if folder.path contains '/data/' %}
        {% assign my_array = folder.path | split: "/" %}
        {% assign province = my_array[3] %}
        {% assign provinces = provinces | append: province | append: "," %}
        {% assign path = my_array[3] | append: "/" | append: my_array[4] | append: "/" | append: my_array[5] %}
        {% assign paths = paths | append: path | append: "," %}
        {% assign eruid = my_array[4] %}
        {% assign eruids = eruids | append: eruid | append: "," %}
    {% endif %}
    {% endfor %}
    
    {% assign provs = provinces | split: "," | uniq %}
    {% assign paths = paths | split: "," | uniq %}
    {% assign eruids = eruids | split: "," | uniq %}

    {% for prov in provs %}
    <a href="#{{ prov }}" style="text-transform:uppercase">{{ prov }}</a> 
    {% endfor %}
    
    {% for prov in provs %}

        {% assign p = prov | append: '/' %}
        
        <div class="{{ prov }}">

        <a name="{{ prov }}"></a>

        <h2 style="text-transform:uppercase">{{ prov }}</h2>

        <table class="table">

        {% assign eruid = "" %}
        {% for path in paths %}

            {% if path contains prov %}
                {% assign pth = path | split: "/" %}
                
                {% if eruid != pth[1] and pth[0] == prov %}
                    {% assign eruid = pth[1] %}

                    {% for er in site.data.er.regions %}
                        {% if er.code == eruid %}
                            <tr><th>{{ er.title }} ({{ eruid }})</th><th>Last Modified</th><th>Format</th><th></th></tr>
                        {% endif %}
                    {% endfor %}
                {% endif %}
            
                {% for folder in site.static_files %}

                    {% if folder.path contains "_b_" %}
                        {% assign geom = " Buildings" %}
                        {% assign icon = "multipoint.svg" %}
                    {% else %}
                        {% assign geom = " Census Subdivision" %}
                        {% assign icon = "polygon.svg" %}
                    {% endif %}


                    {% if folder.path contains path and folder.path contains p %}

                        {% assign my_array = folder.path | split: "/" %}
                        <tr>
                            <td>
                                <img width="36" src="/assets/img/{{ icon }}" style="margin-right:10px;"/>
                                <a href="{{ folder.path }}" style="text-transform:capitalize">{{ pth[2] | replace: "_", " " }}</a> <span>({{ geom }})</span>
                            </td>
                            <td>{{folder.modified_time | date: "%a, %b %d, %y" }}</td>
                            <td><span class="label label-default">{{ folder.extname }}</span></td>
                            <td>
                                <a class="btn btn-primary btn-sm map-link" href="#" data="{{ folder.path }}">Preview</a>
                            </td>
                        </tr>
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endfor %}
        </table>
    </div>
    {% endfor %}

</section>
