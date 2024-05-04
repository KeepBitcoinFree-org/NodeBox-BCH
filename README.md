# NodeBox-BCH

![NodeBox](https://keepbitcoinfree.org/wp-content/uploads/2019/11/NodeBox-logo.png)

NodeBox is a terminal style app utilizing Node.js, Socket.io & [@psf/bchjs](https://www.npmjs.com/package/@psf/bch-js) npm modules. Enter "help" to view all available commands. All data entered is private to each socket, or browser session.

## Available online at:
- https://nodebox.688.org
- http://nodeboxwcvppedfntioivqeiyzfjtnw6cqw5qfvmq5d7wulz43ffvbid.onion

### To run NodeBox locally, run the following commands (must have git & Node.js installed):

git clone https://github.com/KeepBitcoinFree-org/NodeBox-BCH.git

cd NodeBox-BCH

npm install

node index

The port can be changed by including a .env file with PORT= or by editing the index.js file and changing the default port.

Included in package.json file are the dependencies to be installed with npm install:

  "dependencies": {
    "@psf/bch-js": "latest",
    "express": "latest",
    "socket.io": "latest" 
  }
