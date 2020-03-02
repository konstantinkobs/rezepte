---
title: "Rezepte"
layout: default
---

# Rezepte Laga

{% for rezept in site.rezepte %}
<h2><a href="{{ rezept.url | relative_url }}">{{ rezept.title }}</a></h2>
{% endfor %}
