// want box  *****************

let want = document.querySelector('.want')
let firstinput = document.querySelector('.firstinput')
let firstinputBtn = document.querySelector('.firstinputBtn')


// *******************name string error ****************
let error = document.querySelector('.error')

let p1 = document.querySelector('.p-1')
let main = document.querySelector('.main')
let p2 = document.querySelector('.p-2')


// player one *********************************


let playerone = document.querySelector('.playerone')
let playeroneInput = document.querySelector('.playeroneInput')
let playeroneBtn = document.querySelector('.playeroneBtn')



// player two *********************************


let playertwo = document.querySelector('.playertwo')
let playertwoInput = document.querySelector('.playertwoInput')
let playertwoBtn = document.querySelector('.playertwoBtn')
let winnertwo = document.querySelector('.winner2')


let gameover = document.querySelector('.gameover')


let chances = document.querySelector('.chances')
let chance = 5


firstinputBtn.addEventListener('click', function(){
    if(firstinput.value == ''){
        console.log('ami kichu dei nai ');
        error.innerHTML = " Give your full name"
        error.style.display = 'block'
        
    } else{
        p1.style.display = 'block'
        main.style.display = 'none'
        playerone.innerHTML = firstinput.value
    }
})

playeroneBtn.addEventListener('click', function(){
    if (playeroneInput.value <1 || playeroneInput.value>20){
        console.log('okay cool')
    } else{
        if (playeroneInput.value - 20 ) {
            p2.style.display = 'block'
            p1.style.display ='none';
            chances.innerHTML = chance
        } else {

        }
    }
})


playertwoBtn.addEventListener('click', function(){
        if (playeroneInput.value == playertwoInput.value){
            winnertwo.style.display= 'block'
            p2.style.display = 'none'

        } else{
            chance--
            chances.innerHTML = chance
            if(chance == 1){
                p2.style.display = 'none'
                gameover.style.display = 'block'

            }
        }
})







