import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_KgPdRGIw.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    {
      name: "West Modular Manufacturing",
      type: "Manufacturing",
      logo: "/images/partners/west-modular.svg",
      description: "Modular factory production and volumetric unit fabrication."
    },
    {
      name: "PROSET Construction",
      type: "Construction",
      logo: "/images/partners/proset.svg",
      description: "General contracting and on-site modular assembly."
    },
    {
      name: "TRUE NORTH Compliance",
      type: "Compliance",
      logo: "/images/partners/true-north.svg",
      description: "Regulatory compliance, permitting, and code consulting."
    },
    {
      name: "EnTech Engineering",
      type: "Engineering",
      logo: "/images/partners/entech.svg",
      description: "Structural, mechanical, and electrical engineering services."
    },
    {
      name: "Agbayani Construction Corporation",
      type: "Construction",
      logo: "/images/partners/agbayani.svg",
      description: "Civil and modular general contracting."
    },
    {
      name: "STREAM Logistics",
      type: "Logistics",
      logo: "/images/partners/stream-logistics.svg",
      description: "Module transportation, shipping, and delivery coordination."
    },
    {
      name: "ATCCO Construction",
      type: "Construction",
      logo: "/images/partners/atcco.svg",
      description: "Specialty construction and installation services."
    },
    {
      name: "Petra Air Conditioning",
      type: "MEP",
      logo: "/images/partners/petra-eng.png",
      description: "HVAC systems design and installation for modular units."
    },
    {
      name: "Petra Aluminum",
      type: "Materials",
      logo: "/images/partners/petralu-logo.jpg",
      description: "Aluminum fabrication for facades and structural components."
    },
    {
      name: "Abstract Architecture",
      type: "Architecture",
      logo: "/images/partners/abstract-arch.jpg",
      description: "Architectural design and BIM coordination."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Partners & Alliance Network", "description": "Global Modular Partners' alliance network spans manufacturing, construction, healthcare, and emergency response.", "data-astro-cid-6odhiasn": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="hero-wrap" data-astro-cid-6odhiasn> <div class="hero-inner" data-astro-cid-6odhiasn> <div class="hero-lines" aria-hidden="true" data-astro-cid-6odhiasn> <div class="hero-lines__v hero-lines__v--1" data-astro-cid-6odhiasn></div> <div class="hero-lines__v hero-lines__v--2" data-astro-cid-6odhiasn></div> <div class="hero-lines__v hero-lines__v--3" data-astro-cid-6odhiasn></div> <div class="hero-lines__v hero-lines__v--4" data-astro-cid-6odhiasn></div> <div class="hero-lines__h hero-lines__h--1" data-astro-cid-6odhiasn></div> <div class="hero-lines__h hero-lines__h--2" data-astro-cid-6odhiasn></div> <div class="hero-lines__h hero-lines__h--3" data-astro-cid-6odhiasn></div> <div class="hero-lines__h hero-lines__h--4" data-astro-cid-6odhiasn></div> </div> <div class="hero-content" data-astro-cid-6odhiasn> <div class="hero-breadcrumb" data-astro-cid-6odhiasn> <a href="/" data-astro-cid-6odhiasn>Home</a> <span class="hero-breadcrumb__sep" data-astro-cid-6odhiasn>/</span> <span data-astro-cid-6odhiasn>Partners & Alliance Network</span> </div> <h1 data-astro-cid-6odhiasn>Partners & Alliance<br data-astro-cid-6odhiasn><span class="hero-span" data-astro-cid-6odhiasn>Network</span></h1> <p class="hero-subtitle" data-astro-cid-6odhiasn>
Building together with industry leaders across manufacturing, construction, healthcare, and emergency response.
</p> </div> </div> </section>  <section id="network" class="alliance-section section-gap" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="alliance-center" data-astro-cid-6odhiasn> <span class="section-tag" data-astro-cid-6odhiasn>Alliance</span> <h2 class="section-title" data-astro-cid-6odhiasn>A network built for <span class="section-span" data-astro-cid-6odhiasn>complex programs</span></h2> <div class="alliance-copy" data-astro-cid-6odhiasn> <p data-astro-cid-6odhiasn>
Global Modular Partners curates an alliance network that unites manufacturing scale,
            construction execution, healthcare delivery, and emergency-response readiness. Together,
            we shorten procurement cycles, de-risk delivery, and align every stakeholder to a single
            program standard.
</p> <p data-astro-cid-6odhiasn>
Whether you are a public agency, a healthcare operator, or a commercial developer, our
            partners extend GMP's reach with specialized capabilities—without sacrificing compliance,
            safety, or schedule integrity.
</p> </div> </div> </div> </section>  <section class="partners-section section-gap" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <span class="section-tag" data-astro-cid-6odhiasn>Strategic Partners</span> <h2 class="section-title" data-astro-cid-6odhiasn>Leaders across every <span class="section-span" data-astro-cid-6odhiasn>critical vertical</span></h2> <p class="partners-lead" data-astro-cid-6odhiasn>
Each relationship is intentional: complementary strengths, shared accountability, and a
        commitment to modular excellence from factory floor to final inspection.
</p> <div class="partners-grid" data-astro-cid-6odhiasn> ${partners.map((partner) => renderTemplate`<article class="partner-card" data-astro-cid-6odhiasn> <div class="partner-card__logo-wrap" data-astro-cid-6odhiasn> <img${addAttribute(partner.logo, "src")}${addAttribute(`${partner.name} logo`, "alt")} class="partner-card__logo" loading="lazy" data-astro-cid-6odhiasn> </div> <div class="partner-card__body" data-astro-cid-6odhiasn> <div class="partner-card__top" data-astro-cid-6odhiasn> <h3 class="partner-card__name" data-astro-cid-6odhiasn>${partner.name}</h3> <span class="partner-card__pill" data-astro-cid-6odhiasn>${partner.type}</span> </div> <p class="partner-card__desc" data-astro-cid-6odhiasn>${partner.description}</p> </div> </article>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-6odhiasn": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-6odhiasn": true })}` })} `;
}, "/home/tylr/global-modular-partners/src/pages/partners.astro", void 0);

const $$file = "/home/tylr/global-modular-partners/src/pages/partners.astro";
const $$url = "/partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Partners,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
