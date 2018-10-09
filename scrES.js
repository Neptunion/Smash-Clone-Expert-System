function diffImage(img)  {
	if(img.src.match("1")) img.src = "2.png";
	else if(img.src.match("2")) img.src = "3.png";
	else if(img.src.match("3")) img.src = "1.png";
}

//declare variables
var itemSelected; 
// variables to store student image
var showImg = document.getElementById("img");
var attribute = 'WaveDash';

function submitChoice() {
	//store item selected from listbox
	var itemSelected = document.getElementById("itemList");
	var textSelect = itemSelected.options[itemSelected.selectedIndex].text;
	//display selection
	if (textSelect == 'Yes' && attribute == 'WaveDash') {
		//change items in listbox to hair colour attributes
		textSelect = ''
		attribute = 'PixelArt';
		checkAttribute();
	} 
	if (textSelect == 'No' && attribute == 'WaveDash') {
		textSelect = ''
		attribute = 'PixelArt2';
		checkAttribute();
	}

	if (textSelect == 'Yes' && attribute == 'PixelArt') {
		textSelect = ''
		attribute = 'Items2';
		checkAttribute();
	}
	if (textSelect == 'No' && attribute == 'Items2') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Rivals of Aether is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/383980/Rivals_of_Aether/"> steam page</a> "RIVALS OF AETHER is an indie fighting game set in a world where warring civilizations summon the power of Fire, Water, Air, and Earth. Choose a Rival to bring into the battlefield and manipulate the powers of the classical elements and animal movement. Praised for its competitive gameplay and intensive training tools, Rivals of Aether is the perfect entry to the Platform Fighter genre."';
		document.getElementById("img").src = "images/Rivals.png";
	}
	if (textSelect == 'No' && attribute == 'PixelArt') {
		textSelect = ''
		attribute = 'Items';
		checkAttribute();
	}
	if (textSelect == 'Yes' && attribute == 'Items') {
		clearList();
		document.getElementById('conclusion').innerHTML ='DashBlitz is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/786620/Dash_Blitz/"> steam page</a> "Dash Blitz is a lightning-fast platform fighter with streamlined mechanics and controls."';
		document.getElementById("img").src = "images/DashBlitz.png";
	}
	if (textSelect == 'No' && attribute == 'Items') {
		textSelect = ''
		attribute = 'CR';
		checkAttribute();
	}
	if (textSelect == 'Yes' && attribute == 'CR') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Icons Combat Arena is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/684200/Icons_Combat_Arena/"> steam page</a> "Icons: Combat Arena is a fast-paced platform fighting game offering players tight controls, powerful special attacks, online multiplayer, and the chance to become an iconic hero."';
		document.getElementById("img").src = "images/Icons.png";
	}
	if (textSelect == 'No' && attribute == 'CR') {
		textSelect = ''
		attribute = 'Crossover';
		checkAttribute();
	}
	if (textSelect == 'Yes' && attribute == 'Crossover') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Brawlout is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/263720/Brawlout/"> steam page</a> "Brawlout is the party fighting game, designed for couch play, online ranked matches and competitive tournaments."';
		document.getElementById("img").src = "images/Brawlout.png";
	}
	if (textSelect == 'No' && attribute == 'Crossover') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Slap City is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/725480/Slap_City/"> steam page</a> "Slap City is a streamlined platform fighter with characters and locations from the Ludosity universe! Slap your way through multiplayer modes like Battle and Slap Ball either locally or online!"';
		document.getElementById("img").src = "images/SlapCity.png";
	}
	if (textSelect == 'Yes' && attribute == 'PixelArt2') {
		textSelect = ''
		attribute = 'Crossover2';
		checkAttribute();	
	}
	if (textSelect == 'No' && attribute == 'PixelArt2') {
		textSelect = ''
		attribute = 'CR2';
		checkAttribute();	
	}
	if (textSelect == 'Yes' && attribute == 'Crossover2') {
		textSelect = ''
		clearList();
		document.getElementById('conclusion').innerHTML ='Indie Pogo is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/818210/Indie_Pogo/"> steam page</a> "Indie Pogo is a platform brawler game for 2-4 players about bouncing, ricocheting, and pogoing your friends into oblivion! Gather your friends for 2-4 player local romps, or climb the online ladder in the bounciest of battles."';
		document.getElementById("img").src = "images/IndiePogo.png";
	}
	if (textSelect == 'No' && attribute == 'Crossover2') {
		textSelect = ''
		attribute = 'Online2';
		checkAttribute();		
	}
	if (textSelect == 'Yes' && attribute == 'CR2') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Brawlhalla is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/291550/Brawlhalla/"> steam page</a> "Brawlhalla is an epic platform fighter for up to 8 players online or locally. And it\'s free! Join casual free-for-alls, queue for ranked matches, or make a custom room with your friends."';
		document.getElementById("img").src = "images/Brawlhalla.png";
	}
	if (textSelect == 'No' && attribute == 'CR2') {
		textSelect = ''
		attribute = 'Online';
		checkAttribute();	
	}
	if (textSelect == 'Yes' && attribute == 'Online') {
		clearList();
		document.getElementById('conclusion').innerHTML ='King of the Couch: Zoovival is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/724350/King_of_the_Couch_Zoovival/"> steam page</a> "Zoovival is the latest evolution of the platform battle arena game genre! Fight as an animal, with a wide assortment of weapons, on multiple unique battle arenas"';
		document.getElementById("img").src = "images/Zoo.png";
	}
	if (textSelect == 'No' && attribute == 'Online') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Sky Hook is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/361350/Skyhook/"> steam page</a> In Skyhook you "Fight with grappling hooks in this party brawler for one to four players. Play as a treasure hunting cat or a land swimming shark as you swing around the stage taking out your opponents."';
		document.getElementById("img").src = "images/Skyhook.png";	
	}
	if (textSelect == 'Yes' && attribute == 'Items2') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Roof Rage is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/724300/Roof_Rage/"> steam page</a> "Roof Rage is a Martial Arts Platform Fighter featuring epic rooftop battles. Play with up to 8 players locally or 1vs1 online."';
		document.getElementById("img").src = "images/RoofRage.png";	
	}
	if (textSelect == 'No' && attribute == 'Online2') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Gender Bender is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/682270/Gender_Bender/"> steam page</a> "Gender Bender is an action packed 2D/pixel art styled Fighter filled with a variety of genders and maps. Clash with friends and demonstrate your fighting game prowess using any of the provided genders. Gender Bender provides a party experience like no other when it comes to local gameplay with its upbeat atmosphere, humorous mood, and controller support."';
		document.getElementById("img").src = "images/GenderBender.png";
	}
	if (textSelect == 'Yes' && attribute == 'Online2') {
		clearList();
		document.getElementById('conclusion').innerHTML ='Fighties is the game for you';
		document.getElementById('conclusionexplain').innerHTML ='According to it\'s <a href="https://store.steampowered.com/app/362810/Fighties/"> steam page</a> "Fighties is a fast paced 2D platform fighter. Choose from a wide selection of Fighties each with their own unique play style. Beat down your opponents to become the strongest Fightie of them all."';
		document.getElementById("img").src = "images/Fighties.png";	
	}

	function clearList() {
		var x = document.getElementById('itemList')
		var i;
		for (i = x.options.length - 1; i >= 0; i--) {
			x.remove(i);
		}
	}

	if (document.getElementById("conclusion").innerHTML != "Conclusion...") {
	document.getElementById('form').style.visibility ='hidden';
	document.getElementById('form').style.height = '0';
}

	function checkAttribute() {
		clearList()

		var x = document.getElementById("itemList");
		var c = document.createElement("option");
		var d = document.createElement("option");
		var e = document.createElement("option");
		var f = document.createElement("option");

		c.text = "Yes";
		d.text = "No";
		x.options.add(c,0);
		x.options.add(d,1);

		switch (attribute) {
		case 'PixelArt':
			document.getElementById("prompt").innerHTML = "Should the game have Pixel Art?";
			document.getElementById("explain").innerHTML = "Pixel Art is a form of digital art used in the creations of games to give them a retro aesthetic";
			document.getElementById("explainimage").src = "images/PixelArt.png";
			document.getElementById("imagetext").innerHTML = "Super Mario as well as many other games from the 80s-90s have inspired modern games to adapt the art style they used out of necessity";
			break;
		case 'PixelArt2':
			document.getElementById("prompt").innerHTML = "Should the game have Pixel Art?";
			document.getElementById("explain").innerHTML = "Pixel Art is a form of digital art used in the creations of games to give them a retro aesthetic";
			document.getElementById("explainimage").src = "images/PixelArt.png";
			document.getElementById("imagetext").innerHTML = "Super Mario as well as many other games from the 80s-90s have inspired modern games to adapt the art style they used out of necessity";
			break;
		case 'Items':
			document.getElementById("prompt").innerHTML = "Should the game have Items?";
			document.getElementById("explain").innerHTML = "An item is an object that appears randomly on the stage that players can use to affect the game, games with a more competitive slant tend to neglect items while games which want to stay true to Smash's origins as a party game tend to include them.";
			document.getElementById("explainimage").src = "images/Items.png";
			document.getElementById("imagetext").innerHTML = "Illustrations of the items in the Super Smash Brothers franchise";
			break;
		case 'Items2':
			document.getElementById("prompt").innerHTML = "Should the game have Items?";
			document.getElementById("explain").innerHTML = "An item is an object that appears randomly on the stage that players can use to affect the game, games with a more competitive slant tend to neglect items while games which want to stay true to Smash's origins as a party game tend to include them.";
			document.getElementById("explainimage").src = "images/Items.png";
			document.getElementById("imagetext").innerHTML = "Illustrations of the items in the Super Smash Brothers franchise";
			break;
		case 'CR':
			document.getElementById("prompt").innerHTML = "Should the game have a playable character rotation?";
			document.getElementById("explain").innerHTML = "Playable character rotation is a mechanic used in many free to play games which generally gives players access to a certain amount of characters at all times, which characters the player has access to changes from week to week and to access a particular character at all times they must buy it using in-game currency.";
			document.getElementById("explainimage").src = "images/CR.png";
			document.getElementById("imagetext").innerHTML = "The character select screen in the free to play MOBA League of Legends, the characters with exclamation marks in the top left corner of their thumbnail are characters currently available from the free rotation, the others are characters the player has bought";
			break;
		case 'Crossover':
			document.getElementById("prompt").innerHTML = "Should the game have crossover characters?";
			document.getElementById("explain").innerHTML = "Crossover characters are characters from other games which the player can play as in the game";
			document.getElementById("explainimage").src = "images/Crossover.png";
			document.getElementById("imagetext").innerHTML = "The playable characters in the Super Smash Brother's series are almost entirely originally from other games and are therefore crossover characters";
			break;
		case 'Crossover2':
			document.getElementById("prompt").innerHTML = "Should the game have crossover characters?";
			document.getElementById("explain").innerHTML = "Crossover characters are characters from other games which the player can play as in the game";
			document.getElementById("explainimage").src = "images/Crossover.png";
			document.getElementById("imagetext").innerHTML = "The playable characters in the Super Smash Brother's series are almost entirely originally from other games and are therefore crossover characters";
			break;
		case 'CR2':
			document.getElementById("prompt").innerHTML = "Should the game have a playable character rotation?";
			document.getElementById("explain").innerHTML = "Playable character rotation is a mechanic used in many free to play games which generally gives players access to a certain amount of characters at all times, which characters the player has access to changes from week to week and to access a particular character at all times they must buy it using in-game currency.";
			document.getElementById("explainimage").src = "images/CR.png";
			document.getElementById("imagetext").innerHTML = "The character select screen in the free to play MOBA League of Legends, the characters with exclamation marks in the top left corner of their thumbnail are characters currently available from the free rotation, the others are characters the player has bought";
			break;
		case 'Online':
			document.getElementById("prompt").innerHTML = "Should the game have Online Gameplay?";
			document.getElementById("explain").innerHTML = "Games with Online Gameplay allow you to play against other people who own the game over the internet without having to have them at your house";
			document.getElementById("explainimage").src = "images/Online.png";
			document.getElementById("imagetext").innerHTML = "Overwatch is a multiplayer FPS game with absolutely no singleplayer gameplayer, besides playing matches against bots"
			break;
		case 'Online2':
			document.getElementById("prompt").innerHTML = "Should the game have Online Gameplay?";
			document.getElementById("explain").innerHTML = "Games with Online Gameplay allow you to play against other people who own the game over the internet without having to have them at your house";
			document.getElementById("explainimage").src = "images/Online.png";
			document.getElementById("imagetext").innerHTML = "Overwatch is a multiplayer FPS game with absolutely no singleplayer gameplayer, besides playing matches against bots";
			break;
		}
	}
}

//refresh the page when function called
function resetPage() {
	location.reload();
}

