import MirrorPage from "@/components/MirrorPage";
import { ABOUT_FOUC } from "@/lib/fouc-styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Hazem Mrad | Web & Brand Design Specialist",
};

export default function Page() {
  const html = `
  <ul role="list" class="nav-menu-mobile w-list-unstyled">
    <li>
      <a href="/about" aria-current="page" class="nav-link-mobile w--current">About</a>
    </li>
    <li>
      <a href="/" class="w-inline-block">
        <img src="/images/hazem-logo.svg" alt="Hazem Mrad" class="jm-icon" />
      </a>
    </li>
    <li>
      <a href="/work" class="nav-link-mobile">Work</a>
    </li>
  </ul>
  <div data-wf-component-id="c317891f-3289-5364-33b7-2cd489c264a1" data-wf-variant-state="base" class="container-2">
    <div class="cont-name-logo">
      <a href="/" class="nav-name w-inline-block">
        <div class="nav-name-jm">Hazem</div>
        <div class="dot-jm"></div>
        <div class="nav-name-jm">Mrad</div>
      </a>
    </div>
    <ul role="list" class="nav-menu w-list-unstyled">
      <li class="cont-social-link">
        <a href="/about" aria-current="page" class="nav-link w--current">About</a>
      </li>
      <li>
        <a data-wf-target="[[[&quot;c317891f-3289-5364-33b7-2cd489c264a1&quot;,&quot;c90aec84-dee2-b5d4-1860-01a602db34cc&quot;],[&quot;1ac36b98-1756-b060-1bca-d31378e4c6fb&quot;]]]" href="/" class="w-inline-block">
          <img src="/images/hazem-logo.svg" alt="Hazem Mrad" class="jm-icon" />
        </a>
      </li>
      <li class="cont-social-link">
        <a href="/work" class="nav-link">Work</a>
      </li>
    </ul>
    <ol role="list" class="nav-social-wrapper w-list-unstyled">
      <li class="cont-social-link">
        <a href="mailto:hazem.mrad@esprit.tn?subject=Hey%20Hazem%20Mrad!" class="nav-social-link">Email</a>
      </li>
      <li class="cont-social-link">
        <a href="https://www.linkedin.com/in/hazemmrad" target="_blank" class="nav-social-link">in</a>
      </li>
      <li class="cont-social-link">
        <a href="https://www.behance.net/hazemmrad1" target="_blank" class="nav-social-link">Be</a>
      </li>
      <li class="cont-social-link">
        <a href="https://github.com/hazemmrad17" target="_blank" class="nav-social-link">Gh</a>
      </li>
    </ol>
  </div>
  <main data-barba="container" class="main">
    <div class="container-loader">
      <div data-wf-target="[[[&quot;696eed5367a3d93663a17526&quot;,&quot;6e6a9285-1d66-fd20-f28c-6fecfef503c4&quot;],[]]]" class="orange-intro">
        <div class="cont-juan-intro">
          <div class="nav-name-jm intro">Hazem</div>
          <div class="dot-jm intro"></div>
          <div class="nav-name-jm intro">Mrad</div>
        </div>
      </div>
      <div data-wf-target="[[[&quot;696eed5367a3d93663a17526&quot;,&quot;6e6a9285-1d66-fd20-f28c-6fecfef503c5&quot;],[]]]" class="grow-line"></div>
    </div>
    <div class="cursor-jm">
      <div class="text-jm-cursor">copy</div>
    </div>
    <div class="top-glow">
      <div class="blur"></div>
    </div>
    <section class="section">
      <div class="hero-about-wrapper">
        <div class="wrapper-cont-50 _70">
          <div class="pill-hero-about-wrapper">
            <div class="img-pill-mask">
              <div class="img-pill-full"></div>
            </div><img src="/images/icon-jm-about.svg" loading="lazy" alt="" class="image-5">
            <div class="blue-dot-hero"></div>
          </div>
          <h1 class="text-headline-about"><span class="text-span-5">----</span>AI Engineering Student · Designer based in Tunisia</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="about-scroll-wrapper">
        <div class="sticky-cont-about">
          <div class="circle-lottie-cont">
            <div data-wf-target="[[[&quot;696eed5367a3d93663a17526&quot;,&quot;808af376-f0ae-d7aa-162b-3aba5241aed5&quot;],[]]]" class="lottie-circles" data-w-id="808af376-f0ae-d7aa-162b-3aba5241aed5" data-animation-type="lottie" data-src="/documents/circles-about.json" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="5.1" data-loading="eager"></div>
          </div>
          <div class="cont-shine-mask">
            <div class="glow-orange"></div>
          </div>
          <div class="big-about-cont"></div>
        </div>
      </div>
    </section>
    <section data-nav="grey" class="section">
      <div class="about-bio-wrapper">
        <div class="cont-bio-tem">
          <div class="cont-bio-text">
            <h3 class="headline-bio">Who I Am</h3>
          </div>
          <div class="cont-bio-text right">
            <p class="body-copy">I'm Hazem Mrad — an AI Engineering student with a strong foundation in software development, visual branding, and web design.<br><br>Based in Tunisia, I blend technical depth with creative instinct to build products that feel as good as they perform — from intelligent systems to polished digital experiences.<br><br>I care about the craft at every layer: from architecture and code to typography and motion.</p>
          </div>
        </div>
        <div class="line about"></div>
        <div class="cont-bio-tem">
          <div class="cont-bio-text">
            <h3 class="headline-bio">Approach</h3>
          </div>
          <div class="cont-bio-text right">
            <p class="body-copy">I start by understanding the real problem — not just the brief. I look at a product from both a user's perspective and an engineering lens, because the best solutions sit at that intersection.<br><br>From there, I help define the direction and bring ideas to life — not just to make things look better, but to make them work smarter.<br><br>Whether it's a design system, an AI feature, or a brand identity, I align the outcome with the goal — not just the specification.</p>
          </div>
        </div>
        <div class="line about"></div>
        <div class="cont-bio-tem">
          <div class="cont-bio-text">
            <h3 class="headline-bio">Philosophy</h3>
          </div>
          <div class="cont-bio-text right">
            <p class="body-copy">I don't follow trends blindly — I use them when they serve the work. My goal is always to create something distinctive: something people remember, something that actually functions.<br><br>Every project, regardless of scale, deserves the same level of care. Thoughtful, well-crafted, built to last.<br><br>And yes — I believe curiosity is the most underrated design tool.</p>
          </div>
        </div>
        <div class="line about"></div>
        <div class="cont-bio-tem">
          <div class="cont-bio-text">
            <h3 class="headline-bio">Skills &amp; <br>Background</h3>
          </div>
          <div class="cont-bio-text right">
            <p class="body-copy">AI Engineering · ESPRIT School of Engineering<br>Full-Stack Web Development<br>UI/UX &amp; Visual Branding<br>Behance Featured Work<br>Open to Internships &amp; Collaborations</p>
          </div>
        </div>
      </div>
    </section>
    <section data-nav="peach" class="section">
      <div class="about-news-wrapper">
        <div class="news-cont-top">
          <div class="square-news"></div>
          <h3 class="body-copy news">News &amp; Updates</h3>
        </div>
        <div class="line news"></div>
        <div class="cont-news-wrapper">
          <div class="cont-headline-news">
            <h3 class="number-news">1</h3>
            <h3 class="headline-news">View my <br>Behance portfolio</h3>
            <p class="body-copy news">Explore selected work and case studies on my Behance profile — branding, web design, and dev projects.</p>
            <div class="cont-btn-news">
              <a data-wf--cta-big--variant="base" href="https://www.behance.net/hazemmrad1" target="_blank" class="main-cont-button w-inline-block">
                <div class="icon-wrapper-cta-first"><img loading="lazy" src="/images/arrow-grey-out.svg" alt="" class="arrow-cion"></div>
                <div class="text-wrapper-cta">Learn more</div>
                <div class="icon-wrapper-cta"><img loading="lazy" src="/images/arrow-grey-out.svg" alt="" class="arrow-cion"></div>
              </a>
            </div>
          </div>
          <div data-us-project-src="https://cdn.prod.website-files.com/6966d53c7b70efaabd0a64ff/69ab566825a69a565cfb5d41_morable.json.txt" class="cont-morable"></div>
          <div class="test w-embed w-script">
            <script>
  UnicornStudio.init()
    .then((scenes) => {
      // Scenes are ready
    })
    .catch((err) => {
      console.error(err);
    });
</script>
          </div>
        </div>
        <div class="line news"></div>
        <div class="cont-news-wrapper">
          <div class="cont-headline-news">
            <h3 class="number-news">2</h3>
            <h3 class="headline-news">Featured <br>on Behance</h3>
            <p class="body-copy news">Check out my latest creative and technical projects — available for internship and freelance opportunities.</p>
            <a data-wf--cta-big--variant="base" href="https://www.behance.net/hazemmrad1" target="_blank" class="main-cont-button w-inline-block">
              <div class="icon-wrapper-cta-first"><img loading="lazy" src="/images/arrow-grey-out.svg" alt="" class="arrow-cion"></div>
              <div class="text-wrapper-cta">Learn more</div>
              <div class="icon-wrapper-cta"><img loading="lazy" src="/images/arrow-grey-out.svg" alt="" class="arrow-cion"></div>
            </a>
          </div>
          <div id="w-node-a8cc3bf7-e6a2-d9a3-8dca-598da0ef85fd-63a17526" style="background-color: #fff; border-radius: .5rem; min-height: 200px;"></div>
        </div>
        <div class="line news"></div>
        <div class="cont-news-wrapper">
          <div class="cont-headline-news">
            <h3 class="number-news">3</h3>
            <h3 class="headline-news">GitHub <br>Projects</h3>
            <p class="body-copy news">Open-source projects spanning AI, full-stack web development, and creative tooling — built with curiosity and shipped with care.</p>
            <a data-wf--cta-big--variant="base" href="https://github.com/hazemmrad17" target="_blank" class="main-cont-button w-inline-block">
              <div class="icon-wrapper-cta-first"><img loading="lazy" src="/images/arrow-grey-out.svg" alt="" class="arrow-cion"></div>
              <div class="text-wrapper-cta">Learn more</div>
              <div class="icon-wrapper-cta"><img loading="lazy" src="/images/arrow-grey-out.svg" alt="" class="arrow-cion"></div>
            </a>
          </div>
          <div id="w-node-_6a1ed807-c73e-b900-6403-161fa04ec116-63a17526" style="background-color: #fff; border-radius: .5rem; min-height: 200px;"></div>
        </div>
      </div>
    </section>
    <section data-nav="grey" class="section">
      <div class="main-cta-wrapper">
        <div class="content-cta-wrapper">
          <div class="cta-text-wrapper">
            <h2 class="heading-cta main">You know my story, let’s design yours</h2>
            <p class="body-copy-cta">Design solutions for global tech companies and growing startups.</p>
          </div>
          <a href="#" class="cta-button-wrapper w-inline-block">
            <div class="cont-icon-cta"><img src="/images/arrow-grey.svg" loading="lazy" alt="" class="arrow-cta"></div>
            <h2 class="heading-cta">Let&#x27;s talk</h2>
            <h2 class="email-cta">hazem.mrad@esprit.tn</h2>
            <div class="hover-main-cta"></div>
          </a>
        </div>
      </div>
    </section>
    <section data-nav="peach" class="section footer">
      <div class="main-wrapper-footer">
        <div class="wrapper-content-footer _1">
          <div class="wrapper-column">
            <h3 class="body-footer fade">Website made using:</h3>
            <ul role="list" class="list-footer w-list-unstyled">
              <li class="wrapper-item-column">
                <h4 class="body-footer right">Figma</h4>
              </li>
              <li class="wrapper-item-column">
                <h4 class="body-footer right">Webflow</h4>
              </li>
              <li class="wrapper-item-column">
                <h4 class="body-footer right">GSAP</h4>
              </li>
              <li class="wrapper-item-column">
                <h4 class="body-footer right">AE/Lottie</h4>
              </li>
              <li class="wrapper-item-column">
                <h4 class="body-footer right">Lennis Scroll</h4>
              </li>
            </ul>
          </div>
          <div class="wrapper-column right">
            <h3 class="body-footer fade">Contact:</h3>
            <ul role="list" class="list-footer w-list-unstyled">
              <li class="wrapper-item-column">
                <a href="mailto:hazem.mrad@esprit.tn?subject=Hey%20Hazem!" class="footer-social-link">Email</a>
              </li>
              <li class="wrapper-item-column">
                <a href="https://www.linkedin.com/in/hazemmrad" target="_blank" class="footer-social-link">Linkedin</a>
              </li>
              <li class="wrapper-item-column">
                <a href="https://www.behance.net/hazemmrad1" target="_blank" class="footer-social-link">Behance</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrapper-content-footer _2">
          <h2 class="name-footer">Hazem</h2><img src="/images/juan-mora-logo-footer.svg" loading="lazy" alt="" class="image-4">
          <h2 class="name-footer right">Mrad</h2>
        </div>
        <div class="wrapper-content-footer">
          <h3 class="body-footer big">AI Engineering Student · Dev &amp; Branding &amp; Design  <span class="text-span-4">2026</span></h3>
          <h3 class="body-footer big">Hazem Mrad <span class="text-span-3">[Open to Opportunities]</span></h3>
        </div>
      </div>
      <div class="video-cont-footer footer">
        <div class="video-embed w-embed"><video class="video-embed" muted="" autoplay="" loop="" playsinline="" poster="portfolio2025/video/juan-video-loading.jpg">
            <source src="/videos-work/young-man-typing-laptop.mp4" type="video/mp4">
          </video></div>
      </div>
    </section>
  </main>
  `;
  
  return (
    <MirrorPage
      html={html}
      pageId="696eed5367a3d93663a17526"
      bodyClass="body"
      foucStyle={ABOUT_FOUC}
      scripts={["/js/page-specific/about-custom.js"]}
    />
  );
}
