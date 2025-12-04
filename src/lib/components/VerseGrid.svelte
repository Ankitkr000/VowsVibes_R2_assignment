<script>
  import { createEventDispatcher } from 'svelte';
    import scrolledCard from '$lib/assets/images/scrolled_card.png';
    import playImg from '$lib/assets/images/play.png';
  export let verses = []; // array from API
  const dispatch = createEventDispatcher();

  
  function openVerse(v) {
    dispatch('verseClick', v);
  }
</script>

<section class="py-0 mt-0 mr-5">
  <div class="grid grid-cols-5 gap-x-30 gap-y-0 max-w-[1200px] mx-auto px-0">
    {#each verses as verse, idx}
      <div class="flex justify-center">
        <button class="focus:outline-none cursor-pointer hover:opacity-95 transition-opacity" on:click={() => openVerse(verse)} aria-label="Open verse {verse.shlok_no}">
<div class="relative w-[210px] h-[244px]">


    <img src={scrolledCard} alt="scroll" class="w-full h-full object-contain" />

  


    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[63%] h-[68%] bg-[#3C343482] rounded-sm"></div>

    <!-- verse text -->
        <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-white text-[23px] font-normal text-center px-2 
                leading-[41.4px] z-10 mt-[-30px]"
        style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;"
        >
        {
            verse.shlok_no == "0"
            ? 'Whole\nChapter'
            : verse.shlok_no == "99"
                ? 'End of\nChapter'
                : verse.shlok_no
        }
        </span>




    <!-- play icon -->
    <div class="absolute left-1/2 -translate-x-1/2 bottom-[42px]
                w-[39px] h-[39px] z-10
                rounded-full flex items-center justify-center bg-transparent">
        <img src={playImg} alt="Play" class="w-full h-full object-contain" />
    </div>

</div>

        </button>
      </div>
    {/each}
  </div>
</section>
