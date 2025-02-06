import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

export async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

export function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

export function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}