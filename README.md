# Tela de Registro e Login

Este projeto implementa uma tela de registro e login, permitindo que os usuários se cadastrem e acessem suas contas de forma simples e eficiente.

## Descrição

A aplicação fornece uma interface intuitiva para registro e login de usuários. O objetivo é facilitar o acesso ao sistema, garantindo que apenas usuários cadastrados possam realizar login.

## Tecnologias

- HTML
- CSS
- JavaScript

## Instalação

Para executar este projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/samuelsilva502/tela-de-registro-e-login.git

2. Navegue até o diretório do projeto:
   ```bash
   cd tela-de-registro-e-login
   
3. Abra o arquivo index.html em seu navegador.

## Uso
Após abrir o arquivo index.html, você verá a tela de registro. Siga os passos para criar uma nova conta ou faça login se já tiver um cadastro.

## Endpoints

### POST /api/register
- Descrição: Registra um novo usuário.
- Corpo da Requisição:
  ```bash
  {
  "username": "string",
  "password": "string",
  "email": "string"
  }

### POST /api/login
- Descrição: Faz login de um usuário existente.
- Corpo da Requisição:
  ```bash
  {
  "username": "string",
  "password": "string"
  }
