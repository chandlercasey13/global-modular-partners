import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BIKR535C.mjs';
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
  const caseStudies = [
    {
      tag: "Multi-Unit Residential",
      title: "The Meridian Heights Assembly",
      desc: "Collaborating with 4 independent specialized contractors to deploy 120 modular units in 18 weeks. Precision logistics integration reduced on-site waste by 45%.",
      value: "$24M",
      location: "Odessa, TX",
      img: "/images/showcase/ri-commercial.jpg"
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
  const protocols = [
    { num: "01", title: "Centralized Command", desc: "All partnership communications are routed through our Secure Portal. This creates a single source of truth for all schedule, financial, and change order management." },
    { num: "02", title: "Vetting Directory", desc: "Potential partners must undergo the Pre-Qualification Audit covering financial stability, ethical compliance, and verifiable performance history." },
    { num: "03", title: "Transparent Inquiry", desc: "We maintain a strict inquiry directory. Partners are assigned dedicated Liaison Officers to ensure clarity of deliverables and adherence to decision-making cycles." }
  ];
  const contacts = [
    { label: "Alliance Partnerships", email: "alliances@globalmodularpartners.com" },
    { label: "Engineering Inquiries", email: "engineering@globalmodularpartners.com" },
    { label: "Procurement Office", email: "procurement@globalmodularpartners.com" },
    { label: "Corporate Affairs", email: "governance@globalmodularpartners.com" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Partners & Alliance Network", "description": "Global Modular Partners' alliance network spans manufacturing, construction, healthcare, and emergency response.", "data-astro-cid-6odhiasn": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="pt-hero" data-astro-cid-6odhiasn> <div class="pt-hero__inner" data-astro-cid-6odhiasn> <div class="pt-hero__content" data-astro-cid-6odhiasn> <h1 class="pt-hero__h1" data-astro-cid-6odhiasn>A Network<br data-astro-cid-6odhiasn>Built on Trust</h1> <p class="pt-hero__sub" data-astro-cid-6odhiasn>
Engineering excellence is not a solo endeavor. We curate a specialized ecosystem of global modular experts to deliver uncompromised architectural authority.
</p> </div> </div> </section>  <section class="pt-alliances" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-alliances__top fade-up" data-astro-cid-6odhiasn> <h2 class="pt-alliances__title" data-astro-cid-6odhiasn>Strategic<br data-astro-cid-6odhiasn>Alliances</h2> <p class="pt-alliances__desc" data-astro-cid-6odhiasn>
Our trade partners are vetted through a rigorous proprietary multi-point qualification process. We maintain long-term relationships with leaders in steel fabrication, logistics, and precision interior finishing.
</p> </div> <div class="pt-alliances__grid fade-up" data-astro-cid-6odhiasn> ${partners.map((p) => renderTemplate`<div class="pt-alliances__logo-card" data-astro-cid-6odhiasn> <img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")}${addAttribute(p.name, "title")} loading="lazy" data-astro-cid-6odhiasn> </div>`)} </div> </div> </section>  <section class="pt-cases" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-cases__head fade-up" data-astro-cid-6odhiasn> <span class="pt-tag" data-astro-cid-6odhiasn>Proven Performance</span> <h2 class="pt-cases__title" data-astro-cid-6odhiasn>Case Studies in Partnership</h2> </div> <div class="pt-cases__grid" data-astro-cid-6odhiasn> ${caseStudies.map((cs) => renderTemplate`<article class="pt-case fade-up" data-astro-cid-6odhiasn> <div class="pt-case__img-wrap" data-astro-cid-6odhiasn> <img${addAttribute(cs.img, "src")}${addAttribute(cs.title, "alt")} class="pt-case__img" loading="lazy" data-astro-cid-6odhiasn> <span class="pt-case__img-tag" data-astro-cid-6odhiasn>${cs.tag}</span> </div> <h3 class="pt-case__title" data-astro-cid-6odhiasn>${cs.title}</h3> <p class="pt-case__desc" data-astro-cid-6odhiasn>${cs.desc}</p> ${(cs.value || cs.location) && renderTemplate`<div class="pt-case__meta" data-astro-cid-6odhiasn> ${cs.value && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-6odhiasn><strong data-astro-cid-6odhiasn>Project Value:</strong> ${cs.value}</span>`} ${cs.location && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-6odhiasn><strong data-astro-cid-6odhiasn>Location:</strong> ${cs.location}</span>`} </div>`} </article>`)} </div> </div> </section>  <section class="pt-protocol" data-astro-cid-6odhiasn> <div class="mnc-container" data-astro-cid-6odhiasn> <div class="pt-protocol__layout fade-up" data-astro-cid-6odhiasn> <div class="pt-protocol__left" data-astro-cid-6odhiasn> <h2 class="pt-protocol__title" data-astro-cid-6odhiasn>The Protocol of<br data-astro-cid-6odhiasn>Collaboration</h2> <div class="pt-protocol__steps" data-astro-cid-6odhiasn> ${protocols.map((p) => renderTemplate`<div class="pt-protocol__step" data-astro-cid-6odhiasn> <span class="pt-protocol__num" data-astro-cid-6odhiasn>${p.num}.</span> <div data-astro-cid-6odhiasn> <h4 class="pt-protocol__step-title" data-astro-cid-6odhiasn>${p.title}</h4> <p class="pt-protocol__step-desc" data-astro-cid-6odhiasn>${p.desc}</p> </div> </div>`)} </div> </div> <div class="pt-protocol__right" data-astro-cid-6odhiasn> <div class="pt-protocol__directory" data-astro-cid-6odhiasn> <h4 class="pt-protocol__dir-title" data-astro-cid-6odhiasn>Corporate Inquiry Directory</h4> <div class="pt-protocol__contacts" data-astro-cid-6odhiasn> ${contacts.map((c) => renderTemplate`<div class="pt-protocol__contact" data-astro-cid-6odhiasn> <span class="pt-protocol__contact-label" data-astro-cid-6odhiasn>${c.label}</span> <a${addAttribute(`mailto:${c.email}`, "href")} class="pt-protocol__contact-email" data-astro-cid-6odhiasn>${c.email}</a> </div>`)} </div> </div> </div> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-6odhiasn": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-6odhiasn": true })}` })} `;
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
