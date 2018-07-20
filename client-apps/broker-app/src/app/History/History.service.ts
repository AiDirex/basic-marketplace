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

import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Wallet } from '../net.aidin.marketplace';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {HistorianRecord} from "../org.hyperledger.composer.system";

// Can be injected into a constructor
@Injectable()
export class HistoryService {

  private NAMESPACE = 'system/historian';

  constructor(private dataService: DataService<HistorianRecord>, private http: Http) {
  };

  public getAll(): Observable<HistorianRecord[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  // public getAsset(id: any): Observable<Wallet> {
  //   return this.dataService.getSingle(this.NAMESPACE, id);
  // }

  // public addAsset(itemToAdd: any, name): Observable<Wallet> {
  //   return this.http.post(`/api/wallet/import?name=${name}`, itemToAdd)
  //         .map((res: Response) => {return res.json()})
  //         .catch((error: any) => {
  //           const errMsg = (error.message) ? error.message :
  //           error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //         console.error(errMsg); // log to console instead
  //         return Observable.throw(errMsg);
  //         });

    // return this.dataService.add(`${this.NAMESPACE}/import}`, itemToAdd);
  // }

  // public updateAsset(id: any, itemToUpdate: any): Observable<Wallet> {
  //   return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  // }

  // public deleteAsset(id: any): Observable<Wallet> {
  //   return this.dataService.delete(this.NAMESPACE, id);
  // }

}
