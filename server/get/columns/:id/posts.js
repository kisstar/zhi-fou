const { getRndInteger } = require("../../../helper");

const postList = Array(15)
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

module.exports = (_req, res) => res.json(postList);
