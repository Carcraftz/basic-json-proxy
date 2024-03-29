const express = require('express')
const app = express()
const port = 3000
const fetch = require("node-fetch")
app.get(/(.*)/, (req, res) => {
  let website = req.path.substring(1,req.path.length)
  console.log(website)
  fetch(website,{headers:{Referer:"https://www.cvs.com/immunizations/covid-19-vaccine"}}).then(res=>res.json()).then(json=>{res.json(json)}).catch(e=>{res.status("400").send(e)})
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
