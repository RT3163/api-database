const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ron',
    host: 'localhost',
    database: 'movieDB',
    password: 'password',
    port: 5432
})

const getMovies = (req, res) => {
    pool.query('SELECT * FROM movies', (err, results) => {
        if(err) {
            throw err
        }
        res.status(200).json(results.row)
    })
}

const createMovie = (req, res) => {
    const {metascore, website, title} = request.body

    pool.query(`INSERT INTO movies (metascore, website, title) VALUES (${metascore}, ${website}, ${title})`, (err, results) => {
        if (err) {
            throw err
        }

        response.status(201).send(`Movies added with ID: ${result.ID}`)
    })
}


module.exports = {
    getMovies,
    createMovie,
}