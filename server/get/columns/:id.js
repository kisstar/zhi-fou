const { generateColumns } = require("../../helper");
const { NO_ERROR } = require("../../config/error-code");

const column = generateColumns(1)[0];

module.exports = (_req, res) =>
  res.json({
    code: NO_ERROR,
    data: column
  });
