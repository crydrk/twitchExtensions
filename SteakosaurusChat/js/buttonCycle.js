function randomizeStartingIndices()
{
	monsterImageIndex = Math.floor(Math.random() * 3);
	hatImageIndex = Math.floor(Math.random() * 44);
	cycleMonsterImage();
	cycleHatImage();
}

function connectFunctionsToButtons()
{
	document.getElementById("hatLeftButton").onclick = hatArrowLeft;
	document.getElementById("hatRightButton").onclick = hatArrowRight;
	document.getElementById("monsterLeftButton").onclick = monsterArrowLeft;
	document.getElementById("monsterRightButton").onclick = monsterArrowRight;
	document.getElementById("submitButton").onclick = submitMonster;
}

function submitMonster()
{
	document.getElementById("submitButton").src = "graphics/textCopied.png";
	document.getElementById("submitButton").style = "width:90px;height:45px;";
	
	var name = document.getElementById("name").value;
	
	if (name == "")
	{
		name = "MrNoName";
	}
	
	var copyValue = "A " + monsterNameArray[monsterImageIndex] + " named " + name + " wearing a " + hatNameArray[hatImageIndex];
	
	var textArea = document.createElement("textarea");
	textArea.value = copyValue;
	
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";
	
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	
	var successful = document.execCommand('copy');
	
	document.body.removeChild(textArea);
}

function cycleMonsterImage()
{
	document.getElementById("submitButton").src = "graphics/sendIt.png";
	document.getElementById("submitButton").style = "width:90px;height:45px;";
	
	console.log(monsterImageIndex);
	
	var gallery = document.getElementById("monsterGallery");
	
	gallery.removeChild(gallery.lastChild);
	
	var child = gallery.appendChild(monsterImgArray[monsterImageIndex]);
	child.style = "width:90px;height:120px;";
	
}

function cycleHatImage()
{
	document.getElementById("submitButton").src = "graphics/sendIt.png";
	document.getElementById("submitButton").style = "width:90px;height:45px;";
	
	console.log(hatImageIndex);
	
	var gallery = document.getElementById("hatGallery");
	
	gallery.removeChild(gallery.lastChild);
	
	var child = gallery.appendChild(hatImgArray[hatImageIndex]);
	child.style = "width:90px;height:90px;";
	
}

function monsterArrowLeft()
{
	monsterImageIndex -= 1;
	if (monsterImageIndex < 0)
	{
		monsterImageIndex = monsterImgArray.length - 1;
	}
	
	cycleMonsterImage();
}

function monsterArrowRight()
{
	monsterImageIndex += 1;
	if (monsterImageIndex == monsterImgArray.length)
	{
		monsterImageIndex = 0;
	}
	
	cycleMonsterImage();
}

function hatArrowLeft()
{
	hatImageIndex -= 1;
	if (hatImageIndex < 0)
	{
		hatImageIndex = hatImgArray.length - 1;
	}
	
	cycleHatImage();
}

function hatArrowRight()
{
	hatImageIndex += 1;
	if (hatImageIndex == hatImgArray.length)
	{
		hatImageIndex = 0;
	}
	
	cycleHatImage();
}

document.addEventListener('DOMContentLoaded', function() {
   connectFunctionsToButtons();
   randomizeStartingIndices();
}, false);

var monsterNameArray = ['steakosaurus', 'mole', 'cactus'];

var monsterImageIndex = 0;
var monsterImgArray = new Array();

monsterImgArray[0] = new Image();
monsterImgArray[0].src = 'graphics/monster_steakosaurus.png';

monsterImgArray[1] = new Image();
monsterImgArray[1].src = 'graphics/monster_mole.png';

monsterImgArray[2] = new Image();
monsterImgArray[2].src = 'graphics/monster_cactus.png';


var hatNameArray = ['army helmet', 'astronaut helmet', 'ball cap', 'beach hat', 'beer hat', 'bike helmet', 'cactus hat',
	'captain hat', 'chef hat', 'cowboy hat', 'crown hat', 'detective hat', 'dino hat', 'diving helmet', 'elephant hat',
	'elf hat', 'fire helmet', 'french hat', 'fruit hat', 'gladiator helmet', 'graduation hat', 'hard hat', 'kid hat',
	'jester hat', 'knight hat', 'leprechaun hat', 'fedora hat', 'bowler hat', 'mushroom hat', 'party hat', 'pharaoh hat',
	'pirate hat', 'police hat', 'pope hat', 'safari hat', 'santa hat', 'shark hat', 'sombrero hat', 'umbrella hat',
	'july hat', 'unicorn hat', 'witch hat', 'top hat', 'viking helmet'];

var hatImageIndex = 0;
var hatImgArray = new Array();

hatImgArray[0] = new Image();
hatImgArray[0].src = 'graphics/001_hat_army.png';


hatImgArray[1] = new Image();
hatImgArray[1].src = 'graphics/002_hat_astronaut.png';


hatImgArray[2] = new Image();
hatImgArray[2].src = 'graphics/003_hat_baseball.png';


hatImgArray[3] = new Image();
hatImgArray[3].src = 'graphics/004_hat_beach.png';


hatImgArray[4] = new Image();
hatImgArray[4].src = 'graphics/005_hat_beer.png';


hatImgArray[5] = new Image();
hatImgArray[5].src = 'graphics/006_hat_bike.png';


hatImgArray[6] = new Image();
hatImgArray[6].src = 'graphics/007_hat_cactus.png';


hatImgArray[7] = new Image();
hatImgArray[7].src = 'graphics/008_hat_captain.png';


hatImgArray[8] = new Image();
hatImgArray[8].src = 'graphics/009_hat_chef.png';


hatImgArray[9] = new Image();
hatImgArray[9].src = 'graphics/010_hat_cowboy.png';


hatImgArray[10] = new Image();
hatImgArray[10].src = 'graphics/011_hat_crown.png';


hatImgArray[11] = new Image();
hatImgArray[11].src = 'graphics/012_hat_detective.png';


hatImgArray[12] = new Image();
hatImgArray[12].src = 'graphics/013_hat_dinosaur.png';


hatImgArray[13] = new Image();
hatImgArray[13].src = 'graphics/014_hat_diving.png';


hatImgArray[14] = new Image();
hatImgArray[14].src = 'graphics/015_hat_elephant.png';


hatImgArray[15] = new Image();
hatImgArray[15].src = 'graphics/016_hat_elf.png';


hatImgArray[16] = new Image();
hatImgArray[16].src = 'graphics/017_hat_fire.png';


hatImgArray[17] = new Image();
hatImgArray[17].src = 'graphics/018_hat_french.png';


hatImgArray[18] = new Image();
hatImgArray[18].src = 'graphics/019_hat_fruit.png';


hatImgArray[19] = new Image();
hatImgArray[19].src = 'graphics/020_hat_gladiator.png';


hatImgArray[20] = new Image();
hatImgArray[20].src = 'graphics/021_hat_graduation.png';


hatImgArray[21] = new Image();
hatImgArray[21].src = 'graphics/022_hat_construction.png';


hatImgArray[22] = new Image();
hatImgArray[22].src = 'graphics/023_hat_kids.png';


hatImgArray[23] = new Image();
hatImgArray[23].src = 'graphics/024_hat_jester.png';


hatImgArray[24] = new Image();
hatImgArray[24].src = 'graphics/025_hat_knight.png';


hatImgArray[25] = new Image();
hatImgArray[25].src = 'graphics/026_hat_leprechaun.png';


hatImgArray[26] = new Image();
hatImgArray[26].src = 'graphics/027_hat_fedora.png';


hatImgArray[27] = new Image();
hatImgArray[27].src = 'graphics/028_hat_bowler.png';


hatImgArray[28] = new Image();
hatImgArray[28].src = 'graphics/029_hat_toad.png';


hatImgArray[29] = new Image();
hatImgArray[29].src = 'graphics/030_hat_party.png';


hatImgArray[30] = new Image();
hatImgArray[30].src = 'graphics/031_hat_pharaoh.png';


hatImgArray[31] = new Image();
hatImgArray[31].src = 'graphics/032_hat_pirate.png';


hatImgArray[32] = new Image();
hatImgArray[32].src = 'graphics/033_hat_police.png';


hatImgArray[33] = new Image();
hatImgArray[33].src = 'graphics/034_hat_pope.png';


hatImgArray[34] = new Image();
hatImgArray[34].src = 'graphics/035_hat_safari.png';


hatImgArray[35] = new Image();
hatImgArray[35].src = 'graphics/036_hat_santa.png';


hatImgArray[36] = new Image();
hatImgArray[36].src = 'graphics/037_hat_shark.png';


hatImgArray[37] = new Image();
hatImgArray[37].src = 'graphics/038_hat_sombrero.png';


hatImgArray[38] = new Image();
hatImgArray[38].src = 'graphics/039_hat_umbrella.png';


hatImgArray[39] = new Image();
hatImgArray[39].src = 'graphics/040_hat_america.png';


hatImgArray[40] = new Image();
hatImgArray[40].src = 'graphics/041_hat_unicorn.png';


hatImgArray[41] = new Image();
hatImgArray[41].src = 'graphics/042_hat_witch.png';


hatImgArray[42] = new Image();
hatImgArray[42].src = 'graphics/043_hat_top.png';


hatImgArray[43] = new Image();
hatImgArray[43].src = 'graphics/044_hat_viking.png';
