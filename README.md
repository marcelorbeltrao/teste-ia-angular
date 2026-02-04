## Pré-requisitos

Os itens abaixo devem estar instalados e configurados:

- Instale o Node.js versão 16.16.0
- Instale o Angular CLI versão 15.2.10
- Instale o Git
asdsds
//testeAAAAasdasdsasdasd
ASASDAsdfsadfadhhhh
## Configuração do arquivo .npmrc

As configurações devem ser realizadas editando o arquivo `C:\Users\[user_name]\.npmrc`

Caso você esteja trabalhando fisicamente no Sicoob utilize as configurações abaixo.

```
strict-ssl=false

registry=http://registry.npmjs.org/

@sicoob:registry=http://nexus.sicoob.com.br/repository/npm-sicoob/

proxy=http://[user_name]:[password]@[proxy-ip]:[port]

noproxy=nexus.sicoob.com.br
```

Caso você esteja trabalhando remotamente no Sicoob utilize as configurações abaixo.

```
strict-ssl=false

registry=http://registry.npmjs.org/

@sicoob:registry=http://nexus.sicoob.com.br/repository/sicoob-npm-releases/

noproxy=nexus.sicoob.com.br
```

## Inicie o projeto

Para iniciar o projeto localmente você deve executar os comandos abaixo.

```
git clone http://git.sicoob.com.br/sisbr3/angular-seed.git
cd angular-seed
npm install
npm run start:dev
```

Acesse o browser na url `http://localhost:4200/`, para visualizar o aplicativo angular. 
Na url `http://localhost:3000` verifique os mocks dos endpoints.

### Start ambiente de desenvolvimento com json-server

npm run start:dev

### Start ambiente de desenvolvimento sem json-server

npm start

## Atualizando de dependências Sicoob

#### Atualizando a versão do @sicoob/ui
npm install @sicoob/ui@latest --save

#### Atualizando a versão do @sicoob/ds-web
npm install @sicoob/ds-web@latest --save

#### Atualizando a versão do @sicoob/security
npm install @sicoob/security@latest --save


## Publicação da aplicação nos ambientes de TI, homologação e produção

Substitua a tag `<INFORME ARTIFACT ID CORRESPONDENTE AO DELIVERY>` no arquivo `package.json` com o Artifact ID correspondente registrado no Delivery.

Nota: 
- Caso o nome do projeto no `package.json` esteja diferente do Artifact ID registrado no Delivery, a versão da aplicação não estará disponível para publicação na esteira de Deploy.
- Caso o contexto do projeto utilizado na configuração de build no arquivo `package.json` esteja incorreto, o carregamento do projeto não funcionará como esperado nos ambientes de TI, Homologação e Produção, exibindo apenas o preloader.
