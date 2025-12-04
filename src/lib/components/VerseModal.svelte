<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import projectorIcon from '$lib/assets/images/projector_black.png';
  export let selectedVerse; 
  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      close();
    }
  }

  function handleBackdropKeydown(event) {
    if (event.key === 'Escape') {
      close();
    }
  }
</script>






<div 
  class="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4" 
  transition:fade={{ duration: 200 }} 
  on:click={handleBackdropClick}
  on:keydown={handleBackdropKeydown}
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
 

<!-- exit button -->
  <button 
    class="absolute top-8 right-8 text-[35px] text-white transition-colors z-[60] w-10 h-10 flex items-center justify-center leading-none font-normal cursor-pointer mr-[-10px] mt-[-20px]"
    on:click={close}
    aria-label="Close"
  >
    x
  </button>

  <div class="bg-[#FAD4B3] w-[90%] max-w-[930px] rounded-2xl overflow-hidden relative shadow-2xl">
    <!-- projector icon -->
    <div class="absolute top-6 right-6 z-10">
      <img src={projectorIcon} alt="Projector" class="w-10 h-10 mr-5" />
    </div>

    <!-- scroll -->
        <div class="overflow-y-auto px-20 py-8 mb-[-10px] " style="max-height: 70vh;">
        <!-- Lyrics content -->
        <div
            class="text-[20px] leading-[2.5] text-[#4a4a4a] text-center font-light mt-8 mb-[-30px]"
            style='font-family: "Noto Sans Devanagari", Lato, sans-serif;'
        >
            {@html selectedVerse.lyrics}
        </div>
        </div>






    <!-- audio -->
    {#if selectedVerse.music}
      <div class="px-2 py-6 mb-[-15px]">
        <audio controls class="w-full rounded-lg" preload="metadata">
          <source src={`https://sanskrit.ie/api/geeta/${selectedVerse.music}`} type="audio/mpeg" />
          <source src={`https://sanskrit.ie/${selectedVerse.music}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    {/if}
  </div>
</div>
