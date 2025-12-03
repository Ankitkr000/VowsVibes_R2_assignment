<script>
    import { onMount } from "svelte";

    let visible = false;
    let isHovered = false;
    let isOverFooter = false;
    let buttonElement;

    onMount(() => {
        const handleScroll = () => {
            visible = window.scrollY > 80;
            checkFooterOverlap();
        };

        const checkFooterOverlap = () => {
            if (!buttonElement) return;
            
            const footer = document.querySelector('footer');
            if (!footer) return;

            const buttonRect = buttonElement.getBoundingClientRect();
            const footerRect = footer.getBoundingClientRect();

            
            isOverFooter = buttonRect.bottom > footerRect.top;
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", checkFooterOverlap);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkFooterOverlap);
        };
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

{#if visible}
<button
    bind:this={buttonElement}
    on:click={scrollToTop}
    class="
        fixed 
        bottom-5
        right-5
        w-[50px]
        h-[50px]
        z-50
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300
        rounded-[10px]
        border-none
    "
    style="background: {isOverFooter || isHovered ? '#171612' : '#464238'};"
    on:mouseenter={() => {
        isHovered = true;
    }}
    on:mouseleave={() => {
        isHovered = false;
    }}
>
    <!-- Chevron Up Icon -->
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 transition-transform duration-200 ease-in-out" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="white" 
        stroke-width="3"
        style="transform: {isHovered ? 'translateY(-5px)' : 'translateY(0)'};"
    >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
</button>
{/if}
