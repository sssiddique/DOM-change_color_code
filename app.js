function generateRgb(){
let red = Math.floor((Math.random()*255));
let green = Math.floor((Math.random()*255));
let blue = Math.floor((Math.random()*255));

return rgb = `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById('btn').addEventListener('click', () => {
    selector = document.getElementById('root');
    selector.style.background = generateRgb();
    //console.log(selector);
    console.log(rgb);
});
