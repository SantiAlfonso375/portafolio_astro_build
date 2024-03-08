/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_CblPQFzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="px-8 py-6 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-2"> <div class="p-2 ring-white/10 ring-1 rounded-3xl bg-gradient-to-t from-white/20"> <div class="p-8 bg-card/80 backdrop-blur-2xl rounded-2xl shadow-massive ring-white/10 ring-1 lg:p-10"> <nav class="flex flex-col gap-8 mt-12 lg:mt-4 lg:flex-row"> <p class="text-sm text-vanta-400 hover:text-white">
© 2024 Santiago Alfonso.
</p> <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-vanta-400 hover:text-white transition-colors delay-150 hover:delay-[0ms] hover:bg-mirage" href="/#pricing"><span class="relative z-10">Privacy policy</span> </a> </nav> </div> </div> </div> </footer>`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/sections/Footer.astro", void 0);

const $$file = "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/sections/Footer.astro";
const $$url = "/sections/Footer";

export { $$Footer as default, $$file as file, $$url as url };
