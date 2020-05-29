//source: https://medium.com/@khopsickle/2-eggs-and-100-floors-a032beb77aaa
const num_floor = 100;
//initial floor will be x(x + 1)/2 = 100
const initial_floor = (floor_num)=>{
  return Math.ceil((-1+Math.sqrt(1+8*floor_num))/2)
}
const two_egg = (floor_num, break_floor) => {
  const first_try = initial_floor(floor_num);
  //try tracker
  let number_of_try = 0
  //traded complexity with memory :>
  let next_increment = first_try;
  //first_break_story is important forsake of second egg
  let first_break_story = 0;
  //let waste first egg with binary search
  //loop iterated 1 less in each iteration
  for (let i=first_try; i<floor_num; i+=next_increment){
    if(i<break_floor && first_break_story===0){
      next_increment--;
      number_of_try++;
    } else {
      first_break = 1;
      first_break_story = i;
      number_of_try++;
      break;
    }
  }
  console.log("First egg is broken at " + String(first_break_story) +"th floor")
 //in second part, we check every floor one by one
 //started from previous successful drop
  for (let i = (first_break_story - next_increment); i<= first_break_story; i++){
    number_of_try++;
    if (i===break_floor){
      console.log("Ouch, Second egg is broken at "+ String(i) +"th floor");
      console.log("Egg breaker floor is obtained at " + String(number_of_try) +"th try")
      break;
    }
  }
}

two_egg(100, 69);
