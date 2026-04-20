import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_C94D0yhW.mjs';
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
      img: "/images/showcase/ri-un-ship-logistics.png",
      layout: "text-right"
    },
    {
      tag: "Fabrication",
      tagSuffix: "Custom + Scalable",
      title: "Custom Module Synthesis",
      desc: "Purpose-built for each brief \u2014 we configure custom and standardized modules spanning commercial, healthcare, defense, and institutional applications with factory-level precision and consistency.",
      pills: ["Custom Build-Out", "Lab Assemblies"],
      img: "/images/showcase/ri-commercial-building.png",
      layout: "text-left"
    }
  ];
  const protocols = [
    { num: "01", title: "Architectural Audit", desc: "Verification of design intent against fabrication capacity, material availability, and structural code." },
    { num: "02", title: "BIM Co-Synthesis", desc: "Full model MEP clashes and fit-for-purpose validation for building information modeling." },
    { num: "03", title: "Modular ESG Analog", desc: "Measurement of full material sustainability with corrections applied before production begins." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services", "description": "Multipurpose modular construction services: consulting, design-build, procurement, installation, support, and emergency deployment.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="sv-hero" data-astro-cid-ucd2ps2b> <div class="mnc-container sv-hero__inner" data-astro-cid-ucd2ps2b> <div class="sv-hero__content" data-astro-cid-ucd2ps2b> <h1 class="sv-hero__h1" data-astro-cid-ucd2ps2b>Engineering the<br data-astro-cid-ucd2ps2b>Future of Construction.</h1> <p class="sv-hero__sub" data-astro-cid-ucd2ps2b>Multipurpose modular construction services — from consulting and design-build to procurement, installation, and emergency deployment.</p> </div> </div> </section>  <section class="sv-advantage" data-astro-cid-ucd2ps2b> <div class="mnc-container" data-astro-cid-ucd2ps2b> <div class="sv-sec-head fade-up" data-astro-cid-ucd2ps2b> <span class="section-tag" data-astro-cid-ucd2ps2b>Our Process</span> </div> <div class="sv-advantage__top fade-up" data-astro-cid-ucd2ps2b> <h2 class="sv-advantage__title" data-astro-cid-ucd2ps2b>
Design. Fabricate. Deploy. <span class="sv-advantage__span" data-astro-cid-ucd2ps2b>Repeat.</span> </h2> <p class="sv-advantage__desc" data-astro-cid-ucd2ps2b>
Modular construction replaces the chaos of traditional job sites with factory-precision manufacturing. Complete building sections are engineered and assembled in controlled environments — then delivered to site ready to install.
</p> </div> <div class="sv-advantage__cards" data-astro-cid-ucd2ps2b> <div class="sv-advantage__card" data-astro-cid-ucd2ps2b> <img src="/images/showcase/west-blvd-render.jpg" alt="Precision engineering" class="sv-advantage__card-img" loading="lazy" data-astro-cid-ucd2ps2b> <div class="sv-advantage__card-overlay" data-astro-cid-ucd2ps2b></div> <div class="sv-advantage__card-body" data-astro-cid-ucd2ps2b> <span class="sv-advantage__card-num" data-astro-cid-ucd2ps2b>01</span> <h3 class="sv-advantage__card-title" data-astro-cid-ucd2ps2b>Precision Engineering</h3> <p class="sv-advantage__card-desc" data-astro-cid-ucd2ps2b>Advanced BIM coordination and structural analysis — designed for factory fabrication and rapid on-site assembly.</p> </div> </div> <div class="sv-advantage__card" data-astro-cid-ucd2ps2b> <img src="/images/showcase/ri-legacy-about.jpg" alt="Modular fabrication" class="sv-advantage__card-img" loading="lazy" data-astro-cid-ucd2ps2b> <div class="sv-advantage__card-overlay" data-astro-cid-ucd2ps2b></div> <div class="sv-advantage__card-body" data-astro-cid-ucd2ps2b> <span class="sv-advantage__card-num" data-astro-cid-ucd2ps2b>02</span> <h3 class="sv-advantage__card-title" data-astro-cid-ucd2ps2b>Modular Fabrication</h3> <p class="sv-advantage__card-desc" data-astro-cid-ucd2ps2b>Modules built in controlled factories — up to 60% faster with tighter tolerances and dramatically less waste.</p> </div> </div> <div class="sv-advantage__card" data-astro-cid-ucd2ps2b> <img src="/images/showcase/ri-steel-frame-hills.png" alt="Modular structural engineering" class="sv-advantage__card-img" loading="lazy" data-astro-cid-ucd2ps2b> <div class="sv-advantage__card-overlay" data-astro-cid-ucd2ps2b></div> <div class="sv-advantage__card-body" data-astro-cid-ucd2ps2b> <span class="sv-advantage__card-num" data-astro-cid-ucd2ps2b>03</span> <h3 class="sv-advantage__card-title" data-astro-cid-ucd2ps2b>Integrated Logistics</h3> <p class="sv-advantage__card-desc" data-astro-cid-ucd2ps2b>Finished modules transported and installed on schedule via our global supply chain, anywhere in the world.</p> </div> </div> </div> </div> </section>  ${competencies.map((comp, i) => renderTemplate`<section${addAttribute([
    "sv-comp",
    comp.layout === "text-right" && "sv-comp--reverse",
    i % 2 === 0 && "sv-comp--band-muted"
  ], "class:list")} data-astro-cid-ucd2ps2b> <div class="sv-comp__grid" data-astro-cid-ucd2ps2b> <div class="sv-comp__img-col" data-astro-cid-ucd2ps2b> <img${addAttribute(comp.img, "src")}${addAttribute(comp.title, "alt")} class="sv-comp__img" loading="lazy" data-astro-cid-ucd2ps2b> </div> <div class="sv-comp__text-col fade-up" data-astro-cid-ucd2ps2b> <div class="sv-comp__text-inner" data-astro-cid-ucd2ps2b> <div class="sv-comp__tag-row" data-astro-cid-ucd2ps2b> <span class="sv-comp__tag" data-astro-cid-ucd2ps2b>${comp.tag}</span> <span class="sv-comp__tag-suffix" data-astro-cid-ucd2ps2b>${comp.tagSuffix}</span> </div> <h2 class="sv-comp__title" data-astro-cid-ucd2ps2b>${comp.title}</h2> <p class="sv-comp__desc" data-astro-cid-ucd2ps2b>${comp.desc}</p> ${comp.desc2 && renderTemplate`<p class="sv-comp__desc" data-astro-cid-ucd2ps2b>${comp.desc2}</p>`} <div class="sv-comp__pills" data-astro-cid-ucd2ps2b> ${comp.pills.map((pill) => renderTemplate`<span class="sv-comp__pill" data-astro-cid-ucd2ps2b>${pill}</span>`)} </div> </div> </div> </div> </section>`)} <section class="sv-protocol" data-astro-cid-ucd2ps2b> <div class="sv-protocol__layout fade-up" data-astro-cid-ucd2ps2b> <div class="sv-protocol__left" data-astro-cid-ucd2ps2b> <div class="sv-protocol__text-inner" data-astro-cid-ucd2ps2b> <span class="section-tag" data-astro-cid-ucd2ps2b>Protocol</span> <h2 class="sv-protocol__title" data-astro-cid-ucd2ps2b>A Rigid Protocol<br data-astro-cid-ucd2ps2b>for Perfection</h2> <p class="sv-protocol__sub" data-astro-cid-ucd2ps2b>
Every build is held to a 3-phase pre-fabrication audit and strict final QA process.
</p> <div class="sv-protocol__steps" data-astro-cid-ucd2ps2b> ${protocols.map((p) => renderTemplate`<div class="sv-protocol__step" data-astro-cid-ucd2ps2b> <span class="sv-protocol__num" data-astro-cid-ucd2ps2b>${p.num}</span> <div data-astro-cid-ucd2ps2b> <h4 class="sv-protocol__step-title" data-astro-cid-ucd2ps2b>${p.title}</h4> <p class="sv-protocol__step-desc" data-astro-cid-ucd2ps2b>${p.desc}</p> </div> </div>`)} </div> </div> </div> <div class="sv-protocol__right" data-astro-cid-ucd2ps2b> <div class="sv-protocol__img-wrap" data-astro-cid-ucd2ps2b> <img src="/images/showcase/petra-project3.jpg" alt="Welding precision" loading="lazy" data-astro-cid-ucd2ps2b> </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-ucd2ps2b": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-ucd2ps2b": true })}` })} `;
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
