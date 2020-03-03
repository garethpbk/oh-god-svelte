<script>
  let message = "Nothing handled.";
</script>

<div>
  <p>{message}</p>
  <button on:click={() => (message = 'Click handled.')}>Click</button>
  <button
    on:mouseover={() => (message = 'Mouseover handled.')}
    on:mouseleave={() => (message = 'Nothing handled.')}>
    Hover
  </button>
  <button on:click|once={() => (message = 'Click once handled.')}>
    Click Once
  </button>
</div>
