import { http, apis } from "../http/http";

/**获取组织架构内容 */
export const structureGet = () => {
	return http({
		url: apis("/company/department"),
		method: "get",
	});
};
