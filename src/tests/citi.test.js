const request = require("supertest");
const app = require("../app");

//? POST --> 🔒
//? GET-ALL --> 🔓
//? GET-ONE --> 🔒
//? PUT --> 🔒
//? DELETE --> 🔒

beforeAll(async () => {
  const user = {
    firstName: "Jean",
    lastName: "Carlos",
    email: "jean@gmail.com.kg",
    password: "jean123",
    gender: "male",
  };

  const BASE_URL = "/api/v1/users";

  const resPost = await request(app).post(BASE_URL).send(user);
  userId = resPost.body.id;

  const resLogin = await request(app)
    .post(`${BASE_URL}/login`)
    .send({ email: "jean@gmail.com.kg", password: "jean123" });
  token = `Bearer ${resLogin.body.token}`;
});

const BASE_URL = "/api/v1/citis";
let userId;
let citiId;
let token;

const city = {
  name: "Santo Domingo",
  country: "Rep. Dom.",
  countryId: "DR",
};

// POST

test("POST -> 'BASE_URL'should return status code 201 and res.body.name === city.name", async () => {
  const res = await request(app)
    .post(BASE_URL)
    .send(city)
    .set("authorization", token);

  expect(res.status).toBe(201);
  expect(res.body).toBeDefined();
  expect(res.body.name).toBe(city.name);
});

afterAll(async () => {
  await request(app).delete(`/api/v1/users/${userId}`);
});
