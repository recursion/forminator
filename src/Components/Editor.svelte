<script>
  import CodeMirror from "codemirror";
  import CloseFullScreenIcon from "./CloseFullScreenIcon.svelte";
  import Config from "../config.js";
  import {
    advancedModeOn,
    fullscreen,
    mode,
    lint,
    editor,
    width
  } from "../stores.js";

  let observer;
  let cm;

  // check settings and see which config to use?
  const { vimproved, lintTypes } = Config(CodeMirror);

  // set our initial store values based on the config
  $editor = vimproved.keyMap;
  $lint = vimproved.lint;
  $mode = vimproved.mode;

  // update the width setting when one of our editor windows changes
  const updateEditorWidth = () => {
    const el =
      document.querySelector(".CodeMirror") ||
      document.querySelector("#editor");
    $width = el.style.width;
  };

  // Attach an observer to our editor so we can capture mutation events
  const observeEditor = selector => {
    observer = new MutationObserver(updateEditorWidth);
    observer.observe(document.querySelector(selector), {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
  };

  // Mount a CodeMirror instance
  const mount = () => {
    try {
      // if we already have a codeMirror instance, dont create a new one....
      if (cm) return;

      // select the original editor, the bottom ui-bar, and the parent container
      const og_editor = document.querySelector("#editor");
      const lowerbar = document.querySelector(".ui-bar.bottom");
      const container = document.querySelector(".container");

      // instantiate CodeMirror from our existing text area
      cm = CodeMirror.fromTextArea(og_editor, vimproved);

      // set the codemirror wrapper width and height to the original textAreas width and height
      document.querySelector(".CodeMirror").style.width = og_editor.style.width;
      document.querySelector(".CodeMirror").style.height =
        og_editor.style.height;

      // Give CodeMirror enough time to mount
      // and then move it, and attach a mutation observer to it.
      setTimeout(() => {
        const newEditor = document.querySelector(".CodeMirror");
        container.insertBefore(newEditor, lowerbar);
        observeEditor(".CodeMirror");
      }, 25);
    } catch (e) {
      console.log(e);
    }
  };

  // unmount the CodeMirror instance
  const unmount = () => {
    if (cm) {
      cm.toTextArea();
      cm = null;
    }
  };

  // retunrs the codemirror dom element, if it exists
  function getCodeMirrorEl() {
    return document.querySelector(".CodeMirror");
  }

  // Update our options when they change
  $: cm && cm.setOption("keyMap", $editor);
  $: cm && cm.setOption("mode", $mode);
  $: cm && cm.setOption("lint", lintTypes[$lint]);

  // mount and unmount when we toggle advancedModeOn flag
  $: {
    if ($advancedModeOn) {
      if (!cm) {
        mount();
      }
    } else {
      unmount();
    }
  }
  // handle fullscreen changes
  $: if ($fullscreen) {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      document.querySelector(".CodeMirror").style.width = "100%";
      document.querySelector(".CodeMirror").style.height = "100%";
      codeMirror.classList.add("CodeMirror-fullscreen");
    }
  } else {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      codeMirror.classList.remove("CodeMirror-fullscreen");
    }
  }

  observeEditor("#editor");
</script>

{#if $fullscreen}
  <CloseFullScreenIcon />
{/if}
