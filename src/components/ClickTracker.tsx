"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/** Max length we send for a human-readable label, to keep events tidy. */
const MAX_LABEL = 60;

function labelOf(el: Element): string {
  const text = (el.getAttribute("aria-label") ?? el.textContent ?? "")
    .replace(/\s+/g, " ")
    .trim();
  return text.slice(0, MAX_LABEL);
}

/** Classify where a link points, so events are groupable in the dashboard. */
function describeLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") ?? "";
  if (href.startsWith("mailto:")) {
    return { kind: "email", detail: href.slice("mailto:".length).split("?")[0] };
  }
  if (/^https?:\/\//.test(href)) {
    let host = href;
    try {
      host = new URL(href).hostname.replace(/^www\./, "");
    } catch {
      /* keep raw href if it can't be parsed */
    }
    return { kind: "external", detail: host };
  }
  if (href.startsWith("#")) {
    return { kind: "section", detail: href.slice(1) };
  }
  if (href.startsWith("/")) {
    return { kind: "internal", detail: href };
  }
  return { kind: "other", detail: href };
}

/**
 * Reports clicks as Vercel Analytics custom events ("link_click" / "button_click").
 * Uses one delegated listener so the server-rendered Webflow markup needs no changes.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const node = event.target as Element | null;
      if (!node) return;

      const anchor = node.closest("a");
      if (anchor) {
        const { kind, detail } = describeLink(anchor as HTMLAnchorElement);
        track("link_click", {
          label: labelOf(anchor),
          kind,
          target: detail,
          page: window.location.pathname,
          // Which project section the click came from, when applicable.
          project:
            anchor.closest(".main-project-wrapper")?.id ?? "",
        });
        return;
      }

      const button = node.closest("button");
      if (button) {
        track("button_click", {
          label: labelOf(button),
          page: window.location.pathname,
        });
      }
    };

    // Capture phase so clicks are counted even if the site's scripts stop propagation.
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
