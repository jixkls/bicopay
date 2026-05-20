# 🦜 BicoPay API

API backend para o **BicoPay** — plataforma de gestão de freelances para prestadores de serviços brasileiros. Gerencie contratos, pagamentos e clientes em um só lugar.

---

## 🚀 Tecnologias

- **Runtime**: Node.js + TypeScript
- **Framework**: Fastify
- **ORM**: TypeORM
- **Banco de dados**: PostgreSQL
- **Validação**: Zod

---

## 📁 Estrutura do projeto

```
src/
├── config/         # Configuração de envs (Zod) e conexão com banco (TypeORM)
├── entities/       # Entidades do TypeORM (mapeamento de tabelas)
├── types/          # Enums e tipos compartilhados
├── routes/         # Definição das rotas
├── controllers/    # Recebe as requisições e chama os services
├── services/       # Lógica de negócio
└── index.ts        # Entry point da aplicação
```

---

## ⚙️ Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL

### Instalação

```bash
git clone https://github.com/seu-usuario/bicopay-api
cd bicopay-api
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/bicopay
JWT_SECRET=sua_chave_secreta
```

### Rodando em desenvolvimento

```bash
npm run dev
```

---

## 🗂️ Entidades

| Entidade   | Descrição                                      |
|------------|------------------------------------------------|
| `User`     | Freelancers, clientes e administradores        |
| `Contract` | Contratos entre freelancer e cliente           |
| `Payment`  | Parcelas ou pagamento único de um contrato     |

---

## 📄 Licença

MIT
