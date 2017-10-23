

// 1. Write a function which takes an array of numbers, and returns the largest number in that array.

var myNumbersArray = [43, 54, 1, 5869, 53, 2, 7];

function largestNum (arrayOfNum) {
    var largest;
    for(var i = 0; i < arrayOfNum.length; i++){
        if(typeof largest !== 'number'){
            largest = arrayOfNum[i];
        }
        if( arrayOfNum[i] > largest){
            largest = arrayOfNum[i];
        }
    }
    return largest;
}

//console.log(largestNum(myNumbersArray));


/*
2. Write a function which, given a year as a number, returns whether that number is a leap year.

2000 -> true
1901 -> false
2016 -> true
*/

function isLeapYear(year) {
    if((year % 4) === 0){
        return true;
    } else {
        return false;
    }
}

//console.log(isLeapYear(2001));


/*
3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/

var arrayOfInts = [1, 2, 3, 4, 5, 4, 17, 19, 1];

function returnFirst(intsArray) {
    for(var i = 0; i < intsArray.length; i++){
        if(intsArray[i] !== (i + 1)){
            return i + 1;
        }
    }
}

//console.log(returnFirst(arrayOfInts));



/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/

var testArray =[1,4,4,4,2,2,4,4,4]; 

function removeDuplicate(array){

    for(var i = 0; i < array.length; i++){
        for(var j = i + 1; j < array.length; j++){

            if(array[i] === array[j]){
                array.splice(j,1);
                j--;
            }

        }
    }
    return array;
}

//console.log(removeDuplicate(testArray));



/*
5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

"The quick brown fox" -> "Hetay uickqay rownbay oxfay".
*/

var testString = 'The quick brown fox';

function pigLatin(sentence){
    var wordArray = sentence.split(" ");
    for(var i = 0; i < wordArray.length; i++){
        tempString = `${wordArray[i].substr(1)}`;
        wordArray[i] = `${tempString}${wordArray[i][0]}ay`;
    }
    return wordArray;
}

//console.log(pigLatin(testString));



/*
6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/
var testArr1 = ["a","d","c"];
var testArr2 = ["a","c","b"];

function compArrays(arr1,arr2){

    var newarr1 = arr1.sort();
    var newarr2 = arr2.sort();
    if(newarr1.length !== newarr2.length){
        return false;
    }
    for( var i = 0; i < newarr1.length; i++){
        if(newarr1[i] !== newarr2[i]){
            return false;
        }
    }
    return true;
}

//console.log(compArrays(testArr1,testArr2));


/*

7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/
var testArr = [1,5,7,3,1,5,7];

function newCutOffArr(array,cutoffValue){
    for(var i = 0; i < array.length; i++){
        if(array[i] > cutoffValue){
            array[i] = cutoffValue;
        }
    }
    return array;
}

//console.log(newCutOffArr(testArr,3));


/*
8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

-> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
-> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
*/

function randomNumbers(){

    var resultArr = [];


    while ( resultArr.length < 10 ){
        var number = Math.floor((Math.random() * 10)+1);
        var qualified = true;
        for(var i = 0; i < resultArr.length; i++){
            if(resultArr[i] === number){
                qualified = false;
            }
        }
        if( qualified === true){
            resultArr.push(number);
        }


    }
    return resultArr;
}
//console.log(randomNumbers());




/*
9. Write a function which takes two sorted lists and merges them into a new sorted list.

[1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
[], [] -> []
[-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
*/
var list1 = [-1,0,1];
var list2 = [-2,2];

function compareNumbers(a, b) {
    return a - b;
}

function merge(list1,list2) {
    for(var i = 0; i < list1.length; i++){
        list2.push(list1[i]);
    }
    list2.sort(compareNumbers);
    return list2;
}

//console.log(merge(list1,list2));



/*
10. Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. This function does not need to return a value. 

```javascript
var numbers = ['four', 'eleven']
var animals = ['cat', 'bat', 'dolphin']
arrayTransfer(numbers, animals)
console.log(numbers) // []
console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']

```
*/

function arrayTransfer (array1,array2){
    var array1Length = array1.length;
    var array2Length = array2.length;
    if(array1.length > array2.length){
        for(var i = 0; i < array2.length; i++){
            array1.push(array2[i]);
        }
        for(var i = 0; i < array2Length; i++){
            array2.pop();
        }
    }
    if(array2.length > array1.length){
        for(var i = 0; i < array1.length; i++){
            array2.push(array1[i]);
        }
        for(var i = 0; i < array1Length; i++){
            array1.pop();
        }
    }
}

var numbers = ['four', 'eleven'];
var animals = ['cat', 'bat', 'dolphin'];
arrayTransfer(numbers, animals);
//console.log(numbers); // []
//console.log(animals); // ['cat', 'bat', 'dolphin', 'four', 'eleven']





/*
11. Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`. 
*/

//var testString = "Hello";
//testString[0] = "B";
//console.log(testString[0]);

function modifiedRandomNum(){
    var randomNum = Math.random();
    var randomNumString = '' + randomNum;
    for(var i = 0; i < randomNumString.length; i++){
        if(randomNumString[i] === "3"){
            randomNumString = randomNumString.substr(0,i) + "8" + randomNumString.substr(i + 1);
            console.log("3 changed to 8");
        }
        if(randomNumString[i] === "7"){
            randomNumString = randomNumString.substr(0,i) + "1" + randomNumString.substr(i + 1);
            console.log("7 changed to 1");
        }
    }
    //if(typeof randomNumString === 'string'){
    //    return true;
    //}
    //else{
    //    return false;
    //}

    var newNum = Number(randomNumString);
    console.log(randomNum);
    return randomNumString;
}

//console.log(modifiedRandomNum());


/*
12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

'I ate toast for breakfast' -> 'breakfast'

*/
function longestWord(sentence){
    var sentArr = sentence.split(' ');
    var longestWord = '';
    for(var i = 0; i < sentArr.length; i++){

        if( sentArr[i].length > longestWord.length){
            longestWord = sentArr[i];
        }
    }
    return longestWord;
}
var sentence = 'I ate toast for breakfast';

//console.log(longestWord(sentence));

/*
13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that.

'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'

*/

function capitalize(sentence){
    var sentArr = sentence.split(' ');
    for(var i =0; i < sentArr.length; i++){
        sentArr[i] = sentArr[i][0].toUpperCase()+ sentArr[i].substr(1);
    }
    var result = sentArr.join(" ");
    return result;
}
var sentence = 'I ate toast for breakfast';
//console.log(capitalize(sentence));


/*
14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
'1998/01/24', '1999/01/25' -> 366
*/
var testString1 = '2015/01/15';
var testString2 = '2017/11/23';

console.log(numDays(testString1,testString2));

function numDays(testString1, testString2){

    var months = [{
        name: 'January',
        days: 31
    },{
        name: 'February',
        days: 28
    },{
        name: 'March',
        days: 31
    },{
        name: 'April',
        days: 30
    },{
        name: 'May',
        days: 31
    },{
        name: 'June',
        days: 30
    },{
        name: 'July',
        days: 31
    },{
        name: 'August',
        days: 31
    },{
        name: 'September',
        days: 30
    },{
        name: 'October',
        days: 31
    },{
        name: 'November',
        days: 30
    },{
        name: 'December',
        days: 31
    }];

    var totalDays = 0;
    var earlierDate;
    var laterDate;

    // How many years apart the dates are
    var yearsDiff = Number(testString1.substr(0,4)) - Number(testString2.substr(0,4));

    // How many months apart the dates are excluding years
    var monthDiff = Number(testString1.substr(5,7)) - Number(testString2.substr(5,2));

    // How many days apart the dates are excluding years and months
    var dayDiff = Number(testString1.substr(8,10)) - Number(testString2.substr(8,2));


    // Determining which date is earlier and which one is later

    if(yearsDiff < 0){
        earlierDate = testString1;
        laterDate = testString2;

    } else if (yearsDiff > 0){
        earlierDate = testString2;
        laterDate = testString1;

    } else if (yearsDiff === 0){

        if(monthDiff < 0 ) {
           earlierDate = testString1;
            laterDate = testString2;

        } else if (monthDiff > 0){
            earlierDate = testString2;
            laterDate = testString1;

        } else if (monthDiff === 0){

            if(dayDiff < 0){
                earlierDate = testString1;
                laterDate = testString2;

            } else if (dayDiff > 0){
                earlierDate = testString2;
                laterDate = testString1;

            } else if (dayDiff === 0){
                totalDays = 0;
                return totalDays;
            }
        }
    }

    // current year - starting with 'earlierDate' year
    var currentYear = Number(earlierDate.substr(0,4));

    // ending year - 'lateDate' year
    var endingYear = Number(laterDate.substr(0,4));

    var currentMonth = Number(earlierDate.substr(5,2));

    var endingMonth = Number(laterDate.substr(5,2));

    var currentDay = Number(earlierDate.substr(8,2));

    var endingDay = Number(laterDate.substr(8,2));


    // *** If dates are multiple years apart *** //

    while((currentYear + 1) < endingYear){
        //Accounting for leap year
        if((((currentYear) % 4) === 0) && (currentMonth <= 2)){
            totalDays++;
        }
        totalDays += 365;
        currentYear++;
    }

    // After this, current year and ending year will have a difference of 1 - could be 2 situations: More than a whole year or less than a whole year. Ex: 1998/01/20, 1999/04/25 ---> more than a full year, OR 1998/11/20, 1999/04/25 ---> less than a full year, ~5 months

    // scenario where dates are still more than one whole year apart - also could be a leap year 
    if( currentMonth < endingMonth){
        //Accounting for possible leap year
        if(((currentYear % 4) === 0) && (currentMonth <= 2)){
            totalDays++;
        }
        totalDays += 365;
        currentYear++;
    }

    // Get to the end of the current month and add days to totalDays, then update currentMonth 
    var addDays1 = (months[(currentMonth -1)].days) - currentDay;
    totalDays += addDays1;

    if(currentMonth === 12){
        currentMonth = 1;
        currentYear++;
    } else {
        currentMonth ++;
    }



    // Find number of days between full months in between dates and add days to totalDays
    while (currentMonth !== endingMonth){
        if(currentMonth === 12){
            totalDays += 31;
            currentMonth = 1;

            //Accounting for possible leap year 
        } else if ((currentMonth === 2) && ((currentYear % 4) === 0)){
            totalDays += 29;
            currentMonth++;

        } else {
            totalDays += months[currentMonth -1].days;
            currentMonth ++;
        }
    }


    //Now months will be the same, now just add remaining days
    totalDays += endingDay;

    return totalDays;
}

//console.log(numDays(testString1,testString2));


/*
15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:

```javascript
var seven = add(5,2) // returns 7
seven = add(5)(2) // also returns 7
```
*/

function add(number1, number2){
    var result = number1 + number2;

    return result;
}

function add(x){
    return function(y){
        return x + y;
    };
}
//console.log(add(5)(2));


/*
16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false.
*/

function isWholeNum(number){
    if((number*(-1)) < 0){
        if((number % 1) === 0){
            return true;
        }
    }
    return false;
}

//console.log(isWholeNum(5.11))


// 17. Write a function which returns a random integer from 1 to 10.

function randomNum() {
    var result = Math.floor(Math.random()*10 +1);
    return result;
}

//console.log(randomNum());
