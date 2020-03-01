---
title: "Rezepte"
---

# Alle Rezepte

{% for rezept in site.rezepte %}
    <h1>{{ rezept.title }}</h1>
{% endfor %}
