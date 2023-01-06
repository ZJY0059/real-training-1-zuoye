import { http, apis } from '../api/http'

/**封装登录接口 */
export const LoginPost = (data: any) => {
  return http({
    url: apis('/sys/login'),
    method: 'post',
    data
  })
}
/**封装首页内容 */
export const profilenPost = () => {
  return http({
    url: apis('/sys/profile'),
    method: 'post'
  })
}

/**封装组织架构 */
export const frameworkGet = () => {
  return http({
    url: apis('/company/department'),
    method: 'get'
  })
}
/**封装权限设置列表 */
export const purviewGet = (params: any) => {
  return http({
    url: apis('/sys/permission'),
    method: 'get',
    params
  })
}

/**封装权限列表添加权限 */
export const purviewAddPost = (data: any) => {
  return http({
    url: apis('/sys/permission'),
    method: 'post',
    data
  })
}
/**封装审批表格内容 */
export const approverPut = (data?: { page: number; pageSize: number }) => {
  return http({
    url: apis('/user/process/instance/1/10'),
    method: 'put',
    data
  })
}

/**封装社保城市 */
export const socialGet = () => {
  return http({
    url: apis('/sys/city'),
    method: 'get'
  })
}

/**封装社保表格内容 */
export const socialPost = (data: any) => {
  return http({
    url: apis('/social_securitys/list'),
    method: 'post',
    data
  })
}
