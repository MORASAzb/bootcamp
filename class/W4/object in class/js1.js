//delete the ziro degree
// const student = {
//     riazi: 19,
//     olom: 20,
//     qoran: 15,
//     enzebat: 10,
//     parvareshi: '12',
//     farsi: 0,

// }
// console.log(student);
// function changeBasic(objStudent) {

//     const obj2 = Object.entries(objStudent).filter((value) => value[1] > 0).map(([key, value]) => [key, value * 2]);
//     const obj3 = Object.fromEntries(obj2);
//     return obj3;

// }
// console.log(changeBasic(student));








// const student = {
//         riazi: 19,
//         olom: 20,
//         qoran: 15,
//         enzebat: 10,
//         parvareshi: '12',
//         farsi: 0,

//     }
//     console.log(student);
//     function changeBasic(objStudent) {

//         const obj2 = Object.entries(objStudent).filter((value) => value[1] > 0).map(([key, value]) => [key, value * 2]);

//         const obj3 = Object.fromEntries(obj2);
//         return obj3;

//     }
//     console.log(changeBasic(student));











// const employed='{"employees":[{"name":"Sonoo","email":"sonoojaiswal1987@gmail.com"},{"name":"Rahul","email":"rahul32@gmail.com"},{"name":"John","email":"john32bob@gmail.com"}]}';


// function changeValueOfJson(obj){
//     const obj1=JSON.parse(obj);
//     console.log(obj1)
//     const obj2=obj1.employees.map(( value) =>{
//       const value1={...value};
//         value1.email=value1.email.replace('gmail' , 'yahoo');
//         return value1;
//     } )

// return JSON.stringify(obj2);
// }

// console.log(changeValueOfJson(employed));















// const employed = '{"employees":[{"name":"Sonoo","email":"sonoojaiswal1987@gmail.com"},{"name":"Rahul","email":"rahul32@gmail.com"},{"name":"John","email":"john32bob@gmail.com"}]}';

// const uservalue = prompt('please enter a email you want delete it ');
// function changeValueOfJson(obj) {
//     const obj1 = JSON.parse(obj);
//     // console.log(obj1)
//     const obj2 = obj1.employees.filter(

//             function(value) {
//                 const value2 = structuredClone( value )
//                 return value2.email !== uservalue;

//             }

//     );

//     return JSON.stringify(obj2);
// }



// console.log(changeValueOfJson(employed));






const student = {
    riazi: 15,
    varzesh: 20,
    enzebat: 10,
    fizik: 0,
    ghoran: 20,
    parvareshi: 20,
    olom: 12,
    ejtemaei: 19.75,}

console.log(student);
function entries(obj) {
    const result = Object.entries(obj).filter((v) => v[1] !== 0)
    const final = result.map(([value, index]) => [value, index * 2])
    const response = Object.fromEntries(final)
    return response;

}

console.log(entries(student));