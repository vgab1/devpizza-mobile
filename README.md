# DevPizza - Mobile

## Introdução

Este repositório contém o aplicativo mobile do projeto **DevPizza**, um sistema de atendimento para pizzarias.  
O app mobile é utilizado pelos garçons para realizar pedidos e gerenciar o atendimento aos clientes.  
A comunicação e integração com a cozinha e a lógica de negócios são gerenciadas pelo backend do sistema (disponível em outro repositório).

## Descrição Geral

O **DevPizza** é um sistema completo para pizzarias, onde:

- **Garçons** usam um aplicativo mobile para realizar pedidos e gerenciar atendimentos.
- **Cozinha** usa uma interface web para visualizar e preparar os pedidos.
- **Backend** gerencia toda a lógica de negócios, incluindo pedidos, produtos, autenticação e integração com serviços externos (como Cloudinary para upload de imagens).

Este repositório é dedicado ao **aplicativo mobile**, desenvolvido com **React Native** usando **Expo**.

## Tecnologias Usadas

- **React Native (Expo)**
- **TypeScript**
- **React Navigation**
- **Axios**
- **Async Storage**

### Bibliotecas e Ferramentas

- Navegação: `@react-navigation/native`, `@react-navigation/native-stack`
- Persistência local: `@react-native-async-storage/async-storage`
- HTTP requests: `axios`
- Safe Area: `react-native-safe-area-context`
- Controle de telas: `react-native-screens`
- Expo SDK (versão 53) para facilitar o desenvolvimento multiplataforma

## Principais Funcionalidades

1. **Pedidos**

- Realizar novos pedidos para clientes.
- Adicionar e remover itens nos pedidos.
- Enviar pedidos para a cozinha.
- Visualizar o status dos pedidos em tempo real.

2. **Autenticação**

- Autenticação de garçons via API do backend.
- Armazenamento de token JWT usando AsyncStorage.
- Proteção de rotas com controle de autenticação.

## Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior recomendada)
- **Expo CLI** instalado globalmente:
- npm install -g expo-cli
- Celular Android/iOS ou emulador (ou app Expo Go)
- Backend do projeto DevPizza em execução local ou hospedado

### Passos para Executar
```bash
Clone o repositório:  
git clone https://github.com/vgab1/devpizza-mobile
cd devpizza-mobile

Instale as dependências:  
npm install
Crie um arquivo `.env` na raiz do projeto e configure a URL da API:
API_URL=http://localhost:3000

Inicie o projeto:  
npm start

lua
Copiar
Editar

Ou utilize os atalhos:  
npm run android
npm run ios
npm run web

less
Copiar
Editar

Abra o app no dispositivo ou emulador com o **Expo Go** ou Android Studio/iOS Simulator.
```
## Links Úteis

- Repositório do Backend: [https://github.com/vgab1/devpizza-backend](https://github.com/vgab1/devpizza-backend)
- Repositório do Frontend Web: [https://github.com/vgab1/devpizza-frontend](https://github.com/vgab1/devpizza-frontend)

## Contato

Para obter mais informações, entre em contato comigo em:

- Email: [dev.vgab1@gmail.com](mailto:dev.vgab1@gmail.com)
- GitHub: [https://github.com/vgab1](https://github.com/vgab1)
