module.exports = {
  plugins: [
    {
      resolve: '@sentry/gatsby',
      options: {
        debug: true,
        dsn: process.env.SENTRY_DSN,
        allowUrls: [
          'some-url.com',
          /^webpack-internal:/
        ]
      }
    }
  ]
}
