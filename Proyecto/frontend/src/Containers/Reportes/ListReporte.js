import React from "react";
import {connect} from 'react-redux'
import {getReportes} from '../../Redux/Reportes/actions.js'
import {Card, Row, Col, message } from 'antd';
import "antd/dist/antd.css";


class ListReporte extends React.Component {

    componentDidMount() {
        this.props.getReportes();
    }

    render() {
        const reportes = this.props.reportes
        console.log(this.props.reportes)

        if (!reportes){
            return <h1>No hay no hay no hay</h1>
        }

        return (
            <Col span={12} offset={6}>
                <h3> Total Ventas Globales = Q{reportes.totalventas} </h3>
                
                <h3>Total de Ventas por producto</h3>
                {reportes.totalventasproduc.map(p => (
                            <Row key={p.id} gutter={[48, 48]}>
                                <Col span={24}>
                                    <Card
                                        key={p.id}
                                        title={p.nombre}
                                        style={{width: '100%'}}
                                    >
                                        <p>Total suma de venta = Q{p.totalsumve? p.totalsumve:0}</p>
                                    </Card>
                                </Col>
                            </Row>
                ))}


                <h3>Promedio de precio de productos por usuario</h3>
                {reportes.promedio_precios.map(p => (
                            <Row key={p.id} gutter={[48, 48]}>
                                <Col span={24}>
                                    <Card
                                        key={p.id}
                                        title={p.empleado__username}
                                        style={{width: '100%'}}
                                    >
                                        <p>Total suma de venta = Q{p.promedio? p.promedio:0}</p>
                                    </Card>
                                </Col>
                            </Row>
                ))}



            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    reportes: state.reporteReducer.reportes
})

const mapDispatchToProps = {
    getReportes
}

export default connect(mapStateToProps, mapDispatchToProps)(ListReporte)