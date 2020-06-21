const express = require('express')
const app = express()
const port = 9093
const userRouter = require('./src/user');
const jobRouter = require('./src/job');

app.use('/user', userRouter);
app.use('/job', jobRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))