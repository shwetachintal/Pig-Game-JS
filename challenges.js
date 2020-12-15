/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,isPlaying,lasdice;

init();



//document.querySelector('#current-'+activePlayer).textContent = dice;                //textContent treats as plain text
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';   //innerHTML treats single quotes as html code on RHS
// select by class i.e (.) and change display property to none

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(isPlaying){
		//Do something 1.Random Number
		var previousDice = 0;
		var dice = Math.floor(Math.random() * 6) +1;
	
		//Display Result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-'+dice+'.png';
	
	
		//3.Update round score IF only rolled number is NOT 1
		if(lasdice === 6 && dice === 6){
			//loose score 
			scores[activePlayer] = 0;
			nextPlayer();
			
		}else if(dice !== 1){
			//Add score & display on interface
			roundScore += dice;
			document.querySelector('#current-'+activePlayer).textContent = roundScore; 
			
		}else{
			nextPlayer();
		}
		lastDice = dice;
	}
	
	
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(isPlaying){
		//Add CURRENT score to GLOBAL 
		scores[activePlayer] += roundScore;
	
		//Update UI
		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
	
		//Check if player won the game
		if(scores[activePlayer] >= 20){
			document.querySelector('#name-'+activePlayer).textContent = 'Winner!!';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			isPlaying = false;
		}
	
		nextPlayer();
	}	
});

function nextPlayer(){
	//Next Player
		activePlayer === 0? activePlayer = 1: activePlayer =0;
		roundScore = 0;
		
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		
		document.querySelector('.dice').style.display = 'none';
	
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0
	isPlaying = true;
	
	document.querySelector('.dice').style.display = 'none'; 
	
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	
	document.querySelector('.player-0-panel').classList.add('active');
}
























































