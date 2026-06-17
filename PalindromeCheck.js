// PalindromeCheck.js


function isPalindrome(num) {

    let original = num;
    let reverse = 0;


    while(num > 0) {

        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);

    }


    return original === reverse;
}


let num1 = 121;
let num2 = 123;


if(isPalindrome(num1) && isPalindrome(num2)) {

    console.log("Both numbers are Palindromes");

}
else {

    console.log("Numbers are not Palindromes");

}