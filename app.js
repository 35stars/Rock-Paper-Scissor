let parEl = document.querySelector('.par-el')

        let userImg= document.querySelector(`#user img`)
        let computerImg = document.querySelector('#computer img')

        let user = document.getElementById('user-score')
        let computer = document.getElementById('computer-score')

        let restartBtn = document.createElement('button')
        restartBtn.className = 'reset'
        restartBtn.textContent = 'RESTART'

        let buttons = document.querySelectorAll('buttons')
        let btnsDiv = document.querySelector('#hand-options')

        let restartBtnSound = new Audio('./sound efx/click_effect-86995.mp3')

        const hand = {
            paper: 'paper.png',
            rock: 'rock.png',
            scissor: 'scissor.png'
        }

        const {paper, scissor, rock} = hand

        const hands = [paper, scissor, rock]  
        

        function userWins(){

            let userSound = new Audio('./sound efx/winfantasia-6912.mp3')

            if(user.textContent == 5){

                userSound.play()

                document.body.appendChild(restartBtn)

                restartBtn.onclick=function(){
                    restartBtnSound.play()
                    restartBtn.remove()
                    user.textContent = 0
                    computer.textContent = 0

                    Array.from(btnsDiv.children).forEach(btn=>{
                        btn.removeAttribute('disabled')
                    })
                }

                parEl.textContent = 'YOU WIN THE GAME!'

                Array.from(btnsDiv.children).forEach(btn=>{
                    btn.setAttribute('disabled',true)
                })
            }
        }

        function computerWins(){

            let computerSound = new Audio('./sound efx/error-2-36058.mp3')
                
            if(computer.textContent == 5){

                computerSound.play()    

                document.body.appendChild(restartBtn)

                restartBtn.onclick=function(){
                    restartBtnSound.play()
                    restartBtn.remove() 
                    user.textContent = 0
                    computer.textContent = 0

                    Array.from(btnsDiv.children).forEach(btn=>{
                        btn.removeAttribute('disabled')
                    })
                }
            
                parEl.textContent = 'COMPUTER WINS THE GAME!'

                Array.from(btnsDiv.children).forEach(btn=>{
                    btn.setAttribute('disabled',true)
                })
            }
        }


        btnsDiv.onclick=function(e){
            
            let userScore = 1
            let computerScore = 1
            
            if(e.target.matches('button')){
                
                let sound = new Audio('./sound efx/switch-button-106349.mp3').play()
                let random = Math.floor(Math.random()*hands.length)

                if(e.target.id == 'paper'){
                    userImg.src = paper
                    computerImg.src = hands[random]

                    if(userImg.src == computerImg.src) parEl.textContent = 'TIE'

                    if(hands[random] == rock) {
                        parEl.textContent = 'Paper wins'
                        userScore += parseInt(user.textContent)
                        user.textContent = userScore
                        userWins()
                    }

                    if(hands[random] == scissor) {
                        parEl.textContent = 'Scissor wins'
                        computerScore += parseInt(computer.textContent)
                        computer.textContent = computerScore
                        computerWins()
                    } 
                } else if (e.target.id == 'rock'){
                    userImg.src = rock
                    computerImg.src = hands[random]

                    if(userImg.src == computerImg.src) parEl.textContent = 'TIE'

                    if(hands[random] == paper) {
                        parEl.textContent = 'Paper wins'
                        computerScore += parseInt(computer.textContent)
                        computer.textContent = computerScore
                        computerWins()
                    }

                    if(hands[random] == scissor) {
                        parEl.textContent = 'Rock wins'
                        userScore += parseInt(user.textContent)
                        user.textContent = userScore
                        userWins()
                    }
                } else {
                    userImg.src = scissor
                    computerImg.src = hands[random]

                    if(userImg.src == computerImg.src) parEl.textContent = 'TIE'

                    if(hands[random] == rock) {
                        parEl.textContent = 'Rock wins'
                        computerScore += parseInt(computer.textContent)
                        computer.textContent = computerScore
                        computerWins()
                    }

                    if(hands[random] == paper) {
                        parEl.textContent = 'Scissor wins'
                        userScore += parseInt(user.textContent)
                        user.textContent = userScore
                        userWins()
                    }
                }
            }
        }