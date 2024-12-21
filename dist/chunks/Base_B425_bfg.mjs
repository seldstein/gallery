import { c as createComponent, r as renderTemplate, g as createAstro, b as addAttribute, a as renderComponent, h as renderScript, i as renderHead, m as maybeRenderHead, j as renderSlot } from './astro/server_Bh0qr1N_.mjs';
import 'kleur/colors';
import 'clsx';
import { s as site } from './config_Cvl_b2VC.mjs';
/* empty css                         */

const $$Icons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
  - Guide: https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
  - Favicon generator: https://favicon.io
  - Another favicon generator: https://realfavicongenerator.net/
  - SVG generator: https://formito.com/tools/favicon
  - Image compressor: https://squoosh.app/
  - SVG optimizer: https://jakearchibald.github.io/svgomg/
  - Favicon checker: https://realfavicongenerator.net/favicon_checker
--><link rel="icon" type="image/svg+xml" href="/favicon.svg">`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Icons.astro", void 0);

const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description || site.description, "content")}><title>${title} | ${site.title}</title>${renderComponent($$result, "Icons", $$Icons, {})}<link rel="alternate" type="application/rss+xml"${addAttribute(site.title, "title")}${addAttribute(`${site.url}/feed.xml`, "href")}>${renderScript($$result, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Head.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Head.astro", void 0);

const $$Skiplink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a id="skiplink" href="#main-content" aria-label="Skip Link" data-astro-cid-ymhr2v2g>Skip to Content</a> `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Skiplink.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="logo" href="/">Sam Feldstein</a>`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Logo.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <a href="/contact/" data-astro-cid-dmqpwcec>Contact</a> <a href="https://samfeldstein.xyz" target="_blank" data-astro-cid-dmqpwcec>Personal Site</a> </nav> `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Nav.astro", void 0);

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="social" data-astro-cid-yxtifmrq> <a href="https://www.instagram.com/mastersont3" target="_blank" data-astro-cid-yxtifmrq> <svg class="instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" data-astro-cid-yxtifmrq><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0-59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9.1-11.2.1-3.3 0-7.2 0-11.4-.1-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1.1 7.9.1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1 3.3 0 7.2 0 11.4.1 25.5.3 64.8.7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1.1-11.4c.3-25.5.7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5a82 82 0 1 1-91.2 136.4 82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96zm-91 293c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67z" data-astro-cid-yxtifmrq></path></svg> </a> <a href="https://www.facebook.com/tom.masterson.3348/" target="_blank" data-astro-cid-yxtifmrq> <svg class="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" data-astro-cid-yxtifmrq><path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h98.2V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480h129c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" data-astro-cid-yxtifmrq></path></svg> </a> </div> `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Social.astro", void 0);

const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<details data-astro-cid-6aabv5oc> <summary data-astro-cid-6aabv5oc>Menu</summary> <div class="menu-content" data-astro-cid-6aabv5oc> <div data-astro-cid-6aabv5oc> <div class="title" data-astro-cid-6aabv5oc>Navigation</div> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-6aabv5oc": true })} </div> <div class="social" data-astro-cid-6aabv5oc> <div class="title" data-astro-cid-6aabv5oc>Social</div> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-6aabv5oc": true })} </div> </div> </details> `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/MobileMenu.astro", void 0);

const $$MobileHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-sm7faef2> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-sm7faef2": true })} ${renderComponent($$result, "MobileMenu", $$MobileMenu, { "data-astro-cid-sm7faef2": true })} </header> `;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/MobileHeader.astro", void 0);

const $$Copyright = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<small>&copy; 2024 Sam Feldstein. All rights reserved.</small> ${renderScript($$result, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Copyright.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Copyright.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> ${renderComponent($$result, "Copyright", $$Copyright, {})} </footer>`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "title": title, "description": description })}${maybeRenderHead()}<body> ${renderComponent($$result, "Skiplink", $$Skiplink, {})} ${renderComponent($$result, "MobileHeader", $$MobileHeader, {})} <main id="main-content"> <h1>${title}</h1> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/Samfeld/Documents/projects/software/gallery/src/layouts/Base.astro", void 0);

export { $$Base as $ };
