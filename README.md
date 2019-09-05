"# ReactJS-Labs"  - OK
1) O que é ReactJS? - OK
2) Criando projeto - OK
3) O que são componentes? - OK
4) Criando Header - OK
5) Buscando produtos da API -OK
6) Armazenando no estado - ok
7) Listando produtos - Ok
8) Página Anterior/Próxima - ok
9) Configurando Navegação - OK
10) Navegando pro detalhe - OK
---------------------------------------------------
 Cloning gitlinuxdev@gmail.com
---------------------------------------------------
OBJETIVOS:
> Princípios básicos React
> Componetização
> Roteamento
> Ciclos de Vida
> Utilização API
> Estado
> Propriedades
> Estilização



1) O que é ReactJS ?
---------------------------------------------------




2) Criando Projeto ReactJS
---------------------------------------------------
 NodeJS

 --------------------------------------------------
 NPM

----------------------------------------------------
 Yarn

----------------------------------------------------
ReactJS

sudo npm install -g create-react-app

Create-react-app
create-react-app huntweb

execução 
cd huntweb
yarn start 

----------------------------------------------------
3) O que são componentes ?

Conceito de Componetização ReactJS
index.js -> Primeiro Arquivo Aberto
      >  Importa o React -> Par ao JSX funcionar
      > JSX-> Interface HTML internamente ao JavaScript
      > ReactDOM.render-> Uma única vez durante toda a aplicação, redenriza o primeiro  componente /app <div id="root"></div> no index.html
      > App.js é uma classe que extende o componente do React, sendo assim um componente.
      > Component ReactJS -> É um conjunto de parte visual HTML, parte funcional que é JavaScript e estilização CSS.
      > Compotente ReactJS = HTML + JavaScript + CSS
      > Componente ReactJS = Cabeçalho + Rodapé + Lista
      > Componente = Lógica + Estrutura + Estilização
      > Componente tem um único método obrigatório, método Render(), que retorna o conteúdo JSX(HTML), ao invés de class utiliza-se className, pq Class é uma palavra reserva do Java Script

      ----------------------------------------------------------------
4) Criando Header
      Header -> Primeiro componente que será estilizado
      Criar arquivo:
                          /src/components/Header
      Stateless Component -> Cria Componentes no React como funções
      Struture Header:
      /src/components/Header
                                    > index.js
                                    > styles.css

    ------------------------------------------------------------------------
    5) Buscando produto  de uma api

    > Instalar Axios
      yarn add axios

      > criar pasta ./src/services
            >api.js
            import axios from 'axios';

            {baseURL: "https:}

---------------------------------------------------------------------------
ReactJS possui o ciclo de componente:
    componentDidMount()
-----------------------------------------------
6) Armazenando no estado

>Variáveis de Estado=> 

state = {
      products:[],
}

>Contagem de Produtos pelo método render()

render(){
  return <h1>Contagem de Produtos</h1>

>Consulta a base MongoDB pelo ReactJS
render(){
  return(
    <div className="product-list">
      {this.state.products.map(product => (
        <h2 key={product._id}>{product.title}</h2>
      ))}
    </div>
  ); 
 }
---------------------------------------------------
7) Listando Produtos

> editando index.js
render()
   substituir <h2> para <article>


> criando styles.css
    /src/pages/main/styles.css

-------------------------------------------------------------------
8) Página anterior/próxima

remover styles.css

  cursor: pointer;
--------------------------------------------------------------------
9) Configurando Navegação
=>Instalar Biblioteca React Router DOM
yarn add react-router-dom

=> Criar arquivos na raiz
   ./routes.js

=> Importar BrowserRouter, Switch, Route

=> Criar componentes Routes

=> <BrowserRouter>
   <Switch>
    <Route path="/" component={Main} />
   </Switch>
   </BrowserRouter>

=> App.js
    import Routes from './routes';

=> Página Pages no Página
   /pages/product

   Criar index.js             
----------------------------------------------------
10) Navegando pro detalhe - OK

>/src/pages/product/index.js
