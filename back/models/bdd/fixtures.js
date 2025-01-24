import { faker } from "@faker-js/faker";
import sequelize from "./sequelize.js";
import {
	Attachment,
	Board,
	Card,
	Comment,
	Label,
	List,
	User,
} from "../relations.js";
import bcrypt from "bcrypt";

(async () => {
	try {
		await sequelize.sync({ force: true });
		console.log("Database synced");

		// Create Users
		const hashedUserPassword = await bcrypt.hash("user_p", 10);
		const hashedManagerPassword = await bcrypt.hash("manager_p", 10);
		const hashedAdminPassword = await bcrypt.hash("admin_p", 10);

		const users = [
			{
				username: "user",
				email: "user@email",
				password: hashedUserPassword,
				role: "user",
			},
			{
				username: "manager",
				email: "manager@email",
				password: hashedManagerPassword,
				role: "manager",
			},
			{
				username: "admin",
				email: "admin@email",
				password: hashedAdminPassword,
				role: "admin",
			},
		];

		await User.bulkCreate(users);
		console.log("Users table populated");

		// Create BoardsTable
		const boards = Array.from({ length: 5 }).map(() => ({
			title: faker.lorem.words(3),
			user_id: faker.number.int({ min: 1, max: users.length }), // Ensure valid userId
		}));
		await Board.bulkCreate(boards);
		console.log("BoardsTable table populated");

		// Create Lists
		const lists = Array.from({ length: 15 }).map(() => ({
			title: faker.lorem.words(2),
			order_index: faker.number.int({ min: 1, max: 15 }),
			board_id: faker.number.int({ min: 1, max: boards.length }),
		}));
		await List.bulkCreate(lists);
		console.log("Lists table populated");

		// Create Cards
		const cards = Array.from({ length: 50 }).map(() => ({
			title: faker.lorem.words(4),
			description: faker.lorem.paragraph(),
			due_date: faker.date.future(),
			order_index: faker.number.int({ min: 1, max: 50 }),
			list_id: faker.number.int({ min: 1, max: lists.length }),
		}));
		await Card.bulkCreate(cards);
		console.log("Cards table populated");

		// Create Labels
		const labels = Array.from({ length: 20 }).map(() => ({
			title: faker.lorem.word(),
			color: faker.color.rgb(),
		}));
		await Label.bulkCreate(labels);
		console.log("Labels table populated");

		// Create Comments
		const comments = Array.from({ length: 50 }).map(() => ({
			content: faker.lorem.sentence(),
			card_id: faker.number.int({ min: 1, max: cards.length }),
			user_id: faker.number.int({ min: 1, max: users.length }),
		}));
		await Comment.bulkCreate(comments);
		console.log("Comments table populated");

		// Create Attachments
		const attachments = Array.from({ length: 30 }).map(() => ({
			file_url: faker.system.filePath(),
			card_id: faker.number.int({ min: 1, max: cards.length }),
			user_id: faker.number.int({ min: 1, max: users.length }),
		}));
		await Attachment.bulkCreate(attachments);
		console.log("Attachments table populated");

		console.log("Fixtures created successfully!");
	} catch (error) {
		console.error("Error creating fixtures:", error);
	} finally {
		await sequelize.close();
	}
})();
