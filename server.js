const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
app.get(/(.*)/, (req, res) => {
  let website = req.path.substring(1, req.path.length);
  console.log(website);
  fetch(website)
    .then((res) => res.json())
    .then((json) => {
      res.json(json);
    })
    .catch((e) => {
      res.status("400").send(e);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
