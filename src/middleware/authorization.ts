import {Request, Response, NextFunction} from "express";
import Client from "../models/client";
import Professional from "../models/professional";
import Admin from "../models/admin";

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const admin = await Admin.findById(user._id);
    if(!admin){
        res.status(403).send("You are not an admin");
    } else {
        next();
    }
};

const isClient = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const client = await Client.findById(user._id);
    if(!client){
        res.status(403).send("You are not a client");
    } else {
        return next();
    }
};

const isProfessional = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.cookies.userToken as any;
        const professional = await Professional.findById(user._id);
        if (!professional) {
            res.status(403).send("You are not a professional");
        } else {
            next();
        }
    } catch (error) {
        // Handle any errors that occur during the authorization process
        console.error("Error in isProfessional middleware:", error);
        res.status(500).send("Internal Server Error");
    }
};



export default {isAdmin, isClient, isProfessional};


