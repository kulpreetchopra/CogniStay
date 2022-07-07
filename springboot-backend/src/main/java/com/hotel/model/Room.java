package com.hotel.model;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Room 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String roomName;
	private String roomType;
	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	private int price;
	private String Available;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "user", cascade = CascadeType.ALL)
	private List<Booking> bookings;
	
	public Room() {
	}

	public Room(String roomName,int price, String Available, String roomType) {
		super();
		this.roomName = roomName; 
		this.price = price;
		this.Available = Available;
		this.roomType = roomType;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getAvailable() {
		return Available;
	}

	public void setAvailable(String Available) {
		this.Available = Available;
	}

	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Room other = (Room) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Room [id=" + id + ", roomName=" + roomName + ", roomType=" + roomType + ", price=" + price
				+ ", Available=" + Available + ", bookings=" + bookings + "]";
	}
	
}
