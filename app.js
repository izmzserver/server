const express = require('express')
const app = express()
const port = 9093
const userRouter = require('./src/user');

app.use('/user', userRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))