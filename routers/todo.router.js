const express = require('express');

const { getAllTodos, postTodo } = require('../controller/todo.controller');

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', postTodo);

module.exports = router;
