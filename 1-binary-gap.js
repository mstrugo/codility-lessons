const solve = (numb) => {
  let quantity = 0;
  let longest = 0;
  let currLongest = 0;
  
  if ( numb > 0) {
    const bin = (numb).toString(2);

    for (let char in bin) {
      if ( bin.charAt(char) === '0' ) {
        quantity++;
        currLongest = quantity;
      } else {
        if (currLongest > longest) {
          longest = currLongest;
        }
        quantity = 0;
        currLongest = 0;
      }
      
    }
  }

  return longest;
}
