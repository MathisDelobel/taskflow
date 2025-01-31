import express from "express";
import { router } from "./routers/router.js";
import cors from "cors";
// import expressSanitizer from 'express-sanitizer';

const PORT = process.env.PORT || 3001;

const app = express();

// mw qui permet de décoder les données au format json dans le corps de la requête
app.use(express.json());
// middleware cors
// par défaut les appels api sont bloqué depuis nimporte quel autre domaine différent de celui du serveur
app.use(cors());
// sanitizer
// app.use(expressSanitizer());

app.use(router);

app.listen(PORT, () => {
	console.log(`TrelloApp REST API is listening on http://localhost:${PORT}`);
});
