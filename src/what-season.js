const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date===null || date===undefined){
    console.log('Unable to determine the time of year!')
    return('Unable to determine the time of year!')
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0)
    throw new Error("Invalid date!");


let checkDate=date.getMonth()
console.log(checkDate)

console.log(date.getMonth())

if(checkDate>=2 && checkDate<5){
    return("spring");
}else if(checkDate>=5 && checkDate<8){
  return('summer');
}else if(checkDate>=8 && checkDate<11){
  return('fall');
}else{
  return('winter');
}
}

module.exports = {
  getSeason
};
