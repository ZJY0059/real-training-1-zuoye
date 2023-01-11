import { http, apis } from "../http/http";
/**获取权限管理表格内容 */
export const authorityGet = () => {
	return http({
		url: apis("/sys/permission"),
		method: "get",
	});
};

