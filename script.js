document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // A. S. INSTRUMENTATION WORK
    // WEBSITE JAVASCRIPT
    // ==========================================


    // ==========================================
    // 1. MOBILE HAMBURGER MENU
    // ==========================================

    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", () => {

            navbar.classList.toggle("active");
            hamburger.classList.toggle("active");

            document.body.style.overflow =
                navbar.classList.contains("active")
                    ? "hidden"
                    : "";

        });

    }


    // ==========================================
    // 2. CLOSE MOBILE MENU
    // ==========================================

    if (navLinks) {

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                if (navbar) {
                    navbar.classList.remove("active");
                }

                if (hamburger) {
                    hamburger.classList.remove("active");
                }

                document.body.style.overflow = "";

            });

        });

    }


    // ==========================================
    // 3. CLOSE MENU WHEN CLICKING OUTSIDE
    // ==========================================

    document.addEventListener("click", (event) => {

        if (!navbar || !hamburger || !navLinks) {
            return;
        }

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedHamburger =
            hamburger.contains(event.target);

        if (
            navbar.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedHamburger
        ) {

            navbar.classList.remove("active");
            hamburger.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    // ==========================================
    // 4. NAVBAR SCROLL EFFECT
    // ==========================================

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }


    // ==========================================
    // 5. SMOOTH SCROLLING
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                const headerHeight =
                    navbar ? navbar.offsetHeight : 75;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });


    // ==========================================
    // 6. SLIDE-IN ANIMATION
    // ==========================================

    const sections =
        document.querySelectorAll("section");

    if ("IntersectionObserver" in window) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "slide-visible"
                            );

                            sectionObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.10
                }
            );

        sections.forEach(section => {

            section.classList.add(
                "slide-section"
            );

            sectionObserver.observe(section);

        });

    }


    // ==========================================
    // 7. RUNNING PROJECT STATUS
    // ==========================================

    document.querySelectorAll(".running").forEach(status => {

        status.style.color = "#22c55e";
        status.style.fontWeight = "700";

    });


    // ==========================================
    // 8. CURRENT YEAR
    // ==========================================

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // ==========================================
    // 9. BUTTON CLICK EFFECT
    // ==========================================

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.97)";

            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });


    // ==========================================
    // 10. WEBSITE LOADED
    // ==========================================

    console.log(
        "A. S. Instrumentation Work website loaded successfully."
    );

});
