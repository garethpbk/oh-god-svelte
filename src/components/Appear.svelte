<script>
  import { onDestroy, onMount } from "svelte";
  import { appearCount, appearLength } from "../store";

  let appearElement;

  function triggerAppear(e) {
    const children = appearElement.children;

    switch (e.keyCode) {
      case 37:
        if ($appearCount < children.length) {
          children[children.length - ($appearCount + 1)].style.opacity = 0;

          appearCount.set($appearCount + 1);
        }
        break;
      case 39:
        if ($appearCount > 0) {
          children[children.length - $appearCount].style.opacity = 1;

          appearCount.set($appearCount - 1);
        }
        break;
    }
  }

  onMount(() => {
    const children = appearElement.children;
    appearCount.set(children.length);
    appearLength.set(children.length);

    [].forEach.call(children, child => {
      child.style.opacity = 0;
    });

    document.addEventListener("keydown", triggerAppear);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", triggerAppear);
  });
</script>

<div bind:this={appearElement}>
  <slot />
</div>
