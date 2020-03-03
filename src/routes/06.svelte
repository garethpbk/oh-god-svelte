<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Counter from "./Counter.svelte";
</script>

<SlideWrapper>
  <h1>Data & Props</h1>
  <Appear>
    <p>What if we just used JavaScript syntax!?</p>
    <Counter />
  </Appear>
</SlideWrapper>
