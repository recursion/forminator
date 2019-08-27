<script>
  export let textarea;
  import { onMount } from "svelte";
  import CodeMirror from "codemirror";
  import "./codeMirrorImports";
  import Editor from "./Components/Editor.svelte";
  import TopUIBar from "./Components/TopUIBar.svelte";
  import BottomUIBar from "./Components/BottomUIBar.svelte";
  import { advancedModeOn } from "./stores.js";

  onMount(() => {
    // wrap the editor element in some custom UI
    const editor = textarea;
    const parent = editor.parentNode;
    const lowerbar = document.querySelector("ui-bar.bottom");
    const container = document.querySelector(".forminator.container");

    if (!container) {
      console.error("Container not found.");
      return;
    }
    parent.insertBefore(container, editor);
    container.insertBefore(editor, lowerbar);
  });
</script>

<style>
  .forminator {
    padding: 0;
  }
</style>

<div class="forminator container">
  <TopUIBar />
  <Editor {textarea} />
  {#if $advancedModeOn}
    <BottomUIBar />
  {/if}
</div>
