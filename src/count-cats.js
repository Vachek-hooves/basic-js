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
function countCats(arr) {

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
      Number= catsArr.length
      return Number;
}

module.exports = {
  countCats
};



