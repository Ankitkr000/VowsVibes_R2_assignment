<script>
    import logo from '$lib/assets/images/logo.png';

    let openMenu = "";
</script>

<nav class="w-full bg-white shadow-sm flex items-center relative z-50 py-3 px-4 sm:py-4 sm:px-6 md:py-5 md:px-10">

 
    <img src="{logo}" alt="logo" class="cursor-pointer ml-0 sm:ml-[-20px] md:ml-[-35px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]" />

    <!-- search-icon -->
    <button type="button" class="relative group text-[16px] sm:text-[18px] md:text-[20px] text-[#3E4939] transition-colors duration-300 focus:outline-none ml-auto cursor-pointer mr-4 sm:mr-6 md:mr-[30px]">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span class="sr-only">Open search</span>

        <!-- underline -->
        <span class="absolute left-[-8px] bottom-[-2px] w-0 h-[2px] bg-black group-hover:w-[calc(100%+16px)] transition-all duration-500"></span>
    </button>


    <!-- RIGHT: MENU -->
    <ul class="hidden md:flex items-center gap-4 lg:gap-8 text-[10px] lg:text-[12px] font-normal text-[#3E4939] font-medium tracking-[0.5px] uppercase" style="font-family: Lato, 'Noto Sans Devanagari';">

        <!-- AYURVEDA -->
        <li 
            class="relative group cursor-pointer"
            on:mouseenter={() => openMenu = "ayurveda"}
            on:mouseleave={() => openMenu = ""}
        >
            <div class="relative">
                <span class="relative pb-1 group-hover:text-[#deb887] transition-colors duration-500">
                    ĀYURVEDA <i class="fa-solid fa-chevron-down text-[10px] ml-0.5"></i>

                    <!-- underline -->
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></span>
                </span>

               <!-- drop-down -->
                {#if openMenu === "ayurveda"}
                    <div class="absolute left-0 w-40 bg-transparent top-full h-[8px]" role="button" tabindex="-1"
                        on:mouseenter={() => openMenu = "ayurveda"}
                        on:mouseleave={() => openMenu = ""}
                    ></div>
                    <div class="absolute left-0 bg-white w-37 shadow-lg rounded-md animate-fade top-[calc(100%+8px)] font-medium text-[15px] leading-[1.6] text-[#1a1a1a] border border-[#ddd]" style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;" role="menu" tabindex="-1"
                        on:mouseenter={() => openMenu = "ayurveda"}
                        on:mouseleave={() => openMenu = ""}
                    >
                        <div class="py-3 normal-case">
                            <a href="#ayurveda-introduction" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Introduction</a>
                            <a href="#ayurveda-timing" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Timing</a>
                            <a href="#ayurveda-food" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Food</a>
                        </div>
                    </div>
                {/if}
            </div>
        </li>




        <!-- YOGASUTRAS -->
        <li 
            class="relative group cursor-pointer"
            on:mouseenter={() => openMenu = "yoga"}
            on:mouseleave={() => openMenu = ""}
        >
            <div class="relative">
                <span class="relative pb-1 group-hover:text-[#deb887] transition-colors duration-500">
                    YOGASŪTRAS <i class="fa-solid fa-chevron-down text-[10px] ml-0.5"></i>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></span>
                </span>

                {#if openMenu === "yoga"}
                    <div class="absolute left-0 w-40 bg-transparent top-full h-[8px]" role="button" tabindex="-1"
                        on:mouseenter={() => openMenu = "yoga"}
                        on:mouseleave={() => openMenu = ""}
                    ></div>
                    <div class="absolute left-0 bg-white w-38 shadow-lg rounded-md animate-fade top-[calc(100%+8px)] font-medium text-[15px] leading-[1.6] text-[#1a1a1a] border border-[#ddd]" style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;" role="menu" tabindex="-1"
                        on:mouseenter={() => openMenu = "yoga"}
                        on:mouseleave={() => openMenu = ""}
                    >
                        <div class="py-3 normal-case">
                            <a href="#yoga-introduction" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Introduction</a>
                            <a href="#yoga-obstacles" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Obstacles</a>
                            <a href="#yoga-practices" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Practices</a>
                            <a href="#yoga-asana" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Yogāsana</a>
                            <a href="#yoga-glossary" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Glossary</a>
                        </div>
                    </div>
                {/if}
            </div>
        </li>


        <!-- BHAGAVAD GITA-->
        <li class="relative group cursor-pointer">
            <span class="relative pb-1 group-hover:text-[#deb887] transition-colors duration-500">
                BHAGAVAD GĪTĀ
                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></span>
            </span>
        </li>


        <!-- UPANISADS -->
        <li 
            class="relative group cursor-pointer"
            on:mouseenter={() => openMenu = "upanisad"}
            on:mouseleave={() => openMenu = ""}
        >
            <div class="relative">
                <span class="relative pb-1 group-hover:text-[#deb887] transition-colors duration-500">
                    UPANIṢADS <i class="fa-solid fa-chevron-down text-[10px] ml-0.5"></i>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></span>
                </span>

                {#if openMenu === "upanisad"}
                    <div class="absolute left-0 w-52 bg-transparent top-full h-[8px]" role="button" tabindex="-1"
                        on:mouseenter={() => openMenu = "upanisad"}
                        on:mouseleave={() => openMenu = ""}
                    ></div>
                    <div class="absolute left-0 bg-white w-52 shadow-lg rounded-md animate-fade top-[calc(100%+8px)] font-normal text-[16px] leading-[1.6] text-[#3e4939] border border-[#ddd]" style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;" role="menu" tabindex="-1"
                        on:mouseenter={() => openMenu = "upanisad"}
                        on:mouseleave={() => openMenu = ""}
                    >
                        <div class="py-3">
                            <a href="#isa-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">ĪŚOPANIṢAD</a>
                            <a href="#taittiriya-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">TAITTIRĪYOPANIṢAD</a>
                            <a href="#mandukya-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">MĀṆḌŪKYOPANIṢAD</a>
                            <a href="#kena-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">KENOPANIṢAD</a>
                            <a href="#katha-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">KAṬHOPANIṢAD</a>
                            <a href="#aitareya-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">AITAREYOPANIṢAD</a>
                            <a href="#mundaka-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">MUṆḌAKOPANIṢAD</a>
                            <a href="#prasna-upanisad" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">PRĀŚNOPANIṢAD</a>
                        </div>
                    </div>
                {/if}
            </div>
        </li>



        <!-- SANSKRIT -->
        <li 
            class="relative group cursor-pointer"
            on:mouseenter={() => openMenu = "sanskrit"}
            on:mouseleave={() => openMenu = ""}
        >
            <div class="relative">
                <span class="relative pb-1 group-hover:text-[#deb887] transition-colors duration-500">
                    SANSKRIT <i class="fa-solid fa-chevron-down text-[10px] ml-0.5"></i>
                    <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></span>
                </span>

                {#if openMenu === "sanskrit"}
                    <div class="absolute left-0 w-44 bg-transparent top-full h-[8px]" role="button" tabindex="-1"
                        on:mouseenter={() => openMenu = "sanskrit"}
                        on:mouseleave={() => openMenu = ""}
                    ></div>
                    <div class="absolute left-0 bg-white w-40 shadow-lg rounded-md animate-fade top-[calc(100%+8px)] font-medium text-[15px] leading-[1.6] text-[#1a1a1a] border border-[#ddd]" style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;" role="menu" tabindex="-1"
                        on:mouseenter={() => openMenu = "sanskrit"}
                        on:mouseleave={() => openMenu = ""}
                    >
                        <div class="py-3 normal-case">
                            <a href="#devotional-songs" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 whitespace-nowrap no-underline text-inherit">Devotional Songs</a>

                            <a href="#grammar-songs" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Grammar Songs</a>
                            <a href="#fun-songs" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Fun Songs</a>
                            <a href="#script-songs" class="block px-5 py-2 hover:bg-gray-50 hover:text-[#deb887] cursor-pointer transition-colors duration-300 no-underline text-inherit">Script Songs</a>
                        </div>
                    </div>
                {/if}
            </div>
        </li>



        
        <!-- CONTACT US -->
        <li class="relative group cursor-pointer">
            <span class="relative pb-1 group-hover:text-[#deb887] transition-colors duration-500">
                CONTACT US
                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500"></span>
            </span>
        </li>

    </ul>
</nav>



<style>
    .animate-fade {
        animation: fadeIn 0.15s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-4px); }
        to   { opacity: 1; transform: translateY(0); }
    }
</style>
