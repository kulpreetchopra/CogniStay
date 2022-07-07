import { Component } from 'react';

import RoomsService from '../../../../api/services/RoomsService';

class ListAllRoomsComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            message: null
        }
        this.deleteRoomClicked = this.deleteRoomClicked.bind(this);
        this.updateRoomClicked = this.updateRoomClicked.bind(this);
        this.addRoomClicked = this.addRoomClicked.bind(this);
        this.refreshRooms = this.refreshRooms.bind(this);
    }

    componentDidMount() {
        this.refreshRooms();
    }

    refreshRooms()
    {
        RoomsService.getRoomsData().then((res) => {
            this.setState({ rooms: res.data });
        });
    }

    deleteRoomClicked(id, roomNo)
    {
        RoomsService.deleteRoom(id)
            .then(
                response => {
                    this.setState({message : `Delete of Room Number ${roomNo} Successful`});
                    this.refreshRooms();
                }
            )
    }

    updateRoomClicked(id)
    {
        this.props.navigate(`/admin-ListRooms/${id}`);
    }

    addRoomClicked()
    {
        this.props.navigate(`/admin-ListRooms/-1`);
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Please find All Rooms below</div>
                        </div>
                        <div>{ this.state.message && <div className='alert alert-success'>{this.state.message}</div> }</div>
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
                                        <th>Action</th>
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
                                                    <td><button className='btn btn-warning' onClick={ () => this.updateRoomClicked(room.id, room.roomNo)}>Update</button><button className='btn btn-danger' onClick={ () => this.deleteRoomClicked(room.id, room.roomNo)}>Delete</button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-outline-success text-dark" onClick={this.addRoomClicked}>Add a Room</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListAllRoomsComponent;