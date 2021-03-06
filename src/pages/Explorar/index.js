import React, {useState, useEffect} from 'react';
import { Layout, Drawer } from 'antd';
import 
{
    MenuOutlined, 
    StarOutlined, 
    FileProtectOutlined, 
    QuestionCircleOutlined, 
    ClockCircleOutlined, 
    PhoneOutlined
} 
from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { Map, Marker, TileLayer, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';
import axios from 'axios';

import logo from '../../assets/logo.svg';
import thumbImage from '../../assets/thumbImage.svg';
import pin from '../../assets/pin.png';

import './styles.css';

function Explorar(){
    const [drawerIsVisible, setDrawerIsVisible] = useState(false);
    const [position, setPosition] = useState([-15.8354694, -48.0297131]);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/mateusmsc/api_rest_fake_hango/restaurants")
            .then(response => {
                setRestaurants(response.data);
            });
    },[]);

    return(
        <Layout>
            <Layout.Header className="header-bar">
                <MenuOutlined className="menu-icon" onClick={()=>{setDrawerIsVisible(true)}} />
                <img className="header-logo" src={logo} alt="logo"/>
            </Layout.Header>
            <Layout.Content
                style={{backgroundColor:'#fff'}}
            >
                <div className="leaflet-container">          
                    <Map
                        center={position}
                        zoom={15}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            restaurants.map(restaurant => (
                                <Marker
                                    key={restaurant.id}
                                    position={[restaurant.coordinates.latitude, restaurant.coordinates.longitude]}
                                    icon={
                                        Leaflet.icon({
                                            iconUrl:pin,
                                            iconSize:[35,35]
                                        })
                                    }
                                >
                                <Popup
                                    closeButton={false}
                                >
                                    <div className="restaurant-info-container">
                                    <div className="restaurant-info-container-header">
                                       {restaurant.name}

                                        <StarOutlined style={{fontSize:'25px', color:'#fff'}} />
                                    </div>

                                    <div className="restaurant-info-container-body">
                                        <div>
                                            <ClockCircleOutlined style={{fontSize:'30px', color:'rgba(253, 93, 73, 0.8)', marginRight:'10px'}}/>
                                             8:00 às 22:00
                                        </div>
                                        <div>
                                            <PhoneOutlined style={{fontSize:'30px', color:'rgba(253, 93, 73, 0.8)', marginRight:'10px'}}/> 
                                            (61) 9999-9999
                                        </div>
                                        <div>
                                            Lotação de pessoas <br/> aproximada: {restaurant.capacity}/45
                                        </div>

                                        <button id="button-ok">Realizar reserva</button>
                                    </div>
                                    </div>
                                </Popup>
                            </Marker>
                            ))
                        }
                    </Map>
                </div>

            </Layout.Content>
            <Drawer
             placement="left"
             visible={drawerIsVisible}
             closable={true}
             onClose={()=> setDrawerIsVisible(false)}
             bodyStyle={{padding:0, justifyItems:'center'}}
            >
                <img style={{width:'150px', height:'100px'}} src={logo} alt="logo"/>

                <Link to="/perfil">
                    <div className='header-drawer'>
                        <img className="profile-thumb-image" src={thumbImage} alt=""/>

                        <p className="user-name">Leandro Vaguetti</p>
                    </div>
                </Link>

                <div className="menu">
                    <Link to="/favoritos">
                        <div 
                        className="menu-item"
                        >
                            <StarOutlined className="drawer-menu-icon" />
                            Favoritos
                        </div>
                    </Link>
                    <Link to="/ajuda-e-contato">
                        <div 
                        className="menu-item"
                        >
                            <QuestionCircleOutlined className="drawer-menu-icon" />
                            Ajuda e contato
                        </div>
                    </Link>
                    <Link to="/termos-de-uso">
                        <div 
                        className="menu-item"
                        >
                            <FileProtectOutlined className="drawer-menu-icon" />
                            Termos de uso
                        </div>
                    </Link>

                    <div style={{position:'absolute', bottom:0, width:'100%'}}>
                        <hr/>
                        <Link to="/">
                            <div 
                            className="menu-item"
                            style={{justifyContent:'center'}}
                            >
                                Sair
                            </div>
                        </Link>
                    </div>
                </div>

            </Drawer>
        </Layout>
    );

}

export default Explorar;