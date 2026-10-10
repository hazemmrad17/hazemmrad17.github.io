import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import ClickTracker from "@/components/ClickTracker";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Hazem Mrad | Forward Deployed AI Engineer · Applied AI & Production Delivery",
  description:
    "Forward Deployed AI Engineer building and shipping applied AI systems: LLM apps, RAG and agents, data pipelines, and full-stack products deployed to real users.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="/css/hm-portfolio-2026.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/css/theme-overrides.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="https://unpkg.com/lenis@1.3.17/dist/lenis.css"
          rel="stylesheet"
        />
        <link
          href="/images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
        <Script id="webflow-mod-js" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <LocaleProvider>{children}</LocaleProvider>
        <ClickTracker />
        <Analytics />
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6966d53c7b70efaabd0a64ff"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/CustomEase.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
