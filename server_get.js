import fs from "fs";
let results = new Map();
fs.readdirSync("./").forEach(function (folder) {
  let stat = fs.statSync(folder);
  if (stat && stat.isDirectory())
    results.set(
      `${folder}`,
      fs.readFileSync(`${folder}/text.txt`, "utf-8").replace(/\n/g, "<br/>")
    );
});
fs.writeFileSync("result.json", JSON.stringify(Array.from(results.entries())));
