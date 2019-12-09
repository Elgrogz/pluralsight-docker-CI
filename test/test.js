const chai = require("chai");
const chaiHttp = require("chai-http");
var app = require("../app").getApp;

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", done => {
    console.log("starting test")
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        console.log("testing status");
        expect(res).to.have.status(200);
      });
      done();
  });
});