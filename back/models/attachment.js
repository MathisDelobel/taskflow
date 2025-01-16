import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class Attachment extends Model {}

Attachment.init(
	{
		file_url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		card_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Attachment",
		tableName: "attachment",
	},
);

export default Attachment;
