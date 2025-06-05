# Crie um projeto em Expo✔️

**Expo** é uma ferramenta que facilita a criação de aplicativos React Native, eliminando a necessidade de configurar ambientes complicados como Android Studio ou Xcode. Com Expo, é possível iniciar um projeto com poucos comandos e testá-lo diretamente no celular.

-----------

### 💠Pré-requisitos

Antes de começar, é necessário ter instalado:

-   **Node.js** (recomenda-se a versão LTS)
    
-   **npm** ou **yarn**
    
-   **Expo CLI** (instalado via npm)
    
-   Um celular com o aplicativo **Expo Go** (disponível na Play Store e App Store)

----

### 📚Passo a Passo

#### 1. Instale o Expo CLI

Abra o terminal e digite:

    npm install -g expo-cli
--------
#### 🔨2. Crie o Projeto

Depois da instalação, crie um novo projeto com o seguinte comando:

    npx create-expo-exemplo-app

-------
3.  **📋Escolha um template**
    

Ao executar o comando acima, o Expo CLI perguntará qual template você deseja usar. Você pode escolher entre:

-   **blank** — projeto básico, sem extras
    
-   **blank (TypeScript)** — projeto básico com suporte a TypeScript
    
-   **tabs (TypeScript)** — projeto com navegação em abas, usando TypeScript
    
-   E outros templates que podem estar disponíveis.

Escolha o que for melhor para o seu uso.


----

4.  **📂Entre na pasta do projeto**
    

Após o projeto ser criado, entre na pasta:

    cd exemplo-app
----
5.  **🔑Inicie o projeto**
    

Execute o servidor de desenvolvimento com:

    expo start

Isso abrirá o Expo Developer Tools no navegador, de onde você pode rodar seu app em um emulador ou dispositivo físico.

----

6. **📲Testar o aplicativo no dispositivo**

-   No celular, abra o app **Expo Go**.
    
-   Use o leitor de QR Code para escanear o código exibido no terminal ou no navegador.
    
-   O app será carregado no celular, e toda modificação no código será atualizada automaticamente.
------
7.  📡Compartilhar seu App

Você pode compartilhar o app com outras pessoas via QR code, ou publicar com:

    npx expo export

--------
## 🌐 Links úteis

-   [Documentação oficial do Expo](https://docs.expo.dev/get-started/introduction/)
    
-   [Documentação do React Native](https://reactnative.dev)

-----

## ✅Pronto!  Agora você tem um projeto em Expo!