import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

//IMPORTS ADMIN

import Produtos from './pages/admin/produtos'
import ProdutosEditar from './pages/admin/produtos/produtos-editar'
import ProdutosCadastrar from './pages/admin/produtos/produtos-cadastrar'

//IMPORTS CLIENT
import ProdutosDetalhes from './pages/client/produtos/produtos-details'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                {/*Rota client*/}
                <Route path="/" exact component={Produtos}/>
                <Route path="/produtos/:idProduto" exact component={ProdutosDetalhes}/>

                {/*Rota admin*/}
                <Route path="/admin/produtos" exact component={Produtos}/>
                <Route path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar}/>
                <Route path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar}/>
            </Switch>
        </BrowserRouter>
    )
}