 const request = require("supertest");
const app = require("../app.js");


describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the users path", () => {
  test("It should get a response the GET method", (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect('Content-Type', /json/)
        .end( (err, res) => {
            if (err) return done(err);
            return done();
        })
  });
});
