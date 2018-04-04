debug = true;

/* setting title */
document.querySelector("title").innerHTML = title;


/* main div saved to program */
const body = document.body;
selector = 0;
arrSelector = 0;

let local = {};
local.wrongs = 0;

let points = {}

points.wrong = 0;
points.collected = 0;
points.max = 500;

wrongedSelectors = [];

wantedLangs = [];
debug ? console.log("wantedLangs", wantedLangs) : "";

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



wantedKeys = ["rod", "druh", "genus"];
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



getQuestsForLang = (langPos) =>
{
    let inputs = [];

    for (let key of getFinalLangKeys(langPos))
    {
        inputs.push(`<input id="${key}" value="${key}"><div id="answer${key}"></div>`);
    }

    return inputs.join("");
}; debug ? console.log("getQuestsForLang(1)", getQuestsForLang(1)) : "";



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

getchosenSelectorArrayInRange = (start, end) =>
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
}; debug ? console.log("getchosenSelectorArrayInRange(1,2)", getchosenSelectorArrayInRange(1,2)) : "";

chosenSelectorArray = getchosenSelectorArrayInRange(1,3);

questionTrue = () =>
{
    points.collected++;
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

    document.getElementById("points").innerHTML = `${points.collected} of ${points.max}`;
    button = document.getElementById("confirm")

    if (arrSelector != chosenSelectorArray.length - 1)
    {
        button.innerHTML = "Next";
        button.setAttribute('onclick','selectorPlus()');
    }
    else
    {
        button.innerHTML = "Results";
        button.setAttribute('onclick','drawResults()');
    }

    if (local.wrongs > 0) wrongedSelectors.push(selector);
    local.wrongs = 0;
};

selectorPlus = () => {
    arrSelector++;
    drawTest(selector);
}



/* drawing function */
const drawQuestion = (selector) =>
{
body.innerHTML = `

<div id="body">
    <div id="cheat1">
        cheat1
    </div>

    <div id="main">
        ${/* Drawing image */''}
        <img id="mainImg" src="db/${db[selector].src}" width="100%">

        <div id="mainInputs">
        ${drawQuestsAll()}
        </div>
        
        <button id="confirm" onclick="checkAnswer()">Check</button>
        
        <div id="points"></div>
    </div>

    <div id="cheat2">
        cheat2
    </div>
</div>
`;
};


const drawButtonTestAgain = () =>
{

    if (wrongedSelectors.length > 0)
    {
        return `
        
        <button onclick="drawTest()">Tak ty nemáš dost?</button>



        `
    }
    else
    {
        return `
        
        Blahopřeji!



        `
    }
}

const drawResults = () =>
{
    body.innerHTML = `
    
    <div id="results" style="color: red;">
    Dobře ty, máš ${points.collected} z 500;
    <div>
    ${drawButtonTestAgain()}
    
    `
    arrSelector = 0;
    chosenSelectorArray = wrongedSelectors;
    wrongedSelectors = [];
}

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

const getDefaultKeysForLang = () =>
{


    keys = [];

    console.log("Index", wantedLangs.indexOf(wantedLangs[0]));

    for (let i = 0; i < wantedLangs.length; i++)
    {
        for (let j = getLangs().indexOf(wantedLangs[i]) * getLangs().length; j < getLangs().indexOf(wantedLangs[i]) * getLangs().length + getLangs().length; j++)
        {
            keys.push(template[j]);
        }
    }

   return keys;
}

const drawMenuNames = () =>
{
    drawing = [];



    for (let name of getDefaultKeysForLang())
    {
        drawing.push(`${name}`);
    }

    return drawing.join("<br>");
}

const addLangForTest = (lang) =>
{
    const removeLang = () =>
    {
        let index = wantedLangs.indexOf(lang);
        if (index !== -1) wantedLangs.splice(index, 1);
    }

    const element = document.getElementById(`lang${lang}`);

    if (!wantedLangs.includes(lang))
    {
        wantedLangs.push(lang);
        element.style.color = textSelectedColor;
    }
    else
    {
        removeLang(lang);
        element.style.color = textColor;
    }

    let temporary = [];
    
    for (let i = 0; i < getLangs().length; i++)
    {
        if (wantedLangs.includes(getLangs()[i])) temporary.push(getLangs()[i]);
    };

    wantedLangs = temporary;

    document.getElementById("names").innerHTML = drawMenuNames();

    debug ? console.log("AddLangForTest", wantedLangs) : "";
}

const drawMenu = () =>
{
    randomMenuSelector = Math.floor(Math.random() * (db.length - 1) + 1)
    body.innerHTML = `
    <div id="body">
        <div id="langs">${drawMenuLangs()}</div>
        <div id="main">

            <div id="menuImageShowcase">
                <img id="mainImg" src="db/${db[randomMenuSelector].src}" width="100%">
                ${db[randomMenuSelector].rod} ${db[randomMenuSelector].druh}
            </div>

            <br>
            <button onclick="setPage('test')">Start test!</button>
            <button onclick="alert("HI")">Random selector array!</button>

        </div> 

        <div id="names"><div>
    </div>
    `
}