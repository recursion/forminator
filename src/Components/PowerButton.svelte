<script>
  import { advancedModeOn } from "../stores.js";

  let style;
  let hover = false;
  let color = "currentColor";
  const onColor = "lightgreen";

  function clickHandler() {
    const t = $advancedModeOn;
    $advancedModeOn = !t;
  }

  const mouseover = () => {
    hover = true;
  };

  const mouseout = () => {
    hover = false;
  };

  $: {
    if (hover) {
      if ($advancedModeOn) {
        color = "red";
      } else {
        color = onColor;
      }
    } else {
      if ($advancedModeOn) {
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
    vertical-align: bottom;
    margin: 2px auto;
    transition: all 3s ease-out;
  }
  svg:hover {
    background-color: #5a5a5a !important;
    stroke: lightgreen;
  }
  .incognito {
    background-color: rgba(155, 155, 155, 0.2);
    position: absolute;
    right: 17px;
    top: 1px;
  }
</style>

<div class="tooltip">
  <span class="tooltiptext">
    Turn {$advancedModeOn ? 'off' : 'on'} the advanced editor.
  </span>
  <svg
    on:click={clickHandler}
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
    class="feather feather-power {$advancedModeOn ? 'poweredOn' : ''}
    {$advancedModeOn ? '' : 'incognito'}">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
</div>
