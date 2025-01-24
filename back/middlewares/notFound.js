export default function notFoundMiddleware(_, res) {
    res.status(404).json({ status: 404, message: "Not found" });
}
