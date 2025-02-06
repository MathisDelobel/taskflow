import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class User extends Model {}

User.init(
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "user",
		},
	},
	{
		sequelize,
		modelName: "User",
		tableName: "user",
	},
);

export default User;
