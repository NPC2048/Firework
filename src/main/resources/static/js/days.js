var initDay = new Date("2020-03-09 00:00:00");

var colors = {
  0: 'red',
  1: 'blue',
  2: 'yellow',
  3: 'green',
  4: 'orange',
  5: 'purple',
}

$(() => {
  var $div = $("#wordDiv");
  var textColorClass = getTextColorClass();
  var text = createTextByColor('在一起&nbsp;', textColorClass);
  var day = createTextByColor(getDay(), getTextColorNoRepeat(textColorClass));
  var dayText = createTextByColor('&nbsp;Days', getTextColorNoRepeat(textColorClass));
  $div.append(text, day, dayText);
})

function createText(text) {
  return $(`<p class="${getTextColorClass()}"><a href='#'>${text}</a></p>`)
}

function createTextByColor(text, textColorClass) {
  return $(`<p class="${textColorClass}"><a href='#'>${text}</a></p>`)
}

function getTextColorNoRepeat(colorClass) {
  var color;
  do {
    color = getTextColorClass();
  } while (color === colorClass);
  return color
}

function getTextColorClass() {
  return colors[ranInt(6)];
}

function randomColor() {
  return `rgb(${ranInt(256)}, ${ranInt(256)}, ${ranInt(256)})`;
}

function ranInt(size) {
  return Math.floor(Math.random() * size);
}

// 获取在一起的天数
function getDay() {
  return Math.floor((new Date().getTime() - initDay.getTime()) / 24 / 60 / 60 / 1000);
}