<script>
{% for sec in sections %}
    {% if sec.style_template == '2' %}
        {% if sec.is_institution != True %}
            var masonry = new Macy({
                container: '#blog-masonry{{sec.id}}',
                trueOrder: false,
                waitForImages: false,
                useOwnImageLoader: false,
                debug: false,
                mobileFirst: false,
                columns: {{sec.size}},
                margin: {
                    x: 30,
                    y: 60
                },
                breakAt: {
                    1600: 3,
                    1200: 2,
                    992: 2,
                    768: 1
                },
            });
        {% endif %}
    {% endif %}
{% endfor %}
</script>