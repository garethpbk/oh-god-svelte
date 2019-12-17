<script>
  import { afterUpdate, onMount } from "svelte";
  import { appearCount, appearLength } from "../store";

  onMount(() => {
    appearCount.set(0);
    appearLength.set(0);
  });
</script>
