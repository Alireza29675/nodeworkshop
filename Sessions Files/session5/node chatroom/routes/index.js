var express = require('express');
var router = express.Router();

const title = 'Node Messenger'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: title, page: 'Home' })
});

router.get('/chatroom', function(req, res) {
  res.render('chatroom', { title: title, page: 'Chatroom' })
});

router.get('/about', function(req, res) {
  res.render('about', { title: title, page: 'About' })
});

module.exports = router;
