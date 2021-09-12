'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = 4000;

const { getAllProjects, getProjectByTitle   } = require('./handlers');

const app = express();

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD,GET, PUT, POST,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Tyope, Accept'
  );
  next();
});

app.use(morgan('tiny'));
app.use(express.static('./server/assets'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/'));

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/projects', getAllProjects);
app.get('/project/:title',getProjectByTitle  )

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
