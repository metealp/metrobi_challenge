const duplicates = (arr) => {
  //sorting array in order to be able to check an item with next one in loop
  const sorted_arr = arr.sort();
  //empty array for results
  const results = [];

  //recursing till lengt of array-1 because of checking with further item
  for (let i = 0; i < sorted_arr.length-1; i++){
    if (sorted_arr[i+1] === sorted_arr[i]){
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

// var colors = ["red", "green", "blue", "green", "yellow", "grey", "grey"];
// var numbers = [1,2,3,4, 6, 2, 3, 8, 8, 9]
// console.log(duplicates(numbers))
