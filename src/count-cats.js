

const backyard = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];


function countCats (){
    let cat = '^^';
    let catsArr =[];
    let Number;

    let single= backyard.flat();
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
countCats(backyard);