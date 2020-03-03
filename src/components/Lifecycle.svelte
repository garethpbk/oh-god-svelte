<script>
  import { onMount } from "svelte";

  let message = "...waiting...";

  onMount(() => {
    setTimeout(() => {
      message = "Time has elapsed.";
    }, 2000);
  });
</script>

<p>{message}</p>
