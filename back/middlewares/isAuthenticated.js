import * as securityService from "../utils/security.js";

export default function isAuthenticated(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ status: 401, message: "Unauthorized" });
    }

    const decoded = securityService.verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ status: 401, message: "Unauthorized" });
    }

    req.userId = decoded.userId;

    next();
}
