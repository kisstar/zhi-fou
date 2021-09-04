const { getRndInteger } = require("../helper");

const columnList = Array(5)
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

module.exports = (_req, res) => res.json(columnList);
