'use strict';

/**
 * Register 'checkPalindrome' component along with its associated
 * template and controller
 */
angular.
    module('checkPalindrome').
    component('checkPalindrome', {
        templateUrl: 'check-palindrome/check-palindrome.template.html',
        controller: ['$http',                          // use angular's built-in $http service for ajax
            function CheckPalindromeController($http) {
                let self = this;
                let flag;                             // 0 -> not palindrome, 1 -> palindrome            
            
                self.answer = "Give some input !";
                self.indicator = "answer";            // binded to ngClass directive
                self.check = (event) => {
                    if (self.query !== "") {
                        $http.get(`check_palindrome.php?q=${self.query}`).
                        then((response) => {
                            flag = parseInt(response.data);
                            self.answer = flag ? "Given string is a Palindrome" : "Given string is not a Palindrome";
                            self.indicator = flag ? "answer answer-palindrome" : "answer answer-notpalindrome";
                        }).catch((err) => {
                            alert("Request failed, see log for more information !");
                            console.log(err);
                        });    
                    } else {
                        self.answer = "Give some input !";
                        self.indicator = "answer";
                    }
                };
            }
        ]
    });