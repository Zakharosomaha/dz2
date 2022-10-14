

let star ="*";
for (let i = 0; i < 7; i++) {
  if(i !=7){
    console.log(star);
    star +="*"
  }
}



//  2 zadanie

for ( let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBazz');
    } else if ( i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Bazz');
    } else {
        console.log(i);
    }
}


// 3 zadanie



let value1 = "# ";
let value2 = " #";
let first = " ";
let second = " ";
for (let i = 0; i < 8; i++) {
        first += value1;
        second += value2;
}
for (let j = 0; j < 8; j += 1) {
        if (j % 2 != 0) {
          console.log(first);
        } else {
          console.log(second);
        }
      }