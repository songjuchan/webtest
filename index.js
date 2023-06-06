const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/sound/:name', (req, res) => {
  const {name}=req.params
  
  if(name=="dog") {
     res.json({'sound':'멍멍'})
    } else if (name=="cat") {
        res.json({'sound':'야옹'})
    } else  {
        res.json({'sound':'야옹'})
  }
})
    


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

