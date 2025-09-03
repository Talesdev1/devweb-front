<script>
  let { type, content } = $props()
</script>

<button>{content}</button>


<style>
  button {
    background-color: green;
    color: white;
    font-weight: 600;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 0;
  }
</style>