/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://taskforce-two.vercel.app",  // your domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  // If you have dynamic routes:
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/projects/1'),
  //   await config.transform(config, '/projects/2'),
  //   …
  // ]
}
