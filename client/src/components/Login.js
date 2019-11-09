import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import Navbar from '../utils/Navbar';
import Carousel from '../utils/Carousel'
import Signup from '../utils/Modal'
class LogIn extends Component {
    onLogIn = (e) => {
        e.preventDefault();
        // normally you would pass in the login credentials to the login action
        this.props.loginUser();
    }
    render() {
        return (
            <div className="container">
                <Navbar />

                <Carousel />
                <Signup />


            </div >

        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    }
};
export default connect(mapStateToProps, {
    loginUser
})(LogIn);