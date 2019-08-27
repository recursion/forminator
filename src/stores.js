import { writable } from "svelte/store";
// settings
export const editor = writable("");
export const mode = writable("");
export const lint = writable("");

// state
export const width = writable("");
export const fullscreen = writable(false);
export const advancedModeOn = writable(false);
export const editSettings = writable(false);
