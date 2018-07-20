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
import 'rxjs/add/operator/toPromise';
import {HistoryService} from "./History.service";

@Component({
  selector: 'app-history',
  templateUrl: './History.component.html',
  styleUrls: ['./History.component.css'],
  providers: [HistoryService]
})
export class HistoryComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  // name = new FormControl('', Validators.required);
  // default = new FormControl('')
  // card = new FormControl('', Validators.required);

  constructor(public serviceHistory: HistoryService, fb: FormBuilder) {
    // this.myForm = fb.group({
    //   name: this.name,
    //   default: this.default,
    //   card: null
    // });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceHistory.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
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
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  // addAsset(form: any): Promise<any> {
  //   let input = new FormData();
  //   input.append('name', this.myForm.get('name').value);
  //   input.append('card', this.myForm.get('card').value);
  //   let name = this.name.value
  //
  //   this.asset = {
  //     'name': this.name.value,
  //     'default': this.default.value,
  //     'card': this.card.value
  //   };
  //
  //
  //
  //   return this.serviceHistory.addAsset(input, name)
  //   .toPromise()
  //   .then(() => {
  //     this.errorMessage = null;
  //     this.myForm.setValue({
  //       'name': null,
  //       'default': null,
  //       'card': null
  //     });
  //     this.loadAll();
  //   })
  //   .catch((error) => {
  //     if (error === 'Server error') {
  //         this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
  //     } else {
  //         this.errorMessage = error;
  //     }
  //   });
  // }


  // updateAsset(form: any): Promise<any> {
  //   this.asset = {
  //     $class: 'net.aidin.marketplace.Coin',
  //     'name': this.name.value,
  //     'default': this.issuer.value
  //   };

  //   return this.serviceHistory.updateAsset(form.get('coinId').value, this.asset)
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

  // onFileChange(event) {
  //   if(event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     this.myForm.get('card').setValue(file);
  //   }
  // }

  // deleteAsset(): Promise<any> {
  //
  //   return this.serviceHistory.deleteAsset(this.currentId)
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

  // setId(id: any): void {
  //   this.currentId = id;
  // }
  //
  // getForm(id: any): Promise<any> {
  //
  //   return this.serviceHistory.getAsset(id)
  //   .toPromise()
  //   .then((result) => {
  //     this.errorMessage = null;
  //     const formObject = {
  //       'name': null,
  //       'default': null,
  //       'card': null
  //     };
  //
  //     if (result.name) {
  //       formObject.name = result.name;
  //     } else {
  //       formObject.name = null;
  //     }
  //
  //     if (result.default) {
  //       formObject.default = result.default;
  //     } else {
  //       formObject.default = null;
  //     }
  //
  //     // if (result.issuer) {
  //     //   formObject.issuer = result.issuer;
  //     // } else {
  //     //   formObject.issuer = null;
  //     // }
  //
  //     this.myForm.setValue(formObject);
  //
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

  // resetForm(): void {
  //   this.myForm.setValue({
  //     'name': null,
  //     'default': null,
  //     'card': null
  //     });
  // }

}
