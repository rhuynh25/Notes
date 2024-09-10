// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as a vowel here.
// Sample Data and output:
// Example string: 'The quick brown fox'


// Step 1 Creating a function with parameter string 
// Step 2 Create a variable holding vowels, creating a variable set to 0
// Step 3 For loop for finding vowel 
// Step 4 If statement 
// Step 5 console.log

function vowel_count (str1) {
    let vow_list = "aeiouAEIOU";
    let vCount = 0;

    for(x = 0; x < str1.length ; x++) {
        if(vow_list.indexOf(str1[x]) !== - 1) {
            vCount += 1;
        }
    }
    return vCount;
}

console.log(vowel_count("The quick brown fox"));

