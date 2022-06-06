const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.json({
        msg:"Hello Buddy"
    })
})

app.listen(port, () => {
    console.log("server is started on port", port);
})