<script >
  import Title from '$lib/Title.svelte';
  import Field from '$lib/Field.svelte';
  import ButtonComponent from '$lib/Button.svelte';
  let email = "";
  let password = "";
</script>


<main>
  <Title content={"Login"}></Title>
  <Field type="email" id="email" placeholder="Digite seu email" label="Seu Email" bind:value={email}></Field>
  <Field type="password" id="password" placeholder="Digite sua senha" label="Senha" bind:value={password}></Field>
  <ButtonComponent content="Login"></ButtonComponent>
</main>

<style>
  main {
    max-width: 380px;
    margin: auto;
  }
  </style>