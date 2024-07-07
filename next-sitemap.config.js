module.exports = {
    siteUrl: 'https://projectlotus.online',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/login/*'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: '*', disallow: '/admin' },
        ],
    },
}