<script>
  import { onMount } from "svelte";
  import CodeMirror from "codemirror";
  import "./codeMirrorImports";
  import Editor from "./Components/Editor.svelte";
  import TopUIBar from "./Components/TopUIBar.svelte";
  import BottomUIBar from "./Components/BottomUIBar.svelte";
  import {
    editSettings,
    advancedModeOn,
    fullscreen,
    mode,
    width,
    lint,
    editor
  } from "./stores.js";

  function getCodeMirrorEl() {
    return document.querySelector(".CodeMirror");
  }

  // wrap the editor with our own ui bars
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

  function btnCloseClickHandler() {
    $editSettings = false;
  }

  onMount(() => {
    wrapEditor(document.querySelector("#editor"));
  });

  $: if ($fullscreen) {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      document.querySelector(".CodeMirror").style.width = "100%";
      document.querySelector(".CodeMirror").style.height = "100%";
      codeMirror.classList.add("CodeMirror-fullscreen");
    }
  } else {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      codeMirror.classList.remove("CodeMirror-fullscreen");
    }
  }
</script>

<div class="forminator container">
  <TopUIBar />
  <div class="row">
    <Editor />
  </div>
  {#if $advancedModeOn}
    <BottomUIBar />
  {/if}
</div>
