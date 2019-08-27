<script>
  import { advancedModeOn } from "../stores.js";

  let style;
  let hover = false;
  let color = "currentColor";
  const onColor = "lightgreen";
  let container;
  let tooltipLocation;

  // return true if the element has a scrollbar
  $: hasScrollBar =
    container &&
    (container.style.overflow !== "hidden" ||
      container.scrollHeight > container.clientHeight)
      ? true
      : false;

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
  $: if (container) {
    // calculate the class to used base on the elements locational relationship to window edges.
    let str = "";
    const offsetLimit = 100;
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
    vertical-align: bottom;
    margin: 2px auto;
    transition: background-color 3s ease-out;
    background-color: rgba(155, 155, 155, 0.5);
  }
  svg:hover {
    background-color: rgba(155, 155, 155, 1);
  }
  .incognito {
    background-color: rgba(155, 155, 155, 0.2);
    position: absolute;
    right: 17px;
    top: 1px;
  }
  .offsetScrollbar {
    right: 20px;
  }
  .offset {
    right: 12px;
  }
  .tooltip:hover .tooltiptext {
    z-index: 500;
  }
</style>

<div class="tooltip">
  <span class="tooltiptext {tooltipLocation}">
    Turn {$advancedModeOn ? 'off' : 'on'} the advanced editor.
  </span>
  <svg
    bind:this={container}
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
    {$advancedModeOn ? '' : 'incognito'}
    {!$advancedModeOn && hasScrollBar ? 'offsetScrollbar' : 'offset'}">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
</div>
