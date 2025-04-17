const loc = document.querySelectorAll("a[value]");

/*const locOver = () => {
   console.log($(loc).attr("value"));
   loadThumb('.thumbnail');
}*/

loc.forEach(node => {
  node.addEventListener("mouseover", locOver);
})

function locOver(event) {
  // do something
  console.log($(event.target).attr("value"))
  loadThumb('.thumbnail');
}

function loadThumb(div){
   $(div).empty();
   $(div).append('<img src="/img/' + $(event.target).attr("value") + '"/>');
}