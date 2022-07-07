package com.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.model.Room;
import com.hotel.repository.RoomRepo;

@Service
public class RoomService {
	
	@Autowired
	private RoomRepo roomRepo;
	
	public List<Room> getAllRooms()
	{
		return roomRepo.findAll();
	}
	
	public Room getRoomById(int id)
	{
		return roomRepo.findById(id).orElse(null);
	}
	
	public String deleteRoom(int id)
	{
		//Room room = findById(id);
		roomRepo.deleteById(id);
		return "Room Deleted Successfully";
	}
	
	public Room addRoom(Room room)
	{
		return roomRepo.save(room);
	}
	
	public Room updateRoom(Room room, int id)
	{	
		Room existingRoom = roomRepo.findById(id).orElse(null);
		existingRoom.setRoomName(room.getRoomName());
		existingRoom.setPrice(room.getPrice());
		existingRoom.setRoomType(room.getRoomType());
		existingRoom.setAvailable(room.getAvailable());
		
		return roomRepo.save(existingRoom);
	}
	
	public Room updateSRoom(Room room, int id)
	{	
		Room existingRoom = roomRepo.findById(id).orElse(null);
		existingRoom.setAvailable(room.getAvailable());
		
		return roomRepo.save(existingRoom);
	}
}
