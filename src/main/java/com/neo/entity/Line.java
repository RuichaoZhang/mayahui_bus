package com.neo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

/**
 * 线路表
 * @author RuichaoZhang
 *
 */
@Entity
public class Line {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @GenericGenerator(name = "increment", strategy = "increment")
    private long id;
    
	/**
	 * 线路名称
	 */
    private String isContainsShuniuzhan;
	
	public String getIsContainsShuniuzhan() {
		return isContainsShuniuzhan;
	}
	public void setIsContainsShuniuzhan(String isContainsShuniuzhan) {
		this.isContainsShuniuzhan = isContainsShuniuzhan;
	}
	/**
	 * 线路名称
	 */
	@Column(nullable = false)
    private String lineName;
    
	/**
	 * 线路编号
	 * 
	 */
	@Column(nullable = false)
	private String lineNum;
	
	/**
	 * 线路描述
	 */
	private String lineDescription;
	
	/**
	 * 这个线路内的所有站点
	 * 第一个是起始站，最后一个是终点站
	 */
	@Column(nullable = false)
	private String stationList;
	
	public String getStationList() {
		return stationList;
	}
	public void setStationList(String stationList) {
		this.stationList = stationList;
	}
	/**
	 * 记录创建时间.前台传入
	 */
	@Column(nullable = false)
	private String createTime;
	
	/**
	 * 枢纽站
	 */
	private String shuNiuZhan;
	public String getShuNiuZhan() {
		return shuNiuZhan;
	}
	public void setShuNiuZhan(String shuNiuZhan) {
		this.shuNiuZhan = shuNiuZhan;
	}
	
	private String start;
	private String end;
	
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getEnd() {
		return end;
	}
	public void setEnd(String end) {
		this.end = end;
	}
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
	public String getLineName() {
		return lineName;
	}
	public void setLineName(String lineName) {
		this.lineName = lineName;
	}
	public String getLineNum() {
		return lineNum;
	}
	public void setLineNum(String lineNum) {
		this.lineNum = lineNum;
	}
	public String getLineDescription() {
		return lineDescription;
	}
	public void setLineDescription(String lineDescription) {
		this.lineDescription = lineDescription;
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