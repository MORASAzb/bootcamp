import './style.css'

const inputEl = document.querySelector('.content .top input[name="firstName"]');
const enterEl = document.querySelector('.content .top .enter');
const printEl = document.querySelector('.content .middle .print');
const cleanEl = document.querySelector('.content .middle .clean');
const bottomEl = document.querySelector('.content div.bottom');


const printNames = [];

function addName() {
  const inputValue = inputEl.value.trim();
 if(inputValue !== 'stop'){
  printNames.push(inputValue);
  inputEl.value = '';
  inputEl.focus();
 }

}

enterEl.addEventListener('click', addName);


function print() {
  // bottomEl.innerHTML=''
  for(let i=0;i<printNames.length;i++){
    const listName=document.createElement("li");
    listName.innerText=printNames[i];
    bottomEl.appendChild(listName)
 
  }

}

printEl.addEventListener('click' , print);


function cleaning(){
  bottomEl.innerHTML='';
 printNames.length=0
}

cleanEl.addEventListener('click' , cleaning)