import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_DDZiRHkW.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B_UoUL-S.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/tylr/global-modular-partners/","cacheDir":"file:///home/tylr/global-modular-partners/node_modules/.astro/","outDir":"file:///home/tylr/global-modular-partners/dist/","srcDir":"file:///home/tylr/global-modular-partners/src/","publicDir":"file:///home/tylr/global-modular-partners/public/","buildClientDir":"file:///home/tylr/global-modular-partners/dist/client/","buildServerDir":"file:///home/tylr/global-modular-partners/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/index.DVHqdvqE.css"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/contact.DZZQZ2Fg.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/index.Cu1j9qmC.css"}],"routeData":{"route":"/departments","isIndex":true,"type":"page","pattern":"^\\/departments$","segments":[[{"content":"departments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/departments/index.astro","pathname":"/departments","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/news.DZ2alzw1.css"}],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/partners.CUxFXHkw.css"}],"routeData":{"route":"/partners","isIndex":false,"type":"page","pattern":"^\\/partners$","segments":[[{"content":"partners","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/partners.astro","pathname":"/partners","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/projects.xRGVj4ci.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/services.B3zZInwp.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CSP_ROGL.css"},{"type":"external","src":"/_astro/index.DiOtQz3N.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://www.swecontractinggroup.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/home/tylr/global-modular-partners/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/departments/index.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/news.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/partners.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/home/tylr/global-modular-partners/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/departments/index@_@astro":"pages/departments.astro.mjs","\u0000@astro-page:src/pages/news@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/partners@_@astro":"pages/partners.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Q1TZ7H8e.mjs","/home/tylr/global-modular-partners/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/tylr/global-modular-partners/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Blt3zMkO.mjs","/home/tylr/global-modular-partners/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BK3XF-CA.js","/home/tylr/global-modular-partners/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BeNV3FXU.js","/home/tylr/global-modular-partners/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.ZwEJD9xe.js","/home/tylr/global-modular-partners/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.DrdG60I1.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/tylr/global-modular-partners/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const r=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&i.target.classList.add(\"visible\")})},{threshold:.1,rootMargin:\"0px 0px -40px 0px\"});document.querySelectorAll(\".fade-up, .slide-in-left, .slide-in-right, .slide-in-up\").forEach(e=>r.observe(e));"],["/home/tylr/global-modular-partners/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"site-header\"),e=document.getElementById(\"hdr-hamburger\"),l=document.getElementById(\"mobile-menu\");e?.addEventListener(\"click\",()=>{e.classList.toggle(\"open\"),l?.classList.toggle(\"open\"),e.setAttribute(\"aria-expanded\",e.classList.contains(\"open\").toString())});function s(){window.scrollY>50?t?.classList.add(\"scrolled\"):t?.classList.remove(\"scrolled\")}s();window.addEventListener(\"scroll\",s,{passive:!0});"],["/home/tylr/global-modular-partners/src/components/Footer.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"ftr-gotop\");o&&o.addEventListener(\"click\",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:\"smooth\"})});"]],"assets":["/_astro/index.CSP_ROGL.css","/_astro/index.DVHqdvqE.css","/_astro/contact.DZZQZ2Fg.css","/_astro/index.Cu1j9qmC.css","/_astro/news.DZ2alzw1.css","/_astro/partners.CUxFXHkw.css","/_astro/projects.xRGVj4ci.css","/_astro/services.B3zZInwp.css","/_astro/index.DiOtQz3N.css","/favicon.svg","/_astro/index.astro_astro_type_script_index_0_lang.BK3XF-CA.js","/images/logo/globe-continents.svg","/images/logo/gmp-globe-white.svg","/images/logo/gmp-globe.svg","/images/logo/gmp-logo-final.png","/images/partners/abstract-arch.jpg","/images/partners/agbayani-real.png","/images/partners/agbayani.gif","/images/partners/agbayani.svg","/images/partners/atcco-big.png","/images/partners/atcco-full.png","/images/partners/atcco.png","/images/partners/atcco.svg","/images/partners/edis.png","/images/partners/entech.svg","/images/partners/hwb.svg","/images/partners/petra-eng.png","/images/partners/petralu-logo.jpg","/images/partners/proset-footer.png","/images/partners/proset-new.png","/images/partners/proset-tagline.png","/images/partners/proset.png","/images/partners/proset.svg","/images/partners/ri-group.png","/images/partners/stream-brandfetch.png","/images/partners/stream-dark.png","/images/partners/stream-dark.webp","/images/partners/stream-logistics.svg","/images/partners/stream-logistics.webp","/images/partners/stream-white.webp","/images/partners/true-north.svg","/images/partners/west-header.png","/images/partners/west-modular.png","/images/partners/west-modular.svg","/images/partners/west-og.png","/images/showcase/atcco-aerial.jpg","/images/showcase/atcco-project1.jpg","/images/showcase/atcco-project2.jpg","/images/showcase/edis-alarm-device.webp","/images/showcase/edis-automation-device.webp","/images/showcase/edis-banner.png","/images/showcase/edis-home-alarm.webp","/images/showcase/edis-mobile-app.webp","/images/showcase/hwb-clinic-interior.jpeg","/images/showcase/hwb-field-hospital.webp","/images/showcase/hwb-modular-pediatric.jpeg","/images/showcase/hwb-pediatric-egypt.jpeg","/images/showcase/hwb-ri-factory-visit.jpeg","/images/showcase/hwb-surgery-cutaway.png","/images/showcase/hwb-surgery-layout.webp","/images/showcase/hwb-teledoc.jpeg","/images/showcase/petra-hvac-facility.jpg","/images/showcase/petra-project1.jpg","/images/showcase/petra-project2.jpg","/images/showcase/petra-project3.jpg","/images/showcase/petra-project4.jpg","/images/showcase/ri-carabinieri-station.png","/images/showcase/ri-civil-compound-aerial.png","/images/showcase/ri-civil-compound.jpg","/images/showcase/ri-commercial-building.png","/images/showcase/ri-commercial.jpg","/images/showcase/ri-defense-base.png","/images/showcase/ri-defense.jpg","/images/showcase/ri-factory-panorama.jpg","/images/showcase/ri-factory-production.jpg","/images/showcase/ri-fire-corps-emergency.png","/images/showcase/ri-legacy-about.jpg","/images/showcase/ri-library-pavilion.png","/images/showcase/ri-medical-lab.jpg","/images/showcase/ri-medical-shelter.jpg","/images/showcase/ri-military-shelter-truck.png","/images/showcase/ri-modular-residential.png","/images/showcase/ri-modular-units.jpg","/images/showcase/ri-permanent-building-wide.png","/images/showcase/ri-permanent-building.jpg","/images/showcase/ri-police-station-mountain.png","/images/showcase/ri-residential-render.png","/images/showcase/ri-steel-frame-aerial.png","/images/showcase/ri-steel-frame-hills.png","/images/showcase/ri-un-modules-crane.png","/images/showcase/ri-un-modules-stacked.png","/images/showcase/ri-un-ship-logistics.png","/images/showcase/west-blvd-render.jpg","/images/showcase/west-crane.jpg","/images/showcase/west-factory.jpg","/images/showcase/west-interior.jpg","/images/showcase/west-modules.jpg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"zZ0SGmj2GJkg5Ewvs4eeUTkH5Jso94cunOwNpD5OInE=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/tylr/global-modular-partners/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
