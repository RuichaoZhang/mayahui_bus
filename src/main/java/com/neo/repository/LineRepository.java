package com.neo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.neo.entity.Line;

public interface LineRepository extends JpaRepository<Line, Long> {
	
	@Query(value = "select * from line where attribute1 like  CONCAT('%',:station,'%') and is_contains_shuniuzhan='是' limit 1", nativeQuery = true)
	List<Line> findByStationList(@Param("station") String station);
	
	@Query(value = "select * from line where attribute1 like CONCAT('%',:startStation,'%')  and attribute1 like CONCAT('%',:endStation,'%') limit 1", nativeQuery = true)
	Line findByStationListByStartStationAndEndStation (@Param("startStation") String startStation, @Param("endStation") String endStation);
	
	@Query(value = "select * from line where attribute1 like CONCAT('%',:endStation,'%') and shu_niu_zhan like CONCAT('%',:shuNiuZhan,'%') limit 1", nativeQuery = true)
	Line findByRightLine(@Param("endStation") String endStation, @Param("shuNiuZhan") String shuNiuZhan);
	
	@Query(value = "select * from line where line_Num like CONCAT('%',:line,'%') or line_Name like CONCAT('%',:line,'%') or attribute1 like CONCAT('%',:line,'%') ", nativeQuery = true)
	List<Line> findByLine(@Param("line") String line);
}