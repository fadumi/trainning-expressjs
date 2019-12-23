const router = require('express').Router();

var controller = require('../controllers/Todo');

router.post('/add', controller.addTodo);

// router.post('/todo', controller.postLogin);

module.exports = router;