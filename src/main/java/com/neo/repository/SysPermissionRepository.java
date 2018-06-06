package com.neo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.entity.SysPermission;

public interface SysPermissionRepository extends JpaRepository<SysPermission, Long> {

}