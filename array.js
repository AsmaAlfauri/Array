console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ] 

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

var arr1 = [1, 7, 9, 45]
var arr2 = ["Str", "alex", "moh"]
var arr3 = ['the', 'fox', 'over', 'lazy', 'dog']
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// "Tomamto" ==> 0
//"Banana" ==> 1
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var foodArray = ["kabseh", "shawerma", "kabab", "sea food", "dawali"];
var sportArray = ["football", "basketball", "swimming"];
var movieArry = ["the revenant", "the avengers", "gone girl", "split"]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(x) {

    return x[0]
}
console.log(firstOfArray(["t", "u", "g", "x"]))
console.log(firstOfArray([1, 4, 5]))
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(x) {
    var y = x.length - 1
    return x[y]

}
console.log(lastOfArray(["t", "u", "g", "x"]))
console.log(lastOfArray([1, 4, 5]))



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9]

function removeItems(arr, item) {
    for (var i = 0; i < item; i++) {
        arr.shift();
    }
}

removeItems(array, 3);

array.push(10)
array.unshift(1, 3, 4, 6, 8)

console.log(array)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, "ahmad", 3.5];
array2.push(2, -3, 5, 17)
array2.pop()
array2.shift()
array2.unshift(1, 3, 6, 7)
console.log(array2)
array2[5][2] // call m letter 

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(y) {
    var yLength = y.length
    var yMiddle = yLength / 2
    var yMiddleOdd = yMiddle - 0.5
    var yMiddleEven = yMiddle - 1
    if ((yLength % 2) !== 0) {
        return y[yMiddleOdd]
    }
    return y[yMiddleEven] + ' and ' + y[yMiddle]
}
console.log(middleOfArray([1, 4, 3]))
console.log(middleOfArray(["t", "u", "g", "x"]))
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra'
animals[1] = 'elephant'
animals.pop()
console.log(animals)


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(ar, in1) {
    return ar[in1]
}
var nums = [1, 2, 3, 8, 9]
console.log(indexOfArray(nums, 1))





/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will /
/cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
//first way to call function
// function arrayExceptLast (arrays){
// arrays.pop()
// return console.log(arrays)
// }
// arrayExceptLast([1,2,3,8,9])

function arrayExceptLast(arrays) {
    arrays.pop()
    return arrays
}
console.log(arrayExceptLast([1, 2, 3, 8, 9]))


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to 
//the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arrays, add) {
    arrays.push(add)
    return arrays
}
var nums = [1, 2, 3, 8, 9]
console.log(addToEnd(nums, 53))

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arrays) {
    var arraysLength = arrays.length
    var sum = 0
    for (x = 0; x < arraysLength; x++) {
        sum = sum + arrays[x]
    }
    return sum
}
var nums = [1, 2, 3, 8, 9]
console.log(sumArray(nums))

function sumArray1(arrays) {
    var arraysLength = arrays.length
    var sum = 0
    var x = 0
    while (x < arraysLength) {
        sum = sum + arrays[x]
        x += 1
    }
    return sum
}
console.log(sumArray1(nums))

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/