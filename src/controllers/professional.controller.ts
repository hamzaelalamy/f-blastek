import { Request, Response } from "express";
import Professional from "../models/professional";
import checkProfesionalEmail from "../services/ProfessionalEmailCheck";

export const createProfessional = async (req: Request, res: Response) => {
  try {
    const professional = new Professional(req.body);
    await professional.save();
    res.status(201).json(professional);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error creating professional" });
  }
};

export const getAllProfessionals = async (req: Request, res: Response) => {
  try {
    const professionals = await Professional.aggregate([
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "professionalId",
          as: "reviews",
        },
      },
    ]);

    professionals.forEach((pro) => {});

    if (!professionals || professionals.length === 0) {
      res.status(404).json({ message: "No professionals found" });
    }
    res.status(200).json(professionals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProfessionalById = async (req: Request, res: Response) => {
  try {
    const professionalId = req.params.id;
    const professional = await Professional.findById(professionalId);
    if (!professional) {
      res.status(404).json({ error: "Professional not found" });
    }
    res.status(200).json(professional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProfessionalById = async (req: Request, res: Response) => {
  try {
    const professionalId = req.params.id;
    const updatedProfessional = await Professional.findByIdAndUpdate(
      professionalId,
      req.body,
      { new: true }
    );
    if (!updatedProfessional) {
      res.status(404).json({ error: "Professional not found" });
    }
    res.status(200).json(updatedProfessional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProfessionalById = async (req: Request, res: Response) => {
  try {
    const professionalId = req.params.id;
    const deletedProfessional = await Professional.findByIdAndDelete(
      professionalId
    );
    if (!deletedProfessional) {
      res.status(404).json({ error: "Professional not found" });
    }
    res.status(200).json({ message: "Professional deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const checkProfessionalEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const isEmailAvailable = await checkProfesionalEmail(email);
    res.status(200).json({ isEmailAvailable });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProfessionalByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const professional = await Professional.findOne({
      email: email,
    });
    if (!professional) {
      return res.status(404).json({ error: "Professional not found" });
    }
    return res.status(200).json(professional);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  createProfessional,
  getAllProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
};
