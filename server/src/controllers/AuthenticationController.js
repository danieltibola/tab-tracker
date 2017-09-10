const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try{
      console.log(`Received ${req.body.email} and ${req.body.password}`)
      const user = await User.create(req.body)
      console.log(`Created User`)
      res.send(user.toJSON())
    }
    catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.',
        msg: err
      })
    }
  }
}
