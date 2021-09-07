const { generateColumns } = require("../helper");

const columnList = generateColumns(5);

module.exports = (_req, res) =>
  res.json({
    code: 200,
    data: columnList
  });
