import React from "react";
import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import ListReporte from "../Reportes/ListReporte";

class Reporte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1
        }
    }
    handleClick = e => {
        this.setState({selected:e})
    }
    render() {
        const { Header, Content } = Layout;

        return (
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}> Ver Reporte</Menu.Item>
                        <Menu.Item key="2" onClick={() => window.location.href = "/#/"}> Regresar </Menu.Item>
                    </Menu></Header>
                <Content>
                    {this.state.selected==1?<ListReporte />: <ListReporte/>
                    }
                </Content>
            </Layout>
        );
    }
}


export default Reporte