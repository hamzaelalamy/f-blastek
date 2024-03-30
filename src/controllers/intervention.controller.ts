import Intervention from "../models/intervention";
import { Request, Response } from "express";

export const createIntervention = async (req: Request, res: Response) => {
  try {
    const { name, clientId, professionalID, status } = req.body;
    const intervention = new Intervention({ name, clientId, professionalID, status });
    await intervention.save();
    res.status(201).json(intervention);
  } catch (error) {
    res.status(500).json({ error: "Error creating intervention" });
  }
};
