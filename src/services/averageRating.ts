import Review from "../models/review";

const getAverageRatingForProfessional = async (professionalId: any) => {
  try {
    const result = await Review.aggregate([
      { $match: { professionalId } },
      { $group: { _id: null, averageRating: { $avg: "$rating" } } },
    ]);

    if (result.length > 0) {
      return result[0].averageRating;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error calculating average rating:", error);
    throw error;
  }
};

export default getAverageRatingForProfessional;
