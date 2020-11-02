import React from 'react';
import { Layout } from 'antd';
import {LeftCircleOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import "./styles.css";

function Ajuda(){
    const history = useHistory();

    return(
        <Layout>
            <Layout.Header className="header">
                <LeftCircleOutlined 
                    style={{fontSize:'38px', color:'rgba(253, 93, 73, 0.8)', position:'absolute', top: 14, left:14}} 
                    onClick={() => {history.goBack()}}
                />

                Ajuda e Contato
            </Layout.Header>
            <Layout.Content
             style={{backgroundColor:'#fff', display:'flex', justifyContent:'center'}}
            >  
               <form action="" onSubmit={() => {}}>
                <div className="help-form">
                        <div className="help-form-header">
                            Registre sua manifestação
                        </div>
                        <div className="help-form-body">

                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="exemplo@exemplo.com"
                            />

                            <label htmlFor="name">Nome</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                placeholder="Insira seu nome completo"
                            />

                            <label htmlFor="establishment">Estabelecimento</label>
                            <select name="establishment" id="establishment">
                                <option value="0">Giraffas</option>
                                <option value="1">Comper</option>
                                <option value="2">Toretto</option>
                            </select>
                        </div>
                        
                        <button 
                            className="help-form-comfirm-button" 
                            type="submit"
                        >
                            Enviar manifestação
                        </button>
                    </div>
               </form>

                
            </Layout.Content>
        </Layout>
    );

}

export default Ajuda;