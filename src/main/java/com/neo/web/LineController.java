package com.neo.web;


import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neo.entity.Line;
import com.neo.entity.Station;
import com.neo.json.AjaxJson;
import com.neo.repository.LineRepository;
import com.neo.repository.StationRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "LineController", description = "线路管理接口")
@Controller
public class LineController {

	@Resource
	LineRepository lineRepository;
	
	@Resource
	StationRepository stationRepository;
	
	@ApiOperation(value="新增或者修改线路接口", notes="新增的时候不用传Id,修改的时候传上ID")
	@RequestMapping(value = "/addLine", method = RequestMethod.POST)
	@ResponseBody
	public AjaxJson addExaminationArrange(@RequestBody Line line,
			HttpServletRequest request, HttpServletResponse response) {
		AjaxJson j = new AjaxJson();
		line.setIsContainsShuniuzhan("否");
		StringBuffer shuniuzhan = new StringBuffer();
		if(line.getStationList().split(",").length>0) {
			for (int i = 0; i < converToStationsList(line.getStationList().split(",")).size(); i++) {
				
				Station e = converToStationsList(line.getStationList().split(",")).get(i);
				if(e.getStationType().contains("换乘") || e.getStationType().contains("枢纽")) {
					if(shuniuzhan.length()==0) {
						shuniuzhan.append(e.getStationName());
					}else {
						shuniuzhan.append(",").append(e.getStationName());
					}
					line.setIsContainsShuniuzhan("是");
				}
			}
		}
		
		line.setShuNiuZhan(shuniuzhan.toString());
		lineRepository.save(line);
		j.setMessage("新增成功");
		j.setSuccess(true);
		return j;
	}

	@ApiOperation(value="查询全部线路", notes="查询全部线路接口")
	@RequestMapping(value = "/findAllLine", method = RequestMethod.GET)
	@ResponseBody
	public AjaxJson findAllLine(HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		j.setSuccess(true);
		j.setMessage("查询成功");
		List<Line> lines = lineRepository.findAll();
		String lineNum = request.getParameter("lineNum");
		if(lineNum!=null && !"".equals(lineNum)) {
			lines = lineRepository.findByLine(lineNum);
		}
		j.setObject(lines);
		return j;
	}
	
	@ApiOperation(value="根据起始站和终点站查询换乘线路", notes="根据起始站和终点站查询换乘线路")
	@RequestMapping(value = "/findRightLine", method = RequestMethod.GET)
	@ResponseBody
	public AjaxJson findRightLine(HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		String startStation = request.getParameter("startStation");
		String endStation = request.getParameter("endStation");
		Line line = lineRepository.findByStationListByStartStationAndEndStation(startStation, endStation);
		//先找起包含始站点和终止站点的线路,取第一条;如果找到了该站点则直接返回
		//select * from line where stationList like '%startStation%' and '%endStation%' limit 1
		if(line!=null) {
			j.setSuccess(true);
			j.setMessage("查询成功");
			line.setStart(startStation);
			line.setEnd(endStation);
			List<Line> lines = new ArrayList<>();
			lines.add(line);
			j.setObject(lines);
			return j;
		}else {
			List<Line> startLines = lineRepository.findByStationList(startStation);
			lineRepository.findAll();
			List<Line> rightLines = new ArrayList<>();
			//如果
			if(!startLines.isEmpty()) {
				//遍历起始站点查出来的数据有没有枢纽站
				for(int i = 0; i < startLines.size(); i++) {
					Line starLine = startLines.get(i);
					if(starLine.getIsContainsShuniuzhan().equals("是")){
						String[] shuNiuZhanStrs = starLine.getShuNiuZhan().split(",");
						for (int k = 0; k < shuNiuZhanStrs.length; k++) {
							//找到枢纽站和起始站相同的线路,然后将起始线路和该线路返回给前台
							Line rightLine = lineRepository.findByRightLine(endStation, shuNiuZhanStrs[k]);
							if(rightLine != null) {
								startLines.get(i).setStart(startStation);
								startLines.get(i).setEnd(shuNiuZhanStrs[k]);
								rightLines.add(startLines.get(i));
								rightLine.setStart(shuNiuZhanStrs[k]);
								rightLine.setEnd(endStation);
								rightLines.add(rightLine);
								j.setObject(rightLines);
								break;
							}
						}
						
//						if(shuNiuZhanStrs.length>0) {
//							String shuNiuStart = shuNiuZhanStrs[i];
//							for (int k = 0; k < shuNiuZhanStrs.length; k++) {
//								
//							}
//						}
					}
				}
			}
			
		}
		if(j.getObject()==null) {
			j.setObject(new ArrayList<>());
		}
		j.setSuccess(true);
		j.setMessage("查询成功");
		return j;
	}
	
	/**
	 * 站点转换成List的方法
	 * @param strings
	 * @return
	 */
	List<Station> converToStationsList(String[] strings){
		List<Station> stations = new ArrayList<>();
		for (int i = 0; i < strings.length; i++) {
			stations.add(stationRepository.findByStationName(strings[i]));
		}
		return stations;
	}
}
