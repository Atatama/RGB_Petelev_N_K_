const goss_concat = require('goss_concat');

function getRGB(r = 255, g= 255, b = 255,){
  return goss_concat('rgb(', r, ',', g, ',', b,')');
}

console.log(getRGB(255,0,0));
console.log(getRGB(0,0,255));
console.log(getRGB());
console.log('Автор: Николай Петелев');
