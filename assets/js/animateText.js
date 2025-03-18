function animateText(containerId, text, animation) {
    const container = document.querySelector(`#${containerId}`);
    if (!container) return;

    gsap.registerPlugin(TextPlugin);

    // Ganti "\n" dengan <br>
    text = text.replace(/\n/g, "<br>");

    if (!["typing", "scale-in", "scale-in-out", "bounce"].includes(animation)) {
        // Pecah kata untuk animasi berbasis children
        const words = text.split(/(\s+|<br>)/).map(word =>
            word === "<br>" ? "<br>" : `<span style="opacity:0; display:inline-block;">${word}</span>`
        ).join("");

        container.innerHTML = words;
    } else {
        container.innerHTML = text;
    }

    switch (animation) {
        case "fade-in":
            gsap.to(container.children, { opacity: 1, duration: 0.5, stagger: 0.2 });
            break;
        case "slide-left":
            gsap.fromTo(container.children, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2 });
            break;
        case "slide-right":
            gsap.fromTo(container.children, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2 });
            break;
        case "slide-up":
            gsap.fromTo(container.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 });
            break;
        case "slide-down":
            gsap.fromTo(container.children, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 });
            break;
        case "zoom-in":
            gsap.fromTo(container.children, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 });
            break;
        case "wave":
            gsap.fromTo(container.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "bounce.out" });
            break;
        case "typing":
            gsap.to(container, { duration: 2, text: text, ease: "none" });
            break;
        case "scale-in":
            gsap.from(container, { scale: 0, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" });
            break;
        case "scale-out":
            gsap.to(container, { scale: 0, opacity: 0, duration: 1.5, ease: "power2.in", delay: 1 });
            break;
        case "scale-in-out":
            gsap.fromTo(container, { scale: 0, opacity: 0 }, {
                scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)",
                onComplete: () => {
                    gsap.to(container, { scale: 0, opacity: 0, duration: 1.5, ease: "power2.in", delay: 1 });
                }
            });
            break;
        case "bounce":
            gsap.to(container, { scale: 1.2, opacity: 1, duration: 0.5, ease: "power1.inOut", repeat: -1, yoyo: true });
            break;
    }
}