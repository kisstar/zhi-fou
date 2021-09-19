import request from "./request";

/**
 * 获取用户信息
 * @returns {UserProps}
 */
export const getUserInfo = () => {
  return request.get("/user/current");
};
