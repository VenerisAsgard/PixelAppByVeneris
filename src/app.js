document.oncontextmenu = cmenu;

function cmenu() {
  return false;
}

function toHex(r, g, b) {
    if(r < 0 || r > 255) alert("r is out of bounds; "+r);
    if(g < 0 || g > 255) alert("g is out of bounds; "+g);
    if(b < 0 || b > 255) alert("b is out of bounds; "+b);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1,7);
}

function rgbToHex(color) {
  color = color.replace('rgb(', '').replace(')', '').replace(' ', '').split(',');
  return(toHex(Number(color[0]), Number(color[1]), Number(color[2])));

}

function rclickFunc(id) {
  document.getElementById("user_color").value = rgbToHex(document.getElementById(id).style.backgroundColor);
}


function clickFunc(id) {
	let user_color = document.getElementById("user_color").value;
	document.getElementById(id).style.backgroundColor = user_color;
}

for (let i = 0; i < 625; i++) {
	let cell = document.createElement('div');
	cell.className = "cell";
	cell.id = "c-" + i;
	cell.addEventListener('contextmenu', function () {rclickFunc(cell.id)});
	cell.style.backgroundColor = 'rgb(68, 68, 68)';
	document.querySelector("div.paint-board").append(cell);
	cell.addEventListener('click', function () {clickFunc(cell.id)});
}


