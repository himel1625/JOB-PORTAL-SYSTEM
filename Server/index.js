const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s9ap0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const jobBoxCollection = client.db('JObBoxDB').collection('jobBox');
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );

    app.post('/add-job', async (req, res) => {
      const jobData = req.body;
      console.log(jobData);
      const result = await jobBoxCollection.insertOne(jobData);
      res.send(result);
    });

    app.get('/jobs/:email', async (req, res) => {
      const email = req.params.email;
      const query = { user_email: email };
      const result = await jobBoxCollection.find(query).toArray();
      res.send(result);
    });

    app.get('/jobs', async (req, res) => {
      const result = await jobBoxCollection.find().toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('jobBox server in loading....');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
