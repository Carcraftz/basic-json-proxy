const express = require('express')
const app = express()
const port = 3000
const fetch = require("node-fetch")
app.get('/:website', (req, res) => {
  let website = req.params.website
  fetch(website).then(res=>res.json()).then(json=>{res.json(json)}).catch(e=>{res.status("400").send(e)})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
