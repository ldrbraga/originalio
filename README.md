## Visão Geral do Projeto
O objetivo do teste é o desenvolvimento de uma página que siga a linha de design proposto.

### Tecnologias
- HTML5

- CSS
  - Sass
  - Reset

- JavaScript
  - Gulp (gulp-sass, gulp-rename, gulp-connect, gulp-imagemin, gulp-htmlmin)
 
 ## Informações Iniciais
Para realizar as ações a seguir, será necessário que tenha instalado em seu computador o **git** e o **node.js**. Abaixo seguem os sites para realizar o download e efetuar a instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js - Windows/Mac](https://nodejs.org/en/download/)
- [Node.js - Linux](https://nodejs.org/en/download/package-manager/)

### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite o seguinte comando e informe a URL copiada anteriormente:
``` git
git clone <url-do-repositorio> && cd originalio
```

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando do Node.js** (caso você esteja no linux ou Mac, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
``` node
npm install
```

### Criando o projeto

Iniciar o Gulp para criação da dist e dar um start no servidor local. Para isso, de dentro da pasta raiz da pasta, rodar o comando abaixo:

```
gulp
```
O projeto estará disponível localmente no endereço: `` http://localhost:8080/`` 