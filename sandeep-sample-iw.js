function onDragStart(event) {
  event.dataTransfer.setData("dragid", event.target.id);
  // event.currentTarget.style.backgroundColor="yellow";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("dragid");
  const dragElement = document.getElementById(id);
  const dropZone = event.target;
 
 dragElement.style.left = event.cleintX + "px";
 dragElement.style.top = event.cleintY + "px";
//  dragElement.style.position="absolute";
 dropZone.appendChild(dragElement);
 event.dataTransfer.clearData();
//  event.stopPropagation();
//  return false;
}
function rotate(e) {
  let id = e.target.id;

  let item = document.getElementById(id);

  item.style.transform = "rotate(90deg)";
}


