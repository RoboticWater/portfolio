function changeMtnColor(color) {
  var classes = ['st1','st2','st3','st4','st0','st5'];
  var colors;
  if (color === 'green') {
    colors = ['#C0DC8E','#91C960','#6BBE51','#47B74C','#17B24C','#00AE4D'];
  } else if (color === 'yellow') {
    colors = ['#E6D989','#D0C157','#BDAF42','#ADA03C','#9F923C','#93883C'];
  } else if (color === 'blue') {
    colors = ['#8DD0BB','#42BB96','#00B17E','#00AC6D','#00A962','#00A75C'];
  } else if (color === 'red') {
    colors = ['#DA796F','#C64845','#B63335','#A82B30','#9B292E','#90282D'];
  }
  for (var i = 0; i < classes.length; i++) {
    var elements = document.getElementsByClassName(classes[i]), j, len;
    for (j = 0, len = elements.length; j < len; j++) {
      elements[j].style.fill = colors[i];
    }
  }
}