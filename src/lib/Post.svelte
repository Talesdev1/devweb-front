<script>
    let { title, url } = $props()
</script>

<article>
    <h1><a href={url}>{title}</a></h1>
</article>

<style>
    h1 {
        margin: 0;
        font-size: 1.35rem;
        line-height: 1.1rem;
        margin-bottom: 12px;
        color: #1e1e1e;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        text-decoration: underline;
        color: #A31D1D;
    }
</style>