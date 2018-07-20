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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoinComponent,
    WalletComponent,
		HistoryComponent,
    BrokerComponent,
    RegulatorComponent,
    MemberComponent,
    SellCoinToMemberComponent,
    ChargeMemberBalanceComponent,
    WithdrawMemberBalanceComponent,
    RegisterMemberToBrokerComponent,
    RemoveMemberFromBrokerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
