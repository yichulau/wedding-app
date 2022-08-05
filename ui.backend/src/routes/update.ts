import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Form } from '../models/form';

const router = express.Router();

router.put('/api/forms/:id', 
[
    body('fullName').not().isEmpty().withMessage('update full name'),
    body('age').not().isEmpty().withMessage('update the age required')
]
,
async (req: Request, res: Response) =>{
    const form = await Form.findById(req.params.id);

    if(!form){
        return "Not found Error";
    }

    form.set({
        fullName: req.body.fullName,
        age: req.body.age
    })
    await form.save();

    res.status(201).send(form)
})

export { router as updateForm };