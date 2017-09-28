/**
 * @name isPrime
 * @desc function to check if number is a prime number
 * @param {integer} n input integer
 * @return {boolean} 
 */
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return true;
}