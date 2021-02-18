import React from "react";
import {connect} from 'react-redux'
import {getVentas,deleteVentas, createVentas} from '../../Redux/Ventas/actions.js'
import {Card, Row, Col, message, Form, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListVentas extends React.Component {

    state = {
        id: null,
        producto: '',
        cantidad: '',
        descripcion: '',
        fecha: '',
        total: '',
        comprador: '',
        isEditing: false
    }
    

    componentDidMount() {
        this.props.getVentas();
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault()
        const { producto, cantidad, descripcion, fecha, total, comprador } = this.state
        const ventas = { producto, cantidad, descripcion, fecha, total, comprador}
        this.props.createVentas(ventas)
        console.log(this.state)
    }

    deleteVentas = (id) => {
        this.props.deleteVentas(id, this.info);
    }

    info() {
        message.info('Post Deleted');
    };

    render() {
        const ventas = this.props.ventas
        console.log(this.props)

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label >Producto</label>
                    <input type="text" name="producto" onChange={this.onChange} value={this.state.producto} className="form-control" aria-describedby="emailHelp" placeholder="Producto"/>
                </div>
                <div className="form-group">
                    <label >Cantidad</label>
                    <input type="number" name="cantidad" onChange={this.onChange} value={this.state.cantidad} className="form-control" aria-describedby="emailHelp" placeholder="Cantidad"/>
                </div>
                <div className="form-group">
                    <label >Descripcion</label>
                    <input type="text" name="descripcion" onChange={this.onChange} value={this.state.descripcion} className="form-control" aria-describedby="emailHelp" placeholder="Descripcion de venta"/>
                </div>
                <div className="form-group">
                    <label >Fecha</label>
                    <input type="date" name="fecha" onChange={this.onChange} value={this.state.fecha} className="form-control" aria-describedby="emailHelp" placeholder="Fecha"/>
                </div>
                <div className="form-group">
                    <label >Total</label>
                    <input type="number" name="total" onChange={this.onChange} value={this.state.total} className="form-control" aria-describedby="emailHelp" placeholder="Total"/>
                </div>
                <div className="form-group">
                    <label >Comprador</label>
                    <input type="text" name="comprador" onChange={this.onChange} value={this.state.comprador} className="form-control" aria-describedby="emailHelp" placeholder="Comprador de la venta"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    ventas: state.ventas
})

const mapDispatchToProps = {
    getVentas ,deleteVentas, createVentas
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVentas)

