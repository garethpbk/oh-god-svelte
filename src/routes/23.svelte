<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Lifecycle from "../components/Lifecycle.svelte";
</script>

<SlideWrapper>
  <h1>Lifecycle</h1>
  <Lifecycle />
  <Appear>
    <p>onMount</p>
    <p>beforeUpdate, afterUpdate, onDestroy, etc...</p>
    <img alt="Lifecycle" src="lifecycle.jpg" />
  </Appear>
</SlideWrapper>
