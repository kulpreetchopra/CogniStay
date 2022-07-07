import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import UserService from "../../../../api/services/UserService";

class UpdateUserInformationComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            id: this.props.params.id,
            name : '', 
            email : '',
            password : '',
            role : ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(values)
    {
        let errors = {}

        if(!values.name){
            errors.name = 'Please enter the Name of the user'
        } else if (values.name.length < 3) {
            errors.name = 'Please enter atleast 3 characters  User Name'
        }

        if(!values.email){
            errors.email = 'Please enter the Email Address of the user'
        }

        if(!values.password)
        {
            errors.password = 'Please enter the Password for the user'
        } else if(values.password < 5) {
            errors.password = 'Please enter atleast 5 characters in the password'
        }

        if(!values.role){
            errors.role = 'Please select the Role of the user'
        } 

        return errors;
    }

    componentDidMount()
    {
        console.log(UserService.getSpecificUserData(this.state.id))
        UserService.getSpecificUserData(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                email: response.data.email,
                password: response.data.password,
                role: response.data.role
            }))
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(values)
    {
        if(this.state.id === -1)
        {
            UserService.addUser({
                id: this.state.id,
                name: values.name,
                email: values.email,
                password: values.password,
                role: values.role
            })
            .then(
                () => this.props.navigate('/admin-ListUsers')
            )
        }
        else
        {
            UserService.addUser({
                id: this.state.id,
                name: values.name,
                email: values.email,
                password: values.password,
                role: values.role
            })
            .then(
                () => this.props.navigate('/admin-ListUsers')
            )
        }
    }

    render()
    {
        let { name, email, password, role } = this.state

        return (
            <div className="updateUserInformation">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <div className="container">
                            <div className="masthead-subheading">Users information of - {this.props.params.id}</div>
                <br/>
                </div>
                <div className="container border border-warning">
                    <Formik 
                        initialValues = {{ name, email, password, role }} 
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate = {this.validate}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <div className="container">
                                    <Form>
                                        <ErrorMessage name="role" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="email" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="password" component="div" className="alert alert-warning" />
                                        
                                        <fieldset className="form-group" name="role">
                                            <label>User Role</label>
                                            <select className="form-control" name="role" onChange={this.handleChange}>
                                                    <option>select</option>
                                                    <option>user</option>
                                                    <option>admin</option>
                                            </select>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>User Name</label>
                                            <Field className="form-control" type="text" name="name" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>User Email</label>
                                            <Field className="form-control" type="text" name="email" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>User Password</label>
                                            <Field className="form-control" type="password" name="password" />
                                        </fieldset>
                                        
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </div>
            </div>

        );
    }
}

export default UpdateUserInformationComponent;