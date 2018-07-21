
A regulated blockchain based marketplace. 
It is composed of 4 different components. Hyperledger Fabric, Hyperledger Composer, an API server in loopback, and 3 client applications on Angular.  
* The underlying blockchain is provided by Hyperledger Fabric. 
* Hyperledgr composer is used for defining the business network, It includes the logic(smart contracts), models, and access controls for different particpants of the network. 
* An API server developed in loopback for interacting with the network. It provides a full REST API for all of the entities and transactions in the network. It also includes Authentication and a wallet service.
* 3 client applications developed with Angular for different participants of the entwork. regulator-app, broker-app, member-app.  
  
Fabric <- Composer(smart contracts, models, and ACLs) <- API Server(REST API, Wallet service, Authentication) <- Angular apps  
Participants should trust the API server if they want to use client applications, because their identity cards should be uploaded to their wallet. Any participant can also interact with the network using Composer CLI if they can't trust the server.

# Newtork
The network consists of participants, assets, and transactions. Each participant have an issued identity. Participants can use their identity card to interact with the network using the Composer CLI or the client apps.
  
## Participants
TODO
### Regulator
TODO
### Broker
TODO    
### Member
TODO  
  
## Assets
TODO
### Coin
TODO  
### Coin Offer
TODO  
  
## Transactions
TODO  
  

# Installation
  
# Bootstrapping
After installing run
```
npm run start
```
First Add a regulator
```
composer participant add -c admin@coin-marketplace -d '{
  "$class": "net.aidin.marketplace.Regulator",
  "regulatorId": "reg1",
  "name": "regulator",
  "description": "regulator"
}'
```
Then issue an identity for the regulator. the issued identity is stored at `regulatro1.card` file.
```  
composer identity --issuer true issue -c admin@coin-marketplace -f regulator1.card -u reg1 -a "resource:net.aidin.marketplace.Regulator#reg1" 
```
You can import the card to the composer wallet.
```
composer card import --file regulator1.card
```
Or you can import it in the regulator's application wallet section to use it.

To delete a card using composer CLI.
```
composer card delete -c reg1@coin-marketplace
```

To delete card of the busness network admin
```
composer card delete -c admin@coin-marketplace
```
