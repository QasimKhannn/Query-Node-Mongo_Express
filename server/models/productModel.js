const mongoose = require("mongoose");
const prodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter a Product name"],
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    },
    image: {
        type: String,
        required:false
  }
},{ timestamps:true});

const Product = mongoose.model("Product", prodSchema);
module.exports =Product