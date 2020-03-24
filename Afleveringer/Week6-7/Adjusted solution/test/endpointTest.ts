const expect = require('chai').expect;
import { Server } from "http";
import fetch from "node-fetch";


let server: Server;
const TEST_PORT = "7777"

describe("Endpoint test", () => {

    let URL: string;
    let users: Array<any>;

    before((done) => {
        //Switch to the test port for the API-server
        process.env["PORT"] = TEST_PORT;
        server = require("../src/app").server;
        URL = `http://localhost:${process.env.PORT}`;
        done()
    })

    afterEach(function () {
        users = [
            { name: "Rigmor", userName: "one@user.dk" },
            { name: "Silvia", userName: "two@user.dk" },
            { name: "Admin", userName: "admin@admin.dk" }]
    })

    after((done) => {
        server.close(done);
    })

    it("GET /api/dummy - returns Hello", async () => {
        const res = await fetch(`${URL}/api/dummy`).then(r => r.json());
        expect(res.msg).to.be.equal("Hello")
    })

    it("GET /api/users/:userName - returns iGameUser(DTO)", async () => {
        const exp = { name: "Silvia", userName: "two@user.dk" }
        const res = await fetch(`${URL}/api/users/two@user.dk`, {
            method: 'GET',
            headers: { Authorization: 'Basic ' + Buffer.from('admin@admin.dk' + ":" + 'test').toString('base64') }
        }).then(r => r.json());
        expect(res).to.deep.equal(exp)
    })

    it("Error GET /api/users/:userName - returns User Not Found", async () => {
        const exp = { code: 404, msg: 'User Not Found' }
        const res = await fetch(`${URL}/api/users/idontexist`, {
            method: 'GET',
            headers: { Authorization: 'Basic ' + Buffer.from('admin@admin.dk' + ":" + 'test').toString('base64') }
        }).then(r => r.json());
        expect(res).to.deep.equal(exp)
    })

    it("Error GET /api/users/:userName - returns Access denied, not Authorized", async () => {
        const exp = { code: 403, msg: 'Access denied, not Authorized' }
        const res = await fetch(`${URL}/api/users/two@user.dk`, {
            method: 'GET',
            headers: { Authorization: 'Basic ' + Buffer.from('one@user.dk' + ":" + 'test').toString('base64') }
        }).then(r => r.json());
        expect(res).to.deep.equal(exp)
    })

    it("POST /api/users - returns status: User was added", async () => {
        const exp = { status: 'User was added' }
        const testUser = { name: 'Tyrande', userName: 'tyrande@blizzard.com', password: 'test', role: 'user' }
        const res = await fetch(`${URL}/api/users`, {
            method: 'POST',
            body: JSON.stringify(testUser),
            headers: { 'Content-Type': 'application/json' }
        }).then(r => r.json());
        expect(res).to.deep.equal(exp)
    })

    it("GET /api/users/me - returns iGameUser(DTO)", async () => {
        const expected = { name: "Rigmor", userName: "one@user.dk" }
        const result = await fetch(`${URL}/api/users/user/me`, {
            method: 'GET',
            headers: { Authorization: 'Basic ' + Buffer.from('one@user.dk' + ":" + 'test').toString('base64') }
        }).then(r => r.json());
        expect(result).to.deep.equal(expected)
    })

    it("GET /api/users - returns UserDTO[]", async () => {
        const exp = users;
        const result = await fetch(`${URL}/api/users`, {
            method: 'GET',
            headers: { Authorization: 'Basic ' + Buffer.from('admin@admin.dk' + ":" + 'test').toString('base64') }
        }).then(r => r.json());
        expect(result).to.deep.equal(exp)
    })
    it("DELETE /api/users/:userName - returns User was Deleted", async () => {
        const exp = { status: 'User was deleted' }
        const result = await fetch(`${URL}/api/users/one@user.dk`, {
            method: 'DELETE',
            headers: { Authorization: 'Basic ' + Buffer.from('admin@admin.dk' + ":" + 'test').toString('base64') }
        }).then(r => r.json());
        expect(result).to.deep.equal(exp)
    })


})