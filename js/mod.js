let modInfo = {
	name: "Rock Floating in Space Game: ReTreed (or: The Tree Floating in Space)",
	id: "spacerock-wingedcatgirl",
	author: "wingedcatgirl",
	pointsName: "breath",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Server Of A Cat Whomst Create",
	discordLink: "https://discord.gg/V5Kbh8Q",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.018",
	name: "Almost...",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.018</h3><br>
		- Added islets<br><br>

	<h3>v0.015</h3><br>
		- Added flux<br><br>

	<h3>v0.01</h3><br>
		- Followed a tutorial for a few minutes.<br>We haven't even ported the Orteil content 😅`

let winText = `Congration on reaching the end of what we've made so far! But the game's not even remotely done lol`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('You',11)) gain = gain.times(2)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}