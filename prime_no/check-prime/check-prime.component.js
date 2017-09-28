'use strict';

/**
 * Register 'checkPrime' component along with its associated
 * template and controller
 */
angular.
    module('checkPrime').
    component('checkPrime', {
        templateUrl: 'check-prime/check-prime.template.html',
        controller: function CheckPrimeController() {
            let self = this;
            let flag;                             // false -> not prime, true -> prime            
            
            self.answer = "Give some input !";
            self.indicator = "answer";            // binded to ngClass directive

            self.check = (event) => {
                if (self.query != null) {
                    if(self.query > 1) {
                        flag = isPrime(self.query);
                        self.answer = flag ? `${self.query} is a Prime Number` : `${self.query} is not a Prime Number`;
                        self.indicator = flag ? "answer answer-prime" : "answer answer-notprime";
                    } else {
                        self.answer = `${self.query} is not a Prime Number`;
                        self.indicator = "answer answer-notprime"                        
                    }    
                } else {
                    self.answer = "Give some input !";
                    self.indicator = "answer";                    
                }
            };
        }
    });