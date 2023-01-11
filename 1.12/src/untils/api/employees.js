import { http, apis } from "../http/http";
/**获取员工内容 */
export const staffGet = (params) => {
	return http({
		url: apis("/sys/user"),
		method: "get",
		params,
	});
};

/**获取当前员工内容 */
export const staffIdGet = (params) => {
	return http({
		url: apis("/sys/user/604f764971f93f3ac8f365c2"),
		method: "get",
		params,
	});
};
