//Read data.txt and write data in user.txt using Async-method

import fs from 'fs'

fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)

fs.writeFile('user.txt',data,(err)=>{
    if(err) throw err
    console.log("Data written successfully")
   })
})