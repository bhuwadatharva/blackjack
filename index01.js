let card=[]
let sum=0
let hasBlackJack=false
let isalive=false
let message=""
let messageEl= document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl= document.getElementById("cards-el")
function getRandomCard()
{
    let randomnumber= Math.floor(Math.random()*12)+1
    if(randomnumber>10)
    {
        return 10
    }
    else if(randomnumber===1)
    {
        return 11
    }else
    {
        return randomnumber
    }
}

function startGame()
{
    isalive=true
    let firstcard= getRandomCard()
    let secondcard= getRandomCard()
    card= [firstcard,secondcard]
    sum= firstcard+secondcard
    rendergame()
}

function rendergame()
{
cardEl.textContent= "cards:"
for(let i=0;i<card.length;i++)
{
    cardEl.textContent+=card[i]+" "
}

sumEl.textContent="Sum:"+ sum
if(sum<=20)
{
    message="Do you want to draw a new card?"
}else if(sum===21)
{
    message="You've got BlackJack!"
    hasBlackJack= true
}else{
    message="You're out of Game!"
    isalive= false
}
messageEl.textContent= message
}
function newCard()
{
    if( isalive=== true && hasBlackJack=== false)
    {
        let cards= getRandomCard()
        sum += card
        card.push(cards)
        rendergame()
    }
}