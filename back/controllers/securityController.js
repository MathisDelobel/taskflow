import User from "../models/user.js";
import * as securityService from "../utils/security.js";
import Joi from "joi";
import sanitizeHtml from "sanitize-html";

export const securityController = {
	login: async (req, res) => {
		const schema = Joi.object({
			username: Joi.string().required(),
			email: Joi.string().email(),
			password: Joi.string().required(),
		});

		const { error } = schema.validate(req.body);
		if (error) {
			return res.status(400).json(error.details[0].message);
		}

		const { username, password } = req.body;

		const user = await User.findOne({ where: { username } });

		if (
			!user ||
			!(await securityService.comparePassword(password, user.password))
		) {
			return res.status(401).json({ message: "Identifiants incorrects" });
		}

		const token = securityService.generateToken({ id: user.id });

		return res.status(200).json({ message: "Connexion réussie", token });
	},

	signup: async (req, res) => {
		const schema = Joi.object({
			username: Joi.string().required(),
			email: Joi.string().email(),
			password: Joi.string().required(),
			confirmPassword: Joi.string().required().valid(Joi.ref("password")),
		});

		const { error } = schema.validate(req.body);
		if (error) {
			return res.status(400).json(error.details[0].message);
		}

		const { username, password, confirmPassword } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({message:"Les mots de passe ne correspondent pas."});
		}
		const sanitizedUsername = sanitizeHtml(username);

		const existingUser = await User.findOne({ where: { username:sanitizedUsername } });

		if (existingUser) {
			return res.status(409).json({message: "Ce nom d'utilisateur est déja pris"});
		}
		const user = await User.create({
			username:sanitizedUsername,
			password: await securityService.hashPassword(password),
		});
		const token = securityService.generateToken({ id: user.id });
		res.status(201).json({ isAuthenticated:true, token });
	},

	getCurrentUser: async (req, res) => {
		const token = req.headers.authorization?.split(" ")[1];

		if (!token) {
			return res.status(200).json({ isAuthenticated: false, user: null });
		}

		const decoded = securityService.verifyToken(token);
		if (!decoded) {
			return res.status(200).json({ isAuthenticated: false, user: null });
		}

		const user = await User.findByPk(decoded.id, {
			attributes: { exclude: "password" },
			include: ["boards"]
		});
		res.json({isAuthenticated: true, user });
	},
};
