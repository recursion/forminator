import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    textarea: document.querySelector("#editor")
  }
});

// for production we want to expose App globally
// window.forminator = App;

export default app;
