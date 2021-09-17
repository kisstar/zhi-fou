const { generatePosts } = require("../../../helper");
const { NO_ERROR } = require("../../../config/error-code");

const postList = generatePosts(15);

module.exports = (_req, res) =>
  res.json({
    code: NO_ERROR,
    data: postList
  });
