function spinAround(turns) {
 let sum = 0;
 let total = 0;
    
 for(let i = 0; i < turns.length; i++) {
      if(turns[i] === 'left') {
          sum += 90
      } else {
          sum -= 90
      }
  }
   
   total = Math.floor(Math.abs(sum / 360))
    
  return total;
}
