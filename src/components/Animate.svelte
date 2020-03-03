<script>
  import { fade } from "svelte/transition";
  let visible = true;
</script>

<style>
  .square {
    height: 250px;
    width: 250px;

    margin: 25px auto;

    background-color: slateblue;
  }
</style>

<div>
  <button on:click={() => (visible = !visible)}>Faaaaddeeee</button>
  {#if visible}
    <div class="square" transition:fade />
  {/if}
</div>
