const { body, validationResult } = require("express-validator");
const messageValidator = () => {
  return [
    // username must be an email
    body("subject").notEmpty().withMessage("Empty Title!"),
    // password must be at least 5 chars long
    body("text")
      .isLength({
        min: 1,
        max: 2000,
      })
      .withMessage("Empty Post"),
  ];
};

const validate = (req, res, next) => {
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    return `${msg}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    // Response will contain something like
    // { errors: [ "body[password]: must be at least 10 chars long" ] }
    return res.status(400).json({ error: result.array()[0] });
  }
  return next();
};

module.exports = {
  messageValidator,
  validate,
};
