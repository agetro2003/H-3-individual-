/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let cont = 0
 for (let index = 1; index < 4; index++) {
     result[cont] = arr[index][Object.keys(arr[index])[0]];
     cont++
 }
 console.log(result)
//export result
module.exports = result;