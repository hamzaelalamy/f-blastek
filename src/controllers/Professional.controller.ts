import { Request, Response } from "express";
import Professional from "../models/professional";

export const createProfessional = async (req: Request, res: Response) => {
    try{
        const professional = new Professional(req.body) ;
        await professional.save();
        res.status(201).json(professional);

    } catch(error) {
        console.error(error);
        res.status(400).json({ error: 'Error creating professional' });
    }
}

export const getAllProfessionals = async (req: Request, res: Response) => {
    try {
        const professionals = await Professional.find();
        if ( !professionals || professionals.length) {
             res.status(404).json({message: 'No professionals found'});
        }
        res.status(200).json(professionals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getProfessionalById = async (req: Request, res: Response) => {
    try {
        const professionalId = req.params.id;
        const professional = await Professional.findById(professionalId);
        if (!professional) {
            res.status(404).json({ error: 'Professional not found' });
        }
        res.status(200).json(professional);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateProfessionalById = async (req: Request, res: Response) => {
    try {
        const professionalId = req.params.id;
        const updatedProfessional = await Professional.findByIdAndUpdate(professionalId, req.body, { new: true });
        if (!updatedProfessional) {
            res.status(404).json({ error: 'Professional not found' });
        }
        res.status(200).json(updatedProfessional);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteProfessionalById = async (req: Request, res: Response) => {
    try {
        const professionalId = req.params.id;
        const deletedProfessional = await Professional.findByIdAndDelete(professionalId);
        if (!deletedProfessional) {
            res.status(404).json({ error: 'Professional not found' });
        }
        res.status(200).json({ message: 'Professional deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default {
    createProfessional,
    getAllProfessionals,
    getProfessionalById,
    updateProfessionalById,
    deleteProfessionalById
}