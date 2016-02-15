/*	Fichier contenant tous les équipements et les variables globales
 *		-	Chauffage
 *		-	Lumière
 *		-	Capteur de température
 *		-	Capteur de luminosité
 *		-	Volet
 *		-	Consignes
 *			
*/
 
define Consigne {
	lum    : null,			// consigne luminosité intérieure
	temp   : null,		// consigne température intérieure
	nuit   : null,		// consigne luminosité max lorsque c'est la nuit
	jourSuf: null,		// consigne luminosité min à l'extérieur pour avoir un apport dans la maison

	constructor : function() {
		this.lum     = 500;
		this.temp    = 19;
		this.nuit    = 100;
		this.jourSuf = 300;
	}
}

 define Chauffage {
		etat : null,
		value: null,
 	
 	constructor : function(etat, valeur) {
			this.etat  = etat;
			this.value = valeur;
 	},

 	getEtat: function() {
 		return this.etat;
 	},
 	getValue: function() {
 		return this.value;
 	},
 	setEtat: function(etat) {
 		this.etat = etat;
 	},
 	setValue: function(value) {
 		this.value = value;
 	}
 }

define Lumiere {
	value : null,

	constructor : function(value) {
		if(value >= 100) {this.value = 100;}
		else if(value <= 0) {this.value = 0;}
		else {this.value = value;}
	},
	
	getValue : function() {
		return this.value;
	},
	setValue : function(value) {
		if(value >= 100) {this.value = 100;}
		else if(value <= 0) {this.value = 0;}
		else {this.value = value;} 
	},
	setUp : function() {
		if(this.value!=100){
			this.value += 1;
		}
	},
	setDown : function() {
		if(this.value!=0){
			this.value -= 1;
		}
	}
}

define CaptTemperature {
	place: null,
	etat : null,
	value: null,

	constructor : function(place, etat, value) {
		this.place = place;
		this.etat  = etat;
		this.value = value;
	},

	getPlace : function() {
		return this.place;
	},
	getEtat : function() {
		return this.etat;
	},
	getValue : function() {
		return this.value;
	},
	setPlace : function(place) {
		this.place = place;
	},
	setEtat : function(etat) {
		this.etat = etat;
	}, 
	setValue : function(value) {
		this.value = value;
	}
}

define CaptLuminosite {
	place: null,
	etat : null,
	value: null,

	constructor : function(place, etat, value) {
		this.place = place;
		this.etat  = etat;
		this.value = value;
	},

	getPlace : function() {
		return this.place;
	},
	getEtat : function() {
		return this.etat;
	},
	getValue : function() {
		return this.value;
	},
	setPlace : function(place) {
		this.place = place;
	},
	setEtat : function(etat) {
		this.etat = etat;
	}, 
	setValue : function(value) {
		this.value = value;
	}
}

define Volet {
	value : null,

	constructor : function(value) {
		if(value>=100){this.value=100;}
		else if(value<=0){this.value=0;}
		else {this.value = value;}
	},

	getValue : function() {
		return this.value;
	},
	setValue : function(value) {
		if(value>=100){this.value=100;}
		else if(value<=0){this.value=0;}
		else {this.value = value;}
	},
	setUp : function() {
		if(this.value!=100){
			this.value += 1;
		}
	},
	setDown : function() {
		if(this.value!=0){
			this.value -= 1;
		}
	}
}
