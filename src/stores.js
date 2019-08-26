import { writable } from "svelte/store";
export const editor = writable("");
export const mode = writable("");
export const lint = writable("");
export const width = writable("");
export const fullscreen = writable(false);
export const advancedModeOn = writable(false);
export const editSettings = writable(false);
