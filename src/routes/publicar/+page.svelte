<script >
  import Title from '$lib/Title.svelte';
  import Field from '$lib/Field.svelte';
  import Editor from '$lib/Editor.svelte';
  import ButtonComponent from '$lib/Button.svelte';
  let title = "";
  let body = "";

  function publish() {
		fetch('/api/post', {
			method: 'POST',
      body: JSON.stringify({title, body})
		});
	}
</script>


<main>
  <Title content={"Publicar novo conteúdo"}></Title>
  <Field type="titulo" id="titulo" placeholder="Digite o titulo do seu artigo" label="Título *" bind:value={title}></Field>
  <Editor bind:conteudo={body}></Editor>
  <ButtonComponent content="Publicar" type='confirm' onclick={() => publish()}></ButtonComponent>
  <ButtonComponent content="Cancelar" type='cancel'></ButtonComponent>
</main>

<style>
  main {
    max-width: 780px;
    margin: auto;
  }
  </style>