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
    console.log('fire')
}

http.listen(5000, () => {
  console.log('listening on *:3000');

  fs.watchFile(STATE_FILE, {interval:300}, ()=>{
      fire();
  })
});
