const mongoose = require("mongoose");
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(process.env.MONGO_URL, options).then(() => {
  console.log("Database connection established!");
},
  err => {
    {
      console.log("Error connecting Database instance due to:", err);
    }
  });