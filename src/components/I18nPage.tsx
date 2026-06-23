"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleProvider";
import LocaleToggle from "./LocaleToggle";
import MirrorPage from "./MirrorPage";

type I18nPageProps = {
  en: string;
  fr: string;
  pageId: string;
  bodyClass: string;
  foucStyle?: string;
  scripts?: string[];
};

export default function I18nPage({
  en,
  fr,
  pageId,
  bodyClass,
  foucStyle,
  scripts,
}: I18nPageProps) {
  const { locale } = useLocale();
  const html = locale === "fr" ? fr : en;
  const prevLocaleRef = useRef(locale);

  // When locale changes, reinitialize Webflow on the new HTML content
  // without unmounting/remounting MirrorPage
  useEffect(() => {
    if (prevLocaleRef.current === locale) return;
    prevLocaleRef.current = locale;

    // Let React commit the new HTML to the DOM first
    requestAnimationFrame(() => {
      const w = window as Window & {
        Webflow?: { destroy?: () => void; ready?: () => void };
        ScrollTrigger?: { refresh: (safe?: boolean) => void };
        initMirrorLenis?: () => unknown;
      };

      // Reinitialize Webflow interactions
      try {
        w.Webflow?.destroy?.();
        w.Webflow?.ready?.();
      } catch {
        // Webflow may not be loaded yet
      }

      // Refresh scroll animations
      requestAnimationFrame(() => {
        w.ScrollTrigger?.refresh?.(true);
        w.initMirrorLenis?.();
      });
    });
  }, [locale]);

  return (
    <>
      <MirrorPage
        html={html}
        pageId={pageId}
        bodyClass={bodyClass}
        foucStyle={foucStyle}
        scripts={scripts}
      />
      <LocaleToggle />
    </>
  );
}
