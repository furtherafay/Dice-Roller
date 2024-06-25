
function Roll(){

    let diceNum = document.getElementById("numDice");
    let diceImg = document.getElementById("diceImages");
    const images = [];
    
    let numDice = diceNum.value;
    for (let i = 0; i<numDice; i++){
        let randDice = Math.floor((Math.random()*6)+1);
        images.push(`<img src="Images/${randDice}.png" alt="${randDice}">`);
    }
    diceImg.innerHTML = images.join(" ");
}
