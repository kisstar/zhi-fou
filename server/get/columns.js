const { generateColumns } = require("../helper");
const { NO_ERROR } = require("../config/error-code");

const columnList = generateColumns(5);

module.exports = (_req, res) =>
  res.json({
    code: NO_ERROR,
    data: columnList
  });
