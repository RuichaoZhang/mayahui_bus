package com.neo.web;


import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neo.entity.Station;
import com.neo.json.AjaxJson;
import com.neo.repository.StationRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "StationController", description = "站点管理接口")
@Controller
public class StationController {

	@Resource
	StationRepository stationRepository;

	@ApiOperation(value="新增或者修改站点接口", notes="新增的时候不用传Id,修改的时候传上ID")
	@RequestMapping(value = "/addStation", method = RequestMethod.POST)
	@ResponseBody
	public AjaxJson addExaminationArrange(@RequestBody Station station,
			HttpServletRequest request, HttpServletResponse response) {
		AjaxJson j = new AjaxJson();
		stationRepository.save(station);
		j.setMessage("新增成功");
		j.setSuccess(true);
		return j;
	}

	@ApiOperation(value="查询全部站点", notes="查询全部站点接口")
	@RequestMapping(value = "/findAllStation", method = RequestMethod.GET)
	@ResponseBody
	public AjaxJson findAllExaminationArrange(HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		j.setSuccess(true);
		String station = request.getParameter("station");
		List<Station> stations = stationRepository.findAll();
		if(station!=null && !station.isEmpty()) {
			stations = stationRepository.findByStation(station);
		}
		j.setMessage("查询成功");
		j.setObject(stations);
		return j;
	}
}
