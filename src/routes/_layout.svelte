<script>
  import { onMount, afterUpdate } from "svelte";
  import { goto } from "@sapper/app";
  import { backOrForward } from "../store";

  export let segment;
  let nextRouteSeg;
  let prevRouteSeg;

  function getRouteSegments() {
    if (!segment) return;
    
    const intSeg = parseInt(segment);

    prevRouteSeg =
      segment.charAt(0) === "0" ? `0${intSeg - 1}` : `${intSeg - 1}`;

    nextRouteSeg =
      segment.charAt(0) === "0" ? `0${intSeg + 1}` : `${intSeg + 1}`;
  }

  onMount(() => {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          backOrForward.set("back");
          goto(prevRouteSeg);
          break;
        case 39:
          backOrForward.set("forward");
          goto(nextRouteSeg);
          break;
      }
    };
  });

  afterUpdate(() => {
		getRouteSegments();
	});
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  :global(body) {
    background-color: #000;
  }

  main {
    height: 100vh;
    width: 100vw;

    position: relative;

    overflow: hidden;
  }

  :global(h1, h2, h3, h4, h5, h6, p) {
    color: #2C75FF;
    font-family: 'Staatliches', sans-serif;
    letter-spacing: 0.25rem;
  }

  :global(.slide-wrapper) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;

    height: 100%;
    width: 100%;

    overflow: hidden;
  }
</style>

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>
