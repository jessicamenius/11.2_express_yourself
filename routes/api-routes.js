const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// endpoint /api
router.get("/api", (req, res) => {
  res.json({ msg: "success!" });
});

// endpoint /api/proof
router.get("/api/proof", (req, res) => {
  res.json({ msg: "endpoints are super important!" });
});

// endpoint /api/count
router.get("/api/count", (req, res) => {
  // router.get("/api/count", async (req, res) => {
  //   let countData = await readFileAsync("data.json");
  //   countData = JSON.parse(countData);
  //   countData.count++;
  //   await writeFileAsync("data.json", JSON.stringify(countData), null, 2);
  //   res.send(countData);

  //   group solution code

  let counter = JSON.parse(
    fs.readFileSync("data.json", "utf8", (err) => console.log(err))
  );
  fs.writeFile(
    "data.json",
    JSON.stringify({ count: counter.count + 1 }),
    (err, data) => {
      if (err) throw err;
      res.json({ count: counter.count });
    }
  );

  //   Thomas solution code

  //   fs.readFile("data.json", "utf8", (err, data) => {
  //     if (err) throw err;
  //     const currentCount = JSON.parse(data);
  //     currentCount.count++;
  //     fs.writefile("data.json", JSON.stringify(currentCount, null, 2), (err) => {
  //       if (err) throw err;
  //       res.send(currentCount);
  //     });
  //   });
});

module.exports = router;
