import { Request, Response } from 'express';
import Service from '../models/service';

export const createService = async (req: Request, res: Response) => {
  try {
    const { name, categoryId, description } = req.body;
    const service = new Service({ name, categoryId, description });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Error creating service' });
  }
};

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;
    const service = await Service.findById(serviceId);
    if (!service) {
      res.status(404).json({ error: 'Service not found' });
    } else {
      res.status(200).json(service);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateServiceById = async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;
    const { name, categoryId, description } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { name, categoryId, description },
      { new: true }
    );
    if (!updatedService) {
      res.status(404).json({ error: 'Service not found' });
    } else {
      res.status(200).json(updatedService);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteServiceById = async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;
    const deletedService = await Service.findByIdAndDelete(serviceId);
    if (!deletedService) {
      res.status(404).json({ error: 'Service not found' });
    } else {
      res.status(200).json({ message: 'Service deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  createService,
  getAllServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
};