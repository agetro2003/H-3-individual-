/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;
result = Object.assign({},foo);

result.name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
result.roles = [result.roles[0].toUpperCase(), roleSuperUser, roleUser]

result.skills.splice(3,0,skills[2]);
result.skills.push(skills[3]);
result.skills.unshift(skills[1]);
result.skills.unshift(skills[0]);

for (let index = 0; index < result.skills.length; index++) {
    if (result.skills[index] == 'html' || result.skills[index] == 'css') {
        result.skills[index] = result.skills[index].toUpperCase();
    } else {
       result.skills[index] = result.skills[index].charAt(0).toUpperCase() + result.skills[index].slice(1);
    }   
}

result.levels = levels;
for (let index = 0; index < levels.length; index++) {
    result['levels'][index]['LEVEL'] =  'L'+result['levels'][index]['LEVEL'].charAt(2)
}
delete result.alias;

console.log(result);
//export result
module.exports = result; 