<script>
  let coords = {
    top: 0,
    right: 0
  };

  function example(node) {
    const rect = node.getBoundingClientRect();
    node.addEventListener("click", () => {
      coords = {
        top: rect.top,
        right: rect.right
      };
    });
  }
</script>

<style>
  .square {
    height: 200px;
    width: 200px;

    background-color: turquoise;

    margin: 0 auto;
  }
</style>

<div>
  <div use:example class="square" />
  <p>{coords.top}, {coords.right}</p>
</div>
