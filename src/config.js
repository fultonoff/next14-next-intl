export const locales = ["sv", "en"]

export const pathnames = {
  "/": "/",

  "/pathnames": {
    en: "/pathnames",
    sv: "/sökvägar"
  }
}

export const localePrefix = undefined

// Ensuring that pathnames satisfy the Pathnames type
const _checkPathnames = pathnames

// This line won't be reached, but it's added to avoid TypeScript compilation errors
_checkPathnames
