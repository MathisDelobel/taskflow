import User from "../user.js";
import Board from "../board.js";
import List from "../list.js";
import Card from "../card.js";
import Comment from "../comment.js";
import Label from "../label.js";
import Attachment from "../attachment.js";
import sequelize from "./sequelize.js";

try {
	await sequelize.sync({ force: true });
	console.log("Tables created");
} catch (error) {
	console.error(error);
}

await sequelize.close();
