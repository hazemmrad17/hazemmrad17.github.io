
(function initLazyVideos() {
  const lazyVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));
  if (!lazyVideos.length) return;

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const video = entry.target;
        const source = video.querySelector("data-src");
        if (source) {
          const realSource = document.createElement("source");
          realSource.src = source.getAttribute("src") || "";
          realSource.type = "video/mp4";
          video.appendChild(realSource);
          video.load();
        }
        video.classList.remove("lazy-video");
        videoObserver.unobserve(video);
      });
    });
    lazyVideos.forEach(function (video) {
      videoObserver.observe(video);
    });
  }
})();

/**
 * CTA BUTTON HOVER ANIMATIONS (GSAP)
 */
(function initCtaHovers() {
  if (typeof gsap === "undefined") return;
  const ctaLinks = document.querySelectorAll('.main-cont-button');
  if (!ctaLinks.length) return;
  ctaLinks.forEach(function (link) {
    var firstIcon = link.querySelector('.icon-wrapper-cta-first');
    var lastIcon = link.querySelector('.icon-wrapper-cta');
    if (!firstIcon || !lastIcon) return;
    // Hover IN
    link.addEventListener('mouseenter', function () {
      gsap.to(firstIcon, {
        width: "2.8rem",
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(0.5, 0.3)",
        overwrite: true
      });
      gsap.to(lastIcon, {
        width: "0rem",
        rotation: -90,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        overwrite: true
      });
    });
    // Hover OUT
    link.addEventListener('mouseleave', function () {
      gsap.to(firstIcon, {
        width: "0rem",
        rotation: -90,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        overwrite: true
      });
      gsap.to(lastIcon, {
        width: "2.8rem",
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(0.6, 0.3)",
        overwrite: true
      });
    });
  });
})();
