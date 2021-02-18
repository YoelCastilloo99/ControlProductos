import React from "react";
import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import ListVenta from "../Ventas/ListVenta";
import CreateNewVenta from "../Ventas/CreateNewVenta";


class Venta extends React.Component {
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
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}> Ver ventas</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.handleClick(2)}> Crear ventas</Menu.Item>
                    </Menu></Header>
                <Content>
                    {this.state.selected==1?<ListVenta />: <CreateNewVenta/>
                    }
                </Content>
            </Layout>
        );
    }
}


export default Venta