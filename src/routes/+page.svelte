<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ChaptersGrid from '$lib/components/ChaptersGrid.svelte';
  import VerseGrid from '$lib/components/VerseGrid.svelte';
  import VerseModal from '$lib/components/VerseModal.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import bg_hero from '$lib/assets/images/bg_hero.png';
  import { fade } from 'svelte/transition';

  let activeChapter = null;      
  let verses = [];             
  let selectedVerse = null;      
  let loading = false;
  let error = null;


  async function onChapterClick(chapterNumber) {
    loading = true;
    error = null;
    try {
    
      const res = await fetch(`/api/geeta/${chapterNumber}`); 
      const data = await res.json();
      verses = data.data || [];   
      activeChapter = chapterNumber;
    } catch (err) {
      error = 'Failed to load verses';
      console.error(err);
    } finally {
      loading = false;
    }
  }

  
  function onVerseClick(verse) {
    selectedVerse = verse;
  }

  function closeModal() {
    selectedVerse = null;
  }

  function goBackToChapters() {
    activeChapter = null;
    verses = [];
  }
</script>

<div class="w-full">
  <Navbar />
  <div class="w-full" style="background-image: url('{bg_hero}'); background-size: cover; background-position: center;">
    <Hero />

    <main class="max-w-[1300px] mx-auto px-4">
      {#if loading}
        <div class="py-12 text-center">Loading...</div>
      {:else if error}
        <div class="py-12 text-center text-red-600">{error}</div>
      {:else}
          {#if activeChapter == null}
            
          <!-- chapter grid -->
            <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
              <ChaptersGrid on:chapterClick={(e) => onChapterClick(e.detail)} />
            </div>
          {:else}
             <!-- chapter heading, back button, versegrid -->
            <section class="py-0 pb-16 sm:pb-20 md:pb-28 mt-[-30px] sm:mt-[-45px] md:mt-[-60px] mb-[-40px] sm:mb-[-60px] md:mb-[-78px]" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
            <!-- back button -->
            <div class="mb-6 ml-[-10px] mt-[-92px] pl-0 w-auto z-50 relative">
              <button
                type="button"
                class="text-[#bd003c] underline transition-all font-normal leading-[28.44px] text-[15.8px] cursor-pointer z-50 relative bg-transparent border-none"
                style='font-family: Lato, "Noto Sans Devanagari", sans-serif;'
                on:click|stopPropagation={goBackToChapters}
              >
                &lt; Back
              </button>
            </div>


            <!-- chapter title -->
              <h2
                class="text-center pb-8 text-[18px] sm:text-[21px] md:text-[24px] text-[#bd003c] tracking-[1px] font-[500] leading-[43.5px] relative mt-[-1px]"
                style='font-family: Lato, "Noto Sans Devanagari", sans-serif;'
              >
                <span class="relative inline-block">
                  CHAPTER {activeChapter}
                  <span class="absolute bottom-[1px] left-[3%] w-[94%] h-[2px] bg-[#bd003c]"></span>
                </span>
              </h2>


          <!-- top-line -->
            <div class="w-[100%] h-[1px] bg-[#bd003c] mb-2 mt-[7px]"></div>

            <!-- verse heading -->
            <div class="mb-5 ml-0 pl-0 mt-4"> 
              <h3
                class="text-left text-[15px] sm:text-[18px] md:text-[15px] text-[#bd003c] tracking-[1px] font-[400] leading-[27px] relative inline-block ml-7 mt-[-40px]"
                style='font-family: Lato, "Noto Sans Devanagari", sans-serif;'
              >
                Verse
              </h3>


            </div>

           <!-- bottom line -->
            <div class="w-full h-[1px] bg-[#bd003c] mb-12 mt-[-8px]"></div>


            <VerseGrid {verses} on:verseClick={(e) => onVerseClick(e.detail)} />
          </section>
        {/if}
      {/if}
    </main>
  </div>

  <Footer />

  {#if selectedVerse}
    <VerseModal {selectedVerse} on:close={closeModal} />
  {/if}
</div>
