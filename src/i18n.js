import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['sv', 'en'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = new Intl.Locale(locale).baseName
  if (!locales.includes(baseLocale)) notFound();
 
  return {
    messages: (await import(`../messages/${baseLocale}.json`)).default
  };
});