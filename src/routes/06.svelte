<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
</script>

<SlideWrapper>
  <h1>Styling</h1>
  <Appear>
    <p>Style tags in component file</p>
    <p>Scoped to component by default</p>
    <p>Use :global modifier to make global</p>
    <p>Pre-process with e.g. lang="sass" (requires pre-processing pkg)</p>
    <img alt="Style" src="style.jpg" />
  </Appear>
</SlideWrapper>
