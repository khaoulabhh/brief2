
const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '')));

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My EJS Page',
        name: 'khaoula',
        items: ['Item 1', 'Item 2', 'Item 3']
    });
});

// Route for another page (phase)
app.get('/phase', (req, res) => {
    res.render('phase', {
        title: 'About Us'
    });
});
app.get('/type', (req, res) => {
    res.render('type', {
        title: 'About Us'
    });
});
app.get('/stade', (req, res) => {
    res.render('stade', {
        title: 'About Us'
    });
});
app.get('/index', (req, res) => {
    res.render('index', {
        title: 'About Us'
    });
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
