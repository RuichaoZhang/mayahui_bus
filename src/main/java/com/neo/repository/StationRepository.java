package com.neo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.neo.entity.Station;


public interface StationRepository extends JpaRepository<Station, Long> {
	
	Station findByStationName(String stationName);
	
	@Query(value = "select * from station where station_name like  CONCAT('%',:station,'%') or station_num like  CONCAT('%',:station,'%') or station_type like  CONCAT('%',:station,'%')  ", nativeQuery = true)
	List<Station> findByStation(@Param("station") String station);
}