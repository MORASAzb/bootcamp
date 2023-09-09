const userName = prompt("please enter youe string :");
let reversedName = "";
for ( let i = userName.length - 1; i >= 0; i--) {
    reversedName += userName.charAt(i);
}
console.log(` your string reversed is : ${reversedName}`);