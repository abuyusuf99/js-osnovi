function nul(text){
    for(const i = 0; i < text.length; i++){
    if(typeof text[i] === "string"){
      return true
    }
    }
    return null
}
console.log(nul[99])