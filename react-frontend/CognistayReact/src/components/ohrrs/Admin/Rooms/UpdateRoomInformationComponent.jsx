import React, { Component } from "react";
import RoomsService from "../../../../api/services/RoomsService";
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UpdateRoomInformationComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            id: this.props.params.id,
            roomName : '', 
            roomType: '',
            price: '',
            available: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(values)
    {
        let errors = {}

        if(!values.roomName){
            errors.roomName = 'Please enter the Room Name'
        } else if (values.roomName.length < 5) {
            errors.roomName = 'Please enter atleast 5 characters in Room Name'
        }

        if(!values.roomType){
            errors.roomType = 'Please enter the Room Type'
        } else if (values.roomType.length < 2) {
            errors.roomName = 'Please enter atleast 2 characters in Room Type'
        }

        if(!values.price){
            errors.price = 'Please enter the Price'
        } else if (values.price <= 0) {
            errors.roomName = 'Please enter a valid Price'
        }

        if(!values.available){
            errors.available = 'Please enter if the room is available or not'
        } 

        return errors;
    }

    componentDidMount()
    {
        console.log(RoomsService.getSpecificRoomData(this.state.id))
        RoomsService.getSpecificRoomData(this.state.id)
            .then(response => this.setState({
                roomName: response.data.roomName,
                roomType: response.data.roomType,
                price: response.data.price, 
                available: response.data.available
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
            RoomsService.addRoom({
                id: this.state.id,
                roomName: values.roomName,
                roomType: values.roomType,
                price: values.price, 
                available: values.available
            })
            .then(
                () => this.props.navigate('/admin-ListRooms')
            )
        }
        else
        {
            RoomsService.addRoom({
                id: this.state.id,
                roomName: values.roomName,
                roomType: values.roomType,
                price: values.price, 
                available: values.available
            })
            .then(
                () => this.props.navigate('/admin-ListRooms')
            )
        }
    }

    render()
    {
        let { roomName, roomType, price, available } = this.state

        return (
            <div className="updateRoomInformation">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <div className="container">
                            <div className="masthead-subheading">Rooms information of - {this.props.params.id}</div>
                <br/>
                </div>
                <div className="container border border-warning">
                    <Formik 
                        initialValues = {{ roomName, roomType, price, available }} 
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate = {this.validate}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <div className="container">
                                    <Form>
                                        <ErrorMessage name="roomType" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="roomName" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="price" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="available" component="div" className="alert alert-warning" />
                                        
                                        <fieldset className="form-group" name="roomType">
                                            <label>Room Type</label>
                                            <select className="form-control" name="roomType" onChange={this.handleChange}>
                                                    <option>select</option>
                                                    <option>Single Bedroom</option>
                                                    <option>Double Bedroom</option>
                                                    <option>Classic Bedroom</option>
                                                    <option>Super Delux Bedroom</option>
                                            </select>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Room Name</label>
                                            <Field className="form-control" type="text" name="roomName" placeholder="Enter Room Name"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Price</label>
                                            <Field className="form-control" type="text" name="price" placeholder="Enter Price of the Room" />
                                        </fieldset>
                                        <fieldset className="form-group" name="available">
                                            <label>Is Available</label>
                                            <select className="form-control" name="available" onChange={this.handleChange}>
                                                    <option>select</option>
                                                    <option>yes</option>
                                                    <option>no</option>
                                            </select>
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

export default UpdateRoomInformationComponent;