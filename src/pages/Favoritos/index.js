import React,{useEffect, useState} from 'react';
import { Layout, Modal, Spin } from 'antd';
import {LeftCircleOutlined, StarFilled, FileImageOutlined, LoadingOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import './styles.css';

const spinIcon = (
<LoadingOutlined
    style={{ fontSize: 50, color: "rgba(251, 139, 125, 1)" }}
    spin
/>);

function Favoritos(){
    const [favorites, setFavorites] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [selectedFavorite, setSelectedFavorite] = useState(-1);
    const [contentIsLoaded, setContentIsLoaded] = useState(false);

    const history = useHistory();

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/mateusmsc/api_rest_fake_hango/restaurants")
            .then(response => {
                setFavorites(response.data);
                setContentIsLoaded(true);
        });
    }, []);

    function removeFavorite(){

        favorites.splice(selectedFavorite, 1);
    
        const newFavorites = favorites;
    
        setFavorites(newFavorites);
    
        setModalIsVisible(false);
    }

    function handleModalClose(){
        setSelectedFavorite(-1);

        setModalIsVisible(false);
    }

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
                <Modal
                    visible={modalIsVisible}
                    onCancel={() => handleModalClose()}
                    closable={false}
                    footer={null}
                    centered={true}
                    bodyStyle={{padding:"0 0 10px 0", fontSize:18, textAlign:'center', fontWeight:'bold'}}
                    width={400}
                >
                    <div className="modal-header">Confirmação</div>
                    <div>Deseja remover o estabelecimento do seus favoritos ?</div>
                    <div className="modal-footer">
                        <button 
                            className="modal-button" 
                            style={{backgroundColor:"rgba(7,7,7,0.47)"}} 
                            onClick={() => handleModalClose()}
                        >
                            Não
                        </button>
                        <button 
                            className="modal-button" 
                            style={{backgroundColor:"rgba(53,120,229,0.74)"}} 
                            onClick={() => removeFavorite()}
                        >
                            Sim
                        </button>
                    </div>
                </Modal>
                {
                    contentIsLoaded ?  
                    <div className="favoritos-container">
                    {
                        favorites.map((favorite, index) => (
                            <div 
                                className="card-favorito"
                                key={favorite.id}
                            >
                                <div className="image-container">
                                    <FileImageOutlined style={{fontSize:'30px', color:"rgba(253, 93, 73, 1)"}} />
                                </div>
    
                                <div style={{width: '10rem'}}>
                                    <p className="nome-estabelecimento">{favorite.name}</p>
                                    <p>Lotação de pessoas aproximadas: {favorite.capacity}</p>
                                </div>
    
                                <StarFilled 
                                    style={{fontSize:'30px', cursor:'pointer'}}
                                    onClick={() => {
                                        setModalIsVisible(true);
                                        setSelectedFavorite(index);
                                    }}
                                />
    
                            </div>
                        ))
                    } 
                    </div>
                    :
                    <div style={{display:"flex", alignItems:'center', justifyContent:'center', height:'500px'}}>
                        <Spin indicator={spinIcon} />
                    </div>
                }                    
            </Layout.Content>
        </Layout>
    );

}

export default Favoritos;