import { Request, Response } from "express";
import Client from "../models/client";

export const createClient = async (req: Request, res: Response) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error creating client" });
  }
};

export const getAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getClientById = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    const client = await Client.findById(clientId);
    if (!client) {
      res.status(404).json({ error: "Client not found" });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateClientById = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
      new: true,
    });
    if (!updatedClient) {
      res.status(404).json({ error: "Client not found" });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteClientById = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    const deletedClient = await Client.findByIdAndDelete(clientId);
    if (!deletedClient) {
      res.status(404).json({ error: "Client not found" });
    }
    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  createClient,
  getAllClients,
  getClientById,
  updateClientById,
  deleteClientById,
};