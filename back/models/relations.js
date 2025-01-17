import User from "./user.js";
import Board from "./board.js";
import List from "./list.js";
import Card from "./card.js";
import Comment from "./comment.js";
import Label from "./label.js";
import Attachment from "./attachment.js";

// Un utilisateur peut avoir plusieurs boards
User.hasMany(Board, { foreignKey: "user_id", as: "boards" });
Board.belongsTo(User, { foreignKey: "user_id", as: "owner" });

// Un board peut avoir plusieurs listes
Board.hasMany(List, { foreignKey: "board_id", as: "lists" });
List.belongsTo(Board, { foreignKey: "board_id", as: "board" });

//Une liste peut avoir plusieurs cartes
List.hasMany(Card, { foreignKey: "list_id", as: "cards" });
Card.belongsTo(List, { foreignKey: "list_id", as: "list" });

//Une carte peut avoir plusieurs commentaires
Card.hasMany(Comment, { foreignKey: "card_id", as: "comments" });
Comment.belongsTo(Card, { foreignKey: "card_id", as: "card" });

// Une carte peut être assignée à plusieurs utilisateurs, et un utilisateur peut être assigné à plusieurs cartes
Card.belongsToMany(User, {
	through: "UserCards",
	foreignKey: "card_id",
	otherKey: "user_id",
	as: "assignedUsers",
});
User.belongsToMany(Card, {
	through: "UserCards",
	foreignKey: "user_id",
	otherKey: "card_id",
	as: "assignedCards",
});

// Un commentaire appartient à un utilisateur
Comment.belongsTo(User, { foreignKey: "user_id", as: "author" });
User.hasMany(Comment, { foreignKey: "user_id", as: "comments" });

// Une carte peut avoir plusieurs labels, et un label peut être attaché à plusieurs cartes (relation many-to-many)
Card.belongsToMany(Label, {
	through: "CardLabels",
	foreignKey: "card_id",
	otherKey: "label_id",
	as: "labels",
});
Label.belongsToMany(Card, {
	through: "CardLabels",
	foreignKey: "label_id",
	otherKey: "card_id",
	as: "cards",
});

// Un label appartient à un board
Label.belongsTo(Board, { foreignKey: "board_id", as: "board" });
Board.hasMany(Label, { foreignKey: "board_id", as: "labels" });

//Un attachement appartient à une card
Attachment.belongsTo(Card, {
	foreignKey: "card_id",
	as: "card",
});

Card.hasMany(Attachment, {
	foreignKey: "card_id",
	as: "attachments",
});

//Un attachement est uploadé par un utilisateur
Attachment.belongsTo(User, { foreignKey: "user_id", as: "user" });
User.hasMany(Attachment, { foreignKey: "user_id", as: "attachments" });

export { User, Board, List, Card, Comment, Label, Attachment };
