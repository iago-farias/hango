import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Explorar from './pages/Explorar';
import Favoritos from './pages/Favoritos';
import Ajuda from './pages/Ajuda';
import TermosDeUso from './pages/TermosDeUso';
import Perfil from './pages/Perfil';


function Routes(){
    return(
        <BrowserRouter>
            <Route component={Explorar} path="/" exact/>
            <Route component={Favoritos} path="/favoritos"/>
            <Route component={Ajuda} path="/ajuda-e-contato"/>
            <Route component={TermosDeUso} path="/termos-de-uso"/>
            <Route component={Perfil} path="/perfil"/>
        </BrowserRouter>
    );
}

export default Routes;