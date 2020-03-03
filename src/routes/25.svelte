<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Animate from "../components/Animate.svelte";
</script>

<style>
  img {
    display: block;

    margin: 25px 0;
  }
</style>

<SlideWrapper>
  <h1>Animations & Transitions</h1>
  <Appear>
    <p>Built in to Svelte!</p>
    <Animate />
    <img alt="Animate" src="animate.jpg" />
  </Appear>
</SlideWrapper>
