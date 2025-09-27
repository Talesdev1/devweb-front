<script>
  let { type, id, placeholder, label, value = $bindable() } = $props()
</script>

<label for={id}>{label}</label>
<input type={type} name={id} placeholder={placeholder} autocomplete="off" bind:value={value} >


<style>
  label {
    font-size: 0.875rem;
    font-weight: 600;
    display: block;
  }
  input {
    border: 1px solid gray;
    width: 100%;
    padding: 10px 8px;
    margin-bottom: 12px;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
    border: 1px solid #0969da;
  }
</style>