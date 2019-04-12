// add solution here
function theBeetlesPlay(musicians,instruments){
  var combination = [];
  for(let i=0, i<musicians.length; i++){
    combination[i]=musicians[i].concat(" plays ").concat(instruments[i])
  }
  return combination
}

function johnLennonFacts(facts){
  for(let i=0; i<facts.length; i++){
    facts[i]=facts[i].concat("!!!")
  }
  return facts;
}