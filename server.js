import express, { json } from 'express'
import mongoose from 'mongoose'
import { mongoURI } from './config/keys.js'
import router from './routes/api/items.js'

const app = express();
// const items = require('./routes/api/items')

app.use(json());

//DB config
const db = mongoURI

//Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log('Connection to mongo db successful!'))
    .catch(err => console.log(err));

// Using routes
app.use('/api/items', router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// DragoonZoomRival@42069