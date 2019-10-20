
This project was a part of my undergraduate [thesis](https://www.researchgate.net/publication/336681219_A_Coin_Marketplace_Implementation_on_Blockchain_Using_the_Hyperledger_Platform).

# A regulated blockchain based marketplace 

This project is composed of four different components. Hyperledger Fabric, Hyperledger Composer, an API server developed with loopback framework, and three client applications developed with Angular framework.  
* The underlying blockchain is provided by Hyperledger Fabric. 
* Hyperledgr composer is used for defining the business network, It includes the logic(smart contracts), models, and access controls for different particpants of the network. 
* An API server is developed in loopback for interacting with the network. It provides a full REST API for all of the entities and transactions in the network. It also includes Authentication and a wallet service.
* three client web applications developed with Angular for different participants of the entwork. regulator-app, broker-app, member-app.  
  
These four layers are essentially stacked on top of each other and each layer serves a different purpose and enable modularity:  
Fabric (blockchain) <- Composer(smart contracts, models, and ACLs) <- API Server(REST API, Wallet service, Authentication) <- Web apps(users)  
     

# Business Network
A business network consists of participants, assets, and transactions. Each participant have an issued identity. Participants can use their identity card to interact with the network using the Composer CLI or the client apps. 
Participants should trust the API server if they want to use client applications, because their identity cards should be uploaded to their wallet. Any participant can also interact with the network using Composer CLI if they don't want to trust the API server.

# Installation

1. To install prerequisites follow the steps in this [link](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html). It will install Docker and Node.js. Run the following commands to verify installation. An Ubuntu machine is required.
    ```
    nvm --version
    docker --version
    ```
2. Then follow steps 1 to 4 of this [link](https://hyperledger.github.io/composer/latest/installing/development-tools.html#installing-components). 
3. Then Run the following commands to create your peer admin card.
    ```
    cd ~/fabric-dev-servers
    ./startFabric.sh
    ./createPeerAdminCard.sh
    ./stopFabric.sh
    ```
4. clone the repository
    ```
    sudo apt-get install git
    git clone https://github.com/AiDirex/basic-marketplace
    ```
5. then install modules
    ```
    cd basic-marketplace
    npm install
    ```
6. Then start the Fabric network and package and install the marketplace application on the blockchain.
    ```
    npm run prepublish
    npm run start
    ``` 
7. After the network is started, add a sample Regulator object using the composer CLI and the admin card. 
    ```
    composer participant add -c admin@coin-marketplace -d '{
      "$class": "net.aidin.marketplace.Regulator",
      "regulatorId": "reg1",
      "name": "regulator",
      "description": "regulator"
    }'
    ``` 
8. Then issue an identity for the regulator. The issued identity is stored at regulator1.card file in the current working directory.
    ```
    composer identity --issuer true issue -c admin@coin-marketplace -f regulator1.card -u reg1 -a "resource:net.aidin.marketplace.Regulator#reg1"
    ``` 
9. You can import the card in the regulator application to use it. Or directly import it to the composer wallet if you intend to only use the CLI.  
10. Install MongoDB community edition by following instructions in this [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition). The REST server uses MongoDB to store authentication data, cards, and map these cards to authenticated users. You can configure the MongoDB connection in ./api-server/server/datasources.json    
11. Copy ./api-server/server/providers-example.json to ./api-server/server/providers.json  
12. For authentication in web applications we can use OAuth services provided by Google or Github. Follow steps in this [link](https://hyperledger.github.io/composer/latest/tutorials/google_oauth2_rest#appendix-google-authentication-configuration-setup) to get a client-secret and client-id from google. Put your credentials in clientID and clientSecret in provider.json file. Use localhost:4200 everywhere needed, instead of localhost:3000 that is specified in the tutorial link.  
13. Then you can start the REST server
    ```
    cd api-server
    npm run install
    npm run start
    ```
14. Finally you can start web applications.
    - To start regulators application:
        ```
        cd ../client-apps/regulator-app
        npm run install
        npm run start
        ``` 
    - To start brokers application:
        ```
        cd ../client-apps/broker-app
        npm run install
        npm run start
        ```
    - To start members application:
        ```
        cd ../client-apps/member-app
        npm run install
        npm run start
        ```
15. Use login button to authenticate, then upload a card in the wallet section to start using the application.
  

### Other commands
- You can import the card to the composer wallet.
    ```
    composer card import --file regulator1.card
    ```
    Or you can import it in the regulator's application wallet section to use it.

- To delete a card using composer CLI.
    ```
    composer card delete -c reg1@coin-marketplace
    ```

- To delete card of the business network admin
    ```
    composer card delete -c admin@coin-marketplace
    ```
    
- To list imported cards
    ```
    composer card list
    ```    
