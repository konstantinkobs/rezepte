---
title: Rezepte
layout: default
---

<div class="index-header">
    <h1 class="index-title">Rezepte Laga</h1>
</div>

<div class="container-index">
    {% assign rezepte = site.rezepte | sort: "name" %}

    {% for tag in site.data.tags %}
        {% assign tag_rezepte = rezepte | where: "tags", tag %}

        {% if tag_rezepte.size > 0 %}
            {% include tag-card.html rezepte=tag_rezepte tag=tag %}
        {% endif %}
    {% endfor %}
</div>
