<script>
  import CounterView from "./CounterView.svelte";

  let count = 0;
</script>

<div>
  <CounterView doubledCount={count * 2} {count} />
  <button on:click={() => (count += 1)}>INCREASE THAT COUNT</button>
</div>
