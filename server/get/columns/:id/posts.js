const { generatePosts } = require("../../../helper");

const postList = generatePosts(15);

module.exports = (_req, res) =>
  res.json({
    code: 200,
    data: postList
  });
