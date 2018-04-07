/*CUSTOM STYLE:*/
const title = "Poznávačka rostlin ze základů zahradnictví";
const icon = "ico.png"; /* icon is from https://www.iconexperience.com/g_collection/icons/?icon=plant */

const textColor = "goldenrod";
const textSelectedColor = "teal";
const background = "black";
const borderAtMain = "yes";
const borderAtMainColor = "greenyellow";
const wrongAnswerBackground = "red";






/* IGNORE THIS!!! */
const css =
`

body
{
    background: ${background};
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    color: ${textColor};
}
#main
{
    border: ${borderAtMain == "yes" ? "solid" : "none"} ${borderAtMainColor};
}


`

const htmlHEAD = document.getElementsByTagName('head');

const style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = `${icon}`;

htmlHEAD[0].appendChild(style);
htmlHEAD[0].appendChild(favicon);

//programmed by Martin Melichar
//If this project is shared, I am not responsible for items in database!