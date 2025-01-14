const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // let sum=0;

  //   for (let i=0; i<matrix.length; i++){
  //     for( let t=0; t<matrix[i].length; t++){
  //       console.log(matrix[i][t])
  //         sum+=matrix[i][t]
  //       }
  //     }
  //   return sum;
}

module.exports = {
  getMatrixElementsSum
};
