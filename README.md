# Pokédex Vue.js Project

Este é um projeto prático hands-on que visa desenvolver uma Pokédex interativa utilizando Vue.js, Vuex e Vue Router. A Pokédex é uma enciclopédia digital que permite aos treinadores de Pokémon catalogar e acessar informações detalhadas sobre diferentes espécies.

## Tecnologias Utilizadas
- Vue.js 2
- Vuex 3
- Vue Router 3
- HTML5
- CSS3 (com pré-processador SASS)
- JavaScript (ES6+)
- Git



## Configuração do Projeto

1. **Clone o repositório:**
   ```bash
    git clone https://github.com/AndreLuizMMS/desafio-norven-vue.git
    cd desafio-norven-vue
   ```
   
2. **Instale as dependências:**
   ```bash
    npm install
   ```

3. **Execute o projeto:**
   ```bash
    npm run serve
   ```

4. **Acesse no navegador:**
   [localhost:8080](http://localhost:8080)


# Funcionalidades Principais
- Listagem de Pokémon: Visualização de uma lista de Pokémon com nome, imagem e tipo.

- Detalhes do Pokémon: Ao clicar em um Pokémon na lista, exibição de informações detalhadas, como habilidades, características e estatísticas de batalha.

- Busca : Capacidade de buscar Pokémon pelo nome e filtrar por tipo.

- Marcação de Favoritos: Opção para marcar um Pokémon como favorito. Os favoritos são armazenados no estado global Vuex.

- Listagem de Favoritos: Visualização da lista de Pokémon favoritos.

# Consumo da API
- A  aplicação consome a API [Pokeapi](https://pokeapi.co/) para obter dados sobre os Pokémon. 

# Vuex para Gerenciamento de Estado

- O Vuex é utilizado para gerenciar o estado global da aplicação. O módulo favorites no diretório src/store/modules/favorites.js gerencia a lista de Pokémon favoritos.

# Vue Router para Navegação

- O Vue Router é utilizado para criar rotas na aplicação. As configurações de rota podem ser encontradas em src/router/index.js.

# Conclusão

- Este projeto foi desenvolvido como parte de um desafio prático para avaliação técnica, demonstrando o conhecimento em Vue.js, Vuex, Vue Router e outras tecnologias web.