const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Prefix an absolute site path with the configured `base`.
 * Needed for GitHub Pages project sites (served under /<repo>/), since Astro
 * does not auto-prepend `base` to hard-coded `/...` paths in href/src.
 *
 *   url('/')            -> '/altiplano-website/'
 *   url('/services')    -> '/altiplano-website/services'
 *   url('/images/x.png')-> '/altiplano-website/images/x.png'
 *
 * With no base configured (user/org site) it returns the path unchanged.
 */
export function url(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}
