import { SignupParams } from "@/types/interface";
import request from "./request";

/**
 * 获取用户信息
 * @returns {UserProps}
 */
export const getUserInfo = () => {
  return request.get("/user/current");
};

/**
 * 注册用户
 */
export const registerUser = (params: SignupParams) => {
  const _params = new URLSearchParams();

  Object.keys(params).forEach(key => {
    _params.append(key, params[key]);
  });

  return request.post("/user", _params, {
    headers: { "content-type": "application/x-www-form-urlencoded" }
  });
};
