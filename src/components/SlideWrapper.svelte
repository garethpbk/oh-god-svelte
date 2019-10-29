<script>
  import { fadeIn, fadeOut } from "../util/pageFade";
  import { fly } from "svelte/transition";
  import { backOrForward } from "../store";
</script>

<div class="slide-wrapper" in:fly={{ x: $backOrForward === 'forward' ? '1000' : '-1000' }} out:fly={{ x: $backOrForward === 'back' ? '1000' : '-1000' }}>
  <slot />
</div>
