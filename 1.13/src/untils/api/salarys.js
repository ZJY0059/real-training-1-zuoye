import { http, apis } from "../http/http";
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
