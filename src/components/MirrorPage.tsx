"use client";

import { useEffect, useRef } from "react";

const SITE_ID = "6966d53c7b70efaabd0a64ff";

function loadScript(src: string, reload = false): Promise<void> {
  return new Promise((resolve, reject) => {
    if (reload) {
      document
        .querySelectorAll<HTMLScriptElement>(`script[src^="${src}"]`)
        .forEach((node) => node.remove());
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`,
    );
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error(src)));
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function dismissLoader() {
  const loader = document.querySelector<HTMLElement>(".container-loader");
  if (!loader || loader.dataset.dismissed === "true") return;

  loader.dataset.dismissed = "true";
  document.documentElement.classList.add("w-mod-ix3");

  const w = window as Window & {
    gsap?: { timeline: (vars?: object) => { to: (...args: unknown[]) => unknown } };
  };
  if (w.gsap) {
    const intro = loader.querySelector(".orange-intro");
    const tl = w.gsap.timeline({
      onComplete: () => loader.remove(),
    });
    if (intro) {
      tl.to(intro, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
    tl.to(loader, { opacity: 0, duration: 0.3 }, intro ? "-=0.15" : 0);
  } else {
    loader.remove();
  }
}

async function initWebflow(pageId: string) {
  const wf = (window as Window & { Webflow?: WebflowApi }).Webflow;
  if (!wf) return false;

  try {
    wf.ready?.();
    return true;
  } catch {
    return false;
  }
}

function syncScrollAnimations() {
  const w = window as Window & {
    initMirrorLenis?: () => unknown;
    ScrollTrigger?: { refresh: (safe?: boolean) => void };
    Webflow?: WebflowApi;
  };

  w.initMirrorLenis?.();

  requestAnimationFrame(() => {
    w.ScrollTrigger?.refresh?.(true);
  });
}

type WebflowApi = {
  destroy?: () => void;
  ready?: () => void;
  require?: (module: string) => { init?: () => void };
};

export default function MirrorPage({
  html,
  pageId,
  bodyClass,
  foucStyle,
  scripts = [],
}: {
  html: string;
  pageId: string;
  bodyClass: string;
  foucStyle?: string;
  scripts?: string[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.className = bodyClass;
    document.body.setAttribute("data-barba", "wrapper");
    document.documentElement.classList.remove("w-mod-ix3");

    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
    let ixPollTimer: ReturnType<typeof setInterval> | undefined;

    const startFallback = () => {
      fallbackTimer = setTimeout(() => {
        if (!document.documentElement.classList.contains("w-mod-ix3")) {
          dismissLoader();
        }
      }, 4500);
    };

    const watchLoader = () => {
      let checks = 0;
      ixPollTimer = setInterval(() => {
        checks += 1;
        const loader = document.querySelector(".container-loader");

        if (document.documentElement.classList.contains("w-mod-ix3")) {
          clearInterval(ixPollTimer);
          clearTimeout(fallbackTimer);
          return;
        }

        const hidden =
          !loader ||
          loader.getAttribute("style")?.includes("display: none") ||
          getComputedStyle(loader).opacity === "0" ||
          getComputedStyle(loader).visibility === "hidden";

        if (hidden) {
          clearInterval(ixPollTimer);
          clearTimeout(fallbackTimer);
          return;
        }

        if (checks > 50) {
          clearInterval(ixPollTimer);
          dismissLoader();
        }
      }, 100);
    };

    async function boot() {
      await new Promise((r) => requestAnimationFrame(r));

      document.documentElement.setAttribute("data-wf-page", pageId);
      document.documentElement.setAttribute("data-wf-site", SITE_ID);

      try {
        await loadScript("/js/mirror-boot.js");
        await loadScript("/js/webflow.js");
        const ok = await initWebflow(pageId);
        syncScrollAnimations();
        if (!ok) dismissLoader();
      } catch {
        dismissLoader();
      }

      startFallback();
      watchLoader();

      for (const src of scripts) {
        try {
          await loadScript(src, true);
        } catch {
          // Page still usable without optional interaction scripts.
        }
      }

      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
      }
    }

    boot();

    return () => {
      clearTimeout(fallbackTimer);
      clearInterval(ixPollTimer);
      (window as Window & { Webflow?: WebflowApi }).Webflow?.destroy?.();
    };
  }, [pageId, bodyClass, scripts]);

  return (
    <>
      {foucStyle ? (
        <style
          id={`fouc-${pageId}`}
          dangerouslySetInnerHTML={{ __html: foucStyle }}
        />
      ) : null}
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

declare global {
  interface Window {
    __mirrorGsapBooted?: boolean;
    __mirrorBooted?: boolean;
    __lenis?: { resize?: () => void };
    initMirrorLenis?: () => unknown;
    UnicornStudio?: { init?: () => void };
  }
}
