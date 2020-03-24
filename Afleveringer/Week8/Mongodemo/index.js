
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dev:fullstackCamilla2020@sem4jscamilla-gjl7j.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


require("dotenv").config();
// npm install dotenv
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://dev:${process.env.MONGODB_USER}@sem4jscamilla-gjl7j.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function mongoTest() {
    try {
        await client.connect();
        const dogs = client.db("kennel")
        const dogsCollection = dogs.collection("dogs")
        await dogsCollection.insertMany([{ name: "Togo" }, { name: "Fido" }, { name: "Tut", race: "dog" }])
        await dogsCollection.insertOne({ name: "Fido2" })
        const allDogs = await dogsCollection.find({}).toArray();
        console.log(allDogs)

    } catch (err) {
        console.log(err)
    }
    finally {
        client.close()
        console.log("Closes connection")
    }
}
mongoTest();