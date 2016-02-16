//	*******************************************************************
//
//	Fichier contenant tous les équipements nécessaires
//			->	Chauffage, Lumière, Volet
//			->	Capteurs (température, luminosité)
//			->	Capteur de CO2
//			->	Consignes
//
//	*******************************************************************


define Consigne {
	lum    : null,		// consigne luminosité intérieure
	temp   : null,		// consigne température intérieure
	nuit   : null,		// consigne luminosité max lorsque c'est la nuit
	jourSuf: null,		// consigne luminosité min à l'extérieur pour avoir un apport dans la maison
	tempSuf: null,		// température suffisante pour chauffer la maison avec l'éclairage extérieur 
	lumSuf : null,		// Luminosité minimale à l 'extérieur pour chauffer le bâtiment
	co2	   : null,		// Consigne de CO2 maximale

	constructor : function() {
		this.lum     = 500;		// lux
		this.temp    = 19;		// °C
		this.nuit    = 100;		// lux
		this.jourSuf = 300;		// lux
		this.tempSuf = 15;		// °C
		this.lumSuf  = 500;		// lux
		this.co2	 = 300;		// ppm
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

define CaptCO2 {
	value : null,

	constructor : function(value) {
		this.value = value;
	},

	getValue : function() {
		return this.value;
	},
	setValue : function(value) {
		this.value = value;
	}
}

define VMC {
	etat : null,
	value: null,

	constructor : function(etat, value) {
		this.etat = etat;
		this.value = value;
	},
	getEtat : function() {
		return this.etat;
	},
	getValue : function() {
		return this.value;
	},
	setV1 : function() {
		this.value = 1;
	}, 
	setV2 : function() {
		this.value = 2;
	}
}
