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
let response;

    beforeEach(async () => {
        response = await request(app).get('/users')
    })


    test("It should get a response the GET method", () => {
        expect(response.statusCode).toBe(200);
    });

    test("Should return an array of users", () =>{
        expect(typeof response.body).toBe('Array')
    })
});
