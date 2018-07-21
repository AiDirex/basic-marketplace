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
import { ChargeMemberBalanceService } from './ChargeMemberBalance.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-chargememberbalance',
  templateUrl: './ChargeMemberBalance.component.html',
  styleUrls: ['./ChargeMemberBalance.component.css'],
  providers: [ChargeMemberBalanceService]
})
export class ChargeMemberBalanceComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  member = new FormControl('', Validators.required);
  amount = new FormControl('', Validators.required);


  constructor(private serviceChargeMemberBalance: ChargeMemberBalanceService, fb: FormBuilder) {
    this.myForm = fb.group({
      member: this.member,
      amount: this.amount
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceChargeMemberBalance.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
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

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
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
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'net.aidin.marketplace.ChargeMemberBalance',
      'member': `resource:net.aidin.marketplace.Member#${this.member.value}`,
      'amount': this.amount.value
    };

    this.myForm.setValue({
      'member': null,
      'amount': null
    });

    return this.serviceChargeMemberBalance.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'member': null,
        'amount': null
      });
      this.loadAll()
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

  // updateTransaction(form: any): Promise<any> {
  //   this.Transaction = {
  //     $class: 'net.aidin.marketplace.ChargeMemberBalance',
  //     'member': this.member.value,
  //     'amount': this.amount.value
  //   };
  //
  //   return this.serviceChargeMemberBalance.updateTransaction(form.get('transactionId').value, this.Transaction)
  //   .toPromise()
  //   .then(() => {
  //     this.errorMessage = null;
  //   })
  //   .catch((error) => {
  //     if (error === 'Server error') {
  //       this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
  //     } else if (error === '404 - Not Found') {
  //     this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
  //     } else {
  //       this.errorMessage = error;
  //     }
  //   });
  // }

  // deleteTransaction(): Promise<any> {
  //
  //   return this.serviceChargeMemberBalance.deleteTransaction(this.currentId)
  //   .toPromise()
  //   .then(() => {
  //     this.errorMessage = null;
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

  // getForm(id: any): Promise<any> {
  //
  //   return this.serviceChargeMemberBalance.getTransaction(id)
  //   .toPromise()
  //   .then((result) => {
  //     this.errorMessage = null;
  //     const formObject = {
  //       'member': null,
  //       'amount': null
  //     };
  //
  //     if (result.member) {
  //       formObject.member = result.member;
  //     } else {
  //       formObject.member = null;
  //     }
  //
  //     if (result.amount) {
  //       formObject.amount = result.amount;
  //     } else {
  //       formObject.amount = null;
  //     }
  //
  //     this.myForm.setValue(formObject);
  //
  //   })
  //   .catch((error) => {
  //     if (error === 'Server error') {
  //       this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
  //     } else if (error === '404 - Not Found') {
  //     this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
  //     } else {
  //       this.errorMessage = error;
  //     }
  //   });
  // }

  resetForm(): void {
    this.myForm.setValue({
      'member': null,
      'amount': null
    });
  }
}
