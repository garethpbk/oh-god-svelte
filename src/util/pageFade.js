/**
 * cool implementation of Sapper route transitions
 * from https://stackoverflow.com/questions/57464113/how-to-do-page-transitions-with-svelte-sapper
 */

import { sineOut } from 'svelte/easing';

let duration = 250;
let delay = duration;

let delayZero = 0;

export const fadeIn = () => ({
  duration,
  delay,
  easing: sineOut,
  css: t => `opacity: ${t}`,
});

export const fadeOut = () => ({
  duration,
  delayZero,
  easing: sineOut,
  css: t => `opacity: ${t}`,
});
