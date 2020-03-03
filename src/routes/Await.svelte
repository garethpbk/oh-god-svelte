<script>
  let promise = false;

  function generateRandom() {
    const num = Math.floor(Math.random() * 1000);

    if (num >= 500) return num;

    return false;
  }

  function timeout() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  async function getRandomNumber() {
    await timeout();

    const res = generateRandom();

    if (res) {
      return res;
    } else {
      throw new Error("Error no number!");
    }
  }
</script>

<button on:click={() => (promise = getRandomNumber())}>Get Random #</button>

{#await promise}
  <p>...waiting...</p>
{:then number}
  <p>Magic number {number}</p>
{:catch error}
  <p>{error.message}</p>
{/await}
