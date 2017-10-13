var express = require('express');
var router = express.Router();

const title = 'Node Messenger'

const users = require('../users.json')

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  const username = req.params.username;
  const user = users[username];
  if (user !== undefined) {
    res.render('profile', {
      title: title,
      avatarSRC: `/images/users/${username}.jpg`,
      page: `${user.name}'s Profile`,
      user: user
    })
  }
  else {
    res.render('error', {
      message: 'User not found!'
    })
  }
});

router.post('/login', function (req, res, next) {
  res.json(!!users[req.body.username])
})

module.exports = router;
