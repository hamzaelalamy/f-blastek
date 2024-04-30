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

export const getAllInterventions = async (req:Request,res:Response)=>{
try{
const interventions = await Intervention.find();
res.status(200).json(interventions);
} catch (error) {
  res.status(500).json({ error: "Internal server error" });
}
}

export const updateInterventionById = async (req:Request,res:Response)=>{

  try{
const interventionId = req.params.id;
const updatedIntervention = await Intervention.findByIdAndUpdate(interventionId,req.body);
if (!updatedIntervention) {
  res.status(404).json({ error: "Intervention not found" });
}
res.status(200).json(updatedIntervention);

  }catch(error){

    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const deleteInterventiontById = async (req:Request,res:Response)=>{

  try{
    const interventionId = req.params.id;
    const deletedIntervention = await Intervention.findByIdAndDelete(interventionId);
    if (!deletedIntervention) {
      res.status(404).json({ error: "Intervention not found" });
    }
    res.status(200).json({Message:"Intervention deleted successfully"});
    
      }catch(error){
    
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
}