export default function sitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://diegopedro.dev';

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
