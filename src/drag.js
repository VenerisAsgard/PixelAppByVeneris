// Делаем элемент DIV перетаскиваемым:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // если есть, header - откуда двигаем DIV:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // иначе, двигаем DIV откуда-нибудь внутри DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // получаем позицию курсора мыши вначале:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // вызываем функцию каждый раз, когда курсор движется:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // вычисляем новую позицию курсора:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // задаем новую позицию элемента:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* прекращаем двигать, когда кнопка мыши отпущена:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
