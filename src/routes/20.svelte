<script>
  import SlideWrapper from "../components/SlideWrapper.svelte";
  import Appear from "../components/Appear.svelte";
  import Events from "../components/Events.svelte";
</script>

<style>
  img {
    margin: 50px 0 0 0;
  }
</style>

<SlideWrapper>
  <h1>Event Handlers</h1>
  <Appear>
    <p>on:event</p>
    <Events />
    <img alt="Events" src="events.jpg" />
  </Appear>
</SlideWrapper>
