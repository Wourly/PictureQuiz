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
/* 25 NEXT */
{
item: "Gymnocalycium mihanovichii",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Gymnocalycium",
specio: "Mihanovichii",
    
src: `gymnocalycium_mihanovichii.jpg`,
from: `Štěpán Uhlík @ biolib.cz` 
},
/* 26 NEXT */
{
item: "Hibiscus calyphyllus",
    
rod: "Ibišek",
druh_nenalezen: "",
    
genus: "Hibiscus",
specio: "Calyphyllus",
    
src: `hibiscus_calyphyllus.jpg`,
from: `Petr Kocna @ biolib.cz` 
},
/* 27 NEXT */
{
item: "Hydnophytum papuanum",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Hydnophytum",
specio: "Papuanum",
    
src: `hydnophytum_papuanum.jpg`,
from: `tropiflora.com` 
},
/* 28 NEXT */
{
item: "Kalachnoe blossfeldiana",
    
rod: "Kolopejka",
druh: "Vděčná",
    
genus: "Kalanchoe",
specio: "Blossfeldiana",
    
src: `kalanchoe_blossfeldiana.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 29 NEXT */
{
item: "Kalachnoe daigremontiana",
    
rod: "Kolopejka",
druh_nenalezen: "",
    
genus: "Kalanchoe",
specio: "Daigremontiana",
    
src: `kalanchoe_daigremontiana.jpg`,
from: `worldofsucculents.com` 
},
/* 30 NEXT */
{
item: "Monstera deliciosa",
    
rod: "Monstera",
druh_nenalezen: "",
    
genus: "Monstera",
specio: "Deliciosa",
    
src: `monstera_deliciosa.jpg`,
from: `Jaroslav Kuneš @ biolib.cz` 
},
/* 31 NEXT */
{
item: "Myrtus communis",
    
rod: "Myrta",
druh: "Obecná",
    
genus: "Myrtus",
specio: "Communis",
    
src: `myrtus_communis.jpg`,
from: `Pavel Buršík @ biolib.cz` 
},
/* 32 NEXT */
{
item: "Myrmecodia beccarii",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Myrmecodia",
specio: "Beccarii",
    
src: `myrmecodia_beccarii.jpg`,
from: `Antonín Horáček jr. @ biolib.cz` 
},
/* 33 NEXT */
{
item: "Nepenthes bicalcarata",
    
rod: "Láčkovka",
druh_nenalezen: "",
    
genus: "Nepenthes",
specio: "Bicalcarata",
    
src: `nepenthes_bicalcarata.jpg`,
from: `Ivo Antušek @ biolib.cz` 
},
/* 34 NEXT */
{
item: "Nephrolepis cordifolia",
    
rod: "Ledviník",
druh_nenalezen: "",
    
genus: "Nephrolepis",
specio: "Cordifolia",
    
src: `nephrolepis_cordifolia.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 35 NEXT */
{
item: "Peperomia boivinii",
    
rod: "Pepřinec",
druh_nenalezen: "",
    
genus: "Peperomia",
specio: "Boivinii",
    
src: `peperomia_boivinii.jpg`,
from: `Petr Vobořil @ biolib.cz` 
},
/* 36 NEXT */
{
item: "Nerium oleander",
    
rod: "Oleandr",
druh: "Obecný",
    
genus: "Nerium",
specio: "Oleander",
    
src: `nerium_oleander.jpg`,
from: `Petr Kocna @ biolib.cz` 
},
/* 37 NEXT */
{
item: "Pachypodium brevicaule",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Pachypodium",
specio: "Brevicaule",
    
src: `pachypodium_brevicaule.jpg`,
from: `Petr Kříž @ biolib.cz` 
},
/* 38 NEXT */
{
item: "Pachypodium geayi",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Pachypodium",
specio: "Geayi",
    
src: `pachypodium_geayi.jpg`,
from: `Milan Kořínek @ biolib.cz` 
},
/* 39 NEXT */
{
item: "Pelargonium peltatum",
    
rod: "Pelargonie",
druh_nenalezen: "",
    
genus: "Pelargonium",
specio: "Peltatum",
    
src: `pelargonium_peltatum.jpg`,
from: `Petr Kocna @ biolib.cz` 
},

/* 41 NEXT */
{
item: "Pelargonium zonale",
    
rod: "Pelargonie",
druh: "Páskatá",
    
genus: "Pelargonium",
specio: "Zonale",
    
src: `pelargonium_zonale.jpg`,
from: `Petr Kocna @ biolib.cz` 
},
/* 42 NEXT */
{
item: "Phalaenopsis amabilis",
    
rod: "Můrovec",
druh: "Vznešený",
    
genus: "Phalaenopsis",
specio: "Amabilis",
    
src: `phalaenopsis_amabilis.jpg`,
from: `Petr Kocna @ biolib.cz` 
},
/* 43 NEXT */
{
item: "Philodendron scandens",
    
rod: "Filodendron",
druh_nenalezen: "",
    
genus: "Philodendron",
specio: "Scandens",
    
src: `philodendron_scandens.jpg`,
from: `gardners-eshop.cz` 
},
/* 44 NEXT */
{
item: "Platycerium bifurcatum",
    
rod: "Parožnatka",
druh: "Vidličnatá",
    
genus: "Platycerium",
specio: "Bifurcatum",
    
src: `platycerium_bifurcatum.jpg`,
from: `Martin Antos @ biolib.cz` 
},
/* 45 NEXT */
{
item: "Saintpaulia ionantha",
    
rod: "Jonátka",
druh_nenalezen: "",
    
genus: "Saintpaulia",
specio: "Ionantha",
    
src: `saintpaulia_ionantha.jpg`,
from: `Miroslav Deml @ biolib.cz` 
},
/* 46 NEXT */
{
item: "Sansevieria francisii",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Sansevieria",
specio: "Francisii",
    
src: `sansevieria_francisii.jpg`,
from: `Ivo Antušek @ biolib.cz` 
},
/* 47 NEXT */
{
item: "Sarracenia leucophylla",
    
rod: "Špirlice",
druh: "Bělolistá",
    
genus: "Sarracenia",
specio: "Leucophylla",
    
src: `sarracenia_leucophylla.jpg`,
from: `Petr Kocna @ biolib.cz` 
},
/* 48 NEXT */
{
item: "Sarracenia purpurea",
    
rod: "Špirlice",
druh: "Nachová",
    
genus: "Sarracenia",
specio: "Purpurea",
    
src: `sarracenia_purpurea.jpg`,
from: `Martin Antoš @ biolib.cz` 
},
/* 49 NEXT */
{
item: "Schefflera arboricola",
    
rod: "Šeflera",
druh_nenalezen: "",
    
genus: "Schefflera",
specio: "Arboricola",
    
src: `schefflera_arboricola.jpg`,
from: `Martin Antoš @ biolib.cz` 
},
/* 50 NEXT */
{
item: "Scindapsus hederaceus",
    
rod: "Šplhavník",
druh_nenalezen: "",
    
genus: "Scindapsus",
specio: "Hederaceus",
    
src: `scindapsus_hederaceus.jpg`,
from: `Michael Kesl @ biolib.cz` 
},
/* 51 NEXT */
{
item: "Spathiphyllum",
    
rod: "Lopatkovec",
druh_nenalezen: "",
    
genus: "Spathiphyllum",
specio_nenalezen: "",
    
src: `spathiphyllum.jpg`,
from: `oglesbytc.com` 
},
/* 52 NEXT */
{
item: "Syngonium podophyllum",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Syngonium",
specio: "Podophyllum",
    
src: `syngonium_podophyllum.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 53 NEXT */
{
item: "Tillandsia caput-medusae",
    
rod: "Tilandsie",
druh_nenalezen: "",
    
genus: "Tillandsia",
specio: "Caput-medusae",
    
src: `tillandsia_caput-medusae.jpg`,
from: `Petr Schön @ biolib.cz` 
},
/* 54 NEXT */
{
item: "Tillandsia caput-medusae",
    
rod: "Tilandsie",
druh: "Provazovkovitá",
    
genus: "Tillandsia",
specio: "Usneoides",
    
src: `tillandsia_usneoides.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 55 NEXT */
{
item: "Vriesa splendens",
    
rod_nenalezen: "",
druh_nenalezen: "",
    
genus: "Vriesa",
specio: "Splendens",
    
src: `vriesea_splendens.jpg`,
from: `Forest & Kim Starr @ biolib.cz` 
},
/* 56 NEXT */
{
item: "Zamioculcas zamiifolia",
    
rod: "Kulkas",
druh: "Zamiolistý",
    
genus: "Zamioculcas",
specio: "Zamiifolia",
    
src: `zamioculcas_zamiifolia.jpg`,
from: `Šárka Mašová @ biolib.cz` 
},
/* 57 NEXT */
{
item: "Zantedeschia aethiopica",
    
rod: "Kornoutovka",
druh: "Africká",
    
genus: "Zantedeschia",
specio: "Aethiopica",
    
src: `zanthedeschia_aethiopica.jpg`,
from: `Šárka Mašová @ biolib.cz` 
},
/* DO NOT REMOVE THAT, OR ADD ANY ITEMS BEYOND: */
]