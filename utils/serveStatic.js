import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export const serveStatic = async (baseDir, req, res) => {
    try {
        const ext = path.extname(req.url)
        const contentType = await getContentType(ext)
        const publicPath = path.join(baseDir, 'public')
        const filePath = path.join(publicPath, req.url === '/' ? 'index.html' : req.url)
        
        // Pass utf8 only for text files, otherwise binary files will be corrupted
        const isText = ["text/html", "text/css", "text/javascript", "application/json", "image/svg+xml"].includes(contentType)
        const content = isText ? await fs.readFile(filePath, 'utf8') : await fs.readFile(filePath)
        
        sendResponse(res, 200, contentType, content)
    } catch (err) {
        sendResponse(res, 404, "text/plain", "Not Found")
    }
}