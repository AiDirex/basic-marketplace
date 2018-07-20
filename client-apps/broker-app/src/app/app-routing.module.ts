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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CoinComponent } from './Coin/Coin.component';
import { WalletComponent } from './Wallet/Wallet.component';

import { BrokerComponent } from './Broker/Broker.component';
import { RegulatorComponent } from './Regulator/Regulator.component';
import { MemberComponent } from './Member/Member.component';

import { SellCoinToMemberComponent } from './SellCoinToMember/SellCoinToMember.component';
import { ChargeMemberBalanceComponent } from './ChargeMemberBalance/ChargeMemberBalance.component';
import { WithdrawMemberBalanceComponent } from './WithdrawMemberBalance/WithdrawMemberBalance.component';
import { RegisterMemberToBrokerComponent } from './RegisterMemberToBroker/RegisterMemberToBroker.component';
import { RemoveMemberFromBrokerComponent } from './RemoveMemberFromBroker/RemoveMemberFromBroker.component';
import {HistoryComponent} from "./History/History.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Coin', component: CoinComponent },
  { path: 'Broker', component: BrokerComponent },
  { path: 'Regulator', component: RegulatorComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'SellCoinToMember', component: SellCoinToMemberComponent },
  { path: 'ChargeMemberBalance', component: ChargeMemberBalanceComponent },
  { path: 'WithdrawMemberBalance', component: WithdrawMemberBalanceComponent },
  { path: 'RegisterMemberToBroker', component: RegisterMemberToBrokerComponent },
  { path: 'RemoveMemberFromBroker', component: RemoveMemberFromBrokerComponent },
  { path: 'Wallet', component: WalletComponent },
  { path: 'History', component: HistoryComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
