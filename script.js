// If first element is Capatalized, then ok
// if there is space, next letter must be capatalized

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function capitalization(some_string){
    const myArray = some_string.split('');
    const newArray = [];
    let prevSpace = false;
    let currentLetter = "";

    for (let i=0; i < myArray.length; i++){
        currentLetter = myArray[i];

        if (prevSpace) {
            newArray.push(myArray[i].toUpperCase());
            prevSpace = false;
        } else {
            newArray.push(myArray[i]);
        }

        if (myArray[i] == ' ') {
            prevSpace = true;
        }
 
        return newArray.join();
    }

}

capitalization ('How can mirrors be real if our eyes aren\'t real');