const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: false}));

nunjucks.configure('views', {noCache: true});
app.set('view engine','html' );
app.engine('html', nunjucks.render);

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.use('/', morgan('combined'));
app.get('/', (req, res, next) => res.render('index'));

app.listen(port, () => console.log(chalk.blue(`Listening intently on port ${port}`)));