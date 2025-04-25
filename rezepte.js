---
---
rezepte = [
    {% for rezept in site.rezepte %}
        {
            "name": {{ rezept.name | jsonify }},
            "tags": {{ rezept.tags | jsonify }},
            "zutaten": {{ rezept.zutaten | jsonify }},
            "content": {{ rezept.content | jsonify }},
            "url": {{ rezept.url | absolute_url | jsonify }}
        }
        {% unless forloop.last %},{% endunless %}
    {% endfor %}
]