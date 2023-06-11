document.oncontextmenu = cmenu;

function cmenu() {
  return false;
}


function eventFunc(id) {
	let user_color = document.getElementById("user_color").value;
	document.getElementById(id).style.backgroundColor = user_color;
}

for (let i = 0; i < 625; i++) {
	let cell = document.createElement('div');
	cell.className = "cell";
	cell.id = "c-" + i;
	cell.style.backgroundColor = 'rgb(68, 68, 68)';
	document.querySelector("div.paint-board").append(cell);
	cell.addEventListener('click', function () {eventFunc(cell.id)});
}


