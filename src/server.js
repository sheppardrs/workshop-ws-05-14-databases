import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░█▀█▐▀█░▐▀▀▌░▀█▀░░▀▀▀▌░░░▌░░
// ░░█▄█▐▄█░▐▄▄▌░░▌░░░▄▄▄▌░░░▌░░
// ░░▌░░▐░▐░▐░█░░░▌░░░░░░▌░░░▌░░
// ░░▌░░▐░▐░▐░░▌░░▌░░░▄▄▄▌█░░▌░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// sync Sequelize


// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

// enable only if you want templating
app.set('view engine', 'ejs');

// enable only if you want static assets from folder static
app.use(express.static('static'));

// this just allows us to render ejs from the ../app/views directory
app.set('views', path.join(__dirname, '../src/views'));

// enable json message body for posting data to API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET new
app.get('/new', (req, res) => {
  res.render('new');
});

// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░█▀█▐▀█░▐▀▀▌░▀█▀░░▀▀▀▌░░░▌░░
// ░░█▄█▐▄█░▐▄▄▌░░▌░░░▄▄▄▌░░░▌░░
// ░░▌░░▐░▐░▐░█░░░▌░░░░░░▌░░░▌░░
// ░░▌░░▐░▐░▐░░▌░░▌░░░▄▄▄▌█░░▌░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// DEFAULT INDEX ROUTE


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░█▀█▐▀█░▐▀▀▌░▀█▀░░▀▀▀▌░░░▀▀▌░░
// ░░█▄█▐▄█░▐▄▄▌░░▌░░░▄▄▄▌░░░▄▄▌░░
// ░░▌░░▐░▐░▐░█░░░▌░░░░░░▌░░░▌░░░░
// ░░▌░░▐░▐░▐░░▌░░▌░░░▄▄▄▌█░░█▄▄░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// POST /new


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░█▀█▐▀█░▐▀▀▌░▀█▀░░▀▀▀▌░░▀▀▌░░
// ░░█▄█▐▄█░▐▄▄▌░░▌░░░▄▄▄▌░░▄▄▌░░
// ░░▌░░▐░▐░▐░█░░░▌░░░░░░▌░░░░▌░░
// ░░▌░░▐░▐░▐░░▌░░▌░░░▄▄▄▌█░▄▄▌░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// POST vote/:id


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░█▀█▐▀█░▐▀▀▌░▀█▀░░▀▀▀▌░░▌░▌░░░
// ░░█▄█▐▄█░▐▄▄▌░░▌░░░▄▄▄▌░░▌░▌░░░
// ░░▌░░▐░▐░▐░█░░░▌░░░░░░▌░░▀▀▌░░░
// ░░▌░░▐░▐░▐░░▌░░▌░░░▄▄▄▌█░░░▌░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// GET author's posts

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);
