import mongoose from "mongoose";
import express, { Request, Response} from 'express';
import { body } from 'express-validator';
import axios from "axios";
const { randomBytes } = require('crypto');
import { Form } from "../models/form";
import { agent } from "supertest";

const router = express.Router();
// router.get('/forms',(req: Request, res: Response)=>{
//     res.send(post);
// })

router.post('/api/forms', 
[
    body('fullName').not().isEmpty().withMessage('fullName is required'),
    body('age').not().isEmpty().isInt().withMessage('age is required'),
] ,
async (req: Request, res: Response ) =>{
    const { fullName, age } = req.body;

    const form = Form.build({
        fullName: fullName,
        age: age
    });
    await form.save();
    
    res.status(201).send(form);
})

export { router as newForm }