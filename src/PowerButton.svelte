<script>
  export let power;
  export let toggle;
  let hover = false;
  let color = "currentColor";
  const mouseover = () => {
    hover = true;
  };
  const mouseout = () => {
    hover = false;
  };
  const onColor = "lightgreen";
  $: {
    if (hover) {
      if (power) {
        color = "red";
      } else {
        color = onColor;
      }
    } else {
      if (power) {
        color = onColor;
      } else {
        color = "white";
      }
    }
  }
</script>

<style>
  svg {
    background-color: #5a5a5a;
    padding: 2px;
    border-radius: 25%;
  }
</style>

<svg
  on:click={toggle}
  on:mouseover={mouseover}
  on:mouseout={mouseout}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="feather feather-power">
  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
  <line x1="12" y1="2" x2="12" y2="12" />
</svg>
