<script>
    let { title, url, summary, created_at, updated_at, tags } = $props()
</script>

<article>
    <h1><a href={url}>{title}</a></h1>
    <p>{summary}</p>
    <p class="info">{created_at} [{updated_at}]</p>
    {#if tags.length > 0}
    <ul class="info">
      {#each tags as tag}
      <li><a href={`/tags/${tag}`}>#{tag}</a></li>
      {/each}
    </ul>
    {/if}
</article>

<style>
  article {
    padding: 18px;
    border:1px solid #2e2e33;
    color: #1e1e1e;
  }

    h1 {
        margin: 0;
        font-size: 1.35rem;
        line-height: 1.1rem;
        margin-bottom: 12px;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
        color: #A31D1D;
    }

    p {
      font-size: calc(18rem/16);
      margin-bottom: 12px;
    }

    .info {
      color: gray;
      font-size: calc(10rem/16);
      margin: 0;
    }

    ul {
      display: flex;
      justify-content: flex-start;
      padding-left: 0;
    }

    li {
      list-style: none;
      margin-right: 12px;
    }
</style>