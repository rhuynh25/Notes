//write a function called reverseStringInPlace that takes a string as input and reverses it inplace, 
//without using any built in js methods. 
//The function should modify the original string directly. for example, 
//if the input string is "hello", the function should modify it to become "olleh"

function reverseStringInPlace(s) {
    let newS = '';
    for (let i = s.length - 1; i >= 0; i--) {
        newS += s[i];
    }
    s = newS;
    return s;
}

console.log(reverseStringInPlace('hello'));

//implement a function called isValidPalindrome that checks whether a given string is a valid palindrome. 
//the function should consider only alphanumeric characters and ignore cases. 
//It should return true if the string is a valid palindrome, and false otherwise. 
//For example, given the  input string "A man, a plan, a canal: Panama", the function should return true.

function isValidPalindrome(word) {
    //replace uppercase with lowercase and take out non-alphanumeric characters
    const lowerCaseAlphanumericWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    //initialize left pointer to far-left character of string
    let left = 0;
    //initialize right pointer to far-right character of string
    let right = lowerCaseAlphanumericWord.length - 1;

    //use a loop to check if left and right pointers are equal
    for (let i = 0; i < lowerCaseAlphanumericWord.length / 2; i++) {
        //check if left and right pointer equal same character
        if (lowerCaseAlphanumericWord[left] === lowerCaseAlphanumericWord[right]) {
            //check if left and right pointers equal the same index, return true if true
            if (left === right) {
                return true;
            }
            //else increment left and decrement right
            left++;
            right--;
        } else {
            //return false if previous check fails
            return false;
        }
    }
    //return false by default
    return false;
}