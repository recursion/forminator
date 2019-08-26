<script>
  import { onMount } from "svelte";
  import CodeMirror from "codemirror";
  import Editor from "./Editor.svelte";
  import { fullscreen, mode, width, lint, editor } from "./stores.js";
  import PowerButton from "./PowerButton.svelte";
  import MaximizeButton from "./MaximizeButton.svelte";
  import UIBar from "./UIBar.svelte";
  import ConfigOption from "./ConfigOption.svelte";
  const modeTypes = ["javascript", "htmlmixed", "css", "jsx"];
  const lintTypes = ["javascript", "css", "json"];
  const editors = ["vim", "emacs", "sublime"];

  let advancedModeOn = false;

  function getCodeMirrorEl() {
    return document.querySelector(".CodeMirror");
  }

  const wrapEditor = editor => {
    const row = document.createElement("div");
    row.className = "row";

    const parent = editor.parentNode;
    const lowerbar = document.querySelector("ui-bar.bottom");
    const container = document.querySelector(".forminator.container");
    row.appendChild(editor);

    if (!container) console.error("Container not found.");
    container.insertBefore(editor, lowerbar);
    parent.appendChild(container);
  };

  onMount(() => {
    wrapEditor(document.querySelector("#editor"));
  });

  $: if ($fullscreen) {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      codeMirror.classList.add("CodeMirror-fullscreen");
    }
  } else if (!$fullscreen) {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      codeMirror.classList.remove("CodeMirror-fullscreen");
    }
  }
</script>

<style>
  .spacer {
    width: 24px;
  }
  .column.config {
    display: flex;
    flex-direction: row;
    text-align: right;
    justify-content: flex-end;
    padding: 1px;
  }
  .column.tools {
    padding: 1px;
  }
  div.column {
    display: flex;
    align-items: center;
  }
</style>

<div class="forminator container">
  <UIBar position="top" active={advancedModeOn}>
    {#if advancedModeOn}
      <div class="column tools">
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
        <ConfigOption data={lintTypes} store={lint} title="Linting" />
        <ConfigOption data={modeTypes} store={mode} title="Mode" />
        <div class="spacer" />
      </div>
    </UIBar>
  {/if}
</div>
