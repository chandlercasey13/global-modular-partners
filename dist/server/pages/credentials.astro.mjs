import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_KgPdRGIw.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Credentials = createComponent(($$result, $$props, $$slots) => {
  const licenseStates = ["California", "Hawaii", "Louisiana", "Nevada", "Guam"];
  const certifications = [
    {
      badge: "CAGE",
      fullName: "Commercial and Government Entity Code",
      description: "Registered CAGE code (1CHJ1) for SAM.gov visibility, contract vehicle eligibility, and standardized government entity identification."
    },
    {
      badge: "MBE",
      fullName: "Minority-Owned Small Business Enterprise",
      description: "Certified Minority-Owned, Small Business Enterprise status supporting diversity-focused procurement, set-aside contracting, and subcontracting goals."
    },
    {
      badge: "BONDING",
      fullName: "$25M Single / $50M Aggregate Bonding",
      description: "Bonding capacity of $25M per single project and $50M aggregate through Marsh USA Inc., ensuring financial assurance for large-scale programs."
    },
    {
      badge: "CLASS A",
      fullName: "General Engineering Contractor",
      description: "California Class A General Engineering Contractor license enabling infrastructure, site work, and heavy civil construction across the state."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Credentials & Licenses", "description": "CAGE-registered, MBE-certified, Class A licensed, and bonded up to $50M aggregate \u2014 multi-state contractor credentials for procurement and compliance teams.", "data-astro-cid-trdk4pam": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="hero-wrap" data-astro-cid-trdk4pam> <div class="hero-inner" data-astro-cid-trdk4pam> <div class="hero-content" data-astro-cid-trdk4pam> <nav class="breadcrumb" aria-label="Breadcrumb" data-astro-cid-trdk4pam> <a href="/" data-astro-cid-trdk4pam>Home</a> <span class="breadcrumb__sep" data-astro-cid-trdk4pam>/</span> <span data-astro-cid-trdk4pam>Credentials</span> </nav> <h1 class="hero-title" data-astro-cid-trdk4pam>Credentials &<br data-astro-cid-trdk4pam><span class="hero-span" data-astro-cid-trdk4pam>Licenses</span></h1> <p class="hero-sub" data-astro-cid-trdk4pam>Verified credentials, compliance standards, and industry certifications that back every project we deliver.</p> </div> </div> </section>  <section class="cert-intro section-gap" data-astro-cid-trdk4pam> <div class="mnc-container" data-astro-cid-trdk4pam> <div class="cert-intro__head" data-astro-cid-trdk4pam> <span class="section-tag" data-astro-cid-trdk4pam>Commitment</span> <h2 class="section-title" data-astro-cid-trdk4pam>Excellence you <span class="section-span" data-astro-cid-trdk4pam>can verify with confidence</span></h2> </div> <div class="cert-intro__copy" data-astro-cid-trdk4pam> <p data-astro-cid-trdk4pam>
Global Modular Partners invests in certifications, registrations, and state licensing so
          procurement officers, compliance teams, and partners can move forward with confidence.
          Our documentation is maintained for audits, RFP responses, and prime-subcontractor
          workflows.
</p> <p data-astro-cid-trdk4pam>
From federal small-business programs to multi-state contractor authority and
          bonding capacity, we align operations with the standards your stakeholders expect.
</p> </div> </div> </section>  <section id="credentials" class="cert-creds section-gap" data-astro-cid-trdk4pam> <div class="mnc-container" data-astro-cid-trdk4pam> <div class="cert-creds__head" data-astro-cid-trdk4pam> <span class="section-tag" data-astro-cid-trdk4pam>Credentials</span> <h2 class="section-title" data-astro-cid-trdk4pam>Certifications & <span class="section-span" data-astro-cid-trdk4pam>registrations we maintain</span></h2> </div> <div class="cert-creds__grid" data-astro-cid-trdk4pam> ${certifications.map((cert) => renderTemplate`<article class="cc" data-astro-cid-trdk4pam> <span class="cc__badge" data-astro-cid-trdk4pam>${cert.badge}</span> <h3 class="cc__name" data-astro-cid-trdk4pam>${cert.fullName}</h3> <p class="cc__desc" data-astro-cid-trdk4pam>${cert.description}</p> </article>`)} </div> </div> </section>  <section class="lic-section section-gap" data-astro-cid-trdk4pam> <div class="mnc-container" data-astro-cid-trdk4pam> <div class="lic-head" data-astro-cid-trdk4pam> <span class="section-tag" data-astro-cid-trdk4pam>Licenses</span> <h2 class="section-title" data-astro-cid-trdk4pam>State contractor <span class="section-span" data-astro-cid-trdk4pam>licenses across key markets</span></h2> <p class="lic-lede" data-astro-cid-trdk4pam>
Active licensing across key Western markets supports regional programs, public works, and
          cross-border logistics for modular deployment.
</p> </div> <div class="lic-pills" data-astro-cid-trdk4pam> ${licenseStates.map((state) => renderTemplate`<span class="lic-pill" data-astro-cid-trdk4pam>${state}</span>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-trdk4pam": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-trdk4pam": true })}` })} `;
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
