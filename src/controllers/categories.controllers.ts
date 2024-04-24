import { Request, Response } from 'express';
import Category from '../models/categories';

// GET /categories
export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        if(!categories || categories.length === 0) return res.status(404).json({ message: 'Categories not found' });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// POST /categories
export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// GET /categories/:id
export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// PUT /categories/:id
export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// DELETE /categories/:id
export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};