import express from 'express';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categories.controllers';

const router = express.Router();

// GET /categories
router.get('/categories', getAllCategories);

// GET /categories/:id
router.get('/categories/:id', getCategoryById);

// POST /categories
router.post('/categories', createCategory);

// PUT /categories/:id
router.put('/categories/:id', updateCategory);

// DELETE /categories/:id
router.delete('/categories/:id', deleteCategory);

export default router;