const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

    if(members==null){
      return false
    }
    string=[];
    crew=[];
    

      for (let i = 0; i < members.length; i++) {
        
        Hero=members[i]

        itemIndex =members.indexOf(Hero)
        if(typeof(Hero)=='string'){
          Hero=Hero.trim()
          string.push((Hero[0]).toUpperCase())
        }
    }
    console.log(string)
    crew=string.map(letter=>letter[0]).sort().join('');
    console.log(crew)
    return crew;
}

module.exports = {
  createDreamTeam
};
