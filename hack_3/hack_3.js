/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let index = 0;
let index2 = 0;
 while (index < 6) {
     result[index2] = arr[index][Object.keys(arr[index])[0]];
     index2 ++;
     index += 2 ;
 }
 console.log(result);
//export result
module.exports = result; 