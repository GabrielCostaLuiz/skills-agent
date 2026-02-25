# Antigravity Skills Repository

Este repositório é uma coleção de habilidades (skills) personalizadas para o Antigravity. Elas são projetadas para serem facilmente integradas em diversos projetos, fornecendo funcionalidades avançadas e padronização.

## Como Usar

Para puxar estas skills para o seu projeto, você pode clonar este repositório ou usar os comandos do Antigravity para adicionar skills individuais.

## Skills Disponíveis

### 🛠️ [Technical Design Doc Creator](./skills/technical-design-doc-creator/SKILL.md)
Cria Documentos de Design Técnico (TDD) abrangentes seguindo padrões da indústria, com seções obrigatórias, seções opcionais e coleta interativa de informações faltantes.

### 🎨 [Web Design Guidelines](./skills/web-design-guidelines/SKILL.md)
Analisa código de UI para verificar a conformidade com as diretrizes de interface web (padrão Vercel), focando em acessibilidade, performance e UX.

### 🎭 [Playwright Skill](./skills/playwright-skill/SKILL.md)
Automação completa de navegador com Playwright. Detecta servidores de desenvolvimento, realiza testes responsivos, valida fluxos de login e captura screenshots.

### ⚛️ [React Best Practices](./skills/react-best-practices/SKILL.md)
Guia de otimização de performance para React e Next.js da Vercel Engineering. Focado em eliminar waterfalls, otimizar bundle size e performance no servidor/cliente.

### 🛡️ [Security Best Practices](./skills/security-best-practices/SKILL.md)
Realiza revisões de segurança e sugere melhorias baseadas em padrões da indústria. Focado em prevenção de IDOR, proteção de dados e escrita de código seguro por padrão.

### 🔍 [SEO Optimization](./skills/seo-optimization/SKILL.md)
Otimização para mecanismos de busca baseada no Lighthouse e diretrizes do Google. Cobre SEO técnico, sitemaps, dados estruturados (JSON-LD) e acessibilidade mobile.

### 🚀 [Astro Performance](./skills/perf-astro/SKILL.md)
Otimizações específicas para Astro visando notas 95+ no Lighthouse. Cobre inlining de CSS crítico, compressão de assets, carregamento de fontes e otimização de LCP.

### 📊 [Lighthouse Audits](./skills/perf-lighthouse/SKILL.md)
Execução de auditorias Lighthouse via CLI/API, interpretação de relatórios e definição de orçamentos de performance (budgets). Ideal para monitoramento contínuo e CI.

### ✅ [Web Quality Audit](./skills/web-quality-audit/SKILL.md)
Auditoria abrangente de qualidade web (Performance, Acessibilidade, SEO e Boas Práticas). Fornece diagnósticos detalhados e recomendações acionáveis baseadas no Lighthouse.

### ⚡ [Web Performance Optimization](./skills/perf-web-optimization/SKILL.md)
Otimização de Core Web Vitals (LCP, CLS, INP), redução de bundle size, compressão de imagens e estratégias de cache para alta performance.

### ⏱️ [Core Web Vitals](./skills/core-web-vitals/SKILL.md)
Otimização específica das métricas vitais do Google (LCP, INP, CLS). Guia técnico para resolver problemas de carregamento, interatividade e estabilidade visual.

### 🎨 [Frontend Blueprint](./skills/frontend-blueprint/SKILL.md)
Consultor sênior de design e frontend. Guia o processo de descoberta, coleta de referências e design tokens antes da implementação, garantindo interfaces de alta fidelidade e pixel-perfect.

---

## Estrutura do Repositório

```text
/skills
  /{skill-name}
    SKILL.md    # Definição e instruções da skill
    /scripts    # Scripts auxiliares (opcional)
    /assets     # Recursos adicionais (opcional)
```

## Contribuindo

Para adicionar uma nova skill:
1. Crie uma nova pasta em `/skills`.
2. Adicione um arquivo `SKILL.md` seguindo o template do Antigravity.
3. Atualize este README.
