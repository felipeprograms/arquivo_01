# Maníaco do Parque, a investigação que marcou São Paulo

Dossiê documental interativo (React + TypeScript + Vite). Interface inspirada na estrutura editorial do Hub Criminal
(cabeçalho fixo, hero com colagem, faixa de tags, números, "Em destaque", cards Propósito/Princípios, grade de perfis,
filtros por chips e carrossel horizontal, modais, contato numerado, rodapé com aviso) com identidade visual própria.

## Instalar e rodar
    npm install
    npm run dev        # desenvolvimento
    npm run build      # verifica tipos e gera /dist
    npm run preview

## Onde atualizar
- `src/data/events.ts` linha do tempo · `people.ts` perfis · `sources.ts` fontes · `markers.ts` locais · `content.ts` textos
- `src/data/images.ts` imagens (crédito e licença obrigatórios) · `public/images/` arquivos
- `src/config.ts` e-mail de contato, data de atualização, mapa plano

## Imagens (rostos, documentos); mosaico opcional
As fotos das vítimas e do investigado (retrato falado, prisão e atual) já estão em `src/assets/images/`, sem mosaico (uso autorizado pelos autores do trabalho). Os recortes sem fundo do destaque inicial são `cut-retrato`, `cut-preso` e `cut-hoje` (PNG transparente). Chaves em uso: `p-patricia`, `p-selma`, `p-rosa`, `p-raquel`, `p-isadora`, `p-francisco`, `p-francisco-retrato`, `p-francisco-hoje`. Sem foto, o site mostra retratos em mosaico (silhuetas anônimas). Elizângela ainda não tem foto.
1. Coloque a foto original em `originals/` com o nome da chave: `p-francisco.jpg`, `p-selma.jpg`, `S07.jpg`, `hero-1.jpg`…
2. (Opcional) ajuste a caixa do rosto em `originals/faces.json`: `{ "p-selma": { "x": .3, "y": .1, "w": .4, "h": .35 } }` (frações da imagem).
3. Rode `npm run censor`: gera em `src/assets/images/` a versão com mosaico + leve desfoque no rosto.
4. Preencha crédito e licença em `src/data/images.ts`. A imagem aparece sozinha no lugar certo.
Publique apenas `src/assets/images/`; nunca a pasta `originals/`. Mosaico não substitui licença: use só material licenciado
ou autorizado e, no caso das vítimas, com consentimento da família.

## Dependências externas (em tempo de execução)
- Globo 3D: three.js + world-atlas (sem textura externa; funciona offline)
- Mapa plano: Leaflet + blocos CARTO/OpenStreetMap (precisa de internet; sem chave de API)
- Fontes: Google Fonts (há fontes de reserva)

## Limitações conhecidas
- Dados vêm de fontes secundárias; ver capítulo 12 e `sources.ts`.
- Grafo interativo de conexões não implementado (o modal de cada evento liga local, perfis e fontes).
- Não testado em navegador real nem em leitores de tela; apenas `tsc` e `vite build`.


## Publicar no GitHub Pages (para a turma abrir no celular)
1. Rode `npm install` uma vez (atualiza o `package-lock.json`) e envie tudo ao GitHub. `originals/` não vai (está no `.gitignore`).
2. No repositório: **Settings → Pages → Source: GitHub Actions**.
3. A cada `git push` na branch `main`, o workflow `.github/workflows/deploy.yml` publica o site em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
4. Envie o link (ou um QR code dele) para a turma. O layout é responsivo: celular, tablet e computador; o menu "Capítulos" e a busca funcionam por toque.

## Capítulo 13 — Direitos fundamentais (CF/1988)
`src/data/rights.ts` lista direitos violados e garantidos às vítimas e ao condenado, com artigo, explicação e selo (violado / garantido / em debate). Conferir os artigos no texto oficial (fonte S16) antes de apresentar.

## Fotos e vídeos (Autor do crime)
- Fotos: coloque o arquivo em `src/assets/images/` com o nome da chave e preencha o crédito em `src/data/images.ts`. Chaves em uso: `author-destaque`, `author-crianca`, `author-mae`.
- Vídeos: cole o link do YouTube (ou `public/videos/arquivo.mp4`) em `src/data/media.ts` (`authorVideos`).
- Conteúdo textual do autor: `src/data/author.ts` (cada parágrafo com as fontes). Perfis das vítimas: `src/data/people.ts` (campo `profile`).
