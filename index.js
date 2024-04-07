const express = require('express');const mongoose = require('mongoose');
const app = express();
const http=require("http")
const server = http.createServer(app);
const PORT =3000;// Middleware
app.use(express.json());// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
useNewUrlParser: true,useUnifiedTopology: true}).
then(() => console.log('Connected to MongoDB')).
catch(err => console.error('Error connecting to MongoDB:', err));// Routes
app.get('/', (req, res) => {res.send('Welcome to my API');});// Start the server
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

