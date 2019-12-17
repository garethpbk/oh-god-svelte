import { writable } from "svelte/store";

export const appearCount = writable(0);
export const appearLength = writable(0);
export const backOrForward = writable("forward");
