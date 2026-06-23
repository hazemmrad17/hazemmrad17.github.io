/**
 * GSAP plugin registration only. Lenis starts after Webflow IX2 via initMirrorLenis().
 */
(function () {
  if (window.__mirrorGsapBooted) return;
  window.__mirrorGsapBooted = true;

  if (typeof gsap === "undefined") return;

  if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);
  if (typeof SplitText !== "undefined") gsap.registerPlugin(SplitText);
  if (typeof CustomEase !== "undefined") {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("osmo", "0.625, 0.05, 0, 1");
  }
  gsap.defaults({ overwrite: "auto", ease: "osmo", duration: 0.6 });
})();

/**
 * Start Lenis after Webflow IX2 so scroll-scrub timelines bind correctly.
 */
window.initMirrorLenis = function initMirrorLenis() {
  if (typeof Lenis === "undefined") return null;

  if (!window.__lenis) {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
    });
    window.__lenis = lenis;

    if (typeof gsap !== "undefined") {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true });
            return;
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      ScrollTrigger.defaults({ scroller: document.documentElement });
      ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    }

    if (typeof $ !== "undefined") {
      $("[data-lenis-start]").on("click", () => lenis.start());
      $("[data-lenis-stop]").on("click", () => lenis.stop());
      $("[data-lenis-toggle]").on("click", function () {
        $(this).toggleClass("stop-scroll");
        $(this).hasClass("stop-scroll") ? lenis.stop() : lenis.start();
      });
    }
  }

  if (typeof ScrollTrigger !== "undefined") {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
      window.__lenis?.resize?.();
    });
  }

  return window.__lenis;
};
