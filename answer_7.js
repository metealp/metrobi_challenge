//source: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
//method 2 is obtained due to time complexity, O(N*W) where n is number of carrotTypes and W is capacity

const getMaxValue = (carrotTypes, capacity) =>{
  //weighs and values of carrots will be in separate arrays
  const vals  = [];
  const weis = [];
  const len = carrotTypes.length


  //extracted information to related arrays
  for (let i in carrotTypes){
    vals.push(carrotTypes[i].price);
    weis.push(carrotTypes[i].kg);
  };

  //initialized table
  const grid = [];
  for (let i=0; i<len+1; i++){
    grid.push([])
    for (let j=0; j < capacity+1; j++){
      grid[i].push(0);
    }
  }

  for(let i = 0; i<len+1;i++){
    for (let j=0; j< capacity+1;j++){
      if(i===0 || j === 0){
        grid[i][j] = 0;
      }
      else if (weis[i-1] <=j) {
        grid[i][j] = Math.max(vals[i-1] + grid[i-1][j-weis[i-1]], grid[i-1][j])
      }
      else {
        grid[i][j] = grid[i-1][j]
      }
    }
  }

    console.log(grid[len][capacity])
}


// const carrotTypes = [{kg:5, price:100}, { kg:7, price:150 }, { kg:3, price:70 }]
// const carrotTypes = [{kg:1, price:10}, { kg:2, price:15 }, { kg:3, price:40 }]
//
// getMaxValue(carrotTypes, 6)
