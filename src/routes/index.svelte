<script>
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';

	onMount(() => {
		goto('/01');
	})
</script>

<svelte:head>
  <title>Oh God Not Another Framework</title>
</svelte:head>

<div class="slide-wrapper">
	<h1>Loading...</h1>
</div>
