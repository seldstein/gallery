import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bh0qr1N_.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_B425_bfg.mjs';
export { renderers } from '../renderers.mjs';

const $$Offline = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "You're Offline", "description": "You're offline." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
It looks like you're offline. But if everything is working properly, you
    should be able to visit any pages you've been to previously. Try returning
    to the <a href="/">home page</a>.
</p> ` })}`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/pages/offline.astro", void 0);

const $$file = "/Users/Samfeld/Documents/projects/software/gallery/src/pages/offline.astro";
const $$url = "/offline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Offline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
