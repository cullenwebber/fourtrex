let scrollTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: heroImage.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
    },
    defaults: {
        ease: "power1.in",
    },
});
scrollTl
    .to(heroImage.current, {
        scale: 1.5,

        ease: "none",
    })
    .to(
        heroImage.current,
        {
            opacity: 0,

            ease: "power2.in",
        },
        "<"
    );