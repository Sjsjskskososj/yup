# API Node.js MVC (bcrypt + JWT + Yup)

Atividade SENAI SC: criar uma API Node.js seguindo MVC, com **cadastro de usuários** e **autenticação** usando:

- `bcrypt` para criptografar senha
- `jsonwebtoken` (JWT) para autenticar
- `yup` para validar

## Como rodar

Crie um arquivo `.env` baseado em `.env.example`.

Instale dependências:

```bash
npm install
```

Rodar em dev:

```bash
npm run dev
```

## Rotas

- `POST /users` cria usuário
- `POST /auth/login` autentica e retorna token JWT
- `GET /me` rota protegida (Bearer token)

## Exemplos (curl)

Cadastro:

```bash
curl -X POST http://localhost:3000/users ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Arthur\",\"email\":\"arthur@example.com\",\"password\":\"12345678\"}"
```

Login:

```bash
curl -X POST http://localhost:3000/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"arthur@example.com\",\"password\":\"12345678\"}"
```

Me:

```bash
curl http://localhost:3000/me -H "Authorization: Bearer <TOKEN>"
```

