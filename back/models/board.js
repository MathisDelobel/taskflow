import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class Board extends Model {}

Board.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Board",
		tableName: "board",
	},
);

export default Board;
