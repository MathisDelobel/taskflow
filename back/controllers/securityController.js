import User from "../models/user.js";
import * as securityService from "../utils/security.js";
import Joi from "joi";

export const securityController = {
    login: async (req, res) => {
        const schema = Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email(),
            password: Joi.string().required()
        })

        const {error} = schema.validate(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);
        }

        const {username, password} = req.body;

        const user = await User.findOne({ where: { username } });


        if (!user || !(await securityService.comparePassword(password, user.password))){
            return res.status(401).json({error: 'Identifiants incorrects'});
        }

        const token = securityService.generateToken({id: user.id});

        return res.status(200).json({message: 'Connexion réussie', token});
    },

    signup: async (req, res) => {
       const schema = Joi.object({
           username: Joi.string().required(),
           email: Joi.string().email(),
           password: Joi.string().required()
       })

        const {error} = schema.validate(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);
        }

        const {username, password} = req.body;

        const existingUser = await User.findOne({where:{username}}) ;
        if (existingUser) {
            return res.status(409).json("Ce nom d\'utilisateur est deja pris");
        }
        const user = await User.create({
            username,
            password: await securityService.hashPassword(password)
        });
        const token = securityService.generateToken({id: user.id});
        res.status(201).json({token});

    }
}