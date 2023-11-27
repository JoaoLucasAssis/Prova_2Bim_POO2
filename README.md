## Node

npm init -y

## Typescript

npm install typescript ts-node @types/node --save-dev

npx tsc --init

## Prisma

npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init

## Express

npm install express @types/express --save-dev

## Nodemon

npm install nodemon --save-dev 

## package.json Script

"scripts": {
    "start-server": "nodemon src/server.ts",
    "migrate": "npx prisma migrate dev --name init",
    "build": "npx tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

## tsconfig.json Script

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["node"]
  }
}

## JSON utilizados para CRUD no banco de dados

Foi utilizado a extensão Thunder-Client para enviar requisições http e receber respostas

### Tabela usuario

{
  "nome": "joao",
  "email": "joao@uvv"
}

### Tabela leilao

{
  "produto": "quadro",
  "preco": 3000,
  "dono": {
    "nome": "joao",
    "email": "joao@uvv"
  },
  "listaLances": "2500"
}

### Tabela lance

{
  "comprador": {
    "nome": "joao",
    "email": "joao@uvv"
  },
  "leilao": {
    "produto": "quadro",
    "preco": 3000,
    "dono": {
      "nome": "joao",
      "email": "joao@uvv"
    },
    "listaLances": "2500"
  },
  "valor": 2900
}