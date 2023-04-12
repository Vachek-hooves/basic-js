const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};

const backyard = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];


function countCats (){
    let cat = '^^';
    let catsArr =[];
    let number;

    let single= backyard.flat();
    console.log(single)

    for (let i=0; i<single.length; i++){
        let catPart=single[i];
        // console.log(catPart)
        if(catPart===cat){
          catsArr.push(catPart);

          
        }
    }
    number=catsArr.length
    alert(number)
};
countCats(backyard);