# API Facilita Jurídico

Esta é uma API para gerenciar clientes e outras funcionalidades do sistema Facilita Jurídico.

## Vídeo Explicativo
https://youtu.be/UMQpYDMr8SM

## Tecnologias Utilizadas

* Node.js v14.18.3
* TypeScript v5.3.3
* Express.js v4.18.3
* PostgreSQL v8.11.3
* Cors v2.8.5
* Dotenv v16.4.5
* Uuid v9.0.1

## Configuração do Ambiente

Antes de executar o servidor, certifique-se de configurar as variáveis de ambiente em um arquivo .env na raiz do projeto. Você pode usar o arquivo .env.example como um modelo. Renomeie-o para .env e preencha com as informações necessárias.

Exemplo de arquivo .env:

```bash
DATABASE_HOST=localhost
DATABASE_USER=seu_usuario
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=nome_do_banco_de_dados
```

## Instalação

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

1. Clone este repositório:

```bash
$ https://github.com/LabuPaim/api_facilitaJuridico.git
```

2. Instale as dependências:

```bash
$ npm install
```

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
$ npm run dev
```

Isso iniciará o servidor em modo de desenvolvimento. Você poderá acessar a API em http://localhost:3000.

## Endpoints Disponíveis

-   POST /client: Crie um novo cliente.
-   GET /client: Obtenha todos os clientes.
-   GET /client/filter?filter=: Pesquise clientes com base em um filtro.
-   GET /client/fromorigin: Obtenha todos os clientes ordenados pela proximidade ao ponto de origem (0, 0).
