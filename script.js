function changeColor(element){

let colors=["green","blue","red"];

let random=Math.floor(Math.random()*colors.length);

element.style.color=colors[random];

}