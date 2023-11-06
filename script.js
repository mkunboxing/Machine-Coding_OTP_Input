const inputs = document.querySelector('.inputs')
console.log(inputs)

//event bubbling
//move focus to next element sibling
inputs.addEventListener('input',function(e){
    let node=e.target
    if (isNaN(node.value)==false){
        let target = e.target.nextElementSibling
        if (target){
            target.focus()
            }
    }
    else{
        node.value=""
        return
    }
})

//move focus to previous element sibling
inputs.addEventListener('keyup',function(e){
    if(e.key=='Backspace'||e.key=='Delete'){
        e.target.value =""
        let target=e.target.previousElementSibling
        if(target){
            target.focus()
        }
    }
})

