<script>
  import { onMount } from "svelte";
  import CodeMirror from "codemirror";
  import Editor from "./Editor.svelte";
  import { width, lint, editor } from "./stores.js";
  import PowerButton from "./PowerButton.svelte";
  import MaximizeButton from "./MaximizeButton.svelte";
  import UIBar from "./UIBar.svelte";
  import ConfigOption from "./ConfigOption.svelte";
  const types = ["javascript", "html", "css", "jsx"];
  const editors = ["vim", "emacs", "sublime"];

  let advancedModeOn = false;

  const wrapEditor = editor => {
    const parent = editor.parentNode;
    const lowerbar = document.querySelector("ui-bar.bottom");
    const container = document.querySelector(".forminator.container");
    if (!container) console.error("Container not found.");
    container.insertBefore(editor, lowerbar);
    parent.appendChild(container);
  };

  onMount(() => {
    wrapEditor(document.querySelector("#editor"));
  });
</script>

<style>
  .container {
    margin: 0 auto;
    padding: 0;
  }
  .spacer {
    width: 24px;
  }
  .column.config {
    display: flex;
    flex-direction: row;
    text-align: right;
    justify-content: flex-end;
  }
</style>

<div class="forminator container">
  <UIBar position="top" active={advancedModeOn}>
    {#if advancedModeOn}
      <div class="column">
        <MaximizeButton />
      </div>
    {/if}
    <div class="column config">
      {#if advancedModeOn}
        <ConfigOption data={editors} store={editor} title="Editor" />
      {/if}
      <PowerButton
        power={advancedModeOn}
        toggle={() => (advancedModeOn = !advancedModeOn)} />
    </div>
  </UIBar>
  <div class="row">
    <Editor {advancedModeOn} />
  </div>
  {#if advancedModeOn}
    <UIBar position="bottom" active={advancedModeOn}>
      <div class="column" />
      <div class="column config">
        <ConfigOption data={types} store={lint} title="Mode" />
        <div class="spacer" />
      </div>
    </UIBar>
  {/if}
</div>
