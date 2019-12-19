import mongoose from 'mongoose';
import express from  'express';
import bodyParser from  'body-parser';

import { UserController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://Roman:,LGVVhbrbjp3G!t@cluster0-vogsm.mongodb.net/travel`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.get("/users/:id", User.show);
    app.delete("/users/:id", User.delete);
    app.post("/users", User.create);

    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
  } catch (e) {
    console.log(e)
  }
}

start();