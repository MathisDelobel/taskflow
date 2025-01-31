import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class Card extends Model {}

Card.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		due_date: {
			type: DataTypes.DATE,
		},
		order_index: {
			type: DataTypes.INTEGER,
		},
		list_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Card",
		tableName: "card",
	},
);

export default Card;
