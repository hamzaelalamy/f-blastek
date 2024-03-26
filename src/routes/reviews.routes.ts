import {Router} from 'express';
import {
    createReview,
    deleteReview,
    getAllReviews,
    getReviewById,
    updateReviewById,
} from '../controllers/reviews.controller';
const router = Router();

router.post('/reviews', createReview);
router.get('/reviews', getAllReviews);
router.get('/reviews/:id', getReviewById);
router.put('/reviews/:id', updateReviewById);
router.delete('/reviews/:id', deleteReview);

export default router;