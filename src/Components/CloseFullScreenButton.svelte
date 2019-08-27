<script>
  import { fullscreen } from "../stores.js";
  let btn;

  $: if ($fullscreen) {
    setTimeout(() => {
      btn.style.stroke = "white";
      btn.style.fill = "rgba(0, 0, 0, 0.5)";
    }, 250);
    setTimeout(() => {
      btn.style.stroke = "white";
      btn.style.fill = "none";
    }, 2000);
  }
</script>

<style>
  #exitFullScreenBtn:hover {
    stroke: black !important;
    fill: white !important;
  }
  #exitFullScreenBtn {
    position: fixed;
    top: 1px;
    right: 1px;
    z-index: 5000;
    border: none;
    padding: 0;
    margin: 0;
    transition: all 3s;
    width: 32px;
    height: 32px;
    stroke: rgba(150, 150, 150, 0.1) !important;
    fill: white !important;
  }
  .container {
    background: none;
    z-index: 50;
  }
  .container h5 {
    margin: 0 auto;
    text-align: center;
    display: none;
  }
</style>

<div class="container">
  <svg
    bind:this={btn}
    on:click={() => ($fullscreen = false)}
    id="exitFullScreenBtn"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-minimize">
    <h5 id="ttext">Exit Fullscreen</h5>
    <path
      d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1
      2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
  </svg>
</div>
