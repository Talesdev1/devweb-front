<script>
  import Post from '$lib/Post.svelte'
  import Title from '$lib/Title.svelte'
  let {data}  = $props();
  console.log(data)
  let username = data.username
</script>

<main>
  <Title content={`Blog do ${username}`}></Title>
  {#each data.posts as post}
    <Post {...post}></Post>
  {/each}
</main>

<style>
  main {
    max-width: 700px;
    margin: auto;
  }
  h1 {
    margin-bottom: 12px;
  }
</style>