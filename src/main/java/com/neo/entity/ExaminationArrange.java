package com.neo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

/**
 * 考试编排
 * @author RuichaoZhang
 *
 */
@Entity
public class ExaminationArrange {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @GenericGenerator(name = "increment", strategy = "increment")
    private long id;
    
	/**
	 * 比赛开始时间
	 */
	@Column(nullable = false)
    private String startTime;
    
	/**
	 * 比赛结束时间
	 */
	@Column(nullable = false)
	private String endTime;
	
	/**
	 * 单双打,单打或者双打
	 */
	@Column(nullable = false)
	private String gameType;
	

	/**
	 * userList 人员列表,用逗号隔开;比如:单打:张三,李四;只能录入两个人;如果是双打,则可以录入四个人
	 */
	@Column(nullable = false)
	private String userList;
	
	/**
	 * 记录创建时间.前台传入
	 */
	@Column(nullable = false)
	private String createTime;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getGameType() {
		return gameType;
	}
	public void setGameType(String gameType) {
		this.gameType = gameType;
	}
	public String getUserList() {
		return userList;
	}
	public void setUserList(String userList) {
		this.userList = userList;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getGameResult() {
		return gameResult;
	}
	public void setGameResult(String gameResult) {
		this.gameResult = gameResult;
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
	/**
	 * 比赛结果,结束后管理员维护
	 */
	@Column(nullable = true)
	private String gameResult;
	
	
	private String attribute1;
    private String attribute2;
    private String attribute3;
    private String attribute4;
    private String attribute5;
	
}