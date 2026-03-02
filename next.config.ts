import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');
export default withNextIntl(nextConfig);
