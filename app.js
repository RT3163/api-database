const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3008

const moviesRouter = require('./routes/movies')
const db = require('./queries')

//const movies = JSON.parse(fs.readFileSync("movies.JSON"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send({greeting: "Hello World"})
})

/*app.get('/movies', (req, res) => {
  res.json(movies)
}); */ 

/*app.post('/reviews/:ID',function(req,res){
 //YOUR CODE GOES HERE 
});*/

app.post('/reviews/:ID', db.createMovie)

app.use('/movies', db.getMovies)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


module.exports = app
