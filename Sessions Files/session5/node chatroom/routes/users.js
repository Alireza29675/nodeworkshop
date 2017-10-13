var express = require('express');
var router = express.Router();

const title = 'Node Messenger'

const users = {
  mina: {
    name: 'Shohre',
    status: ''
  },
  elon: {
    name: 'Hamed',
    status: 'Happy:)'
  },
  paydar: {
    name: 'Amirhosein',
    status: 'Sad'
  },
  yb: {
    name: 'Yones',
    status: ''
  },
  li: {
    name: 'Elahe',
    status: 'Happy:)'
  },
  hacka: {
    name: 'Alireza',
    status: 'Eating Pizza all the time..'
  }
}

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

module.exports = router;
