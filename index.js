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



  socket.emit('chat message', '███▄▄▄▄____▄██████▄__████████▄_____▄████████_▀█████████▄___▄██████▄__▀████____▐████▀');
  socket.emit('chat message', '███▀▀▀██▄_███____███_███___▀███___███____███___███____███_███____███___███▌___████▀_');
  socket.emit('chat message', '███___███_███____███_███____███___███____█▀____███____███_███____███____███__▐███___');
  socket.emit('chat message', '███___███_███____███_███____███__▄███▄▄▄______▄███▄▄▄██▀__███____███____▀███▄███▀___');
  socket.emit('chat message', '███___███_███____███_███____███_▀▀███▀▀▀_____▀▀███▀▀▀██▄__███____███____████▀██▄____');
  socket.emit('chat message', '███___███_███____███_███____███___███____█▄____███____██▄_███____███___▐███__▀███___');
  socket.emit('chat message', '███___███_███____███_███___▄███___███____███___███____███_███____███__▄███_____███▄_');
  socket.emit('chat message', '_▀█___█▀___▀██████▀__████████▀____██████████_▄█████████▀___▀██████▀__████_______███▄');
  socket.emit('chat message', '_________░_____░_░_____░_______░__░_░__________░_░___░____░__');
  socket.emit('chat message', '_____________________░___________________░___________________');
  socket.emit('chat message', '▄_•▄▄▄▄_▄▄▄_.▄▄▄·____▄▄▄▄·▪▄▄▄▄▄▄▄·_____▪__▐_▄_____·▄▄▄▄▄_▄▄▄_▄▄▄_.__________▄▄▄__▄▄_•_');
  socket.emit('chat message', '█▌▄▌▀▄.▀▀▄.▀▐█_▄█____▐█_▀██•██_▐█_▌▪____██•█▌▐█____▐▄▄▀▄_█▀▄.▀▀▄.▀·_____▪____▀▄_█▐█_▀_▪');
	socket.emit('chat message', '▐▀▀▄▐▀▀▪▐▀▀▪▄██▀·____▐█▀▀█▐█▐█.██_▄▄▄█▀▄▐█▐█▐▐▌____██▪▐▀▀▄▐▀▀▪▐▀▀▪▄______▄█▀▄▐▀▀▄▄█_▀█▄');
  socket.emit('chat message', '▐█.█▐█▄▄▐█▄▄▐█▪·•____██▄▪▐▐█▐█▌▐███▐█▌.▐▐███▐█▌____██▌▐█•█▐█▄▄▐█▄▄▌_____▐█▌.▐▐█•█▐█▄▪▐█');
  socket.emit('chat message', '·▀__▀▀▀▀_▀▀▀.▀_______·▀▀▀▀▀▀▀▀▀·▀▀▀_▀█▄▀▀▀▀▀_█▪____▀▀▀.▀__▀▀▀▀_▀▀▀___▀___▀█▄▀.▀__·▀▀▀▀_');
  socket.emit('chat message', '_______________________________________________________________________________________');



  socket.emit('update', 'Hello! This is a Node.js app utilzing socket.io & the BITBOX npm module. Enter a BCH address in any format to display all information about the address. All information entered into the cnosole is only shared within your socket and so is private to your user.');

	// fucntion for submitted form
  socket.on('chat message', function(msg){
  // message (msg) has been submitted, take actions
    
  // trim the message string to remove any leading or late 
  msg = msg.trim();

  //socket.emit('chat message', '₿');

  // HELP module
  try{
    if (msg == 'help'){
      socket.emit('chat message', 'Type a BCH address to get info for that address. If an unconfirmed balance is detected for that address, the system will track it until it is confirmed. Type "sign, PRIVATEKEYWIF, MESSAGE" to sign a message with a private key. ');
      return;
    }
  }catch(error){
    console.log(error);
  }


  // SIGN module: if there are commas present in the msg & the first word is 'sign' then try to sign a message with PrivateKeyWIF
  try {
    msgArray = msg.split(',');
    console.log('msgArray Length is: ' + msgArray.length);
    if (msgArray.length > 1) {
      //trim all values
      msgArray[0] = msgArray[0].trim();
      msgArray[1] = msgArray[1].trim();
      msgArray[2] = msgArray[2].trim();
      console.log(msgArray);
      if (msgArray[0] == 'sign'){
        let signedMessage = bitbox.BitcoinCash.signMessageWithPrivKey(
        msgArray[1],
        msgArray[2]);
        console.log(signedMessage);
        socket.emit('chat message', 'PrivatekeyWIF: ' + msgArray[1].substring(0, 47) + '*****');
        socket.emit('chat message', 'Message: ' + msgArray[2]);
        socket.emit('chat message', 'Signed Message: ' + signedMessage);
        socket.emit('chat message', '₿');
      }

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

			// set interval to run clearFunc every 12 hours in milliseconds
			let details = await bitbox.Address.details(msg);
			socket.emit('chat message', 'Unconfirmed Balance: ' + details.unconfirmedBalance + ' BCH');

      // check if balance is 0
			if (details.unconfirmedBalance == 0){
				socket.emit('update', 'Unconfirmed Balance for ' + msg + ' has been confirmed!');
				// window.alert('Unconfirmed Balance has been confirmed!');
				return;
			}

		}

    //separator for each address
    socket.emit('chat message', '₿');
    
  } catch(error) {
  // catch error for details array and print only to console if it fails
   console.error(error)
  }
})()

	try {

		
	} catch(error){
		console.log(error);
	}

    
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
