import request from "./request";

/**
 * 获取专栏列表
 * @returns {ColumnProps[]}
 */
export const getColumns = () => {
  return request.get("/columns");
};

/**
 * 获取指定专栏下的文章列表
 * @param {number} cid 专栏 ID 标识
 * @returns {PostInfo[]}
 */
export const getPosts = (cid: number) => {
  return request.get(`/columns/${cid}/posts`);
};
