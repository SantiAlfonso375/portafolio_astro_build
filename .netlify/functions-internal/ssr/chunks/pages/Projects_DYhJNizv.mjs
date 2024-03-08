/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderSlot, m as maybeRenderHead, e as renderComponent } from '../astro_CblPQFzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$CardsSimple = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardsSimple;
  const { project, title, description, tags, href } = Astro2.props;
  return renderTemplate`<!-- <ol
  role="list"
  class="grid grid-cols-1 gap-3 mt-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"
  >
</ol> -->${renderSlot($$result, $$slots["default"], renderTemplate` ${maybeRenderHead()}<li class="ring-white/10 ring-1 p-2 bg-gradient-to-t from-white/20 rounded-3xl"> <div class="h-full p-8 ring-1 ring-white/10 rounded-2xl lg:p-10 shadow-massive bg-card/80"> <div class="flex flex-col justify-between h-full"> <div> <div class="flex-shrink-0 block"> <div class="flex items-center"> <div> <img class="inline-block w-12 h-12 rounded-full ring-1 ring-vanta-800 shrink-0" src="" alt="I'm amazed by the quality of courses offered on this platform. The instructors are experts in their fields, and the interactive learning approach keeps me engaged. I've gained skills I can immediately apply to my career"> </div> <div class="ml-3"> <p class="text-sm font-display text-white">${project}</p> <p class="text-vanta-300">${title}</p> </div> </div> </div> <p class="text-sm text-vanta-300 mt-12"> ${description} </p> </div> <p class="text-sm mt-12 font-display text-white">${tags}</p> </div> </div> </li> `)}`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/components/Cards_simple.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section class="fondo relative px-8 py-10 mx-auto md:px-12 lg:px-32 max-w-7xl lg:pt-56 lg:pb-20" data-astro-cid-rl3p5zqh> <div id="project" class="flex justify-start p-7 w-full" data-astro-cid-rl3p5zqh> <h1 class="pt-28 text-shadow-glow xs:text-fluid-base z-20 max-w-[20ch] animate-fade-up text-center sm:text-6xl text-[35px] font-semibold leading-none" data-astro-cid-rl3p5zqh> <span class="bg-clip-text text-transparent pb-2 bg-gradient-to-r from-[#e8b066] to-[#df12ff]" data-astro-cid-rl3p5zqh>Projects</span> </h1> </div> <ol role="list" class="grid grid-cols-1 gap-3 mt-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3" data-astro-cid-rl3p5zqh> ${renderComponent($$result, "Cards_simple", $$CardsSimple, { "project": "Project 1", ",": true, "title": "E-commers", ",": true, "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias itaque placeat, repellat blanditiis dolore consectetur in quos adipisci doloribus magnam quibusdam nostrum earum quidem voluptate maxime? Nobis, ullam laborum.", ",": true, "tags": "Angular 17", "data-astro-cid-rl3p5zqh": true })} ${renderComponent($$result, "Cards_simple", $$CardsSimple, { "project": "Project 1", ",": true, "title": "E-commers", ",": true, "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias itaque placeat, repellat blanditiis dolore consectetur in quos adipisci doloribus magnam quibusdam nostrum earum quidem voluptate maxime? Nobis, ullam laborum.", ",": true, "tags": "Angular 17", "data-astro-cid-rl3p5zqh": true })} ${renderComponent($$result, "Cards_simple", $$CardsSimple, { "project": "Project 1", ",": true, "title": "E-commers", ",": true, "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias itaque placeat, repellat blanditiis dolore consectetur in quos adipisci doloribus magnam quibusdam nostrum earum quidem voluptate maxime? Nobis, ullam laborum.", ",": true, "tags": "Angular 17", "data-astro-cid-rl3p5zqh": true })} </ol> </section> `;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/Projects.astro", void 0);

const $$file = "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/Projects.astro";
const $$url = "/Projects";

export { $$Projects as default, $$file as file, $$url as url };
