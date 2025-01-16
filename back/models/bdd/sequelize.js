import { Sequelize } from "sequelize";
import "dotenv/config";

if (!process.env.PG_URL) {
	throw new Error("PG_URL environment variable is missing");
}

const sequelize = new Sequelize(process.env.PG_URL, {
	define: {
		underscored: true,
	},
	logging: false,
});

try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default sequelize;
