<script>
	import favicon from '$lib/assets/favicon.svg';
  import '/src/styles.css'
  import Navbar from '$lib/Navbar.svelte';
	let { children, user } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar bind:user={user}></Navbar>
{@render children?.()}
