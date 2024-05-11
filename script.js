let character = document.getElementById('character');
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));

let ground = document.getElementById("ground");
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue("bottom"));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue("height"));

let isJumping = false;
let upTime;
let downTime;

let down;
function showScore() {
				score+= 5;
		
				displayScore.innerText = score;
}
down = setInterval(showScore, 1000);
let score = 0;

	function jump() {
								if(isJumping) return;
				upTime = setInterval(() => {
								if(characterBottom >= groundHeight + 250) {
												clearInterval(upTime);
												downTime = setInterval(() =>{
																if(characterBottom <= groundHeight + 10){
																				clearInterval(downTime);
																				isJumping = false;
																}
																characterBottom -= 10;
								character.style.bottom = characterBottom + 'px';
												}, 3)
								}
								characterBottom += 11;
								character.style.bottom = characterBottom + 'px';
								isJumping = true;
				},11);
	}
function generateObstacle(){
				let obstacles = document.querySelector('.obstacles');
				let obstacle = document.createElement('div');
				obstacle.setAttribute('class', 'obstacle');
				obstacles.appendChild(obstacle);
				let obstacleRight = -30;
				let obstacleWidth = 30;
				let obstacleBottom = 100;
				let obstacleHeight = Math.floor(Math.random() * 40) + 40;
				obstacle.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
				function moveObstacle() {
								obstacleRight += 10;
								obstacle.style.right = obstacleRight + 'px';
								obstacle.style.width = obstacleWidth + 'px';
								obstacle.style.bottom = obstacleBottom + 'px';
								obstacle.style.height = obstacleHeight +'px';
								if(characterRight >= obstacleRight - characterWidth && characterRight <= obstacleRight + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight) {
												alert("gameover score:" + score);
												clearInterval(obstacleInterval);
												clearTimeout(obstacleTimeout);
												location.reload();
								}
				}
				let obstacleInterval = setInterval(moveObstacle, 15);
				let obstacleTimeout = setTimeout(generateObstacle, 1500);
}
generateObstacle();
function control() {
				jump();
}
let displayScore = document.querySelector('.score');


function refresh() {
				location.reload();
}
