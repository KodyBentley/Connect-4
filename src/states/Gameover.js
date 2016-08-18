import MenuButton from 'objects/MenuButton';



export default class Gameover extends Phaser.State {

	
	init() {}



	create() {
		//Add back ground image
		this.add.image(0, 0, 'gameBackground');

		//Create "Winner" sprite for game over state
		let gameOverTitle = this.game.add.sprite(795, 475, "winner");
		gameOverTitle.alpha = 0;
		gameOverTitle.anchor.set(0.5);

		//Tween to flash game over text
		this.game.add.tween(gameOverTitle).to({
			alpha: 1
		}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);


		//Add play button for this state 
		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5, 800, 'playButton', 'Game');

		//Added onOver and onOut tweens for play button
		buttonPlay.events.onInputOver.add(this.onOver, this);
		buttonPlay.events.onInputOut.add(this.onOut, this);


	}

	//Tween play button when the mouse is over
	onOver(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 2.5,
			y: 2.5
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOut(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 2,
			y: 2
		}, 350, Phaser.Easing.Linear.In).start();

	}


}