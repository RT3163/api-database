const supertest = require('supertest');
const app = require('./app')
const fs = require("fs")
const request = supertest(app)

//const movies = JSON.parse(fs.readFileSync("movies.JSON"))
const db = require('./queries')

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200, JSON.stringify({greeting: "Hello World"}))
    .end(done)
})

test("GET /movies", done => {
  supertest(app)
    .get("/movies")
    .set('Content-Type', 'application/json')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200, db.getMovies)
    //.end(done)
})

it('GETs the expected data from movies endpoint', async done => {
  const res = await request.get('/movies')
  let expected = (res.body[0]["id"])
  expect(expected).toEqual(1)
  done()
})

it('GETs the movies endpoint', async done => {
  const response = await request.get('/movies')
  expect(response.status).toBe(200)
  done()
})

it('POST a new movie review', async done => {
  supertest(app)
    .post('/reviews')
    .send([{ID: 4, title: 'Friday', metascore: 100, website: 'www.friday.com'}])
    .set('Accept', 'application\json')
    .expect(201)
    done()
})

