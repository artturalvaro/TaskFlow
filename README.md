# TaskFlow

**TaskFlow** é a interface web de um sistema de gerenciamento de tarefas com autenticação de usuários. Este repositório contém apenas o **frontend**, desenvolvido com **Next.js** e integrado a uma API escrita em **GoLang** (disponível no repositório [TaskFlowAPI](https://github.com/artturalvaro/TaskFlowAPI)).

## Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **Axios**
- **Tailwind CSS**
- **JWT (via API)**

## Funcionalidades

- Registro e login de usuários
- Validação de sessão com JWT
- Visualização de tarefas
- Criação, edição e exclusão de tarefas
- Interface responsiva e amigável

## Como Rodar o Projeto

### Requisitos

- Node.js (v16 ou superior)
- API rodando localmente (consulte [TaskFlowAPI](https://github.com/artturalvaro/TaskFlowAPI))

### Passos

1. **Clone o repositório**
   git clone https://github.com/artturalvaro/TaskFlow.git
   cd TaskFlow

2. **Instale as dependências**
   npm install

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env.local` com:
   NEXT_PUBLIC_API_URL=http://localhost:8000

4. **Execute o projeto**
   npm run dev

Acesse a aplicação em http://localhost:3000.

## Estrutura do Projeto


- `app/` – Páginas da aplicação usando App Router (Next.js 13+)
- `components/` – Componentes reutilizáveis
- `services/` – Arquivos para requisições à API
- `lib/` – Funções auxiliares como autenticação e cookies
- `types/` – Tipagens TypeScript
- `utils/` – Validações e funções genéricas
- `styles/` – Estilos globais da aplicação

## Licença

Este projeto está licenciado sob a licença MIT.