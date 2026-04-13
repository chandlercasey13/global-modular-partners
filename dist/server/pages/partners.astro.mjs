import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BIMeXlt4.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    { name: "West Modular", logo: "/images/partners/west-og.png" },
    { name: "PROSET Construction", logo: "/images/partners/proset-footer.png" },
    { name: "TRUE NORTH Compliance", logo: "/images/partners/true-north.svg" },
    { name: "EnTech Engineering", logo: "/images/partners/entech.svg" },
    { name: "Agbayani Construction", logo: "/images/partners/agbayani-real.png" },
    { name: "STREAM Logistics", logo: "/images/partners/stream-dark.png" },
    { name: "ATCCO Construction", logo: "/images/partners/atcco-big.png" },
    { name: "Petra Engineering", logo: "/images/partners/petra-eng.png" }
  ];
  const isoCerts = [
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "ISO 9001",
      subtitle: "Quality Management",
      desc: "The cornerstone of our structural integrity, ensuring every component meets rigorous manufacturing governance and construction product standards."
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>`,
      title: "ISO 14001",
      subtitle: "Environmental Standards",
      desc: "Zero-impact modular engineering through sustainable manufacturing, waste reduction, and pollution prevention \u2014 supported by a fully audited environmental framework."
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 12c0 4.97 3.038 9.227 7.354 11.016.34.141.652.213.966.236L12 23.25l.582.006c.314-.023.626-.095.966-.236C17.962 21.227 21 16.97 21 12c0-1.047-.134-2.063-.382-3.016z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "ISO 45001",
      subtitle: "Occupational Health & Safety",
      desc: "A zero-harm operational culture supported by continuous training, real-time monitoring, and proactive risk assessment practices across all project environments."
    }
  ];
  const caseStudies = [
    {
      tag: "Multi-Unit Residential",
      title: "The Meridian Heights Assembly",
      desc: "Collaborating with 4 independent specialized contractors to deploy 120 modular units in 18 weeks. Precision logistics integration reduced on-site waste by 45%.",
      value: "$24M",
      location: "Odessa, TX",
      img: "/images/showcase/ri-permanent-building-wide.png"
    },
    {
      tag: "Healthcare Infrastructure",
      title: "Surgical Excellence Clinic",
      desc: "An end-to-end partnership with medical equipment manufacturers to pre-install Grade A clinical environments within modular frames, meeting all clinical compliance certifications.",
      value: "",
      location: "",
      img: "/images/showcase/hwb-modular-pediatric.jpeg"
    }
  ];
  const affiliatedEntities = [
    {
      name: "RI Group USA",
      logo: "/images/partners/ri-group.png",
      focus: "Manufacturing & International Supply Chain",
      desc: "International modular construction and manufacturing. Parent company based in Lecce, Italy with global project delivery capability across Europe, the Middle East, and North America.",
      link: "/partners"
    },
    {
      name: "Hospitals Without Borders",
      logo: "/images/partners/hwb.svg",
      focus: "Deployable Medical Infrastructure",
      desc: "Deployable modular medical infrastructure for humanitarian and emergency response settings. Headquartered in Oakland, CA with active operations in Rome, Italy and Amman, Jordan.",
      link: "/partners"
    },
    {
      name: "Agbayani Construction",
      logo: "/images/partners/agbayani-real.png",
      focus: "Civil & Modular General Contracting",
      desc: "Civil and modular general contracting services, headquartered in Daly City, CA with active operations across the Bay Area and Western United States.",
      link: "/partners"
    },
    {
      name: "EDIS USA",
      logo: "/images/partners/edis.png",
      focus: "Emergency Management & Preparedness",
      desc: "Early warning systems and disaster preparedness technology for emergency management agencies. Supporting resilience infrastructure across government and civilian sectors.",
      link: "/partners"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Partners & Alliance Network", "description": "Global Modular Partners' alliance network spans manufacturing, construction, healthcare, and emergency response.", "data-astro-cid-6odhiasn": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="pt-hero" data-astro-cid-6odhiasn> <div class="pt-hero__inner" data-astro-cid-6odhiasn> <div class="pt-hero__content" data-astro-cid-6odhiasn> <h1 class="pt-hero__h1" data-astro-cid-6odhiasn>A Network<br data-astro-cid-6odhiasn>Built on Trust</h1> <p class="pt-hero__sub" data-astro-cid-6odhiasn>
Engineering excellence is not a solo endeavor. We curate a specialized ecosystem of global modular experts to deliver uncompromised architectural authority.
</p> </div> </div> </section>  <section class="pt-entities" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-entities__head fade-up" data-astro-cid-6odhiasn> <span class="pt-tag" data-astro-cid-6odhiasn>Partner Network</span> <h2 class="pt-entities__title" data-astro-cid-6odhiasn>Affiliated Entities</h2> <p class="pt-entities__sub" data-astro-cid-6odhiasn>
Global Modular Partners operates through a structured network of specialized affiliated entities — each bringing distinct expertise in manufacturing, civil contracting, healthcare infrastructure, and emergency management.
</p> </div> <div class="pt-entities__grid" data-astro-cid-6odhiasn> ${affiliatedEntities.map((e) => renderTemplate`<div class="pt-entity fade-up" data-astro-cid-6odhiasn> <div class="pt-entity__logo-wrap" data-astro-cid-6odhiasn> <img${addAttribute(e.logo, "src")}${addAttribute(e.name, "alt")} class="pt-entity__logo" loading="lazy" data-astro-cid-6odhiasn> </div> <div class="pt-entity__body" data-astro-cid-6odhiasn> <h3 class="pt-entity__name" data-astro-cid-6odhiasn>${e.name}</h3> <span class="pt-entity__focus" data-astro-cid-6odhiasn>${e.focus}</span> <p class="pt-entity__desc" data-astro-cid-6odhiasn>${e.desc}</p> </div> </div>`)} </div> </div> </section>  <section class="pt-alliances" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-alliances__top fade-up" data-astro-cid-6odhiasn> <h2 class="pt-alliances__title" data-astro-cid-6odhiasn>Strategic<br data-astro-cid-6odhiasn>Alliances</h2> <p class="pt-alliances__desc" data-astro-cid-6odhiasn>
Our trade partners are vetted through a rigorous proprietary multi-point qualification process. We maintain long-term relationships with leaders in steel fabrication, logistics, and precision interior finishing.
</p> </div> <div class="pt-alliances__grid fade-up" data-astro-cid-6odhiasn> ${partners.map((p) => renderTemplate`<div class="pt-alliances__logo-card" data-astro-cid-6odhiasn> <img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")}${addAttribute(p.name, "title")} loading="lazy" data-astro-cid-6odhiasn> </div>`)} </div> </div> </section>  <section class="pt-cases" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-cases__head fade-up" data-astro-cid-6odhiasn> <span class="pt-tag" data-astro-cid-6odhiasn>Proven Performance</span> <h2 class="pt-cases__title" data-astro-cid-6odhiasn>Case Studies in Partnership</h2> </div> <div class="pt-cases__grid" data-astro-cid-6odhiasn> ${caseStudies.map((cs) => renderTemplate`<article class="pt-case fade-up" data-astro-cid-6odhiasn> <div class="pt-case__img-wrap" data-astro-cid-6odhiasn> <img${addAttribute(cs.img, "src")}${addAttribute(cs.title, "alt")} class="pt-case__img" loading="lazy" data-astro-cid-6odhiasn> <span class="pt-case__img-tag" data-astro-cid-6odhiasn>${cs.tag}</span> </div> <h3 class="pt-case__title" data-astro-cid-6odhiasn>${cs.title}</h3> <p class="pt-case__desc" data-astro-cid-6odhiasn>${cs.desc}</p> ${(cs.value || cs.location) && renderTemplate`<div class="pt-case__meta" data-astro-cid-6odhiasn> ${cs.value && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-6odhiasn><strong data-astro-cid-6odhiasn>Project Value:</strong> ${cs.value}</span>`} ${cs.location && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-6odhiasn><strong data-astro-cid-6odhiasn>Location:</strong> ${cs.location}</span>`} </div>`} </article>`)} </div> </div> </section>  <section class="pt-iso" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-iso__head fade-up" data-astro-cid-6odhiasn> <span class="pt-tag" data-astro-cid-6odhiasn>Quality Standards</span> <h2 class="pt-iso__title" data-astro-cid-6odhiasn>ISO Certifications</h2> <p class="pt-iso__sub" data-astro-cid-6odhiasn>
Our operational governance is guided by globally recognized quality, environmental, and safety management systems — ensuring industrial precision and compliance across every project we support.
</p> </div> <div class="pt-iso__grid" data-astro-cid-6odhiasn> ${isoCerts.map((cert) => renderTemplate`<div class="pt-iso__card fade-up" data-astro-cid-6odhiasn> <div class="pt-iso__card-icon" data-astro-cid-6odhiasn>${unescapeHTML(cert.icon)}</div> <h3 class="pt-iso__card-title" data-astro-cid-6odhiasn>${cert.title}</h3> <span class="pt-iso__card-sub" data-astro-cid-6odhiasn>${cert.subtitle}</span> <p class="pt-iso__card-desc" data-astro-cid-6odhiasn>${cert.desc}</p> </div>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-6odhiasn": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-6odhiasn": true })}` })} `;
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
