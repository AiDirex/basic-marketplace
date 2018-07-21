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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrokerService } from './Broker.service';
import 'rxjs/add/operator/toPromise';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-broker',
  templateUrl: './Broker.component.html',
  styleUrls: ['./Broker.component.css'],
  providers: [BrokerService]
})
export class BrokerComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;

  brokerId = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);


  constructor(public serviceBroker: BrokerService, fb: FormBuilder) {
    this.myForm = fb.group({
      brokerId: this.brokerId,
      name: this.name,
      description: this.description
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceBroker.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  // addParticipant(form: any): Promise<any> {
  //   this.participant = {
  //     $class: 'net.aidin.marketplace.Broker',
  //     'brokerId': this.brokerId.value,
  //     'name': this.name.value,
  //     'description': this.description.value
  //   };
  //
  //   this.myForm.setValue({
  //     'brokerId': null,
  //     'name': null,
  //     'description': null
  //   });
  //
  //   return this.serviceBroker.addParticipant(this.participant)
  //   .toPromise()
  //   .then(() => {
  //     this.errorMessage = null;
  //     this.myForm.setValue({
  //       'brokerId': null,
  //       'name': null,
  //       'description': null
  //     });
  //     this.loadAll();
  //   })
  //   .catch((error) => {
  //     if (error === 'Server error') {
  //       this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
  //     } else {
  //       this.errorMessage = error;
  //     }
  //   });
  // }


  //  updateParticipant(form: any): Promise<any> {
  //   this.participant = {
  //     $class: 'net.aidin.marketplace.Broker',
  //     'name': this.name.value,
  //     'description': this.description.value
  //   };
  //
  //   return this.serviceBroker.updateParticipant(form.get('brokerId').value, this.participant)
  //   .toPromise()
  //   .then(() => {
  //     this.errorMessage = null;
  //     this.loadAll();
  //   })
  //   .catch((error) => {
  //     if (error === 'Server error') {
  //       this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
  //     } else if (error === '404 - Not Found') {
  //       this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
  //     } else {
  //       this.errorMessage = error;
  //     }
  //   });
  // }
  //
  //
  // deleteParticipant(): Promise<any> {
  //
  //   return this.serviceBroker.deleteParticipant(this.currentId)
  //   .toPromise()
  //   .then(() => {
  //     this.errorMessage = null;
  //     this.loadAll();
  //   })
  //   .catch((error) => {
  //     if (error === 'Server error') {
  //       this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
  //     } else if (error === '404 - Not Found') {
  //       this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
  //     } else {
  //       this.errorMessage = error;
  //     }
  //   });
  // }

  setId(id: any): void {
    this.currentId = id;
  }

  issueID(id: any){
    return this.serviceBroker.issueID(id).toPromise()
      .then((res: any) => {
        console.log(res.blob())
        var blob = new Blob([res.blob()], {type: "application/octet-stream"});
        FileSaver.saveAs(blob, `${id}.card`);
      }).catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error
        }
      });
  }

  revokeID(id: any){
    return this.serviceBroker.revokeID(id).toPromise()
      .then((res: any) => {
        console.log(res)
      }).catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error
        }
      });
  }

  getForm(id: any): Promise<any> {

    return this.serviceBroker.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'brokerId': null,
        'name': null,
        'description': null
      };

      if (result.brokerId) {
        formObject.brokerId = result.brokerId;
      } else {
        formObject.brokerId = null;
      }

      if (result.name) {
        formObject.name = result.name;
      } else {
        formObject.name = null;
      }

      if (result.description) {
        formObject.description = result.description;
      } else {
        formObject.description = null;
      }

      this.myForm.setValue(formObject);
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });

  }

  resetForm(): void {
    this.myForm.setValue({
      'brokerId': null,
      'name': null,
      'description': null
    });
  }
}
