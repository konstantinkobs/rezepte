---
title: "Rezepte"
layout: default
---

# Rezepte Laga

{% for rezept in site.rezepte | sort_by title %}
<h2><a href="{{ rezept.url | relative_url }}">{{ rezept.title }}</a></h2>
{% endfor %}
