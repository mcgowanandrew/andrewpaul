const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Working!')
    
})

const { getAllProjects, getProjectByTitle } = require('./handlers');
app.get('/projects', getAllProjects);
app.get('/project/:title', getProjectByTitle);

app.listen(process.env.PORT || 5000)

