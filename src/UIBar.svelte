<script>
  import { onMount } from "svelte";
  import { width } from "./stores.js";
  export let position;
  export let active;
</script>

<style>
  .ui-bar {
    max-height: 30px;
  }
  .offset {
    margin-left: 10px;
  }
</style>

<div
  class="row ui-bar {position}
  {active ? '' : 'offset'}"
  style="width: {$width};">
  <slot />
</div>
