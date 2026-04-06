# Stockly 📦

> Um sistema moderno de gerenciamento de estoque e controle de produtos, projetado com foco em performance e usabilidade.

![Status do Projeto](https://img.shields.io/badge/status-ativo-success.svg)

---

## 💻 Sobre o Projeto

O **Stockly** é uma plataforma de gerenciamento de estoque que permite acompanhar métricas em tempo real, gerenciar produtos e analisar vendas. A aplicação conta com um painel (dashboard) intuitivo para visualização detalhada de dados, métricas como quantidade em estoque e resumo analítico das vendas.

🔗 **Deploy / Demonstração:** [Insira o link do deploy aqui]

---

## 🚀 Tecnologias e Ferramentas

O projeto foi desenvolvido com as seguintes tecnologias do ecossistema front-end e back-end:

- **[Next.js](https://nextjs.org/)** - Framework React com App Router.
- **[React](https://reactjs.org/)** - Biblioteca para construção de interfaces de usuário de alta interatividade.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset estaticamente tipado do JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilitários CSS e rápida estilização.
- **[Prisma](https://www.prisma.io/)** - Next-generation Node.js e TypeScript ORM para acessar o banco de dados.
- **[PostgreSQL](https://www.postgresql.org/)** (via [Neon](https://neon.tech/)) - Banco de dados relacional moderno.
- **[Shadcn UI](https://ui.shadcn.com/)** e **Radix UI** - Componentes de interface com foco em acessibilidade.
- **[Zod](https://zod.dev/)** e **React Hook Form** - Para validação e gerenciamento de formulários.
- **[Recharts](https://recharts.org/)** - Geração de gráficos a partir do React.

---

## ✨ Funcionalidades

- **Dashboard Analítico:**
  - Acompanhamento da receita gerada no dia e faturamento geral.
  - Visualização de itens e quantidade total em estoque.
  - Exibição em gráficos dos produtos mais vendidos.
- **Gestão de Produtos:**
  - Operações de CRUD (Criação, Leitura, Atualização, Exclusão) aplicadas aos produtos.
  - Formulários robustos e dinâmicos com feedback instantâneo de erros no tipo/tamanho de dados.
- **Responsividade:**
  - Layout totalmente adaptativo, fluindo natural de telas maiores (desktops e TVs) a dispositivos móveis.

---

## 📋 Pré-requisitos

Para rodar o projeto corretamente, você precisará ter:

- **[Node.js](https://nodejs.org/)** (v20 ou superior recomendado).
- Gerenciador de pacotes (**npm**, **yarn**, **pnpm** ou **bun**).
- URL de conexão de um banco de dados **PostgreSQL** válido.

---

## ⚙️ Instalação e Execução

Passo a passo rápido para instalar as dependências e colocar a aplicação no ar:

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/stockly.git
   cd stockly
   ```

2. **Instale as dependências com NPM:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do seu projeto contendo as credenciais de banco de dados (conforme listado em [Variáveis de Ambiente](#-variáveis-de-ambiente)).

4. **Prepare o Banco de dados:**
   Sincronize o schema atual do Prisma com o seu PostgreSQL:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Inicie o servidor local em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

A aplicação agora estará rodando no endereço base configurado. Abra seu navegador e acesse `http://localhost:3000`.

---

## 🔑 Variáveis de Ambiente

Crie o arquivo `.env` preenchendo a chave abaixo com os seus dados locais ou do seu serviço Cloud de PostgreSQL (como o Supabase ou Neon):

```env
# URL connection string do banco de dados relacional
DATABASE_URL="postgresql://usuario:senha@host:porta/nome_do_banco_de_dados?sslmode=require"
```

> **Aviso:** Nunca versione suas credenciais em modo de produção.

---

## 📁 Estrutura de Pastas

Como o código do **Stockly** está organizado:

```text
stockly/
├─ app/                  # Roteamento do App Router do Next.js
│  ├─ (dashboard)/       # Layout e escopo de páginas internas do painel
│  ├─ _components/       # Componentes locais utilizados apenas nessas rotas
│  └─ _data-access/      # Consultas ao DB isoladas e métodos (DAL)
├─ components/           # Componentes globais genéricos de UI (como Botões e Modais)
├─ lib/                  # Códigos de utilidade geral do projeto
├─ prisma/               # Definição e abstração dos modelos do banco de dados (Schema)
└─ public/               # Assets de carregamento público (como fonts ou ícones extra)
```

---

## 🤝 Como Contribuir

Seja o que for, desde correções de pequenos erros de digitação até a construção de novas e imersivas features – você é super bem-vindo(a) para ajudar este projeto crescer.

1. Faça um **Fork** deste repositório.
2. Crie uma branch para a sua mudança: `git checkout -b feature/minha-nova-ideia`
3. Trabalhe no que almeja e faça um commit de suas alterações: `git commit -m 'feat: Adiciona x funcionalidade'`
4. Dê `push` da sua branch: `git push origin feature/minha-nova-ideia`
5. Abra sua requisição de **Pull Request** no GitHub!

Qualquer dúvida ou caso queira relatar um problema do sistema, recorra às [Issues](https://github.com/seu-usuario/stockly/issues).

---

<p align="center">
  Desenvolvido com dedicação 🩵
</p>
