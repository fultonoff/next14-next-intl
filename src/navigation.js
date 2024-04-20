import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
export const locales = ['sv', 'en'];
export const localePrefix = 'always'; 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/blog': '/blog',
    // If locales use different paths, you can
    // specify each external path per locale.
    '/contact': {
        sv: '/kontakt',
        en: '/contact'
    },
    '/events': {
        sv: '/evenemang',
        en: '/events'
    },
    '/tourism': {
        sv: '/turism',
        en: '/tourism'
    },
    '/midsummerSail': {
        sv: '/midsummerSail',
        en: '/midsummerSail'
    },
    // Dynamic params are supported via square brackets
    '/news/[articleSlug]-[articleId]': {
        en: '/news/[articleSlug]-[articleId]',
        de: '/neuigkeiten/[articleSlug]-[articleId]'
    },
    // Also (optional) catch-all segments are supported
    '/categories/[...slug]': {
        en: '/categories/[...slug]',
        de: '/kategorien/[...slug]'
    }
};
export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });