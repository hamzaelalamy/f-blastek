import { Request, Response } from 'express';
import Review from '../models/review';


export const createReview = async (req: Request, res: Response) => {
    try {
        const clientId = req.body.user.id;
        const { professionalId, rating, description } = req.body;
        const review = new Review({ clientId, professionalId, rating, description });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if(!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        await Review.findByIdAndDelete(id);
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAllReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await Review.find();
        if(!reviews || reviews.length === 0) {
            return res.status(404).json({ error: 'No reviews found' });
        }
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getReviewById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateReviewById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { clientId, professionalId, rating, description } = req.body;
        const review = await Review.findByIdAndUpdate(
            id,
            { clientId, professionalId, rating, description },
            { new: true }
        );
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

import getAverageRatingForProfessional from '../services/averageRating';

export const AverageRating = async (req: Request, res: Response) => {
    const { professionalId } = req.params;
    try {
      const averageRating = await getAverageRatingForProfessional(professionalId);
      res.json({ averageRating });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};
