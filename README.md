<h1 align="center">
  <a href="https://vx-charles.github.io/landing-page-react-truechange/">
    <img src="./git images/logo.svg" alt="Logo True Change" width="300">
  </a>
  <p align="center">
    Landing Page React JS True Change
  </p>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/count/vx-charles/landing-page-react-truechange" />
  <img src="https://img.shields.io/github/repo-size/vx-charles/landing-page-react-truechange" />
  <img src="https://img.shields.io/github/last-commit/vx-charles/landing-page-react-truechange" />
</p>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o projeto</a> •
 <a href="#visão-do-projeto">Visão do projeto</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias</a> • 
 <a href="#comandos-usados-no-projeto">Comandos</a>
</p>

## Sobre o projeto

Projeto simples feito baseado em um teste de Landing Page feita com React JS + Typescript. O projeto foi criado usando o comando `npx create-react-app teste-true-change --template typescript` [clique aqui para mais informações](https://create-react-app.dev/docs/adding-typescript/). 

Foi usado a tecnologia React JS junto com Typescript, para tipagem do JS e com isso ter uma manutenção do código mais fácil, além de nos mostrar o que está sendo passado como parâmetro da função e nos mostrar que tipo de dado existe nos objetos que está sendo passado baseado na interface declarada usando Typescript.

Os arquivos foram organizados em componentes na pasta "/src" dentro da pasta "/components" e cada pasta, dentro contem o arquivo index.tsx (Typescript react) e styles.scss. Cada componente são as sessões que formam a landing page junto com os seus estilos. 

A build gerada para produção com o comando `npm run build` usa o módulo do "react scripts" que faz todo esse processo de geração dos arquivos estáticos, além de minificar os códigos HTML, JS e CSS para produção. O processo de build gera uma pasta chamada "/build".

A Landing page está online no Github pages: https://vx-charles.github.io/landing-page-react-truechange/
## Visão do projeto
### Versão Desktop
<h2 align="center">
  <img src="./git images/image-readme-1.png" alt="img-1">
</h2>

### Versão Mobile
<h2 align="center">
  <img src="./git images/image-readme-2.png" alt="img-2">
</h2>

## Tecnologias utilizadas
  - [Create React App](https://create-react-app.dev/docs/adding-typescript/)
  - [React](https://www.npmjs.com/package/react)
  - [ReactDOM](https://www.npmjs.com/package/react-dom)
  - [SASS](https://www.npmjs.com/package/sass)
  - [React Slick](https://react-slick.neostack.com/docs/get-started)
  - [Axios](https://www.npmjs.com/package/axios)
  - [Gulp](https://www.npmjs.com/package/gulp)
  - [Gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)

<br />

## Comandos usados no projeto
### Instalando as dependências e rodando o projeto na pasta Raiz
Abra a pasta do projeto e dentro dele execute primeiro `npm install` no prompt de comando ou terminal para instalar as dependências do projeto:

```
npm install
```

Após as instalações das dependências, basta executar o projeto:
```
npm run start
```
O servidor irá rodar no `http://localhost:3000` ao executar `npm run start`.

### Criando a build do projeto
O comando gera os arquivos estáticos dentro da pasta "/build" para ser usado em produção:
```
npm run build
```

### Criando a build do projeto e fazendo o deploy para o Github Pages
O comando deploy `npm run deploy` irá fazer os seguintes processos:
1. Gerar a pasta build
2. Entrar na pasta node_modules/.bin
3. Por fim, executar o .bin da dependência gh-pages (github pages) criar a branch "gh-pages" no seu Github para finalmente subir e publicar os arquivos dentro da build para o Github pages.
```
npm run deploy
```
### Automatização de tarefas usando Gulp.js para minificar qualquer imagens do site.
O comando irá minificar todos os tipos de imagens que estão dentro da pasta "/assets". Antes de criar a build, execute esse comando para minificar as imagens e depois fazer a build (pode-se usar esse comando direto no comando da build).
```
npm run gulp
```
