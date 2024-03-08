/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, g as addAttribute, k as renderHead, f as renderSlot, e as renderComponent, m as maybeRenderHead } from '../astro_CblPQFzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import $$Header from './Header_DJ2LM8rL.mjs';
import $$About from './About_BoRTHL73.mjs';
import $$Projects from './Projects_DYhJNizv.mjs';
import $$Stack from './Stack_CxwluwMx.mjs';
import $$Contact from './Contact_BaglO2oJ.mjs';
import $$Footer from './Footer_CnnLlRGf.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} </main> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Stack", $$Stack, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/index.astro", void 0);

const $$file = "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
