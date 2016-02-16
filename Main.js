//	*******************************************************************
//
//	Fichier principal : Démarrage du programme
//			->	Initialisation du programme
//			->	Lancement de nools
//			->	Création des équipements
//
//	*******************************************************************




// Correspondance entre nools et ce fichier JS
var nools           = require ('nools');
var ruleFilePath    = __dirname + '/Main_raisonneur.nools';
var flow            = nools.compile(ruleFilePath);
var session         = flow.getSession();

// Création d'un chauffage
var Chauffage       = flow.getDefined('chauffage');
session.assert(new Chauffage (true, 10));
// Création d'une lumière
var Lumiere         = flow.getDefined('lumiere');
session.assert(new Lumiere (50));
// Création d'un capteur de température extérieur
var CaptTemperature = flow.getDefined('captTemperature');
session.assert(new CaptTemperature('exterieur', true, 16));
// Création d'un capteur de température intérieur
var CaptTemperature = flow.getDefined('captTemperature');
session.assert(new CaptTemperature('interieur', true, 15));
// Création d'un capteur de luminosité extérieur
var CaptLuminosite  = flow.getDefined('captLuminosite');
session.assert(new CaptLuminosite('exterieur', true, 600));
// Création d'un capteur de luminosité intérieur
var CaptLuminosite  = flow.getDefined('captLuminosite');
session.assert(new CaptLuminosite('interieur', true, 600));
// Création d'un volet
var Volet           = flow.getDefined('volet');
session.assert(new Volet(1));
// Création de l'objet de consigne
var Consigne        = flow.getDefined('consigne');
session.assert(new Consigne());
// Création de l'objet VMC
var VMC				= flow.getDefined('VMC');
session.assert(new VMC(true, 2));
// Création du capteur de CO2
var CaptCO2			= flow.getDefined('captCO2');
session.assert(new CaptCO2(400));


// Démarrage du raisonneur
session.match();	


