import {Request, Response, NextFunction} from "express";
import Client from "../models/client";
import Professional from "../models/professional";
import Admin from "../models/admin";


const isAdmin = async(req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const admin = await Admin.findById(user._id);
    if(!admin){
        res.status(403).send("You are not an admin");
    } else {
        next();
    }
};

const isClient = async(req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const client = await Client.findById(user._id);
    if(!client){
        res.status(403).send("You are not a client");
    } else {
        return next();
    }
};

const isProfessional = async(req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const professional = await Professional.findById(user._id);
    if(!professional){
        return res.status(403).send("You are not a professional");
    } else {
        return next();
    }
};



export default {isAdmin, isClient, isProfessional};


