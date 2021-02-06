/** 
 1.Map():
 This method creates a new array with the results of calling a provided function on every element in this array.
 */

const Array1 = [1, 2, 3, 4, 5, 6];

const Mapped = Array1.map((element) => element * 2);

console.log(Mapped); /**[2, 4, 6, 8, 10, 12] */

/** 
 2. filter( )
This method creates a new array with only elements that passes the condition inside the provided function.
 */

const Filtered = Array1.filter((element) => element === 1 || element === 4);

console.log(Filtered); /** [1,4] */

/**
 3. sort( )
This method is used to arrange/sort array’s elements either in ascending or descending order.
 */

const Array2 = ["f", "a", "c", "v", "z"];

// sorting decending order

const decendOrder = Array1.sort((a, b) => {
  // console.log(a, b);
  return a > b ? -1 : 1;
});

console.log(decendOrder); /** [6, 5, 4, 3, 2, 1] */

// sorting ascending order

const ascendingOrder = Array2.sort((a, b) => (a > b ? 1 : -1));

console.log(ascendingOrder); /** ["a", "c", "f", "v", "z"] */

/**
 4. forEach( )
This method helps to loop over array by executing a provided callback function for each element in an array.
 */

Array1.forEach((element) => {
  console.log(element);
});
