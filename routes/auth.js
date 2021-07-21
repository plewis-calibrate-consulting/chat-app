const router = require('express').Router();
const User = require('../model/model');

router.post('/register', async (req, res) => {
  console.log(req.body);

  // Create new user
  const user = await new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })
  try {
    const savedUser = await user.save();
    console.log(savedUser);
    return res.json(savedUser)
  } catch (err) {
    console.log('Error');
    console.log(err);
    return res.status(400).send(err);
  }
})

router.post('/login', (req, res) => {
  console.log(req.body);
});

module.exports = router;