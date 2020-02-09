/*
 * BitMEX API
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)  -  #### Getting Started  Base URI: [https://www.bitmex.com/api/v1](/api/v1)  ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](/app/restAPI).  _All_ table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  _This is only a small subset of what is available, to get you started._  Fill in the parameters and click the `Try it out!` button to try any of these queries.  - [Pricing Data](#!/Quote/Quote_get)  - [Trade Data](#!/Trade/Trade_get)  - [OrderBook Data](#!/OrderBook/OrderBook_getL2)  - [Settlement Data](#!/Settlement/Settlement_get)  - [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)  -  ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BitMexApi);
  }
}(this, function(expect, BitMexApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Wallet', function() {
      beforeEach(function() {
        instance = new BitMexApi.Wallet();
      });

      it('should create an instance of Wallet', function() {
        // TODO: update the code to test Wallet
        expect(instance).to.be.a(BitMexApi.Wallet);
      });

      it('should have the property account (base name: "account")', function() {
        // TODO: update the code to test the property account
        expect(instance).to.have.property('account');
        // expect(instance.account).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property prevDeposited (base name: "prevDeposited")', function() {
        // TODO: update the code to test the property prevDeposited
        expect(instance).to.have.property('prevDeposited');
        // expect(instance.prevDeposited).to.be(expectedValueLiteral);
      });

      it('should have the property prevWithdrawn (base name: "prevWithdrawn")', function() {
        // TODO: update the code to test the property prevWithdrawn
        expect(instance).to.have.property('prevWithdrawn');
        // expect(instance.prevWithdrawn).to.be(expectedValueLiteral);
      });

      it('should have the property prevTransferIn (base name: "prevTransferIn")', function() {
        // TODO: update the code to test the property prevTransferIn
        expect(instance).to.have.property('prevTransferIn');
        // expect(instance.prevTransferIn).to.be(expectedValueLiteral);
      });

      it('should have the property prevTransferOut (base name: "prevTransferOut")', function() {
        // TODO: update the code to test the property prevTransferOut
        expect(instance).to.have.property('prevTransferOut');
        // expect(instance.prevTransferOut).to.be(expectedValueLiteral);
      });

      it('should have the property prevAmount (base name: "prevAmount")', function() {
        // TODO: update the code to test the property prevAmount
        expect(instance).to.have.property('prevAmount');
        // expect(instance.prevAmount).to.be(expectedValueLiteral);
      });

      it('should have the property prevTimestamp (base name: "prevTimestamp")', function() {
        // TODO: update the code to test the property prevTimestamp
        expect(instance).to.have.property('prevTimestamp');
        // expect(instance.prevTimestamp).to.be(expectedValueLiteral);
      });

      it('should have the property deltaDeposited (base name: "deltaDeposited")', function() {
        // TODO: update the code to test the property deltaDeposited
        expect(instance).to.have.property('deltaDeposited');
        // expect(instance.deltaDeposited).to.be(expectedValueLiteral);
      });

      it('should have the property deltaWithdrawn (base name: "deltaWithdrawn")', function() {
        // TODO: update the code to test the property deltaWithdrawn
        expect(instance).to.have.property('deltaWithdrawn');
        // expect(instance.deltaWithdrawn).to.be(expectedValueLiteral);
      });

      it('should have the property deltaTransferIn (base name: "deltaTransferIn")', function() {
        // TODO: update the code to test the property deltaTransferIn
        expect(instance).to.have.property('deltaTransferIn');
        // expect(instance.deltaTransferIn).to.be(expectedValueLiteral);
      });

      it('should have the property deltaTransferOut (base name: "deltaTransferOut")', function() {
        // TODO: update the code to test the property deltaTransferOut
        expect(instance).to.have.property('deltaTransferOut');
        // expect(instance.deltaTransferOut).to.be(expectedValueLiteral);
      });

      it('should have the property deltaAmount (base name: "deltaAmount")', function() {
        // TODO: update the code to test the property deltaAmount
        expect(instance).to.have.property('deltaAmount');
        // expect(instance.deltaAmount).to.be(expectedValueLiteral);
      });

      it('should have the property deposited (base name: "deposited")', function() {
        // TODO: update the code to test the property deposited
        expect(instance).to.have.property('deposited');
        // expect(instance.deposited).to.be(expectedValueLiteral);
      });

      it('should have the property withdrawn (base name: "withdrawn")', function() {
        // TODO: update the code to test the property withdrawn
        expect(instance).to.have.property('withdrawn');
        // expect(instance.withdrawn).to.be(expectedValueLiteral);
      });

      it('should have the property transferIn (base name: "transferIn")', function() {
        // TODO: update the code to test the property transferIn
        expect(instance).to.have.property('transferIn');
        // expect(instance.transferIn).to.be(expectedValueLiteral);
      });

      it('should have the property transferOut (base name: "transferOut")', function() {
        // TODO: update the code to test the property transferOut
        expect(instance).to.have.property('transferOut');
        // expect(instance.transferOut).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property pendingCredit (base name: "pendingCredit")', function() {
        // TODO: update the code to test the property pendingCredit
        expect(instance).to.have.property('pendingCredit');
        // expect(instance.pendingCredit).to.be(expectedValueLiteral);
      });

      it('should have the property pendingDebit (base name: "pendingDebit")', function() {
        // TODO: update the code to test the property pendingDebit
        expect(instance).to.have.property('pendingDebit');
        // expect(instance.pendingDebit).to.be(expectedValueLiteral);
      });

      it('should have the property confirmedDebit (base name: "confirmedDebit")', function() {
        // TODO: update the code to test the property confirmedDebit
        expect(instance).to.have.property('confirmedDebit');
        // expect(instance.confirmedDebit).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property addr (base name: "addr")', function() {
        // TODO: update the code to test the property addr
        expect(instance).to.have.property('addr');
        // expect(instance.addr).to.be(expectedValueLiteral);
      });

      it('should have the property script (base name: "script")', function() {
        // TODO: update the code to test the property script
        expect(instance).to.have.property('script');
        // expect(instance.script).to.be(expectedValueLiteral);
      });

      it('should have the property withdrawalLock (base name: "withdrawalLock")', function() {
        // TODO: update the code to test the property withdrawalLock
        expect(instance).to.have.property('withdrawalLock');
        // expect(instance.withdrawalLock).to.be(expectedValueLiteral);
      });

    });
  });

}));
