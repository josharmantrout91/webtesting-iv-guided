const request = require("supertest");
const server = require("../api/server");

describe("server.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("should return status 200 ok", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("should return status 200 ok", async () => {
    const res = await request(server).get("/");

    expect(res.status).toBe(200);
  });

  it("should return JSON", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });
});
