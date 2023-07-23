# Repositório boilerplate para projetos backend em Node.js com Typescript

## Sobre

Este é um repositório boilerplate para projetos backend em Node.js com Typescript. Ele contém uma estrutura de pastas e arquivos base que são comuns na maioria dos projetos, de modo que você não precise perder tempo configurando tudo isso sempre que for iniciar um novo projeto.

## Como usar

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone https://github.com/walber-vaz/template-backend-ts.git
```

Em seguida, instale as dependências do projeto:

```bash
yarn install
```

Por fim, inicie o servidor de desenvolvimento:

```bash
yarn dev
```

## Estrutura de pastas

A estrutura de pastas e arquivos deste repositório está organizada da seguinte maneira:

```bash
src
├── app.ts
├── config
│   └── prisma
│       └── client.ts
├── controllers
│   ├── hello.controller.ts
│   └── index.ts
├── middlewares
├── models
│   └── hello.model.ts
├── routes
│   ├── hello.route.ts
│   └── index.ts
├── server.ts
├── services
│   ├── hello.service.ts
│   └── index.ts
├── types
└── utils
```

A seguir, uma breve explicação sobre cada uma das pastas e arquivos:

- **src**: pasta raiz do projeto, onde ficam os arquivos principais;
- **app.ts**: arquivo principal da aplicação, onde são definidos os middlewares e as rotas;
- **config**: pasta onde ficam os arquivos de configuração da aplicação;
- **controllers**: pasta onde ficam os arquivos dos controllers da aplicação;
- **middlewares**: pasta onde ficam os arquivos dos middlewares da aplicação;
- **models**: pasta onde ficam os arquivos dos models da aplicação;
- **routes**: pasta onde ficam os arquivos das rotas da aplicação;
- **server.ts**: arquivo que inicia o servidor de desenvolvimento;
- **services**: pasta onde ficam os arquivos dos services da aplicação;
- **types**: pasta onde ficam os arquivos de tipos da aplicação;
- **utils**: pasta onde ficam os arquivos de utilidades da aplicação.

## Tecnologias

Este repositório boilerplate foi criado com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Cors](https://www.npmjs.com/package/cors)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Helmet](https://helmetjs.github.io/)
- [Compression](https://www.npmjs.com/package/compression)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Npm package update](https://www.npmjs.com/package/npm-check-updates)
- [Nodemon](https://nodemon.io/)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por [Walber Vaz](https://walbervazdev.com.br/).
