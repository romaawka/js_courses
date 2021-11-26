function question() {
    let a = confirm('Yes?No?')
    if(a){
        sayYes()
    }else{
        sayNo()
    }
}
function sayYes(){
    console.log('yes')
}
function sayNo(){
    console.log('no')
}
question()

let questionExp = function() {
    let a = confirm('Yes?No?')
    if(a){
        sayYesEx()
    }else{
        sayNoEx()
    }
}
let sayYesEx = function(){
    console.log('yesEx')
}
let sayNoEx =  function(){
    console.log('noEx')
}
questionExp()