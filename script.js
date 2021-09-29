// If first element is Capatalized, then ok
// if there is space, next letter must be capatalized

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function capitalization(some_string) {
    // const myArray = some_string.split('');   //Blanes on .split() function
    // const newArray = [];
    // let prevSpace = false;
    // let currentLetter = "";

    // for (let i=0; i < myArray.length; i++){
    //     currentLetter = myArray[i];

    //     if (prevSpace) {
    //         newArray.push(myArray[i].toUpperCase());
    //         prevSpace = false;
    //     } else {
    //         newArray.push(myArray[i]);
    //     }

    //     if (myArray[i] == ' ') {
    //         prevSpace = true;
    //     }

    //     return newArray.join();
    // }

    //--- Code Bellow is working, but test throuhs out "TypeError: Cannot read property 'length' of undefined"

    let firstLetter = '';
    let prevSpace = false;
    let newString = '';

    for (let i = 0; i < some_string.length; i++) {

        if (prevSpace) {
            firstLetter = some_string[i].toUpperCase();
            newString = newString + firstLetter;
            prevSpace = false;

        } else {
            firstLetter = some_string[i];
            newString = newString + firstLetter;
        }

        if (firstLetter == ' ') {
            prevSpace = true;
        } 

        // console.log(newString);
    }

    console.log(newString);
    // return newString;

}

capitalization('How can mirrors be real if our eyes aren\'t real');