import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_D4pnhjZk.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const competencies = [
    {
      tag: "architecture",
      tagSuffix: "Structural + Civil",
      title: "Structural Engineering",
      desc: "Multi-system structural analysis from seismic performance to lateral load factors \u2014 advancing safety, efficiency, and regulatory compliance.",
      desc2: "Projects under review across government and commercial sectors supporting Federal and international infrastructure.",
      pills: ["Service/Verticals", "AISC Steel", "Reinforced Concrete"],
      img: "/images/showcase/ri-factory-panorama.jpg",
      layout: "text-left"
    },
    {
      tag: "Supply Chain Operations",
      tagSuffix: "Import + Logistics",
      title: "Supply Chain Integration",
      desc: "End-to-end integration from international procurement to last mile delivery. Our proprietary coordination system manages logistics for streamlining cost efficiency.",
      pills: ["Multi-Vendor OFFSEC", "<=45% Cycle Time"],
      img: "/images/showcase/ri-commercial.jpg",
      layout: "text-right"
    },
    {
      tag: "Fabrication",
      tagSuffix: "Custom + Scalable",
      title: "Custom Module Synthesis",
      desc: "Purpose-built for each brief \u2014 we configure custom and standardized modules spanning commercial, healthcare, defense, and institutional applications with factory-level precision and consistency.",
      pills: ["Custom Build-Out", "Lab Assemblies"],
      img: "/images/showcase/west-factory.jpg",
      layout: "text-left"
    }
  ];
  const protocols = [
    { num: "01", title: "Architectural Audit", desc: "Verification of design intent against fabrication capacity, material availability, and structural code." },
    { num: "02", title: "BIM Co-Synthesis", desc: "Full model MEP clashes and fit-for-purpose validation for building information modeling." },
    { num: "03", title: "Modular ESG Analog", desc: "Measurement of full material sustainability with corrections applied before production begins." }
  ];
  const standards = [
    { icon: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`, title: "ISO 9001:2015" },
    { icon: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 12c0 4.97 3.038 9.227 7.354 11.016.34.141.652.213.966.236.033.002.065.003.098.004L12 23.25l.582.006c.033-.001.065-.002.098-.004.314-.023.626-.095.966-.236C17.962 21.227 21 16.97 21 12c0-1.047-.134-2.063-.382-3.016z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`, title: "AISC Certified" },
    { icon: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`, title: "IBC Compliant" },
    { icon: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 21h18M3 7v14m6-14v14m6-14v14m6-14v14M4 7h16l-8-4L4 7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`, title: "OSHA Aligned" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services", "description": "Multipurpose modular construction services: consulting, design-build, procurement, installation, support, and emergency deployment.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="sv-hero" data-astro-cid-ucd2ps2b> <div class="sv-hero__content" data-astro-cid-ucd2ps2b> <h1 class="sv-hero__h1" data-astro-cid-ucd2ps2b>Engineering the<br data-astro-cid-ucd2ps2b>Future of Construction.</h1> <p class="sv-hero__sub" data-astro-cid-ucd2ps2b>Multipurpose modular construction services — from consulting and design-build to procurement, installation, and emergency deployment.</p> </div> </section>  <section class="sv-intro" data-astro-cid-ucd2ps2b> <div class="mnc-container" data-astro-cid-ucd2ps2b> <div class="sv-intro__inner fade-up" data-astro-cid-ucd2ps2b> <h2 class="sv-intro__title" data-astro-cid-ucd2ps2b>Core Competencies</h2> <p class="sv-intro__desc" data-astro-cid-ucd2ps2b>
Our modular systems integration gives us a structural, fabrication, and management capacity that can't just be outsourced — it's engineered, compliant, and field-validated at global scale.
</p> </div> </div> </section>  ${competencies.map((comp, i) => renderTemplate`<section${addAttribute(`sv-comp ${comp.layout === "text-right" ? "sv-comp--reverse" : ""}`, "class")} data-astro-cid-ucd2ps2b> <div class="sv-comp__img-col" data-astro-cid-ucd2ps2b> <img${addAttribute(comp.img, "src")}${addAttribute(comp.title, "alt")} class="sv-comp__img" loading="lazy" data-astro-cid-ucd2ps2b> </div> <div class="sv-comp__text-col fade-up" data-astro-cid-ucd2ps2b> <div class="sv-comp__text-inner" data-astro-cid-ucd2ps2b> <div class="sv-comp__tag-row" data-astro-cid-ucd2ps2b> <span class="sv-comp__tag" data-astro-cid-ucd2ps2b>${comp.tag}</span> <span class="sv-comp__tag-suffix" data-astro-cid-ucd2ps2b>${comp.tagSuffix}</span> </div> <h2 class="sv-comp__title" data-astro-cid-ucd2ps2b>${comp.title}</h2> <p class="sv-comp__desc" data-astro-cid-ucd2ps2b>${comp.desc}</p> ${comp.desc2 && renderTemplate`<p class="sv-comp__desc" data-astro-cid-ucd2ps2b>${comp.desc2}</p>`} <div class="sv-comp__pills" data-astro-cid-ucd2ps2b> ${comp.pills.map((pill) => renderTemplate`<span class="sv-comp__pill" data-astro-cid-ucd2ps2b>${pill}</span>`)} </div> </div> </div> </section>`)} <section class="sv-protocol" data-astro-cid-ucd2ps2b> <div class="mnc-container" data-astro-cid-ucd2ps2b> <div class="sv-protocol__layout fade-up" data-astro-cid-ucd2ps2b> <div class="sv-protocol__left" data-astro-cid-ucd2ps2b> <h2 class="sv-protocol__title" data-astro-cid-ucd2ps2b>A Rigid Protocol<br data-astro-cid-ucd2ps2b>for Perfection</h2> <p class="sv-protocol__sub" data-astro-cid-ucd2ps2b>
Every build is held to a 3-phase pre-fabrication audit and strict final QA process.
</p> <div class="sv-protocol__steps" data-astro-cid-ucd2ps2b> ${protocols.map((p) => renderTemplate`<div class="sv-protocol__step" data-astro-cid-ucd2ps2b> <span class="sv-protocol__num" data-astro-cid-ucd2ps2b>${p.num}</span> <div data-astro-cid-ucd2ps2b> <h4 class="sv-protocol__step-title" data-astro-cid-ucd2ps2b>${p.title}</h4> <p class="sv-protocol__step-desc" data-astro-cid-ucd2ps2b>${p.desc}</p> </div> </div>`)} </div> </div> <div class="sv-protocol__right" data-astro-cid-ucd2ps2b> <div class="sv-protocol__img-wrap" data-astro-cid-ucd2ps2b> <img src="/images/showcase/petra-project3.jpg" alt="Welding precision" loading="lazy" data-astro-cid-ucd2ps2b> <div class="sv-protocol__stat-badge" data-astro-cid-ucd2ps2b> <span class="sv-protocol__stat-num" data-astro-cid-ucd2ps2b>98.4%</span> <span class="sv-protocol__stat-label" data-astro-cid-ucd2ps2b>First-pass inspection rate</span> </div> </div> </div> </div> </div> </section>  <section class="sv-standards" data-astro-cid-ucd2ps2b> <div class="mnc-container" data-astro-cid-ucd2ps2b> <div class="sv-standards__inner fade-up" data-astro-cid-ucd2ps2b> <h2 class="sv-standards__title" data-astro-cid-ucd2ps2b>Integrated Standards</h2> <div class="sv-standards__grid" data-astro-cid-ucd2ps2b> ${standards.map((s) => renderTemplate`<div class="sv-standards__item" data-astro-cid-ucd2ps2b> <div class="sv-standards__icon" data-astro-cid-ucd2ps2b>${unescapeHTML(s.icon)}</div> <span class="sv-standards__name" data-astro-cid-ucd2ps2b>${s.title}</span> </div>`)} </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-ucd2ps2b": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-ucd2ps2b": true })}` })} `;
}, "/home/tylr/global-modular-partners/src/pages/services.astro", void 0);

const $$file = "/home/tylr/global-modular-partners/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
