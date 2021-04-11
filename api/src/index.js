import express from 'express';
import routes from './routes/plateRoutes';
import mongoose from 'mongoose';

const app = express();

const PORT = 3000;

// http://localhost:3000/
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))

// mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://database_user:DatabaseUser1@cluster0.u80ga.mongodb.net/plate_finance?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//bodyparser setup
app.use(express.urlencoded());
app.use(express.json());

routes(app);