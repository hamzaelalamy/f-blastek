import Professional from "../models/professional";

const checkProfesionalEmail = async (email: string) => {
  try {
    const result = await Professional.findOne({ email });
    if (result) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
};

export default checkProfesionalEmail;
