/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_CblPQFzJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                           */

function Button() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleOpen,
        className: "inline-flex items-center justify-end p-2 text-white hover:text-indigo-400 focus:outline-none focus:text-white md:hidden",
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "w-6 h-6",
            stroke: "currentColor",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: open ? "hidden" : "inline-flex",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: open ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `flex-col items-center flex-grow ${open ? "flex" : "hidden"} md:pb-0 md:flex md:justify-end md:flex-row`,
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-sm font-normal text-vanta-300 lg:px-6 md:px-3 hover:text-white lg:ml-auto",
              href: "#home",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-sm font-normal text-vanta-300 lg:px-6 md:px-3 hover:text-white",
              href: "#stack",
              children: "Stack"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-sm font-normal text-vanta-300 lg:px-6 md:px-3 hover:text-white",
              href: "#project",
              children: "Project"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "px-2 py-2 text-sm font-normal text-vanta-300 lg:px-6 md:px-3 hover:text-white",
              href: "#contact",
              children: "contact"
            }
          )
        ]
      }
    )
  ] });
}

const $$Astro$1 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<div class="fixed z-50 w-full overflow-hidden relatve backdrop-blur-2xl"> <!--   <Nav /> --> <div x-data="{ open: false }" class="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-12 lg:px-32"> <div class="flex flex-row items-center justify-between text-white lg:justify-start"> <a href="/" class="inline-flex items-center gap-3"> <span class="font-light text-xl uppercase">Portfolio</span> </a> </div> ${renderComponent($$result, "Buttom", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/components/Buttom_nav", "client:component-export": "default" })} </div> </div>`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<body id="home" class="" data-astro-cid-rqkunjs7> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-rqkunjs7": true })} </body>`;
}, "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/sections/Header.astro", void 0);

const $$file = "/Users/santiagoalfonso/Desktop/portafolio_astro/portafolio_astro_build/src/pages/sections/Header.astro";
const $$url = "/sections/Header";

export { $$Header as default, $$file as file, $$url as url };
