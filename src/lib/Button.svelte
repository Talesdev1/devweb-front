<script>
  let { type, content } = $props()
</script>

<button class={type === 'confirm' ? "confirm" : "cancel"}>{content}</button>


<style>
  .confirm {
    background-color: green;
    color: white;
  }

  .cancel {
    background-color: #f9fafb;
    color: gray;
  }

  button {
    font-weight: 600;
    /* width: 100%; */
    padding: 10px 20px;
    border-radius: 8px;
    border: 0;
  }

  button:hover.confirm {
    background-color: rgba(0, 128, 0, 0.904);
    cursor: pointer;
  }

  button:hover.cancel {
    background-color: #e2e2e2;
    cursor: pointer;
  }
</style>