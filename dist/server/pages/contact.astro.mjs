import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DDZiRHkW.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BIMeXlt4.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const topics = [
    "General Inquiry",
    "DoD/Government",
    "Healthcare",
    "Modular Construction",
    "Civil",
    "Partnership",
    "RFP/Bid Submission"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "description": "Contact Global Modular Partners \u2014 inquiries, partnerships, and RFP submissions.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["   ", '<section class="hero-wrap" data-astro-cid-uw5kdbxl> <div class="hero-inner" data-astro-cid-uw5kdbxl> <div class="hero-content" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Contact<br data-astro-cid-uw5kdbxl>Information</h1> <p class="hero-subtitle" data-astro-cid-uw5kdbxl>\nFor inquiries, partnerships, and RFP submissions.\n</p> </div> </div> </section>  <section id="form" class="form-section section-gap" data-astro-cid-uw5kdbxl> <div class="mnc-container" data-astro-cid-uw5kdbxl> <div class="form-grid" data-astro-cid-uw5kdbxl> <!-- Left: Form Card --> <div class="form-card" data-astro-cid-uw5kdbxl> <div class="form-card__head" data-astro-cid-uw5kdbxl> <h2 class="section-title form-card__title" data-astro-cid-uw5kdbxl>Send us a <span class="section-span" data-astro-cid-uw5kdbxl>message</span></h2> <p class="form-card__subtitle" data-astro-cid-uw5kdbxl>Share a few details and our team will respond promptly.</p> </div> <form class="contact-form" name="contact" method="post" data-astro-cid-uw5kdbxl> <div class="contact-form__row" data-astro-cid-uw5kdbxl> <div class="contact-form__field" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl>Full Name <span class="req" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="name" name="name" required autocomplete="name" placeholder="Jane Doe" data-astro-cid-uw5kdbxl> </div> <div class="contact-form__field" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Email <span class="req" data-astro-cid-uw5kdbxl>*</span></label> <input type="email" id="email" name="email" required autocomplete="email" placeholder="you@company.com" data-astro-cid-uw5kdbxl> </div> </div> <div class="contact-form__row" data-astro-cid-uw5kdbxl> <div class="contact-form__field" data-astro-cid-uw5kdbxl> <label for="phone" data-astro-cid-uw5kdbxl>Phone</label> <input type="tel" id="phone" name="phone" autocomplete="tel" placeholder="(555) 000-0000" data-astro-cid-uw5kdbxl> </div> <div class="contact-form__field" data-astro-cid-uw5kdbxl> <label for="company" data-astro-cid-uw5kdbxl>Company</label> <input type="text" id="company" name="company" autocomplete="organization" placeholder="Organization name" data-astro-cid-uw5kdbxl> </div> </div> <div class="contact-form__field" data-astro-cid-uw5kdbxl> <label for="topic" data-astro-cid-uw5kdbxl>Topic <span class="req" data-astro-cid-uw5kdbxl>*</span></label> <div class="contact-form__select-wrap" data-astro-cid-uw5kdbxl> <select id="topic" name="topic" required data-astro-cid-uw5kdbxl> <option value="" disabled selected data-astro-cid-uw5kdbxl>Select a topic</option> ', ` </select> </div> </div> <div class="contact-form__field" data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Message <span class="req" data-astro-cid-uw5kdbxl>*</span></label> <textarea id="message" name="message" rows="6" required placeholder="How can we help?" data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="mnc-btn mnc-btn--dark contact-form__submit" data-astro-cid-uw5kdbxl> <span class="mnc-btn__wrap" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>Send message</span> <span class="mnc-btn__icon" data-astro-cid-uw5kdbxl><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-uw5kdbxl><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-uw5kdbxl></path></svg></span> </span> </button> </form> </div> <!-- Right: Info Cards --> <aside class="info-aside" aria-label="Contact information" data-astro-cid-uw5kdbxl> <div class="info-card" data-astro-cid-uw5kdbxl> <div class="info-card__icon" aria-hidden="true" data-astro-cid-uw5kdbxl> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-astro-cid-uw5kdbxl> <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uw5kdbxl></path> <circle cx="12" cy="10" r="3" data-astro-cid-uw5kdbxl></circle> </svg> </div> <h3 class="info-card__title" data-astro-cid-uw5kdbxl>Main Office</h3> <address class="info-card__body" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>Global Modular Partners, LLC</p> <p data-astro-cid-uw5kdbxl>Headquarters \u2014 San Francisco Bay Area</p> <p data-astro-cid-uw5kdbxl>Oakland, CA 94612</p> </address> </div> <div class="info-card" data-astro-cid-uw5kdbxl> <div class="info-card__icon" aria-hidden="true" data-astro-cid-uw5kdbxl> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-astro-cid-uw5kdbxl> <path d="M4 4h16v16H4z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uw5kdbxl></path> <path d="M4 8l8 5 8-5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uw5kdbxl></path> </svg> </div> <h3 class="info-card__title" data-astro-cid-uw5kdbxl>Email</h3> <p class="info-card__body" data-astro-cid-uw5kdbxl> <a href="mailto:info@globalmodularpartners.com" data-astro-cid-uw5kdbxl>info@globalmodularpartners.com</a> </p> </div> <div class="info-card" data-astro-cid-uw5kdbxl> <div class="info-card__icon" aria-hidden="true" data-astro-cid-uw5kdbxl> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" data-astro-cid-uw5kdbxl> <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uw5kdbxl></path> <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uw5kdbxl></path> </svg> </div> <h3 class="info-card__title" data-astro-cid-uw5kdbxl>Quick Links</h3> <ul class="info-card__links" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl><a href="/partners" data-astro-cid-uw5kdbxl>Become a Partner</a></li> <li data-astro-cid-uw5kdbxl><a href="/credentials" data-astro-cid-uw5kdbxl>Credentials</a></li> <li data-astro-cid-uw5kdbxl><a href="/departments#modular" data-astro-cid-uw5kdbxl>Modular Construction</a></li> <li data-astro-cid-uw5kdbxl><a href="/services" data-astro-cid-uw5kdbxl>Services</a></li> </ul> </div> </aside> </div> </div> </section>  <section class="hq-section" data-astro-cid-uw5kdbxl> <div class="mnc-container" data-astro-cid-uw5kdbxl> <div class="hq-layout" data-astro-cid-uw5kdbxl> <div class="hq-info fade-up" data-astro-cid-uw5kdbxl> <h2 class="hq-title" data-astro-cid-uw5kdbxl>Global Headquarters</h2> <div class="hq-divider" data-astro-cid-uw5kdbxl></div> <div class="hq-detail" data-astro-cid-uw5kdbxl> <span class="hq-label" data-astro-cid-uw5kdbxl>Primary Hub</span> <p class="hq-address" data-astro-cid-uw5kdbxl>San Francisco Bay Area<br data-astro-cid-uw5kdbxl>Oakland, CA 94612<br data-astro-cid-uw5kdbxl>United States</p> </div> <div class="hq-detail" data-astro-cid-uw5kdbxl> <span class="hq-label" data-astro-cid-uw5kdbxl>Direct Line</span> <p class="hq-phone" data-astro-cid-uw5kdbxl>+1 (510) 555-0198</p> </div> </div> <div class="hq-map-wrap fade-up" data-astro-cid-uw5kdbxl> <div id="hq-map" class="hq-map" data-astro-cid-uw5kdbxl></div> </div> </div> </div> </section>  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script> <script>
    document.addEventListener('DOMContentLoaded', function() {
      var map = L.map('hq-map', {
        center: [37.8044, -122.2711],
        zoom: 13,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      var icon = L.divIcon({
        html: '<div style="width:14px;height:14px;background:#1e3a66;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.3);"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        className: '',
      });

      L.marker([37.8044, -122.2711], { icon: icon }).addTo(map);
    });
  <\/script> `])), maybeRenderHead(), topics.map((topic) => renderTemplate`<option${addAttribute(topic, "value")} data-astro-cid-uw5kdbxl>${topic}</option>`)), "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-uw5kdbxl": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-uw5kdbxl": true })}` })} `;
}, "/home/tylr/global-modular-partners/src/pages/contact.astro", void 0);

const $$file = "/home/tylr/global-modular-partners/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
