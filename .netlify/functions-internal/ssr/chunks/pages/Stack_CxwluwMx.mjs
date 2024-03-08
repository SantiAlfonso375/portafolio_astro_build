/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, g as addAttribute, e as renderComponent } from '../astro_CblPQFzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$CardsInclinadas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardsInclinadas;
  const { Technology } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="ring-white/10 ring-1 p-2 bg-gradient-to-t from-white/20 rounded-3xl shadow-[#8f8f8f] hover:animate-jiggle"> <div class="h-full p-8 ring-1 ring-white/10 rounded-2xl lg:p-6 shadow-massive bg-card/80 "> <div class="flex flex-col justify-between h-auto"> <div class="flex-shrink-0 block mt-2"> <div class="flex items-center justify-center"> <div> <p class="text-3xl pb-6 text-gray-300 text-center">${Technology}</p> </div> </div> </div> <div class="text-sm text-vanta-300"> <ul> ${renderSlot($$result, $$slots["default"])} </ul> </div> </div> </div> </li>`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/components/Cards_inclinadas.astro", void 0);

const $$Astro$1 = createAstro();
const $$Icons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icons;
  const { title, href, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <div class="flex flex-row justify-start gap-4 text-xl py-2"> <img class="h-auto w-8"${addAttribute(href, "src")}${addAttribute(alt, "alt")}> <span class="bg-gradient-to-r bg-clip-text font-normal font-display tracking-tight ">${title}</span> </div> </li>`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/components/Icons.astro", void 0);

const $$Astro = createAstro();
const $$Stack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stack;
  return renderTemplate`${maybeRenderHead()}<section class="fondo-stack" data-astro-cid-zongyrak> <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24 relative" data-astro-cid-zongyrak> <!-- Title --> <div class="max-w-2xl mx-auto text-center" data-astro-cid-zongyrak> <h1 class="text-shadow-glow xs:text-fluid-base z-20 max-w-[20ch] animate-fade-up text-center sm:text-6xl text-[35px] font-semibold leading-none" data-astro-cid-zongyrak> <span id="stack" class="pt-28 bg-clip-text text-transparent pb-2 bg-gradient-to-r from-[#e8b066] to-[#df12ff]" data-astro-cid-zongyrak>Stack</span> </h1> </div> <!-- Cards Inclinadas --> <ol role="list" class="grid grid-cols-1 gap-3 mt-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 [&>*:nth-child(1)]:-rotate-12 [&>*:nth-child(3)]:rotate-12" data-astro-cid-zongyrak> ${renderComponent($$result, "CardsInclinadas", $$CardsInclinadas, { "Technology": "Back end", "data-astro-cid-zongyrak": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icons, { "title": "Node.js ", "href": "/icons/png/bxl-nodejs.png", "alt": "Node.js ", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "Python ", "href": "/icons/png/bxl-python.png", "alt": "Python", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "Flask ", "href": "/icons/png/bxl-flask.png", "alt": "Flask ", "data-astro-cid-zongyrak": true })} ` })} ${renderComponent($$result, "CardsInclinadas", $$CardsInclinadas, { "Technology": "Front end", "data-astro-cid-zongyrak": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icons, { "title": "HTML5", "href": "/public/png/bxl-html5.png", "alt": "HTML5", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "CSS3", "href": "/public/png/bxl-css3.png", "alt": "CSS3", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "Tailwind CSS", "href": "/public/png/bxl-tailwind-css.png", "alt": "Tailwind CSS", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "JavaScript", "href": "/public/png/bxl-javascript.png", "alt": "JavaScript", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "TypeScript", "href": "/public/png/bxl-typescript.png", "alt": "TypeScript", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "ReactJS", "href": "/public/png/bxl-react.png", "alt": "ReactJS", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "AngularJS ", "href": "/public/png/angular-logo-24.png", "alt": "AngularJS ", "data-astro-cid-zongyrak": true })} ` })} ${renderComponent($$result, "CardsInclinadas", $$CardsInclinadas, { "Technology": "Data Base and Other", "data-astro-cid-zongyrak": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icons, { "title": "Git", "href": "/public/png/bxl-git.png", "alt": "Git", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "GitHub", "href": "/public/png/bxl-github.png", "alt": "GitHub", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "PostgreSQL", "href": "/public/png/bxl-postgresql.png", "alt": "PostgreSQL", "data-astro-cid-zongyrak": true })} ${renderComponent($$result2, "Icon", $$Icons, { "title": "MongoDB", "href": "/public/png/bxl-mongodb.png", "alt": "MongoDB", "data-astro-cid-zongyrak": true })} ` })} </ol> </div> </section> `;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/sections/Stack.astro", void 0);

const $$file = "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/sections/Stack.astro";
const $$url = "/sections/Stack";

export { $$Stack as default, $$file as file, $$url as url };
