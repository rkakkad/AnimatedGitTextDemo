function randomRGB() {
    const r= Math.floor.apply(Math.random()*256);
    const g= Math.floor.apply(Math.random()*256); 
    const b= Math.floor.apply(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function() {
    for (let letter of letters ) {
        letter.style.color = randomRGB();
    }
}, 1000) 