import { DataTypes, Model } from "sequelize";
import sequelize from "./bdd/sequelize.js";

class Comment extends Model {}

Comment.init(
	{
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
		},
		card_id: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		modelName: "Comment",
		tableName: "comment",
	},
);

export default Comment;
