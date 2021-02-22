import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onLogin } from '../../Redux/Login/actions'
import { Redirect } from 'react-router-dom';

class Home extends Component {

    componentDidMount(){
        console.log(this.props)
        if(this.props.token){
            window.location.href = "/#/productos"
        }
        else{
            window.location.href = "/#/login"
        }
    }

    render() {
        return (
            <h1></h1>
        )
    }


}

const mapstateToProps = state => ({
    ...state.loginReducer
})

export default connect(mapstateToProps, { onLogin })(Home)
