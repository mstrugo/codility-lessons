const solution = (A) => {
  if (A.length > 1) {
    const numbs = A.slice().sort();
    let oddNumber = 0;
    let currNumb = 0;  
    let nextNumb = 0;
    let nextTwoNumb = 0;
    let posNumb = 0;
      
    for (let pos in numbs) {
      posNumb = parseInt(pos,10);
      currNumb = numbs[pos];
      nextNumb = numbs[posNumb + 1];
      nextTwoNumb = numbs[posNumb + 2];

      if (currNumb !== nextNumb && nextNumb !== nextTwoNumb ) {
        oddNumber = nextNumb;
        break;
      }
    }
    
    return oddNumber;
  }

  return A[0];
};
