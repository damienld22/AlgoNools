// Correspondance entre nools et ce fichier JS
var nools = require ('nools');
var ruleFilePath = __dirname + '/Main_raisonneur.nools';
var flow = nools.compile(ruleFilePath);
var session = flow.getSession();

// Création d'un chauffage
var Chauffage = flow.getDefined('chauffage');
session.assert(new Chauffage (true, 10));
// Création d'une lumière
var Lumiere = flow.getDefined('lumiere');
session.assert(new Lumiere (50));
// Création d'un capteur de température extérieur
var CaptTemperature = flow.getDefined('captTemperature');
session.assert(new CaptTemperature('exterieur', true, 20));
// Création d'un capteur de température intérieur
var CaptTemperature = flow.getDefined('captTemperature');
session.assert(new CaptTemperature('interieur', true, 18));
// Création d'un capteur de luminosité extérieur
var CaptLuminosite = flow.getDefined('captLuminosite');
session.assert(new CaptLuminosite('exterieur', true, 400));
// Création d'un capteur de luminosité intérieur
var CaptLuminosite = flow.getDefined('captLuminosite');
session.assert(new CaptLuminosite('interieur', true, 400));
// Création d'un volet
var Volet = flow.getDefined('volet');
session.assert(new Volet(0));
// Création de l'objet de consigne
var Consigne = flow.getDefined('consigne');
session.assert(new Consigne());


// Démarrage du raisonneur
session.match();

