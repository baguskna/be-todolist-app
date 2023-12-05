const { prisma } = require('../config/index');

async function getAllTodos(req, res) {
  try {
    const todos = await prisma.todos.findMany();
    res.status(200).json({
      success: true,
      message: 'your todos',
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'internal server error',
    });
  }
}

async function postTodo(req, res) {
  const { name } = req.body;
  try {
    await prisma.todos.create({
      data: {
        name
      }
    });
    res.status(201).json({
      success: true,
      message: 'todo created!',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'internal server error',
    });
  }
}

module.exports = { getAllTodos, postTodo };
