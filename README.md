# Projeto Backend - Cadastro de Clientes
### Visão Geral
 ***Este projeto é uma aplicação backend construída com Fastify e Prisma ORM.*** 
 ***Ele se conecta a um banco de dados MongoDB e fornece endpoints para gerenciar clientes.***
 ***O código inclui modelos, controladores e rotas para lidar com operações relacionadas a clientes, como criar, listar e excluir clientes.***

 ### Tecnologias
<ul>
 <li><a href="https://fastify.dev/"> Fastify </a></li>
 <li><a href="https://www.prisma.io//"> Prisma ORM </a></li>
 <li><a href="https://www.mongodb.com/"> MongoDB </a></li>
 <li>TypeScript</li>
</ul>

## Configuração do Projeto

***Clone o repositório:***
```
git clone https://github.com/rubens-correa/backend-cadastro-clientes.git
cd backend-cadastro-clientes

```

***Instale as dependências:***

```
npm install

```
## Configure as variáveis de ambiente

***Execute o comando de geração do Prisma para gerar o Cliente Prisma:***

```
npx prisma generate

```

***Inicie o servidor de desenvolvimento:***
```
npm run dev

```

***obs:Substitua your-mongodb-connection-string pela sua string de conexão do MongoDB.***

```
DATABASE_URL="your-mongodb-connection-string"

```
## Schema do Prisma

````
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Customer {
  id         String    @id @default(auto()) @map("_id") @db.ObjectId
  name       String
  email      String
  status     Boolean
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())

  @@map("customes")
}

````

## Frontend da Aplicação

### Para rodar o backend desta aplicação, siga as instruções no repositório do backend:

***<a href="https://github.com/rubens-correa/frontend-cadastro-clientes.git">Frontend Cadastro de Clientes</a>***


### Licença

***Este projeto está licenciado sob a Licença MIT***
