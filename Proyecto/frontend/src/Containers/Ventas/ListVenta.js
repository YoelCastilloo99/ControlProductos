import React from "react";
import {connect} from 'react-redux'
import {getVentas,deleteVentas} from '../../Redux/Ventas/actions.js'
import {Card, Row, Col, message } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListVenta extends React.Component {

    componentDidMount() {
        this.props.getVentas();
    }

    deleteVentas = (id) => {
        this.props.deleteVentas(id);
    }

    render() {
        const ventas = this.props.ventas
        console.log(this.props)
        return (
            <Col span={12} offset={6}>
                {ventas.map(p => (
                            <Row key={p.id} gutter={[48, 48]}>
                                <Col span={24}>
                                    <Card
                                        key={p.id}
                                        title={p.producto}
                                        style={{width: '100%'}}
                                        actions={[
                                            <DeleteOutlined key="delete" onClick={()=>this.deleteVentas(p.id)} />,
                                        ]}
                                    >
                                        <p>{p.total}</p>
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                       
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    ventas: state.ventaReducer.ventas
})

const mapDispatchToProps = {
    getVentas ,deleteVentas
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVenta)
