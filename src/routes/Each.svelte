<script>
  let list = ["apples", "bananas", "grapes"];
  let newFruit = "";
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    color: white;

    list-style-type: none;
  }

  input {
    margin: 25px auto;
  }
</style>

<ul>
  {#each list as fruit}
    <li>{fruit}</li>
  {/each}
</ul>
<input bind:value={newFruit} />
<button on:click={() => (list = [...list, newFruit])}>Add New Fruit</button>
