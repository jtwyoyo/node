const express = require('express')

const app = express()
const port = process.env.port || 3000;


app.get('/', (req, resp) => {
    return resp.send("Good Job!");
})

app.listen(port, () => {
    console.log(`Currently listening on ${port}`)
})