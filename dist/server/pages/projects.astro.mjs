import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Q4DG1CQy.mjs';
import { $ as $$PageCTA } from '../chunks/PageCTA_CgFyJN7i.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
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
      img: "/images/showcase/ri-defense-base.png"
    },
    {
      tag: "Project / Healthcare",
      title: "St. Jude Medical Wing",
      desc: "Integrated surgical-grade modular modules delivered within a live hospital operational environment.",
      img: "/images/showcase/hwb-clinic-interior.jpeg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "description": "A comprehensive archive of modular delivery systems across international territories, emphasizing technical compliance and structural performance.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="pj-hero" data-astro-cid-aid3sr62> <div class="pj-hero__panel" data-astro-cid-aid3sr62> <canvas id="projects-hero-3d" class="pj-hero__canvas" aria-hidden="true" data-astro-cid-aid3sr62></canvas> <span class="pj-hero__canvas-tag" aria-hidden="true" data-astro-cid-aid3sr62>Module in Transit</span> <div class="pj-hero__content" data-astro-cid-aid3sr62> <h1 class="pj-hero__h1" data-astro-cid-aid3sr62>Global Scale.<br data-astro-cid-aid3sr62>Precision Delivery.</h1> <p class="pj-hero__sub" data-astro-cid-aid3sr62>
A comprehensive archive of modular delivery systems across international territories, emphasizing technical compliance and structural performance.
</p> </div> </div> </section>  <section class="pj-case" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-case__layout fade-up" data-astro-cid-aid3sr62> <div class="pj-case__left" data-astro-cid-aid3sr62> <span class="pj-tag" data-astro-cid-aid3sr62>${featured.tag}</span> <h2 class="pj-case__title" data-astro-cid-aid3sr62>${featured.title} · <span class="pj-case__location" data-astro-cid-aid3sr62>${featured.location}</span></h2> <span class="pj-case__duration" data-astro-cid-aid3sr62>${featured.duration}</span> <p class="pj-case__desc" data-astro-cid-aid3sr62>${featured.desc}</p> </div> </div> </div> </section>  <section class="pj-featured-img" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-featured-img__wrap fade-up" data-astro-cid-aid3sr62> <img src="/images/showcase/ri-civil-compound-aerial.png" alt="Modular civil compound" loading="lazy" data-astro-cid-aid3sr62> <div class="pj-featured-img__card" data-astro-cid-aid3sr62> <h4 class="pj-featured-img__card-title" data-astro-cid-aid3sr62>■ Digital Archive</h4> <div class="pj-featured-img__card-rows" data-astro-cid-aid3sr62> <div class="pj-featured-img__card-row" data-astro-cid-aid3sr62> <span data-astro-cid-aid3sr62>Total Active Files</span> <span class="pj-featured-img__card-val" data-astro-cid-aid3sr62>408</span> </div> <div class="pj-featured-img__card-row" data-astro-cid-aid3sr62> <span data-astro-cid-aid3sr62>Compliance Level</span> <span class="pj-featured-img__card-val pj-featured-img__card-val--green" data-astro-cid-aid3sr62>7,038 ↓</span> </div> <div class="pj-featured-img__card-row" data-astro-cid-aid3sr62> <span data-astro-cid-aid3sr62>Energy Efficiency</span> <span class="pj-featured-img__card-val pj-featured-img__card-val--green" data-astro-cid-aid3sr62>A+++</span> </div> </div> </div> </div> </div> </section>  <section class="pj-grid-section" data-astro-cid-aid3sr62> <div class="mnc" data-astro-cid-aid3sr62> <div class="pj-grid" data-astro-cid-aid3sr62> ${projects.map((p) => renderTemplate`<article class="pj-card fade-up" data-astro-cid-aid3sr62> <div class="pj-card__img-wrap" data-astro-cid-aid3sr62> <img${addAttribute(p.img, "src")}${addAttribute(p.title, "alt")} loading="lazy" data-astro-cid-aid3sr62> </div> <div class="pj-card__body" data-astro-cid-aid3sr62> <span class="pj-card__tag" data-astro-cid-aid3sr62>${p.tag}</span> <h3 class="pj-card__title" data-astro-cid-aid3sr62>${p.title}</h3> <p class="pj-card__desc" data-astro-cid-aid3sr62>${p.desc}</p> </div> </article>`)} </div> </div> </section> ${renderComponent($$result2, "PageCTA", $$PageCTA, { "eyebrow": "How it gets made", "title": "Curious how these projects<br/>actually come together?", "image": "/images/showcase/ri-factory-production.jpg", "links": [
    { label: "Our Services", href: "/services" },
    { label: "About GMP", href: "/about" }
  ], "data-astro-cid-aid3sr62": true })} ${renderScript($$result2, "/Users/chandlercasey/SWE/global-modular-partners/src/pages/projects.astro?astro&type=script&index=0&lang.ts")}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-aid3sr62": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-aid3sr62": true })}` })} `;
}, "/Users/chandlercasey/SWE/global-modular-partners/src/pages/projects.astro", void 0);

const $$file = "/Users/chandlercasey/SWE/global-modular-partners/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
