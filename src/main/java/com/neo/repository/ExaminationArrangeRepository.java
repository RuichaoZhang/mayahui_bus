package com.neo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.entity.ExaminationArrange;


public interface ExaminationArrangeRepository extends JpaRepository<ExaminationArrange, Long> {
	
	List<ExaminationArrange> findByUserListContaining(String userName);

}