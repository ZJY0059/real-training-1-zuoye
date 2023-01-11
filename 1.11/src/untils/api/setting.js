import { http, apis } from "../http/http";
/**获取设置表格内容 */
export const setGet = (params) => {
	return http({
		url: apis("/sys/role"),
		method: "get",
		params,
	});
};
/**获取设置公司信息内容 */
export const settitleGet = () => {
	return http({
		url: apis("/company/1"),
		method: "get",
	});
};
