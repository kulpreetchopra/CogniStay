import { Component } from 'react';
import { Link } from 'react-router-dom';

import RoomsService from '../../../../api/services/RoomsService';


class ListAvailableRoomsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        RoomsService.getRoomsData().then((res) => {
            this.setState({ rooms: res.data });
        });
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Please find Available Rooms below</div>
                        </div>
                        <div className="container">
                        <br/>
                            <table className="table table-hover table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    <th>Room Number</th>
                                         <th>Room Name</th>
                                         <th>Type</th>
                                         <th>Price</th>
                                         <th>Available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         this.state.rooms.map(
                                             room =>
                                             <tr key={room.id}>
                                             <td>{room.id}</td>
                                             <td>{room.roomName}</td>
                                             <td>{room.roomType}</td>
                                             <td>₹{room.price}</td>
                                             {
                                             room.available=="yes"
                                             ?
                                                 <td><i class="fa fa-calendar-check-o" style={{fontSize:"36px",color:"green"}}></i></td>
                                             :
                                             <td><i class="fa fa-calendar-check-o" style={{fontSize:"36px",color:"red"}}></i></td>
                                             }  
                                         </tr>
                                         )
                                     }
                                 </tbody>
                            </table>
                            <p><a href="#" className="btn btn-outline-success text-dark"><Link to="/bookings">Proceed with booking</Link></a></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListAvailableRoomsComponent;