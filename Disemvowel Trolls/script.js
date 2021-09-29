function noVowel(someString) {

    const vowel = ['a','A','e','E','i','I','o','O','u','U'];
    let newString = '';
    let noVowell = false;

    for (let i = 0; i < someString.length; i++) {
        for (let j = 0; j < vowel.length; j++) {

            if (someString[i] != vowel[j]) {
                                
                noVowel = true;
            } else {

                noVowel = false;
                break;
            }
        }

        if (noVowel) {
            newString = newString + someString[i]; 
        }
        

    }
    console.log(newString);
    return newString;

}

noVowel('This website is for losers LOL!');



// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// ("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")