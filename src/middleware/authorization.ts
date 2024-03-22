import {Request, Response, NextFunction} from "express";
import mongoose from "mongoose";
import Client from "../models/client";
import Professional from "../models/professional";
import Admin from "../models/admin";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const admin = Admin.findById(user._id);
    if(!admin){
        return res.status(403).send("You are not an admin");
    } else {
        return next();
    }
};

const isClient = (req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const client = Client.findById(user._id);
    if(!client){
        return res.status(403).send("You are not a client");
    } else {
        return next();
    }
};

const isProfessional = (req: Request, res: Response, next: NextFunction) => {
    const user = req.cookies.userToken as any;
    const professional = Professional.findById(user._id);
    if(!professional){
        return res.status(403).send("You are not a professional");
    } else {
        return next();
    }
}



export default {isAdmin, isClient, isProfessional};


