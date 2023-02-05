import { http, apis } from "../http";
/**获取审批表格内容 */
export const approvetablePut = (data) => {
	return http({
		url: apis("/user/process/instance/1/10"),
		method: "put",
		data,
	});
};


/*查看信息*/
export function getAppinfo(data) {
  return http({
    url: apis(`/user/process/instance/${data}`),
    method: "get"
  })
}
// 流程接口
export function getApptask(data) {
  return http({
    url: apis(`/user/process/instance/tasks/${data}`),
    method: "get"
  })
}
