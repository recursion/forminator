import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    textarea: document.querySelector("#editor")
  }
});

export default app;
