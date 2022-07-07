import React from "react";
import { Component } from "react";
import moment from 'moment';

import BookingsService from "../../../../api/services/BookingsService";

class ViewBookingsComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        let userId = JSON.parse(window.sessionStorage.getItem('authenticatedUser')).id
        BookingsService.getBookingsData(userId).then((res) => {
            this.setState({ bookings: res.data });
        });
    }
    

    render() 
    {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Know the history of your bookings below</div>
                        </div>
                        <div className="container">
                        <br/>
                            <table className="table table-hover table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Booking Date</th>
                                        <th>Room No</th>
                                        <th>check-In</th>
                                        <th>check-Out</th>
                                        <th>No Of Days</th>
                                        <th>Adults</th>
                                        <th>Children</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.bookings.map(
                                            booking =>
                                                <tr key={booking.id}>
                                                    <td>{booking.id}</td>
                                                    <td>{moment(booking.time).format('YYYY-MM-DD')}</td>
                                                    <td>{booking.roomNo}</td>
                                                    <td>{moment(booking.checkIn).format('YYYY-MM-DD')}</td>
                                                    <td>{moment(booking.checkOut).format('YYYY-MM-DD')}</td>
                                                    <td>{booking.noOfDays}</td>
                                                    <td>{booking.noOfAdults}</td>
                                                    <td>{booking.noOfChildren}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ViewBookingsComponent;