import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { Form } from "../models/form";

const router = express.Router();

router.get('/api/forms', async (req: Request, res: Response)=>{
    const form = await Form.find({});

    try {
        res.send(form);
    } catch (err){
        res.status(500).send(err);
    }
 
})


export { router as showForm}