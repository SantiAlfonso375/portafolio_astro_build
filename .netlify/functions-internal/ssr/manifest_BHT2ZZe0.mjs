import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CblPQFzJ.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    isIndex: rawRouteData.isIndex
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"},{"type":"inline","content":".fondo[data-astro-cid-rl3p5zqh]{background:#575757;background:radial-gradient(circle,#575757,#03030300 40%)}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/Projects\\/?$","segments":[[{"content":"Projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Projects.astro","pathname":"/Projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"},{"type":"external","src":"/_astro/About.R46HhB3x.css"}],"routeData":{"route":"/sections/about","isIndex":false,"type":"page","pattern":"^\\/sections\\/About\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"About","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/About.astro","pathname":"/sections/About","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"},{"type":"inline","content":".luz[data-astro-cid-b2wsbre2]{background-position:right;background:#57575700;background:radial-gradient(circle,#575757,#03030300 53%)}svg[data-astro-cid-b2wsbre2]{fill:red}\n"}],"routeData":{"route":"/sections/contact","isIndex":false,"type":"page","pattern":"^\\/sections\\/Contact\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Contact.astro","pathname":"/sections/Contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"}],"routeData":{"route":"/sections/footer","isIndex":false,"type":"page","pattern":"^\\/sections\\/Footer\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Footer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Footer.astro","pathname":"/sections/Footer","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"},{"type":"external","src":"/_astro/Header.BFDaKjMV.css"}],"routeData":{"route":"/sections/header","isIndex":false,"type":"page","pattern":"^\\/sections\\/Header\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Header","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Header.astro","pathname":"/sections/Header","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"},{"type":"inline","content":".fondo-stack[data-astro-cid-zongyrak]{background:#575757;background:radial-gradient(circle,#575757 1%,#030303f1 45%)}\n"}],"routeData":{"route":"/sections/stack","isIndex":false,"type":"page","pattern":"^\\/sections\\/Stack\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Stack","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Stack.astro","pathname":"/sections/Stack","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-cyrillic-ext-wght-normal.f7eF65bT.woff2) format(\"woff2-variations\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-cyrillic-wght-normal.Cw00GhOR.woff2) format(\"woff2-variations\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-greek-ext-wght-normal.Cs5KUPhG.woff2) format(\"woff2-variations\");unicode-range:U+1F00-1FFF}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-greek-wght-normal.CtQ6sbau.woff2) format(\"woff2-variations\");unicode-range:U+0370-03FF}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-hebrew-wght-normal.DrVQLkKb.woff2) format(\"woff2-variations\");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-math-wght-normal.cwLdES2L.woff2) format(\"woff2-variations\")}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-symbols-wght-normal.C2QAFfGS.woff2) format(\"woff2-variations\")}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-vietnamese-wght-normal.0eckKRMD.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-latin-ext-wght-normal.CrpOxvfM.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Open Sans Variable;font-style:normal;font-display:swap;font-weight:300 800;src:url(/_astro/open-sans-latin-wght-normal.CYuRH5ug.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}html{font-family:Open Sans Variable,sans-serif;background:#030303;color:azure;background-size:224px;overflow-x:hidden;scroll-behavior:smooth}\n"},{"type":"external","src":"/_astro/Projects.BaKvbYfr.css"},{"type":"external","src":"/_astro/About.R46HhB3x.css"},{"type":"external","src":"/_astro/Header.BFDaKjMV.css"},{"type":"inline","content":".fondo[data-astro-cid-rl3p5zqh]{background:#575757;background:radial-gradient(circle,#575757,#03030300 40%)}\n.luz[data-astro-cid-b2wsbre2]{background-position:right;background:#57575700;background:radial-gradient(circle,#575757,#03030300 53%)}svg[data-astro-cid-b2wsbre2]{fill:red}\n.fondo-stack[data-astro-cid-zongyrak]{background:#575757;background:radial-gradient(circle,#575757 1%,#030303f1 45%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/sections/About.astro":"chunks/pages/About_BoRTHL73.mjs","/src/pages/sections/Contact.astro":"chunks/pages/Contact_BaglO2oJ.mjs","/src/pages/sections/Footer.astro":"chunks/pages/Footer_CnnLlRGf.mjs","/src/pages/sections/Header.astro":"chunks/pages/Header_DJ2LM8rL.mjs","/src/pages/Projects.astro":"chunks/pages/Projects_DYhJNizv.mjs","/src/pages/sections/Stack.astro":"chunks/pages/Stack_CxwluwMx.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Dp2RGzC9.mjs","/src/pages/index.astro":"chunks/pages/index_Bm7KEUHd.mjs","\u0000@astrojs-manifest":"manifest_BHT2ZZe0.mjs","/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Hb05nn4I.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_nsYGP8Ii.mjs","\u0000@astro-page:src/pages/Projects@_@astro":"chunks/Projects_ChigegKz.mjs","\u0000@astro-page:src/pages/sections/About@_@astro":"chunks/About_rXPIFkqh.mjs","\u0000@astro-page:src/pages/sections/Contact@_@astro":"chunks/Contact_Ceyk5fUk.mjs","\u0000@astro-page:src/pages/sections/Footer@_@astro":"chunks/Footer_39oL8EJQ.mjs","\u0000@astro-page:src/pages/sections/Header@_@astro":"chunks/Header_Bt9P8bPy.mjs","\u0000@astro-page:src/pages/sections/Stack@_@astro":"chunks/Stack_CgbsX3VD.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Ki63iHRV.mjs","/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/components/Buttom_nav":"_astro/Buttom_nav.Bn3QgoEy.js","@astrojs/react/client.js":"_astro/client.D9Vng9vH.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/open-sans-greek-ext-wght-normal.Cs5KUPhG.woff2","/_astro/open-sans-cyrillic-wght-normal.Cw00GhOR.woff2","/_astro/open-sans-greek-wght-normal.CtQ6sbau.woff2","/_astro/open-sans-cyrillic-ext-wght-normal.f7eF65bT.woff2","/_astro/open-sans-hebrew-wght-normal.DrVQLkKb.woff2","/_astro/open-sans-symbols-wght-normal.C2QAFfGS.woff2","/_astro/open-sans-vietnamese-wght-normal.0eckKRMD.woff2","/_astro/open-sans-math-wght-normal.cwLdES2L.woff2","/_astro/open-sans-latin-ext-wght-normal.CrpOxvfM.woff2","/_astro/open-sans-latin-wght-normal.CYuRH5ug.woff2","/_astro/About.R46HhB3x.css","/_astro/Header.BFDaKjMV.css","/_astro/Projects.BaKvbYfr.css","/avatar.jpg","/avatar2.jpg","/favicon.svg","/icons/LICENSE.txt","/_astro/Buttom_nav.Bn3QgoEy.js","/_astro/client.D9Vng9vH.js","/_astro/index.NEDEFKed.js","/icons/png/angular-logo-24.png","/icons/png/bx-code-alt.svg","/icons/png/bxl-css3.png","/icons/png/bxl-flask.png","/icons/png/bxl-git.png","/icons/png/bxl-github.png","/icons/png/bxl-github.svg","/icons/png/bxl-html5.png","/icons/png/bxl-javascript.png","/icons/png/bxl-linkedin-square.svg","/icons/png/bxl-mongodb.png","/icons/png/bxl-nodejs.png","/icons/png/bxl-postgresql.png","/icons/png/bxl-python.png","/icons/png/bxl-react.png","/icons/png/bxl-tailwind-css.png","/icons/png/bxl-typescript.png","/icons/png/bxs-down-arrow-circle.svg"],"buildFormat":"directory"});

export { manifest };
