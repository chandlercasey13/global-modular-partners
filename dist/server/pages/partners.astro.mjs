import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_sztvYgAO.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BJycQi3l.mjs';
import { $ as $$PageCTA } from '../chunks/PageCTA_1uutvlln.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    { name: "West Modular", logo: "/images/partners/west-og.png", url: "https://www.westmodular.com" },
    { name: "PROSET Construction", logo: "/images/partners/proset-footer.png", url: "https://www.prosetconstruction.com" },
    { name: "TRUE NORTH Compliance", logo: "/images/partners/true-north.svg", url: "https://truenorthcompliance.com" },
    { name: "EnTech Engineering", logo: "/images/partners/entech.svg", url: "https://entechengineers.com" },
    { name: "Agbayani Construction", logo: "/images/partners/agbayani-real.png", url: "https://agbayaniconstruction.com" },
    { name: "STREAM Logistics", logo: "/images/partners/stream-dark.png", url: "https://streamlogistics.com" }
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
      url: "https://www.rigroup.it"
    },
    {
      name: "Hospitals Without Borders",
      logo: "/images/partners/hwb.svg",
      focus: "Deployable Medical Infrastructure",
      desc: "Deployable modular medical infrastructure for humanitarian and emergency response settings. Headquartered in Oakland, CA with active operations in Rome, Italy and Amman, Jordan.",
      url: "https://hospitalswithoutborders.org"
    },
    {
      name: "Agbayani Construction",
      logo: "/images/partners/agbayani-real.png",
      focus: "Civil & Modular General Contracting",
      desc: "Civil and modular general contracting services, headquartered in Daly City, CA with active operations across the Bay Area and Western United States.",
      url: "https://agbayaniconstruction.com"
    },
    {
      name: "EDIS USA",
      logo: "/images/partners/edis.png",
      focus: "Emergency Management & Preparedness",
      desc: "Early warning systems and disaster preparedness technology for emergency management agencies. Supporting resilience infrastructure across government and civilian sectors.",
      url: "https://www.edisgroup.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Partners & Alliance Network", "description": "Global Modular Partners' alliance network spans manufacturing, construction, healthcare, and emergency response.", "data-astro-cid-6odhiasn": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="pt-hero" data-astro-cid-6odhiasn> <div class="pt-hero__inner" data-astro-cid-6odhiasn> <div class="pt-hero__content" data-astro-cid-6odhiasn> <h1 class="pt-hero__h1" data-astro-cid-6odhiasn>A Network<br data-astro-cid-6odhiasn>Built on Trust</h1> <p class="pt-hero__sub" data-astro-cid-6odhiasn>
Engineering excellence is not a solo endeavor. We curate a specialized ecosystem of global modular experts to deliver uncompromised architectural authority.
</p> </div> </div> </section>  <section class="pt-entities" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-entities__head fade-up" data-astro-cid-6odhiasn> <span class="pt-tag" data-astro-cid-6odhiasn>Partner Network</span> <h2 class="pt-entities__title" data-astro-cid-6odhiasn>Affiliated Entities</h2> <p class="pt-entities__sub" data-astro-cid-6odhiasn>
Global Modular Partners operates through a structured network of specialized affiliated entities — each bringing distinct expertise in manufacturing, civil contracting, healthcare infrastructure, and emergency management.
</p> </div> <div class="pt-entities__grid" data-astro-cid-6odhiasn> ${affiliatedEntities.map((e) => renderTemplate`<a class="pt-entity fade-up"${addAttribute(e.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Visit ${e.name}`, "aria-label")} data-astro-cid-6odhiasn> <div class="pt-entity__logo-wrap" data-astro-cid-6odhiasn> <img${addAttribute(e.logo, "src")}${addAttribute(e.name, "alt")} class="pt-entity__logo" loading="lazy" data-astro-cid-6odhiasn> </div> <div class="pt-entity__body" data-astro-cid-6odhiasn> <h3 class="pt-entity__name" data-astro-cid-6odhiasn> ${e.name} <span class="pt-entity__arrow" aria-hidden="true" data-astro-cid-6odhiasn> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6odhiasn><path d="M7 17L17 7" data-astro-cid-6odhiasn></path><path d="M9 7h8v8" data-astro-cid-6odhiasn></path></svg> </span> </h3> <span class="pt-entity__focus" data-astro-cid-6odhiasn>${e.focus}</span> <p class="pt-entity__desc" data-astro-cid-6odhiasn>${e.desc}</p> </div> </a>`)} </div> </div> </section>  <section class="pt-alliances" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-alliances__top fade-up" data-astro-cid-6odhiasn> <h2 class="pt-alliances__title" data-astro-cid-6odhiasn>Strategic<br data-astro-cid-6odhiasn>Alliances</h2> <p class="pt-alliances__desc" data-astro-cid-6odhiasn>
Our trade partners are vetted through a rigorous proprietary multi-point qualification process. We maintain long-term relationships with leaders in steel fabrication, logistics, and precision interior finishing.
</p> </div> <div class="pt-alliances__grid fade-up" data-astro-cid-6odhiasn> ${partners.map((p) => renderTemplate`<a class="pt-alliances__logo-card"${addAttribute(p.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Visit ${p.name}`, "aria-label")}${addAttribute(p.name, "title")} data-astro-cid-6odhiasn> <img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")} loading="lazy" data-astro-cid-6odhiasn> </a>`)} </div> </div> </section>  <section class="pt-cases" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-cases__head fade-up" data-astro-cid-6odhiasn> <span class="pt-tag" data-astro-cid-6odhiasn>Proven Performance</span> <h2 class="pt-cases__title" data-astro-cid-6odhiasn>Case Studies in Partnership</h2> </div> <div class="pt-cases__grid" data-astro-cid-6odhiasn> ${caseStudies.map((cs) => renderTemplate`<article class="pt-case fade-up" data-astro-cid-6odhiasn> <div class="pt-case__img-wrap" data-astro-cid-6odhiasn> <img${addAttribute(cs.img, "src")}${addAttribute(cs.title, "alt")} class="pt-case__img" loading="lazy" data-astro-cid-6odhiasn> <span class="pt-case__img-tag" data-astro-cid-6odhiasn>${cs.tag}</span> </div> <h3 class="pt-case__title" data-astro-cid-6odhiasn>${cs.title}</h3> <p class="pt-case__desc" data-astro-cid-6odhiasn>${cs.desc}</p> ${(cs.value || cs.location) && renderTemplate`<div class="pt-case__meta" data-astro-cid-6odhiasn> ${cs.value && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-6odhiasn><strong data-astro-cid-6odhiasn>Project Value:</strong> ${cs.value}</span>`} ${cs.location && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-6odhiasn><strong data-astro-cid-6odhiasn>Location:</strong> ${cs.location}</span>`} </div>`} </article>`)} </div> </div> </section> ${renderComponent($$result2, "PageCTA", $$PageCTA, { "eyebrow": "The full picture", "title": "There's more to the network<br/>than the names on this page.", "image": "/images/showcase/ri-civil-compound-aerial.png", "links": [
    { label: "About GMP", href: "/about" },
    { label: "Our Services", href: "/services" }
  ], "data-astro-cid-6odhiasn": true })}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-6odhiasn": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-6odhiasn": true })}` })} `;
}, "/Users/chandlercasey/SWE/global-modular-partners/src/pages/partners.astro", void 0);

const $$file = "/Users/chandlercasey/SWE/global-modular-partners/src/pages/partners.astro";
const $$url = "/partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Partners,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
