
const matrix = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];

function countCats (arr){
  let cat = '^^';
  let catsArr =[];
  let Number;

  let single= arr.flat();
  console.log(single)

  for (let i=0; i<single.length; i++){
      let catPart=single[i];
      // console.log(catPart)
      if(catPart===cat){
        catsArr.push(catPart);

        
      }
  }
  Number=catsArr.length
  alert(Number)
};
countCats(matrix);
