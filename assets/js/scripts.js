document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 0; // Halaman aktif
    let isAnimating = false;

    function generatePage1() {
        // Buat elemen utama div dengan class "page" dan id "page1"
        const page1 = document.getElementById('page1');
        page1.classList.add("page");
        page1.id = "page1";

        // Buat div untuk animasi boy
        const boyAnimate = document.createElement("div");
        boyAnimate.classList.add("boy-animate");

        // Buat elemen h3 untuk teks animasi
        const boyAnimateText = document.createElement("h3");
        boyAnimateText.id = "boy-animate-text";
        boyAnimateText.textContent = "Halo, ini animasi!"; // Ubah teks sesuai kebutuhan

        // Buat elemen Lottie
        const lottiePlayer = document.createElement("dotlottie-player");
        lottiePlayer.setAttribute(
            "src",
            "https://lottie.host/542b0837-93f8-46e5-ab6a-e8b8f134abad/9U5iN1YSHi.lottie"
        );
        lottiePlayer.setAttribute("background", "transparent");
        lottiePlayer.setAttribute("speed", "1");
        lottiePlayer.style.width = "400px";
        lottiePlayer.style.height = "400px";
        lottiePlayer.setAttribute("loop", "");
        lottiePlayer.setAttribute("autoplay", "");

        // Susun elemen ke dalam struktur yang benar
        boyAnimate.appendChild(boyAnimateText);
        boyAnimate.appendChild(lottiePlayer);
        page1.appendChild(boyAnimate);

        // Tambahkan page1 ke dalam body atau elemen lain yang diinginkan
        document.body.appendChild(page1);
        createScene("page1");
    }

    function createScene(pageId) {
        const scene = document.createElement('div');
        const page = document.getElementById(pageId);
        scene.classList.add('scene');
        scene.style.position = "absolute";
        scene.style.width = "100%";
        scene.style.height = "100%";
        scene.style.bottom = "0";
        scene.style.background = "linear-gradient(to bottom, #87CEEB, #ffffff)";
        scene.style.zIndex = "-1";
        page.appendChild(scene);

        const landscape = document.createElement('div');
        landscape.classList.add('landscape');
        landscape.style.position = "absolute";
        landscape.style.bottom = "0";
        landscape.style.width = "100%";
        landscape.style.height = "200px";
        landscape.style.background = "linear-gradient(to top, #4CAF50, #388E3C)";
        scene.appendChild(landscape);

        for (let i = 0; i < 5; i++) {
            createCloud(scene);
        }
    }

    function createCloud(container) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.position = "absolute";
        cloud.style.width = "150px";
        cloud.style.height = "60px";
        cloud.style.background = "#fff";
        cloud.style.borderRadius = "50px";
        cloud.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.1)";
        container.appendChild(cloud);

        const before = document.createElement('div');
        before.style.content = "''";
        before.style.position = "absolute";
        before.style.background = "#fff";
        before.style.width = "100px";
        before.style.height = "80px";
        before.style.borderRadius = "50%";
        before.style.top = "-40px";
        before.style.left = "30px";
        cloud.appendChild(before);

        const after = document.createElement('div');
        after.style.content = "''";
        after.style.position = "absolute";
        after.style.background = "#fff";
        after.style.width = "100px";
        after.style.height = "80px";
        after.style.borderRadius = "50%";
        after.style.top = "-20px";
        after.style.left = "90px";
        cloud.appendChild(after);

        const startY = Math.random() * window.innerHeight * 0.5;
        cloud.style.top = `${startY}px`;
        cloud.style.left = `-200px`;

        gsap.to(cloud, {
            x: window.innerWidth + 200,
            duration: Math.random() * 5 + 5,
            ease: "linear",
            repeat: -1,
            onRepeat: () => {
                cloud.style.top = `${Math.random() * window.innerHeight * 0.5}px`;
            }
        });
    }

    if (currentPage == 0) {
        generatePage1();
        animateText('boy-animate-text', "yeay ayang aku\nulang taun!!!", 'bounce')
    }

    function navigateToPage(nextPage) {
        if (isAnimating) return; // Cegah navigasi ganda
        isAnimating = true;

        if (nextPage === 2) {
            gsap.to("#page1", { y: "-100%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page2", {
                y: "-100%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });;
        } else if (nextPage === 3) {
            gsap.to(".transition", { scale: 0, duration: 0, display: "block" }); // Reset scale
            gsap.to(".transition", {
                scale: 50, duration: 1, ease: "power2.out", onComplete: () => {
                    gsap.to("#page2", { y: "-100%", duration: 0 });
                    gsap.to("#page3", { y: "-200%", duration: 0 });
                    gsap.to(".transition", {
                        scale: 0, duration: 1, ease: "power2.inOut", onComplete: () => {
                            document.querySelector(".transition").style.display = "none";
                        }
                    });
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
        } else if (nextPage === 4) {
            gsap.to("#page3", { y: "-100%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page4", {
                y: "-300%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
            gsap.to("#page5", { y: "-300%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page6", { y: "-300%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page7", { y: "-300%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page8", { y: "-300%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page9", { y: "-300%", duration: 1, ease: "power2.inOut" });
        } else if (nextPage === 5) {
            gsap.to("#page4", { x: "-100%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page5", {
                x: "100%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
            gsap.to("#page6", { x: "100%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page7", { x: "100%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page8", { x: "100%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page9", { x: "100%", duration: 1, ease: "power2.inOut" });
        } else if (nextPage === 6) {
            gsap.to("#page5", { x: "200%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page6", {
                x: "200%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
            gsap.to("#page7", { x: "200%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page8", { x: "200%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page9", { x: "200%", duration: 1, ease: "power2.inOut" });
        } else if (nextPage === 7) {
            gsap.to("#page6", { x: "300%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page7", {
                x: "300%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
            gsap.to("#page8", { x: "300%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page9", { x: "300%", duration: 1, ease: "power2.inOut" });
        } else if (nextPage === 8) {
            gsap.to("#page7", { x: "400%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page8", {
                x: "400%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
            gsap.to("#page9", { x: "400%", duration: 1, ease: "power2.inOut" });
        } else if (nextPage === 9) {
            gsap.to("#page8", { x: "500%", duration: 1, ease: "power2.inOut" });
            gsap.to("#page9", {
                x: "500%", duration: 1, ease: "power2.inOut", onComplete: () => {
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
        } else if (nextPage === 10) {
            gsap.to(".transition", { scale: 0, duration: 0, display: "block" }); // Reset scale
            gsap.to(".transition", {
                scale: 50, duration: 1, ease: "power2.out", onComplete: () => {
                    gsap.to("#page4", { y: "-400%", duration: 0 });
                    gsap.to("#page5", { y: "-400%", duration: 0 });
                    gsap.to("#page6", { y: "-400%", duration: 0 });
                    gsap.to("#page7", { y: "-400%", duration: 0 });
                    gsap.to("#page8", { y: "-400%", duration: 0 });
                    gsap.to("#page9", { y: "-400%", duration: 0 });
                    gsap.to("#page10", { y: "-400%", duration: 0 });
                    gsap.to(".transition", {
                        scale: 0, duration: 1, ease: "power2.inOut", onComplete: () => {
                            document.querySelector(".transition").style.display = "none";
                        }
                    });
                    addExtraElement(nextPage);
                    removeExtraElement(currentPage - 1);
                    isAnimating = false; // Reset flag
                }
            });
        } else {
            gsap.to(".page", { y: "0%", x: "0%", duration: 1, ease: "power2.inOut" });
            currentPage = 1
            removeExtraElement(nextPage - 1);
            isAnimating = false; // Reset flag
            return
        }
        currentPage = nextPage;
    }

    // Fungsi untuk menambahkan elemen baru di halaman yang dituju
    function addExtraElement(page) {
        removeExtraElement(currentPage - 1);
        isAnimating = false; // Reset flag
        const targetPage = document.getElementById(`page${page}`);
        const newElement = document.createElement("div");
        newElement.classList.add("extra-content");
        newElement.innerText = `Ini elemen baru di halaman ${page}`;
        newElement.style.padding = "10px";
        newElement.style.background = "lightblue";
        newElement.style.marginTop = "20px";
        targetPage.appendChild(newElement);
    }

    // Fungsi untuk menghapus elemen tambahan dari halaman sebelumnya
    function removeExtraElement(page) {
        const targetPage = document.getElementById(`page${page}`);
        const extraElement = targetPage.querySelector(".extra-content");
        if (extraElement) {
            extraElement.remove();
        }
    }

    document.body.addEventListener("click", () => {
        if (currentPage === 0) {
            let leftCurtain = document.querySelector(".left-curtain");
            let rightCurtain = document.querySelector(".right-curtain");

            gsap.to(leftCurtain, { x: "-100%", duration: 1, ease: "power3.inOut" });
            gsap.to(rightCurtain, {
                x: "100%", duration: 1, ease: "power3.inOut", onComplete: () => {
                    currentPage++
                }
            });
        } else navigateToPage(currentPage + 1);
    });
});