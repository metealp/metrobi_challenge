//callback func that will be used in setTimeout func
//returns an element that is in specified array at specified index
const elm = (arr, i) => {
  return console.log(arr[i])
}

//takes an array as arg
const interval_ans = (arr) => {
  for (let i = 0; i< arr.length;i++){
    //setting setTimeout func for each element in array
    //will print element's itself at the time that is exponential repr of index 
    setTimeout(()=>(elm(arr, i)), (2**i)*1000);
  }
}

// const ex_arr = ["a", "b", "c", "d"]

// interval_ans(ex_arr)
