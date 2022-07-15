import express from "express";
// import { readFile } from "fs/promises";
import { readPetsFile } from "./shared.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/pets", async (req, res, next) => {
    const pets = await readPetsFile().catch(next);
       res.send(pets); 
    });
    
app.get("/pets/:index", (req, res, next) => {
    const index = req.params.index;
    readPetsFile()
    .then((pets) => {
        if (pets[index]) {
            res.send(pets[index]);
            } else {
                res.send (404);
                res.send (`Invalid index given: ${index}`);
        }
})
.catch(next);
});

app.post("/pets", (req, res, next) => {
    const body = req.body;
    readPetsFile()
    .then((str) => {
        const pets = JSON.parse(str);
        pets.push(body);
        res.send(pets);
})
.catch(next);
});

app.use((err, req, res, next) => {
    if (err) {
        res.status(500);
    }
});

app.listen(port, () => {
    console.log("Server running at", port)
})
