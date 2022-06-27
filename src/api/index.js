//对API进行统一管理

import requests from './request';


//用户登录
export const post_login = (params) => {
  return requests({
    method: 'post',
    url: `/login`,
    data: params
  });
}
//用户访问space
export const get_space = (params) => {
  return requests({
    method: 'get',
    url: `/space`,
    params:params,
  });
}
//用户请求logout
export const get_logout = () => {
  return requests({
    method: 'get',
    url: `/logout`,
  });
}
//查询本学期所有开设课程
export const reqCourseInfo = (params) => {
  return requests({
    method: 'get',
    url: `/course/info`,
    params:params,
  });
}
//删除选课
export const delCourse = (params) => {
  return requests({
    method: 'delete',
    url: `/student/course`,
    data: params,
  });
}

//新增选课
export const putCourse = (params) => {
  return requests({
    method: 'put',
    url: `/student/course`,
    data: params,
  });
}









