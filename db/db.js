const template = [
    "rod", "druh",
    "genus", "specio"
];

const db = [
["Česky", "Latin"],
/* 1 FIRST */
{
item: "Begonia",

rod: "Begónie",
druh_nenalezen: "",

genus: "Begonia",
specio_nenalezen: "",

src: "begonia.jpg",
from: `thompson-morgan.com`
},
/* 2 NEXT */
{
item: "Agave americana",

rod: "Agáve",
druh: "Americká",

genus: "Agave",
specio: "Americana",

src: `agave.jpg`,
from: `wikipedia.org`   
},
/* 3 NEXT */
{
item: "Aloe arborescens",    

rod: "Aloe",
druh: "stromovitá",

genus: "Aloe",
specio: "Arborescens",

src: `aloe_arborescens.jpg`,
from: `wikipedia.org`      
},
/* 4 NEXT */
{
item: "Anthurium andraeanum",

rod: "Toulitka",
druh: "Andréova",

genus: "Anthurium",
specio: "Andraeanum",

src: `anthurium.jpg`,
from: `bunches.co.uk`
},
/* 5 NEXT */
{
item: "Asparagus officinalis",

rod: "Chřest",
druh: "Lékařský",

genus: "Asparagus",
specio: "Officinalis",

src: `asparagus_officinalis.jpg`,
from: `wikipedia.org`
},
/* 6 NEXT */
{
item: "Aucuba japonica",

rod: "Aukuba",
druh: "Japonská",

genus: "Aucuba",
specio: "Japonica",

src: `aucuba_japonica.jpg`,
from: `havlis.cz`
},
/* 7 NEXT */
{
item: "Chlorophytum comosum",
    
rod: "Zelenec",
druh_nenalezen: "",
    
genus: "Chlorophytum",
specio: "Comosum",
    
src: `chlorophytum_comosum.jpg`,
from: `lucidcentral.org` 
},
/* 8 NEXT */
{
item: "Codiaeum variegatum",
    
rod: "Kodieum",
druh_nenalezen: "",
    
genus: "Codiaeum",
specio: "Variegatum",
    
src: `codiaeum_variegatum.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 9 NEXT */
{
item: "Coffea arabica",
    
rod: "Kávovník",
druh: "Arabský",
    
genus: "Coffea",
specio: "Arabica",
    
src: `coffea_arabica.jpg`,
from: `wikipedia.org`  
},
/* 10 NEXT */
{
item: "Crassula ovata",
    
rod: "Tlustice",
druh: "Vejčitá",
    
genus: "Crassula",
specio: "Ovata",
    
src: `crassula_ovata.jpg`,
from: `wikipedia.org`
},
/* 11 NEXT */
{
item: "Cryptanthus acaulis",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Cryptanthus",
specio: "Acaulis",
    
src: `cryptanthus_acaulis.jpg`,
from: `Jan Richtr @ biolib.cz`  
},
/* 12 NEXT */
{
item: "Cycas revoluta",
    
rod: "Cykas",
druh: "Japonský",
    
genus: "Cycas",
specio: "Revoluta",
    
src: `cycas_revoluta.jpg`,
from: `Forest & Kim Starr @ biolib.cz`  
},
/* 13 NEXT */
{
item: "Cyclamen persicum",
    
rod: "Brambořík",
druh: "Perský",
    
genus: "Cyclamen",
specio: "Persicum",
    
src: `cyclamen_persicum.jpg`,
from: `Leif & Anita Stridvall @ biolib.cz` 
},
/* 14 NEXT */
{
item: "Cymbidium insigne",
    
rod: "Člunatec",
druh: "Skvělý",
    
genus: "Cymbidium",
specio: "Insigne",
    
src: `cymbidium_insigne.jpg`,
from: `Petr Kocna @ biolib.cz` 
},
/* 15 NEXT */
{
item: "Cyperus alternifolius",
    
rod: "Šáchor",
druh: "Střídavolistý",
    
genus: "Cyperus",
specio: "Alternifolius",
    
src: `cyperus_alternifolius.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 16 NEXT */
{
item: "Dieffenbachia seguine",
    
rod: "Dieffenbachie",
druh: "Pestrá",
    
genus: "Dieffenbachia",
specio: "Seguine",
    
src: `dieffenbachia_seguine.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 17 NEXT */
{
item: "Dioscorea elephantipes",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Dioscorea",
specio: "Elephantipes",
    
src: `dioscorea_elephantipes.jpg`,
from: `entireleaves @ flickr.com` 
},
/* 18 NEXT */
{
item: "Dracaena",
    
rod: "Dračinec",
    
genus: "Dracaena",
    
src: `dracaena.jpg`,
from: `aristonflowers.com` 
},
/* 19 NEXT */
{
item: "Drosera capensis",
    
rod: "Rosnatka",
druh: "Kapská",
    
genus: "Drosera",
specio: "Capensis",
    
src: `drosera_capensis.jpg`,
from: `Lubomír Klátil @ biolib.cz` 
},
/* 20 NEXT */
{
item: "Euphorbia milii",
    
rod: "Pryšec",
druh: "Zářivý",
    
genus: "Euphorbia",
specio: "Milii",
    
src: `euphorbia_milii.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 21 NEXT */
{
item: "Euphorbia trigona",
    
rod: "Pryšec",
druh: "Trojúhlý",
    
genus: "Euphorbia",
specio: "Trigona",
    
src: `euphorbia_trigona.jpg`,
from: `George Dvorsky @ biolib.cz` 
},
/* 22 NEXT */
{
item: "Euphorbia pulcherrima",
    
rod: "Pryšec",
druh: "Nádherný",
    
genus: "Euphorbia",
specio: "Pulcherrima",
    
src: `euphorbia_pulcherrima.jpg`,
from: `Ing. Petr Pivoňka @ biolib.cz` 
},
/* 23 NEXT */
{
item: "Ficus benjamina",
    
rod: "Fíkovník",
druh: "Drobnolistý",
    
genus: "Ficus",
specio: "Benjamina",
    
src: `ficus_benjamina.jpg`,
from: `Jan Ševčík @ biolib.cz` 
},
/* 24 NEXT */
{
item: "Fuchsia hybrida",
    
rod: "Fuchsie",
druh_nenalezen: "",
    
genus: "Fuchsia",
specio: "Hybrida",
    
src: `fuchsia_hybrida.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},

    











/* DO NOT REMOVE THAT, OR ADD ANY ITEMS BEYOND: */
]