import request from "./request";
import { LoginParams } from "@/types/interface";

/**
 * 用户登录
 * @returns {ColumnProps[]}
 */
export const login = (params: LoginParams) => {
  const _params = new URLSearchParams();

  Object.keys(params).forEach(key => {
    _params.append(key, params[key]);
  });

  return request.post("/login", _params, {
    headers: { "content-type": "application/x-www-form-urlencoded" }
  });
};
