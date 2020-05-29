//braces arrays for both openings and closings
const openings = ["[", "{", "("];
const closings = ["]", "}", ")"];

//func that will take a string as arg
const proper_braces = (string)=>{

  //counter variables
  let num_openings = 0;
  let num_closings = 0;

  //splitting string to array
  const array_input = string.split("");

  //checking every element in array
  //if the element is inside openings, increases num_openings counter
  for (let i = 0; i < array_input.length; i++){
    if (openings.includes(array_input[i])){
      num_openings++;
    }
    else if (closings.includes(array_input[i])) {
      num_closings++;
    }
  }

  //checking for equality of braces
  //if every braces are closed properly it will return success message
  // otherwise, we both know what happens..
  if (num_closings == num_openings){
    return console.log("All braces closed properly")
  }
  else {
    return console.log("FATAL ERROR")
  }
}

proper_braces("{[((Hello( world))]}")
