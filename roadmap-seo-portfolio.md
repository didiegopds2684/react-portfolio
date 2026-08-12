# Roadmap: Validação de SEO e Indexação do Portfólio (via Claude Code)

Use este documento como prompt/checklist para o Claude Code. Cole cada etapa (ou o arquivo inteiro) no terminal do Claude Code, dentro da pasta do projeto, e peça para ele executar e reportar o resultado de cada checagem.

---

## Etapa 0 — Preparação
**Prompt sugerido para o Claude Code:**
> "Analise a estrutura deste projeto (framework usado, se é SPA ou SSR/SSG, onde ficam os arquivos públicos) antes de começar as validações de SEO abaixo."

Isso importa porque os passos seguintes mudam dependendo se o site é React puro (Vite/CRA), Next.js, Astro, HTML estático, etc.

---

## Etapa 1 — Publicação e Acessibilidade
- [ ] Confirmar que existe um build de produção funcional (`npm run build` ou equivalente)
- [ ] Verificar se o site está configurado para deploy (Vercel/Netlify/GitHub Pages) com `vercel.json`, `netlify.toml` ou workflow do GitHub Actions
- [ ] Checar se não há proteção por senha, `noindex` acidental, ou bloqueio de ambiente de staging

**Prompt:** *"Verifique se há configuração de deploy no projeto e se existe algum meta tag ou header bloqueando indexação (noindex, X-Robots-Tag)."*

---

## Etapa 2 — Title, Meta Description e URLs
- [ ] Cada página/rota tem `<title>` único
- [ ] Cada página tem `<meta name="description">` com conteúdo relevante (não vazio, não duplicado)
- [ ] URLs são legíveis e sem parâmetros desnecessários
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) presentes, pois melhoram compartilhamento e SEO

**Prompt:** *"Liste todas as páginas/rotas do site e verifique se cada uma tem title, meta description e og:tags únicos e preenchidos. Aponte quais estão faltando ou duplicadas."*

---

## Etapa 3 — Sitemap.xml
- [ ] Existe um `sitemap.xml` gerado (estático ou via build)
- [ ] O sitemap lista todas as rotas reais do site
- [ ] URLs no sitemap batem com o domínio final de produção

**Prompt:** *"Gere (ou valide, se já existir) um sitemap.xml cobrindo todas as rotas do projeto. Se o framework tiver plugin nativo para isso (ex: next-sitemap, astro-sitemap), use-o."*

---

## Etapa 4 — Robots.txt
- [ ] Existe `robots.txt` na raiz pública
- [ ] Ele permite rastreamento das páginas relevantes (`Allow: /`)
- [ ] Ele referencia o sitemap (`Sitemap: https://seudominio.com/sitemap.xml`)

**Prompt:** *"Crie ou valide o robots.txt na pasta pública, garantindo que aponte para o sitemap.xml e não bloqueie páginas importantes."*

---

## Etapa 5 — Google Search Console (ação manual + validação técnica)
Esta etapa exige ação sua fora do Claude Code, mas ele pode preparar tudo:
- [ ] Claude Code confirma que o site tem um jeito de inserir a tag de verificação do Google (meta tag ou arquivo HTML)
- [ ] Você mesmo cadastra o domínio em https://search.google.com/search-console
- [ ] Você envia o sitemap.xml manualmente no Search Console
- [ ] Você usa "Inspecionar URL" para pedir indexação das páginas principais

**Prompt:** *"Adicione um placeholder para a meta tag de verificação do Google Search Console no <head>, para eu preencher com o código que a ferramenta vai me dar."*

---

## Etapa 6 — Performance e Responsividade
- [ ] Rodar Lighthouse/PageSpeed no build de produção
- [ ] Checar imagens não otimizadas (tamanho, formato — preferir WebP/AVIF)
- [ ] Checar se o layout é responsivo em mobile
- [ ] Se for SPA sem SSR, avaliar se o conteúdo aparece no HTML inicial (View Source) ou só após JS rodar

**Prompt:** *"Rode uma auditoria de performance (Lighthouse via CLI, se disponível) no build de produção e liste os principais problemas de performance, acessibilidade e SEO apontados."*

---

## Etapa 7 — Conteúdo Textual e Dados Estruturados
- [ ] Projetos e seções têm texto real (não só imagens/screenshots)
- [ ] Adicionar dados estruturados JSON-LD (schema.org `Person` e/ou `CreativeWork`) descrevendo você e seus projetos

**Prompt:** *"Adicione um bloco JSON-LD no <head> com schema.org Person, incluindo nome, cargo, links de redes sociais e habilidades, baseado no conteúdo já existente no site."*

---

## Etapa 8 — Backlinks e Presença Externa (fora do código)
Isso não é validável pelo Claude Code, mas vale como lembrete:
- [ ] Adicionar link do portfólio no perfil do LinkedIn
- [ ] Adicionar link do portfólio no GitHub (bio e README de projetos)
- [ ] Compartilhar em comunidades relevantes (Dev.to, Twitter/X, fóruns da área)

---

## Etapa Final — Checklist consolidado para o Claude Code rodar de uma vez

Prompt único para rodar tudo em sequência:

> "Faça uma auditoria de SEO neste projeto de portfólio: 1) verifique title, meta description e og:tags de cada página; 2) valide ou gere sitemap.xml e robots.txt; 3) adicione JSON-LD com schema.org Person; 4) rode Lighthouse no build de produção e reporte os scores de SEO, performance e acessibilidade; 5) liste tudo que está faltando com um checklist final."

---

**Nota:** Os itens de Search Console e backlinks exigem ação humana (login em contas, edição de perfis) — o Claude Code pode preparar o terreno técnico, mas não substitui esses passos manuais.
