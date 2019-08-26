<script>
  import UIBar from "./UIBar.svelte";
  import ConfigOption from "./ConfigOption.svelte";

  import { advancedModeOn, mode, lint } from "../stores.js";
  const modeTypes = ["javascript", "htmlmixed", "css", "jsx", "none"];
  const lintTypes = ["javascript", "css", "json", "none"];
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
  div.column {
    display: flex;
    align-items: center;
  }
</style>

<UIBar position="bottom" active={$advancedModeOn}>
  <div class="column" />
  <div class="column config">
    <ConfigOption data={lintTypes} store={lint} title="Linting" />
    <ConfigOption data={modeTypes} store={mode} title="Mode" />
    <div class="spacer" />
  </div>
</UIBar>
