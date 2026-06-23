
/**
 * GLOBAL SETTINGS & DEFAULTS (skipped when mirror-boot.js already ran)
 */
if (!window.__mirrorGsapBooted) {
  gsap.registerPlugin(CustomEase);
  CustomEase.create("osmo", "0.625, 0.05, 0, 1");
  gsap.defaults({ overwrite: "auto", ease: "osmo", duration: 0.6 });
}
function runPageInits() {
  initNavTheme();
  initCtaHovers();
  if (window.UnicornStudio && window.UnicornStudio.init) {
    window.UnicornStudio.init();
  }
}

function runLoadInits() {
  initCursorFollow();
  initCursorInteractions();
  initCuriousButton();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runPageInits);
  window.addEventListener("load", runLoadInits);
} else {
  runPageInits();
  runLoadInits();
}
/**
 * LENIS SMOOTH SCROLL (skipped when mirror-boot.js already ran)
 */
if (!window.__lenis) {
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: false,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Lenis Control Listeners (Using jQuery for Webflow compatibility)
$("[data-lenis-start]").on("click", () => lenis.start());
$("[data-lenis-stop]").on("click", () => lenis.stop());
$("[data-lenis-toggle]").on("click", function() {
  $(this).toggleClass("stop-scroll");
  $(this).hasClass("stop-scroll") ? lenis.stop() : lenis.start();
});
}
/**
 * NAVIGATION COLOR THEME (Intersection Observer)
 */
function initNavTheme() {
  const sections = document.querySelectorAll('[data-nav]');
  const navElements = document.querySelectorAll('.nav-name-jm, .nav-link-mobile, .nav-link, .nav-social-link');
  if (sections.length === 0) return;
  const observerOptions = {
    root: null,
    rootMargin: "-50px 0px -90% 0px", 
    threshold: 0
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const theme = entry.target.getAttribute('data-nav');
        navElements.forEach(el => {
          theme === 'peach' ? el.classList.add('is-peach') : el.classList.remove('is-peach');
        });
      }
    });
  }, observerOptions);
  sections.forEach(section => observer.observe(section));
}
/**
 * 1. CURSOR FOLLOW
 */
function initCursorFollow() {
  const cursor = document.querySelector(".cursor-jm");
  if (!cursor) return;
  // 2. Setup mouse coordinates object
  const mouse = { x: 0, y: 0 };
  const pos = { x: 0, y: 0 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  // 3. The Ticker: This runs every frame for a liquid feel
  gsap.ticker.add(() => {
    // Adjust the multiplier (0.15) to change the "weight"
    // Lower = slower/smoother, Higher = faster/snappier
    const dt = 1.0 - Math.pow(1.0 - 0.09, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    gsap.set(cursor, {
      x: pos.x,
      y: pos.y
    });
  });
}
/**
 * 2. CURSOR TEXT HOVER & 3. COPY EMAIL CLIPBOARD
 */
function initCursorInteractions() {
  const cta = document.querySelector(".cta-button-wrapper");
  const cursorText = document.querySelector(".text-jm-cursor");
  const myEmail = "hazem.mrad@esprit.tn";
  if (!cta || !cursorText) return;
// Set initial text so it's ready
  cursorText.innerText = "Copy my Email";
  // HOVER IN
cta.addEventListener("mouseenter", () => {
    cursorText.innerText = "Copy my Email"; // Reset text in case it was "Copied" before
    gsap.to(cursorText, { 
      opacity: 1, 
      duration: 0.5, 
      overwrite: true 
    });
  });
  // HOVER OUT
 cta.addEventListener("mouseleave", () => {
    gsap.to(cursorText, { 
      opacity: 0, 
      duration: 0.3, 
      overwrite: true 
    });
  });
  // CLICK TO COPY
  cta.addEventListener("click", () => {
    navigator.clipboard.writeText(myEmail).then(() => {
      cursorText.innerText = "Great! Email copied";
      // SplitText Animation for the "Success" message
      const split = new SplitText(cursorText, { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0,
        stagger: 0.05,
        duration: 0.05,
        ease: "back.out(1.7)",
        overwrite: true
      });
    });
  });
}
/**
 * CLICK HOME BTN HOVER (Curious Button)
 */
function initCuriousButton() {
  const btn = document.querySelector(".cont-click");
  const clickBtn = document.querySelector(".click-hover-huh");
  if (!btn || !clickBtn) return;
  // Set initial text
  clickBtn.innerText = "Who is a little curious?";
  // HOVER IN: Simple fade in the whole block
  btn.addEventListener("mouseenter", () => {
    clickBtn.innerText = "Who is a little curious?";
    gsap.fromTo(clickBtn, { opacity: 0 }, { 
      opacity: 1, 
      duration: 0.3, 
      delay: 0.3,
      overwrite: true 
    });
  });
  // HOVER out: Simple fade in the whole block
    btn.addEventListener("mouseleave", () => {
    gsap.to(clickBtn, {
      opacity: 0, 
      duration: 0.3, 
      overwrite: true 
    });
  });
  // CLICK ACTION: Text change + Staggered characters
  btn.addEventListener("click", () => {
    // 1. Update the content
    clickBtn.innerText = "Another click!";
    // 2. Split into characters for the stagger
    const split = new SplitText(clickBtn, { type: "chars" });
    // 3. Stagger opacity only (No Y movement)
    gsap.from(split.chars, {
      opacity: 0,
      stagger: 0.05,
      duration: 0.05,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
}
/**
 * MAIN CTA BUTTON HOVERS (GSAP)
 * Fixes the "Fast Mouse" glitch by killing previous tweens
 */
function initCtaHovers() {
  const ctaLinks = document.querySelectorAll('.main-cont-button');
  ctaLinks.forEach((link) => {
    const firstIcon = link.querySelector('.icon-wrapper-cta-first');
    const lastIcon = link.querySelector('.icon-wrapper-cta');
    // Hover IN
    link.addEventListener('mouseenter', () => {
      // firstIcon grows with elastic bounce
      gsap.to(firstIcon, { 
        width: "2.8rem", 
        rotation: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "elastic.out(0.5, 0.3)",
        overwrite: true // Stops any current "out" animation immediately
      });
      // lastIcon shrinks quickly
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
    link.addEventListener('mouseleave', () => {
      // firstIcon shrinks back
      gsap.to(firstIcon, { 
        width: "0rem", 
        rotation: -90, 
        opacity: 0, // Combined your two firstIcon tweens into one for better performance
        duration: 0.3, 
        ease: "power2.inOut",
        overwrite: true
      });
      // lastIcon returns with elastic bounce
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
}
