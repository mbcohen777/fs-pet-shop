import fs from "fs/promises";
import http from "http";

const petRegExp = /^\/pets\/(.*)$/;

const server = http.createServer((req, res) => {
    const matches = req.url.match(petRegExp);
    const data = 9;
    if (req.url === "/pets" && req.method === "GET") {
        fs.readFile("pets.json", "utf-8").then((str) => {
            const data = JSON.parse(str);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
        });
    } else if (matches && req.method === "GET") {
        const id = matches[1];
        fs.readFile("pets.json", "utf-8").then((str) => {
            const data = JSON.parse(str);
            if (data[id]) {
                res.end(JSON.stringify(data[id]));
            } else {
                res.writeHead(404);
                res.end();
            }
        }); 
    } else {
      res.writehead(404);
      res.emd();
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000');
});
