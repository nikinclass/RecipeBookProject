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
  test("It should response the GET method", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
});
