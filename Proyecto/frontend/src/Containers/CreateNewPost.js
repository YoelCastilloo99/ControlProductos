import React from "react";
import { connect } from 'react-redux'
import { getPosts, deletePost, createPost, actualizar } from '../Redux/actions.js'
import { Card, Row, Col, message, Form, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListPosts extends React.Component {

    state = {
        id: null,
        nombre: '',
        descripcion: '',
        categoria: '',
        precio: '',
        isEditing: false
    }


    componentDidMount() {
        console.log("producto", this.props.producto)
        if (this.props.producto) {
            const { id, nombre, descripcion, categoria, precio } = this.props.producto
            this.setState({
                id, nombre, descripcion, categoria, precio
            })
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault()
        const { nombre, descripcion, categoria, precio } = this.state
        const productos = { nombre, descripcion, categoria, precio, empleado: 1 }

        if(this.props.producto){
            this.props.actualizar(productos, this.props.producto.id)
        }else{
            this.props.createPost(productos)
        }

        this.props.createPost(productos)
        console.log(this.state)
    }

    deletePost = (id) => {
        this.props.deletePost(id, this.info);
    }

    info() {
        message.info('Post Deleted');
    };

    render() {
        const productos = this.props.productos
        console.log(this.props)

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label >Producto</label>
                    <input type="text" name="nombre" onChange={this.onChange} value={this.state.nombre} className="form-control" aria-describedby="emailHelp" placeholder="Producto" />
                </div>
                <div className="form-group">
                    <label >Descripcion</label>
                    <input type="text" name="descripcion" onChange={this.onChange} value={this.state.descripcion} className="form-control" aria-describedby="emailHelp" placeholder="Descripcion de producto" />
                </div>
                <div className="form-group">
                    <label >Categoria</label>
                    <input type="text" name="categoria" onChange={this.onChange} value={this.state.categoria} className="form-control" aria-describedby="emailHelp" placeholder="Categoria de producto" />
                </div>
                <div className="form-group">
                    <label >Precio</label>
                    <input type="number" name="precio" onChange={this.onChange} value={this.state.precio} className="form-control" aria-describedby="emailHelp" placeholder="Precio" />
                </div>

        <button type="submit" className="btn btn-primary">{this.props.producto?"Actualizar":"Guardar"}</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    productos: state.productoReducer.productos
})

const mapDispatchToProps = {
    getPosts, deletePost, createPost, actualizar
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)

