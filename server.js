// The first line assigns the express module to a variable express. We then initialize express and name it a variable: app.

var express = require('express');
var app = express();
var Models = require('./models');
// In the first two lines, we import the passport module and the express-session, both of which we need to handle authentication.
// Then, we import the body-parser module. This extracts the entire body part of an incoming request and exposes it in a format that is easier to work with. In this case, we will use the JSON format.
var passport = require('./config/passport/passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
// import the dot-env module to handle environment variables, npm install --save dotenv
var env = require('dotenv').load();

//handlebars
app.use(methodOverride("_method"));
var exphbs = require('express-handlebars')

//For BodyParser, To let our app use the body parser, we add these lines some spaces below the import lines:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static("public"));

// we initialize passport and the express session and passport session and add them both as middleware. We do this by adding these lines some spaces after the bodyParser import line.

// For Passport
 
app.use(session({ secret: 'supo1234',resave: true, saveUninitialized:true})); // session secret, move this to a outside file to not have secret revealed
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



//Models
var db = require('./models');

//Routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

var authRoute = require('./routes/auth.js')(app, passport);



//load passport strategies
 
// require('./config/passport/passport.js')(passport, db.user);





// var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();
var PORT = process.env.PORT || 3000;

// if (process.env.NODE_ENV !== 'testing') {
//   require('./models').connect(process.env.JAWSDB_URL)
//   .then(() => {
//     console.log('connected to the database ...')
//     app.listen(PORT, () => {
//       console.log(`Listening on port: ${PORT}`)
//     })
//   })
//   .catch((err) => {
//     console.log('DB connection error')
//     console.log(err)
//   })
// }





//Port config ---------------------------------------------------/

// Models.sequelize.sync({ force: false }).then(function() {
//   app.listen(PORT, function() {
//     console.log(`Listening on PORT: ${PORT}`);
//     })
//   });


//Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
  });
});

//--Not sure if needed 6/16 - Jeff
module.exports = app;



