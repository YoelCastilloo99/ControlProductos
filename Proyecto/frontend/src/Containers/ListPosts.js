import React from "react";
import {connect} from 'react-redux'
import {getPosts,deletePost} from '../Redux/actions.js'
import {Card, Row, Col, message } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListPosts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    deletePost = (id) => {
        this.props.deletePost(id);
    }

    render() {
        const productos = this.props.productos
        console.log("listado", this.props)
        return ( 
            <Col span={12} offset={6}>
                {productos.map(p => (
                            <Row key={p.id} gutter={[48, 48]}>
                                <Col span={24}>
                                    <Card
                                        key={p.id}
                                        title={p.nombre}
                                        style={{width: '100%'}}
                                        actions={[
                                            <DeleteOutlined key="delete" onClick={()=>this.deletePost(p.id)} />,
                                            <EditOutlined key="edit" onClick={()=>this.props.onEditproducto(p)}/>,
                                        ]}
                                    >
                                        <p>{p.precio}</p>
                                        <p>{p.descripcion}</p>
                                        <p>Categoria: {p.categoria}</p>
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                       
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    productos: state.productoReducer.productos
})

const mapDispatchToProps = {
    getPosts ,deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)
