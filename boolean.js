function nul(text){
    for(const i = 0; i < text.length; i++){
    if(typeof text[i] === "string"){
      return true
    }
    }
    return false
}
console.log(nul(99))

const iAmAStudent = true
const isSpring = false
const javaSciptIsBeauty = true
const constCanBeChanged = false
const letCanBeChanged = true
const nullIsADataType = true
const nullIsAValue = false
const iAmFromGrozny = true