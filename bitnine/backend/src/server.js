const express = require('express');
const mongoose = require('mongoose');

const app = express();

// database connection
mongoose.connect('mongodb://localhost/Users')
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Could not connect to database'));

// mongoose schema for user
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 5}
});

// mongoose model for user
const User = mongoose.model('User', userSchema);

// middlewares
app.use(express.json());

// routes
app.get('/', async (req, res) => {
    res.send('Welcome');
});

app.get('/sign_up', async (req, res) => {
    res.send('sign up page');
});

app.get('/login', async (req, res) => {
    res.send('login page');
});

app.post('/sign_up', async (req, res) => {
    try {
        let newUser = await new User({
        email: req.body.email,
        password: req.body.password
    });

        newUser = await newUser.save()
        res.send(newUser);

    } catch (error) {
        res.send(error.message);
    }
});

app.post('/login', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    let user = await User.findOne({ email: req.body.email});
    if (user && user.password == password) {
         res.send('Homepage');
    } else {
         res.status(400).send('Invalid email or password')
    }

})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server connected and listening on port ${PORT}`);
});
