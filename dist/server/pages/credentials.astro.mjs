import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BIKR535C.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Credentials = createComponent(($$result, $$props, $$slots) => {
  const isoCards = [
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "ISO 9001",
      subtitle: "Quality Management",
      desc: "The cornerstone of our structural integrity, ensuring every component meets manufacturing governance and construction product properties."
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/></svg>`,
      title: "ISO 14001",
      subtitle: "Environmental Standards",
      desc: "Zero-impact modular engineering meets sustainable manufacturing, waste reduction, and pollution prevention through our fully audited operational framework."
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 12c0 4.97 3.038 9.227 7.354 11.016.34.141.652.213.966.236L12 23.25l.582.006c.314-.023.626-.095.966-.236C17.962 21.227 21 16.97 21 12c0-1.047-.134-2.063-.382-3.016z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "ISO 45001",
      subtitle: "Safety Systems",
      desc: "Our zero-harm mission is an operational health & safety practice for the framework for a clear, firm environment for our engineering and fabrication operations."
    }
  ];
  const safetyFeatures = [
    { title: "Predictive Risk Assessment", desc: "AI-driven simulations identify potential hazards in the fabrication sequence BEFORE THEY ENTER THE FIELD ENVIRONMENT." },
    { title: "Active Safety Monitoring", desc: "Real-time monitoring systems and wearable safety tech provide instantaneous risk alerts on the immediate response activation." },
    { title: "Continuous Training Modules", desc: "Quarterly certification updates for all technical staff ensuring comprehensive awareness and adherence of industrial awareness." }
  ];
  const esgCards = [
    { title: "Environmental", desc: "Carbon neutral manufacturing for scalable, 2030 through reduced waste generation and high-efficiency production lines.", img: "/images/showcase/ri-modular-units.jpg" },
    { title: "Social", desc: "Investing in local engineering talent and creating green-collar career pathways through community partnerships and equal opportunity recruitment.", img: "/images/showcase/hwb-ri-factory-visit.jpeg" },
    { title: "Governance", desc: "Transparent audit trails and board-level oversight. All compliance is documented using GAAP-based internal governance and procurement practices.", img: "" }
  ];
  const patents = [
    { id: "PAT 7124 S", title: "Iso-Lock Rigid Framing", desc: "A variable-torque interlocking system for modular structural steel assembly, designed for seismic zone Level IV specifications." },
    { id: "PAT 0044 In", title: "ThermalBridge Decoupler", desc: "Precision insulation break mechanism for modular walls and floors, delivering thermal break isolation for moisture and thermal bridging." },
    { id: "PAT 0012 Q", title: "Rapid-Connect Electrical Bus", desc: "Fast-mating modular electrical bus bar connectors allowing 0.07s connection under loaded-grounded conditions." },
    { id: "PAT 7124 Q", title: "Dynamic Acoustic Barrier", desc: "Multi-layer partition system incorporating dynamic isolation module for variable-frequency sound attenuation in shared occupancy environments." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Credentials & Compliance", "description": "ISO-certified, CAGE-registered, MBE-certified, and bonded \u2014 compliance standards and industry certifications for every project we deliver.", "data-astro-cid-trdk4pam": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="cr-hero" data-astro-cid-trdk4pam> <div class="cr-hero__content" data-astro-cid-trdk4pam> <h1 class="cr-hero__h1" data-astro-cid-trdk4pam>Architectural<br data-astro-cid-trdk4pam>Authority.</h1> <p class="cr-hero__sub" data-astro-cid-trdk4pam>
Establishing the gold standard for modular industrial solutions through rigorous certification, proprietary technical innovation, and an unwavering commitment to safety.
</p> </div> </section>  <section class="cr-iso" data-astro-cid-trdk4pam> <div class="mnc" data-astro-cid-trdk4pam> <div class="cr-iso__head fade-up" data-astro-cid-trdk4pam> <h2 class="cr-iso__title" data-astro-cid-trdk4pam>ISO Certifications</h2> <p class="cr-iso__sub" data-astro-cid-trdk4pam>
Our operational governance is guided by globally recognized quality management systems, environmental protections, and rigorously maintained ISO standards to industrial precision.
</p> </div> <div class="cr-iso__grid" data-astro-cid-trdk4pam> ${isoCards.map((card) => renderTemplate`<div class="cr-iso__card fade-up" data-astro-cid-trdk4pam> <div class="cr-iso__card-icon" data-astro-cid-trdk4pam>${unescapeHTML(card.icon)}</div> <h3 class="cr-iso__card-title" data-astro-cid-trdk4pam>${card.title}</h3> <span class="cr-iso__card-sub" data-astro-cid-trdk4pam>${card.subtitle}</span> <p class="cr-iso__card-desc" data-astro-cid-trdk4pam>${card.desc}</p> </div>`)} </div> </div> </section>  <section class="cr-safety" data-astro-cid-trdk4pam> <div class="mnc" data-astro-cid-trdk4pam> <div class="cr-safety__layout fade-up" data-astro-cid-trdk4pam> <div class="cr-safety__left" data-astro-cid-trdk4pam> <div class="cr-safety__img-wrap" data-astro-cid-trdk4pam> <img src="/images/showcase/west-modules.jpg" alt="Safety protocol" loading="lazy" data-astro-cid-trdk4pam> <div class="cr-safety__img-overlay" data-astro-cid-trdk4pam> <span class="cr-safety__img-label" data-astro-cid-trdk4pam>Safety<br data-astro-cid-trdk4pam>Protocol.</span> </div> <div class="cr-safety__img-badge" data-astro-cid-trdk4pam> <span class="cr-safety__badge-num" data-astro-cid-trdk4pam>0%</span> </div> </div> </div> <div class="cr-safety__right" data-astro-cid-trdk4pam> <span class="cr-tag" data-astro-cid-trdk4pam>Safety Protocols</span> <h2 class="cr-safety__title" data-astro-cid-trdk4pam>Zero-Harm Initiative: Our Non-Negotiable Foundation.</h2> <div class="cr-safety__features" data-astro-cid-trdk4pam> ${safetyFeatures.map((f) => renderTemplate`<div class="cr-safety__feature" data-astro-cid-trdk4pam> <h4 class="cr-safety__feature-title" data-astro-cid-trdk4pam>${f.title}</h4> <p class="cr-safety__feature-desc" data-astro-cid-trdk4pam>${f.desc}</p> </div>`)} </div> </div> </div> </div> </section>  <section class="cr-esg" data-astro-cid-trdk4pam> <div class="mnc" data-astro-cid-trdk4pam> <div class="cr-esg__head fade-up" data-astro-cid-trdk4pam> <h2 class="cr-esg__title" data-astro-cid-trdk4pam>ESG Commitments</h2> <p class="cr-esg__sub" data-astro-cid-trdk4pam>
We define Architectural Authority not just by the strength of our structures, but by the integrity of our impact on the world.
</p> </div> <div class="cr-esg__grid" data-astro-cid-trdk4pam> ${esgCards.map((card) => renderTemplate`<div class="cr-esg__card fade-up" data-astro-cid-trdk4pam> <div class="cr-esg__card-img" data-astro-cid-trdk4pam> ${card.img ? renderTemplate`<img${addAttribute(card.img, "src")}${addAttribute(card.title, "alt")} loading="lazy" data-astro-cid-trdk4pam>` : renderTemplate`<div class="cr-esg__card-placeholder" data-astro-cid-trdk4pam> <span data-astro-cid-trdk4pam>Governance<br data-astro-cid-trdk4pam>Safe Work</span> </div>`} </div> <h3 class="cr-esg__card-title" data-astro-cid-trdk4pam>${card.title}</h3> <p class="cr-esg__card-desc" data-astro-cid-trdk4pam>${card.desc}</p> </div>`)} </div> </div> </section>  <section class="cr-patents" data-astro-cid-trdk4pam> <div class="mnc" data-astro-cid-trdk4pam> <div class="cr-patents__head fade-up" data-astro-cid-trdk4pam> <h2 class="cr-patents__title" data-astro-cid-trdk4pam>Technical Patents</h2> <span class="cr-patents__badge" data-astro-cid-trdk4pam>Proprietary Innovations IP</span> </div> <div class="cr-patents__grid" data-astro-cid-trdk4pam> ${patents.map((p) => renderTemplate`<div class="cr-patent fade-up" data-astro-cid-trdk4pam> <span class="cr-patent__id" data-astro-cid-trdk4pam># ${p.id}</span> <div class="cr-patent__divider" data-astro-cid-trdk4pam></div> <h4 class="cr-patent__title" data-astro-cid-trdk4pam>${p.title}</h4> <p class="cr-patent__desc" data-astro-cid-trdk4pam>${p.desc}</p> </div>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-trdk4pam": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-trdk4pam": true })}` })} `;
}, "/home/tylr/global-modular-partners/src/pages/credentials.astro", void 0);

const $$file = "/home/tylr/global-modular-partners/src/pages/credentials.astro";
const $$url = "/credentials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Credentials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
