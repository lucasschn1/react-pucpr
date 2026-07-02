# Sistema de Autenticação com React e Firebase - Somativa Final

Este repositório contém a entrega final do trabalho prático (Somativa 2 ) de Tecnologias Para Desenvolvimento Web. O projeto evoluiu de uma tela de login estática para uma aplicação web completa, integrada a serviços em nuvem e com navegação entre múltiplas páginas.

---

## Deploy

O projeto foi hospedado no **Netlify** e pode ser acessado pelo link abaixo:

🔗 **Acessar a aplicação:**  
https://projeto-somativa2-pucpr.netlify.app/

---

## Sobre o Projeto

O objetivo desta etapa final foi implementar um fluxo de autenticação real, conectando a interface desenvolvida em React ao Firebase, protegendo rotas e gerenciando sessões de usuários.

### Funcionalidades implementadas

- **React Router DOM**
  - Criação de três páginas:
    - Cadastro
    - Login
    - Principal
  - Navegação fluida (Single Page Application - SPA).
  - Proteção e redirecionamento de rotas.

- **Firebase Authentication**
  - Cadastro de novos usuários.
  - Login utilizando e-mail e senha.
  - Gerenciamento de autenticação.

- **Cloud Firestore**
  - Armazenamento dos dados adicionais do usuário:
    - Nome
    - Sobrenome
    - Data de nascimento
  - Associação dos dados ao UID gerado pelo Firebase Authentication.

- **Gerenciamento de Sessão**
  - Utilização do `useEffect`.
  - Monitoramento do estado de autenticação com `onAuthStateChanged`.
  - Uso de `async/await` para recuperar automaticamente os dados do usuário ao acessar a página principal.

- **Formatação de Dados**
  - Conversão da data de nascimento para o formato brasileiro (`dd/mm/aaaa`).

- **Deploy**
  - Build da aplicação utilizando **Vite**.
  - Hospedagem no **Netlify**.
  - Configuração do arquivo `_redirects` para funcionamento correto das rotas.

---

## 🛠️ Tecnologias Utilizadas

- React
- Vite
- React Router DOM
- Firebase Authentication
- Cloud Firestore
- JavaScript
- HTML5
- CSS3
- Netlify

---

## Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/lucasschn1/react-pucpr.git
```

### 2. Acesse a pasta do projeto

```bash
cd react-pucpr
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
├── pages/
│   ├── Cadastro/
│   ├── Login/
│   └── Principal/
├── routes/
├── services/
│   └── firebaseConnection.js
├── App.jsx
└── main.jsx
```

---

## Autor

**Lucas Schneider Cordeiro**

Estudante de **Análise e Desenvolvimento de Sistemas (ADS)** — **PUCPR**