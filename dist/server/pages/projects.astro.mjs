import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_jXZ2JPpt.mjs';
import { $ as $$PageCTA } from '../chunks/PageCTA_CgFyJN7i.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const caseStudies = [
    {
      tag: "HWB \xB7 Emergency Healthcare",
      title: "Gaza Clinic \u2014 Type I",
      desc: "Scalable modular field hospital delivering immediate clinical capacity where permanent infrastructure has been damaged or destroyed. The Type I configuration starts at 10 beds with a compact footprint that can be rapidly expanded, with integrated clinical and support spaces for emergency, inpatient, and outpatient care.",
      value: "10+ beds",
      location: "Gaza, Palestine",
      img: "/images/showcase/hwb-field-hospital.webp"
    },
    {
      tag: "HWB \xB7 Pediatric Infrastructure",
      title: "Sant'Anna Fuheis Children's Hospital",
      desc: "Purpose-built pediatric medical center in the Al-Balqa governorate, designed as a permanent children's hospital with multi-level clinical wings, naturally lit double-height atriums, dedicated play and rehabilitation areas, and landscaped courtyards \u2014 creating a child-friendly healing environment for pediatric populations across the region.",
      value: "Pediatric Permanent",
      location: "Fuheis, Jordan",
      img: "/images/showcase/hwb-modular-pediatric.jpeg"
    },
    {
      tag: "HWB \xB7 Genetics Research",
      title: "Genetics Laboratory \xB7 Bambino Ges\xF9 Di Cairo",
      desc: "Egypt's first specialized center for maternal and child genetic research and diagnosis, developed in partnership with Bambino Ges\xF9 Pediatric Hospital. Houses next-generation sequencing, a four-bed bone marrow transplant unit, and training programs \u2014 addressing high incidence of thalassemia, chromosomal syndromes, and hereditary metabolic disorders.",
      value: "Sponsor: Fraternity For Humanity",
      location: "Cairo, Egypt",
      img: "/images/showcase/hwb-pediatric-egypt.jpeg"
    },
    {
      tag: "HWB \xB7 Tribal Healthcare",
      title: "Project SAGE \u2014 Mobile Clinics for Tribal Communities",
      desc: "A multi-site national initiative (Sovereignty, Access, Growth, Equity) strengthening healthcare delivery across Tribal-serving communities. Deploys mobile clinical units alongside primary care, chronic disease management, and behavioral health services \u2014 integrating Tribal-controlled data sovereignty, workforce pipelines, and secure digital infrastructure.",
      value: "6 initial sites",
      location: "United States (Multi-Site)",
      img: "/images/showcase/hwb-teledoc.jpeg"
    },
    {
      tag: "RI Group \xB7 Defence Medical",
      title: "Field Hospital MTF ROLE 2B",
      desc: "Patented field hospital designed for use in areas of ongoing military operations, proven highly effective for emergency interventions and national disaster relief. Delivered to the Italian Ministry of Defence as a rapidly deployable ISO-standard system with full surgical and triage capacity.",
      value: "Italian Ministry of Defence",
      location: "Italy",
      img: "/images/showcase/ri-medical-shelter.jpg"
    },
    {
      tag: "RI Group \xB7 Biocontainment",
      title: "Biocontainment Unit \u2014 Italian Ministry of Defence",
      desc: "Patented, state-of-the-art container unit deployable as a stand-alone system or combined with other modular healthcare facilities to treat infectious diseases under full safety and containment protocols. Eight ISO 20-ft modules delivered with a three-day assembly envelope.",
      value: "8 \xD7 ISO 20\u2032 \xB7 3-day assembly",
      location: "Italy",
      img: "/images/showcase/hwb-surgery-cutaway.png"
    },
    {
      tag: "RI Group \xB7 Defence Compound",
      title: "Forward Military Compound",
      desc: "Full-scale modular military compound combining accommodation, offices, canteen, kitchen, laundry, ablution, armory, gate control, and technical plants. Integrates telescopic armored towers, Hesco bastion works, and surbunker shelters \u2014 engineered for rapid deployment in demanding operational environments.",
      value: "Turn-key deployment",
      location: "International Operations",
      img: "/images/showcase/ri-defense-base.png"
    },
    {
      tag: "RI Group \xB7 Civil Infrastructure",
      title: "Carabinieri Station & Police Infrastructure",
      desc: "Permanent modular police stations and civil government facilities delivered across Italian and international sites. Buildings meet full seismic and permanent-use structural standards while compressing project timelines through factory-controlled production and pre-fitted MEP systems.",
      value: "Permanent Structure",
      location: "Italy",
      img: "/images/showcase/ri-carabinieri-station.png"
    },
    {
      tag: "RI Group \xB7 Civil Compound",
      title: "Civil Compound \u2014 Commercial & Government",
      desc: "Multi-building modular compound delivering government administrative space, commercial floors, and support infrastructure within a single coordinated site. Steel-frame modular construction delivers permanent-grade aesthetics while cutting on-site construction time against conventional build.",
      value: "Multi-block delivery",
      location: "Mediterranean Basin",
      img: "/images/showcase/ri-civil-compound-aerial.png"
    },
    {
      tag: "RI Group \xB7 Residential",
      title: "Permanent Modular Residential Development",
      desc: "Permanent residential buildings delivered through RI Group's modular building system \u2014 structurally engineered for long service life with full thermal, acoustic, and finish performance equivalent to conventional construction. Planned, fabricated, and delivered through a single coordinated program.",
      value: "Permanent Residential",
      location: "Italy",
      img: "/images/showcase/ri-permanent-building-wide.png"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "description": "A comprehensive archive of modular delivery systems across international territories, emphasizing technical compliance and structural performance.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="pj-hero" data-astro-cid-aid3sr62> <div class="pj-hero__panel" data-astro-cid-aid3sr62> <canvas id="projects-hero-3d" class="pj-hero__canvas" aria-hidden="true" data-astro-cid-aid3sr62></canvas> <span class="pj-hero__canvas-tag" aria-hidden="true" data-astro-cid-aid3sr62>Module in Transit</span> <div class="pj-hero__content" data-astro-cid-aid3sr62> <h1 class="pj-hero__h1" data-astro-cid-aid3sr62>Global Scale.<br data-astro-cid-aid3sr62>Precision Delivery.</h1> <p class="pj-hero__sub" data-astro-cid-aid3sr62>
A comprehensive archive of modular delivery systems across international territories, emphasizing technical compliance and structural performance.
</p> </div> </div> </section>  <section class="pt-cases" data-astro-cid-aid3sr62> <div class="mnc-container" data-astro-cid-aid3sr62> <div class="pt-cases__head fade-up" data-astro-cid-aid3sr62> <span class="pt-tag" data-astro-cid-aid3sr62>Portfolio</span> <h2 class="pt-cases__title" data-astro-cid-aid3sr62>Project delivery through the GMP alliance</h2> <p class="pt-cases__sub" data-astro-cid-aid3sr62>
Selected projects delivered through Global Modular Partners' affiliated entities —
          Hospitals Without Borders and RI Group — spanning deployable healthcare,
          defence infrastructure, and permanent civil and residential construction.
</p> </div> <div class="pt-cases__grid" data-astro-cid-aid3sr62> ${caseStudies.map((cs) => renderTemplate`<article class="pt-case fade-up" data-astro-cid-aid3sr62> <div class="pt-case__img-wrap" data-astro-cid-aid3sr62> <img${addAttribute(cs.img, "src")}${addAttribute(cs.title, "alt")} class="pt-case__img" loading="lazy" data-astro-cid-aid3sr62> <span class="pt-case__img-tag" data-astro-cid-aid3sr62>${cs.tag}</span> </div> <h3 class="pt-case__title" data-astro-cid-aid3sr62>${cs.title}</h3> <p class="pt-case__desc" data-astro-cid-aid3sr62>${cs.desc}</p> ${(cs.value || cs.location) && renderTemplate`<div class="pt-case__meta" data-astro-cid-aid3sr62> ${cs.value && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Project Value:</strong> ${cs.value}</span>`} ${cs.location && renderTemplate`<span class="pt-case__meta-item" data-astro-cid-aid3sr62><strong data-astro-cid-aid3sr62>Location:</strong> ${cs.location}</span>`} </div>`} </article>`)} </div> </div> </section> ${renderComponent($$result2, "PageCTA", $$PageCTA, { "eyebrow": "How it gets made", "title": "Curious how these projects<br/>actually come together?", "image": "/images/showcase/ri-factory-production.jpg", "links": [
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
