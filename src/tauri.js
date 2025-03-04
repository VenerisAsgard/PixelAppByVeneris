const { invoke } = window.__TAURI__.tauri;

function save_image() {
  let collection = document.getElementsByClassName("cell");
  let colors_map = [];
  let text = (Math.floor(Math.random() * 9999999999999999999999999999)).toString();
  for (let i = 0; i < collection.length; i++) {
    let pixel = (collection[i].style.backgroundColor).replace(' ', '').replace('rgb(', '').replace(')', '').split(',');
    for (let b = 0; b < 3; b++) {
      pixel[b] = Number(pixel[b])
    }
    colors_map.push(pixel); 
  }
  console.log(colors_map);
  
  invoke("save_image", {colors: colors_map, text: text});
};

function clear_image() {
  let collection = document.getElementsByClassName("cell");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = 'rgb(68, 68, 68)';
  }
};

function fill_image() {
  let collection = document.getElementsByClassName("cell");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = 'rgb(' + (Math.random()*255) + ', ' + (Math.random()*255) + ', ' + (Math.random()*255) + ')';
  }
}


document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    clear_image();
  }else if (event.key === 'Enter') {
    save_image();
   }else if (event.key === 'Shift') {
    fill_image();
}
   
});
