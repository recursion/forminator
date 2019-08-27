<script>
  let tooltipLocation;
  let container;
  import { fullscreen } from "../stores.js";
  function clickHandler() {
    $fullscreen = true;
  }
  $: if (container) {
    // calculate the class to used base on the elements locational relationship to window edges.
    let str = "";
    const offsetLimit = 300;
    const d = container.getBoundingClientRect();
    if (d.top < offsetLimit) {
      str += " bottom";
    } else if (window.height - d.bottom < offsetLimit) {
      str += " top";
    }

    if (d.left < offsetLimit) {
      str += " right";
    } else if (window.innerWidth - d.right < offsetLimit) {
      str += " left";
    }
    tooltipLocation = str;
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

  .tooltip:hover .tooltiptext {
    z-index: 500;
  }
</style>

<div class="tooltip">
  <span class="tooltiptext {tooltipLocation}">
    {$fullscreen ? '' : 'View in fullscreen.'}
  </span>
  <svg
    bind:this={container}
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
