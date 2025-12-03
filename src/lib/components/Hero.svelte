<script>
    import hero from '$lib/assets/images/hero.png';
    import book from '$lib/assets/images/book.png';
</script>

<section class="w-full relative overflow-hidden">


    <div class="h-[40px] sm:h-[60px] md:h-[75px] w-full"></div>

    
    <div
        class="relative w-full h-[250px] sm:h-[320px] md:h-[395px] bg-cover bg-center flex flex-col justify-center items-center"
        style="background-image: url('{hero}')"
    >

        
        <div 
            class="absolute left-0 right-0 mx-auto w-full h-[80px] sm:h-[110px] md:h-[143px] top-[-15%]"
            style="background-color: rgba(255, 255, 255, 0.64);"
        ></div>

        
        <h1
            class="relative z-[10] text-center text-[40px] sm:text-[70px] md:text-[90px] lg:text-[110.6px] font-medium leading-tight sm:leading-[84px] md:leading-[108px] lg:leading-[132.72px] text-[#3E4939] align-baseline px-3 sm:px-4 md:px-5 mt-[-200px] sm:mt-[-280px] md:mt-[-350px]"
            style="
                font-family: 'Edensor', 'Noto Sans Devanagari';
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            "
        >
            BHAGAVAD GITA
        </h1>



        <img 
            src="{book}" 
            alt="book" 
            class="absolute w-[140px] sm:w-[190px] md:w-[255px] z-[20] bottom-[-35px] sm:bottom-[-50px] md:bottom-[-67px]"
        />

    </div>

 
    <div class="h-[80px] sm:h-[110px] md:h-[140px] w-full"></div>

</section>
