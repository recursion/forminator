<script>
  import { lint, editor, width } from "./stores.js";
  import CodeMirror from "codemirror";
  import Config from "./config.js";
  export let advancedModeOn;

  let observer;
  let cm;

  const config = Config(CodeMirror);

  const checkForChanges = () => {
    const el =
      document.querySelector(".CodeMirror") ||
      document.querySelector("#editor");
    $width = el.style.width;
  };

  const observeEditor = selector => {
    observer = new MutationObserver(checkForChanges);
    observer.observe(document.querySelector(selector), {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  };

  const mount = () => {
    try {
      if (cm) return;
      const og_editor = document.querySelector("#editor");
      const lowerbar = document.querySelector(".ui-bar.bottom");
      const container = document.querySelector(".container");
      cm = CodeMirror.fromTextArea(og_editor, config.default_vim);

      cm.on("changes", c => cm.save());

      setTimeout(() => {
        const newEditor = document.querySelector(".CodeMirror");
        container.insertBefore(newEditor, lowerbar);
        observeEditor(".CodeMirror");
      }, 25);
    } catch (e) {
      console.log(e);
    }
  };

  const unmount = () => {
    if (cm) {
      cm.save();
      cm.toTextArea();
      cm = null;
    }
  };

  // TODO: Determine which editor is saved to settings
  // and observer that one
  observeEditor("#editor");

  $: cm && cm.setOption("keyMap", $editor);
  $: cm && cm.setOption("lint", config.lintTypes[$lint]);
  $: {
    if (advancedModeOn) {
      if (!cm) {
        mount();
      }
    } else {
      unmount();
    }
  }
</script>
