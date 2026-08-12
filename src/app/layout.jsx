import {Space_Grotesk, Inter, IBM_Plex_Mono} from 'next/font/google';

import {LanguageProvider} from '../i18n/LanguageContext';
import '../global.css';

// Self-hosted by Next.js at build time (no external request to Google's CDN,
// no render-blocking @import, no font-swap layout shift) — mapped onto the
// same --font-* custom properties global.css already consumes.
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-display',
});
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-body',
});
const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-mono',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://react-portfolio.vercel.app';
const title = 'Diego Pedro dos Santos — Full Stack Developer';
const description = 'Diego Pedro dos Santos — Full Stack Developer especializado em integração de sistemas (ERP, LMS, CRM, pagamentos) e automação com IA.';

export const metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    authors: [{name: 'Diego Pedro dos Santos'}],
    openGraph: {
        title,
        description,
        url: siteUrl,
        siteName: 'Diego Pedro dos Santos',
        images: ['/Diego_Pedro.webp'],
        locale: 'pt_BR',
        alternateLocale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/Diego_Pedro.webp'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Diego Pedro dos Santos',
    jobTitle: 'Full Stack Developer',
    email: 'mailto:diegopedrodev@gmail.com',
    url: siteUrl,
    sameAs: [
        'https://www.linkedin.com/in/diego-pedro-santos/',
        'https://github.com/didiegopds2684',
        'https://www.instagram.com/diegoxpedro/',
    ],
};

export default function RootLayout({children}) {
    return (
        <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        <body>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
        />
        <LanguageProvider>{children}</LanguageProvider>
        </body>
        </html>
    );
}
