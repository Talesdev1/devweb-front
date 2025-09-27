<script>
  let { user = $bindable() } = $props()
  console.log(user)
</script>

<nav class="navbar">
  <div class="navbar-left">
    <a href="/posts">Postagens</a>
  </div>

  <div class="navbar-right">
    {#if user}   
      <a href="/login">Deslogar</a>
    {:else}
      <a href="/login">Login</a>
      <a href="/cadastro">Cadastro</a>
    {/if}
  </div>
</nav>


<style>
  .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(37, 41, 46);
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: sans-serif;
}

  .navbar a:hover {
    color: #d4d4d4ff;
  }

  .navbar-left a,
  .navbar-right a {
    margin-right: 15px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
  }

  .navbar-right a {
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    .navbar {
      flex-wrap: wrap;
    }

    .navbar-left, .navbar-right {
      width: 100%;
      justify-content: center;
      margin-bottom: 10px;
      display: flex;
    }
  }
</style>