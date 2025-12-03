<script>
    import chapterImage from '$lib/assets/images/chapterImage.png';
    let chapters = Array.from({ length: 18 }, (_, i) => i + 1);
</script>

<section class="py-0 pb-16 sm:pb-20 md:pb-28 mt-[-30px] sm:mt-[-45px] md:mt-[-60px] mb-[-40px] sm:mb-[-60px] md:mb-[-78px]">


  <!-- title -->
    <h2 class="text-center pt-2 pb-12 sm:pb-16 md:pb-20 text-[18px] sm:text-[21px] md:text-[24px] text-[#bd003c] tracking-[1px] font-[400] leading-[43.5px] font-lato relative">
        <span class="relative inline-block">
            GITA CHAPTERS
            <span class="absolute bottom-[0px] left-[-10%] w-[120%] h-[2px] bg-[#bd003c]"></span>
        </span>
    </h2>



   




    <!-- grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-x-12 md:gap-y-24 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:ml-18 mt-6">

        {#each chapters as ch}
            <div class="flex justify-center">
                <div
                    class="
                        w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px]
                        border-[0.5px] border-black
                        rounded-[12px] md:rounded-[15px]
                        rotate-45
                        overflow-hidden
                        cursor-pointer
                  
                        duration-300
                        relative
                        mb-[20px] sm:mb-[25px] md:mb-[30px]
                    "
                >

                    <!-- Inner unrotated wrapper -->
                    <div class="w-full h-full -rotate-45 relative">


                        <img
                    src="{chapterImage}"
                    alt="chapter"
                    class="scale-x-110 h-[121%] object-cover absolute left-1/2 top-1/2 translate-y-[-45%] -translate-x-[55%]"
                    style="object-position: 32% 50%;"
                    />




                    </div>

                    <!-- rectangle -->
                    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[141%] h-[28%] bg-[#352c2c] opacity-67 -rotate-45"></div>



                    <!-- chapter-no -->
                    <span class="
                        absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        text-white text-[20px] sm:text-[22px] md:text-[24px]
                        z-10
                        -rotate-45
                        text-center
                        leading-[16px] sm:leading-[17px] md:leading-[18px]
                        px-[1em]
                        font-normal
                        bg-transparent
                    "
                    style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;"
                    >
                        {ch}
                    </span>
                </div>
            </div>
        {/each}

    </div>

</section>
