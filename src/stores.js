import { writable } from "svelte/store";
export const editor = writable("vim");
export const lint = writable("javascript");
export const width = writable("100%");
