import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class List extends Model {}

List.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		order_index: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		due_date: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		board_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "List",
		tableName: "list",
	},
);

export default List;
