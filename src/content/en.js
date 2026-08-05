export const en = {
    meta: {
        langLabel: 'PT',
        langSwitchAria: 'Switch to Portuguese',
    },

    nav: {
        home: 'Home',
        about: 'About',
        professional: 'Experience',
        skills: 'Skills',
        portfolio: 'Projects',
        contact: 'Contact',
    },

    header: {
        greeting: "Hi, I'm",
        name: 'Diego Pedro',
        role: 'Full Stack Developer & Systems Integration Specialist',
        tagline: "I connect systems that weren't meant to talk to each other.",
        ctaDownload: 'Download resume',
        ctaContact: 'Get in touch',
        scrollDown: 'Scroll down',
        mapCaption: "Systems I've integrated",
    },

    about: {
        eyebrow: 'Discover',
        title: 'About me',
        cards: [
            {
                title: 'Experience',
                value: '5+ years',
                label: 'as a fullstack developer',
            },
            {
                title: 'Technology',
                value: '6+ years',
                label: 'in technology and DevOps',
            },
            {
                title: 'Integrations',
                value: '4+ ecosystems',
                label: 'connected (ERP, LMS, CRM, AI)',
            },
        ],
        bio: "Fullstack Developer with a Bachelor's degree in Computer Science, specialized in ReactJS/Next.js, PHP Laravel, and complex system integrations (ERPs, CRMs, payment gateways, and automation platforms). Hands-on experience building AI-powered automation solutions — including prompt engineering best practices and integrating large language models (Claude) into automated customer service and sales workflows. Strong background in DevOps, infrastructure as code, Docker, CI/CD, and cloud platforms (AWS/GCP). Looking to combine software development, systems integration, and applied AI to deliver efficient, scalable solutions.",
        ctaTalk: "Let's talk!",
        ctaResume: 'My resume',
    },

    professional: {
        eyebrow: 'Track record',
        title: 'Professional experience',
        jobs: [
            {
                id: 1,
                title: 'Fullstack Web Developer',
                company: 'Faculdade Unimed',
                duration: '01/2025 – Present',
                items: [
                    'Educational Ecosystem Integration: interoperability between the management system (TOTVS ERP) and the virtual learning environment (D2L Brightspace), ensuring the integrity of academic and administrative data.',
                    'Portal & Tooling Development: built and maintained educational portals and internal systems to streamline corporate processes, using Laravel for robust back-ends and Next.js for modern, reactive user interfaces.',
                    'DevOps & Infrastructure: configuring and maintaining production environments, implementing CI/CD deployment automation to ensure continuous, stable releases.',
                    'Process Automation (BPM): developed automated workflows and integrations using the Sydle One platform and Microsoft solutions to drive operational efficiency.',
                ],
            },
            {
                id: 2,
                title: 'Fullstack Web Developer',
                company: 'Verticis Web Studio',
                duration: '10/2021 – 12/2024',
                items: [
                    'Fullstack Software Engineering: developed and structured systems using PHP (Laravel), focusing on MVC architecture and building/consuming RESTful APIs for third-party system integration.',
                    'Modern Frontend & Logistics: built a logistics management system with carrier integrations, using Next.js, TypeScript, and Redux to manage complex state and ensure high UI performance.',
                    'Critical Financial Integrations: implemented and obtained approval (homologação) for a payment gateway integration (PagSeguro), overcoming rigorous security validation and financial transaction requirements.',
                    'Cloud & DevOps: implemented CI/CD pipelines (Vercel and Render) and managed AWS infrastructure (EC2, Lightsail, and S3). Standardized development environments with Docker to ensure parity between local and production.',
                ],
            },
            {
                id: 3,
                title: 'PHP Developer',
                company: 'Agência Curinga',
                duration: '07/2021 – 10/2021',
                items: [
                    'Website & System Development: built websites from scratch using WordPress and vanilla HTML, including fully custom builds without pre-made WordPress themes.',
                ],
            },
            {
                id: 4,
                title: 'DevOps Engineer',
                company: 'Beltech',
                duration: '08/2020 – 06/2021',
                items: [
                    'Backup Automation & Server Maintenance: automated backups of EC2 images and databases using AWS tooling directly. Contributed to building automation tools and managing cloud computing infrastructure.',
                ],
            },
        ],
    },

    skills: {
        eyebrow: "What I bring",
        title: 'Technical skills',
        categories: [
            {
                name: 'Development',
                items: ['PHP', 'Laravel', 'ReactJS', 'Next.js', 'TypeScript', 'Redux', 'Node.js'],
            },
            {
                name: 'Integrations & Automation',
                items: ['REST APIs', 'TOTVS', 'D2L Brightspace', 'Sydle One (BPM)', 'Take Blip (WhatsApp API)', 'Microsoft 365 / Power Automate', 'PagSeguro', 'Webhooks'],
            },
            {
                name: 'Applied AI',
                items: ['Prompt Engineering', 'LLM Integration (Claude)', 'AI-powered customer service & sales workflows'],
            },
            {
                name: 'Infrastructure',
                items: ['AWS (EC2/S3/Lightsail)', 'GCP', 'Docker', 'CI/CD', 'Linux', 'Git', 'DevOps Culture'],
            },
            {
                name: 'Data',
                items: ['MySQL', 'PostgreSQL'],
            },
        ],
    },

    portfolio: {
        eyebrow: 'My projects',
        title: 'Projects & integrations',
        projects: [
            {
                id: 1,
                tag: 'Personal project',
                title: '2026 World Cup Pool',
                description: 'Fullstack web app for friendly betting pools, with Google login, group creation, and a real-time scoring leaderboard.',
                stack: 'React + Vite + TailwindCSS · Node.js + Express + Prisma · PostgreSQL (Neon) · Firebase Auth · Vercel/Railway',
                result: 'Built with Spec-Driven Development (SDD) using Claude Code.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 2,
                tag: 'Corporate project — Faculdade Unimed',
                title: '"Samba AI" — AI-powered sales automation',
                description: 'Automated customer service combining Sydle One and Take Blip (WhatsApp): lead qualification, automated conversation, payment link generation, and handoff to a human agent after confirmation.',
                stack: 'Sydle One (BPM) · Take Blip (WhatsApp API) · Claude (LLM) · PagSeguro',
                result: 'Full flow: qualification → conversation → payment → human handoff.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 3,
                tag: 'Corporate project — Faculdade Unimed',
                title: 'Sydle One + Take Blip integration',
                description: 'Documented and implemented a webhook-based integration between Sydle One and Take Blip: agent/ticket mapping, payload validation via Postman, receiving endpoint in Sydle One.',
                stack: 'Webhooks · REST APIs · Postman · Sydle One (BPM)',
                result: 'Approved and running in production.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 4,
                tag: 'Technical hobby',
                title: 'AI-assisted ROM translation',
                description: 'Extracting and reinserting text in game binaries (e.g. Dragon Quest, NDS/UE4), isolating strings via scripts and translating them through the Claude API.',
                stack: 'Custom scripts · Claude API · Binary reverse engineering',
                result: 'Applied AI outside of a corporate context.',
                github: '',
                github2: '',
                demo: '',
            },
        ],
    },

    contact: {
        eyebrow: 'Get in touch',
        title: 'Contact',
        email: {
            label: 'Email',
            value: 'diegopedrodev@gmail.com',
            cta: 'Send a message',
        },
        linkedin: {
            label: 'LinkedIn',
            value: 'Diego Pedro',
            cta: 'Send a message',
        },
        whatsapp: {
            label: 'WhatsApp',
            value: '+55 31 9 9565-1680',
            cta: 'Send a message',
            message: "Hi, I saw your website and I'd like to get in touch.",
        },
        form: {
            name: 'Your full name',
            email: 'Your email',
            message: 'Your message',
            submit: 'Send message',
            success: 'Message sent successfully',
            error: 'Something went wrong, please try again later',
        },
    },

    footer: {
        logo: 'Diego Pedro',
        links: [
            {label: 'Home', href: '#header'},
            {label: 'About', href: '#about'},
            {label: 'Experience', href: '#professional'},
            {label: 'Skills', href: '#skills'},
            {label: 'Projects', href: '#portfolio'},
            {label: 'Contact', href: '#contact'},
        ],
        copyright: '© Diego Pedro. All rights reserved.',
    },
};
