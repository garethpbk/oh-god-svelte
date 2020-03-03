<script>
  let color;
</script>

<style>
  .square {
    height: 200px;
    width: 200px;

    margin: 50px auto;

    background-color: rebeccapurple;
  }

  .red {
    background-color: tomato;
  }

  .blue {
    background-color: steelblue;
  }
</style>

{#if color === 'red'}
  <div class="square red" />
{:else if color === 'blue'}
  <div class="square blue" />
{:else}
  <div class="square" />
{/if}
<button on:click={() => (color = 'red')}>Red</button>
<button on:click={() => (color = 'blue')}>Blue</button>
<button on:click={() => (color = '')}>Reset</button>
