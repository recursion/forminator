<script>
  export let textarea;
  import { fade } from "svelte/transition";
  import CodeMirror from "codemirror";
  import CloseFullScreenButton from "./CloseFullScreenButton.svelte";
  import { vimproved, linters } from "../config.js";
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
  let notification;
  let notified;

  // set our initial store values based on the config
  $editor = vimproved.keyMap;
  $lint = vimproved.lint;
  $mode = vimproved.mode;

  // retunrs the codemirror dom element, if it exists
  function getCodeMirrorEl() {
    return document.querySelector(".CodeMirror");
  }

  // update the width setting when one of our editor windows changes
  const updateEditorWidth = () => {
    const el = getCodeMirrorEl() || textarea;
    $width = el.style.width;
  };

  // Attach an observer to our editor so we can capture mutation events
  const observeEditor = node => {
    observer = new MutationObserver(updateEditorWidth);
    observer.observe(node, {
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

      const lowerbar = document.querySelector(".ui-bar.bottom");
      const container = document.querySelector(".container");

      // instantiate CodeMirror from our existing text area
      cm = CodeMirror.fromTextArea(textarea, vimproved);

      // set the codemirror wrapper width and height to the original textAreas width and height
      getCodeMirrorEl().style.width = textarea.style.width;
      getCodeMirrorEl().style.height = textarea.style.height;

      // Give CodeMirror enough time to mount
      // and then move it, and attach a mutation observer to it.
      setTimeout(() => {
        const newEditor = getCodeMirrorEl();
        container.insertBefore(newEditor, lowerbar);
        observeEditor(newEditor);
      }, 50);
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

  // Update our options when they change
  $: cm && cm.setOption("keyMap", $editor);
  $: cm && cm.setOption("mode", $mode);
  $: cm && cm.setOption("lint", linters[$lint]);

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
    // unhide the 'how-to minimize' notification
    // set a timer to rehide it
    // only notify once
    if (!notified) {
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
      notified = true;
    }

    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      codeMirror.style.width = "100%";
      codeMirror.style.height = "100%";
      codeMirror.classList.add("CodeMirror-fullscreen");
    }
  } else {
    var codeMirror = getCodeMirrorEl();
    if (codeMirror) {
      codeMirror.classList.remove("CodeMirror-fullscreen");
    }
  }

  // set up an observer on the original textarea
  observeEditor(textarea);
</script>

<style>
  .notification {
    display: none;
    padding: 1em;
    width: 500px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translate(-50%);
    z-index: 5000;
    font-size: 1.25em;
    font-weight: bold;
    border-radius: 5px;
  }
</style>

<div bind:this={notification} transition:fade class="notification">
  Click the button in the upper right corner to exit fullscreen.
</div>

{#if $fullscreen}
  <CloseFullScreenButton />
{/if}
