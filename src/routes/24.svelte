<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Store from "../components/Store.svelte";
</script>

<style>
  img {
    display: block;

    margin: 25px auto;
  }
</style>

<SlideWrapper>
  <h1>Stores</h1>
  <Appear>
    <p>Svelte's built-in state management solution</p>
    <Store />
    <img alt="Store 1" src="store-1.jpg" />
    <img alt="Store 2" src="store-2.jpg" />
  </Appear>
</SlideWrapper>
