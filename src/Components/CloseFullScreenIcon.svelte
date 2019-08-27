<script>
  import { fullscreen } from "../stores.js";
</script>

<style>
  #exitFullScreenBtn:hover {
    color: rgba(255, 0, 0, 1);
    background-color: white;
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
    color: rgba(255, 0, 0, 0);
    background-color: rgba(1, 1, 1, 0);
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
    on:click={() => ($fullscreen = false)}
    id="exitFullScreenBtn"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
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
