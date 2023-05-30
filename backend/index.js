const express = require('express')
const app = express()
const cors = require('cors')
const port = 5001;

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(
  "297794256889-07r06uomp9ljj7869c8ihlmea2li1p8b.apps.googleusercontent.com"
);

app.use(cors());
app.use(express.json());


app.post('/api/google-login', async (req, res) => {
    const data = await client.verifyIdToken({
        idToken: req.body.token
    })

    res.status(200).json(data.getPayload())
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})