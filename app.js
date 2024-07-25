
// const express = require('express');
// const app = express();
// const path = require('path');
// const mysql = require('mysql2');

//  const session = require('express-session');
// const flash = require('connect-flash');

// // Set the view engine to EJS
// app.set('view engine', 'ejs');

// //Middleware to parse incoming request bodies
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, '')));

// // Database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'admin',
//     database: 'khaoula'
//   });

// // // Route for the homepage
// // app.get('/', (req, res) => {
// //     res.render('index', {
// //         title: 'My EJS Page',
// //         name: 'khaoula',
// //         items: ['Item 1', 'Item 2', 'Item 3']
// //     });
// // });

// // Connect to MySQL
// db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to database:', err);
//       throw err;
//     }
//     console.log('Connected to database'); // 1 //
//   });
  
// // Route for another page (phase)
// app.get('/phase', (req, res) => {
//     res.render('phase', {
//         title: 'About Us'
//     });
// });
// app.get('/type', (req, res) => {
//     res.render('type', {
//         title: 'About Us'
//     });
// });
// app.get('/stade', (req, res) => {
//     res.render('stade', {
//         title: 'About Us'
//     });
// });
// app.get('/index', (req, res) => {
//     res.render('index', {
//         title: 'About Us'
//     });
//  });
//  app.get('/agenda', (req, res) => {
//     res.render('agenda', {
//         title: 'About Us'
//     });
//  });
// // Session and flash messages middleware
// app.use(session({
//     secret: 'secret_key',
//     resave: false,
//     saveUninitialized: true
//   }));
//   app.use(flash());
  
//   // Middleware to pass flash messages to views
//   app.use((req, res, next) => {
//     res.locals.message = req.flash('message');
//     next();
//   });
  
//   // Route for the homepage
//   app.get('/', (req, res) => {
//     res.render('index', { title: 'Home Page' });
//   });
  
//   // Route for registration form
//   app.get('/formulaire', (req, res) => {
//     res.render('formulaire', { title: 'Registration Form' });
//   });
  
//   // Handle registration form submission
//   app.post('/formulaire', (req, res) => {
//     const { name, email, password } = req.body;
//     const role = 'user'; // Default role for new registrations
  
//     // Check if the email already exists in the database
//     const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
//     db.query(checkEmailQuery, [email], (err, results) => {
//       if (err) {
//         console.error('Error checking email:', err);
//         return res.status(500).send('Internal Server Error');
//       }
  
//       if (results.length > 0) {
//         req.flash('message', 'Email already registered');
//         return res.redirect('/formulaire');
//       }
  
//       // If email does not exist, insert new user into database
//       const insertUserQuery = 'INSERT INTO users (nom, email, password, role) VALUES (?, ?, ?, ?)';
//       db.query(insertUserQuery, [name, email, password, role], (err, result) => {
//         if (err) {
//           console.error('Error inserting user:', err);
//           return res.status(500).send('Internal Server Error');
//         }
  
//         req.flash('message', 'Registration successful');
//         res.redirect('/'); // Redirect to home page after successful registration
//       });
//     });
//   });
  
//   // Route for login form
//   app.get('/formulaire2', (req, res) => {
//     res.render('formulaire2', { title: 'Login Form' });
//   });
  
//   app.post('/formulaire2', (req, res) => {
//     const { email, password } = req.body;
//     console.log('Email:', email); // Log email
//     console.log('Password:', password); // Log password
//     const sql = 'SELECT * FROM users WHERE email = ?';
//     db.query(sql, [email], async (err, results) => {
//         if (err) {
//             console.error('Erreur lors de la requête de connexion :', err);
//             return res.status(500).send('Erreur lors de la connexion : ');
//         }

//         if (results.length > 0) {
//             const user = results[0];
//             const match = await bcrypt.compare(password, user.password);
//             if (match) {
//                 if (user.role === 'admin') {
//                     res.redirect('/agenda'); // Redirection vers agenda.ejs pour les admins
//                 } else {
//                     res.redirect('/'); // Redirection vers accueil.ejs pour les utilisateurs normaux
//                 }
//             } else {
//                 res.send('Mot de passe incorrect');
//             }
//         } else {
//             res.send('E-mail non trouvé');
//         }
//     });
// });
// //   // Handle login form submission
// //   app.post('/formulaire2', (req, res) => {
// //     const { email, password } = req.body;
  
// //     // Check credentials against database
// //     const checkLoginQuery = 'SELECT role FROM users WHERE email = ? AND password = ?';
// //     db.query(checkLoginQuery, [email, password], (err, results) => {
// //       if (err) {
// //         console.error('Error checking login:', err);
// //         return res.status(500).send('Internal Server Error');
// //       }
  
// //       if (results.length > 0) {
// //         const role = results[0].role;
// //         req.session.user = { email, role }; // Store user info in session
// //         if (role === 'admin') {
// //           res.redirect('/agenda'); // Redirect admins to agenda page
// //         } else {
// //           res.redirect('/agenda'); // Redirect users to home page
// //         }
// //       } else {
// //         req.flash('message', 'Invalid credentials');
// //         res.redirect('/formulaire2'); // Redirect back to login page
// //       }
// //     });
// //   });
  
//   // Route for logout
//   app.get('/logout', (req, res) => {
//     req.session.destroy(); // Destroy session data
//     res.redirect('/'); // Redirect to home page after logout
//   });
// function toggleTheme() {
//     const body = document.body;
//     body.classList.toggle('night-theme');
// };
  


// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session'); // Importer express-session
const flash = require('connect-flash'); // Importer connect-flash  

// Set the view engine to EJS
app.set('view engine', 'ejs');
// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ajouté pour supporter le JSON si nécessaire
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '')));
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'khaoula'
});
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Configuration de session et de flash
app.use(session({
    secret: '123456',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

// Middleware pour injecter les messages flash dans les vues
app.use((req, res, next) => {
    res.locals.message = req.flash('message');
    next();
});

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My EJS Page',
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
app.get('/formulaire', (req, res) => {
    res.render('formulaire', {
        title: 'About Us'
    });
});
app.get('/formulaire2', (req, res) => {
    res.render('formulaire2', {
        title: 'About Us'
    });
});
app.get('/agenda', (req, res) => {
    res.render('agenda', {
        title: 'About Us'
    });
});
app.get('/confirmation', (req, res) => {
    res.render('confirmation', {
        title: 'confirmation'
    });
});

// si l'adresse e-mail fournie existe déjà dans la base de données
app.post('/formulaire', async (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('Erreur lors de la vérification de lemail :', err);
            return res.status(500).send('Erreur lors de la vérification de lemail');
        }

        if (results.length > 0) {
            // L'email existe déjà en base de données
            return res.send('E-mail déjà enregistré.');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // l'insertion d'un nouvel utilisateur dans la base de données après avoir vérifié que l'email n'est pas déjà enregistré
        var role = 'user';
        const sql = 'INSERT INTO users (nom, email, password, role) VALUES (?, ?, ?, ?)';
        db.query(sql, [name, email, hashedPassword, role], (err, result) => {
            if (err) throw err;
            return res.redirect('/index');
        });
    });
});

// vérifie si les informations d'identification sont correctes et redirige l'utilisateur vers des pages 
app.post('/formulaire2', (req, res) => {
    const { email, password } = req.body;
    console.log('Email:', email); // Log email
    console.log('Password:', password); // Log password
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('Erreur lors de la requête de connexion :', err);
            return res.status(500).send('Erreur lors de la connexion : ');
        }

        if (results.length > 0) {
            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                if (user.role === 'admin') {
                    res.redirect('/agenda'); // Redirection vers agenda.ejs pour les admins
                } else {
                    res.redirect('/'); // Redirection vers accueil.ejs pour les utilisateurs normaux
                }
            } else {
                res.send('Mot de passe incorrect');
            }
        } else {
            res.send('E-mail non trouvé');
        }
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
