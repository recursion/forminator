<script>
  import UIBar from "./UIBar.svelte";
  import ConfigOption from "./ConfigOption.svelte";
  import SettingsIcon from "./SettingsIcon.svelte";
  import PowerButton from "./PowerButton.svelte";
  import FullscreenButton from "./FullscreenButton.svelte";
  import {
    advancedModeOn,
    editSettings,
    fullscreen,
    mode,
    width,
    lint,
    editor
  } from "../stores.js";
  const editors = ["vim", "emacs", "sublime"];
</script>

<style>
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

<UIBar position="top" active={$advancedModeOn}>
  {#if $advancedModeOn}
    <div class="column tools">
      <FullscreenButton />
    </div>
  {/if}
  <div class="column config">
    {#if $advancedModeOn && $editSettings}
      <ConfigOption data={editors} store={editor} title="Editor" />
      <SettingsIcon toggle={() => ($editSettings = !$editSettings)} />
    {:else if $advancedModeOn}
      <SettingsIcon toggle={() => ($editSettings = !$editSettings)} />
    {/if}
    <PowerButton />
  </div>
</UIBar>
