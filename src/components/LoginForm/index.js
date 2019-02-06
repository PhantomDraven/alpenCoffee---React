import React, { Component } from 'react';

import { Form, Icon, Input, Button, } from 'antd';

import './style.css';

const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.ajaxSubmit = this.ajaxSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.table(values);
                this.ajaxSubmit(values);
            }
        });
    }

    ajaxSubmit = ({email, password}) => {
        // send data to API
        fetch(process.env.REACT_APP_LOGIN_REQUEST, { // get routes from .env
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            /**
             * @returns Object | Boolean
             * 
             * Object = {
             *   token: 'tokenId',
             * }
             * 
             * Boolean = false;
             */
            if (data) {
                console.log(data);
                this.props.userDidLogin();
            }
        });
    }

    render() {
        const {
          getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
            
        const emailError = isFieldTouched('email') && getFieldError('email');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form className="login-form" onSubmit={this.handleSubmit}>
                <Form.Item
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}
                >
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </Form.Item>
                <Form.Item
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary"
                        htmlType="submit" 
                        className="login-form-button"
                        disabled={hasErrors(getFieldsError())}
                        block>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default WrappedLoginForm;
