"use client";

import { useEffect } from "react";

export default function WebflowInit({ pageId }: { pageId: string }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-wf-page", pageId);
    document.documentElement.setAttribute("data-wf-site", "6966d53c7b70efaabd0a64ff");
    
    // Re-initialize Webflow if it's already loaded
    // @ts-ignore
    if (window.Webflow && window.Webflow.destroy) {
      // @ts-ignore
      window.Webflow.destroy();
      // @ts-ignore
      window.Webflow.ready();
      // @ts-ignore
      window.Webflow.require('ix2').init();
    }
  }, [pageId]);

  return null;
}
