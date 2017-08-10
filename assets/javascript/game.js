//Javascript file for Crystals Collector
//Mark Snodgrass 2017

$(document).ready(function(){

var gemRed = 0;
var gemBlue = 0;
var	gemGreen = 0;
var gemPurp = 0;

var magicNumber = 0;
var userTotal= 0;


var gameData = {
	wins:0,
	loss:0,

	updateWins: function(){
		this.wins = this.wins + 1;
		$("#win").html("Wins: " + this.wins);
	},

	updateLoss: function(){
		this.loss = this.loss + 1;
		$("#loss").html("Losses: " + this.loss);
	}
};

function generateMagic(){
	magicNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$("#number").html("Magic Number: " + magicNumber);
};

function generateGems(){
	gemRed = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	gemBlue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	gemGreen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	gemPurp = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
};




generateMagic();

generateGems();

//Button clicks for Gems

$("#redgem").on('click', function(){

	userTotal = userTotal + gemRed;
	$("#guess").html("Your Total: " + userTotal);
console.log(userTotal);
	if(userTotal === magicNumber){
		gameData.updateWins();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};

	if(userTotal > magicNumber){
		gameData.updateLoss();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};
})

$("#bluegem").on('click', function(){

	userTotal = userTotal + gemBlue;
	$("#guess").html("Your Total: " + userTotal);
console.log(userTotal);
	if(userTotal === magicNumber){
		gameData.updateWins();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};

	if(userTotal > magicNumber){
		gameData.updateLoss();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};
})

$("#greengem").on('click', function(){

	userTotal = userTotal + gemGreen;
	$("#guess").html("Your Total: " + userTotal);
console.log(userTotal);
	if(userTotal === magicNumber){
		gameData.updateWins();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};

	if(userTotal > magicNumber){
		gameData.updateLoss();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};
})

$("#purpgem").on('click', function(){

	userTotal = userTotal + gemPurp;
	$("#guess").html("Your Total: " + userTotal);
console.log(userTotal);
	if(userTotal === magicNumber){
		gameData.updateWins();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};

	if(userTotal > magicNumber){
		gameData.updateLoss();
		userTotal = 0;
		$("#guess").html("Your Total: " + userTotal);
		generateMagic();
		generateGems();
	};
})



});