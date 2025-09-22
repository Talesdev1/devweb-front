<script >
  import Title from '$lib/Title.svelte';
  import Field from '$lib/Field.svelte';
  import Editor from '$lib/Editor.svelte';
  import ButtonComponent from '$lib/Button.svelte';
  let titulo = "";
</script>


<main>
  <Title content={"Publicar novo conteúdo"}></Title>
  <Field type="titulo" id="titulo" placeholder="Digite o titulo do seu artigo" label="Título *" bind:value={titulo}></Field>
  <Editor></Editor>
  <ButtonComponent content="Publicar" type='confirm'></ButtonComponent>
  <ButtonComponent content="Cancelar" type='cancel'></ButtonComponent>
</main>

<style>
  main {
    max-width: 780px;
    margin: auto;
  }
  </style>