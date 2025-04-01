// routes/todoRoutes.js
const express = require('express');
const router = express.Router();

let todos = [];

// Render the index page with todos
router.get('/', (req, res) => {
    res.render('index', { todos: todos });
});

// Add a new to-do item
router.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    if (newTodo) {
        todos.push(newTodo);
    }
    res.redirect('/');
});

// Delete a to-do item
router.post('/delete', (req, res) => {
    const todoToDelete = req.body.todo;
    todos = todos.filter(todo => todo !== todoToDelete);
    res.redirect('/');
});

module.exports = router;
