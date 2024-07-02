// @ts-check
 
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  redirects: async () => ([
    {
      destination: 'https://calendly.com/hello-sheabelsky/30min',
      source: '/meet',
      permanent: false,
    }
  ])
};

module.exports = nextConfig;
