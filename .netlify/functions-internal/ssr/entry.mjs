import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BHT2ZZe0.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_nsYGP8Ii.mjs');
const _page1 = () => import('./chunks/Projects_ChigegKz.mjs');
const _page2 = () => import('./chunks/About_rXPIFkqh.mjs');
const _page3 = () => import('./chunks/Contact_Ceyk5fUk.mjs');
const _page4 = () => import('./chunks/Footer_39oL8EJQ.mjs');
const _page5 = () => import('./chunks/Header_Bt9P8bPy.mjs');
const _page6 = () => import('./chunks/Stack_CgbsX3VD.mjs');
const _page7 = () => import('./chunks/index_Ki63iHRV.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/Projects.astro", _page1],
    ["src/pages/sections/About.astro", _page2],
    ["src/pages/sections/Contact.astro", _page3],
    ["src/pages/sections/Footer.astro", _page4],
    ["src/pages/sections/Header.astro", _page5],
    ["src/pages/sections/Stack.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b9ada1f9-3d7c-484e-bb4a-51be5a835490"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
