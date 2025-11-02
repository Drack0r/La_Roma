import { copyFile } from "fs/promises";

await copyFile("dist/index.html", "dist/404.html");
console.log("Fallback 404.html créé ✅");
