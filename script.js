debug = true;

/* setting title */
document.querySelector("title").innerHTML = title;

window.screen.colorDepth = 1;

/* main div saved to program */
const body = document.body;
selector = 0;
arrSelector = 0;

let local = {};
local.wrongs = 0;

let points = {}

points.wrong = 0;
points.collected = 0;
points.max = 0;

wrongedSelectors = [];

wantedLangs = [];

getKeys = () => Object.keys(db[selector])

getLangs = () => db[0];
debug ? console.log("getLangs()", getLangs()) : "";

getUsableKeys = () =>
{
    let keys = getKeys();
    
    keys.shift();
    for (let i = 0; i < 2; i++) keys.pop();

    return keys;
}; debug ? console.log("getUsablekeys()", getUsableKeys()) : "";



wantedKeys = [];
debug ? console.log("wantedKeys", wantedKeys) : "";



getLangKeys = (langPos) =>
{
    let keys = [];

    for (let i = (langPos - 1) * getUsableKeys().length / getLangs().length; i < getUsableKeys().length / getLangs().length * langPos; i++) keys.push(getUsableKeys()[i]);

    return keys;
}; debug ? console.log("getLangKeys(1)", getLangKeys(1)) : "";



getFinalLangKeys = (langPos) =>
{
    let finalKeys = [];

    for (let key of getLangKeys(langPos))
    {
        if (wantedKeys.includes(key)) finalKeys.push(key);
    }

    return finalKeys;
}; debug ? console.log("getFinalLangKeys(1)", getFinalLangKeys(1)) : "";



getFinalLangs = () =>
{
    let finalLangs = [];

    for (let lang of getLangs())
    {
        if (wantedLangs.includes(lang)) finalLangs.push(lang);
    };

    return finalLangs;
}; debug ? console.log("getFinalLangs()", getFinalLangs()) : "";


const getKeysForLang = (lang) =>
{
    keys = [];

    for (let i = getLangs().indexOf(lang) * getLangs().length; i < (getLangs().indexOf(lang) + 1) * getLangs().length; i++)
    {
        keys.push(template[i]);
    }

    return keys;
}

getQuestsForLang = (langPos) =>
{
    let inputs = [];

    for (let key of getFinalLangKeys(langPos))
    {
        inputs.push(`<input id="${key}" value="${key}"><div id="answer${key}"></div>`);
    }

    return inputs.join("");
};



drawQuestsAll = () => {

    let drawing = [];
    let finalLangsIndex = [];

    for (let finalLang of getFinalLangs())
    {
        finalLangsIndex.push(getLangs().indexOf(finalLang));
    }

    for (let index of finalLangsIndex)
    {
        drawing.push(getQuestsForLang(index + 1));
        drawing.push("<br>");
    };

    drawing.pop();

    return drawing.join("");
}; debug ? console.log("drawQuestsAll", drawQuestsAll()) : "";

getChosenSelectorArrayInRange = (start, end) =>
{
    templateArray = [];
    selectorArray = [];

    for (let i = start; i <= end; i++)
    {
        selectorArray.push(i);
    }

    for (let i = selectorArray.length - 1, t, random; i > 0; --i)
    {
      random = Math.floor(Math.random() * (i + 1));
      t = selectorArray[random];
      selectorArray[random] = selectorArray[i];
      selectorArray[i] = t;
    }

    return selectorArray;
}; debug ? console.log("getChosenSelectorArrayInRange(1,2)", getChosenSelectorArrayInRange(1,2)) : "";

chosenSelectorArray = getChosenSelectorArrayInRange(1,2);

drawChecker = () =>
{
    let height = 25;
    let width = 25;

    return `
    <svg height="${height}" width="${width}">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="25%" style="stop-color:teal;stop-opacity:1" />
        <stop offset="100%" style="stop-color:greenyellow;stop-opacity:1" />
      </linearGradient>
    
    </defs>
    <polygon points="${height*0.3},${width*0.75} ${height*0.1},${width*0.5} ${height*0.01},${width*0.7} ${height*0.3},${width*0.99} ${height*0.99},${width*0.31} ${height*0.99},${width*0.1}"
    
    style="fill: url(#grad1); stroke:lime;stroke-width:1" />
    Sorry, your browser does not support inline SVG.
  </svg>
    `
}

questionTrue = () =>
{
    points.collected++;

    return `
    ${drawChecker()}
    `
}

questionFalse = (key) =>
{
    points.wrong++;
    document.getElementById(key).style.background = wrongAnswerBackground;
    local.wrongs++;
    return db[selector][key];
}

getPossibleWantedKeys = () => {

    let possibleKeys = [];
    for (let key of wantedKeys)
    {
        if (getKeys().includes(key)) possibleKeys.push(key);
    };

    return possibleKeys;
};

checkAnswer = () =>
{
    let localWrongs = 0;
    for (let key of getPossibleWantedKeys()) /* in selected langs ----- !!!!!*/
    {
        document.getElementById(`answer${key}`).innerHTML = db[selector][key].toLowerCase() == document.getElementById(key).value.toLowerCase() ?
        questionTrue() : questionFalse(key);
    }

    document.getElementById("points").innerHTML = `${points.collected} z ${points.collected + points.wrong} správně<br>
    
    ${arrSelector + 1} z ${chosenSelectorArray.length} otázek
    `;
    button = document.getElementById("confirm")

    if (arrSelector != chosenSelectorArray.length - 1)
    {
        button.innerHTML = "Další";
        button.setAttribute('onclick','selectorPlus()');
    }
    else
    {
        button.innerHTML = "Výsledky";
        button.setAttribute('onclick','drawResults()');
    }

    if (local.wrongs > 0) wrongedSelectors.push(selector);
    local.wrongs = 0;
};

selectorPlus = () => {
    arrSelector++;
    drawTest(selector);
}



const drawQuestion = (selector) =>
{
body.innerHTML = `

<div id="body">

    <div id="main">
        <img id="mainImg" src="db/${db[selector].src}" width="100%">

        <div id="mainInputs">
        ${drawQuestsAll()}
        </div>
        <br>
        <button id="confirm" onclick="checkAnswer()">Zkontrolovat</button>
        <br><br>
        <div id="points"></div>
    </div>

</div>
`;
};

const drawWronged = () =>
{
    drawing = [];

    for (let i of wrongedSelectors)
    {
        drawing.push(`<div class="wronged">${db[i].item}</div>`);
    }

    return "Špatně zodpovězené položky:<br><br>" + drawing.join("");
}

const drawButtonTestAgain = () =>
{

    if (wrongedSelectors.length > 0)
    {
        return `
        <br>
        Chceš si zopakovat chybné položky?<br><br>
        <br>
        <button onclick="drawTest()">Opakovat</button>

        <br>
        <br>

        ${drawWronged()}

        `
    }
    else
    {
        return `
        
        
        Všechno je správně, gratuluji!
        <br><br>
        ${drawChecker()}


        `
    }
}


const drawResults = () =>
{

    body.innerHTML = `
    
    <div id="body">
    <div id="main" class="results">
    <div id="results">
    <br>
    Máš ${points.collected} z ${points.collected + points.wrong} bodů!
    <div>
    ${drawButtonTestAgain()}
    <br><br>
    </div> 
</div>


    `
    arrSelector = 0;
    chosenSelectorArray = wrongedSelectors;
    wrongedSelectors = [];
    points.collected = 0;
    points.wrong = 0;
}

const startTest = () =>
{

    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    if (wantedLangs.length == 0) alert("Nejsou vybrány žádné jazyky!")
    else if (wantedKeys.length == 0) alert("Nejsou vybrány žádné parametry!")
    else if (start.trim() == "") alert("Není zadaná hodnota!")
    else if ((isNaN(start.trim()) && isNaN(end.trim()))) alert ("Je nutné zadávat pouze čísla!");
    else if (start > end) alert("První číslo musí být rovno druhému číslu nebo nižší!")
    else if (end > db.length - 1) alert(`V databázi není víc než ${db.length - 1} položek!`)
    else {
        chosenSelectorArray = getChosenSelectorArrayInRange(start, end);

        setPage("test");
    }
};

const drawTest = () =>
{
    selector = chosenSelectorArray[arrSelector];

    drawQuestion(selector)

}

const drawMenuLangs = () =>
{
    drawing = [];

    for (let lang of getLangs())
    {
        drawing.push(`<div id="lang${lang}" class="lang" onclick="addLangForTest('${lang}')">${lang}</div>`);
    }

    return drawing.join(" ");
}

const getDefaultKeysForLangs = () =>
{

    keys = [];



    for (let i = 0; i < wantedLangs.length; i++)
    {
        for (
        let j = getLangs().indexOf(wantedLangs[i]) * (template.length/getLangs().length); j < getLangs().indexOf(wantedLangs[i]) * (template.length/getLangs().length) + (template.length/getLangs().length); j++)
        {
            keys.push(template[j]);
        }
    }

   return keys;
}

const drawMenuKeys = () =>
{
    drawing = [];

    for (let key of getDefaultKeysForLangs())
    {
        if (wantedKeys.includes(key))
        {
            drawing.push(`<div id="key${key}" class="key selected" onclick="addKeyForTest('${key}')">${key}</div>`);
        }
        else
        {
            drawing.push(`<div id="key${key}" class="key" onclick="addKeyForTest('${key}')">${key}</div>`);
        }
    }

    return drawing.join(" ");
}

const addKeyForTest = (key) =>
{
    const removeKey = (key) =>
    {
        let index = wantedKeys.indexOf(key);
        if (index !== -1) wantedKeys.splice(index, 1);
    }

    const element = document.getElementById(`key${key}`);

    if (!wantedKeys.includes(key))
    {
        wantedKeys.push(key);
        element.classList.add("selected");
    }
    else
    {
        removeKey(key);
        element.classList.remove("selected");
    }

    let temporary = [];
    
    for (let i = 0; i < template.length; i++)
    {
        if (wantedKeys.includes(template[i])) temporary.push(template[i]);
    };

    wantedKeys = temporary;
}

const addLangForTest = (lang) =>
{

    let langIndex = wantedLangs.indexOf(lang);

    const removeLangKeys = () =>
    {
        let keyIndex;

        for (let i = getLangs().indexOf(lang) * getLangs().length; i < (getLangs().indexOf(lang) + 1) * getLangs().length; i++)
        {
            keyIndex = wantedKeys.indexOf(template[i]);
            if (wantedKeys.includes(template[i])) wantedKeys.splice(keyIndex,1);
        }
    }

    const removeLang = () =>
    {
        if (langIndex !== -1)
        {
            wantedLangs.splice(langIndex, 1);
            removeLangKeys();
        }
    }

    const element = document.getElementById(`lang${lang}`);

    if (!wantedLangs.includes(lang))
    {
        wantedLangs.push(lang);
        element.classList.add("selected");
    }
    else
    {
        removeLang(lang);
        element.classList.remove("selected");
    }

    let temporary = [];
    
    for (let i = 0; i < getLangs().length; i++)
    {
        if (wantedLangs.includes(getLangs()[i])) temporary.push(getLangs()[i]);
    };

    wantedLangs = temporary;

    document.getElementById("names").innerHTML = drawMenuKeys();

    debug ? console.log("AddLangForTest", wantedLangs) : "";
}

const drawMenu = () =>
{
    points.collected = 0;
    points.wrong = 0;

    randomMenuSelector = Math.floor(Math.random() * (db.length - 1) + 1)
    body.innerHTML = `
    <div id="body">
        <div id="langs">${drawMenuLangs()}</div>
        <div id="main">

            <div id="menuImageShowcase">
                <img id="mainImg" src="db/${db[randomMenuSelector].src}" width="100%">
                ${db[randomMenuSelector].item}
            </div>

            <br>

            Položky:<br>
            <input value="1" id="start" class="menuInput"></input><br>
            <small>až</small><br>
            <input value="${db.length - 1}" id="end" class="menuInput"></input><br>
            <i>min 1, max ${db.length - 1}<br>
            <br>
            <small>
            Položky budou náhodně promíchané.
            <br><br>
            Pokud položka nemá chtěný parametr, nebude parametr v testu požadován...</small></i>
            <br><br>
            <button onclick="startTest()">Start test!</button>
            <br><br>

        </div> 

        <div id="names"><div>
    </div>
    `
}