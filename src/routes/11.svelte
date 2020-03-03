<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Reactive from "../components/Reactive.svelte";
</script>

<SlideWrapper>
  <h1>$:</h1>
  <Appear>
    <Reactive />
  </Appear>
</SlideWrapper>
