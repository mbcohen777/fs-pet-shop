import fs from "fs/promises";

export const readPetsFile = () => 
fs.readFile("pets.json", "utf8").then((data) => JSON.parse(data));