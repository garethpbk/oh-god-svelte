<script>
  import { onMount, afterUpdate } from "svelte";
  import { goto } from "@sapper/app";
  import { appearCount, appearLength, backOrForward } from "../store";

  export let segment;
  let nextRouteSeg;
  let prevRouteSeg;
  let slides;

  function getRouteSegments() {
    if (!segment) return;

    const intSeg = parseInt(segment);

    prevRouteSeg =
      segment.charAt(0) === "0" ? `0${intSeg - 1}` : `${intSeg - 1}`;

    nextRouteSeg =
      segment.charAt(0) === "0" ? `0${intSeg + 1}` : `${intSeg + 1}`;
  }

  onMount(() => {
    fetch("/info")
      .then(res => res.json())
      .then(res => (slides = res));

    if (!slides) slides = ["01", "02", "03"];

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          if (segment === slides[0] || $appearCount !== $appearLength) return;
          backOrForward.set("back");
          goto(prevRouteSeg);
          break;
        case 39:
          if (segment === slides[slides.length - 1] || $appearCount > 0) return;
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

  :global(html) {
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
    color: #2c75ff;
    font-family: "Staatliches", sans-serif;
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
