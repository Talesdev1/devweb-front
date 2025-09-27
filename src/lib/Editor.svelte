<script>
  import {Carta, MarkdownEditor } from "carta-md";

  const carta = new Carta({

  });

  let {conteudo = $bindable()} = $props();
</script>

<div class="editor-container">
  <label for="editor">Corpo da publicação *</label>
  <MarkdownEditor
    {carta}
    id="editor"
    bind:value={conteudo}
    placeholder="Escreva aqui sua publicação..."
    rows="20"
    maxlength="20000"
    style="width:100%;"
  >
  </MarkdownEditor>

  <div class="contador">
    {conteudo.length}/20000
  </div>
</div>

<style>
  .editor-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  :global(.carta-font-code) {
    font-family: '...', monospace;
    font-size: 1.1rem;
    line-height: 1.1rem;
    letter-spacing: normal;
  }

  :global(.carta-container) {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.5rem;
    font-size: 1rem;
    background: #f9fafb;
    min-height: 600px;
  }

  .contador {
    align-self: flex-end;
    font-size: 0.85rem;
    color: #666;
  }
</style>
