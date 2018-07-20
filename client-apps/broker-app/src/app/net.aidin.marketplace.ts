import { Asset } from "./org.hyperledger.composer.system";
import { Participant } from "./org.hyperledger.composer.system";
import { Transaction } from "./org.hyperledger.composer.system";
import { Event } from "./org.hyperledger.composer.system";
// export namespace net.aidin.marketplace{
export enum OfferStatus {
	NEW,
	SOLD
}
export class PersonInfo {
	firstName: string;
	lastName: string;
	phone: string;
}
export class Coin extends Asset {
	coinId: string;
	owner: Member;
	issuer: Broker;
}
export class Wallet extends Asset {
	name: string;
	default: boolean;
}
export class CoinOffer extends Asset {
	coinOfferId: string;
	price: number;
	status: OfferStatus;
	coin: Coin;
	owner: Member;
}
export class Broker extends Participant {
	brokerId: string;
	name: string;
	description: string;
}
export class Regulator extends Participant {
	regulatorId: string;
	name: string;
	description: string;
}
export class Member extends Participant {
	nationalId: string;
	balance: number;
	info: PersonInfo;
	brokers: Broker[];
}
export class SellCoinToMember extends Transaction {
	member: Member;
	price: number;
	id: string;
}
export class BuyCoinFromMember extends Transaction {
	offer: CoinOffer;
}
export class ChargeMemberBalance extends Transaction {
	member: Member;
	amount: number;
}
export class WithdrawMemberBalance extends Transaction {
	member: Member;
	amount: number;
}
export class RegisterMemberToBroker extends Transaction {
	member: Member;
}
export class RemoveMemberFromBroker extends Transaction {
	member: Member;
}
// }
