<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import ChaptersGrid from '$lib/components/ChaptersGrid.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import bg_hero from '$lib/assets/images/bg_hero.png';
</script>

<div class="w-full">
    <Navbar />
    <div class="w-full" style="background-image: url('{bg_hero}'); background-size: cover; background-position: center;">
        <Hero />
        <ChaptersGrid />
    </div>
    <Footer />
</div>
