const fs = require('fs');
let results = new Map();
fs.readdirSync("../pastshows").forEach(function (folder) {
    let stat = fs.statSync(`../pastshows/${folder}`);
    if (stat && stat.isDirectory())
        results.set(
            `${folder}`,
            fs.readFileSync(`../pastshows/${folder}/text.txt`, "utf-8").replace(/\n/g, "<br/>")
        );
});
fs.writeFileSync("result.json", JSON.stringify(Array.from(results.entries())));
