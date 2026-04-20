import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, u as unescapeHTML } from './astro/server_DDZiRHkW.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.swecontractinggroup.com");
const $$PageCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageCTA;
  const {
    eyebrow = "More from GMP",
    title,
    image = "/images/showcase/west-crane.jpg",
    imageAlt = "",
    links = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="page-cta"${addAttribute(eyebrow, "aria-label")} data-astro-cid-sj4crmdy> <div class="page-cta__panel slide-in-up" data-astro-cid-sj4crmdy> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="page-cta__img" loading="lazy"${addAttribute(imageAlt ? void 0 : "true", "aria-hidden")} data-astro-cid-sj4crmdy> <div class="page-cta__overlay" data-astro-cid-sj4crmdy></div> <div class="page-cta__inner" data-astro-cid-sj4crmdy> ${eyebrow && renderTemplate`<span class="page-cta__tag" data-astro-cid-sj4crmdy>${eyebrow}</span>`} <h2 class="page-cta__title" data-astro-cid-sj4crmdy>${unescapeHTML(title)}</h2> ${links.length > 0 && renderTemplate`<div class="page-cta__actions" data-astro-cid-sj4crmdy> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`page-cta__btn page-cta__btn--${link.variant ?? "ghost"}`, "class")} data-astro-cid-sj4crmdy> ${link.label} ${link.variant === "primary" && renderTemplate`<svg width="16" height="16" fill="none" viewBox="0 0 24 24" data-astro-cid-sj4crmdy> <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sj4crmdy></path> </svg>`} </a>`)} </div>`} </div> </div> </section> `;
}, "/Users/chandlercasey/SWE/global-modular-partners/src/components/PageCTA.astro", void 0);

export { $$PageCTA as $ };
