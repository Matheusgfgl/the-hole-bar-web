# the-hole-bar
## Desafio para Frontend Faster

O desafio esta desponivel [aqui]()
Endpoint a ser utilizado foi o [TheCocktailDB](https://www.thecocktaildb.com/api.php).

- Dado que sou um usuário eu quero visualizar as categorias de bebidas :white_check_mark:
    .Ao escolher uma categoria eu devo visualizar a lista das bebidas dessa categoria :white_check_mark:


- Dado que sou um usuário eu quero ver os detalhes da bebida. :white_check_mark:

    A aplicação deve apresentar a imagem da bebida escolhida; 
    A aplicação deve apresentar a instrução da bebida escolhida.

Dado que sou um usuário eu quero pesquisar uma bebida específica através de um campo de busca.(opcional) :white_check_mark:

### Obrigatórios

- Disponibilizar documentação para a execução e apresentação do projeto no README;
- Utilizar typescript;
- Criar nome para aplicação;
- Tratamento de erros;
- Tratamento de rotas não existentes;
- Aplicação deve ser responsiva;
- Fácil de buildar e executar a aplicação para testes

### Opcionais

- Escrever testes;
- Documentar decisões tomadas durante o desafio técnico.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
