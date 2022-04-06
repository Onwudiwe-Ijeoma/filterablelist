//this is called putting things dynamically inside the projects
const list = [
    "A",
    "Abina",
    "Adaeze",
    "Adanna",
    "Anaele",
    "Azizat",

    'B',
    "Bada",
    "Bendict",
    "Bidemi",
    'Bukola',
    "Buyere",

    "C",
    "Cassandra",
    "Cecelia",
    "Celery",
    "Chiamaka",
    "Chinyere",

    "D",
    "Dayo",
    'David',
    'Deji',
    'Dindu',
    "Dozie"

];

//declare variables

let filter = document.querySelector('#filter'); //for the search input
let output = document.querySelector('.output');//to input the div


//to output the list to the dom to make it show we do this 
//when the window loads  i want the array to show since we are loding dynamically

window.addEventListener('load', loadList);
filter.addEventListener('input', filterNames);


//create the loadlist function
function loadList() {

    let tempValue = `<ul class="list-group">`;

    //looping the array
    list.forEach((item) => {
        tempValue += `<li class="list-group-item">${item} </li>`;
        //tempValue += `<h2>${list[0, 6]}</h2>`
    });

    tempValue += `</ul>`;

    output.innerHTML = tempValue;


};


//filternames function

function filterNames(e) {
    let tempValue = '';

    const filteredResult = list.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));


    //input it into the dom
    if (filteredResult.length > 0) {
        tempValue = `<ul class="list-group">`;

        //looping the  result array
        filteredResult.forEach((item) => {
            tempValue += `<li class="list-group-item">${item} </li>`;
            //tempValue += `<h2>${list[0, 6]}</h2>`
        });

        tempValue += `</ul>`;

    } else {
        tempValue = `<div class = "no-item"> Does not match your search </div>`;
    }
    output.innerHTML = tempValue;


};















/*

let filter = document.querySelector('#filter');
let uL = document.querySelector('.list-group');
let list = uL.querySelectorAll('.list-group-item');
let filterInput = document.querySelector('#filter').value.toUpperCase(); //make sure values are same
//let listItems = document.getElementsByTagName('li');



//adding event listeners

filter.addEventListener('input', filterNames)



//decalarng functions

function filterNames(e) {
    let temp = "";

    //let listItems = document.getElementsByTagName('li');
    //let text = e.target.value.toLowerCase();
    //convert to array
    const filteredResult = Array.from(uL).filter(item => item.includes(e.target.value.toLowerCase()));

    /*Array.from(listItems).forEach(function (item) {
        let itemName = item.firstChild.textContent;

        const filteredResult = Array.from(listItems).filter(item => item.includes(e.target.value.toLowerCase()));
    })*/





