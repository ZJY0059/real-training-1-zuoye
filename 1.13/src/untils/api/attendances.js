import { http, apis } from "../http/http";
/**获取考勤表格内容 */
export const checkingtableGet = (params) => {
	return http({
		url: apis("/attendances"),
		method: "get",
		params,
	});
};
/**获取考勤部门内容 */
export const checkingdepartmentGet = () => {
	return http({
		url: apis("/company/department"),
		method: "get",
	});
};
