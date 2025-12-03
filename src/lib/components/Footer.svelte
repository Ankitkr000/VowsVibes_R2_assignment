<script>
    import footerLogo from "$lib/assets/images/footer.png";
    import footBackground from "$lib/assets/images/footBackground.png";
</script>

<footer class="w-full flex flex-col items-center text-center justify-center" style="background-image: url('{footBackground}'); background-size: cover; background-position: center; height: 280px; padding: 0; padding-top: 30px; padding-bottom: 30px;">

    
    <div class="flex items-center justify-center gap-2 mb-2  sm:mb-3">
            <h4
            class="text-[18px] sm:text-[21px] md:text-[24px] m-0 leading-[28.8px] text-[#CACACA] font-medium"
            style="font-family: 'Edensor', 'Noto Sans Devanagari';"
            >
                Connect
            </h4>





        {#each [
            { icon: "fa-brands fa-facebook-f", label: "Facebook" },
            { icon: "fa-brands fa-twitter", label: "Twitter" },
            { icon: "fa-brands fa-youtube", label: "YouTube" },
            { icon: "fa-brands fa-safari", label: "Safari" }
        ] as item}
            <a 
                href="#"
                aria-label="{item.label}"
                class="
                    w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px]
                    rounded-full
                    border border-[#ffffff]
                    flex items-center justify-center
                    text-[#ffffff]
                    text-[12px] sm:text-[14px] md:text-[16px]
                    transition-all duration-300 ease-out
                    hover:bg-[#55AD55]
                    hover:border-[#55AD55]
                    hover:text-white
                "
            >
                <i class="{item.icon}"></i>
            </a>

        {/each}
    </div>




    <img 
        src="{footerLogo}" 
        alt="Footer Logo" 
        class="mb-2 mt-[-10px] md:mt-[-10px] w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] align-middle border-none"
    />

    


        <h1
        class="text-[28px] sm:text-[36px] md:text-[45px] text-[#AEA17E] leading-[1.2] footer-showcase mb-[-7px] mt-0 tracking-[0.5px] font-normal"
        style="font-family: 'Edensor', 'Noto Sans Devanagari';"
        >
            WELLBEING~SVASTI
        </h1>



  

        
    <p class="font-lato max-w-[900px] mb-0 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[1.8] text-[#CACACA] bg-transparent align-baseline justify-center flex items-center m-0 flex-col px-4" 
        style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;">
        © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by
    </p>

    <p class="font-lato text-[#68B4A9] mt-0 mb-0 text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[1.8] align-baseline justify-center flex items-center m-0 flex-col"
       style="font-family: Lato, 'Noto Sans Devanagari', sans-serif;">
        Burning Desire Inclusive
    </p>


</footer>