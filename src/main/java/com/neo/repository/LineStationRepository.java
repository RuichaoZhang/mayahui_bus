package com.neo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.entity.LineStation;

public interface LineStationRepository extends JpaRepository<LineStation, Long> {
}