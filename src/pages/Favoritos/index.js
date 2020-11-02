import React from 'react';
import { Layout } from 'antd';
import {LeftCircleOutlined, StarFilled, FileImageOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import './styles.css';

function Favoritos(){
    const history = useHistory();

    return(
        <Layout>
            <Layout.Header className="header">
                    <LeftCircleOutlined 
                    style={{fontSize:'38px', color:'rgba(253, 93, 73, 0.8)', position:'absolute', top: 14, left:14}} 
                    onClick={() => {history.goBack()}}
                    />

                Favoritos
            </Layout.Header>
            <Layout.Content
                style={{backgroundColor:'#fff', padding: "0 10px"}}
            >
               <div className="favoritos-container">
                    <div 
                        className="card-favorito" 
                    >
                    <div className="image-container">
                     <FileImageOutlined style={{fontSize:'30px', color:"rgba(253, 93, 73, 1)"}} />
                    </div>

                    <div style={{width: '10rem'}}>
                        <p className="nome-estabelecimento">{"Giraffas"}</p>
                        <p>Lotação de pessoas aproximadas: {"15"}</p>
                    </div>

                     <StarFilled style={{fontSize:'30px'}} />

                    </div>
                    <div 
                        className="card-favorito" 
                    >
                    <div className="image-container">
                     <FileImageOutlined style={{fontSize:'30px', color:"rgba(253, 93, 73, 1)"}} />
                    </div>

                    <div style={{width: '10rem'}}>
                        <p className="nome-estabelecimento">{"Giraffas"}</p>
                        <p>Lotação de pessoas aproximadas: {"15"}</p>
                    </div>

                     <StarFilled style={{fontSize:'30px'}} />

                    </div>
                    <div 
                        className="card-favorito" 
                    >
                    <div className="image-container">
                     <FileImageOutlined style={{fontSize:'30px', color:"rgba(253, 93, 73, 1)"}} />
                    </div>

                    <div style={{width: '10rem'}}>
                        <p className="nome-estabelecimento">{"Giraffas"}</p>
                        <p>Lotação de pessoas aproximadas: {"15"}</p>
                    </div>

                     <StarFilled style={{fontSize:'30px'}} />

                    </div>
                    <div 
                        className="card-favorito" 
                    >
                    <div className="image-container">
                     <FileImageOutlined style={{fontSize:'30px', color:"rgba(253, 93, 73, 1)"}} />
                    </div>

                    <div style={{width: '10rem'}}>
                        <p className="nome-estabelecimento">{"Giraffas"}</p>
                        <p>Lotação de pessoas aproximadas: {"15"}</p>
                    </div>

                     <StarFilled style={{fontSize:'30px'}} />

                    </div>
                    <div 
                        className="card-favorito" 
                    >
                    <div className="image-container">
                     <FileImageOutlined style={{fontSize:'30px', color:"rgba(253, 93, 73, 1)"}} />
                    </div>

                    <div style={{width: '10rem'}}>
                        <p className="nome-estabelecimento">{"Giraffas"}</p>
                        <p>Lotação de pessoas aproximadas: {"15"}</p>
                    </div>

                     <StarFilled 
                        style={{fontSize:'30px'}}
                        className="star-icon" 
                     />

                    </div>
               </div>
                    
            </Layout.Content>
        </Layout>
    );

}

export default Favoritos;