import Professional from "../models/professional";

const checkProfesionalEmail = async (email: string) => {
  try {
    const result = await Professional.findOne({ email });
    return result ? true : false;
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
};

export default checkProfesionalEmail;
