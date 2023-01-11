import { http, apis } from "../http/http";
/**获取社保表格内容 */
export const securitytablePost = (data) => {
	return http({
		url: apis("/social_securitys/list"),
		method: "post",
		data,
	});
};
/**获取社保报表日期内容 */
export const securitydateGet = () => {
	return http({
		url: apis("/social_securitys/settings"),
		method: "get",
	});
};
/**获取社保城市内容 */
export const securitycityGet = () => {
	return http({
		url: apis("/sys/city"),
		method: "get",
	});
};
/**获取社保部门内容 */
export const securitydepartmentGet = () => {
	return http({
		url: apis("/company/department"),
		method: "get",
	});
};
