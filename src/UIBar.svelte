<script>
  import { onMount } from "svelte";
  import { width } from "./stores.js";
  export let position;
  export let active;
</script>

<style>
  .ui-bar {
    max-height: 30px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    width: 100%;
  }
</style>

<div
  class="row ui-bar {position}"
  style="width: {$width}; border: {active ? '1px solid black' : 'none'}">
  <slot />
</div>
