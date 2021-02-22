import React from "react";
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import ListPosts from "./ListPosts";
import CreateNewPost from "./CreateNewPost";
import { connect } from 'react-redux'
import { onLogout } from "../Redux/Login/actions"


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: null,
            selected: 1,
            estadoeditar:false
        }
    }

    handleClick = e => {
        this.setState({ selected: e })
    }

    onEditproducto = (producto) => {
        this.setState({ selected: 2, producto: producto, estadoeditar:true })
    }

    

    render() {
        const { Header, Content } = Layout;

        return (
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}> Ver Productos</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.handleClick(2)}> Crear Productos</Menu.Item>
                        <Menu.Item key="3" onClick={() => window.location.href = "/#/ventas"}> Ventas </Menu.Item>
                        <Menu.Item key="4" onClick={() => window.location.href = "/#/reportes"}> Ver reportes </Menu.Item>
                        <Menu.Item key="5" onClick={() => this.props.onLogout()}> Salir</Menu.Item>
                    </Menu></Header>
                <Content>
                    {this.state.selected == 1 ? <ListPosts onEditproducto={this.onEditproducto} /> : <CreateNewPost producto={this.state.producto} estadoeditar={this.state.estadoeditar}/>
                    }
                </Content>
            </Layout>
        );
    }
}

const mapstateToProps = state => ({
    ...state.loginReducer, ...state.productoReducer
})

export default connect(mapstateToProps, { onLogout  })(Blog)
