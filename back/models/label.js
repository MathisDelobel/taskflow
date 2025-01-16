import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class Label extends Model {}

Label.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "Label",
		tableName: "label",
	},
);

export default Label;
