---
title: Rezepte
layout: default
---

<div class="index-header">
    <h1 class="index-title">Rezepte-Lager</h1>

    <div id="searchbar">
        <input type="text" placeholder="Wer suchet, der findet!" id="search">
        <ul id="searchresults"></ul>
    </div>
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






<script src="https://cdn.jsdelivr.net/npm/fuse.js@5.1.0/dist/fuse.min.js"></script>
<script src="rezepte.js"></script>

<script>
    const suche = document.getElementById("search");
    const suchergebnisse = document.getElementById("searchresults");

    let options = {
        threshold: 0.4,
        keys: [
            "name",
            "tags",
            "zutaten",
            "content"
        ]
    };
    const fuse = new Fuse(rezepte, options);
    
    suche.addEventListener("keyup", function(){
        let results = fuse.search(suche.value);
        results = results.map((item) => "<li><a href='" + item.item.url + "'>" + item.item.name + "</a></li>");

        suchergebnisse.innerHTML = results.join("");
    })
</script>
