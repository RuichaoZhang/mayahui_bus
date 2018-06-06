package com.neo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

/**
 * 站点表
 * @author RuichaoZhang
 *
 */
@Entity
public class Station {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @GenericGenerator(name = "increment", strategy = "increment")
    private long id;
    
	/**
	 * 站点名称
	 */
	@Column(nullable = false)
    private String stationName;
	
	/**
	 * 站点编号
	 */
	@Column(nullable = false)
    private String stationNum;
    
	public String getStationNum() {
		return stationNum;
	}
	public void setStationNum(String stationNum) {
		this.stationNum = stationNum;
	}
	/**
	 * 站点类型
	 * 枢纽站，普通站
	 */
	@Column(nullable = false)
	private String stationType;
	
	/**
	 * 站点描述
	 */
	@Column(nullable = false)
	private String stationDescription;
	
	/**
	 * 记录创建时间.前台传入
	 */
	@Column(nullable = false)
	private String createTime;
	
	private String attribute1;
    private String attribute2;
    private String attribute3;
    private String attribute4;
    private String attribute5;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getStationName() {
		return stationName;
	}
	public void setStationName(String stationName) {
		this.stationName = stationName;
	}
	public String getStationType() {
		return stationType;
	}
	public void setStationType(String stationType) {
		this.stationType = stationType;
	}
	public String getStationDescription() {
		return stationDescription;
	}
	public void setStationDescription(String stationDescription) {
		this.stationDescription = stationDescription;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getAttribute1() {
		return attribute1;
	}
	public void setAttribute1(String attribute1) {
		this.attribute1 = attribute1;
	}
	public String getAttribute2() {
		return attribute2;
	}
	public void setAttribute2(String attribute2) {
		this.attribute2 = attribute2;
	}
	public String getAttribute3() {
		return attribute3;
	}
	public void setAttribute3(String attribute3) {
		this.attribute3 = attribute3;
	}
	public String getAttribute4() {
		return attribute4;
	}
	public void setAttribute4(String attribute4) {
		this.attribute4 = attribute4;
	}
	public String getAttribute5() {
		return attribute5;
	}
	public void setAttribute5(String attribute5) {
		this.attribute5 = attribute5;
	}
	
}