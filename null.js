// Значение null представляет отсутствие какого-либо объектного значения. В JavaScript, null является примитивом, и в контексте логических операций, рассматривается как ложное (falsy).
function nul(text){
    for(const i = 0; i < text.length; i++){
    if(typeof text[i] === "string"){
      return true
    }
    }
    return null
}
console.log(nul(99))