# DSCommerce Frontend

Este é o repositório do frontend do projeto DSCommerce, desenvolvido com React.

## Funcionalidades

O DSCommerce Frontend possui as seguintes funcionalidades principais:

1. **Catálogo de Produtos**: A área pública da aplicação apresenta um catálogo de produtos para os usuários.
2. **Área Administrativa**: A área administrativa permite o CRUD (Criar, Ler, Atualizar, Excluir) de produtos.
3. **Carrinho de Compras**: Os usuários podem adicionar, alterar a quantidade e remover itens do carrinho de compras.

## Tecnologias e Bibliotecas Utilizadas

O frontend do DSCommerce foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Biblioteca para roteamento de páginas no React.
- **Axios**: Biblioteca para requisições HTTP.
- **Sass**: Pré-processador CSS para estilos.
- **Moment.js**: Biblioteca para manipulação de datas e horas.
- **React Hook Form**: Biblioteca para gerenciamento de formulários no React.
- **jwt-decode**: Para decodificar o token de acesso do usuário.
- **qs**: Para manipulação de parâmetros de URL.
- **react-select**: Componente de seleção avançado.

Você pode encontrar todas as dependências listadas no arquivo `package.json` do projeto.

## Funcionalidades Destacadas

O projeto conta com as seguintes funcionalidades específicas:

1. **Autenticação e Autorização**: A aplicação possui uma área administrativa que requer autenticação e autorização dos usuários. Apenas usuários autorizados têm acesso a essa área.
2. **Carrinho de Compras**: Os usuários podem adicionar, alterar a quantidade e remover itens do carrinho de compras. O carrinho é persistido no localStorage do navegador.
3. **Catálogo de Produtos**: A área pública da aplicação apresenta um catálogo de produtos para os usuários, com paginação do tipo "Carregar Mais".
4. **Área Administrativa**: A área administrativa permite o CRUD (Criar, Ler, Atualizar, Excluir) de produtos.

## Rotas

As principais rotas do projeto são:

- `/`: Página inicial com o catálogo de produtos
- `/catalog`: Rota alternativa para a página de catálogo de produtos
- `/product-details/:productId`: Página de detalhes de um produto específico
- `/cart`: Página do carrinho de compras
- `/login`: Página de login
- `/confirmation/:orderId`: Página de confirmação de pedido (rota protegida)
- `/admin/*`: Rotas protegidas da área administrativa
  - `/admin/home`: Página inicial da área administrativa
  - `/admin/products`: Listagem de produtos
  - `/admin/products/:productId`: Formulário de produto

## Como Executar o Projeto

1. Faça o clone do repositório: `git clone https://github.com/CleristonMP/dscommerce-frontend.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm start`
4. Acesse a aplicação em `http://localhost:3000`

## Próximos Passos

Algumas melhorias planejadas para o futuro:

- Adição de um sistema de avaliação e comentários de produtos
- Integração com gateway de pagamento para finalizar compras
