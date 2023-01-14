import { http, apis } from "../http/http";
/**获取审批表格内容 */
export const approvetablePut = (data) => {
	return http({
		url: apis("/user/process/instance/1/10"),
		method: "put",
		data,
	});
};
