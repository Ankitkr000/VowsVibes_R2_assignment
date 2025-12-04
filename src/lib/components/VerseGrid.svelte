<script>
  import { createEventDispatcher } from 'svelte';
    import scrolledCard from '$lib/assets/images/scrolled_card.png';
    import playImg from '$lib/assets/images/play.png';
  export let verses = []; 
  const dispatch = createEventDispatcher();

  
  function openVerse(v) {
    dispatch('verseClick', v);
  }
</script>

<section class="py-0 mt-0 mr-2 sm:mr-3 md:mr-5">
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-8 md:gap-x-20 lg:gap-x-30 gap-y-0 max-w-[1200px] mx-auto px-2 sm:px-4 md:px-0">
    {#each verses as verse, idx}
      <div class="flex justify-center">
        <button class="focus:outline-none cursor-pointer hover:opacity-95 transition-opacity" on:click={() => openVerse(verse)} aria-label="Open verse {verse.shlok_no}">
<div class="relative w-[150px] h-[174px] sm:w-[180px] sm:h-[209px] md:w-[210px] md:h-[244px]">


    <img src={scrolledCard} alt="scroll" class="w-full h-full object-contain" />

  


    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[63%] h-[68%] bg-[#3C343482] rounded-sm"></div>

    <!-- verse text -->
        <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-white text-[16px] sm:text-[20px] md:text-[23px] font-normal text-center px-2 
                leading-[29px] sm:leading-[36px] md:leading-[41.4px] z-10 mt-[-21px] sm:mt-[-26px] md:mt-[-30px]"
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
    <div class="absolute left-1/2 -translate-x-1/2 bottom-[30px] sm:bottom-[36px] md:bottom-[42px]
                w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[39px] md:h-[39px] z-10
                rounded-full flex items-center justify-center bg-transparent">
        <img src={playImg} alt="Play" class="w-full h-full object-contain" />
    </div>

</div>

        </button>
      </div>
    {/each}
  </div>
</section>
