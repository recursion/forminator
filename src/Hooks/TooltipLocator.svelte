<script context="module">
  export function getToolTipLocation(container) {
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
    return str;
  }
</script>
