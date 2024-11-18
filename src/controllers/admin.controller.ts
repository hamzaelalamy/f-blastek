import { Request, Response } from "express";
import Admin from "../models/admin";

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const admin = new Admin({ firstName, lastName, email, password });
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: "Error creating admin" });
  }
};

export const getAllAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAdminById = async (req: Request, res: Response) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);
    if (!admin) {
      res.status(404).json({ error: "Admin not found" });
    } else {
      res.status(200).json(admin);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateAdminById = async (req: Request, res: Response) => {
  try {
    const adminId = req.params.id;
    const { firstName, lastName, email, password } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(
      adminId,
      { firstName, lastName, email, password },
      { new: true }
    );
    if (!updatedAdmin) {
      res.status(404).json({ error: "Admin not found" });
    } else {
      res.status(200).json(updatedAdmin);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteAdminById = async (req: Request, res: Response) => {
  try {
    const adminId = req.params.id;
    const deletedAdmin = await Admin.findByIdAndDelete(adminId);
    if (!deletedAdmin) {
      res.status(404).json({ error: "Admin not found" });
    } else {
      res.status(200).json({ message: "Admin deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById,
};