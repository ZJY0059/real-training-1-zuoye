import { http, apis } from "../http";
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

/*考勤报表数据*/
export function Atrtgetreport() {
  return http({
    url: apis("/attendances/reports"),
    method: "get"
  })
}

/*考勤设置数据*/
export function Attgetsetup(data) {
  return http({
    url: apis("/cfg/atte/item"),
    method: "post",
    data
  })
}
