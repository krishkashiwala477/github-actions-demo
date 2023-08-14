import fs from "fs-extra";

// Clear the dist folder if it exists
fs.emptyDirSync("dist");

// Copy files from src to dist
fs.copySync("src", "dist");

console.log("Build completed.");
