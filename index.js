const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();

const port = process.env.PORT || 6000;

const userRouter = require('./src/routes/user.route')

// app.use(cors);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})
app.use('/user',userRouter);

// app.use('/programming-languages', programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
