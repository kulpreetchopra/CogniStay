import React from "react";
import { Component } from "react";
import moment from 'moment';

import BookingsService from "../../../../api/services/BookingsService";
import RoomsService from "../../../../api/services/RoomsService";


class BookingsComponent extends Component 
{
    //87.48 using momemt for check in and check out
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            rooms:[],
            checkIn: moment().format('YYYY-MM-DD'),
            checkOut: moment().format('YYYY-MM-DD'),
            noOfAdults: '',
            noOfChildren: '',
            roomNo: '',
            noOfDays: '',
            user : null
        }
        this.handleChange = this.handleChange.bind(this);
        this.bookRoomClicked = this.bookRoomClicked.bind(this);
    }

    async componentDidMount() {
        let userId = JSON.parse(window.sessionStorage.getItem('authenticatedUser')).id
        BookingsService.getBookingsData(userId).then((res) => {
            this.setState({ bookings: res.data });
        });
        
        RoomsService.getRoomsData().then((res) => {
            this.setState({ rooms: res.data });
        });
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    bookRoomClicked() {
        let booking = {
            id:500,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            noOfAdults: this.state.noOfAdults,
            noOfChildren: this.state.noOfChildren,
            roomNo: this.state.roomNo,
            noOfDays: this.state.noOfDays,
            user : JSON.parse(window.sessionStorage.getItem('authenticatedUser')),
        }
        let room = {
            available: 'no',
        }

        console.log("****************")
        console.log(booking)
        console.log(booking.user)
        console.log("************************************")

        BookingsService.addBooking(booking)
            .then(res => {
                this.props.navigate("/bookings");
            });
        RoomsService.updateSRoom(room,this.state.roomNo)
            .then(res => {
                this.props.navigate("/bookings");
            });
    }

    render() 
    {
        return (
            <div>
                <div id="booking" className="section">
                    <div className="section-center">
                        <div className="container">
                            <div className="row">
                                <div className="booking-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label" name="checkIn">Check-in</span>
                                                    <input className="form-control" type="date"
                                                    name="checkIn" onChange={this.handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label" name="checkOut">Check-out</span>
                                                    <input className="form-control" type="date" 
                                                    name="checkOut"
                                                    onChange={this.handleChange}  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <span className="form-label" name="noOfAdults">Adults (18+)</span>
                                                <select className="form-control" name="noOfAdults" onChange={this.handleChange} >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span className="select-arrow" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="form-label" name="noOfChildren">Children (0-17)</span>
                                                <select className="form-control" name="noOfChildren" onChange={this.handleChange}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span className="select-arrow" />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label" name="roomNo">Room Number</span>
                                                    <select className="form-control" name="roomNo" onChange={this.handleChange}>
                                                    {
                                                    this.state.rooms.map(
                                                        room =>
                                                        room.available=="yes"
                                                        ?
                                                        <option style={{color:"white",backgroundColor:"green"}}>{room.id}</option>
                                                        :
                                                        <option style={{color:"white",backgroundColor:"red"}}>{room.id} Not Available</option>
                                                        )
                                                    }
                                                    </select>
                                                    <span className="select-arrow" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <span className="form-label" name="noOfDays">Number Of Days</span>
                                                <select className="form-control" name="noOfDays" onChange={this.handleChange}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <span className="select-arrow" />
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-btn">
                                                    <button className="submit-btn" onClick={this.bookRoomClicked}>Book Room</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingsComponent;