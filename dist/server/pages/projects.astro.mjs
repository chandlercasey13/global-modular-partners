import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_D4pnhjZk.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const sectors = [
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 21h18M3 7v14m6-14v14m6-14v14m6-14v14M4 7h16l-8-4L4 7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "Residential",
      desc: "High-density urban housing modules with integrated mechanical system provisions.",
      stats: [
        { label: "Cycle Time Reduction", value: "~45%" },
        { label: "Units Delivered", value: "12,400+" }
      ]
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "Healthcare",
      desc: "Clinical-grade modular units for rapid deployment of surgical suites and diagnostics.",
      stats: [
        { label: "Compliance Uptime", value: "99.9%" },
        { label: "Facilities", value: "184" }
      ]
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M13 16V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1ZM13 8h5l3 3v5a1 1 0 0 1-1 1h-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="18.5" r="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="18.5" r="1.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
      title: "Logistics",
      desc: "Heavy-duty distribution modules for automating hubs and transit zones.",
      stats: [
        { label: "Operational Uptime", value: "99.98%" },
        { label: "Total Footprint", value: "2.4M ft\xB2" }
      ]
    },
    {
      icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "Strategic",
      desc: "Classified government and defense facility infrastructure solutions.",
      stats: [
        { label: "Response Time", value: "72 hrs" },
        { label: "Active Regions", value: "12 Regions" }
      ]
    }
  ];
  const featured = {
    tag: "Case Study 01",
    title: "The Meridian Heights Assembly",
    location: "Odessa, TX",
    duration: "18 Weeks",
    desc: "A 120-unit residential modular tower utilizing our proprietary partnership framework \u2014 collaborating with 4 independent specialized contractors. Precision logistics integration reduced on-site waste by 45%. Achieving a 33% reduction in carbon footprint compared to traditional RC casting."
  };
  const projects = [
    {
      tag: "Project / Residential",
      title: "West Modular Blvd Complex",
      desc: "Modular-type scalable data center facility optimized for natural thermal regulation.",
      img: "/images/showcase/west-blvd-render.jpg"
    },
    {
      tag: "Project / Defense",
      title: "Forward Operations Compound",
      desc: "Rapid deployment of 200,000 sf of facilities across demanding operational conditions.",
      img: "/images/showcase/ri-defense.jpg"
    },
    {
      tag: "Project / Healthcare",
      title: "St. Jude Medical Wing",
      desc: "Integrated surgical-grade modular modules delivered within a live hospital operational environment.",
      img: "/images/showcase/hwb-clinic-interior.jpeg"
    }
  ];
  const bottomStats = [
    { value: "100%", label: "Mission-level tolerance control" },
    { value: "350+", label: "Structural modular innovations" },
    { value: "ISO", label: "9001, 14001, 45001 Verified" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "description": "A comprehensive archive of modular delivery systems across international territories, emphasizing technical compliance and structural performance.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="pj-hero" data-astro-cid-aid3sr62> <div class="pj-hero__content" data-astro-cid-aid3sr62> <h1 class="pj-hero__h1" data-astro-cid-aid3sr62>Global Scale.<br data-astro-cid-aid3sr62>Precision Delivery.</h1> <p class="pj-hero__sub" data-astro-cid-aid3sr62>
A comprehensive archive of modular delivery systems across international territories, emphasizing technical compliance and structural performance.
</p> </div> </section>  <section class="pj-sectors" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-sectors__head fade-up" data-astro-cid-aid3sr62> <div data-astro-cid-aid3sr62> <h2 class="pj-sectors__title" data-astro-cid-aid3sr62>Sector Capabilities & Performance</h2> <p class="pj-sectors__sub" data-astro-cid-aid3sr62>
Quantifying our impact across high-stakes industries. Each sector represents a specialized modular methodology optimized for speed, precision, and lifecycle efficiency.
</p> </div> <div class="pj-sectors__badge" data-astro-cid-aid3sr62> <span class="pj-sectors__badge-label" data-astro-cid-aid3sr62>ISO 9001-2024</span> </div> </div> <div class="pj-sectors__grid" data-astro-cid-aid3sr62> ${sectors.map((s) => renderTemplate`<div class="pj-sector fade-up" data-astro-cid-aid3sr62> <div class="pj-sector__icon" data-astro-cid-aid3sr62>${unescapeHTML(s.icon)}</div> <h3 class="pj-sector__title" data-astro-cid-aid3sr62>${s.title}</h3> <p class="pj-sector__desc" data-astro-cid-aid3sr62>${s.desc}</p> <div class="pj-sector__stats" data-astro-cid-aid3sr62> ${s.stats.map((st) => renderTemplate`<div class="pj-sector__stat" data-astro-cid-aid3sr62> <span class="pj-sector__stat-label" data-astro-cid-aid3sr62>${st.label}</span> <span class="pj-sector__stat-value" data-astro-cid-aid3sr62>${st.value}</span> </div>`)} </div> </div>`)} </div> </div> </section>  <section class="pj-featured-img" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-featured-img__wrap fade-up" data-astro-cid-aid3sr62> <img src="/images/showcase/west-factory.jpg" alt="Factory interior" loading="lazy" data-astro-cid-aid3sr62> <div class="pj-featured-img__card" data-astro-cid-aid3sr62> <h4 class="pj-featured-img__card-title" data-astro-cid-aid3sr62>■ Digital Archive</h4> <div class="pj-featured-img__card-rows" data-astro-cid-aid3sr62> <div class="pj-featured-img__card-row" data-astro-cid-aid3sr62> <span data-astro-cid-aid3sr62>Total Active Files</span> <span class="pj-featured-img__card-val" data-astro-cid-aid3sr62>408</span> </div> <div class="pj-featured-img__card-row" data-astro-cid-aid3sr62> <span data-astro-cid-aid3sr62>Compliance Level</span> <span class="pj-featured-img__card-val pj-featured-img__card-val--green" data-astro-cid-aid3sr62>7,038 ↓</span> </div> <div class="pj-featured-img__card-row" data-astro-cid-aid3sr62> <span data-astro-cid-aid3sr62>Energy Efficiency</span> <span class="pj-featured-img__card-val pj-featured-img__card-val--green" data-astro-cid-aid3sr62>A+++</span> </div> </div> </div> </div> </div> </section>  <section class="pj-case" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-case__layout fade-up" data-astro-cid-aid3sr62> <div class="pj-case__left" data-astro-cid-aid3sr62> <span class="pj-tag" data-astro-cid-aid3sr62>${featured.tag}</span> <h2 class="pj-case__title" data-astro-cid-aid3sr62>${featured.title} · <span class="pj-case__location" data-astro-cid-aid3sr62>${featured.location}</span></h2> <span class="pj-case__duration" data-astro-cid-aid3sr62>${featured.duration}</span> <p class="pj-case__desc" data-astro-cid-aid3sr62>${featured.desc}</p> </div> <div class="pj-case__right" data-astro-cid-aid3sr62> <div class="pj-case__accent-card" data-astro-cid-aid3sr62> <h4 class="pj-case__accent-title" data-astro-cid-aid3sr62>Innovation Lead</h4> <p class="pj-case__accent-desc" data-astro-cid-aid3sr62>Our R&D department has recently completed a testing phase for 100% recyclable partition composite materials for early industrial deployment.</p> </div> </div> </div> </div> </section>  <section class="pj-grid-section" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-grid" data-astro-cid-aid3sr62> ${projects.map((p) => renderTemplate`<article class="pj-card fade-up" data-astro-cid-aid3sr62> <div class="pj-card__img-wrap" data-astro-cid-aid3sr62> <img${addAttribute(p.img, "src")}${addAttribute(p.title, "alt")} loading="lazy" data-astro-cid-aid3sr62> </div> <div class="pj-card__body" data-astro-cid-aid3sr62> <span class="pj-card__tag" data-astro-cid-aid3sr62>${p.tag}</span> <h3 class="pj-card__title" data-astro-cid-aid3sr62>${p.title}</h3> <p class="pj-card__desc" data-astro-cid-aid3sr62>${p.desc}</p> </div> </article>`)} </div> </div> </section>  <section class="pj-stats" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-stats__grid" data-astro-cid-aid3sr62> ${bottomStats.map((s) => renderTemplate`<div class="pj-stats__item" data-astro-cid-aid3sr62> <span class="pj-stats__num" data-astro-cid-aid3sr62>${s.value}</span> <span class="pj-stats__label" data-astro-cid-aid3sr62>${s.label}</span> </div>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-aid3sr62": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-aid3sr62": true })}` })} `;
}, "/home/tylr/global-modular-partners/src/pages/projects.astro", void 0);

const $$file = "/home/tylr/global-modular-partners/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
