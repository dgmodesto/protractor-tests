![Lint and Tests](https://github.com/dgmodesto/protractor-tests/workflows/Lint%20and%20Tests/badge.svg)

# curso-protractor

## Projeto para o curso Arquitetura de Teste com Protractor

### Pré-requisitos

É necessário os seguintes sistemas instalados para a execução do projeto
  - Node.js (`12.16.3`) e NPM (`6.14.5`)
  - Navegadores
    - Google Chrome
    - Mozila Firefox

### Instalação
  - Após clonar o projeto, acesse o diretório do mesmo e execute `npm install`
    para instalar as dependências de desenvolvimento

### Executando os testes
  - Execute `npm run pretest:local && npm test` para executar os testes em modo _headless_ em ambos os navegadoes Chrome e Firefox;

#### Executando os testes em navegador específico


##### Chrome
  - Execute `npm run pretest:local && npm run test:chrome` para executar os testes em modo _headeless_ somente no navegador Chrome



##### Firefox
  - Execute `npm run pretest:local && npm run test:firefox` para executar os testes em modo _headeless_ somente no navegador firefox


Um projeto criado pelo curso disponibilizado pela [Udemy](www.udemy.com.br)