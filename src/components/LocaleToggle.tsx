"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "./LocaleProvider";

export default function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const attemptsRef = useRef(0);

  useEffect(() => {
    // Poll for the portal target (it's inside dangerouslySetInnerHTML HTML)
    intervalRef.current = setInterval(() => {
      const el = document.getElementById("locale-toggle-portal");
      if (el) {
        setTarget(el);
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }
      attemptsRef.current += 1;
      // Give up after 5 seconds to avoid infinite polling
      if (attemptsRef.current > 100) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Re-find target after MirrorPage re-renders (locale switch without remount)
  useEffect(() => {
    const el = document.getElementById("locale-toggle-portal");
    if (el && el !== target) {
      setTarget(el);
    }
  }, [locale]);

  if (!target) return null;

  // Show the flag of the language you'll switch TO
  const flag = locale === "en" ? "\uD83C\uDDEB\uD83C\uDDF7" : "\uD83C\uDDEC\uD83C\uDDE7";
  const label = locale === "en" ? "Passer en français" : "Switch to English";

  return createPortal(
    <button
      onClick={toggleLocale}
      className="nav-social-link locale-toggle-btn"
      aria-label={label}
      title={label}
    >
      {flag}
    </button>,
    target,
  );
}
