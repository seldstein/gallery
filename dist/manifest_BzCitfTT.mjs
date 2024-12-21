import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_Bh0qr1N_.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/Samfeld/Documents/projects/software/gallery/","adapterName":"","routes":[{"file":"file:///Users/Samfeld/Documents/projects/software/gallery/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/Samfeld/Documents/projects/software/gallery/dist/feed.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/feed.xml","isIndex":false,"type":"endpoint","pattern":"^\\/feed\\.xml\\/?$","segments":[[{"content":"feed.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/feed.xml.js","pathname":"/feed.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/Samfeld/Documents/projects/software/gallery/dist/offline/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/offline","isIndex":false,"type":"page","pattern":"^\\/offline\\/?$","segments":[[{"content":"offline","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/offline.astro","pathname":"/offline","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/Samfeld/Documents/projects/software/gallery/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/Samfeld/Documents/projects/software/gallery/src/pages/feed.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/feed.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/Samfeld/Documents/projects/software/gallery/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/Samfeld/Documents/projects/software/gallery/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/Samfeld/Documents/projects/software/gallery/src/pages/offline.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/offline@_@astro":"pages/offline.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/feed.xml@_@js":"pages/feed.xml.astro.mjs","\u0000@astrojs-manifest":"manifest_BzCitfTT.mjs","/Users/Samfeld/Documents/projects/software/gallery/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/Samfeld/Documents/projects/software/gallery/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BViPaYdM.mjs","/Users/Samfeld/Documents/projects/software/gallery/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BSfeoDsK.mjs","/Users/Samfeld/Documents/projects/software/gallery/src/components/Head.astro?astro&type=script&index=0&lang.ts":"_astro/Head.astro_astro_type_script_index_0_lang.CBf2CwYa.js","/Users/Samfeld/Documents/projects/software/gallery/src/components/Copyright.astro?astro&type=script&index=0&lang.ts":"_astro/Copyright.astro_astro_type_script_index_0_lang.4LP1-h3S.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/Samfeld/Documents/projects/software/gallery/src/components/Head.astro?astro&type=script&index=0&lang.ts","if(\"serviceWorker\"in navigator)try{const e=await navigator.serviceWorker.register(\"service-worker.js\",{scope:\"./\"});console.log(\"Service worker registration\"),console.log(e),e.installing?console.log(\"Service worker installing\"):e.waiting?console.log(\"Service worker installed\"):e.active&&console.log(\"Service worker active\")}catch(e){console.error(`Registration failed with ${e}`)}"],["/Users/Samfeld/Documents/projects/software/gallery/src/components/Copyright.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"year\").textContent=new Date().getFullYear();"]],"assets":["/file:///Users/Samfeld/Documents/projects/software/gallery/dist/404.html","/file:///Users/Samfeld/Documents/projects/software/gallery/dist/feed.xml","/file:///Users/Samfeld/Documents/projects/software/gallery/dist/offline/index.html","/file:///Users/Samfeld/Documents/projects/software/gallery/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"2T4uwXOkJx7HlsgamoooOV2Wdmcv9iS+DG1qbe7+uKQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
