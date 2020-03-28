---
title: "Rezepte"
layout: default
---

<div class="header">
    <h1 class="title">Rezepte Laga</h1>
</div>

{% assign rezepte = site.rezepte | sort: "title" %}

{% for rezept in rezepte %}
    {% include item.html rezept=rezept %}
{% endfor %}
