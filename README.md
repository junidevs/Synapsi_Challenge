#Simple App with Socket.io and AES


## Installation
<hr/>

1. Create `synapsi` folder on your computer.

2. From inside created folder, pull the repository from github:
```console
git clone https://github.com/junidevs/Synapsi_Challenge.git .
```

3. After download the repozitory you must install /node_modules on client and server side as well via :
```console
npm install
```


4. Navigate to the `env.local` file. there There you must create new project in Firebase console and just paste your data to this ENV file
```bash
```

## Server Side
<hr/>

Development servers is runnig on port 5000 <br/>
What you can see in server.js file 


```bash
const io = require('socket.io')(5000)
```

