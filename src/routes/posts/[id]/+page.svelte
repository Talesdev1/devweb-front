<script>
  import Post from '$lib/Post.svelte'
  /** @type {import('./$types').PageProps} */
	let { data } = $props();
  console.log(data)
</script>

<main>
  <h1>{data.title}</h1>
  <article>
    {@html data.contentHtml}
  </article>
</main>

<style>
  main {
    max-width: 700px;
    margin: 20px auto;
  }
  h1 {
    margin-bottom: 12px;
  }
</style>