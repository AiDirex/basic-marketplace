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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for regulator-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be regulator-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('regulator-app');
    })
  });

  it('network-name should be coin-marketplace@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('coin-marketplace@0.0.1.bna');
    });
  });

  it('navbar-brand should be regulator-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('regulator-app');
    });
  });

  
    it('Coin component should be loadable',() => {
      page.navigateTo('/Coin');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Coin');
      });
    });

    it('Coin table should have 4 columns',() => {
      page.navigateTo('/Coin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('CoinOffer component should be loadable',() => {
      page.navigateTo('/CoinOffer');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CoinOffer');
      });
    });

    it('CoinOffer table should have 6 columns',() => {
      page.navigateTo('/CoinOffer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Broker component should be loadable',() => {
      page.navigateTo('/Broker');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Broker');
      });
    });

    it('Broker table should have 4 columns',() => {
      page.navigateTo('/Broker');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Regulator component should be loadable',() => {
      page.navigateTo('/Regulator');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Regulator');
      });
    });

    it('Regulator table should have 4 columns',() => {
      page.navigateTo('/Regulator');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Member component should be loadable',() => {
      page.navigateTo('/Member');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Member');
      });
    });

    it('Member table should have 5 columns',() => {
      page.navigateTo('/Member');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('SellCoinToMember component should be loadable',() => {
      page.navigateTo('/SellCoinToMember');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SellCoinToMember');
      });
    });
  
    it('BuyCoinFromMember component should be loadable',() => {
      page.navigateTo('/BuyCoinFromMember');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('BuyCoinFromMember');
      });
    });
  
    it('ChargeMemberBalance component should be loadable',() => {
      page.navigateTo('/ChargeMemberBalance');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChargeMemberBalance');
      });
    });
  
    it('WithdrawMemberBalance component should be loadable',() => {
      page.navigateTo('/WithdrawMemberBalance');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('WithdrawMemberBalance');
      });
    });
  
    it('RegisterMemberToBroker component should be loadable',() => {
      page.navigateTo('/RegisterMemberToBroker');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RegisterMemberToBroker');
      });
    });
  
    it('RemoveMemberFromBroker component should be loadable',() => {
      page.navigateTo('/RemoveMemberFromBroker');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RemoveMemberFromBroker');
      });
    });
  

});