module.exports = {
  reporter: 'html',
  retries: 1,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'setup', testMatch: /auth\.setup\.js/ },
    {
      name: 'chromium',
      use: { browserName: 'chromium', storageState: 'auth.json' },
      dependencies: ['setup'], // forces 'setup' to run first, every single time
    },
  ],
};