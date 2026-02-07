import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // German is the default and only locale for now
  const locale = 'de';

  // Load and merge all locale files
  const [
    common,
    home,
    product,
    pricing,
    security,
    process,
    faq,
    contact,
    demo,
    datenschutz,
    impressum,
    agb,
    notFound,
    legal
  ] = await Promise.all([
    import(`./locales/${locale}/common.json`).then(m => m.default),
    import(`./locales/${locale}/home.json`).then(m => m.default),
    import(`./locales/${locale}/product.json`).then(m => m.default),
    import(`./locales/${locale}/pricing.json`).then(m => m.default),
    import(`./locales/${locale}/security.json`).then(m => m.default),
    import(`./locales/${locale}/process.json`).then(m => m.default),
    import(`./locales/${locale}/faq.json`).then(m => m.default),
    import(`./locales/${locale}/contact.json`).then(m => m.default),
    import(`./locales/${locale}/demo.json`).then(m => m.default),
    import(`./locales/${locale}/datenschutz.json`).then(m => m.default),
    import(`./locales/${locale}/impressum.json`).then(m => m.default),
    import(`./locales/${locale}/agb.json`).then(m => m.default),
    import(`./locales/${locale}/notFound.json`).then(m => m.default),
    import(`./locales/${locale}/legal.json`).then(m => m.default)
  ]);

  const messages = {
    ...common,
    ...home,
    ...product,
    ...pricing,
    ...security,
    ...process,
    ...faq,
    ...contact,
    ...demo,
    ...datenschutz,
    ...impressum,
    ...agb,
    ...notFound,
    ...legal
  };

  return {
    locale,
    messages
  };
});
