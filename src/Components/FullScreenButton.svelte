<script>
  import { fullscreen } from "../stores.js";
  function clickHandler() {
    $fullscreen = true;
  }
</script>

<style>
  svg {
    background-color: #5a5a5a;
    padding: 2px;
    border-radius: 25%;
    align-self: flex-start;
    vertical-align: bottom;
  }
</style>

<div class="tooltip">
  <span class="tooltiptext">{$fullscreen ? '' : 'View in fullscreen.'}</span>
  <svg
    on:click={clickHandler}
    id="maximize-btn"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-maximize-2">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
</div>
