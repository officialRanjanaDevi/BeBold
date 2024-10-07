const express = require('express');
const app = express();
const mongoDB = require("./db");
const cors = require('cors');
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
app.use(express.static('public'));
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Middleware for parsing JSON requests
app.use(express.json());


app.use('/',require('./routes/User'));
app.use('/product', require('./routes/Product'));
app.use('/cart', require('./routes/Cart'));
app.use('/wishlist', require('./routes/Wishlist'));
app.use('/order', require('./routes/Order'));
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
