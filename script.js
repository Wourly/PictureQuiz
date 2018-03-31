let program = {};
/* setting title */
document.querySelector("title").innerHTML = title;

/* main div saved to program */
program.main = document.getElementById("main");
program.selector = 3;

program.wantedKeys = ["rod","trida"];

program.getKeys = () => Object.keys(db[program.selector])

program.getLangs = () => db[0];

program.getUsableKeys = () =>
{
    let keys = program.getKeys();
    
    keys.shift();
    for (let i = 0; i < 2; i++) keys.pop();

    return keys;
};

/* retrieves keys for single language based on it's position */
program.getLangKeys = (langPos) =>
{
    let template = program.getUsableKeys();
    let keys = [];

    for (let i = (langPos - 1) * template.length / program.getLangs().length; i < template.length / db[0].length * langPos; i++) keys.push(template[i]);

    return keys;
};

program.getInputsForLang = (langPos) =>
{
    let keys = program.getLangKeys(langPos);
    let wantedKeys = keys; //getwantedkeys
    let finalKeys = [];
    let inputs = [];

    for (let key of keys)
    {
        if (wantedKeys.includes(key)) finalKeys.push(key);
    }

    for (let key of finalKeys)
    {
        inputs.push(`<input id="${key}" value="${key}">`);
    }

    return inputs.join("<br>");

}

program.drawLangInputs = () => {

    let drawing = [];
    let langs = program.getLangs(); 
    let wantedLangs = ["Česky", "Magyar", "Latin"]; //wantedLangs!
    let finalLangs = [];
    let finalLangsIndex = [];

    for (let lang of langs)
    {
        if (wantedLangs.includes(lang)) finalLangs.push(lang);
    };

    for (let finalLang of finalLangs)
    {
        finalLangsIndex.push(program.getLangs().indexOf(finalLang));
    }

    for (let index of finalLangsIndex)
    {
        drawing.push(program.getInputsForLang(index + 1));
        drawing.push("<hr>");
    }

    drawing.pop();

    return drawing.join("");
}

program.selectorMinus = () => {
    program.selector--;
    drawAll(program.selector);
}

program.selectorPlus = () => {
    program.selector++;
    drawAll(program.selector);
}

/* drawing function */
const drawAll = (selector) =>
{
main.innerHTML = `

${/* Drawing image */''}
<img id="mainImg" src="db/${db[selector].src}" width="100%">

<div id="mainInputs">
${db[program.selector].rod} 
${db[program.selector].druh}
<hr>
${program.drawLangInputs()}
</div>

<button onclick="program.selectorMinus()">Previous</button>
<button onclick="program.selectorPlus()">Next</button>

`;
};

drawAll(program.selector);