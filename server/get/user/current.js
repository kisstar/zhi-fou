const { getUser } = require("../../store");
const { NO_ERROR } = require("../../config/error-code");

module.exports = (req, res) => {
  const { userID } = req;

  res.json({
    code: NO_ERROR,
    data: getUser(userID)
  });
};
