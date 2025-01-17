import {
	Attachment,
	Board,
	Card,
	Comment,
	Label,
	List,
	User,
} from "../relations.js";
import sequelize from "../bdd/sequelize.js";

try {
	await sequelize.sync({ force: true });
	console.log("Tables created");
} catch (error) {
	console.error(error);
}

await sequelize.close();
