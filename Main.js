// Correspondance entre nools et ce fichier JS
var nools = require ('nools');
var ruleFilePath = __dirname + '/Main_raisonneur.nools';
var flow = nools.compile(ruleFilePath);
var session = flow.getSession();

// Création d'un objet chauffage
var Chauffage = flow.getDefined('chauffage');
session.assert(new Chauffage (10));

// Démarrage du raisonneur
session.match();

