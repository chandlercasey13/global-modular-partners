import { e as createAstro, f as createComponent, r as renderTemplate, l as renderScript, n as renderSlot, o as renderHead, h as addAttribute, m as maybeRenderHead } from './astro/server_sztvYgAO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.swecontractinggroup.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Global Modular Partners \u2014 Innovative Modular Construction for Government, Healthcare & Commercial Projects" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', "><title>", ` | Global Modular Partners</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"><link rel="icon" type="image/png" href="/images/logo/gmp-logo-final.png"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css"><script>
    (function () {
      try {
        var saved = localStorage.getItem('gmp-theme');
        if (saved !== 'light') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {
        document.documentElement.classList.add('dark');
      }
    })();
  <\/script>`, "</head> <body> <script>\n    if (document.documentElement.classList.contains('dark')) {\n      document.body.classList.add('dark');\n    }\n  <\/script> ", " <main> ", " </main> ", " ", " </body> </html> "])), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderScript($$result, "/Users/chandlercasey/SWE/global-modular-partners/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/chandlercasey/SWE/global-modular-partners/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://www.swecontractinggroup.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { href: "/about", label: "About Us" },
    {
      label: "Departments",
      children: [
        { href: "/departments#modular", label: "Modular Construction" },
        { href: "/departments#project-management", label: "Project Management" },
        { href: "/departments#dod-military", label: "DoD / Military" },
        { href: "/departments#healthcare", label: "Healthcare" },
        { href: "/departments#civil", label: "Civil Construction" }
      ]
    },
    { href: "/services", label: "Services" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" }
  ];
  function isActive(href) {
    if (!href) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(href + "/");
  }
  return renderTemplate`${maybeRenderHead()}<header class="hdr-section" id="site-header" data-astro-cid-3ef6ksr2> <div class="hdr-container" data-astro-cid-3ef6ksr2> <div class="hdr-block" data-astro-cid-3ef6ksr2> <!-- Brand Logo --> <div class="hdr-brand-block" data-astro-cid-3ef6ksr2> <a href="/" class="hdr-brand" aria-label="Global Modular Partners home" data-astro-cid-3ef6ksr2> <img src="/images/logo/gmp-globe-white.svg" alt="Global Modular Partners" class="hdr-logo-svg" data-astro-cid-3ef6ksr2> <span class="hdr-brand-name" data-astro-cid-3ef6ksr2><span data-astro-cid-3ef6ksr2>GLOBAL</span><span data-astro-cid-3ef6ksr2>MODULAR</span><span data-astro-cid-3ef6ksr2>PARTNERS</span></span> </a> </div> <!-- Desktop Nav --> <nav class="hdr-menu-block" data-astro-cid-3ef6ksr2> <div class="hdr-menu" data-astro-cid-3ef6ksr2> <div class="hdr-menu-wrap" data-astro-cid-3ef6ksr2> ${navItems.map(
    (item) => item.children ? renderTemplate`<div class="hdr-dropdown" data-astro-cid-3ef6ksr2> <button class="hdr-toggle" type="button" data-astro-cid-3ef6ksr2> <span class="hdr-dropdown-text" data-astro-cid-3ef6ksr2>${item.label}</span> <svg class="hdr-dropdown-icon" fill="none" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2> <path d="M0.534 0.455C0.778 0.207 1.159 0.184 1.427 0.387L1.504 0.455L7 6.061L12.496 0.455C12.739 0.207 13.12 0.184 13.389 0.387L13.466 0.455C13.709 0.703 13.732 1.092 13.532 1.366L13.466 1.444L7.485 7.545C7.242 7.793 6.86 7.816 6.592 7.613L6.515 7.545L0.534 1.444C0.266 1.171 0.266 0.728 0.534 0.455Z" fill="currentColor" data-astro-cid-3ef6ksr2></path> </svg> </button> <div class="hdr-megamenu" data-astro-cid-3ef6ksr2> <div class="hdr-mega-wrap" data-astro-cid-3ef6ksr2> ${item.children.map((child) => renderTemplate`<a${addAttribute(`hdr-menu-link ${isActive(child.href) ? "active" : ""}`, "class")}${addAttribute(child.href, "href")} data-astro-cid-3ef6ksr2>${child.label}</a>`)} </div> </div> </div>` : renderTemplate`<a${addAttribute(`hdr-menu-link ${isActive(item.href) ? "active" : ""}`, "class")}${addAttribute(item.href, "href")} data-astro-cid-3ef6ksr2>${item.label}</a>`
  )} </div> <!-- CTA inside menu (desktop) --> <div class="hdr-button-wrap-inner" data-astro-cid-3ef6ksr2> <a class="hdr-btn" href="/projects" data-astro-cid-3ef6ksr2> <div class="hdr-btn-wrap" data-astro-cid-3ef6ksr2> <span class="hdr-btn-text" data-astro-cid-3ef6ksr2>View Our Work</span> <span class="hdr-btn-icon" data-astro-cid-3ef6ksr2> <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-3ef6ksr2></path></svg> </span> </div> </a> </div> </div> </nav> <!-- CTA outside menu (desktop, visible at certain breakpoints) --> <div class="hdr-button-block" data-astro-cid-3ef6ksr2> <button class="hdr-theme-toggle" id="hdr-theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false" data-astro-cid-3ef6ksr2> <svg class="hdr-theme-icon hdr-theme-icon--sun" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-3ef6ksr2> <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2></circle> <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-3ef6ksr2></path> </svg> <svg class="hdr-theme-icon hdr-theme-icon--moon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2></path> </svg> </button> <a class="hdr-btn" href="/projects" data-astro-cid-3ef6ksr2> <div class="hdr-btn-wrap" data-astro-cid-3ef6ksr2> <span class="hdr-btn-text" data-astro-cid-3ef6ksr2>View Our Work</span> <span class="hdr-btn-icon" data-astro-cid-3ef6ksr2> <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-3ef6ksr2></path></svg> </span> </div> </a> </div> <!-- Mobile hamburger --> <button class="hdr-hamburger" id="hdr-hamburger" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <div class="hdr-line-wrap" data-astro-cid-3ef6ksr2> <div class="hdr-line hdr-line--top" data-astro-cid-3ef6ksr2></div> <div class="hdr-line hdr-line--mid" data-astro-cid-3ef6ksr2></div> <div class="hdr-line hdr-line--bot" data-astro-cid-3ef6ksr2></div> </div> </button> </div> </div> <!-- Mobile Menu --> <div class="hdr-mobile" id="mobile-menu" data-astro-cid-3ef6ksr2> <nav class="hdr-mobile-nav" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<div class="hdr-mobile-group" data-astro-cid-3ef6ksr2> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="hdr-mobile-link" data-astro-cid-3ef6ksr2>${item.label}</a>` : renderTemplate`<span class="hdr-mobile-link" data-astro-cid-3ef6ksr2>${item.label}</span>`} ${item.children && renderTemplate`<div class="hdr-mobile-sub" data-astro-cid-3ef6ksr2> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="hdr-mobile-sublink" data-astro-cid-3ef6ksr2>${child.label}</a>`)} </div>`} </div>`)} <a href="/projects" class="hdr-mobile-cta" data-astro-cid-3ef6ksr2>View Our Work</a> <button class="hdr-mobile-theme" id="hdr-mobile-theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false" data-astro-cid-3ef6ksr2> <span class="hdr-mobile-theme__label" data-astro-cid-3ef6ksr2>Dark mode</span> <span class="hdr-mobile-theme__switch" aria-hidden="true" data-astro-cid-3ef6ksr2><span class="hdr-mobile-theme__dot" data-astro-cid-3ef6ksr2></span></span> </button> </nav> </div> </header>  ${renderScript($$result, "/Users/chandlercasey/SWE/global-modular-partners/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/chandlercasey/SWE/global-modular-partners/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/about#subsidiaries", label: "Subsidiaries" },
    { href: "/about#leadership", label: "Leadership" },
    { href: "/about#mission", label: "Mission & Values" },
    { href: "/about#history", label: "History" }
  ];
  const departments = [
    { href: "/departments#modular", label: "Modular" },
    { href: "/departments#project-management", label: "Project Mgmt" },
    { href: "/departments#dod-military", label: "DoD / Military" },
    { href: "/departments#healthcare", label: "Healthcare" },
    { href: "/departments#civil", label: "Civil" }
  ];
  const resources = [
    { href: "/partners", label: "Partner Network" },
    { href: "/about#leadership", label: "Leadership" },
    { href: "/contact", label: "Careers" },
    { href: "#", label: "28 Day ADU" },
    { href: "#", label: "FAQs" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="ftr" data-astro-cid-sz7xmlte> <div class="ftr__outer" data-astro-cid-sz7xmlte> <div class="ftr__card" data-astro-cid-sz7xmlte> <!-- Top: newsletter CTA + nav columns --> <div class="ftr__top" data-astro-cid-sz7xmlte> <div class="ftr__cta" data-astro-cid-sz7xmlte> <a href="/" class="ftr__logo-link" aria-label="Home" data-astro-cid-sz7xmlte> <img src="/images/logo/gmp-globe-white.svg" alt="Global Modular Partners" class="ftr__logo" data-astro-cid-sz7xmlte> <span class="ftr__logo-word" data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>GLOBAL</span><span data-astro-cid-sz7xmlte>MODULAR</span><span data-astro-cid-sz7xmlte>PARTNERS</span></span> </a> <p class="ftr__lede" data-astro-cid-sz7xmlte>Field-tested perspective. Occasional updates on modular delivery, regulated sectors, and how we partner with owners and agencies — written by the team that executes the work.</p> <form class="ftr__form" onsubmit="event.preventDefault();" data-astro-cid-sz7xmlte> <input class="ftr__field" type="email" placeholder="Enter your email" required data-astro-cid-sz7xmlte> <button class="ftr__btn" type="submit" aria-label="Subscribe" data-astro-cid-sz7xmlte> <span class="ftr__btn-text" data-astro-cid-sz7xmlte>Subscribe</span> <span class="ftr__btn-icon" aria-hidden="true" data-astro-cid-sz7xmlte> <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-sz7xmlte></path></svg> </span> </button> </form> </div> <div class="ftr__nav-grid" data-astro-cid-sz7xmlte> <div class="ftr__nav" data-astro-cid-sz7xmlte> <div class="ftr__nav-title" data-astro-cid-sz7xmlte>Quick View</div> <div class="ftr__nav-links" data-astro-cid-sz7xmlte> ${quickLinks.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} class="ftr__nav-link" data-astro-cid-sz7xmlte>${l.label}</a>`)} </div> </div> <div class="ftr__nav" data-astro-cid-sz7xmlte> <div class="ftr__nav-title" data-astro-cid-sz7xmlte>Departments</div> <div class="ftr__nav-links" data-astro-cid-sz7xmlte> ${departments.map((d) => renderTemplate`<a${addAttribute(d.href, "href")} class="ftr__nav-link" data-astro-cid-sz7xmlte>${d.label}</a>`)} </div> </div> <div class="ftr__nav" data-astro-cid-sz7xmlte> <div class="ftr__nav-title" data-astro-cid-sz7xmlte>Resources</div> <div class="ftr__nav-links" data-astro-cid-sz7xmlte> ${resources.map((r) => renderTemplate`<a${addAttribute(r.href, "href")} class="ftr__nav-link" data-astro-cid-sz7xmlte>${r.label}</a>`)} </div> </div> </div> </div> <!-- Contact strip --> <div class="ftr__info" data-astro-cid-sz7xmlte> <a href="mailto:info@globalmodularpartners.com" class="ftr__info-item" data-astro-cid-sz7xmlte> <span class="ftr__info-label" data-astro-cid-sz7xmlte>Email</span> <span class="ftr__info-value" data-astro-cid-sz7xmlte>info@globalmodularpartners.com</span> </a> <a href="tel:+15105550199" class="ftr__info-item" data-astro-cid-sz7xmlte> <span class="ftr__info-label" data-astro-cid-sz7xmlte>Phone</span> <span class="ftr__info-value" data-astro-cid-sz7xmlte>(510) 555-0199</span> </a> <a href="/contact" class="ftr__info-item" data-astro-cid-sz7xmlte> <span class="ftr__info-label" data-astro-cid-sz7xmlte>Headquarters</span> <span class="ftr__info-value" data-astro-cid-sz7xmlte>Oakland, California</span> </a> </div> <!-- Base bar --> <div class="ftr__base" data-astro-cid-sz7xmlte> <div class="ftr__base-left" data-astro-cid-sz7xmlte> <span class="ftr__base-text" data-astro-cid-sz7xmlte>&copy; ${currentYear} Global Modular Partners, LLC</span> </div> <div class="ftr__base-links" data-astro-cid-sz7xmlte> <a href="#" class="ftr__base-link" data-astro-cid-sz7xmlte>Privacy</a> <a href="#" class="ftr__base-link" data-astro-cid-sz7xmlte>Terms</a> <a href="#" class="ftr__base-link" data-astro-cid-sz7xmlte>Sitemap</a> </div> <a href="#" class="ftr__gotop" id="ftr-gotop" aria-label="Go to top" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Back to top</span> <span class="ftr__gotop-icon" aria-hidden="true" data-astro-cid-sz7xmlte> <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-sz7xmlte></path></svg> </span> </a> </div> </div> </div> </footer> ${renderScript($$result, "/Users/chandlercasey/SWE/global-modular-partners/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/chandlercasey/SWE/global-modular-partners/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
