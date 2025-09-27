<script>
  import { Carta } from "carta-md";
  let { title, id, body, created_at, updated_at } = $props()
  let tags = ['livros', 'leitura'];
  function getDateString(date = new Date()) {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let formatedMonth = month < 10 ? `0${month}` : month;
    let formatedDay = day < 10 ? `0${day}` : day;
  return `${year}-${formatedMonth}-${formatedDay}`;
  }

  const carta = new Carta({});
  let contentHtml = carta.render(body);
</script>

<article>
  {#await contentHtml}
		pending
	{:then value}
		<h1><a href={`/posts/${id}`}>{title}</a></h1>
    {@html value.slice(0,300)} ...
    <p class="info">{getDateString(new Date(created_at))} [{getDateString(new Date(updated_at))}]</p>
    {#if tags.length > 0}
    <ul class="info">
      {#each tags as tag}
      <li><a href={`/tags/${tag}`}>#{tag}</a></li>
      {/each}
    </ul>
    {/if}
	{/await}
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