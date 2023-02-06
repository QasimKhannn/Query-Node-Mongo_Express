const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require('./models/productModel');
const port = process.env.port || 3333;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Working Well Now");
// });
// app.get("/add", (req, res) => {
//   res.send("Oiiii");
// });
app.post("/product", async(req, res) => {
    try {
        const prod = await Product.create(req.body)
        res.status(200).json(prod)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
});
app.get('/listProducts', async(req, res) => {
    try {
        const prod = await Product.find(req.body)
        res.status(200).json(prod)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})
app.get('/oneProduct/:id', async (req, res) => {
    try {
        const {id}=req.params
        const prod = await Product.findById(id)
        res.status(200).json(prod)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
app.put('/updateProd/:id', async (req, res) => {
    try {
        const { id } = req.params
        const prod = await Product.findByIdAndUpdate(id, req.body)
        if (!prod) {
            res.status(404).json({message:`cannot Find product with id ${id}`})
        }
        res.status(200).json(prod)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const { id } = req.params
        const prod = await Product.findByIdAndDelete(id)
        if(!prod){
            res.status(404).json({message:`cannot Find product with id ${id}`})
        }
        res.status(200).json(prod)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://QasimKhan:QasimKhan@cluster1.qhcltxw.mongodb.net/test`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Error");
  });
