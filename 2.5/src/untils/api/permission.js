import { http, apis } from "../http";
/**获取权限管理表格内容 */
export const authorityGet = () => {
	return http({
		url: apis("/sys/permission"),
		method: "get",
	});
};

/**添加权限 */
export const authorityAddPost = (data) => {
	return http({
		url: apis("/sys/permission"),
		method: "post",
		data,
	});
};

/**编辑权限 */
export const authorityEditGet = (data) => {
	return http({
		url: apis("/sys/permission/" + data.id),
		method: "put",
		data,
	});
};

/**删除权限 */
export const authorityDelDelete = (id) => {
	return http({
		url: apis("/sys/permission/" + id),
		method: "DELETE",
	});
};

