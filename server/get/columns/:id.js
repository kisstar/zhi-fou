const { generateColumns } = require("../../helper");

const column = generateColumns(1)[0];

module.exports = (_req, res) =>
  res.json({
    code: 200,
    data: column
  });
