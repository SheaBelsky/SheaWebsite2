const nextConfig = {
  experimental: {
    appDir: true
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  redirects: () => ([
    {
      destination: 'https://calendly.com/shea-belsky/30min',
      source: '/meet',
      permanent: false,
    }
  ])
};

module.exports = nextConfig;
