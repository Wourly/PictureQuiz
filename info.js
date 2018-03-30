let program = {
    /*GIVE YOUR PROGRAM A NAME:*/
    name: "Poznávačka rostlin ze základů zahradnictví"
};


/*CUSTOM STYLE:*/

const background = "black";
const borderAtMain = "yes";
const borderAtMainColor = "greenyellow";






/* IGNORE THIS!!! */
const css =
`

body
{
    background: ${background};
}
#main
{
    border: ${borderAtMain == "yes" ? "solid" : "none"} ${borderAtMainColor};
}


`

const style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));

document.getElementsByTagName('head')[0].appendChild(style);

//programmed by Martin Melichar
//If this project is shared, I am not responsible for items in database!