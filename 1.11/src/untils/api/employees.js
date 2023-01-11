import { http, apis } from "../http/http";
/**获取员工内容 */
export const staffGet = (params) => {
	return http({
		url: apis("/sys/user"),
		method: "get",
		params
	});
};