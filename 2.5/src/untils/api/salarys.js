import { http, apis } from "../http";
/**获取工资表格内容 */
export const wagetableGet = (data) => {
	return http({
		url: apis("/salarys/list"),
		method: "post",
		data,
	});
};
/**获取工资部门内容 */
export const wagedepartmentGet = () => {
	return http({
		url: apis("/company/department"),
		method: "get",
	});
};
/**获取工资报表日期内容 */
export const wagedateGet = () => {
	return http({
		url: apis("/salarys/company-settings"),
		method: "get",
	});
};


/*获取工资设置数据*/
export function getsetting() {
  return http({
    url: apis("/salarys/settings"),
    method: "get"
  })
}


/*获取工资报表数据*/
export function getreport(data) {
  return http({
    url: apis(`/salarys/reports/202003?yearMonth=${data.yearMonth}&opType=${data.opType}`),
    method: "get",
    data
  })
}

/*获取调薪数据*/
export function getchangeSalary(data) {
  return http({
    url: http.apis(`/salarys/modify/${data}`),
    method: "get"
  })
}