const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const colors = require("colors");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

try {
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});
	console.log(`MongoDB Connected:`.cyan.underline.bold);
} catch (error) {
	console.log(`Error: ${error.message}`.red);
	process.exit(1);
}

const Product = mongoose.model(
	"products",
	new mongoose.Schema({
		_id: { type: String, default: shortid.generate },
		title: String,
		image: String,
		description: String,
		availableSizes: [String],
		price: Number,
	})
);

app.get("/api/products", async (req, res) => {
	const products = await Product.find({});
	res.send(products);
});

app.post("/api/products", async (req, res) => {
	const newProduct = new Product(req.body);
	const savedProduct = await newProduct.save();
	res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
	const deletedProduct = await Product.findOneAndDelete(req.params.id);
	res.send(deletedProduct);
});

app.listen(port, () =>
	console.log(`serve at http://localhost:${port}`.yellow.underline.bold)
);
