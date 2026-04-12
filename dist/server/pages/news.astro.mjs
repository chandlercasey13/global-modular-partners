import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BIKR535C.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$News = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      date: "March 2026",
      category: "Sustainability",
      title: "The Road to Net-Zero: Modular Sustainability",
      excerpt: "How factory-controlled builds, material optimization, and logistics discipline stack up to measurable carbon reductions across the project lifecycle.",
      href: "#"
    },
    {
      date: "Feb 2026",
      category: "Government",
      title: "DoD Procurement: What You Need to Know",
      excerpt: "A practical overview of requirements, small-business pathways, and documentation that primes and subs expect on defense-adjacent modular programs.",
      href: "#"
    },
    {
      date: "Jan 2026",
      category: "Partnership",
      title: "HWB Partnership Expands Healthcare Reach",
      excerpt: "Modular clinics and humanitarian infrastructure gain momentum as GMP and Hospitals Without Borders align delivery models for underserved regions.",
      href: "#"
    },
    {
      date: "Dec 2025",
      category: "Innovation",
      title: "28-Day ADU: Revolutionizing Home Construction",
      excerpt: "Inside the program compressing design, permitting support, and factory build into a predictable timeline for accessory dwelling units.",
      href: "#"
    },
    {
      date: "Nov 2025",
      category: "Industry",
      title: "Modular Construction Trends in 2026",
      excerpt: "From data-rich prefab to integrated MEP: the signals procurement teams and developers are watching in the year ahead.",
      href: "#"
    },
    {
      date: "Oct 2025",
      category: "DoD",
      title: "SDVOSB Certification: What It Means for Contractors",
      excerpt: "Why SDVOSB status matters for set-asides, teaming, and compliance\u2014and how to evaluate partners with verified credentials.",
      href: "#"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "News & Insights", "description": "Industry updates, company announcements, and expert analysis from Global Modular Partners.", "data-astro-cid-5kj6t6lp": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="hero-wrap" data-astro-cid-5kj6t6lp> <div class="hero-inner" data-astro-cid-5kj6t6lp> <div class="hero-content" data-astro-cid-5kj6t6lp> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-5kj6t6lp> <a href="/" data-astro-cid-5kj6t6lp>Home</a> <span class="breadcrumb__sep" data-astro-cid-5kj6t6lp>/</span> <span data-astro-cid-5kj6t6lp>News & Insights</span> </nav> <h1 class="hero-title fade-up" data-astro-cid-5kj6t6lp>Latest News &amp;<br data-astro-cid-5kj6t6lp>Industry Insights</h1> <p class="hero-sub fade-up" data-astro-cid-5kj6t6lp>Stay informed with company updates, project milestones, and trends shaping the future of modular construction.</p> <div class="hero-actions fade-up" data-astro-cid-5kj6t6lp> <a href="#articles" class="mnc-btn mnc-btn--dark" data-astro-cid-5kj6t6lp>
Latest articles
<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5kj6t6lp><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-5kj6t6lp></path></svg> </a> <a href="#subscribe" class="mnc-btn mnc-btn--stroke" data-astro-cid-5kj6t6lp>
Get updates
<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5kj6t6lp><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-5kj6t6lp></path></svg> </a> </div> </div> </div> </section>  <section id="articles" class="news-articles section-gap" data-astro-cid-5kj6t6lp> <div class="mnc-container" data-astro-cid-5kj6t6lp> <div class="news-articles__head" data-astro-cid-5kj6t6lp> <span class="section-tag" data-astro-cid-5kj6t6lp>Editorial</span> <h2 class="section-title" data-astro-cid-5kj6t6lp>Selected perspectives <span class="section-span" data-astro-cid-5kj6t6lp>for leaders in government and development</span></h2> </div> <div class="news-articles__grid" data-astro-cid-5kj6t6lp> ${articles.map((article) => renderTemplate`<article class="nc" data-astro-cid-5kj6t6lp> <div class="nc__img" data-astro-cid-5kj6t6lp> <div class="nc__img-shine" aria-hidden="true" data-astro-cid-5kj6t6lp></div> <span class="nc__date" data-astro-cid-5kj6t6lp>${article.date}</span> </div> <div class="nc__body" data-astro-cid-5kj6t6lp> <span class="nc__cat" data-astro-cid-5kj6t6lp>${article.category}</span> <div class="nc__divider" data-astro-cid-5kj6t6lp></div> <h3 class="nc__title" data-astro-cid-5kj6t6lp><a${addAttribute(article.href, "href")} data-astro-cid-5kj6t6lp>${article.title}</a></h3> <p class="nc__excerpt" data-astro-cid-5kj6t6lp>${article.excerpt}</p> <a${addAttribute(article.href, "href")} class="nc__more" data-astro-cid-5kj6t6lp>Read more &rarr;</a> </div> </article>`)} </div> </div> </section>  <section id="subscribe" class="news-subscribe section-gap" data-astro-cid-5kj6t6lp> <div class="mnc-container" data-astro-cid-5kj6t6lp> <div class="news-subscribe__panel" data-astro-cid-5kj6t6lp> <div class="news-subscribe__left" data-astro-cid-5kj6t6lp> <h2 class="section-title" style="font-size:clamp(24px,3vw,36px);" data-astro-cid-5kj6t6lp>Subscribe for insights</h2> <p class="news-subscribe__desc" data-astro-cid-5kj6t6lp>
Receive quarterly industry briefs, program announcements, and compliance-relevant
            updates. Tell us your sector—we'll tailor what you see.
</p> </div> <div class="news-subscribe__right" data-astro-cid-5kj6t6lp> <a href="/contact" class="mnc-btn mnc-btn--dark" data-astro-cid-5kj6t6lp> <span class="mnc-btn__wrap" data-astro-cid-5kj6t6lp> <span data-astro-cid-5kj6t6lp>Subscribe via contact</span> <span class="mnc-btn__icon" data-astro-cid-5kj6t6lp><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5kj6t6lp><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-5kj6t6lp></path></svg></span> </span> </a> <p class="news-subscribe__note" data-astro-cid-5kj6t6lp>
Prefer email? Use the contact form and mention "newsletter" in your message.
</p> </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-5kj6t6lp": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-5kj6t6lp": true })}` })} `;
}, "/home/tylr/global-modular-partners/src/pages/news.astro", void 0);

const $$file = "/home/tylr/global-modular-partners/src/pages/news.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$News,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
