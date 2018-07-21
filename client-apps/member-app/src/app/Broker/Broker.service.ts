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

import { Injectable } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs/Observable";
import { Broker } from "../net.aidin.marketplace";
import { Http, Response, RequestOptions, Headers, ResponseContentType } from "@angular/http";
import "rxjs/Rx";

// Can be injected into a constructor
@Injectable()
export class BrokerService {
	private NAMESPACE = "Broker";

	constructor(private dataService: DataService<Broker>, private http: Http) {}

	public getAll(): Observable<Broker[]> {
		return this.dataService.getAll(this.NAMESPACE);
	}

	public getparticipant(id: any): Observable<Broker> {
		return this.dataService.getSingle(this.NAMESPACE, id);
	}

	public addParticipant(itemToAdd: any): Observable<Broker> {
		return this.dataService.add(this.NAMESPACE, itemToAdd);
	}

	public updateParticipant(id: any, itemToUpdate: any): Observable<Broker> {
		return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
	}

	public deleteParticipant(id: any): Observable<Broker> {
		return this.dataService.delete(this.NAMESPACE, id);
	}

	public issueID(id: any) {
		let headers = new Headers();
		headers.append("Content-Type", 'application/json');
		headers.append("Accept", 'application/octet-stream');

		let options = new RequestOptions({ 
			headers: headers,
			responseType: ResponseContentType.Blob
		});
		return this.http
			.post("/api/system/identities/issue", {
				participant: `net.aidin.marketplace.Broker#${id}`,
				userID: id + '-' + Math.floor(Math.random() * 10000),
				options: {
					issuer: true
				}
			}, options)
			.catch(this.dataService.handleError);
	}

	public revokeID(id: any) {
		return this.http
			.post(`/api/system/identities/${id}/revoke`, null)
			.catch(this.dataService.handleError);
	}
}
