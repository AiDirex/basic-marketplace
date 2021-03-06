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
import { CoinOfferComponent } from './CoinOffer/CoinOffer.component';

import { BrokerComponent } from './Broker/Broker.component';
import { MemberComponent } from './Member/Member.component';

import {HistoryComponent} from "./History/History.component";
import {BuyCoinFromMemberComponent} from "./BuyCoinFromMember/BuyCoinFromMember.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Coin', component: CoinComponent },
  { path: 'CoinOffer', component: CoinOfferComponent },
  { path: 'Broker', component: BrokerComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'Wallet', component: WalletComponent },
	{ path: 'BuyCoinFromMember', component: BuyCoinFromMemberComponent },
  { path: 'History', component: HistoryComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
