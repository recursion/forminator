<script>
  import UIBar from "./UIBar.svelte";
  import ConfigOption from "./ConfigOption.svelte";
  import { lintTypes, modeTypes } from "../config";
  import { advancedModeOn, mode, lint } from "../stores.js";
</script>

<style>
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
  <div class="column column-100 config">
    <ConfigOption
      options={lintTypes}
      store={$lint}
      title="Linting"
      update={v => ($lint = v)} />
    <ConfigOption
      options={modeTypes}
      store={$mode}
      title="Mode"
      update={v => ($mode = v)} />
  </div>
</UIBar>
