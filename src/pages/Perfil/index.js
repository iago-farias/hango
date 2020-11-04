import React, {useState, useEffect} from 'react';
import { Layout } from 'antd';
import {LeftCircleOutlined, EditFilled} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import './styles.css';

import thumbImage from '../../assets/thumbImage.svg';

function Perfil(){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const history = useHistory();

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/mateusmsc/api_rest_fake_hango/perfil?id=1")
            .then( response => {
                const {name_user, CPF, email, phone} = response.data[0];

                setName(name_user);
                setCpf(CPF);
                setEmail(email);
                setPhone(phone);
            });
    }, []);

    return(
        <Layout>
            <Layout.Header className="header">
                <LeftCircleOutlined 
                    style={{fontSize:'38px', color:'rgba(253, 93, 73, 0.8)', position:'absolute', top: 14, left:14}} 
                    onClick={() => {history.goBack()}}
                />

                Seu Perfil
            </Layout.Header>
            <Layout.Content
             style={{backgroundColor:'#fff', display:'flex', flexDirection:'column'}}
            > 
                <div className="profile-container">
                    <div className="profile-header">
                        <img className="profile-logo" src={thumbImage} alt="Profile image"/>
                        {name}
                        <EditFilled  style={{fontSize:'35px', color:'#fff'}} onClick={() => {}}/>
                    </div>
                    <div className="profile-content">
                        <div className="row">
                            CPF: {cpf}
                        </div>
                        <div className="row">
                            Email: {email}
                        </div>
                        <div className="row">
                            Telefone: {phone}
                        </div>
                    </div>
                </div>

                <button className="delete-profile-button">Excluir conta</button>
                
            </Layout.Content>
        </Layout>
    );
}

export default Perfil;