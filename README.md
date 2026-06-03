# Sistema de Login em React - Parte 1

Este repositório contém a entrega da Parte 1 do trabalho prático de frontend. O projeto é uma tela de login simples construída utilizando React e Vite.

## Sobre o projeto

O objetivo dessa primeira etapa foi estruturar a interface visual do login e aplicar a lógica básica de validação do formulário utilizando os conceitos do React.

O que foi implementado no código:
- Renderização de lista: Os campos de e-mail e senha são desenhados na tela usando o método .map(), puxando as informações de um array guardado no arquivo utilitário loginFields.js.
- Estados do React: Uso do hook useState para capturar e guardar os dados que o usuário digita nos campos (onChange).
- Validação: O envio do formulário é interceptado pelo evento onSubmit. O sistema verifica se o e-mail digitado é "lucas@email.com" e a senha é "123456".
- Retorno em tela: Dependendo do resultado da validação, o sistema atualiza um estado de mensagem para avisar se o login foi bem sucedido ou se as credenciais estão incorretas.
- Layout: Estilização do index.css utilizando Flexbox para centralizar a caixa de login no meio da tela.

## Como rodar o projeto localmente

Para testar o código na sua máquina, siga os passos abaixo no terminal:

1. Clone o repositório:
git clone https://github.com/lucasschn1/react-pucpr.git

2. Acesse a pasta do projeto:
cd react-pucpr

3. Instale as dependências (para recriar a pasta node_modules):
npm install

4. Inicie o servidor local:
npm run dev

## Autor

Lucas Schneider Cordeiro
Estudante de Análise e Desenvolvimento de Sistemas (ADS) - PUCPR.