/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry */

'use strict';
/**
 * Process a property that is held for sale
 * @param {net.aidin.marketplace.SellCoinToMember} tx the property to be sold
 * @transaction
 */
async function SellCoinToMember(tx) {   // eslint-disable-line no-unused-vars
    tx.member.balance -= tx.price
    let members = await getParticipantRegistry('net.aidin.marketplace.Member');
    let coins = await getAssetRegistry('net.aidin.marketplace.Coin');
  
    let factory = getFactory();
	var coin = factory.newResource('net.aidin.marketplace', 'Coin', tx.id);
	coin.owner =  tx.member
    coin.issuer =  getCurrentParticipant()
    
    await members.update(tx.member);
  	await coins.add(coin)
}

/**
 * Process a property that is held for sale
 * @param {net.aidin.marketplace.BuyCoinFromMember} tx the property to be sold
 * @transaction
 */
async function BuyCoinFromMember(tx) {   // eslint-disable-line no-unused-vars
    let members = await getParticipantRegistry('net.aidin.marketplace.Member');
    let coins = await getAssetRegistry('net.aidin.marketplace.Coin');
    let offers = await getAssetRegistry('net.aidin.marketplace.CoinOffer');
    let newOwner = getCurrentParticipant()
	let oldOwner = tx.offer.coin.owner
    
    oldOwner.balance += tx.offer.price
    tx.offer.coin.owner = newOwner
    newOwner.balance -= tx.offer.price
    tx.offer.status = 'SOLD'

    await members.update(newOwner)
    await members.update(oldOwner)
    await coins.update(tx.offer.coin)
    await offers.update(tx.offer)
}

/**
 * Process a property that is held for sale
 * @param {net.aidin.marketplace.ChargeMemberBalance} tx the property to be sold
 * @transaction
 */
async function ChargeMemberBalance(tx) {   // eslint-disable-line no-unused-vars
   tx.member.balance += tx.amount
   let members = await getParticipantRegistry('net.aidin.marketplace.Member');

   await members.update(tx.member);
}

/**
 * Process a property that is held for sale
 * @param {net.aidin.marketplace.WithdrawMemberBalance} tx the property to be sold
 * @transaction
 */
async function WithdrawMemberBalance(tx) {   // eslint-disable-line no-unused-vars
   tx.member.balance -= tx.amount
   let members = await getParticipantRegistry('net.aidin.marketplace.Member');

   await members.update(tx.member);
}

/**
 * Process a property that is held for sale
 * @param {net.aidin.marketplace.RegisterMemberToBroker} tx the property to be sold
 * @transaction
 */
async function RegisterMemberToBroker(tx) {   // eslint-disable-line no-unused-vars
   tx.member.brokers.push(getCurrentParticipant())
   let members = await getParticipantRegistry('net.aidin.marketplace.Member');

   await members.update(tx.member);
}

/**
 * Process a property that is held for sale
 * @param {net.aidin.marketplace.RemoveMemberFromBroker} tx the property to be sold
 * @transaction
 */
async function RemoveMemberFromBroker(tx) {   // eslint-disable-line no-unused-vars
   let id = getCurrentParticipant().getFullyQualifiedIdentifier()
   tx.member.brokers = tx.member.brokers.filter((b) => {
     return b.getFullyQualifiedIdentifier() !== id
   })
   let members = await getParticipantRegistry('net.aidin.marketplace.Member');

   await members.update(tx.member);
}


