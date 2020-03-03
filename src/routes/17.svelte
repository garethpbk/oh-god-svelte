<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
</script>

<SlideWrapper>
  <h1>Iteration Blocks</h1>
  <Appear>
    <img alt="Each blocks" src="each-blocks.jpg" />
    <p>
      (array assignment must be reactive - push, splice etc don't just work)
    </p>
  </Appear>
</SlideWrapper>
