const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const categoryRoutes = require('./routes/category');
const subCategoryRoutes = require('./routes/subcategory');
const itemRoutes = require('./routes/item');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/category', categoryRoutes);
app.use('/api/subcategory', subCategoryRoutes);
app.use('/api/item', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
