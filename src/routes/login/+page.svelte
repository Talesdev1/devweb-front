<script >
  import Title from '$lib/Title.svelte';
  import Field from '$lib/Field.svelte';
  import ButtonComponent from '$lib/Button.svelte';
</script>


<main>
  <Title content={"Login"}></Title>
  <form method="post">
    <Field type="email" id="email" placeholder="Digite seu email" label="Seu Email"></Field>
    <Field type="password" id="password" placeholder="Digite sua senha" label="Senha"></Field>
    <ButtonComponent type="confirm" content="Login"></ButtonComponent>  
  </form>
</main>

<style>
  main {
    max-width: 380px;
    margin: auto;
  }
  </style>