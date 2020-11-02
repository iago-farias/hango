import React from 'react';
import { Layout } from 'antd';
import {LeftCircleOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import './styles.css';

function TermosDeUso(){
    const history = useHistory();

    return(
       <Layout>
           <Layout.Header className="header">
                <LeftCircleOutlined 
                 style={{fontSize:'38px', color:'rgba(253, 93, 73, 0.8)', position:'absolute', top: 14, left:14}} 
                 onClick={() => {history.goBack()}}
                />

                Termos de Uso
           </Layout.Header>
           <Layout.Content
            style={{backgroundColor:'#fff'}}
           >
                <div className="terms-container">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien libero, convallis et nisl vel, ultrices commodo purus. 
                    Nulla accumsan, metus quis aliquam consequat, ligula nibh viverra sapien, et bibendum ex diam in ante. Donec ultricies libero eget 
                    nibh lobortis rhoncus. Quisque non viverra sem. In eros justo, eleifend ac rhoncus eu, imperdiet vitae tellus. Interdum et malesuada 
                    fames ac ante ipsum primis in faucibus. Morbi a tincidunt tellus, eu efficitur est.</p>
                   <p> 
                    Ut aliquet neque non ante placerat tempus. 
                    Nunc eget risus varius, lobortis leo nec, aliquam nisl. Nulla ac dictum elit, nec laoreet eros. Sed lobortis vel nisi in elementum. 
                    Integer porta risus et elit blandit, ac ornare nibh placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean sapien libero, convallis et nisl vel, ultrices commodo purus. Nulla accumsan, metus quis aliquam consequat,ligula. 
                    </p>
                </div>
           </Layout.Content>
       </Layout>
    );

}


export default TermosDeUso;