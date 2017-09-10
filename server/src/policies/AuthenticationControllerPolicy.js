const Joi = require('joi')

module.exports = {
  register: (req, res, next) => {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if(error){
      switch (error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'Email must be a valid email address!'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must attend to the following rules: <br>' +
              '1 - At least 1 character lowercase <br>' +
              '2 - At least 1 character uppercase <br>' +
              '3 - At least 1 number <br>' +
              '4 - Minimum length of 8 characters'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information!'
          })
      }
    } else{
      next()
    }
  }
}