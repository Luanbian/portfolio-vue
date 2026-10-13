# Portfolio (Vue)

Portfólio pessoal one-page em Vue 3, bilíngue (PT-BR/EN), deploy na Vercel.

## Stack

- Vue 3 + TypeScript + Vite 4 (SPA estática, sem router, sem backend)
- `vue-i18n` (Composition mode, `legacy: false`) para traduções
- `vue3-styled-components` para estilos (CSS-in-JS em `src/styles/`)
- Node `22.x` (fixado em `engines`, usado pela Vercel)

## Build & Run

- Dev: `npm run dev`
- Build: `npm run build` (roda `vue-tsc` antes do `vite build` — erro de tipo quebra o deploy)
- Preview do build: `npm run preview`
- Lint: sem script; usar `npx eslint src --ext .ts,.vue`
- Testes: não existem

## Deploy

- Vercel com detecção automática de Vite (sem `vercel.json`): build `npm run build`, saída `dist/`
- Sempre rodar `npm run build` localmente antes de push na `main`

## Estrutura

- `src/App.vue` → empilha as seções na ordem da página
- `src/views/*-view.vue` → uma seção da página (presentation, habilities, projects, references, about, contact)
- `src/components/` → blocos usados pelas views (cards de skills, projetos, referências, troca de idioma)
- `src/styles/*-styled.ts` / `*-style.ts` → styled-components por seção; `variables.css` tem as cores em CSS vars
- `src/locales/messages.ts` → todos os textos, chaves `ptbr` e `en` sob o namespace `message`
- `public/images/` → ícones e imagens, referenciados por caminho absoluto (`/images/x.svg`)
- `public/fonts/` → fontes `Title` (Benguiat) e `Subtitle` (Literata)

## Convenções

- Texto visível vai em `messages.ts` nas duas línguas (`ptbr` e `en`) e é usado via `$t('message.chave')`
- Estilo de seção vai no arquivo de `src/styles/` correspondente, não em `<style>` no SFC
- Styled components com nome que colide com tag HTML levam letra duplicada (`Titlee`, `Mainn`, `Buttonn`) — manter o padrão
- "habilities" é o nome usado para a seção de skills; manter por consistência
- Componentes novos: preferir `<script setup lang="ts">` (código antigo mistura Options API)
- Ícones de tecnologia via `unplugin-icons` (inline no build, zero requests): `import X from "~icons/logos/<nome>"`; buscar nomes em icones.js.org (set `logos`, fallback `devicon`). Não adicionar SVG de tecnologia em `public/images/`
- Skills são editadas em `src/components/Card-section.vue` (`rows`: duas linhas de ícones por card)
- Projetos são editados em `src/components/Project-section.vue` + chaves em `messages.ts`

## Git

- Conventional Commits em inglês, minúsculo: `feat:`, `fix:`, `chore:`, `refactor:`
- Trabalho direto na `main`

## Pontos de atenção

- Fontes carregam via import de `public/fonts/fonts.css` em `src/styles/presentation-styled.ts`, não pelo `index.html`
- Rolagem entre seções usa `id` + `scrollIntoView` (ex.: `#about`), não offsets fixos
- Formatação inconsistente (aspas simples sem `;` vs aspas duplas com `;`); seguir o estilo do arquivo editado
