---
layout: base
title: Projects
permalink: /projects
---

<main>
    <div id="category-list">
        {% for item in site.data.portfolio-categories %}
            <a href="{{ item.link }}" style="background-image: url('{{ item.image }}');"><h2>{{ item.name }}</h2></a>
        {% endfor %}
    </div>
</main>
