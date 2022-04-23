var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

// require syntax for BCHjs by Permissionless Software Foundation psfoundation.cash fullstack.cash 
// FULLSTACK.CASH in the house. Big thanks to Troutner & PermissionlessSoftwareFoundation (PSF)
// const TOKENID = "6448381f9649ecacd8c30189cfbfee71a91b6b9738ea494fe33f8b8b51cbfca0"

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')

// Instantiate bch-js based on the network.
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

//let mnemonic = bitbox.Mnemonic.generate();

// formatting for numbers: if any # requires commas, this does it. thanks to Lloyd Banks
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// SERVES PAGE WHEN REQ IS RECIEVED, SENDS BACK RESPONSE
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


//TODO: clean this shit up. Now fuck off, I got work to do.

//testing waiting emit
//socket.emit('waiting', '.');

// NEW USER CONNECTED HERE
io.on('connection', function(socket){
  


  // welcome message to user on this specific socket (each browser visit is a separate socket)
  socket.emit('logo1', '███▄▄▄▄____▄██████▄__████████▄_____▄████████_▀█████████▄___▄██████▄__▀████____▐████▀');
  socket.emit('logo1', '███▀▀▀██▄_███____███_███___▀███___███____███___███____███_███____███___███▌___████▀_');
  socket.emit('logo1', '███___███_███____███_███____███___███____█▀____███____███_███____███____███__▐███___');
  socket.emit('logo1', '███___███_███____███_███____███__▄███▄▄▄______▄███▄▄▄██▀__███____███____▀███▄███▀___');
  socket.emit('logo1', '███___███_███____███_███____███_▀▀███▀▀▀_____▀▀███▀▀▀██▄__███____███____████▀██▄____');
  socket.emit('logo1', '███___███_███____███_███____███___███____█▄____███____██▄_███____███___▐███__▀███___');
  socket.emit('logo1', '███___███_███____███_███___▄███___███____███___███____███_███____███__▄███_____███▄_');
  socket.emit('logo1', '_▀█___█▀___▀██████▀__████████▀____██████████_▄█████████▀___▀██████▀__████_______███▄');
  socket.emit('logo1', '_░_░_____░_____░_░_____░______░_____________░____________░_░___░____░________░_░____');
  socket.emit('logo1', '____░__________░___________╔═╗┌─┐┬_┬┌─┐┬─┐┌─┐┌┬┐_╔╗_┬_┬______░_____________░________');
  socket.emit('logo1', '___________________________╠═╝│_││││├┤_├┬┘├┤__││_╠╩╗└┬┘_________________________░___');
  socket.emit('logo1', '___________________________╩__└─┘└┴┘└─┘┴└─└─┘─┴┘_╚═╝_┴______________________________');
  socket.emit('logo', '_______________XXXXXX_____________BCH___XXX___________________XXXXXX________________');
  socket.emit('logo', '______________XXXXXX______________XXX___BITCOINCASH____________XXXXXX_______________');
  socket.emit('logo', '______________XXXXX_______________NODEjs&&SOCKETio______________XXXXX_______________');
  socket.emit('logo', '_____________XXXXXX____________KEEPBITCOINFREE.org______________XXXXXX______________');
  socket.emit('logo', '_____________XXXXX____________XXXXXXXX_______XXXXX_______________XXXXX______________');
  socket.emit('logo', '____________XXXXX________________XXXXX_______XXXX_________________XXXXX_____________');
  socket.emit('logo', '____________XXXXX_________________XXXXX____XXXXXX_________________XXXXX_____________');
  socket.emit('logo', '____________XXXXX_________________XXXXXXXXXXXXXXXXXX______________XXXXX_____________');
  socket.emit('logo', '____________XXXXX__________________XXXXXXXXXXXXXXXXXX_____________XXXXX_____________');
  socket.emit('logo', '____________XXXXX__________________XXXXX________XXXXX_____________XXXXX_____________');
  socket.emit('logo', '____________XXXXX___________________XXXX________XXXXX_____________XXXXX_____________');
  socket.emit('logo', '____________XXXXX___________________XXXXX______XXXXXX____________XXXXXX_____________');
  socket.emit('logo', '_____________XXXXX__________________XXXXX____XXXXXXX_____________XXXXX______________');
  socket.emit('logo', '_____________XXXXX__________________XXXXXXXXXXXXXXX_____________XXXXXX______________');
  socket.emit('logo', '______________XXXXX_______________XXXXXXXXXXXXXXX_______________XXXXX_______________');
  socket.emit('logo', '______________XXXXXX______________XXXXXXXX___XX________________XXXXXX_______________');
  socket.emit('logo', '_______________XXXXXX___________________XXX__XXX______________XXXXXX________________');
  socket.emit('logo', '▄_•▄▄▄▄_▄▄▄_.▄▄▄·__▄▄▄▄·▪▄▄▄▄▄▄▄·_____▪__▐_▄____·▄▄▄▄▄_▄▄▄_▄▄▄_.__________▄▄▄__▄▄_•_');
  socket.emit('logo', '█▌▄▌▀▄.▀▀▄.▀▐█_▄█__▐█_▀██•██_▐█_▌▪____██•█▌▐█___▐▄▄▀▄_█▀▄.▀▀▄.▀·_____▪____▀▄_█▐█_▀_▪');
  socket.emit('logo', '▐▀▀▄▐▀▀▪▐▀▀▪▄██▀·__▐█▀▀█▐█▐█.██_▄▄▄█▀▄▐█▐█▐▐▌___██▪▐▀▀▄▐▀▀▪▐▀▀▪▄______▄█▀▄▐▀▀▄▄█_▀█▄');
  socket.emit('logo', '▐█.█▐█▄▄▐█▄▄▐█▪·•__██▄▪▐▐█▐█▌▐███▐█▌.▐▐███▐█▌___██▌▐█•█▐█▄▄▐█▄▄▌_____▐█▌.▐▐█•█▐█▄▪▐█');
  socket.emit('logo', '·▀__▀▀▀▀_▀▀▀.▀_____·▀▀▀▀▀▀▀▀▀·▀▀▀_▀█▄▀▀▀▀▀_█▪___▀▀▀.▀__▀▀▀▀_▀▀▀___▀___▀█▄▀.▀__·▀▀▀▀_');
  socket.emit('logo', '____________________________________________________________________________________');



//MMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIIMMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMIIIIIIIIII
//MMMMMMMIIIIIIIIIIIIIIIIIIIIMIIIIMMMMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMIIIIIIIII
//MMMMMMIIIIIIIIIIIIIIIIIIIMMMMIIIMMMMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMIIIIIIII
//MMMMMIIIIIIIIIIIIIIIIIIIIMMMMIIIIMMMMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMIIIIIII
//MMMMIIIIIIIIIIIIIIIIIIIIIMMMMMIIIMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIIIII
//MMMMIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIIII
//MMMIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIIII
//MMIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMIIIIMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIII
//MMIIIIIIIIIIIIIIIIIMMMMMMMMMMMMIIIIIIIIIIMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIII
//MIIIIIIIIIIIIIIIIIIMMIIIMMMMMMMIIIIIIIIIIIMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIIIIIMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIIIIMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIII
//IIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIMMMMMMMIIII
//IIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIMMMMMMMMIII
//IIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIIIIIIIIMMMMMMMMMIIIIIIIIIIIIIIIIIIIMMMMMMMMIII
//IIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIIIIIIIIMMMMMMMMIIIIIIIIIIIIIIIIIIIMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIIIIIIIMMMMMMMMIIIIIIIIIIIIIIIIIIIMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIIIIIIIMMMMMMMMIIIIIIIIIIIIIIIIIIMMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIIIIIMMMMMMMMMIIIIIIIIIIIIIIIIIIIMMMMMMMMIIII
//MIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMIIIIIMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIII
//MMIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIII
//MMIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIII
//MMMIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMMMIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIIII
//MMMMIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMIIIIMMMMIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMIIIIII
//MMMMIIIIIIIIIIIIIIIIIIIIIMMMMIIIIIMMMMIIIMMMMIIIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMIIIIIII
//MMMMMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIMMMMIIIIMMMMIIIIIIIIIIIIIIIIIIIIIIMMMMMMMMMIIIIIII



 // socket.emit('update', ' ');
  
  // INTRO OF OLD SCHOOL COMPUTER BOOTING UP

  // Grab and print date/time and IP of user upon form submission/post
  let submitDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var date = new Date();
  let mdy = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  submitDate = submitDate.split(' ');
  //console.log('Website visited on ' + submitDate);

    setTimeout(function() {
  socket.emit('update', 'BIOS Date ' + mdy + ' ' + submitDate[1] + ' Ver: 08.00.16');
  }, 1000);
      setTimeout(function() {
  socket.emit('update', 'CPU: Intel(R) CPU 330 @ 40 MHz');
  }, 1200);

  //setTimeout(function() {
  //socket.emit('update', 'PMU ROM Version: 9303');
  //}, 1400);

    setTimeout(function() {
  socket.emit('update', 'NVMM ROM Version: 4.20000001');
  }, 1400);
      setTimeout(function() {
  socket.emit('update', 'Initializing USB Controllers...');
  }, 1600);
        setTimeout(function() {
  socket.emit('update', 'Auto-detecting USB Mass Storage Devices...');
  }, 2200);
          setTimeout(function() {
  socket.emit('update', 'Booting from Hard Disk...');
  }, 2800);

  setTimeout(function() {
      socket.emit('update', 'Welcome. NodeBox is an interactive terminal utilizing Node.js, Socket.io & @psf/bchjs. Using NodeBox, you can view information about specific Bitcoin Cash addresses or the BCH blockchain, mempool, utxos, signed messages, etc. Enter "help" to view all available commands and get started. All data entered is private to each socket, or current browser session, and destroyed upon reset.');
     // socket.emit('example', 'Nodebox is still in beta. If you find critical any errors, let us know and we may send you a reward in SLP or BCH');
  }, 3600);
  

	// FORM SUBMIT STARTS HERE
  socket.on('chat message', function(msg){
  // message (msg) has been submitted, take actions
    
  // trim the message string to remove any leading or late 
  msg = msg.trim();
  msglow = msg.toLowerCase();
  //logs for debugging submission and flow
	//console.log('User submitted: ' + msg);

  //print the users command back to them with a prefix
  socket.emit('chat message', '₿:\\ ' + msg);

  // REGULAR WORD MATCHES, including donate, reboot, clean,

  // GetMiningInfo()
  if (msglow == 'getmininginfo'){
    (async () => {
    try {
     let getMiningInfo = await bchjs.Blockchain.getBlockchainInfo();
     //console.log(getMiningInfo);
     socket.emit('update', 'Blocks: ' + getMiningInfo.blocks);
     socket.emit('update', 'Headers: ' + getMiningInfo.headers);
     socket.emit('update', 'Best Block Hash: ' + getMiningInfo.bestblockhash);
     socket.emit('update', 'Difficulty: ' + numberWithCommas(getMiningInfo.difficulty));
     socket.emit('update', 'Median Time: ' + numberWithCommas(getMiningInfo.mediantime));
     socket.emit('update', 'Verification Percentage: %' + getMiningInfo.verificationprogress);
     // socket.emit('update', 'PooledTx: ' + getMiningInfo.pooledtx);
     // socket.emit('update', 'Chain: ' +  getMiningInfo.chain);
    } catch(error) {
     console.error(error)
      } 
    })()
    return;
  }

  // if they type donate, return donation BCH address.
  if (msglow == 'donate'){
    // add bitcoincash text donation address. client site returns QR code.
   socket.emit('update', 'Donate BCH to KeepBitcoinFree.org:');
   socket.emit('example', 'bitcoincash:qzjzgvrm7zh54rrt5jlht5mcxra0wz70s5j6mdd38a');
   return;
  }

  // if they enter reboot or clear, we handle on the client side so just return
  if ((msglow == 'reboot') || (msglow == 'clear')) {
    return;
  }
  
  //TODO: add credits for BITBOX, Bitcoin.com & gabriel cordona (creator of BITBOX)

  // TRY BLOCK FOR COMMANDS WITH PARENTHESIS such as toSatoshi(5)
  try{

    var regExp = /\(([^)]+)\)/;
    var msgInsideParen = regExp.exec(msglow);
    //msgInsideParen[1] gives you what is inside the parenthesis

    msgParArray = msglow.split('(');

  if( msgParArray.length > 1) {
    //toSatoshi()
    if (msgParArray[0] == 'tosatoshi') {
      // convert user entered $BCH to satoshis
      let toSatoshi = bchjs.BitcoinCash.toSatoshi(msgInsideParen[1]);
      // 9 = 900000000
      socket.emit('update', msgInsideParen[1] + ' BCH converted to Satoshis: ' + numberWithCommas(toSatoshi));
    }


    //toBitcoinCash()
    if (msgParArray[0] == 'tobitcoincash') {
        //convert user entered satoshis to $BCH
        let toBitcoinCash = bchjs.BitcoinCash.toBitcoinCash(msgInsideParen[1]);

        //TODO: add in price details of BCH

        socket.emit('update', msgInsideParen[1] + ' Satoshis converted to BCH: ' + toBitcoinCash);
    }

    //utxo(BCH_ADDRESS)
    if (msgParArray[0] == 'utxo') {
        // get all utxos for an address
        (async () => {
        try {
          let utxo = await bchjs.Address.utxo(msgInsideParen[1]);
          //console.log(utxo);
          //TODO: break this out or build for loop to print each obj in array.
          socket.emit('update', JSON.stringify(utxo));

        } catch(error) {
          console.error(error)
         }
        })()
    }

    //create seed buffer from passed mnemonic seed
if(msgParArray[0] == 'createseedbuffer'){
  console.log(msgInsideParen);
  if (msgInsideParen != null){
    // create seed buffer from mnemonic

    let mnemonic = bchjs.Mnemonic.generate(128);

    let seedBuffer = bchjs.Mnemonic.toSeed(mnemonic);
    console.log('seedBuffer: ' + seedBuffer);
 //   socket.emit('update', 'SeedBuffer: '); // socket.emit('udpate', seedBuffer);
    return;
  }else{
    socket.emit('update', 'Error: You must first create a mnemonic to create a Seed Buffer from it.');
    return;
  }
}









  //end of if msgarray > 1 try block
    return;
  }

  //end of msgarray > 1 try block
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
        //console.log(msgArray);

      // check if sign is called
      if (msgArray[0] == 'sign'){
        let signedMessage = bchjs.BitcoinCash.signMessageWithPrivKey(msgArray[1], msgArray[2]);
       // console.log(signedMessage);
        socket.emit('update', 'PrivatekeyWIF: ' + msgArray[1].substring(0, 47) + '*****');
        socket.emit('update', 'Message: ' + msgArray[2]);
        socket.emit('update', 'Signed Message: ' + signedMessage);
        socket.emit('update', ' ');
        return;
      }

      // check if verify is called
      if (msgArray[0] == 'verify'){

        let verifyMessage = bchjs.BitcoinCash.verifyMessage(msgArray[1], msgArray[2], msgArray[3]);
        
        if(verifyMessage == true){
          socket.emit('update', 'Message was verified as authentic by the address that signed the message & cryptographic signature provided. ');
        }else {
          socket.emit('update', 'Message was NOT verified as authentic with the address, signature & message provided.')
        }
      }

      // TODO: FINISH BIP21encoded

      // check if encodeBIP21 is called
      // if (msgArray[0] == 'encodeBIP21'){
      //   // encodeBIP21 MODULE - to add options to BCH address such as amount, label & message
      //   let address = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
      //   let options = {
      //     amount: 12.5,
      //     label: 'coinbase donation',
      //     message: "and ya don't stop",
      //   }
        
      //   var BIP21encoded = bitbox.BitcoinCash.encodeBIP21(address, options)
      //   // bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop
      //   //console.log(BIP21encoded);
      //   socket.emit('chat message', BIP21encoded);

      // }

      // encryptBIP38
      if( msgArray[0] == 'encryptBIP38') {

        privKeyWIF = msgArray[1];
        pass = msgArray[2];

        let encryptBIP38 = bchjs.BitcoinCash.encryptBIP38(privKeyWIF, pass);
        socket.emit('update', 'PrivatekeyWIF: ' + privKeyWIF.substring(0, 47) + '*****');
        socket.emit('update', 'Password: ' + pass);
        socket.emit('update', 'BIP28 Encrypted PrivatekeyWIF: ' + encryptBIP38);

      }

      // decryptBIP38
      if( msgArray[0] == 'decryptBIP38') {

        privKeyWIF = msgArray[1];
        pass = msgArray[2];
        network = msgArray[3];

        // mainnet (encryptedPRIVKEY, password to decrypt with, network)
        let decryptBIP38 = bchjs.BitcoinCash.decryptBIP38('6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G', '9GKVkabAHBMyAf', 'mainnet');
        // L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu

        socket.emit('update', 'PrivatekeyWIF: ' + privKeyWIF.substring(0, 47) + '*****');
        socket.emit('update', 'Password: ' + pass);
        socket.emit('update', 'Network ' + network);
        socket.emit('update', 'BIP28 Decrypted PrivatekeyWIF: ' + decryptBIP38);

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
      socket.emit('update', 'Enter a BCH address in Legacy, Cashaddr or simpleledger format to display the latest info about that address. If an unconfirmed balance is detected for that address, the system will track it until it is confirmed.');
      socket.emit('update', 'Enter "getBlockchainInfo" to return the latest info regarding the BCH Blockchain.');
      socket.emit('update', 'Enter "getBlockCount" to return the latest number of blocks in the longest Blockchain.');
      socket.emit('update', 'Enter "getDifficulty" to return the proof-of-work difficulty as a multiple of the minimum difficulty.');
      socket.emit('update', 'Enter "getMempoolInfo" to return the latest info about the current mempool.');
      socket.emit('update', 'Enter "toSatoshi(# of BCH)" to return the amount of Satoshis for the supplied amount of BCH.');
      socket.emit('update', 'Enter "toBitcoinCash(# of Satoshis)" to return the amount of BCH for supplied amount of Sats.');
      socket.emit('update', 'Enter "getMiningInfo" to return mining-related information.');
      socket.emit('update', 'Enter utxo(BCH_ADDRESS) to return a list of utxos for a legacy or cash address.');
      socket.emit('update', 'Enter "encryptBIP38, PRIVATEKEYWIF, PASSWORD" to encrypt privkey WIFs with BIP39.');
      socket.emit('example', 'encryptBIP38, L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu, 9GKVkabAHBMyAf');
      socket.emit('update', 'Enter "decryptBIP38, encryptedPRIVATEKEYWIF, PASSWORD" to decrypt with, network.');
      socket.emit('example', 'decryptBIP38, 6PYU2fDHRYfsKawL4KYornRFgimHnEovxU4VcgDaVtsVuuzQEfWDYwBQLd, Password123, mainnet');
      socket.emit('update', 'Enter "sign, PRIVATEKEYWIF, MESSAGE" to sign a message with a private key.');
      socket.emit('example', 'sign, KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS, Bitcoin Cash is Bitcoin');
      socket.emit('update', 'Enter "verify, BCH_ADDRESS, SIGNATURE, MESSAGE" to verify a signed message.');
      socket.emit('example', 'verify, bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv, II+rsv72D/KnZ6noO25WWtXnu3C2seCuJEJ6HwB3yalFTbeBjF1FSw6XuaOnxpwsrEXHimIdJB9k3aKsJaQB0L0=, Bitcoin Cash is Bitcoin');
      socket.emit('update', 'Enter "donate" to view a donation address for KeepBitcoinFree.org');
      socket.emit('update', 'Enter "reboot" or "clear" to reboot NodeBox, clear the screen and start fresh (not working on mobile).');
      socket.emit('update', 'Enter "keepbitcoinfree.org" to visit our website & learn more.');
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
    let getMempoolInfo = await bchjs.Blockchain.getMempoolInfo();
   // console.log(getMempoolInfo);
   // print entire array at once: socket.emit('array', JSON.stringify(getMempoolInfo));
    socket.emit('update', 'Size: ' + numberWithCommas(getMempoolInfo.size));
    socket.emit('update', 'Bytes: ' + numberWithCommas(getMempoolInfo.bytes));
    socket.emit('update', 'Usage: ' + numberWithCommas(getMempoolInfo.usage));
    socket.emit('update', 'Max Mempool: ' + numberWithCommas(getMempoolInfo.maxmempool));
    socket.emit('update', 'Mempool Min Fee: ' + getMempoolInfo.mempoolminfee + ' BCH');
   // socket.emit('update', 'Min Relay Tx Fee ' + getMempoolInfo.minrelaytxfee + ' BCH');

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
    let getBlockCount = await bchjs.Blockchain.getBlockCount();
    //console.log(getBlockCount);
    socket.emit('update', 'Bitcoin Cash Block Count: ' + numberWithCommas(getBlockCount));
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
    let getDifficulty = await bchjs.Blockchain.getDifficulty();
    // debug: console.log(getDifficulty);
    socket.emit('update', 'BCH Difficulty: ' + numberWithCommas(getDifficulty.toFixed(2)));
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
    let getBlockchainInfo = await bchjs.Blockchain.getBlockchainInfo();
    //console.log(getBlockchainInfo);
    //socket.emit('update', 'BlockChain Info for BCH:');
    socket.emit('update', 'Chain: ' + getBlockchainInfo.chain);
    socket.emit('update', 'Blocks: ' + numberWithCommas(getBlockchainInfo.blocks));
    socket.emit('update', 'Headers: ' + numberWithCommas(getBlockchainInfo.headers));
    socket.emit('update', 'Best Block Hash: ' + getBlockchainInfo.bestblockhash);
    socket.emit('update', 'Difficulty: ' + numberWithCommas(getBlockchainInfo.difficulty.toFixed(2)));
    socket.emit('update', 'Mediantime: ' + getBlockchainInfo.mediantime);
    socket.emit('update', 'Verification Progress: ' + getBlockchainInfo.verificationprogress);
    socket.emit('update', 'Chainwork: ' + getBlockchainInfo.chainwork);
    socket.emit('update', 'Pruned: ' + getBlockchainInfo.pruned);
    //socket.emit('update', 'Softfork: ' + JSON.stringify(getBlockchainInfo.softforks));
    //socket.emit('update', 'BIP9_softfork: ' + JSON.stringify(getBlockCount.bip9_softforks));

    } catch(error) {
      console.error(error)
    }
  })()
      return;
    }
  }catch(error){
    console.log(error);
  }



    // IF msg doesn't match anything else, let's check the 
    //ADDRESS DETAILS: using BITBOX to hit API and get info for BCH address.
    // async function to get all details of BCH address
  
 

  try {

   //TODO: move price grab outside of address balance details to use elsewhere in price(amount of BCH) ie. create a function for pricegrab.
  (async () => {
    // use BITBOX to get details of BCH address submitted by user
    let details = await bchjs.Electrumx.balance(msg);
    // use BITBOX to GET BCH PRICE IN USD
    let usd = await bchjs.Price.getUsd();
    // usd = usd / 100;
    
    let confirmedSats = Number(details.balance.confirmed);
    let unconfirmedSats = Number(details.balance.unconfirmed);
    let totalSats = confirmedSats + unconfirmedSats;

    let confirmedBCH = confirmedSats / 100000000;
    let unconfirmedBCH = unconfirmedSats / 100000000;
    let totalBCH = totalSats / 100000000;

    let balanceUsd = (totalBCH * usd).toFixed(2);
    //let totalRec = numberWithCommas((details.totalReceived * usd).toFixed(2));
    let unconfirmedBalusd = numberWithCommas((unconfirmedSats * usd).toFixed(2));
    //if $ is over 3 digits, add a comma  = $420,420
    balanceUsd = numberWithCommas(balanceUsd);

    // break down details array & print to user
    socket.emit('update', 'Total Balance: ' + totalBCH + ' BCH  ($' + balanceUsd + ' USD)');
    socket.emit('update', 'Balance in Sats: ' + numberWithCommas(totalSats));
    if(unconfirmedSats > 0) {
    socket.emit('update', '*Unconfirmed Balance: ' + unconfirmedBCH + ' BCH ($' + unconfirmedBalusd + ' USD)');
    socket.emit('update', 'Unconfirmed Balance in Sats: ' + numberWithCommas(unconfirmedSats));
  }
   //  socket.emit('update', 'Total Received: ' + details.totalReceived + ' BCH ($' + totalRec + ' USD)');
   //  socket.emit('update', 'Total Sats Received: ' + numberWithCommas(details.totalReceivedSat));
	  // socket.emit('update', 'Total Sent: ' + bchjs.BitcoinCash.toBitcoinCash(details.totalSentSat) + ' BCH');
   //  socket.emit('update', 'Total Sats Sent: ' + numberWithCommas(details.totalSentSat));
   
   //unconfirmed balance exists, tell user we're tracking it in the background
	// if (details.unconfirmedBalance !== 0){
 //    socket.emit('example', '*Unconfirmed Balance detected: ' + details.unconfirmedBalance + ' BCH. NodeBox is tracking the balance. You can continue working & will be notified when it is confirmed.');
 //  }

 //  //let i = 0;

 //  //UNCONFIRMED BALANCE LOOP 
 //  //unconfirmed balance detected. Let's track it and let the user know when it confirms.
 //  while (details.unconfirmedBalance !== 0){
	// 		//socket.emit('update', 'Unconfirmed balance detected.... Tracking the balance until it is confirmed.')

 //      //TODO: add a var on client side to update while it's checking for a confirmation. something like a waiting ........
 //     // while (i < 5){
 //        //socket.emit('waiting', '.');
 //        //console.log('i = ' + i);
 //        //do something. i'd like to make a progress bar of sorts but it might be better to just let the user continue without having to wait.
 //        // need to test if app will continue tracking while user continues issuing commands.
 //       // i++;
      
 //     // if(i == 5){
 //     //   i == 0;
 //     // }

 //      //re-check the balance every 10 seconds until balance == 0
	// 		await new Promise(resolve => setTimeout(resolve, 10000));

	// 		let details = await bchjs.Address.details(msg);

 //      // each pass while unconfirmedBalance > 0, check if balance is 0 (has confirmed) & alert user if so.
	// 		if (details.unconfirmedBalance == 0){
	// 			socket.emit('chat message', 'Unconfirmed Balance for ' + msg + ' has been confirmed!');

 //      socket.emit('logo', '_╔╗_┌─┐┬__┌─┐┌┐┌┌─┐┌─┐__┬_┬┌─┐┌─┐__┌┐_┌─┐┌─┐┌┐┌__╔═╗╔═╗╔╗╔╔═╗╦╦═╗╔╦╗╔═╗╔╦╗┬');
 //      socket.emit('logo', '_╠╩╗├─┤│__├─┤││││__├┤___├─┤├─┤└─┐__├┴┐├┤_├┤_│││__║__║_║║║║╠╣_║╠╦╝║║║║╣__║║│');
 //      socket.emit('logo', '_╚═╝┴_┴┴─┘┴_┴┘└┘└─┘└─┘__┴_┴┴_┴└─┘__└─┘└─┘└─┘┘└┘__╚═╝╚═╝╝╚╝╚__╩╩╚═╩_╩╚═╝═╩╝o');


 //        // TODO: real deal alert user funds have confirmed (needs to be done on client side): window.alert('Unconfirmed Balance has been confirmed!');
	// 			return;
	// 		//}

	// 	}

 //  }
  return;
    //separator for each address
    //socket.emit('chat message', '');
   })()
//end of IF isLegacy or isCashAddr

  //end of try block, catch & send back error
  } catch(error) {
  // catch error for details array and print only to console if it fails
   console.error(error)
  }
    

  // bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

  // debug: console.log('********* User entered: ' + msg + ' :deretne resU *********');
  
  //CONVERT BCH ADDRESS: detects address type & converts to the other, prints both.
  try{

    //check for SLP address.
    // Install BITBOX-SDK v8.1+ for blockchain access
  // For more information visit: https://www.npmjs.com/package/bitbox-sdk
msgColonArray = msg.split(':');



  if (bchjs.SLP.Address.isSLPAddress(msg)) {
    //msgColonArray[0].toLowerCase() == 'simpleledger' ) {
    socket.emit('update', 'You have entered an SLP Token address (simpleledger):');
    socket.emit('update', msg);
   // cashAddr = bitbox.Address.toCashAddress(msg);
  //  socket.emit('update', 'CashAddr: ' + cashAddr);


  //check for unconfirmed funds on SLP addy
 // (async () => {
 // try {
 //   let unconfirmed = await SLP.Address.unconfirmed([msg]);
 //   console.log(unconfirmed);

    //  unconfirmed.forEach(function(value){

  //      console.log(value.name);
//        console.log(value);
  //    });

  //} catch(error) {
 //  console.error(error)
 // }

    
    //end check for unconfirmed funds
  //  })();


  
    //get TOKEN BALANCES of SLP address: (NOT WORKING)

    (async () => {
  try {
    console.log(msg);
    let balances = await bchjs.PsfSlpIndexer.balance(msg);
    console.log(balances.length);

    console.log('starting balances.forEach');
    balances.forEach(function(token){


    socket.emit('update', 'Token ID: ' + token.tokenId);
    socket.emit('update', 'Token Balance: ' + token.balance);
    socket.emit('update', 'Decimal Count: ' + token.decimalCount);
    socket.emit('update', '_______________________________');

    //socket.emit('update', '*Unconfirmed Balance: ' + details.unconfirmedBalance + ' BCH ($' + unconfirmedBalusd + ' USD)');
    //socket.emit('update', 'Unconfirmed Balance in Sats: ' + numberWithCommas(details.unconfirmedBalanceSat));
    //socket.emit('update', 'Total Received: ' + details.totalReceived + ' BCH ($' + totalRec + ' USD)');
    //socket.emit('update', 'Total Sats Received: ' + numberWithCommas(details.totalReceivedSat));
    //socket.emit('update', 'Total Sent: ' + bitbox.BitcoinCash.toBitcoinCash(details.totalSentSat) + ' BCH');
    //socket.emit('update', 'Total Sats Sent: ' + numberWithCommas(details.totalSentSat));

    });

  } catch (error) {
    console.log(error);
  }
})();




  // GET DETAILS OF TOKENS BY ID, PASS IN ARRAY OF TOKENS
  // (async () => {
  //   try {
  //     let list = await SLP.Utils.list([
  //       "fa6c74c52450fc164e17402a46645ce494a8a8e93b1383fa27460086931ef59f",
  //       "38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0"
  //     ]);
  //     console.log(list);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })();





    return;
  }







// {
//   "utxos": [
//     {
//       "address": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
//       "txid": "5ddf277cecefab4bb75fb5d6ba21170cec756ef28a045cb4ec45ccffda28cdaf",
//       "vout": 0,
//       "scriptPubKey": "76a914bcbc83f8fadb704a6aeccf38079e428da445b11e88ac",
//       "amount": 0.0001,
//       "satoshis": 10000,
//       "confirmations": 0,
//       "ts": 1547670883
//     }
//   ],
//   "legacyAddress": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
//   "cashAddress": "simpleledger:qpcxf2sv9hjw08nvpgffpamfus9nmksm3cmhle4tdu"
// }


// RETURNS ALL BALANCES & UTXOs: 

// { satoshis_available_bch: 190889,
//   satoshis_locked_in_slp_baton: 546,
//   satoshis_locked_in_slp_token: 1092,
//   satoshis_in_invalid_token_dag: 0,
//   satoshis_in_invalid_baton_dag: 0,
//   slpTokenBalances: {
//      '1cda254d0a995c713b7955298ed246822bee487458cd9747a91d9e81d9d28125': BigNumber { s: 1, e: 3, c: [ 1000 ] },
//      '047918c612e94cce03876f1ad2bd6c9da43b586026811d9b0d02c3c3e910f972': BigNumber { s: 1, e: 2, c: [ 100 ] } 
//   },
//   nftParentChildBalances: {
//      'parentId1': {
//            'childId1': BigNumber
//            'childId2': BigNumber
//      }
//      'parentId2': {
//            'childId1': BigNumber
//            'childId2': BigNumber
//      }
//   }
//   slpTokenUtxos: [ ... ],
//   slpBatonUtxos: [ ... ],
//   invalidTokenUtxos: [ ... ],
//   invalidBatonUtxos: [ ... ],
//   nonSlpUtxos: [ ... ]
//   unknownTokenTypeUtxos: [ ... ]
// }






    	if ( bchjs.Address.isLegacyAddress(msg) == true) {
    		//print original address
    		socket.emit('update', 'Legacy: ' + msg);
    		// mainnet w/ prefix
  			cashAddr = bchjs.Address.toCashAddress(msg);
        // get/set the details before we continue with output
        network = bchjs.Address.detectAddressNetwork(msg);
        
  			// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl
  			socket.emit('update', 'CashAddr: ' + cashAddr);
  			socket.emit('update', 'Network: ' + network);
  			return;
    	}
    	
    	 if (bchjs.Address.isCashAddress(msg) == true) {

        // mainnet w/ prefix
        legacy = bchjs.Address.toLegacyAddress(msg);
        // mainnet w/ prefix
        //cashAddr = bitbox.Address.toCashAddress(msg);
        // get/set the details before we continue with output
        network = bchjs.Address.detectAddressNetwork(msg);

    	  // print addresses
        socket.emit('update', 'CashAddr: ' + msg);
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
