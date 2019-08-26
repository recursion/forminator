import { writable } from "svelte/store";
export const editor = writable("vim");
export const mode = writable("javascript");
export const lint = writable("javascript");
export const width = writable("100%");
export const fullscreen = writable(false);
