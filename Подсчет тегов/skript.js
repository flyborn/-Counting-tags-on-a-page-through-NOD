var tuu = []
Array.from(document.getElementsByTagName('*')).forEach(value => {
tuu.push(value.tagName);//получаем НОД, с него набиваем перебором тегами массив
});
var counter = tuu.reduce(function (a, b) {
  if (!a.hasOwnProperty(b)) {// опеределяем логическое значение, нет = 0
    a[b] = 0;
  }
  a[b]++;//да = ++ и возвращаем
  return a;
}, {});
console.log(counter)