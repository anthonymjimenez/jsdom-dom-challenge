let timer = document.getElementById("counter")
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let heartBtn = document.getElementById("heart")
let likes = document.querySelector('.likes')
let counter = 0; 
let timeCont = setInterval(changeTimer, 1000);
let pause = document.getElementById("pause")
let comment = document.getElementById("comment-form")
let lists = document.getElementById('list')

function changeTimer (val = '+') { 
    (val === '-') ? counter -= 1 : counter += 1;
    timer.innerText = `${counter}`
}
function changeState(string) {
    pause.innerText = string;
    plus.disabled = !plus.disabled
    minus.disabled = !minus.disabled
    heartBtn.disabled =!heartBtn.disabled
}

function createNode(elmType, stringContent) {
    let node = document.createElement(elmType)
    node.textContent = stringContent
    return node
}

function createLikeNode() {
    let node = createNode("LI" , `This number: ${counter} Has 1 Like`);
    node.id = counter
    likes.appendChild(node) 
}


minus.addEventListener("click", function(){
    changeTimer('-')
})

plus.addEventListener("click", function(){
    changeTimer()
})



heartBtn.addEventListener("click", function(){
    let x = document.getElementById(`${counter}`)
    if(x) {
        x.innerText = `This number: ${counter} Has ${parseInt(x.innerText.split(' ')[4]) + 1} Likes`;
    } else {
    createLikeNode()
    }
})

pause.addEventListener("click", function(){
    if(pause.innerText == 'resume') {
        timeCont = setInterval(changeTimer, 1000);
        changeState('pause')
    } else { 
        clearInterval(timeCont)
        changeState('resume')
    }
})

comment.addEventListener("submit", function(event){
    event.preventDefault()
    let node = createNode("p", document.getElementById("comment-input").value)
    lists.appendChild(node)
})





