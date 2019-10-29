<script>
  import SlideWrapper from '../components/SlideWrapper.svelte';
  import SvelteLogo from '../components/SvelteLogo.svelte';
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 4rem;
    font-style: italic;
    text-transform: uppercase;
    font-weight: 700;
  }

  h2 {
    font-size: 3rem;

    margin: 50px 0;
  }

  pre {
    display: inline;
  }
</style>

<SlideWrapper>
  <h1>Oh god not another framework</h1>
  <h2>An introduction to <pre>Svelte</pre></h2>
  <SvelteLogo />
</SlideWrapper>
