import express from "express";
import { readFile } from "fs/promises";

const app = express();
const port = 3000;

app.get("/pets", (req, res) => {
    readFile("pets.json", "utf-8").then ((str) => {
        const pets = JSON.parse(str);
       res.send(pets); 
    });
})

app.get("/pets/:id/:name", (req, res) => {
    console.log(req.params)
    res.send('duck');
});

app.listen(port, () => {
    console.log("Server running at", port)
})