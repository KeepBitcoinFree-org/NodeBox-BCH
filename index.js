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

  socket.emit('update', ' ');
  socket.emit('update', 'Wake up, Neo....');

  //maybe pause here for a minute, then continue?
  socket.emit('update', 'NodeBox is a Node.js app demonstrating functionality of the Socket.io & BITBOX-sdk npm modules. Enter "help" to view all available commands. All data entered is private to your socket, or browser session.');

	// fucntion for submitted form
  socket.on('chat message', function(msg){
  // message (msg) has been submitted, take actions
    
  // trim the message string to remove any leading or late 
  msg = msg.trim();
  msglow = msg.toLowerCase();

  socket.emit('chat message', '~ ₿ ' + msg);
  //socket.emit('chat message', '₿');

  // if they type donate, we handle on client side so return here
  if (msglow == 'donate'){
    // add bitcoincash text donation address. client site returns QR code.
   socket.emit('update', 'Donate BCH to KeepBitcoinFree.org:');
   socket.emit('update', 'bitcoincash:qpphskv6mgh62teqjhumsnr6xxqqux9t7cfw9n4rmr');
   return;
  }

  if (msglow == 'clear'){
    return;
  }
  

  // TRY BLOCK FOR COMMANDS WITH PARENTHESIS such as toSatoshi(5)
  try{

    var regExp = /\(([^)]+)\)/;
    var msgInsideParen = regExp.exec(msglow);
    //msgInsideParen[1] gives you what is inside the parenthesis

    msgSatArray = msglow.split('(');

  if( msgSatArray.length > 1) {
    //toSatoshi()
    if (msgSatArray[0] == 'tosatoshi') {
      // convert user entered $BCH to satoshis
      let toSatoshi = bitbox.BitcoinCash.toSatoshi(msgInsideParen[1]);
      // 9 = 900000000
      socket.emit('update', msgInsideParen[1] + ' BCH converted to Satoshis: ' + toSatoshi);
    }


    //toBitcoinCash()
    if (msgSatArray[0] == 'tobitcoincash') {
        //convert user entered satoshis to $BCH
        let toBitcoinCash = bitbox.BitcoinCash.toBitcoinCash(msgInsideParen[1]);
        socket.emit('update', msgInsideParen[1] + ' Satoshis converted to BCH: ' + toBitcoinCash);
    }

    //utxo(BCH_ADDRESS)
    if (msgSatArray[0] == 'utxo') {
        // get all utxos for an address
        (async () => {
        try {
          let utxo = await bitbox.Address.utxo('1M1FYu4zuVaxRPWLZG5CnP8qQrZaqu6c2L');
          console.log(utxo);
          socket.emit('update', JSON.stringify(utxo));

        } catch(error) {
          console.error(error)
         }
        })()
    }
    return;
  }

  }catch(error){
    console.log(error);
  }

  // TRY BLOCK FOR COMMANDS WITH commas , 
  // SIGN module: if there are commas present in the msg & the first word is 'sign' then try to sign a message with PrivateKeyWIF
  // TESTING: sign, KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS, Bitcoin Cash is Bitcoin
  try {
     // debug: console.log('checking if msg qualifies for the sign message module');
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

      // check if sign is called
      if (msgArray[0] == 'sign'){
        let signedMessage = bitbox.BitcoinCash.signMessageWithPrivKey(msgArray[1], msgArray[2]);
       // console.log(signedMessage);
        socket.emit('update', 'PrivatekeyWIF: ' + msgArray[1].substring(0, 47) + '*****');
        socket.emit('update', 'Message: ' + msgArray[2]);
        socket.emit('update', 'Signed Message: ' + signedMessage);
        socket.emit('update', ' ');
        return;
      }

      // check if verify is called
      if (msgArray[0] == 'verify'){

        let verifyMessage = bitbox.BitcoinCash.verifyMessage(msgArray[1], msgArray[2], msgArray[3]);
        
        if(verifyMessage == true){
          socket.emit('update', 'Message was verified as authentic by the address that signed the message & cryptographic signature provided. ');
        }else {
          socket.emit('update', 'Message was NOT verified as authentic.')
        }
      }


      // check if encodeBIP21 is called
      if (msgArray[0] == 'encodeBIP21'){
        // TODO: FINISH BIP21encoded
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

      // TODO: add any other functionality when splitting string by commas
      return;

    }
  }catch(error){
    console.log(error);
  }
// end of sign message module


  // TODO: ADD MORE MODUULES


  // HELP module
  try{
    // debug: console.log('checking if msg qualifies for help module');
    if (msglow == 'help'){
      socket.emit('update', 'Enter a BCH address in Legacy or CashAddr format to display the latest info about that address. If an unconfirmed balance is detected for that address, the system will track it until it is confirmed.');
      socket.emit('update', 'Enter "getBlockchainInfo" to return the latest info regarding the BCH Blockchain');
      socket.emit('update', 'Enter "getBlockCount" to return the latest number of blocks in the longest Blockchain');
      socket.emit('update', 'Enter "getDifficulty" to return the proof-of-work difficulty as a multiple of the minimum difficulty.');
      socket.emit('update', 'Enter "getMempoolInfo" to return the latest info about the current mempool');
      socket.emit('update', 'Enter "toSatoshi(# of BCH)" to return the amount of Satoshis for the supplied amount of BCH');
      socket.emit('update', 'Enter "toBitcoinCash(# of Satoshis)" to return the amount of BCH for supplied amount of Sats');
      socket.emit('update', 'Enter utxo(BCH_ADDRESS) to return a list of utxos for a legacy or cash address');
      socket.emit('update', 'Enter "sign, PRIVATEKEYWIF, MESSAGE" to sign a message with a private key.');
      socket.emit('example', 'sign, KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS, Bitcoin Cash is Bitcoin');
      socket.emit('update', 'Enter "verify, BCH_ADDRESS, SIGNATURE, MESSAGE" to verify a signed message.');
      socket.emit('example', 'verify, bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv, IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=, EARTH');
      socket.emit('update', 'Enter "donate" to view a donation address for KeepBitcoinFree.org');
      socket.emit('update', 'Enter "clear" to clear the screen and start fresh');
      return;
    }
  }catch(error){
    console.log(error);
  }

  // GET MEMPOOL INFO
try{
     // debug: console.log('checking if msg qualifies for getMempoolInfo module');
    if (msglow == 'getmempoolinfo'){
      
  (async () => {
  try {
    let getMempoolInfo = await bitbox.Blockchain.getMempoolInfo();
    console.log(getMempoolInfo);
   // print entire array at once: socket.emit('array', JSON.stringify(getMempoolInfo));
    socket.emit('update', 'Size: ' + getMempoolInfo.size);
    socket.emit('update', 'Bytes: ' + getMempoolInfo.bytes);
    socket.emit('update', 'Usage: ' + getMempoolInfo.usage);
    socket.emit('update', 'Max Mempool: ' + getMempoolInfo.maxmempool);
    socket.emit('update', 'Mempool Min Fee: ' + getMempoolInfo.mempoolminfee + ' BCH');
    socket.emit('update', 'Min Relay Tx Fee ' + getMempoolInfo.minrelaytxfee + ' BCH');

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
    // debug:  console.log('checking if msg qualifies for getBlockCount module');
    if (msglow == 'getblockcount'){
      
    (async () => {
  try {
    let getBlockCount = await bitbox.Blockchain.getBlockCount();
    console.log(getBlockCount);
    socket.emit('update', 'Block Count: ' + getBlockCount);
  } catch(error) {
   console.error(error)
  }
})()
      return;
    }
  }catch(error){
    console.log(error);
  }


  // GET DIFFICULTY module
  try{
     // debug: console.log('checking if msg qualifies for getBlockCount module');
    if (msglow == 'getdifficulty'){
      
(async () => {
  try {
    let getDifficulty = await bitbox.Blockchain.getDifficulty();
    // debug: console.log(getDifficulty);
    socket.emit('update', 'Difficulty: ' + getDifficulty);
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
      // debug: console.log('checking if msg qualifies for getBlockchainInfo module');
    if (msglow == 'getblockchaininfo'){
      
    (async () => {
    try {
    let getBlockchainInfo = await bitbox.Blockchain.getBlockchainInfo();
    //console.log(getBlockchainInfo);
    //socket.emit('update', 'BlockChain Info for BCH:');
    socket.emit('update', 'Chain: ' + getBlockchainInfo.chain);
    socket.emit('update', 'Blocks: ' + getBlockchainInfo.blocks);
    socket.emit('update', 'Headers: ' + getBlockchainInfo.headers);
    socket.emit('update', 'Best Block Hash: ' + getBlockchainInfo.bestblockhash);
    socket.emit('update', 'Difficulty: ' + getBlockchainInfo.difficulty);
    socket.emit('update', 'Mediantime: ' + getBlockchainInfo.mediantime);
    socket.emit('update', 'Verification Progress: ' + getBlockchainInfo.verificationprogress);
    socket.emit('update', 'Chainwork: ' + getBlockchainInfo.chainwork);
    socket.emit('update', 'Pruned: ' + getBlockchainInfo.pruned);
    socket.emit('update', 'Softfork: ' + JSON.stringify(getBlockchainInfo.softforks));
    socket.emit('update', 'BIP9_softfork: ' + JSON.stringify(getBlockCount.bip9_softforks));

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
    socket.emit('update', 'Balance: ' + details.balance + ' BCH');
    socket.emit('update', 'Balance in Sats: ' + details.balanceSat);
    socket.emit('update', 'Unconfirmed Balance: ' + details.unconfirmedBalance + ' BCH');
    socket.emit('update', 'Unconfirmed Balance in Sats: ' + details.unconfirmedBalanceSat);
    socket.emit('update', 'Total Received: ' + details.totalReceived + ' BCH');
    socket.emit('update', 'Total Sats Received: ' + details.totalReceivedSat);
	  socket.emit('update', 'Total Sats Sent: ' + details.totalSentSat);
   
	while (details.unconfirmedBalance > 0){
			socket.emit('update', 'Unconfirmed balance detected.... Tracking the balance until it is confirmed.')

      //re-check the balance every 10 seconds until balance == 0
			await new Promise(resolve => setTimeout(resolve, 10000));

			let details = await bitbox.Address.details(msg);
			socket.emit('update', 'Unconfirmed Balance: ' + details.unconfirmedBalance + ' BCH');

      // check if balance is 0
			if (details.unconfirmedBalance == 0){
				socket.emit('chat message', 'Unconfirmed Balance for ' + msg + ' has been confirmed!');
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

  // debug: console.log('********* User entered: ' + msg + ' :deretne resU *********');
  
  //CONVERT BCH ADDRESS: detects address type & converts to the other, prints both.
  try{
    	if ( bitbox.Address.isLegacyAddress(msg) == true) {

    		//print original address
    		socket.emit('update', 'Legacy: ' + msg);

    		// mainnet w/ prefix
  			cashAddr = bitbox.Address.toCashAddress(msg);
        network = bitbox.Address.detectAddressNetwork(msg);
  			// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
  			socket.emit('update', 'CashAddr: ' + cashAddr);
  			socket.emit('update', 'Network: ' + network);
  			return;
    	}
    	
    	 if (bitbox.Address.isCashAddress(msg) == true) {

    	  	// print original address
    	   socket.emit('update', 'CashAddress: ' + msg);

    		// mainnet w/ prefix
  			legacy = bitbox.Address.toLegacyAddress(msg);
        network = bitbox.Address.detectAddressNetwork(msg);
  			// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN
  			socket.emit('update', 'Legacy: ' + legacy);
  			socket.emit('update', 'Network: ' + network);
  			return;
    	}
	}catch(error) {
			console.log(error);
			socket.emit('update', error.message);
			return;
    	}

  });
});

// Listen on port set in ENV file, otherwise use default port 80
http.listen(port, function(){
  console.log('listening on *:' + port);
});
