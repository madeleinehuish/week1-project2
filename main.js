// Array for Days!!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!

// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!

// ==========================================================================

// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.
var maddieArray = [];
maddieArray = ['coffee', 'tea', 'kombucha', 'toast'];
console.log("Question1"); console.log(maddieArray);

// 2. Add an additional item to the beginning of your array.
maddieArray.unshift('chia snacks');
console.log('Question 2 ');
console.log(maddieArray);

// 3. Remove the second and third items in your array.
maddieArray.splice(2,2);
console.log('Question 3 ');
console.log(maddieArray);

// 4. Add two new items after the second item.
console.log('Question 4');
maddieArray.splice(2,0,'juice','almond milk');
console.log(maddieArray);

// 5. Write 'The current length of the array is....' using the .length method
console.log('Question 5');
console.log('The current length of the array is ', maddieArray.length)

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things.splice(2,1,'keyboard');
console.log('Question 6');
console.log(things);

// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)
var combinedThings = things.join(" and ");
console.log('Question 7');
console.log(combinedThings);

// 8. Declare a variable called lastItem using .pop() on the things array.
//    Add two new items to lastItem, one at the beginning and one at the end.
console.log('Question 8');
var lastItem = [things.pop()];
lastItem.push('computer');
lastItem.unshift('phone');
console.log(lastItem);

// 9. Create a new Array called itemLast.
//    The items should be the same as lastItem, only in reverse order.
console.log('Question 9');
var itemLast = lastItem.reverse();
console.log (itemLast);

// 10. Remove the first item of itemLast.
console.log('Question 10');
itemLast.shift();
console.log(itemLast);


// 11. Remove all items from itemLast.
console.log('Question 11');
itemLast.length = 0;
console.log(itemLast);

// 12. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
console.log('Question 12')
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = firstArray + "," + secondArray;
console.log(numberPets);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
console.log('Question 13');
people.splice(6, 2, 'Joe', 'Karen');
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'
console.log('Question 14');
people.shift();
people.splice(1,1);
people.splice(2,3);
console.log(people);

// 15. Add a new person to the beginning of the Array
console.log('Question 15');
people.unshift('Harry');
console.log(people);

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
console.log('Question 16');
people.sort();
console.log (people);


// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

console.log('Question 17');
var array4 = [array1, array2, array3];
console.log(array4);

// Goal:
//var array4 = [
//                ["Fido", "Spot", "Rex", "Sparky"],
//                ["Bulldog", "Lab", "Dalmation", "Beagle"],
//                ["White", "Black", "Spotted", "Tri-color"]
//              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.
console.log('Question 18');
array4[0].pop();
array4[2].shift();
console.log(array4);

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
sortingNumbers.sort();
// If it doesn't sort as expected, explain why.

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
// Goal:
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
