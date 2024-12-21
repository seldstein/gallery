import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Bh0qr1N_.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_B425_bfg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Home" })} `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/pages/index.astro", void 0);

const $$file = "/Users/Samfeld/Documents/projects/software/gallery/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
