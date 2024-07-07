import { withNextSitemap } from 'next-sitemap';

module.exports = withNextSitemap({
    async headers() {
        return [
            {
                source: '/(.*)', // Apply to all routes
                headers: [
                    {
                        key: 'Permissions-Policy',
                        value: 'encrypted-media=(self)', // Allow encrypted-media
                    },
                ],
            },
        ];
    },
});
