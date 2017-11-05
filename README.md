# BestPrice
Características
---------------
* SPA - Single Page Application
* PWA - Progressive Web App
* RWD - Responsive Web Design
* RESTful - Representational State Transfer
* DRY - Don't repeat yourself

Frameworks & Ferramentas
------------------------
* NodeJs v9.0.0
* ReactJs v16.0.0 + React-Router v4.2.0
* Webpack v3.8.1 + Webpack-Dev-Server v2.9.3 

Linguagens de Programação
-------------------------
* HTML5
* ECMAScrit 6 / ES6 / ES2015 -> VanillaJs
* JSX
* SASS -> CSS
* CommonJs

# Instruções
Instalação
----------
Antes de começar, instale as dependencias com o comando:
```shell
$ npm install
```

Comandos
---------
1) Para compilar para **produção**:
```shell
$ npm run build
```

2) Para compilar para **desenvolvimento**:
```shell
$ npm run dev
```

3) Para começar um **[localost](http://localhost:8080)** no ambiente de desenvolvimento:
```shell
$ npm test
```

4) Para iniciar o **[servidor](http://localhost:3000)** do node
```shell
$ npm start
```

5) Para implementar no servidor do firebase
```shell
$ npm run deploy
```
Instruções
----------
Para desenvolver o website, use os comandos 2 ou 3. A difereença é o comando 2 irá criar uma pasta public enquanto o 3 irá abrir o servidor com os arquivos em memória. Ambos pegam a pasta src/ como fonte e tudo que é modificado no na src/ é automaticamente atualizado na pasta public ou em memória.

Para desenvolver o servidor, use primeiro o comando 1 e depois o comando 4. Isto significa que estará criando uma pasta public otimizada pelo comando 1 e começara a rodar um servidor local na porta 3000.

# FAQ
#### Como serão os arquivos após compilados?
- public
  - index.html
  - favicon.ico
  - js
    - bundle.js

#### Componentes só podem ser desenvolvidos em .jsx + .scss?
No momento sim, pois só instalei o transpiller pra sass

#### Por que React e não Angular, Vue, Ember ou Backbone?
Pois React está muito bem colocado no mercado.
* https://github.com/facebook/react/wiki/sites-using-react
* http://www.timqian.com/star-history/#facebook/react&angular/angular&vuejs/vue
* https://hackernoon.com/5-best-javascript-frameworks-in-2017-7a63b3870282

#### Posso instalar como se fosse um aplicativo?
Por enquanto PWA não está funcionando

# Autores
* Andrew Kenji Hanasiro [email](mailto:andrewkanasiro@gmail.com) [github](https://github.com/AndrewHanasiro)
* Gabriel Fernandes Gonzales
* Wagner Roberto Balsani
* Yuri Kobashigawa

# Licença
Este projeto está sobre a licença [MIT](https://github.com/AndrewHanasiro/bestprice/LICENSE).

# TODO List

Front-end
---------
* stage-1: /home - /contact
* stage-2: /product
* stage-3: /lista
* stage-4: /product/predict
* stage-5: testar com back-end resquest e response

Back-end
--------
* stage-1: criar o banco de dados com valores simulados
* stage-2: desenvolver a parte do Banco de Dados no server.js
* stage-3: Desenvolver compare.js
* stage-4: Desenvolver regression.js