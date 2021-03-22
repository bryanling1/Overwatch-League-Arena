const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
});
const fs = require('fs');
const STATE_FILE = "./state-file.json";

const fire = () =>{
    const rawData = fs.readFileSync(STATE_FILE);
    const jsonData = JSON.parse(rawData);
    io.emit("owlarena", jsonData)
}

http.listen(5000, () => {
  console.log('Listening on port:3000');
  console.log(`Listening to state file ${STATE_FILE}`);


  fs.watchFile(STATE_FILE, {interval:300}, ()=>{
      fire();
  })
});
