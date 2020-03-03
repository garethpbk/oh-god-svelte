<script>
  let number = 1;
  let colorVal = "rgba(0, 0, 0)";

  function getRandom(val) {
    return Math.floor(Math.random() * 255);
  }

  $: {
    colorVal = `rgba(${getRandom(number)}, ${getRandom(number)}, ${getRandom(
      number
    )} )`;
  }
</script>

<style>
  .square {
    height: 250px;
    width: 250px;

    margin: 50px auto;
  }
</style>

<p>Number: {number}</p>
<input bind:value={number} />
<div class="square" style="background-color: {colorVal}" />
<p>Color Value: {colorVal}</p>
