package com.hotel.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Temporal(TemporalType.DATE)
	private Date checkIn;
	@Temporal(TemporalType.DATE)
	private Date checkOut;
	
	private int noOfAdults;
	private int noOfChildren;
	private int noOfDays;
	private int roomNo;
	
	public int getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}
	
	public int getroomNo() {
		return roomNo;
	}

	public void setroomNo(int roomNo) {
		this.roomNo = roomNo;
	}

	public int getNoOfAdults() {
		return noOfAdults;
	}

	public void setNoOfAdults(int noOfAdults) {
		this.noOfAdults = noOfAdults;
	}

	public int getNoOfChildren() {
		return noOfChildren;
	}

	public void setNoOfChildren(int noOfChildren) {
		this.noOfChildren = noOfChildren;
	}

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;
	
	
	public Booking() {
		
	}

	public Booking(Date checkIn, Date checkOut, User user) {
		super();
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(Date checkIn) {
		this.checkIn = checkIn;
	}

	public Date getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(Date checkOut) {
		this.checkOut = checkOut;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Booking [id=" + id + ", checkIn=" + checkIn + ", checkOut=" + checkOut + ", noOfAdults=" + noOfAdults
				+ ", noOfChildren=" + noOfChildren + ", noOfDays=" + noOfDays + ", user=" + user + ", roomNo=" + roomNo
				+ "]";
	}
}
