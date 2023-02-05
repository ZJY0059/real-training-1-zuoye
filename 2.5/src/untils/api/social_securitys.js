import { http, apis } from '../http'
/**获取社保表格内容 */
export const securitytablePost = (data) => {
  return http({
    url: apis('/social_securitys/list'),
    method: 'post',
    data
  })
}
/**获取社保报表日期内容 */
export const securitydateGet = () => {
  return http({
    url: apis('/social_securitys/settings'),
    method: 'get'
  })
}
/**获取社保城市内容 */
export const securitycityGet = () => {
  return http({
    url: apis('/sys/city'),
    method: 'get'
  })
}
/**获取社保部门内容 */
export const securitydepartmentGet = () => {
  return http({
    url: apis('/company/department'),
    method: 'get'
  })
}


/*获取历史归档数据*/
export function getHistory() {
  return http({
    url: apis("/social_securitys/historys/2020/list"),
    method: "get"
  })
}

/*获取报表数据*/
export function getMonreport(data) {
  return http({
    url: apis(`/social_securitys/historys/202002?month=${data.month}&opType=${data.opType}`),
    method: "get"
  })
}
