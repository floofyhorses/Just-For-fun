	



	function coolSideHustle() {
		var type = ["Professional", "Super", "Executive", "Seasonal", "Home-based", "Musical", "Assistant", "Associate", "Junior", "Senior", "V.I.P.", "Glorified", "Designated", "Temporary"];
		var thing = ["hot dog", "poodle", "cat", "jewelry", "handicrafts", "cupcake", "computer", "money", "crochet", "online", "toys", "comic", "book", "house", "hair", "webcam", "pickle"];
		var doer = ["person","processor", "maker", "washer", "purveyor", "seller", "marketer", "programmer", "taster", "concierge", "curator", "accountant", "manager", "inspector", "moderator", "advisor"];

	
	    var rand1 = Math.floor(Math.random() * type.length);
	    var rand2 = Math.floor(Math.random() * thing.length);
	    var rand3 = Math.floor(Math.random() * doer.length);

	    var sideHustle = `${type[rand1]} ${thing[rand2]} ${doer[rand3]}`;
	    alert(sideHustle);

	}

	coolSideHustle();
