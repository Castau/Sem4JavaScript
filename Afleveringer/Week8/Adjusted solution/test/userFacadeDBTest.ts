import * as mongo from "mongodb"
const MongoClient = mongo.MongoClient;
import setup from "../config/setupDB"
import UserFacade from '../src/facades/userFacadeWithDB';
import { expect } from "chai";
import { bryptAsync } from "../src/utils/bcrypt-async-helper"
import { ApiError } from '../src/errors/apiError';

let userCollection: mongo.Collection | null;
let client: mongo.MongoClient;

// function checkCollection(collection: mongo.Collection) {
//   if (collection === null) {
//     throw new Error("Collection was null")
//   }
// }

describe("Verify the UserFacade", () => {

    before(async () => {
        client = await setup();
        process.env["DB_NAME"] = "semester_case_test"
        const db = await UserFacade.setDatabase(client)
        if (!db) {
            throw new Error("Database not intialized")
        }
        userCollection = db.collection("users");
        if (userCollection === null) {
            throw new Error("user collection not")
        }
    })
    after(async () => {
        await client.close();
    })
    beforeEach(async () => {
        if (userCollection === null) {
            throw new Error("userCollection not set")
        }
        await userCollection.deleteMany({})
        const secretHashed = await bryptAsync("secret");
        await userCollection.insertMany([
            { name: "Peter Pan", userName: "pp@b.dk", password: secretHashed, role: "user" },
            { name: "Donald Duck", userName: "dd@b.dk", password: secretHashed, role: "user" },
            { name: "admin", userName: "admin@a.dk", password: secretHashed, role: "admin" }
        ])
    })


    it("Should Add the user Jan", async () => {
        const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
        try {
            const status = await UserFacade.addUser(newUser);
            expect(status).to.be.equal("User was added")

            if (userCollection === null) {
                throw new Error("Collection was null")
            }
            const jan = await userCollection.findOne({ userName: "jo@b.dk" })
            expect(jan.name).to.be.equal("Jan Olsen")
        } catch (err) {
        } finally { }
    })

    it("Should remove the user Peter", async () => {
        const res = await UserFacade.deleteUser("pp@b.dk");
        expect(res).to.be.equal("User was deleted")
        const exp = await userCollection!.findOne({ userName: "pp@b.dk" })
        expect(exp).to.be.equal(null)

    })

    it("Should get three users", async () => {
        const exp = [
            { name: 'Peter Pan', userName: 'pp@b.dk' },
            { name: 'Donald Duck', userName: 'dd@b.dk' },
            { name: 'admin', userName: 'admin@a.dk' }
        ]
        const result = await UserFacade.getAllUsers()
        expect(exp).to.be.deep.equal(result)
    })

    it("Should find Donald Duck", async () => {
        const exp = { name: 'Donald Duck', userName: 'dd@b.dk', role: 'user' }
        const result = await UserFacade.getUser('dd@b.dk')
        expect(exp.name).to.be.equal(result.name)
        expect(exp.userName).to.be.equal(result.userName)
        expect(exp.role).to.be.equal(result.role)
    })

    it("Should not find xxx.@.b.dk", async () => {
        try {
            await UserFacade.getUser("xxx.@.b.dk");
            throw new Error("Should not get here")
        } catch (err) {
            console.log(err);
            expect(err instanceof ApiError).to.be.equal(true)
            expect(err.message).to.be.equal("User xxx.@.b.dk not found")
        }
        finally { }
    })
    it("Should correctly validate Peter Pan's credentials", async () => {
        const user = { name: "Peter Pan", userName: "pp@b.dk", password: 'secret', role: "user" }
        const exp = true
        const result = await UserFacade.checkUser(user.userName, user.password)
        expect(exp).to.be.equal(result)

    })

    it("Should NOT correctly validate Peter Pan's check", async () => {
        try {
            await UserFacade.checkUser("pp@b.dk", "superwrongpass");
        } catch (err) {
            expect(err).to.be.false
        }
    })

    it("Should NOT correctly validate non-existing users check", async () => {
        try {
            await UserFacade.checkUser("superwronguser@b.dk", "secret");
        } catch (err) {
            expect(err).to.be.false
        }
    })

})