const Product = require('./productSchema');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.updateOne({productid: id}, req.body);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({productid: req.params.productid});
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find a product by ID
const findProductById = async (req, res) => {
    try {
        const id = req.params;
        const product = await Product.find({productid: req.params.id});
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    fetchAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    findProductById,
};