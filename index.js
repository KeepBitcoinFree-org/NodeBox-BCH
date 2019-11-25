var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 80;

// require syntax for BCH BITBOX
let BITBOX = require('bitbox-sdk').BITBOX;
let bitbox = new BITBOX();
//let mnemonic = bitbox.Mnemonic.generate();
//console.log('Mnemonic: ', mnemonic);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
// new user connected

  // welcome message to user on this specific socket



  socket.emit('logo', '███▄▄▄▄____▄██████▄__████████▄_____▄████████_▀█████████▄___▄██████▄__▀████____▐████▀');
  socket.emit('logo', '███▀▀▀██▄_███____███_███___▀███___███____███___███____███_███____███___███▌___████▀_');
  socket.emit('logo', '███___███_███____███_███____███___███____█▀____███____███_███____███____███__▐███___');
  socket.emit('logo', '███___███_███____███_███____███__▄███▄▄▄______▄███▄▄▄██▀__███____███____▀███▄███▀___');
  socket.emit('logo', '███___███_███____███_███____███_▀▀███▀▀▀_____▀▀███▀▀▀██▄__███____███____████▀██▄____');
  socket.emit('logo', '███___███_███____███_███____███___███____█▄____███____██▄_███____███___▐███__▀███___');
  socket.emit('logo', '███___███_███____███_███___▄███___███____███___███____███_███____███__▄███_____███▄_');
  socket.emit('logo', '_▀█___█▀___▀██████▀__████████▀____██████████_▄█████████▀___▀██████▀__████_______███▄');
  socket.emit('logo', '_________░_____░_░_____░_______░__░_░__________░_░___░____░________░_░__________░_░_');
  socket.emit('logo', '_____________________░___________________░___________░_░__________░_____░___________');
  socket.emit('logo', '▄_•▄▄▄▄_▄▄▄_.▄▄▄·__▄▄▄▄·▪▄▄▄▄▄▄▄·_____▪__▐_▄____·▄▄▄▄▄_▄▄▄_▄▄▄_.__________▄▄▄__▄▄_•_');
  socket.emit('logo', '█▌▄▌▀▄.▀▀▄.▀▐█_▄█__▐█_▀██•██_▐█_▌▪____██•█▌▐█___▐▄▄▀▄_█▀▄.▀▀▄.▀·_____▪____▀▄_█▐█_▀_▪');
	socket.emit('logo', '▐▀▀▄▐▀▀▪▐▀▀▪▄██▀·__▐█▀▀█▐█▐█.██_▄▄▄█▀▄▐█▐█▐▐▌___██▪▐▀▀▄▐▀▀▪▐▀▀▪▄______▄█▀▄▐▀▀▄▄█_▀█▄');
  socket.emit('logo', '▐█.█▐█▄▄▐█▄▄▐█▪·•__██▄▪▐▐█▐█▌▐███▐█▌.▐▐███▐█▌___██▌▐█•█▐█▄▄▐█▄▄▌_____▐█▌.▐▐█•█▐█▄▪▐█');
  socket.emit('logo', '·▀__▀▀▀▀_▀▀▀.▀_____·▀▀▀▀▀▀▀▀▀·▀▀▀_▀█▄▀▀▀▀▀_█▪___▀▀▀.▀__▀▀▀▀_▀▀▀___▀___▀█▄▀.▀__·▀▀▀▀_');
  socket.emit('logo', '____________________________________________________________________________________');



  socket.emit('update', 'Hello! This is a Node.js app utilzing socket.io & the BITBOX npm module. Enter "help" to view all available commands. All information entered into the console is only shared within your socket and is private only to your browser session with NodeBox.');

	// fucntion for submitted form
  socket.on('chat message', function(msg){
  // message (msg) has been submitted, take actions
    
  // trim the message string to remove any leading or late 
  msg = msg.trim();
  // .toLowerCase()
  // root@nodebox.io
  socket.emit('chat message', '₿ ' + msg);
  //socket.emit('chat message', '₿');

  //TODO: ignore capitalization for msgs

 // SIGN module: if there are commas present in the msg & the first word is 'sign' then try to sign a message with PrivateKeyWIF
  // TESTING: sign, KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS, Bitcoin Cash is Bitcoin
  try {
      console.log('checking if msg qualifies for the sign message module');
    msgArray = msg.split(',');
  //  console.log('msgArray Length is: ' + msgArray.length);
    if (msgArray.length > 1) {
      //trim all values
      msgArray[0] = msgArray[0].trim();
      msgArray[1] = msgArray[1].trim();
      msgArray[2] = msgArray[2].trim();
      if (msgArray.length > 3){
       msgArray[3] = msgArray[3].trim();
      }
        console.log(msgArray);
    //  console.log(msgArray[0]);
   //   console.log(msgArray[1]);
    //  console.log(msgArray[2]);

      // check if sign is called
      if (msgArray[0] == 'sign'){
       // console.log('it is SIGN, signing message');
       // console.log(msgArray[1], msgArray[2]);
        let signedMessage = bitbox.BitcoinCash.signMessageWithPrivKey(msgArray[1], msgArray[2]);
       // console.log(signedMessage);
        socket.emit('chat message', 'PrivatekeyWIF: ' + msgArray[1].substring(0, 47) + '*****');
        socket.emit('chat message', 'Message: ' + msgArray[2]);
        socket.emit('chat message', 'Signed Message: ' + signedMessage);
        socket.emit('chat message', ' ');
        return;
      }

      // check if verify is called
      if (msgArray[0] == 'verify'){

        let verifyMessage = bitbox.BitcoinCash.verifyMessage(msgArray[1], msgArray[2], msgArray[3]);
        
        if(verifyMessage == true){
          socket.emit('chat message', 'Message was verified as authentic by the address that signed the message & cryptographic signature provided. ');
        }else {
          socket.emit('chat message', 'Message was NOT verified as authentic.')
        }
      }


      // check if encodeBIP21 is called
      if (msgArray[0] == 'encodeBIP21'){

        // encodeBIP21 MODULE - to add options to BCH address such as amount, label & message
        let address = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
        let options = {
          amount: 12.5,
          label: 'coinbase donation',
          message: "and ya don't stop",
        }
        
        var BIP21encoded = bitbox.BitcoinCash.encodeBIP21(address, options)
        // bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop
        console.log(BIP21encoded);
        socket.emit('chat message', BIP21encoded);

      }


      //TODO: add functionality for toSatoshi(9) by splitting string into array by ( then again by ).
      //var words = str.split('(');
      //console.log(words);
      //var word2 = words[1];
      //var words2 = word2.split(')');
      return;

    }
  }catch(error){
    console.log(error);
  }
// end of sign message module


  msglow = msg.toLowerCase();

  // HELP module
  try{
    console.log('checking if msg qualifies for help module');
    if (msglow == 'help'){
      socket.emit('update', 'Enter a BCH address in Legacy or CashAddr format to display the latest info about that address. If an unconfirmed balance is detected for that address, the system will track it until it is confirmed.');
      socket.emit('update', 'Enter "getBlockchainInfo" to return the latest info regarding the BCH Blockchain');
      socket.emit('update', 'Enter "getBlockCount" to return the latest number of blocks in the longest Blockchain');
      socket.emit('update', 'Enter "getMempoolInfo" to return the latest info about the current mempool');
      socket.emit('update', 'Enter "sign, PRIVATEKEYWIF, MESSAGE" to sign a message with a private key.');
      socket.emit('example', 'sign, KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS, Bitcoin Cash is Bitcoin');
      socket.emit('update', 'Enter "verify, BCH_ADDRESS, SIGNATURE, MESSAGE" to verify a signed message.');
      socket.emit('example', 'verify, bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv, IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=, Bitcoin is Cash');
      socket.emit('update', 'Enter "clear" to clear the screen and start fresh');
      return;
    }
  }catch(error){
    console.log(error);
  }

  // GET MEMPOOL INFO
try{
      console.log('checking if msg qualifies for getMempoolInfo module');
    if (msglow == 'getmempoolinfo'){
      
  (async () => {
  try {
    let getMempoolInfo = await bitbox.Blockchain.getMempoolInfo();
    console.log(getMempoolInfo);
   // print entire array at once: socket.emit('array', JSON.stringify(getMempoolInfo));
    socket.emit('chat message', 'Size: ' + getMempoolInfo.size);
    socket.emit('chat message', 'Bytes: ' + getMempoolInfo.bytes);
    socket.emit('chat message', 'Usage: ' + getMempoolInfo.usage);
    socket.emit('chat message', 'Max Mempool: ' + getMempoolInfo.maxmempool);
    socket.emit('chat message', 'Mempool Min Fee: ' + getMempoolInfo.mempoolminfee + ' BCH');
    socket.emit('chat message', 'Min Relay Tx Fee ' + getMempoolInfo.minrelaytxfee + ' BCH');

  } catch(error) {
   console.error(error)
  }
})()
      return;
    }
  }catch(error){
    console.log(error);
  }

  // GET BLOCK COUNT module

try{
      console.log('checking if msg qualifies for getBlockCount module');
    if (msglow == 'getblockcount'){
      
    (async () => {
  try {
    let getBlockCount = await bitbox.Blockchain.getBlockCount();
    console.log(getBlockCount);
    socket.emit('chat message', 'Block Count: ' + getBlockCount);
  } catch(error) {
   console.error(error)
  }
})()
      return;
    }
  }catch(error){
    console.log(error);
  }

  // GET BLOCKCHAIN INFO module
  try{
      console.log('checking if msg qualifies for getBlockchainInfo module');
    if (msglow == 'getblockchaininfo'){
      
    (async () => {
    try {
      let getBlockchainInfo = await bitbox.Blockchain.getBlockchainInfo();
      //console.log(getBlockchainInfo);
    //socket.emit('update', 'BlockChain Info for BCH:');
    socket.emit('chat message', 'Chain: ' + getBlockchainInfo.chain);
    socket.emit('chat message', 'Blocks: ' + getBlockchainInfo.blocks);
    socket.emit('chat message', 'Best Block Hash: ' + getBlockchainInfo.bestblockhash);
    socket.emit('chat message', 'Difficulty: ' + getBlockchainInfo.difficulty);
    socket.emit('chat message', 'Mediantime: ' + getBlockchainInfo.mediantime);

    } catch(error) {
      console.error(error)
    }
  })()
      return;
    }
  }catch(error){
    console.log(error);
  }

    //ADDRESS DETAILS: using BITBOX to hit API and get info for BCH address.
    // async function to get all details of BCH address
    (async () => {
  try {
    //use BITBOX to get details of BCH address submitted by user
    let details = await bitbox.Address.details(msg);

    // break down details array & print to user
    socket.emit('chat message', 'Balance: ' + details.balance + ' BCH');
    socket.emit('chat message', 'Balance in Sats: ' + details.balanceSat);
    socket.emit('chat message', 'Unconfirmed Balance: ' + details.unconfirmedBalance + ' BCH');
    socket.emit('chat message', 'Unconfirmed Balance in Sats: ' + details.unconfirmedBalanceSat);
    socket.emit('chat message', 'Total Received: ' + details.totalReceived + ' BCH');
    socket.emit('chat message', 'Total Sats Received: ' + details.totalReceivedSat);
	  socket.emit('chat message', 'Total Sats Sent: ' + details.totalSentSat);
   
	while (details.unconfirmedBalance > 0){
			socket.emit('update', 'Unconfirmed balance detected.... Tracking the balance until it is confirmed.')

      //re-check the balance every 10 seconds until balance == 0
			await new Promise(resolve => setTimeout(resolve, 10000));

			let details = await bitbox.Address.details(msg);
			socket.emit('chat message', 'Unconfirmed Balance: ' + details.unconfirmedBalance + ' BCH');

      // check if balance is 0
			if (details.unconfirmedBalance == 0){
				socket.emit('update', 'Unconfirmed Balance for ' + msg + ' has been confirmed!');
				// TODO: alert user funds have confirmed (needs to be done on client side): window.alert('Unconfirmed Balance has been confirmed!');
				return;
			}

		}

    //separator for each address
    //socket.emit('chat message', '');
    
  } catch(error) {
  // catch error for details array and print only to console if it fails
   console.error(error)
  }
})()

    
    // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

    console.log('********* User entered: ' + msg + ' :deretne resU *********');
  
  //CONVERT BCH ADDRESS: detects address type & converts to the other, prints both.
  try{
    	if ( bitbox.Address.isLegacyAddress(msg) == true) {

    		//print original address
    		socket.emit('chat message', 'Legacy: ' + msg);

    		// mainnet w/ prefix
  			msg = bitbox.Address.toCashAddress(msg)
  			// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
  			socket.emit('chat message', 'CashAddr: ' + msg);
  			socket.emit('chat message', 'Network: ' + bitbox.Address.detectAddressNetwork(msg));
  			return;
    	}
    	
    	  	if (bitbox.Address.isCashAddress(msg) == true) {

    	  	// print original address
    	  	socket.emit('chat message', 'CashAddress: ' + msg);

    		// mainnet w/ prefix
  			msg = bitbox.Address.toLegacyAddress(msg)
  			// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
  			socket.emit('chat message', 'Legacy: ' + msg);
  			socket.emit('chat message', 'Network: ' + bitbox.Address.detectAddressNetwork(msg));
  			return;
    	}

	}catch(error) {

			console.log(error);
			socket.emit('chat message', error.message);
			return;
    	}

  });
});

// Listen on port set in ENV file, otherwise use default port 80
http.listen(port, function(){
  console.log('listening on *:' + port);
});
