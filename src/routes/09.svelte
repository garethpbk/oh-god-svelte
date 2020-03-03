<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
</script>

<SlideWrapper>
  <h1>Reactive Assignment</h1>
  <h1>$:</h1>
  <Appear>
    <p>Wtf is $:</p>
    <p>"JS label syntax"</p>
    <p>
      Svelte docs: "Any top-level statement (i.e. not inside a block or a
      function) can be made reactive by prefixing it with the $:
    </p>
    <p>
      Reactive statements run immediately before the component updates, whenever
      the values that they depend on have changed."
    </p>
  </Appear>
</SlideWrapper>
