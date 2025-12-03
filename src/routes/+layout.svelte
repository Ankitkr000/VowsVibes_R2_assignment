<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	 import ScrollToTop from "$lib/components/ScrollToTop.svelte";
	

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<link 
		href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;500&display=swap" 
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
<ScrollToTop />