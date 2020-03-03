<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
</script>

<style>
  h2 {
    font-size: 4rem;
  }
</style>

<SlideWrapper>
  <h1>Performance is cool...</h1>
  <Appear>
    <h2>...but it's the API I love</h2>
    <p>.svelte files</p>
    <p>(kinda like Vue)</p>
    <img alt="Svelte file" src="svelte-file.jpg" />
  </Appear>
</SlideWrapper>
