/**
 * 获取指定两个整数之间的随机整数
 * @param {number} min
 * @param {number} max
 * @returns
 */
exports.getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
