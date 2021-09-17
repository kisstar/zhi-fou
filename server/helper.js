/**
 * 获取指定两个整数之间的随机整数
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRndInteger = (exports.getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

/**
 * 获取指定数目的专栏
 * @param {*} num
 * @returns
 */
exports.generateColumns = num => {
  return Array(num)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `test${index + 1}的标题`,
      avatar:
        index + 1 === 3
          ? ""
          : `http://www.dmoe.cc/random.php?random=${getRndInteger(1, 1000)}`,
      description: `这是test${index +
        1}的专栏，有一段非常有意思的简介，欢迎阅读和编辑哦`
    }));
};

/**
 * 获取指定数目的文章
 * @param {*} num
 * @returns
 */
exports.generatePosts = num => {
  return Array(num)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `这是我的第${index + 1}篇文章`,
      image:
        index + 1 === 3
          ? ""
          : `http://www.dmoe.cc/random.php?random=${getRndInteger(1, 1000)}`,
      content: `这是我专栏里的第${index +
        1}篇文章，其中包含许多有意思的内容，欢迎经常来阅读哦`,
      createdAt: "2020-11-03 12:32:09",
      columnId: getRndInteger(1, 5)
    }));
};

/**
 * 生成指定个数的随机字符串
 * @param {number} length 个数
 * @returns
 */
exports.randomString = length => {
  const originString = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const maxLength = originString.length;
  let result = "";

  length = length || 32;

  for (let i = 0; i < length; i++) {
    result += originString.charAt(Math.floor(Math.random() * maxLength));
  }

  return result;
};
