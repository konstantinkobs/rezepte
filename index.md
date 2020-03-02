---
title: "Rezepte"
layout: default
---

<div class="header title">
    <h1>Rezepte Laga</h1>
</div>

{% assign rezepte = site.rezepte | sort: "title" %}

{% for rezept in rezepte %}
    {% include item.html rezept=rezept %}
{% endfor %}
