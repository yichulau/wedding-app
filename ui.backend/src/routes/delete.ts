import mongoose from "mongoose";
import express ,{ Request, Response } from "express";
import { Form } from "../models/form";
import { body } from "express-validator";

const router = express.Router();

router.delete('/api/forms/:id',
async (req: Request, res: Response) =>{
    const form = await Form.findByIdAndDelete(req.params.id);

    try {
        if (!form) {
            res.status(404).send("No item found");
        }
        console.log("delete succes")
        res.status(200).send(form);

    } catch (err){
        res.status(500).send(err)
    }
})


export { router as deleteForm };