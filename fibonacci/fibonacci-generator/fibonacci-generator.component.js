'use strict';

/**
 * Register 'fibonacciGenerator' component along with its associated
 * template and controller
 */
angular.
    module('fibonacciGenerator').
    component('fibonacciGenerator', {
        templateUrl: 'fibonacci-generator/fibonacci-generator.template.html',
        controller: function fibonacciGeneratorController() {
            let self = this;
            
            self.sequence = [];

            self.generate = (event) => {
                if (self.query > 0) {
                    self.sequence = generateFib(self.query);
                    console.log(self.query, self.sequence);        
                } else if (self.query == 0) {
                    self.sequence = [0];
                } else {
                    self.sequence = [];
                }
            };
        }
    });