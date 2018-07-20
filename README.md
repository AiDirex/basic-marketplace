# coin-marketplace

A regulated blockchain based coin marketplaces


Add a regulator
```
composer participant add -c admin@coin-marketplace -d '{
  "$class": "net.aidin.marketplace.Regulator",
  "regulatorId": "reg1",
  "name": "regulator",
  "description": "regulator"
}'
```

fabric -> composer -> REST API -> angular app

Issue identity for regulator
```  
composer identity --issuer true issue -c admin@coin-marketplace -f regulator1.card -u reg1 -a "resource:net.aidin.marketplace.Regulator#reg1" 

composer card import --file regulator1.card

composer card delete -c reg1@coin-marketplace
composer card delete -c broker1@coin-marketplace

composer identity --issuer true issue -c reg1@coin-marketplace -f broker1.card -u broker -a "resource:net.aidin.marketplace.Broker#broker1"

composer participant add -c broker1744356@coin-marketplace -d '{
  "$class": "net.aidin.marketplace.Member",
  "nationalId": "123456",
  "balance": 0, "info": {"firstName": "aidin", "lastName": "rasti", "phone": "777777"},
  "brokers":[{}]
  }'

composer identity issue -c broker1-6446@coin-marketplace  -f member1.card -u 123456 -a "resource:net.aidin.marketplace.Member#string"
```

Delete admin card
```
composer card delete -c admin@coin-marketplace
```
