//Read data.txt and write data in user.txt using sync-method

import fs from 'fs'

let data=fs.readFileSync('data.txt','utf-8')
console.log(data)
fs.writeFileSync('user.txt',data)
console.log("Data written successfully")