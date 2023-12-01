// var a=10
// var b=10
// console.log(a + b)

// var a=19
// var b=10
// console.log(a - b)
//--------------------------------------------------------------------------------

// function oddNumber(num) {
//   if (num % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }
// oddNumber(10);

//-------------------------------------------------------------------------------------
// var num = 20

// if (num > 10) {
//     console.log("greaterThan")
// }else{
// console.log("lessThan")

// }  //greaterThan

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Duplicate array removing method

// let array = ["apple", "orange", "apple","banana","graps","pinapple", "orange"]
// function removing (array) {
//     return array.filter ((item, index) => array.indexOf (item) === index)
// }
// console.log(removing(array))

//----------------------------------------------------------------------------------------

// var N=15
// if (N < 10) {
//     console.log("Greaterthan")
// } else {
//     console.log("LessThan")
// }

//------------------------------------------------------------------------------------------

// var a = 2;
// var b = 3;
// b = a + b; //5
// a = b - a;  //3
// b = b - a; //2
// console.log(a, b);
// cheaking
//--------------------------------------------------------------------------------------------

var N = 10;
var b = 5;
for (let index = b; index <= N; index++) {
  console.log(index);
  if (N % 3 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
