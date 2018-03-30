
const main = document.getElementById("main");

let selector = 2;

const getRod = () => document.getElementById("rod").value;
const getDruh = () => document.getElementById("druh").value;
const getNomine = () => document.getElementById("nomine").value;

const checkRod = () => getRod() == plants[selector].rod
const checkDruh = () => getDruh() == plants[selector].druh
const checkNomine = () => getNomine() == plants[selector].nomine

const checkAll = () => {
    
    let checkout = false;

    if (checkRod() && checkNomine()) checkout = true;
    
    return checkout;

}

const propCheck = (property) => property in (plants)[selector];

const makeInput = (property) =>
{
    if (propCheck(property)) return `<input id="${property}" value="${property}">`
    else return ``
}

main.innerHTML = `

<img src="${plants[selector].src}" width="100%" id="mainImg">

${makeInput("rod")}${makeInput("druh")}
<input id="nomine" value="Latinský název">

<button id="check" onclick="alert(checkAll())">Submit</button>

`;

