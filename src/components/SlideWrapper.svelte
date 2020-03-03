<script>
  import { fadeIn, fadeOut } from "../util/pageFade";
  import { fly } from "svelte/transition";
  import { backOrForward } from "../store";
</script>

<style>
  :global(h1) {
    font-size: 60px;

    margin: 0 0 100px 0;
  }

  :global(p, li) {
    font-size: 36px;
  }

  .container {
    max-width: 1280px;

    margin: 0 auto;

    text-align: center;

    overflow-y: scroll;
  }
</style>

<div
  class="slide-wrapper"
  in:fly={{ x: $backOrForward === 'forward' ? '1000' : '-1000' }}
  out:fly={{ x: $backOrForward === 'back' ? '1000' : '-1000' }}>
  <div class="container">
    <slot />
  </div>
</div>
