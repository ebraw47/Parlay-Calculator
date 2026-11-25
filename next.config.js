/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // Dev-only: allow HMR when the page is opened as 127.0.0.1 instead of localhost
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 70, 75, 80, 90, 100],
    minimumCacheTTL: 0,
  },

  async redirects() {
    return [
      // Retired prior-brand / Wordle routes → Parlay Calculator
      { source: '/funciones', destination: '/features', permanent: true },
      { source: '/como-usar', destination: '/how-to-use-parlay-calculator', permanent: true },
      { source: '/how-it-works', destination: '/how-to-use-parlay-calculator', permanent: true },
      { source: '/wordle-solver', destination: '/', permanent: true },
      { source: '/wordle-helper', destination: '/', permanent: true },
      { source: '/wordle-finder', destination: '/', permanent: true },
      { source: '/wordle-help', destination: '/', permanent: true },
      { source: '/wordle-guesser', destination: '/', permanent: true },
      { source: '/wordle-answer-finder', destination: '/', permanent: true },
      { source: '/wordle-word-finder', destination: '/', permanent: true },
      { source: '/word-finder-wordle', destination: '/', permanent: true },
      { source: '/wordle-tips', destination: '/blog', permanent: true },
      { source: '/wordle-cheat', destination: '/', permanent: true },
      { source: '/try-hard-wordle', destination: '/', permanent: true },
      { source: '/wordle-generator', destination: '/', permanent: true },
      { source: '/5-letter-words-for-wordle', destination: '/', permanent: true },
      { source: '/5-letter-words-wordle', destination: '/', permanent: true },
      { source: '/5-letter-wordle-solver', destination: '/', permanent: true },
      { source: '/wordle-solver-5-letters', destination: '/', permanent: true },
      { source: '/best-wordle-starting-words', destination: '/', permanent: true },
      { source: '/how-to-use-wordle-calculator', destination: '/how-to-use-parlay-calculator', permanent: true },
      { source: '/blog/wordle-strategy-tips', destination: '/blog/what-is-a-parlay-bet', permanent: true },
      { source: '/blog/how-wordle-colors-work', destination: '/blog/parlay-odds-explained', permanent: true },
      { source: '/blog/wordle-hard-mode-guide', destination: '/blog/how-to-calculate-parlay-odds', permanent: true },
      { source: '/blog/best-second-wordle-guesses', destination: '/blog/parlay-vs-straight-bet', permanent: true },

      // Retired unrelated prior brands
      { source: '/calculadora-trigonometrica', destination: '/', permanent: true },
      { source: '/grados-a-radianes', destination: '/', permanent: true },
      { source: '/notacion-cientifica', destination: '/', permanent: true },
      { source: '/how-to-convert-salary-to-hourly', destination: '/', permanent: true },
      { source: '/hourly-to-salary-calculator', destination: '/', permanent: true },
      { source: '/salary-conversion-chart', destination: '/', permanent: true },
      { source: '/blog/salary-vs-hourly-pay', destination: '/blog', permanent: true },
      { source: '/blog/how-many-work-hours-in-a-year', destination: '/blog', permanent: true },
      { source: '/blog/monthly-salary-to-hourly', destination: '/blog', permanent: true },
      { source: '/blog/part-time-salary-to-hourly', destination: '/blog', permanent: true },
      { source: '/compound-interest-calculator', destination: '/', permanent: true },
      { source: '/expense-ratio-calculator', destination: '/', permanent: true },
      { source: '/investment-growth-calculator', destination: '/', permanent: true },
      { source: '/blog/what-is-an-index-fund', destination: '/blog', permanent: true },
      { source: '/blog/index-fund-vs-mutual-fund', destination: '/blog', permanent: true },
      { source: '/blog/expense-ratio-explained', destination: '/blog', permanent: true },
      { source: '/blog/como-usar-calculadora-cientifica', destination: '/blog', permanent: true },
      { source: '/blog/calculadora-cientifica-vs-basica', destination: '/blog', permanent: true },
      { source: '/blog/seno-coseno-tangente', destination: '/blog', permanent: true },
      { source: '/blog/notacion-cientifica-explicada', destination: '/blog', permanent: true },
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/bmi-chart-women', destination: '/', permanent: true },
      { source: '/healthy-bmi', destination: '/', permanent: true },
      { source: '/bmi-by-age', destination: '/', permanent: true },
      { source: '/blog/how-to-calculate-bmi', destination: '/blog', permanent: true },
      { source: '/blog/what-is-bmi', destination: '/blog', permanent: true },
      { source: '/blog/bmi-formula', destination: '/blog', permanent: true },
      { source: '/blog/height-and-weight-chart-for-women', destination: '/blog', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
      { source: '/blog/how-to-schedule-tiktok-posts', destination: '/blog', permanent: true },
      { source: '/blog/best-time-to-post-on-tiktok', destination: '/blog', permanent: true },
      { source: '/blog/tiktok-content-calendar', destination: '/blog', permanent: true },
      { source: '/blog/does-tiktok-have-a-scheduler', destination: '/blog', permanent: true },

      // Legacy asset paths
      {
        source: '/og-image.webp',
        destination: '/og-image.png',
        permanent: true,
      },
      {
        source: '/twitter-card.webp',
        destination: '/og-image.png',
        permanent: true,
      },
      {
        source: '/twitter-card.png',
        destination: '/og-image.png',
        permanent: true,
      },
      {
        source: '/feature/og-image-1200x630.png',
        destination: '/og-image.png',
        permanent: true,
      },
      {
        source: '/feature/twitter-card-1200x600.png',
        destination: '/og-image.png',
        permanent: true,
      },
      {
        source: '/feature/twitter-card-1200x675.png',
        destination: '/og-image.png',
        permanent: true,
      },
      {
        source: '/logo-icon-512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/logo-mark-512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/logo-512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/favicon-512x512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/maskable-icon-512x512.png',
        destination: '/android-chrome-512x512.png',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
    ];
  },

  // Skip Next.js legacy polyfills. Target browsers already ship Array.at,
  // Object.hasOwn, etc. (Lighthouse: Legacy JavaScript ~14KB).
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
      'next/dist/build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
      'next/dist/esm/build/polyfills/polyfill-module': './src/lib/empty-polyfill.js',
    },
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
        'next/dist/esm/build/polyfills/polyfill-module': false,
      };
    }
    return config;
  },

  // Optimize headers
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig
