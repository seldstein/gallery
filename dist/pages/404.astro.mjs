import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bh0qr1N_.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_B425_bfg.mjs';
import { a as author } from '../chunks/config_Cvl_b2VC.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found", "description": "Page not found." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
It looks like this page doesn't exist. If you think this is a mistake,
    please <a${addAttribute(`mailto:${author.email}`, "href")}>email me</a>.
</p> ` })}`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/pages/404.astro", void 0);

const $$file = "/Users/Samfeld/Documents/projects/software/gallery/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
