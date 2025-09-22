<script >
  import Title from '$lib/Title.svelte';
  import Field from '$lib/Field.svelte';
  import ButtonComponent from '$lib/Button.svelte';
</script>


<main>
  <Title content={"Cadastro"}></Title>
  <form method="post">
    <Field type="text" id="username" placeholder="n0mePubl1c0" label="Nome de usuário" ></Field>
    <Field type="email" id="email" placeholder="Digite seu email" label="Seu Email"></Field>
    <Field type="password" id="password" placeholder="Digite sua senha" label="Senha"></Field>
    <Field type="password" id="confirmPassword" placeholder="Confirme sua senha" label="Confirmar senha"></Field>
    <ButtonComponent type="confirm" content="Criar cadastro"></ButtonComponent>  
  </form>
</main>

<style>
  main {
    max-width: 380px;
    margin: auto;
  }
  </style>