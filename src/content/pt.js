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
                    'Integração de ecossistema educacional: interoperabilidade entre o ERP TOTVS e o ambiente virtual de aprendizagem D2L Brightspace, garantindo a integridade dos dados acadêmicos e administrativos.',
                    'Portais e sistemas internos: desenvolvimento e manutenção de portais educacionais e sistemas internos, com Laravel no backend e Next.js no frontend.',
                    'DevOps e infraestrutura: configuração e manutenção de ambientes de produção, com automação de deploy via CI/CD para releases contínuas e estáveis.',
                    'Automação de processos (BPM): fluxos automatizados e integrações usando a plataforma Sydle One e soluções do ecossistema Microsoft.',
                ],
            },
            {
                id: 2,
                title: 'Fullstack Web Developer',
                company: 'Verticis Web Studio',
                duration: '10/2021 – 12/2024',
                items: [
                    'Engenharia de software fullstack: desenvolvimento e estruturação de sistemas em PHP (Laravel), com foco em arquitetura MVC e construção/consumo de APIs RESTful para integração com sistemas de terceiros.',
                    'Frontend moderno e logística: sistema de gestão logística com integrações de transportadoras, usando Next.js, TypeScript e Redux para gerenciar estado complexo e alta performance de UI.',
                    'Integrações financeiras críticas: implementação e homologação de gateway de pagamento (PagSeguro), superando validações rigorosas de segurança e requisitos de transações financeiras.',
                    'Cloud e DevOps: pipelines de CI/CD (Vercel e Render) e gestão de infraestrutura AWS (EC2, Lightsail e S3). Padronização de ambientes de desenvolvimento com Docker para garantir paridade entre local e produção.',
                ],
            },
            {
                id: 3,
                title: 'PHP Developer',
                company: 'Agência Curinga',
                duration: '07/2021 – 10/2021',
                items: [
                    'Desenvolvimento de sites e sistemas: construção de sites do zero com WordPress e HTML puro, incluindo builds totalmente customizados sem temas prontos.',
                ],
            },
            {
                id: 4,
                title: 'DevOps Engineer',
                company: 'Beltech',
                duration: '08/2020 – 06/2021',
                items: [
                    'Automação de backup e manutenção de servidores: automação de backups de imagens EC2 e bancos de dados usando ferramentas da AWS. Contribuição na criação de ferramentas de automação e gestão de infraestrutura em nuvem.',
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
                title: '"Samba IA" — Automação de vendas com IA',
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
            {label: 'Início', href: '#header'},
            {label: 'Sobre mim', href: '#about'},
            {label: 'Experiência', href: '#professional'},
            {label: 'Conhecimento', href: '#skills'},
            {label: 'Projetos', href: '#portfolio'},
            {label: 'Contato', href: '#contact'},
        ],
        copyright: '© Diego Pedro. Todos os direitos reservados.',
    },
};
