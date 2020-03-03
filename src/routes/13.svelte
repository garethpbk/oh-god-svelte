<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Conditional from "./Conditional.svelte";
</script>

<SlideWrapper>
  <h1>Conditional Blocks</h1>
  <Appear>
    <p>if...else if...else</p>
    <Conditional />
  </Appear>
</SlideWrapper>
