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
REACT_APP_FIREBASE_API_KEY=Api key from firebase config
REACT_APP_AUTH_DOMAIN = auth domain from firebase config 
REACT_APP_PROJECT_ID= synapsi-7120f
REACT_APP_STORAGE_BUCKET = storage bucket from firebase config
REACT_APP_MESSAGE_SENDER_ID = message sender id from firebase config 
REACT_APP_APP_ID=app id from firebase config
REACT_APP_MEASUREMENT_ID=app measurement from firebase config
REACT_APP_DATABASE_URL=db url from firebase config , but this is not required
```

## Server Side
<hr/>

Development servers is runnig on port 5000 <br/>
What you can see in server.js file 


```bash
const io = require('socket.io')(5000)
```


1. On the first step after run appliaction you should see default `login page` ,if you created account from firebase side great but if not just click on `sign up button`.
<hr>
2.After that you should see simple two buttons , and there you can decide to create you own nickname or generate random UUID and that will be you identificatior in messages

