const { handleHttpError } = require("../utils/handleError");


/**
 * Array with roles allowed
 * @param {*} role
 * @returns
 */
const checkRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    console.log({ user });
    const rolesByUser = user.role;
    const checkValueRole = roles.some((roleSingle) =>
      rolesByUser.includes(roleSingle)
    );
    if (!checkValueRole) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
    }
    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = { checkRole };
