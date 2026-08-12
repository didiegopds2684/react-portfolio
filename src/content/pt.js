export const pt = {
    meta: {
        langLabel: 'EN',
        langSwitchAria: 'Mudar para inglês',
    },

    nav: {
        home: 'Início',
        about: 'Sobre',
        professional: 'Experiência',
        skills: 'Conhecimento',
        portfolio: 'Projetos',
        contact: 'Contato',
    },

    header: {
        greeting: 'Olá, eu sou',
        name: 'Diego Pedro',
        role: 'Full Stack Developer & Especialista em Integração de Sistemas',
        tagline: 'Conecto sistemas que não deveriam conversar entre si.',
        ctaDownload: 'Baixar currículo',
        ctaContact: 'Fale comigo',
        scrollDown: 'Descer',
        mapCaption: 'Sistemas que já integrei',
    },

    about: {
        eyebrow: 'Descubra',
        title: 'Sobre mim',
        cards: [
            {
                title: 'Experiência',
                value: '5+ anos',
                label: 'como desenvolvedor fullstack',
            },
            {
                title: 'Tecnologia',
                value: '6+ anos',
                label: 'em tecnologia e DevOps',
            },
            {
                title: 'Integrações',
                value: '4+ ecossistemas',
                label: 'conectados (ERP, LMS, CRM, IA)',
            },
        ],
        bio: 'Desenvolvedor Fullstack com bacharelado em Ciência da Computação, especializado em ReactJS/Next.js, PHP Laravel e integrações complexas de sistemas — ERPs, CRMs, gateways de pagamento e plataformas de automação. Tenho experiência prática na criação de soluções de automação com IA, incluindo boas práticas de prompt engineering e integração de modelos de linguagem (Claude) em fluxos automatizados de atendimento e vendas. Boa base em DevOps, infraestrutura como código, Docker, CI/CD e nuvem (AWS/GCP). Busco unir desenvolvimento de software, integração de sistemas e IA aplicada para entregar soluções eficientes e escaláveis.',
        ctaTalk: 'Vamos conversar!',
        ctaResume: 'Meu currículo',
    },

    professional: {
        eyebrow: 'Trajetória',
        title: 'Experiências profissionais',
        jobs: [
            {
                id: 1,
                title: 'Fullstack Web Developer',
                company: 'Faculdade Unimed',
                duration: '01/2025 – atualmente',
                items: [
                    'Garantiu integridade de dados acadêmicos e administrativos ao integrar o ERP TOTVS com o ambiente virtual de aprendizagem D2L Brightspace, eliminando inconsistências manuais entre os sistemas.',
                    'Modernizou portais educacionais e sistemas internos utilizando Laravel no back-end e Next.js no front-end, otimizando processos corporativos e a experiência do usuário.',
                    'Reduziu tempo de deploy e aumentou a estabilidade das entregas ao implementar pipelines de CI/CD para os ambientes de produção.',
                    'Aumentou a eficiência operacional ao desenvolver fluxos automatizados (BPM) com Sydle One e soluções Microsoft.',
                    'Stack: Laravel, Next.js, TypeScript, TOTVS, D2L Brightspace, Sydle One, Microsoft 365/Power Automate, CI/CD'
                ],
            },
            {
                id: 2,
                title: 'Fullstack Web Developer',
                company: 'Verticis Web Studio',
                duration: '10/2021 – 12/2024',
                items: [
                    'Estruturou sistemas backend escaláveis com PHP/Laravel, aplicando arquitetura MVC e desenvolvendo APIs RESTful para integração com sistemas de terceiros.',
                    'Entregou sistema de gestão logística com integração de transportadoras, usando Next.js, TypeScript e Redux para gerenciar estados complexos com alta performance.',
                    'Implementou e homologou gateway de pagamento (PagSeguro), superando validações rigorosas de segurança e requisitos de transações financeiras.',
                    'Padronizou ambientes de desenvolvimento com Docker para garantir paridade entre local e produção.',
                    'Stack: PHP, Laravel, Next.js, TypeScript, Redux, Docker, AWS, CI/CD'
                ],
            },
            {
                id: 3,
                title: 'PHP Developer',
                company: 'Agência Curinga',
                duration: '07/2021 – 10/2021',
                items: [
                    'Desenvolveu sites institucionais e landing pages do zero utilizando PHP, JavaScript, HTML, CSS e Bootstrap, sem uso de frameworks pré-prontos.',
                    'Criou sites totalmente personalizados em WordPress, incluindo temas próprios sem dependência de templates de terceiros.',
                    'Stack: PHP, JavaScript, HTML, CSS, Bootstrap, WordPress'
                ],
            },
            {
                id: 4,
                title: 'DevOps Engineer',
                company: 'Beltech',
                duration: '08/2020 – 06/2021',
                items: [
                    'Reduziu risco de perda de dados ao automatizar backups de imagens EC2 e bancos de dados usando ferramentas nativas da AWS.',
                    'Aumentou a eficiência da operação de infraestrutura ao criar ferramentas de automação e gerenciamento de servidores em nuvem.',
                    'Gerenciou servidores, aplicações, bancos de dados e roteamento de rede no Google Cloud Platform.',
                    'Stack: AWS (EC2), GCP, Linux, Automação de Infraestrutura, TypeScript'
                ],
            },
        ],
    },

    skills: {
        eyebrow: 'Quais minhas habilidades',
        title: 'Conhecimento técnico',
        categories: [
            {
                name: 'Desenvolvimento',
                items: ['PHP', 'Laravel', 'ReactJS', 'Next.js', 'TypeScript', 'Redux', 'Node.js'],
            },
            {
                name: 'Integrações & Automação',
                items: ['REST APIs', 'TOTVS', 'D2L Brightspace', 'Sydle One (BPM)', 'Take Blip (WhatsApp API)', 'Microsoft 365 / Power Automate', 'PagSeguro', 'Webhooks'],
            },
            {
                name: 'IA aplicada',
                items: ['Prompt Engineering', 'Integração de LLMs (Claude)', 'Automação de atendimento e vendas com IA'],
            },
            {
                name: 'Infraestrutura',
                items: ['AWS (EC2/S3/Lightsail)', 'GCP', 'Docker', 'CI/CD', 'Linux', 'Git', 'Cultura DevOps'],
            },
            {
                name: 'Dados',
                items: ['MySQL', 'PostgreSQL'],
            },
        ],
    },

    portfolio: {
        eyebrow: 'Meus projetos',
        title: 'Projetos e integrações',
        projects: [
            {
                id: 1,
                tag: 'Projeto pessoal',
                title: 'Bolão da Copa do Mundo 2026',
                description: 'Aplicação web fullstack para bolões entre amigos, com login via Google, criação de grupos de apostas e ranking de pontuação em tempo real.',
                stack: 'React + Vite + TailwindCSS · Node.js + Express + Prisma · PostgreSQL (Neon) · Firebase Auth · Vercel/Railway',
                result: 'Desenvolvido com Spec-Driven Development (SDD) usando Claude Code.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 2,
                tag: 'Projeto corporativo — Faculdade Unimed',
                title: 'Automação de vendas com IA',
                description: 'Atendimento automatizado combinando Sydle One e Take Blip (WhatsApp): qualificação de lead, conversa automática, geração de link de pagamento e handoff para atendente humano após confirmação.',
                stack: 'Sydle One (BPM) · Take Blip (WhatsApp API) · Claude (LLM) · PagSeguro',
                result: 'Fluxo completo de qualificação → conversa → pagamento → handoff humano.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 3,
                tag: 'Projeto corporativo — Faculdade Unimed',
                title: 'Integração Sydle One + Take Blip',
                description: 'Documentação e implementação da integração via webhooks entre Sydle One e Take Blip: mapeamento de agentes e tickets, validação de payloads via Postman, endpoint receptor no Sydle One.',
                stack: 'Webhooks · REST APIs · Postman · Sydle One (BPM)',
                result: 'Integração homologada e em produção.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 4,
                tag: 'Hobby técnico',
                title: 'Tradução de ROMs com IA',
                description: 'Extração e reinserção de texto em binários de jogos (ex: Dragon Quest, NDS/UE4), isolando strings via scripts e traduzindo com a API do Claude.',
                stack: 'Scripts próprios · API Claude · Engenharia reversa de binários',
                result: 'Aplicação prática de IA fora do contexto corporativo.',
                github: '',
                github2: '',
                demo: '',
            },
            {
                id: 5,
                tag: 'Projeto pessoal',
                title: 'CRM Flow — CRM multi-tenant via API',
                description: 'Plataforma SaaS em microsserviços que permite empresas criarem CRMs personalizados via API — cada empresa define suas próprias entidades e campos, sem alterar código. Isolamento total de dados via schema-per-tenant no PostgreSQL e motor de entidades dinâmico baseado em JSONB.',
                stack: 'Java 21 + Spring Boot 3.3 · PostgreSQL 16 (JSONB, schema-per-tenant) · Redis · RabbitMQ · JWT RS256 · Resilience4j · Docker Compose',
                result: 'Auth Service e Tenant Service completos e funcionais; Entity Engine, Permission Service, Analytics e API Gateway em desenvolvimento.',
                github: 'https://github.com/didiegopds2684/crm_flow',
                github2: '',
                demo: '',
            },
            {
                id: 6,
                tag: 'Projeto pessoal',
                title: 'Riftbound Tracker — Placar e estatísticas para TCG',
                description: 'App mobile (Android, iOS e Web) para jogadores de Riftbound TCG registrarem suas partidas, acompanharem estatísticas pessoais por Champion e usarem um placar digital em tempo real na mesa. Projeto não-oficial, sem afiliação com a Riot Games — não simula nem automatiza regras do jogo.',
                stack: 'React Native + Expo · React Navigation · Supabase (Postgres + Auth + RLS) · Riftcodex API · Vercel',
                result: 'Placar, histórico de partidas e estatísticas por Champion rodando em iOS, Android e Web.',
                github: 'https://github.com/didiegopds2684/riftbound-tracker',
                github2: '',
                demo: '',
            },
        ],
    },

    contact: {
        eyebrow: 'Mantenha contato',
        title: 'Comigo',
        email: {
            label: 'Email',
            value: 'diegopedrodev@gmail.com',
            cta: 'Envie uma mensagem',
        },
        linkedin: {
            label: 'LinkedIn',
            value: 'Diego Pedro',
            cta: 'Envie uma mensagem',
        },
        whatsapp: {
            label: 'WhatsApp',
            value: '+55 31 9 9565-1680',
            cta: 'Envie uma mensagem',
            message: 'Olá, vi o seu site e tenho interesse de conversar com você.',
        },
        form: {
            name: 'Seu nome completo',
            email: 'Seu email',
            message: 'Sua mensagem',
            submit: 'Enviar mensagem',
            success: 'Email enviado com sucesso',
            error: 'Houve um erro, tente novamente mais tarde',
        },
    },

    footer: {
        logo: 'Diego Pedro',
        links: [
            { label: 'Início', href: '#header' },
            { label: 'Sobre mim', href: '#about' },
            { label: 'Experiência', href: '#professional' },
            { label: 'Conhecimento', href: '#skills' },
            { label: 'Projetos', href: '#portfolio' },
            { label: 'Contato', href: '#contact' },
        ],
        copyright: '© Diego Pedro. Todos os direitos reservados.',
    },
};
