import express from 'express';

const app = express();

const bookRouter = express.Router();

bookRouter.route('/')
  .get((req, res) => {
    res.send("Hello with babel")
  });

app.use("/books", bookRouter);

app.listen(8000, () => {
  console.log('Running server with express...')
})
