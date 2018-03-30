/* setting title */
document.querySelector("title").innerHTML = program.name;

/* main div saved to program */
program.main = document.getElementById("main");
program.selector = 3;

program.Keys = Object.keys(db[program.selector])

program.Langs = db[0];

program.getUsableKeys = () =>
{
    let keys = program.Keys;
    
    keys.shift();
    for (let i = 0; i < 2; i++) keys.pop();

    return keys;
};

/* retrieves keys for single language based on it's position */
program.getLangKeys = (langPos) =>
{
    let template = program.getUsableKeys();
    let keys = [];

    for (let i = langPos * template.length / program.Langs.length; i < template.length / db[0].length * (langPos + 1 ); i++) keys.push(template[i]);


    return keys;
};

program.getInputsForLang = (langPos) =>
{
    let template = program.getLangKeys(langPos);
    let imputs = [];

    for (let item of template) {console.log(item)}



}

/* drawing function */
const drawAll = (selector) =>
{
main.innerHTML = `

${/* Drawing image */''}
<img src="${db[selector].src}" width="100%" id="mainImg">

<input id="genus" value="Latinský název">

<button id="check" onclick="alert(checkAll())">Submit</button>

`;
};

program.getInputsForLang(1)

drawAll(program.selector);