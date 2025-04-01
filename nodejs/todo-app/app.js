// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

// Set up static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use body-parser to parse POST request data
app.use(bodyParser.urlencoded({ extended: false }));

// Use todoRoutes for handling to-do list related routes
app.use('/', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
